#!/usr/bin/env python3
"""
User Configuration System for Melksham Mental Health App
Handles user/organization details, social media links, and licensing
"""

import json
import os
from pathlib import Path
from datetime import datetime
from typing import Dict, List, Optional


class UserConfig:
    """Manages user/organization configuration and licensing"""
    
    # Default social media platforms
    SOCIAL_PLATFORMS = [
        {"id": "facebook", "name": "Facebook", "url_prefix": "https://facebook.com/", "icon": "📘"},
        {"id": "instagram", "name": "Instagram", "url_prefix": "https://instagram.com/", "icon": "📸"},
        {"id": "twitter", "name": "X (Twitter)", "url_prefix": "https://x.com/", "icon": "🐦"},
        {"id": "tiktok", "name": "TikTok", "url_prefix": "https://tiktok.com/@", "icon": "🎵"},
        {"id": "youtube", "name": "YouTube", "url_prefix": "https://youtube.com/", "icon": "📺"},
        {"id": "linkedin", "name": "LinkedIn", "url_prefix": "https://linkedin.com/in/", "icon": "💼"},
        {"id": "threads", "name": "Threads", "url_prefix": "https://threads.net/@", "icon": "🧵"},
        {"id": "snapchat", "name": "Snapchat", "url_prefix": "https://snapchat.com/add/", "icon": "👻"},
        {"id": "pinterest", "name": "Pinterest", "url_prefix": "https://pinterest.com/", "icon": "📌"},
        {"id": "whatsapp", "name": "WhatsApp", "url_prefix": "https://wa.me/", "icon": "💬"},
    ]
    
    # Permanent Melksham Mental Health branding (cannot be removed without license)
    MMH_BRANDING = {
        "name": "Melksham Mental Health",
        "website": "https://melksham-mentalhealth.us",
        "email": "help@melksham-mentalhealth.us",
        "facebook": "https://facebook.com/melkshammentalhealth",
        "hashtags": ["#melksham-mentalhealth", "#melkshammentalhealth", "#wobbob"],
        "tagline": "⚡ REAL STRUGGLES. REAL SUPPORT ⚡",
        "footer_text": "Created with Melksham Mental Health Post Creator"
    }
    
    # License cost
    LICENSE_COST = 20.00  # £20 one-time payment
    
    def __init__(self, config_dir: Optional[str] = None):
        """Initialize user configuration"""
        if config_dir:
            self.config_dir = Path(config_dir)
        else:
            # Default to user's home directory
            self.config_dir = Path.home() / ".melksham_mental_health"
        
        self.config_dir.mkdir(parents=True, exist_ok=True)
        self.config_file = self.config_dir / "user_config.json"
        self.license_file = self.config_dir / "license.json"
        
        self.config = self.load_config()
        self.license_info = self.load_license()
    
    def load_config(self) -> Dict:
        """Load user configuration from file"""
        default_config = {
            "user_type": "individual",  # "individual" or "organization"
            "name": "",
            "organization_name": "",
            "email": "",
            "phone": "",
            "website": "",
            "social_media": {},  # {"facebook": "username", "instagram": "username", ...}
            "custom_links": [],  # [{"name": "My Blog", "url": "https://..."}, ...]
            "location": "",
            "tagline": "",
            "setup_completed": False,
            "created_at": None,
            "updated_at": None
        }
        
        if self.config_file.exists():
            try:
                with open(self.config_file, 'r', encoding='utf-8') as f:
                    saved_config = json.load(f)
                    # Merge with defaults to ensure all keys exist
                    default_config.update(saved_config)
            except Exception as e:
                print(f"Error loading config: {e}")
        
        return default_config
    
    def save_config(self):
        """Save user configuration to file"""
        self.config["updated_at"] = datetime.now().isoformat()
        if not self.config.get("created_at"):
            self.config["created_at"] = datetime.now().isoformat()
        
        try:
            with open(self.config_file, 'w', encoding='utf-8') as f:
                json.dump(self.config, f, indent=2)
        except Exception as e:
            print(f"Error saving config: {e}")
    
    def load_license(self) -> Dict:
        """Load license information"""
        default_license = {
            "is_licensed": False,
            "license_key": None,
            "purchase_date": None,
            "license_type": "free",  # "free", "paid", "subscription"
            "subscription_end": None,
            "branding_removed": False
        }
        
        if self.license_file.exists():
            try:
                with open(self.license_file, 'r', encoding='utf-8') as f:
                    saved_license = json.load(f)
                    default_license.update(saved_license)
            except Exception as e:
                print(f"Error loading license: {e}")
        
        return default_license
    
    def save_license(self):
        """Save license information"""
        try:
            with open(self.license_file, 'w', encoding='utf-8') as f:
                json.dump(self.license_info, f, indent=2)
        except Exception as e:
            print(f"Error saving license: {e}")
    
    def is_setup_complete(self) -> bool:
        """Check if initial setup is complete"""
        return self.config.get("setup_completed", False)
    
    def complete_setup(self):
        """Mark setup as complete"""
        self.config["setup_completed"] = True
        self.save_config()
    
    def set_user_details(self, name: str, user_type: str = "individual", 
                         organization_name: str = "", email: str = "",
                         phone: str = "", website: str = "", 
                         location: str = "", tagline: str = ""):
        """Set user/organization details"""
        self.config["name"] = name
        self.config["user_type"] = user_type
        self.config["organization_name"] = organization_name
        self.config["email"] = email
        self.config["phone"] = phone
        self.config["website"] = website
        self.config["location"] = location
        self.config["tagline"] = tagline
        self.save_config()
    
    def set_social_media(self, platform: str, username_or_url: str):
        """Set a social media link"""
        self.config["social_media"][platform] = username_or_url
        self.save_config()
    
    def remove_social_media(self, platform: str):
        """Remove a social media link"""
        if platform in self.config["social_media"]:
            del self.config["social_media"][platform]
            self.save_config()
    
    def add_custom_link(self, name: str, url: str):
        """Add a custom link"""
        self.config["custom_links"].append({"name": name, "url": url})
        self.save_config()
    
    def remove_custom_link(self, index: int):
        """Remove a custom link by index"""
        if 0 <= index < len(self.config["custom_links"]):
            self.config["custom_links"].pop(index)
            self.save_config()
    
    def get_display_name(self) -> str:
        """Get the display name (organization or personal name)"""
        if self.config["user_type"] == "organization" and self.config["organization_name"]:
            return self.config["organization_name"]
        return self.config["name"] or "Mental Health Advocate"
    
    def is_branding_required(self) -> bool:
        """Check if Melksham Mental Health branding is required"""
        # Branding is always required unless licensed
        if self.license_info.get("is_licensed") and self.license_info.get("branding_removed"):
            return False
        return True
    
    def activate_license(self, license_key: str) -> bool:
        """Activate a license key"""
        # In a real implementation, this would validate against a server
        # For now, we'll use a simple validation
        if self.validate_license_key(license_key):
            self.license_info["is_licensed"] = True
            self.license_info["license_key"] = license_key
            self.license_info["purchase_date"] = datetime.now().isoformat()
            self.license_info["license_type"] = "paid"
            self.license_info["branding_removed"] = True
            self.save_license()
            return True
        return False
    
    def validate_license_key(self, key: str) -> bool:
        """Validate a license key format"""
        # Simple validation - in production this would check a server
        # Format: MMH-XXXX-XXXX-XXXX
        if not key:
            return False
        parts = key.upper().split("-")
        if len(parts) != 4:
            return False
        if parts[0] != "MMH":
            return False
        for part in parts[1:]:
            if len(part) != 4 or not part.isalnum():
                return False
        return True
    
    def generate_post_footer(self) -> str:
        """Generate the footer text for posts"""
        lines = []
        
        # Add separator
        lines.append("")
        lines.append("═" * 50)
        
        # User/Organization branding (if configured)
        display_name = self.get_display_name()
        if display_name and display_name != "Mental Health Advocate":
            lines.append(f"📢 Shared by: {display_name}")
            
            if self.config.get("website"):
                lines.append(f"🌐 {self.config['website']}")
            
            # User's social media
            if self.config.get("social_media"):
                social_links = []
                for platform_id, username in self.config["social_media"].items():
                    platform = next((p for p in self.SOCIAL_PLATFORMS if p["id"] == platform_id), None)
                    if platform:
                        social_links.append(f"{platform['icon']} {platform['name']}")
                if social_links:
                    lines.append(f"📱 {' | '.join(social_links)}")
            
            # Custom links
            for link in self.config.get("custom_links", []):
                lines.append(f"🔗 {link['name']}: {link['url']}")
            
            if self.config.get("tagline"):
                lines.append(f"💬 {self.config['tagline']}")
        
        # Melksham Mental Health permanent branding (unless licensed)
        if self.is_branding_required():
            lines.append("")
            lines.append("─" * 50)
            lines.append(f"💚 {self.MMH_BRANDING['name']}")
            lines.append(f"🌐 {self.MMH_BRANDING['website']}")
            lines.append(f"📘 Find us on Facebook")
            lines.append(f"🏷️ {' '.join(self.MMH_BRANDING['hashtags'])}")
            lines.append(f"{self.MMH_BRANDING['tagline']}")
        
        lines.append("═" * 50)
        
        return "\n".join(lines)
    
    def generate_hashtags(self) -> str:
        """Generate hashtags for posts"""
        hashtags = []
        
        # Melksham Mental Health hashtags (permanent unless licensed)
        if self.is_branding_required():
            hashtags.extend(self.MMH_BRANDING["hashtags"])
        
        # Add common mental health hashtags
        hashtags.extend([
            "#MentalHealthMatters",
            "#MentalHealthAwareness",
            "#YouAreNotAlone"
        ])
        
        return " ".join(hashtags)
    
    def get_full_post_text(self, content: str, include_footer: bool = True) -> str:
        """Get the full post text with branding"""
        parts = [content]
        
        if include_footer:
            parts.append(self.generate_post_footer())
        
        return "\n".join(parts)


