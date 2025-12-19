#!/usr/bin/env python3
"""
Melksham Mental Health - Professional Desktop Application
A PyQt6-based desktop GUI with full branding support, favorites, export, and more
"""

import sys
import json
import os
from pathlib import Path
from datetime import datetime
from PyQt6.QtWidgets import (
    QApplication, QMainWindow, QWidget, QVBoxLayout, QHBoxLayout,
    QPushButton, QLabel, QComboBox, QTextEdit, QScrollArea,
    QTabWidget, QListWidget, QListWidgetItem, QMessageBox,
    QSpinBox, QCheckBox, QGridLayout, QFrame, QDialog,
    QLineEdit, QDialogButtonBox, QProgressBar, QSplitter,
    QStatusBar, QFileDialog
)
from PyQt6.QtCore import Qt, QTimer, pyqtSignal, QThread, QSize
from PyQt6.QtGui import QFont, QColor, QIcon, QPixmap, QClipboard
from PyQt6.QtPrintSupport import QPrinter, QPrintDialog

from generator import ContentGenerator
from formatter import PostFormatter
from user_config import UserConfig
from setup_wizard import SetupWizardDialog, ProfileSettingsDialog


class MelkshamMentalHealthApp(QMainWindow):
    """Professional desktop application for mental health content creation"""

    def __init__(self):
        super().__init__()
        
        # Set up paths - handle PyInstaller bundled app, running from src, and root
        if getattr(sys, 'frozen', False):
            # Running as compiled exe (PyInstaller)
            base_path = Path(sys._MEIPASS)
        else:
            # Running as script
            base_path = Path(__file__).resolve().parent.parent
        
        self.assets_path = base_path / "assets"
        self.data_path = base_path / "data"
        
        # Debug: print the paths being used
        print(f"Assets path: {self.assets_path}")
        print(f"Assets exists: {self.assets_path.exists()}")
        print(f"Data path: {self.data_path}")
        print(f"Data exists: {self.data_path.exists()}")
        
        # Initialize user configuration
        self.user_config = UserConfig()
        
        # Initialize generator with correct data path
        self.generator = ContentGenerator(str(self.data_path))
        self.formatter = PostFormatter()
        self.current_content = ""
        self.current_title = ""
        self.favorites = []
        self.load_favorites()
        
        self.init_ui()
        self.setup_window()
        self.load_logo()
        
        # Show setup wizard on first run
        self.check_first_run()

    def check_first_run(self):
        """Check if this is the first run and show setup wizard"""
        if not self.user_config.is_setup_complete():
            # Delay to ensure main window is shown first
            QTimer.singleShot(500, self.show_setup_wizard)
    
    def show_setup_wizard(self):
        """Show the setup wizard dialog"""
        wizard = SetupWizardDialog(self.user_config, self)
        wizard.exec()

    def setup_window(self):
        """Setup window properties"""
        self.setWindowTitle("Melksham Mental Health - Post Creator")
        # Start maximized/fullscreen
        self.showMaximized()
        self.setMinimumSize(1000, 700)
        
        # Create status bar
        self.status_label = QLabel("Ready")
        self.statusBar().addWidget(self.status_label)

    def load_logo(self):
        """Load and set application logo"""
        logo_path = self.assets_path / "logo.png"
        if logo_path.exists():
            icon = QIcon(str(logo_path))
            self.setWindowIcon(icon)

    def init_ui(self):
        """Initialize the user interface"""
        central_widget = QWidget()
        self.setCentralWidget(central_widget)
        main_layout = QHBoxLayout()
        central_widget.setLayout(main_layout)

        # Create splitter for resizable panels
        splitter = QSplitter(Qt.Orientation.Horizontal)
        
        # Left panel - Controls
        left_panel = self.create_left_panel()
        splitter.addWidget(left_panel)
        
        # Right panel - Content Display
        right_panel = self.create_right_panel()
        splitter.addWidget(right_panel)
        
        # Left panel smaller, right panel bigger
        splitter.setStretchFactor(0, 1)
        splitter.setStretchFactor(1, 3)
        
        main_layout.addWidget(splitter)
        self.apply_styling()

    def create_left_panel(self):
        """Create the left control panel"""
        panel = QFrame()
        panel.setFrameStyle(QFrame.Shape.StyledPanel | QFrame.Shadow.Raised)
        layout = QVBoxLayout()
        layout.setContentsMargins(15, 10, 15, 10)
        layout.setSpacing(8)

        # Logo Section - BIGGER and fills area properly
        self.logo_label = QLabel()
        self.logo_label.setAlignment(Qt.AlignmentFlag.AlignCenter)
        self.logo_label.setMinimumHeight(180)
        self.logo_label.setStyleSheet("background-color: #000000; border: none; padding: 0px;")
        self.load_logo_image()
        layout.addWidget(self.logo_label)

        # Header
        header = QLabel("MELKSHAM MENTAL HEALTH")
        header_font = QFont("Arial Black", 16, QFont.Weight.Bold)
        header.setFont(header_font)
        header.setAlignment(Qt.AlignmentFlag.AlignCenter)
        header.setStyleSheet("color: #ff6600;")
        layout.addWidget(header)

        subtitle = QLabel("⚡ REAL STRUGGLES. REAL SUPPORT ⚡")
        subtitle_font = QFont("Arial", 10, QFont.Weight.Bold)
        subtitle.setFont(subtitle_font)
        subtitle.setAlignment(Qt.AlignmentFlag.AlignCenter)
        subtitle.setStyleSheet("color: #ff9900;")
        layout.addWidget(subtitle)

        # Divider
        divider = QFrame()
        divider.setFrameStyle(QFrame.Shape.HLine | QFrame.Shadow.Sunken)
        layout.addWidget(divider)

        # Tabs for different generation modes
        tabs = QTabWidget()
        tabs.setTabPosition(QTabWidget.TabPosition.North)
        tabs.setUsesScrollButtons(False)
        tabs.tabBar().setExpanding(True)
        tabs.tabBar().setDocumentMode(True)
        tabs.setStyleSheet("""
            QTabBar::tab {
                padding: 5px 8px;
                font-size: 10px;
                font-weight: bold;
                background-color: #2a2a2a;
                color: #ff9900;
                border: 1px solid #ff6600;
                border-bottom: none;
            }
            QTabBar::tab:selected {
                background-color: #ff6600;
                color: white;
            }
            QTabBar::tab:hover {
                background-color: #3a3a3a;
            }
            QTabWidget::pane {
                border: 2px solid #ff6600;
            }
        """)

        tabs.addTab(self.create_quick_generate_tab(), "Quick")
        tabs.addTab(self.create_advanced_tab(), "Advanced")
        tabs.addTab(self.create_resources_tab(), "Resources")
        tabs.addTab(self.create_favorites_tab(), "Favorites")
        tabs.addTab(self.create_settings_tab(), "Settings")

        layout.addWidget(tabs)

        # Footer
        footer = QLabel("v2.0 Elite - Desktop Edition")
        footer_font = QFont("Segoe UI", 8)
        footer.setFont(footer_font)
        footer.setAlignment(Qt.AlignmentFlag.AlignCenter)
        footer.setStyleSheet("color: #999;")
        layout.addWidget(footer)

        panel.setLayout(layout)
        return panel

    def load_logo_image(self):
        """Load logo image from assets, prefer your black-background version if present"""
        preferred_names = [
            "logo black background.png",
            "logo_black.png",
            "logo with backgrounds.png",
            "logo_with_black.png"
        ]
        logo_path = None
        for name in preferred_names:
            candidate = self.assets_path / name
            if candidate.exists():
                logo_path = candidate
                break
        if logo_path is None:
            logo_path = self.assets_path / "logo.png"

        if logo_path.exists():
            pixmap = QPixmap(str(logo_path))
            if not pixmap.isNull():
                # Scale logo to fill the container width properly
                scaled = pixmap.scaledToHeight(175, Qt.TransformationMode.SmoothTransformation)
                self.logo_label.setPixmap(scaled)
                self.logo_label.setScaledContents(False)

    def create_quick_generate_tab(self):
        """Create the quick generate tab"""
        widget = QWidget()
        layout = QVBoxLayout()
        layout.setSpacing(10)

        # Generate Random Button (highlighted)
        btn_random = QPushButton("🎲 GENERATE RANDOM POST")
        btn_random.setMinimumHeight(50)
        btn_random.setFont(QFont("Arial Black", 12, QFont.Weight.Bold))
        btn_random.clicked.connect(self.generate_random_post)
        layout.addWidget(btn_random)

        # Separator
        separator = QFrame()
        separator.setFrameShape(QFrame.Shape.HLine)
        separator.setStyleSheet("background-color: #ff6600;")
        layout.addWidget(separator)
        
        # Custom Generation Section Header
        custom_header = QLabel("🔧 CUSTOM GENERATION")
        custom_header.setFont(QFont("Arial Black", 11, QFont.Weight.Bold))
        custom_header.setStyleSheet("color: #ff6600;")
        layout.addWidget(custom_header)

        layout.addSpacing(5)

        # Content Type Section
        type_label = QLabel("📝 Content Type:")
        type_label.setFont(QFont("Segoe UI", 10, QFont.Weight.Bold))
        layout.addWidget(type_label)
        
        self.combo_content_type = QComboBox()
        self.combo_content_type.addItems([
            "Any Type", "Story", "Quote", "Advice", "Affirmation",
            "Educational", "Resource", "Crisis Support", "Seasonal"
        ])
        self.combo_content_type.setMinimumHeight(35)
        layout.addWidget(self.combo_content_type)

        layout.addSpacing(10)

        # Topic Section
        topic_label = QLabel("🎯 Topic:")
        topic_label.setFont(QFont("Segoe UI", 10, QFont.Weight.Bold))
        layout.addWidget(topic_label)
        
        self.combo_topic = QComboBox()
        self.combo_topic.setMinimumHeight(35)
        self.load_topics()
        layout.addWidget(self.combo_topic)

        layout.addSpacing(10)

        # Audience Section
        audience_label = QLabel("👥 Audience:")
        audience_label.setFont(QFont("Segoe UI", 10, QFont.Weight.Bold))
        layout.addWidget(audience_label)
        
        self.combo_audience = QComboBox()
        self.combo_audience.addItems([
            "Any Audience", "General", "Young Adults", "Adults", "Elderly",
            "Healthcare Workers", "Students", "Parents", "LGBTQ+"
        ])
        self.combo_audience.setMinimumHeight(35)
        layout.addWidget(self.combo_audience)

        layout.addSpacing(15)
        
        # User Notes Section
        notes_label = QLabel("📋 Your Notes (optional):")
        notes_label.setFont(QFont("Segoe UI", 10, QFont.Weight.Bold))
        layout.addWidget(notes_label)
        
        self.user_notes = QLineEdit()
        self.user_notes.setPlaceholderText("Add any personal context...")
        self.user_notes.setMinimumHeight(35)
        layout.addWidget(self.user_notes)

        layout.addSpacing(20)

        # SINGLE GENERATE BUTTON AT BOTTOM
        btn_generate = QPushButton("🚀 GENERATE WITH OPTIONS")
        btn_generate.setMinimumHeight(60)
        btn_generate.setFont(QFont("Arial Black", 12, QFont.Weight.Bold))
        btn_generate.setStyleSheet("""
            QPushButton {
                background-color: #ff6600;
                color: white;
                border: 3px solid #ff9900;
                border-radius: 8px;
            }
            QPushButton:hover {
                background-color: #ff9900;
            }
        """)
        btn_generate.clicked.connect(self.generate_with_options)
        layout.addWidget(btn_generate)

        layout.addStretch()
        widget.setLayout(layout)
        return widget

    def create_advanced_tab(self):
        """Create the advanced options tab"""
        widget = QWidget()
        layout = QVBoxLayout()
        layout.setSpacing(8)

        # Batch Generation
        batch_label = QLabel("📦 Batch Generation:")
        batch_label.setFont(QFont("Segoe UI", 10, QFont.Weight.Bold))
        layout.addWidget(batch_label)
        
        batch_layout = QHBoxLayout()
        batch_layout.addWidget(QLabel("Count:"))
        self.spin_batch = QSpinBox()
        self.spin_batch.setMinimum(1)
        self.spin_batch.setMaximum(100)
        self.spin_batch.setValue(5)
        batch_layout.addWidget(self.spin_batch)
        batch_layout.addStretch()
        layout.addLayout(batch_layout)

        btn_batch = QPushButton("Generate Batch")
        btn_batch.clicked.connect(self.generate_batch)
        layout.addWidget(btn_batch)

        layout.addSpacing(15)

        # Search
        search_label = QLabel("🔍 Search Content:")
        search_label.setFont(QFont("Segoe UI", 10, QFont.Weight.Bold))
        layout.addWidget(search_label)
        
        self.search_input = QLineEdit()
        self.search_input.setPlaceholderText("Enter keyword...")
        layout.addWidget(self.search_input)

        btn_search = QPushButton("Search")
        btn_search.clicked.connect(self.search_content)
        layout.addWidget(btn_search)

        layout.addStretch()
        widget.setLayout(layout)
        return widget

    def create_resources_tab(self):
        """Create the resources tab with live API data"""
        widget = QWidget()
        layout = QVBoxLayout()
        layout.setSpacing(12)

        # Live Resources Header
        header = QLabel("🌐 Live Mental Health Resources")
        header.setFont(QFont("Arial Black", 11, QFont.Weight.Bold))
        header.setStyleSheet("color: #ff6600;")
        layout.addWidget(header)

        # Fetch Latest Resources Button
        btn_fetch = QPushButton("🔄 Fetch Latest Resources from Web")
        btn_fetch.setMinimumHeight(50)
        btn_fetch.clicked.connect(self.fetch_online_resources)
        layout.addWidget(btn_fetch)

        layout.addSpacing(10)

        # Local Quick Access
        local_header = QLabel("📍 Local Quick Access:")
        local_header.setFont(QFont("Segoe UI", 10, QFont.Weight.Bold))
        layout.addWidget(local_header)

        btn_resources = QPushButton("Melksham & Wiltshire Resources")
        btn_resources.setMinimumHeight(40)
        btn_resources.clicked.connect(self.show_resources)
        layout.addWidget(btn_resources)

        btn_crisis = QPushButton("🆘 Crisis Support Hotlines")
        btn_crisis.setMinimumHeight(40)
        btn_crisis.clicked.connect(self.show_crisis_info)
        layout.addWidget(btn_crisis)

        layout.addSpacing(15)

        # NHS & National Resources
        national_header = QLabel("🏥 NHS & National Services:")
        national_header.setFont(QFont("Segoe UI", 10, QFont.Weight.Bold))
        layout.addWidget(national_header)

        btn_nhs = QPushButton("NHS Mental Health Services")
        btn_nhs.clicked.connect(self.open_nhs_mental_health)
        layout.addWidget(btn_nhs)

        btn_mind = QPushButton("Mind UK")
        btn_mind.clicked.connect(self.open_mind_uk)
        layout.addWidget(btn_mind)

        btn_samaritans = QPushButton("Samaritans (116 123)")
        btn_samaritans.clicked.connect(self.open_samaritans)
        layout.addWidget(btn_samaritans)

        layout.addSpacing(15)

        # Melksham Mental Health Website
        mmh_header = QLabel("💚 Our Community:")
        mmh_header.setFont(QFont("Segoe UI", 10, QFont.Weight.Bold))
        layout.addWidget(mmh_header)

        btn_mmh = QPushButton("🏠 Melksham Mental Health Website")
        btn_mmh.setMinimumHeight(45)
        btn_mmh.setStyleSheet("""
            QPushButton {
                background-color: #00aa00;
                color: white;
                border: 2px solid #00cc00;
                font-weight: bold;
            }
            QPushButton:hover {
                background-color: #00cc00;
            }
        """)
        btn_mmh.clicked.connect(self.open_melksham_mental_health)
        layout.addWidget(btn_mmh)

        layout.addStretch()
        widget.setLayout(layout)
        return widget

    def create_favorites_tab(self):
        """Create the favorites tab"""
        widget = QWidget()
        layout = QVBoxLayout()

        layout.addWidget(QLabel("⭐ Your Favorite Posts:"))

        self.favorites_list = QListWidget()
        self.favorites_list.itemClicked.connect(self.load_favorite)
        layout.addWidget(self.favorites_list)

        self.refresh_favorites_list()

        btn_clear = QPushButton("Clear Favorites")
        btn_clear.clicked.connect(self.clear_favorites)
        layout.addWidget(btn_clear)

        widget.setLayout(layout)
        return widget

    def create_settings_tab(self):
        """Create the settings tab"""
        widget = QWidget()
        layout = QVBoxLayout()
        layout.setSpacing(10)

        # Profile Settings Section
        profile_header = QLabel("👤 Your Profile:")
        profile_header.setFont(QFont("Segoe UI", 10, QFont.Weight.Bold))
        layout.addWidget(profile_header)

        btn_profile = QPushButton("🔧 Edit Profile & Social Media")
        btn_profile.setMinimumHeight(45)
        btn_profile.clicked.connect(self.open_profile_settings)
        layout.addWidget(btn_profile)

        btn_license = QPushButton("🔑 Manage License")
        btn_license.clicked.connect(self.manage_license)
        layout.addWidget(btn_license)

        layout.addSpacing(15)

        # App Info Section
        info_header = QLabel("ℹ️ App Information:")
        info_header.setFont(QFont("Segoe UI", 10, QFont.Weight.Bold))
        layout.addWidget(info_header)

        btn_about = QPushButton("About Melksham Mental Health")
        btn_about.clicked.connect(self.show_about)
        layout.addWidget(btn_about)

        btn_help = QPushButton("❓ Help & Keyboard Shortcuts")
        btn_help.clicked.connect(self.show_help)
        layout.addWidget(btn_help)

        btn_credits = QPushButton("Credits & Resources")
        btn_credits.clicked.connect(self.show_credits)
        layout.addWidget(btn_credits)

        layout.addSpacing(20)

        # File Management
        files_header = QLabel("📁 File Management:")
        files_header.setFont(QFont("Segoe UI", 10, QFont.Weight.Bold))
        layout.addWidget(files_header)

        btn_open_output = QPushButton("Open Output Folder")
        btn_open_output.clicked.connect(self.open_output_folder)
        layout.addWidget(btn_open_output)

        btn_clear_cache = QPushButton("Clear Saved Data")
        btn_clear_cache.clicked.connect(self.clear_saved_data)
        layout.addWidget(btn_clear_cache)

        layout.addStretch()
        widget.setLayout(layout)
        return widget

    def create_right_panel(self):
        """Create the right content display panel"""
        panel = QFrame()
        panel.setFrameStyle(QFrame.Shape.StyledPanel | QFrame.Shadow.Raised)
        layout = QVBoxLayout()
        layout.setContentsMargins(15, 15, 15, 15)
        layout.setSpacing(10)

        # Title Bar
        title_layout = QHBoxLayout()
        self.label_title = QLabel("Welcome to Melksham Mental Health")
        title_font = QFont("Arial Black", 13, QFont.Weight.Bold)
        self.label_title.setFont(title_font)
        self.label_title.setStyleSheet("color: #ff6600;")
        title_layout.addWidget(self.label_title)
        
        self.btn_add_favorite = QPushButton("❤️ Add to Favorites")
        self.btn_add_favorite.setMaximumWidth(150)
        self.btn_add_favorite.clicked.connect(self.add_favorite)
        title_layout.addWidget(self.btn_add_favorite)
        
        layout.addLayout(title_layout)

        # Content Display - BIGGER TEXT with bright white color
        self.text_content = QTextEdit()
        self.text_content.setReadOnly(True)
        self.text_content.setFont(QFont("Courier New", 16))
        self.text_content.setStyleSheet("QTextEdit { color: #ffffff; background-color: #1a1a1a; font-size: 16px; }")
        welcome_text = """
═══════════════════════════════════════════════════════════════════════════

MELKSHAM MENTAL HEALTH - Post Creator

═══════════════════════════════════════════════════════════════════════════

This app creates REAL mental health content that speaks to REAL struggles.

Not corporate wellness speak. Not sanitized feel-good posts.

REAL content for REAL people dealing with REAL pain.

═══════════════════════════════════════════════════════════════════════════

🔥 FEATURES:

• Generate raw, honest mental health posts
• Filter by type, topic, and audience
• Batch create multiple posts
• Save and export your content
• Favorites system
• Search functionality
• Local resources & crisis support
• Print-ready content

═══════════════════════════════════════════════════════════════════════════

🚀 GET STARTED:

1. Click "🎲 Generate Random Post" to create content
2. Use Quick, Advanced, and Resources tabs
3. Save, copy, or export what you create
4. Share authentic mental health awareness

═══════════════════════════════════════════════════════════════════════════

💚 REMEMBER:

Mental health struggles are REAL. Mental health support is REAL.

You're not alone. Help is available.

═══════════════════════════════════════════════════════════════════════════
        """
        self.text_content.setText(welcome_text)
        layout.addWidget(self.text_content)

        # Action Buttons
        button_layout = QHBoxLayout()
        button_layout.setSpacing(8)

        btn_copy = QPushButton("📋 Copy")
        btn_copy.clicked.connect(self.copy_to_clipboard)
        button_layout.addWidget(btn_copy)

        btn_save = QPushButton("💾 Save")
        btn_save.clicked.connect(self.save_to_file)
        button_layout.addWidget(btn_save)

        btn_export = QPushButton("📤 Export")
        btn_export.clicked.connect(self.export_content)
        button_layout.addWidget(btn_export)

        btn_print = QPushButton("🖨️ Print")
        btn_print.clicked.connect(self.print_content)
        button_layout.addWidget(btn_print)

        btn_refresh = QPushButton("🔄 New")
        btn_refresh.clicked.connect(lambda: self.generate_random_post())
        button_layout.addWidget(btn_refresh)

        layout.addLayout(button_layout)

        # Progress bar
        self.progress_bar = QProgressBar()
        self.progress_bar.setVisible(False)
        self.progress_bar.setMaximumHeight(20)
        layout.addWidget(self.progress_bar)

        panel.setLayout(layout)
        return panel

    def load_topics(self):
        """Load available topics from the data files"""
        topics = set()
        try:
            # Use the same data path as the generator
            data_path = self.data_path
            for json_file in data_path.glob("*.json"):
                if json_file.name not in ["crisis.json", "resources.json"]:
                    try:
                        with open(json_file, 'r', encoding='utf-8') as f:
                            data = json.load(f)
                            if isinstance(data, list):
                                for item in data:
                                    if isinstance(item, dict) and "topics" in item:
                                        if isinstance(item["topics"], list):
                                            topics.update(item["topics"])
                    except Exception as e:
                        print(f"Error reading {json_file.name}: {e}")
            topics = sorted(list(topics))
            self.combo_topic.addItems(["Any Topic"] + topics)
            print(f"Loaded {len(topics)} topics")
        except Exception as e:
            print(f"Error loading topics: {e}")
            # Add some default topics if loading fails
            self.combo_topic.addItems(["Any Topic", "Anxiety", "Depression", "Stress", "Self-Care", "Recovery", "Support"])

    def generate_random_post(self):
        """Generate a random post"""
        self.update_status("Generating post...")
        try:
            content = self.generator.generate_random()
            self.display_content(content, "🎲 Random Post")
            self.update_status("✓ Post generated successfully")
        except Exception as e:
            self.show_error(f"Error generating post: {e}")
            self.update_status("✗ Error generating post")

    def generate_by_type(self):
        """Generate content by type"""
        content_type = self.combo_content_type.currentText()
        if content_type == "Any Type":
            self.generate_random_post()
            return

        self.update_status(f"Generating {content_type}...")
        try:
            content = self.generator.generate_by_type(content_type.lower())
            self.display_content(content, f"📝 {content_type}")
            self.update_status(f"✓ {content_type} generated")
        except Exception as e:
            self.show_error(f"Error generating post: {e}")
            self.update_status("✗ Error")

    def generate_by_topic(self):
        """Generate content by topic"""
        topic = self.combo_topic.currentText()
        if topic == "Any Topic":
            self.generate_random_post()
            return

        self.update_status(f"Generating content about {topic}...")
        try:
            content = self.generator.generate_by_topic(topic)
            self.display_content(content, f"🎯 {topic}")
            self.update_status(f"✓ Content generated: {topic}")
        except Exception as e:
            self.show_error(f"Error generating post: {e}")
            self.update_status("✗ Error")

    def generate_by_audience(self):
        """Generate content by audience"""
        audience = self.combo_audience.currentText()
        self.update_status(f"Generating content for {audience}...")
        try:
            content = self.generator.generate_by_audience(audience)
            self.display_content(content, f"👥 Post for {audience}")
            self.update_status(f"✓ Content generated for {audience}")
        except Exception as e:
            self.show_error(f"Error generating post: {e}")
            self.update_status("✗ Error")

    def generate_with_options(self):
        """Generate content using ALL selected options (type, topic, audience)"""
        content_type = self.combo_content_type.currentText()
        topic = self.combo_topic.currentText()
        audience = self.combo_audience.currentText()
        user_notes = self.user_notes.text().strip()
        
        self.update_status(f"Generating with: Type={content_type}, Topic={topic}, Audience={audience}...")
        
        try:
            # Start with all content, then filter
            content = None
            
            # If specific type selected
            if content_type != "Any Type":
                content = self.generator.generate_by_type(content_type.lower())
            # If specific topic selected
            elif topic != "Any Topic":
                content = self.generator.generate_by_topic(topic)
            # If specific audience selected
            elif audience != "Any Audience" and audience != "General":
                content = self.generator.generate_by_audience(audience)
            else:
                # All are "Any" - just generate random
                content = self.generator.generate_random()
            
            # Add user notes to the content if provided
            if user_notes and isinstance(content, dict):
                content['user_notes'] = user_notes
            
            # Build title based on selections
            title_parts = ["🚀 Custom Post"]
            if content_type != "Any Type":
                title_parts.append(f"[{content_type}]")
            if topic != "Any Topic":
                title_parts.append(f"[{topic}]")
            if audience != "Any Audience" and audience != "General":
                title_parts.append(f"[{audience}]")
            
            self.display_content(content, " ".join(title_parts))
            self.update_status("✓ Custom content generated successfully")
        except Exception as e:
            self.show_error(f"Error generating post: {e}")
            self.update_status("✗ Error")

    def generate_batch(self):
        """Generate multiple posts"""
        count = self.spin_batch.value()
        self.update_status(f"Generating {count} posts...")
        self.progress_bar.setVisible(True)
        
        try:
            posts = []
            for i in range(count):
                progress = int((i / count) * 100)
                self.progress_bar.setValue(progress)
                content = self.generator.generate_random()
                posts.append(content)

            self.progress_bar.setValue(100)
            combined = "\n\n" + "=" * 70 + "\n\n".join(posts)
            self.display_content(combined, f"📦 Batch: {count} Posts Generated")
            self.update_status(f"✓ Batch of {count} posts generated")
        except Exception as e:
            self.show_error(f"Error generating batch: {e}")
            self.update_status("✗ Error")
        finally:
            QTimer.singleShot(2000, lambda: self.progress_bar.setVisible(False))

    def search_content(self):
        """Search content"""
        keyword = self.search_input.text().strip()
        if not keyword:
            self.show_error("Please enter a search keyword")
            return

        self.update_status(f"Searching for '{keyword}'...")
        try:
            results = self.generator.search_content(keyword)
            if results:
                self.display_content(results, f"🔍 Search Results: {keyword}")
                self.update_status(f"✓ Found results for '{keyword}'")
            else:
                self.show_error(f"No results found for: {keyword}")
                self.update_status("No results found")
        except Exception as e:
            self.show_error(f"Error searching: {e}")
            self.update_status("Search error")

    def show_resources(self):
        """Show local resources"""
        self.update_status("Loading resources...")
        try:
            resources = self.generator.get_local_resources()
            self.display_content(resources, "📍 Local Resources - Melksham/Wiltshire")
            self.update_status("✓ Resources loaded")
        except Exception as e:
            self.show_error(f"Error loading resources: {e}")
            self.update_status("✗ Error")

    def show_crisis_info(self):
        """Show crisis information"""
        self.update_status("Loading crisis information...")
        try:
            crisis = self.generator.get_crisis_info()
            self.display_content(crisis, "🆘 Crisis Support Information")
            self.update_status("✓ Crisis info loaded")
        except Exception as e:
            self.show_error(f"Error loading crisis info: {e}")
            self.update_status("✗ Error")

    def show_statistics(self):
        """Show content statistics"""
        self.update_status("Loading statistics...")
        try:
            stats = self.generator.get_statistics()
            self.display_content(stats, "📊 Content Statistics")
            self.update_status("✓ Statistics loaded")
        except Exception as e:
            self.show_error(f"Error loading statistics: {e}")
            self.update_status("✗ Error")

    def display_content(self, content, title="Post Content"):
        """Display content in the text area"""
        self.current_title = title
        self.label_title.setText(title)
        
        # Format content - handle dict, list, or string
        if isinstance(content, dict):
            # Format the dict into readable text
            formatted = []
            
            # Type header
            if 'type' in content:
                type_name = content['type'].title()
                formatted.append(f"\n📝 {type_name}")
                formatted.append("═" * 40)
            
            # Title if present
            if 'title' in content:
                formatted.append(f"\n📌 {content['title']}\n")
            
            # Main content - check multiple possible fields
            main_text = content.get('content') or content.get('text') or content.get('message') or ''
            if main_text:
                formatted.append(main_text)
            
            # Author/Source attribution
            if 'author' in content:
                formatted.append(f"\n\n— {content['author']}")
            if 'source' in content:
                formatted.append(f"   ({content['source']})")
            
            # Topics
            if 'topics' in content and isinstance(content['topics'], list):
                formatted.append(f"\n\n🎯 Topics: {', '.join(content['topics'])}")
            
            # User Notes if present
            if 'user_notes' in content and content['user_notes']:
                formatted.append(f"\n\n📋 Your Notes: {content['user_notes']}")
            
            display_text = "\n".join(formatted) if formatted else str(content)
            
            # Add branding footer for generated posts (not for resources/crisis info)
            if content.get('type') not in ['resources', 'crisis']:
                display_text = self.user_config.get_full_post_text(display_text)
            
        elif isinstance(content, list):
            # Handle list of items (e.g., resources, search results)
            formatted_items = []
            for item in content:
                if isinstance(item, dict):
                    name = item.get('name', item.get('title', 'Item'))
                    desc = item.get('description', item.get('content', ''))
                    phone = item.get('phone', '')
                    website = item.get('website', '')
                    formatted_items.append(f"• {name}")
                    if desc:
                        formatted_items.append(f"  ℹ️ {desc[:100]}")
                    if phone:
                        formatted_items.append(f"  📞 {phone}")
                    if website:
                        formatted_items.append(f"  🔗 {website}")
                    formatted_items.append("")
                else:
                    formatted_items.append(str(item))
            display_text = "\n".join(formatted_items)
        else:
            display_text = str(content)
        
        # Store the formatted text as string for save/export/copy
        self.current_content = display_text
        self.text_content.setText(display_text)

    def add_favorite(self):
        """Add current content to favorites"""
        if not self.current_content:
            self.show_error("No content to favorite")
            return

        timestamp = datetime.now().strftime("%Y-%m-%d %H:%M")
        
        favorite = {
            "title": self.current_title,
            "content": self.current_content,
            "timestamp": timestamp
        }
        
        self.favorites.append(favorite)
        self.save_favorites()
        self.refresh_favorites_list()
        self.update_status("✓ Added to favorites ❤️")
        self.show_success("Added to favorites!")

    def load_favorite(self, item):
        """Load a favorite post"""
        index = self.favorites_list.row(item)
        if 0 <= index < len(self.favorites):
            fav = self.favorites[index]
            self.display_content(fav["content"], fav["title"])
            self.update_status(f"Loaded favorite: {fav['title']}")

    def refresh_favorites_list(self):
        """Refresh the favorites list display"""
        self.favorites_list.clear()
        for i, fav in enumerate(self.favorites):
            timestamp = fav.get("timestamp", "")
            display_text = f"{fav['title']} - {timestamp}"
            item = QListWidgetItem(display_text)
            self.favorites_list.addItem(item)

    def clear_favorites(self):
        """Clear all favorites"""
        reply = QMessageBox.question(
            self, "Clear Favorites",
            "Are you sure you want to clear all favorites?",
            QMessageBox.StandardButton.Yes | QMessageBox.StandardButton.No
        )
        if reply == QMessageBox.StandardButton.Yes:
            self.favorites = []
            self.save_favorites()
            self.refresh_favorites_list()
            self.update_status("✓ Favorites cleared")

    def save_favorites(self):
        """Save favorites to file"""
        try:
            favorites_path = Path(__file__).parent.parent / "favorites.json"
            with open(favorites_path, 'w') as f:
                json.dump(self.favorites, f, indent=2)
        except Exception as e:
            print(f"Error saving favorites: {e}")

    def load_favorites(self):
        """Load favorites from file"""
        try:
            favorites_path = Path(__file__).parent.parent / "favorites.json"
            if favorites_path.exists():
                with open(favorites_path, 'r') as f:
                    self.favorites = json.load(f)
        except Exception as e:
            print(f"Error loading favorites: {e}")
            self.favorites = []

    def copy_to_clipboard(self):
        """Copy content to clipboard"""
        if self.current_content:
            clipboard = QApplication.clipboard()
            # Ensure we're copying a string
            text_to_copy = self.current_content if isinstance(self.current_content, str) else str(self.current_content)
            clipboard.setText(text_to_copy)
            self.update_status("✓ Copied to clipboard")
            self.show_success("Content copied to clipboard!")
        else:
            self.show_error("No content to copy")

    def save_to_file(self):
        """Save content to file"""
        if not self.current_content:
            self.show_error("No content to save")
            return

        try:
            output_dir = Path(__file__).parent.parent / "output"
            output_dir.mkdir(exist_ok=True)

            filename = output_dir / f"post_{datetime.now().strftime('%Y%m%d_%H%M%S')}.txt"
            # Ensure we're writing a string
            text_to_save = self.current_content if isinstance(self.current_content, str) else str(self.current_content)
            with open(filename, 'w', encoding='utf-8') as f:
                f.write(text_to_save)

            self.update_status(f"✓ Saved to {filename.name}")
            self.show_success(f"Content saved to:\n{filename.name}")
        except Exception as e:
            self.show_error(f"Error saving file: {e}")

    def export_content(self):
        """Export content to multiple formats"""
        if not self.current_content:
            self.show_error("No content to export")
            return

        try:
            output_dir = Path(__file__).parent.parent / "output"
            output_dir.mkdir(exist_ok=True)
            timestamp = datetime.now().strftime('%Y%m%d_%H%M%S')

            # Ensure we're working with a string
            text_to_export = self.current_content if isinstance(self.current_content, str) else str(self.current_content)

            # Save as TXT
            txt_file = output_dir / f"post_{timestamp}.txt"
            with open(txt_file, 'w', encoding='utf-8') as f:
                f.write(text_to_export)

            # Save as JSON
            json_file = output_dir / f"post_{timestamp}.json"
            with open(json_file, 'w', encoding='utf-8') as f:
                json.dump({
                    "title": self.current_title,
                    "content": text_to_export,
                    "exported_at": timestamp
                }, f, indent=2)

            self.update_status(f"✓ Exported as TXT and JSON")
            self.show_success(f"Content exported as:\n- {txt_file.name}\n- {json_file.name}")
        except Exception as e:
            self.show_error(f"Error exporting: {e}")

    def print_content(self):
        """Print content"""
        if not self.current_content:
            self.show_error("No content to print")
            return

        try:
            printer = QPrinter()
            dialog = QPrintDialog(printer, self)
            if dialog.exec() == QDialog.DialogCode.Accepted:
                self.text_content.print(printer)
                self.update_status("✓ Sent to printer")
        except Exception as e:
            self.show_error(f"Error printing: {e}")

    def open_output_folder(self):
        """Open the output folder"""
        try:
            output_dir = Path(__file__).parent.parent / "output"
            output_dir.mkdir(exist_ok=True)
            import subprocess
            subprocess.Popen(['xdg-open', str(output_dir)])
            self.update_status(f"✓ Opened output folder")
        except Exception as e:
            self.show_error(f"Error opening folder: {e}")

    def clear_saved_data(self):
        """Clear all saved data and favorites"""
        reply = QMessageBox.question(
            self, "Clear Saved Data",
            "This will delete all your saved favorites and cached data.\n\nAre you sure?",
            QMessageBox.StandardButton.Yes | QMessageBox.StandardButton.No
        )
        if reply == QMessageBox.StandardButton.Yes:
            self.favorites = []
            self.save_favorites()
            self.refresh_favorites_list()
            self.update_status("✓ All saved data cleared")
            self.show_success("Saved data cleared!")

    def fetch_online_resources(self):
        """Show mental health resources (local data + reliable links)"""
        self.update_status("🔄 Loading mental health resources...")
        try:
            from datetime import datetime
            
            resources_parts = []
            resources_parts.append("🌐 MENTAL HEALTH RESOURCES")
            resources_parts.append("═" * 60)
            resources_parts.append(f"Updated: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
            resources_parts.append("")
            
            # Load local resources from data
            local_resources = self.generator.get_local_resources()
            if local_resources:
                resources_parts.append("📍 LOCAL SERVICES (MELKSHAM & WILTSHIRE):")
                resources_parts.append("─" * 40)
                for res in local_resources[:10]:
                    name = res.get('name', 'Resource')
                    phone = res.get('phone', '')
                    desc = res.get('description', '')
                    resources_parts.append(f"• {name}")
                    if phone:
                        resources_parts.append(f"  📞 {phone}")
                    if desc:
                        resources_parts.append(f"  ℹ️ {desc[:80]}")
                resources_parts.append("")
            
            resources_parts.append("🆘 CRISIS LINES (Always Available 24/7):")
            resources_parts.append("─" * 40)
            resources_parts.append("• Samaritans: 116 123 (Free, 24/7)")
            resources_parts.append("• NHS 24/7 Mental Health: 0800 953 1919")
            resources_parts.append("• NHS Urgent: 111 then press 2")
            resources_parts.append("• Crisis Text: Text SHOUT to 85258")
            resources_parts.append("• CALM (Men): 0800 58 58 58 (5pm-midnight)")
            resources_parts.append("• Papyrus (Under 35): 0800 068 4141")
            resources_parts.append("")
            resources_parts.append("🏥 NHS SERVICES:")
            resources_parts.append("─" * 40)
            resources_parts.append("• NHS Talking Therapies: 01380 731335")
            resources_parts.append("• AWP Mental Health Trust: 0300 303 1320")
            resources_parts.append("• Emergency (life threatening): 999")
            resources_parts.append("")
            resources_parts.append("🔗 WEBSITES:")
            resources_parts.append("─" * 40)
            resources_parts.append("• melkshammentalhealth.co.uk (Our Community)")
            resources_parts.append("• nhs.uk/mental-health")
            resources_parts.append("• mind.org.uk")
            resources_parts.append("• samaritans.org")
            resources_parts.append("• hubofhope.co.uk")
            resources_parts.append("• rethink.org")
            resources_parts.append("• youngminds.org.uk")
            
            full_text = "\n".join(resources_parts)
            self.display_content({'type': 'resources', 'content': full_text}, "🌐 Mental Health Resources")
            self.update_status("✓ Resources loaded")
        except Exception as e:
            self.show_error(f"Error loading resources: {e}")
            self.update_status("✗ Error loading resources")

    def open_nhs_mental_health(self):
        """Open NHS Mental Health website"""
        import webbrowser
        import os
        url = 'https://www.nhs.uk/mental-health/'
        if os.name == 'nt':
            os.startfile(url)
        else:
            webbrowser.open(url)
        self.update_status("✓ Opening NHS Mental Health website...")

    def open_mind_uk(self):
        """Open Mind UK website"""
        import webbrowser
        import os
        url = 'https://www.mind.org.uk/'
        if os.name == 'nt':
            os.startfile(url)
        else:
            webbrowser.open(url)
        self.update_status("✓ Opening Mind UK website...")

    def open_samaritans(self):
        """Open Samaritans website"""
        import webbrowser
        import os
        url = 'https://www.samaritans.org/'
        if os.name == 'nt':
            os.startfile(url)
        else:
            webbrowser.open(url)
        self.update_status("✓ Opening Samaritans website...")

    def open_melksham_mental_health(self):
        """Open Melksham Mental Health website"""
        import webbrowser
        import os
        url = 'https://melksham-mentalhealth.us/'
        if os.name == 'nt':
            os.startfile(url)
        else:
            webbrowser.open(url)
        self.update_status("✓ Opening Melksham Mental Health website...")

    def open_profile_settings(self):
        """Open the profile settings dialog"""
        dialog = ProfileSettingsDialog(self.user_config, self)
        dialog.exec()
        self.update_status("✓ Profile settings updated")

    def manage_license(self):
        """Open license management dialog"""
        current_status = "Free (Branding Included)" if self.user_config.is_branding_required() else "Licensed (Branding Removed)"
        
        from PyQt6.QtWidgets import QInputDialog
        
        license_key, ok = QInputDialog.getText(
            self, "Manage License",
            f"Current Status: {current_status}\n\n"
            "Enter your license key to remove Melksham Mental Health branding:\n"
            "(Purchase at https://melksham-mentalhealth.us/license for £20)",
            QLineEdit.EchoMode.Normal
        )
        
        if ok and license_key:
            if self.user_config.activate_license(license_key):
                QMessageBox.information(
                    self, "License Activated",
                    "Your license has been activated!\n\n"
                    "Melksham Mental Health branding will no longer appear on your posts."
                )
                self.update_status("✓ License activated successfully")
            else:
                QMessageBox.warning(
                    self, "Invalid License",
                    "The license key you entered is invalid.\n\n"
                    "Please check the key and try again."
                )

    def update_status(self, message):
        """Update status bar"""
        self.status_label.setText(message)

    def show_about(self):
        """Show about dialog"""
        about_text = """
<h2>Melksham Mental Health - Post Creator</h2>
<p><b>Version 2.0 Elite</b> (Desktop Edition)</p>
<p>A comprehensive mental health content generator designed to create positive, 
evidence-based posts for raising awareness and supporting mental wellbeing 
in Melksham, Wiltshire, and across the UK.</p>
<p><b>Features:</b><br>
• 20+ mental health topics<br>
• Multiple content types<br>
• Local resource information<br>
• Crisis support access<br>
• Batch generation<br>
• Content favorites & export<br>
• Print support<br>
• Professional branding
</p>
<p><b>© 2024 - Melksham Mental Health Initiative</b></p>
        """
        QMessageBox.about(self, "About Melksham Mental Health", about_text)

    def show_help(self):
        """Show help dialog"""
        help_text = """
<h2>How to Use:</h2>
<p><b>Quick Generate:</b> Use the Quick tab for simple content creation</p>
<p><b>By Type/Topic:</b> Select specific content types or mental health topics</p>
<p><b>Batch Mode:</b> Generate multiple posts at once</p>
<p><b>Search:</b> Find content by keywords</p>
<p><b>Favorites:</b> Save your favorite posts for quick access</p>
<p><b>Export:</b> Save as TXT or JSON format</p>
<p><b>Print:</b> Send posts directly to your printer</p>

<h3>Keyboard Shortcuts:</h3>
<ul>
<li><b>Ctrl+C</b> - Copy</li>
<li><b>Ctrl+S</b> - Save</li>
<li><b>Ctrl+Q</b> - Quit</li>
</ul>

<h3>Tips:</h3>
<ul>
<li>Use batch generation to create content for your schedule</li>
<li>Add frequently used posts to favorites for quick access</li>
<li>Search by keywords to find posts on specific topics</li>
<li>Export posts for use in other applications</li>
</ul>
        """
        QMessageBox.information(self, "Help & Keyboard Shortcuts", help_text)

    def show_credits(self):
        """Show credits dialog"""
        credits_text = """
<h2>Credits & Resources</h2>
<p><b>Mental Health Information Sources:</b></p>
<ul>
<li>Mind UK</li>
<li>Rethink Mental Illness</li>
<li>Samaritans</li>
<li>NHS Mental Health Services</li>
<li>Relate UK</li>
</ul>
<p><b>Local Support (Melksham/Wiltshire):</b></p>
<ul>
<li>Wiltshire Council Mental Health Services</li>
<li>Melksham Town Council</li>
<li>Community Mental Health Teams</li>
<li>Local GP Surgeries</li>
</ul>
<p><b>Technology:</b></p>
<ul>
<li>Python 3</li>
<li>PyQt6</li>
</ul>
<p>This application is created with ❤️ for mental health awareness and support.</p>
        """
        QMessageBox.information(self, "Credits & Resources", credits_text)

    def show_error(self, message):
        """Show error dialog"""
        QMessageBox.critical(self, "Error", message)

    def show_success(self, message):
        """Show success message"""
        QMessageBox.information(self, "Success", message)

    def apply_styling(self):
        """Apply hellscape/graffiti styling matching the logo aesthetic"""
        stylesheet = """
        QMainWindow {
            background-color: #1a1a1a;
        }
        QFrame {
            background-color: #2a2a2a;
            border: 2px solid #ff6600;
            border-radius: 0px;
        }
        QPushButton {
            background-color: #ff6600;
            color: #ffffff;
            border: 2px solid #ff3300;
            border-radius: 0px;
            padding: 12px;
            font-weight: bold;
            font-size: 12px;
            font-family: 'Arial Black', sans-serif;
        }
        QPushButton:hover {
            background-color: #ff3300;
            border: 2px solid #ff0000;
        }
        QPushButton:pressed {
            background-color: #cc0000;
            border: 2px solid #990000;
        }
        QComboBox {
            border: 2px solid #ff6600;
            border-radius: 0px;
            padding: 6px;
            background-color: #1a1a1a;
            color: #ff9900;
            font-weight: bold;
            font-size: 11px;
        }
        QComboBox::drop-down {
            border: none;
            background-color: #ff6600;
            width: 30px;
        }
        QComboBox::down-arrow {
            border: none;
        }
        QComboBox QAbstractItemView {
            background-color: #2a2a2a;
            color: #ff9900;
            selection-background-color: #ff6600;
            selection-color: #ffffff;
            border: 2px solid #ff6600;
            font-weight: bold;
        }
        QComboBox QAbstractItemView::item {
            padding: 8px;
            min-height: 25px;
            color: #ff9900;
        }
        QComboBox QAbstractItemView::item:hover {
            background-color: #ff6600;
            color: #ffffff;
        }
        QComboBox QAbstractItemView::item:selected {
            background-color: #ff6600;
            color: #ffffff;
        }
        QLineEdit {
            border: 2px solid #ff6600;
            border-radius: 0px;
            padding: 8px;
            background-color: #1a1a1a;
            color: #ff9900;
            font-weight: bold;
            font-size: 11px;
        }
        QTextEdit {
            border: 2px solid #ff6600;
            border-radius: 0px;
            background-color: #1a1a1a;
            color: #ffffff;
            font-family: 'Courier New', monospace;
            font-size: 16px;
            line-height: 1.5;
        }
        QTabWidget::pane {
            border: 2px solid #ff6600;
            border-radius: 0px;
            background-color: #2a2a2a;
        }
        QTabBar::tab {
            background-color: #1a1a1a;
            padding: 10px 20px;
            border: 2px solid #555555;
            border-bottom: none;
            border-radius: 0px;
            font-size: 11px;
            font-weight: bold;
            color: #ff9900;
        }
        QTabBar::tab:selected {
            background-color: #ff6600;
            color: #ffffff;
            border: 2px solid #ff3300;
            font-weight: bold;
        }
        QLabel {
            color: #ffcc99;
            font-weight: bold;
        }
        QCheckBox {
            color: #ff9900;
            spacing: 8px;
            font-weight: bold;
        }
        QCheckBox::indicator {
            border: 2px solid #ff6600;
            background-color: #1a1a1a;
        }
        QCheckBox::indicator:checked {
            background-color: #ff6600;
        }
        QSpinBox {
            border: 2px solid #ff6600;
            border-radius: 0px;
            padding: 6px;
            background-color: #1a1a1a;
            color: #ff9900;
            font-weight: bold;
        }
        QProgressBar {
            border: 2px solid #ff6600;
            border-radius: 0px;
            background-color: #1a1a1a;
            text-align: center;
            color: #ff6600;
            font-weight: bold;
        }
        QProgressBar::chunk {
            background-color: #ff6600;
            border-radius: 0px;
        }
        QStatusBar {
            background-color: #1a1a1a;
            color: #ff9900;
            border-top: 2px solid #ff6600;
            font-weight: bold;
        }
        QListWidget {
            border: 2px solid #ff6600;
            border-radius: 0px;
            background-color: #1a1a1a;
            color: #ffcc99;
        }
        QListWidget::item {
            padding: 6px;
            border-bottom: 1px solid #333333;
        }
        QListWidget::item:selected {
            background-color: #ff6600;
            color: #ffffff;
            font-weight: bold;
        }
        QListWidget::item:hover {
            background-color: #ff3300;
        }
        """
        self.setStyleSheet(stylesheet)


def main():
    """Main entry point"""
    app = QApplication(sys.argv)
    window = MelkshamMentalHealthApp()
    window.show()
    sys.exit(app.exec())


if __name__ == "__main__":
    main()
