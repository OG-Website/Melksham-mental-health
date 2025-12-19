#!/usr/bin/env python3
"""
Setup Wizard Dialog for Melksham Mental Health App
First-run configuration for user/organization details and social media
"""

from PyQt6.QtWidgets import (
    QDialog, QVBoxLayout, QHBoxLayout, QLabel, QPushButton,
    QLineEdit, QComboBox, QRadioButton, QButtonGroup, QScrollArea,
    QWidget, QFrame, QGridLayout, QStackedWidget, QMessageBox,
    QCheckBox, QGroupBox, QTextEdit
)
from PyQt6.QtCore import Qt, pyqtSignal
from PyQt6.QtGui import QFont, QPixmap

from user_config import UserConfig


class SetupWizardDialog(QDialog):
    """First-run setup wizard dialog"""
    
    setup_completed = pyqtSignal()
    
    def __init__(self, user_config: UserConfig, parent=None, skip_allowed=True):
        super().__init__(parent)
        self.user_config = user_config
        self.skip_allowed = skip_allowed
        self.current_step = 0
        self.total_steps = 6
        
        self.setWindowTitle("Melksham Mental Health - Setup Wizard")
        self.setMinimumSize(700, 600)
        self.setModal(True)
        
        self.init_ui()
        self.apply_styling()
    
    def init_ui(self):
        """Initialize the wizard UI"""
        main_layout = QVBoxLayout()
        main_layout.setContentsMargins(0, 0, 0, 0)
        
        # Header
        header = self.create_header()
        main_layout.addWidget(header)
        
        # Content area with stacked pages
        self.stacked_widget = QStackedWidget()
        self.create_pages()
        main_layout.addWidget(self.stacked_widget, 1)
        
        # Navigation buttons
        nav_layout = self.create_navigation()
        main_layout.addLayout(nav_layout)
        
        self.setLayout(main_layout)
        self.update_navigation()
    
    def create_header(self):
        """Create the header section"""
        header = QFrame()
        header.setStyleSheet("background-color: #1a1a1a; padding: 20px;")
        layout = QVBoxLayout()
        
        title = QLabel("⚡ MELKSHAM MENTAL HEALTH ⚡")
        title.setFont(QFont("Arial Black", 18, QFont.Weight.Bold))
        title.setStyleSheet("color: #ff6600;")
        title.setAlignment(Qt.AlignmentFlag.AlignCenter)
        layout.addWidget(title)
        
        subtitle = QLabel("Post Creator Setup Wizard")
        subtitle.setFont(QFont("Arial", 12))
        subtitle.setStyleSheet("color: #ff9900;")
        subtitle.setAlignment(Qt.AlignmentFlag.AlignCenter)
        layout.addWidget(subtitle)
        
        # Progress indicator
        self.progress_label = QLabel("Step 1 of 6")
        self.progress_label.setStyleSheet("color: #ffcc99; margin-top: 10px;")
        self.progress_label.setAlignment(Qt.AlignmentFlag.AlignCenter)
        layout.addWidget(self.progress_label)
        
        header.setLayout(layout)
        return header
    
    def create_pages(self):
        """Create all wizard pages"""
        # Page 1: Welcome
        self.stacked_widget.addWidget(self.create_welcome_page())
        
        # Page 2: User Details
        self.stacked_widget.addWidget(self.create_user_details_page())
        
        # Page 3: Website & Contact
        self.stacked_widget.addWidget(self.create_website_page())
        
        # Page 4: Social Media
        self.stacked_widget.addWidget(self.create_social_media_page())
        
        # Page 5: Custom Links
        self.stacked_widget.addWidget(self.create_custom_links_page())
        
        # Page 6: Licensing & Complete
        self.stacked_widget.addWidget(self.create_licensing_page())
    
    def create_welcome_page(self):
        """Create the welcome page"""
        page = QWidget()
        layout = QVBoxLayout()
        layout.setContentsMargins(40, 40, 40, 40)
        
        welcome_text = QLabel("""
<h2 style="color: #ff6600;">Welcome to the Setup Wizard!</h2>

<p style="color: #ffffff; font-size: 14px; line-height: 1.8;">
This wizard will help you configure your <b>Melksham Mental Health Post Creator</b> 
with your personal or organization details.
</p>

<p style="color: #ffcc99; font-size: 13px; line-height: 1.6;">
<b>What you'll set up:</b>
</p>

<ul style="color: #ffffff; font-size: 13px; line-height: 2;">
<li>✅ Your name or organization details</li>
<li>✅ Your website and contact information</li>
<li>✅ Your social media profiles</li>
<li>✅ Custom links to include in posts</li>
<li>✅ Licensing options</li>
</ul>

<p style="color: #ff9900; font-size: 12px; margin-top: 20px;">
<b>Note:</b> All posts will include Melksham Mental Health branding and hashtags 
unless you purchase a license (£20 one-time payment).
</p>
        """)
        welcome_text.setWordWrap(True)
        welcome_text.setAlignment(Qt.AlignmentFlag.AlignTop)
        layout.addWidget(welcome_text)
        
        layout.addStretch()
        page.setLayout(layout)
        return page
    
    def create_user_details_page(self):
        """Create the user details page"""
        page = QWidget()
        layout = QVBoxLayout()
        layout.setContentsMargins(40, 30, 40, 30)
        
        title = QLabel("Tell us about yourself")
        title.setFont(QFont("Arial Black", 14))
        title.setStyleSheet("color: #ff6600;")
        layout.addWidget(title)
        
        layout.addSpacing(20)
        
        # User type selection
        type_group = QGroupBox("Are you an individual or organization?")
        type_group.setStyleSheet("QGroupBox { color: #ff9900; font-weight: bold; }")
        type_layout = QHBoxLayout()
        
        self.radio_individual = QRadioButton("Individual")
        self.radio_individual.setChecked(True)
        self.radio_individual.setStyleSheet("color: #ffffff;")
        self.radio_organization = QRadioButton("Organization")
        self.radio_organization.setStyleSheet("color: #ffffff;")
        
        self.radio_individual.toggled.connect(self.toggle_user_type)
        
        type_layout.addWidget(self.radio_individual)
        type_layout.addWidget(self.radio_organization)
        type_layout.addStretch()
        type_group.setLayout(type_layout)
        layout.addWidget(type_group)
        
        layout.addSpacing(15)
        
        # Form fields
        form_layout = QGridLayout()
        form_layout.setSpacing(15)
        
        # Name
        name_label = QLabel("Your Name: *")
        name_label.setStyleSheet("color: #ffcc99;")
        self.input_name = QLineEdit()
        self.input_name.setPlaceholderText("Enter your full name")
        self.input_name.setMinimumHeight(40)
        form_layout.addWidget(name_label, 0, 0)
        form_layout.addWidget(self.input_name, 0, 1)
        
        # Organization name (hidden for individuals)
        self.org_label = QLabel("Organization Name:")
        self.org_label.setStyleSheet("color: #ffcc99;")
        self.input_org = QLineEdit()
        self.input_org.setPlaceholderText("Enter organization name")
        self.input_org.setMinimumHeight(40)
        form_layout.addWidget(self.org_label, 1, 0)
        form_layout.addWidget(self.input_org, 1, 1)
        self.org_label.setVisible(False)
        self.input_org.setVisible(False)
        
        # Email
        email_label = QLabel("Email:")
        email_label.setStyleSheet("color: #ffcc99;")
        self.input_email = QLineEdit()
        self.input_email.setPlaceholderText("your@email.com")
        self.input_email.setMinimumHeight(40)
        form_layout.addWidget(email_label, 2, 0)
        form_layout.addWidget(self.input_email, 2, 1)
        
        # Location
        location_label = QLabel("Location:")
        location_label.setStyleSheet("color: #ffcc99;")
        self.input_location = QLineEdit()
        self.input_location.setPlaceholderText("e.g., Melksham, Wiltshire")
        self.input_location.setMinimumHeight(40)
        form_layout.addWidget(location_label, 3, 0)
        form_layout.addWidget(self.input_location, 3, 1)
        
        layout.addLayout(form_layout)
        layout.addStretch()
        page.setLayout(layout)
        return page
    
    def toggle_user_type(self):
        """Toggle visibility of organization fields"""
        is_org = self.radio_organization.isChecked()
        self.org_label.setVisible(is_org)
        self.input_org.setVisible(is_org)
    
    def create_website_page(self):
        """Create the website and contact page"""
        page = QWidget()
        layout = QVBoxLayout()
        layout.setContentsMargins(40, 30, 40, 30)
        
        title = QLabel("Your Website & Contact")
        title.setFont(QFont("Arial Black", 14))
        title.setStyleSheet("color: #ff6600;")
        layout.addWidget(title)
        
        subtitle = QLabel("Add your website and contact details to include in posts")
        subtitle.setStyleSheet("color: #ff9900;")
        layout.addWidget(subtitle)
        
        layout.addSpacing(20)
        
        form_layout = QGridLayout()
        form_layout.setSpacing(15)
        
        # Website
        website_label = QLabel("Website URL:")
        website_label.setStyleSheet("color: #ffcc99;")
        self.input_website = QLineEdit()
        self.input_website.setPlaceholderText("https://yourwebsite.com")
        self.input_website.setMinimumHeight(40)
        form_layout.addWidget(website_label, 0, 0)
        form_layout.addWidget(self.input_website, 0, 1)
        
        # Phone
        phone_label = QLabel("Phone (optional):")
        phone_label.setStyleSheet("color: #ffcc99;")
        self.input_phone = QLineEdit()
        self.input_phone.setPlaceholderText("+44 1234 567890")
        self.input_phone.setMinimumHeight(40)
        form_layout.addWidget(phone_label, 1, 0)
        form_layout.addWidget(self.input_phone, 1, 1)
        
        # Tagline
        tagline_label = QLabel("Your Tagline:")
        tagline_label.setStyleSheet("color: #ffcc99;")
        self.input_tagline = QLineEdit()
        self.input_tagline.setPlaceholderText("e.g., 'Supporting mental health in our community'")
        self.input_tagline.setMinimumHeight(40)
        form_layout.addWidget(tagline_label, 2, 0)
        form_layout.addWidget(self.input_tagline, 2, 1)
        
        layout.addLayout(form_layout)
        layout.addStretch()
        page.setLayout(layout)
        return page
    
    def create_social_media_page(self):
        """Create the social media configuration page"""
        page = QWidget()
        layout = QVBoxLayout()
        layout.setContentsMargins(40, 20, 40, 20)
        
        title = QLabel("Your Social Media")
        title.setFont(QFont("Arial Black", 14))
        title.setStyleSheet("color: #ff6600;")
        layout.addWidget(title)
        
        subtitle = QLabel("Enter your username or profile URL for each platform")
        subtitle.setStyleSheet("color: #ff9900;")
        layout.addWidget(subtitle)
        
        layout.addSpacing(15)
        
        # Scrollable area for social media inputs
        scroll = QScrollArea()
        scroll.setWidgetResizable(True)
        scroll.setStyleSheet("QScrollArea { border: none; }")
        
        scroll_content = QWidget()
        scroll_layout = QGridLayout()
        scroll_layout.setSpacing(12)
        
        self.social_inputs = {}
        
        for i, platform in enumerate(UserConfig.SOCIAL_PLATFORMS):
            icon_label = QLabel(f"{platform['icon']} {platform['name']}:")
            icon_label.setStyleSheet("color: #ffcc99;")
            icon_label.setMinimumWidth(120)
            
            input_field = QLineEdit()
            input_field.setPlaceholderText(f"Your {platform['name']} username or URL")
            input_field.setMinimumHeight(35)
            
            self.social_inputs[platform['id']] = input_field
            
            scroll_layout.addWidget(icon_label, i, 0)
            scroll_layout.addWidget(input_field, i, 1)
        
        scroll_content.setLayout(scroll_layout)
        scroll.setWidget(scroll_content)
        layout.addWidget(scroll)
        
        page.setLayout(layout)
        return page
    
    def create_custom_links_page(self):
        """Create the custom links page"""
        page = QWidget()
        layout = QVBoxLayout()
        layout.setContentsMargins(40, 30, 40, 30)
        
        title = QLabel("Custom Links")
        title.setFont(QFont("Arial Black", 14))
        title.setStyleSheet("color: #ff6600;")
        layout.addWidget(title)
        
        subtitle = QLabel("Add any additional links you want to include in your posts")
        subtitle.setStyleSheet("color: #ff9900;")
        layout.addWidget(subtitle)
        
        layout.addSpacing(20)
        
        # Custom links container
        self.custom_links_container = QVBoxLayout()
        self.custom_link_inputs = []
        
        # Add first empty custom link row
        self.add_custom_link_row()
        
        layout.addLayout(self.custom_links_container)
        
        # Add more button
        btn_add = QPushButton("➕ Add Another Link")
        btn_add.clicked.connect(self.add_custom_link_row)
        btn_add.setMaximumWidth(200)
        layout.addWidget(btn_add)
        
        layout.addStretch()
        page.setLayout(layout)
        return page
    
    def add_custom_link_row(self):
        """Add a new custom link input row"""
        row_layout = QHBoxLayout()
        
        name_input = QLineEdit()
        name_input.setPlaceholderText("Link Name (e.g., 'My Blog')")
        name_input.setMinimumHeight(35)
        
        url_input = QLineEdit()
        url_input.setPlaceholderText("URL (e.g., https://myblog.com)")
        url_input.setMinimumHeight(35)
        
        row_layout.addWidget(name_input, 1)
        row_layout.addWidget(url_input, 2)
        
        self.custom_link_inputs.append((name_input, url_input))
        self.custom_links_container.addLayout(row_layout)
    
    def create_licensing_page(self):
        """Create the licensing and completion page"""
        page = QWidget()
        layout = QVBoxLayout()
        layout.setContentsMargins(40, 30, 40, 30)
        
        title = QLabel("Licensing & Branding")
        title.setFont(QFont("Arial Black", 14))
        title.setStyleSheet("color: #ff6600;")
        layout.addWidget(title)
        
        layout.addSpacing(15)
        
        # Branding info
        branding_info = QLabel("""
<p style="color: #ffffff; font-size: 13px; line-height: 1.8;">
All posts created with this app include <b style="color: #ff6600;">Melksham Mental Health</b> branding:
</p>

<ul style="color: #ffcc99; font-size: 12px; line-height: 2;">
<li>💚 Melksham Mental Health name and website</li>
<li>📘 "Find us on Facebook" link</li>
<li>🏷️ Hashtags: #melksham-mentalhealth #melkshammentalhealth #wobbob</li>
</ul>

<p style="color: #ff9900; font-size: 13px; margin-top: 15px;">
<b>Want to remove this branding?</b>
</p>

<p style="color: #ffffff; font-size: 12px;">
Purchase a one-time license for <b style="color: #00ff00;">£20</b> to remove Melksham Mental Health 
branding from your posts. Your own branding will still appear!
</p>
        """)
        branding_info.setWordWrap(True)
        layout.addWidget(branding_info)
        
        layout.addSpacing(20)
        
        # License key input
        license_group = QGroupBox("Already have a license key?")
        license_group.setStyleSheet("QGroupBox { color: #ff9900; font-weight: bold; }")
        license_layout = QHBoxLayout()
        
        self.input_license = QLineEdit()
        self.input_license.setPlaceholderText("MMH-XXXX-XXXX-XXXX")
        self.input_license.setMinimumHeight(40)
        
        btn_activate = QPushButton("Activate")
        btn_activate.clicked.connect(self.activate_license)
        btn_activate.setMaximumWidth(100)
        
        license_layout.addWidget(self.input_license)
        license_layout.addWidget(btn_activate)
        license_group.setLayout(license_layout)
        layout.addWidget(license_group)
        
        # Purchase button
        btn_purchase = QPushButton("💳 Purchase License (£20)")
        btn_purchase.setMinimumHeight(50)
        btn_purchase.clicked.connect(self.show_purchase_info)
        btn_purchase.setStyleSheet("""
            QPushButton {
                background-color: #00aa00;
                color: white;
                font-weight: bold;
                font-size: 14px;
            }
            QPushButton:hover {
                background-color: #00cc00;
            }
        """)
        layout.addWidget(btn_purchase)
        
        layout.addStretch()
        
        # Completion message
        complete_label = QLabel("Click 'Finish' to complete setup and start creating posts!")
        complete_label.setStyleSheet("color: #00ff00; font-size: 13px;")
        complete_label.setAlignment(Qt.AlignmentFlag.AlignCenter)
        layout.addWidget(complete_label)
        
        page.setLayout(layout)
        return page
    
    def create_navigation(self):
        """Create navigation buttons"""
        nav_layout = QHBoxLayout()
        nav_layout.setContentsMargins(20, 15, 20, 20)
        
        # Skip button (only for first run)
        self.btn_skip = QPushButton("Skip Setup")
        self.btn_skip.clicked.connect(self.skip_setup)
        self.btn_skip.setVisible(self.skip_allowed)
        self.btn_skip.setStyleSheet("background-color: #555555;")
        nav_layout.addWidget(self.btn_skip)
        
        nav_layout.addStretch()
        
        # Back button
        self.btn_back = QPushButton("← Back")
        self.btn_back.clicked.connect(self.go_back)
        nav_layout.addWidget(self.btn_back)
        
        # Next/Finish button
        self.btn_next = QPushButton("Next →")
        self.btn_next.clicked.connect(self.go_next)
        self.btn_next.setMinimumWidth(120)
        nav_layout.addWidget(self.btn_next)
        
        return nav_layout
    
    def update_navigation(self):
        """Update navigation button states"""
        self.progress_label.setText(f"Step {self.current_step + 1} of {self.total_steps}")
        self.btn_back.setEnabled(self.current_step > 0)
        
        if self.current_step == self.total_steps - 1:
            self.btn_next.setText("✓ Finish")
        else:
            self.btn_next.setText("Next →")
    
    def go_back(self):
        """Go to previous page"""
        if self.current_step > 0:
            self.current_step -= 1
            self.stacked_widget.setCurrentIndex(self.current_step)
            self.update_navigation()
    
    def go_next(self):
        """Go to next page or finish"""
        if self.current_step < self.total_steps - 1:
            self.current_step += 1
            self.stacked_widget.setCurrentIndex(self.current_step)
            self.update_navigation()
        else:
            self.finish_setup()
    
    def skip_setup(self):
        """Skip the setup wizard"""
        reply = QMessageBox.question(
            self, "Skip Setup",
            "Are you sure you want to skip setup?\n\n"
            "You can configure your profile later from the Settings tab.",
            QMessageBox.StandardButton.Yes | QMessageBox.StandardButton.No
        )
        if reply == QMessageBox.StandardButton.Yes:
            self.user_config.complete_setup()
            self.accept()
    
    def finish_setup(self):
        """Complete the setup and save all data"""
        # Collect user details
        user_type = "organization" if self.radio_organization.isChecked() else "individual"
        
        self.user_config.set_user_details(
            name=self.input_name.text().strip(),
            user_type=user_type,
            organization_name=self.input_org.text().strip() if user_type == "organization" else "",
            email=self.input_email.text().strip(),
            phone=self.input_phone.text().strip(),
            website=self.input_website.text().strip(),
            location=self.input_location.text().strip(),
            tagline=self.input_tagline.text().strip()
        )
        
        # Collect social media
        for platform_id, input_field in self.social_inputs.items():
            value = input_field.text().strip()
            if value:
                self.user_config.set_social_media(platform_id, value)
        
        # Collect custom links
        for name_input, url_input in self.custom_link_inputs:
            name = name_input.text().strip()
            url = url_input.text().strip()
            if name and url:
                self.user_config.add_custom_link(name, url)
        
        # Mark setup as complete
        self.user_config.complete_setup()
        
        QMessageBox.information(
            self, "Setup Complete",
            "Your profile has been saved!\n\n"
            "You can update these settings anytime from the Settings tab."
        )
        
        self.setup_completed.emit()
        self.accept()
    
    def activate_license(self):
        """Attempt to activate a license key"""
        key = self.input_license.text().strip()
        if self.user_config.activate_license(key):
            QMessageBox.information(
                self, "License Activated",
                "Your license has been activated successfully!\n\n"
                "Melksham Mental Health branding will no longer appear on your posts."
            )
        else:
            QMessageBox.warning(
                self, "Invalid License",
                "The license key you entered is invalid.\n\n"
                "Please check the key and try again, or purchase a new license."
            )
    
    def show_purchase_info(self):
        """Show information about purchasing a license"""
        QMessageBox.information(
            self, "Purchase License",
            "To purchase a license (£20 one-time payment):\n\n"
            "1. Visit: https://melksham-mentalhealth.us/license\n"
            "2. Complete the payment\n"
            "3. Enter your license key in this app\n\n"
            "Your license key will be emailed to you after purchase."
        )
    
    def apply_styling(self):
        """Apply the app styling"""
        self.setStyleSheet("""
            QDialog {
                background-color: #2a2a2a;
            }
            QLabel {
                color: #ffffff;
            }
            QLineEdit {
                border: 2px solid #ff6600;
                border-radius: 0px;
                padding: 8px;
                background-color: #1a1a1a;
                color: #ff9900;
                font-weight: bold;
            }
            QLineEdit:focus {
                border: 2px solid #ff9900;
            }
            QPushButton {
                background-color: #ff6600;
                color: #ffffff;
                border: 2px solid #ff3300;
                border-radius: 0px;
                padding: 10px 20px;
                font-weight: bold;
            }
            QPushButton:hover {
                background-color: #ff3300;
            }
            QPushButton:disabled {
                background-color: #555555;
                color: #999999;
            }
            QRadioButton {
                color: #ffffff;
            }
            QRadioButton::indicator {
                border: 2px solid #ff6600;
                background-color: #1a1a1a;
            }
            QRadioButton::indicator:checked {
                background-color: #ff6600;
            }
            QGroupBox {
                border: 2px solid #ff6600;
                padding: 15px;
                margin-top: 10px;
            }
            QGroupBox::title {
                color: #ff9900;
            }
            QScrollArea {
                background-color: transparent;
            }
        """)


class ProfileSettingsDialog(QDialog):
    """Dialog for editing profile settings after initial setup"""
    
    def __init__(self, user_config: UserConfig, parent=None):
        super().__init__(parent)
        self.user_config = user_config
        
        self.setWindowTitle("Profile Settings")
        self.setMinimumSize(600, 500)
        
        # For now, just reuse the setup wizard in edit mode
        self.init_ui()
    
    def init_ui(self):
        """Initialize the settings UI"""
        layout = QVBoxLayout()
        
        info_label = QLabel("Edit your profile settings here. Changes are saved automatically.")
        info_label.setStyleSheet("color: #ff9900; padding: 10px;")
        layout.addWidget(info_label)
        
        # Launch full wizard button
        btn_wizard = QPushButton("🔧 Open Full Setup Wizard")
        btn_wizard.clicked.connect(self.open_wizard)
        layout.addWidget(btn_wizard)
        
        layout.addStretch()
        
        self.setLayout(layout)
        self.setStyleSheet("QDialog { background-color: #2a2a2a; }")
    
    def open_wizard(self):
        """Open the full setup wizard"""
        wizard = SetupWizardDialog(self.user_config, self, skip_allowed=False)
        wizard.exec()
        self.accept()