class SetupWizard:
    """First-run setup wizard data handler"""
    
    def __init__(self, user_config: UserConfig):
        self.config = user_config
    
    def get_setup_steps(self) -> List[Dict]:
        """Get the setup wizard steps"""
        return [
            {
                "step": 1,
                "title": "Welcome",
                "description": "Welcome to Melksham Mental Health Post Creator! Let's set up your profile."
            },
            {
                "step": 2,
                "title": "Your Details",
                "description": "Tell us about yourself or your organization.",
                "fields": ["user_type", "name", "organization_name", "email", "location"]
            },
            {
                "step": 3,
                "title": "Your Website",
                "description": "Add your website and contact information.",
                "fields": ["website", "phone", "tagline"]
            },
            {
                "step": 4,
                "title": "Social Media",
                "description": "Connect your social media accounts.",
                "fields": ["social_media"]
            },
            {
                "step": 5,
                "title": "Custom Links",
                "description": "Add any additional links you want to include.",
                "fields": ["custom_links"]
            },
            {
                "step": 6,
                "title": "Licensing",
                "description": "Posts include Melksham Mental Health branding. Remove it with a £20 one-time payment.",
                "fields": ["license_key"]
            },
            {
                "step": 7,
                "title": "Complete",
                "description": "You're all set! Start creating amazing mental health content."
            }
        ]
