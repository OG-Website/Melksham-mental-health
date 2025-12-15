#!/usr/bin/env python3
"""
First run setup - Downloads all content and configures the application
"""

import sys
import json
from pathlib import Path

# Add src to path
sys.path.insert(0, str(Path(__file__).parent.parent))

def create_directory_structure():
    """Create all necessary directories"""
    directories = ['data', 'docs', 'scripts', 'templates', 'src']
    for dir_name in directories:
        Path(dir_name).mkdir(exist_ok=True)
    print("✓ Directory structure created")

def create_melksham_resources():
    """Create Melksham/Wiltshire resources file"""
    resources = [
        {
            "name": "NHS 24/7 Mental Health Helpline (Avon & Wiltshire Partnership)",
            "description": "Call if you or someone else is in crisis, feeling unsafe, or needs urgent support",
            "phone": "0800 953 1919",
            "website": "https://www.awp.nhs.uk",
            "location": "Wiltshire",
            "type": "NHS Crisis Line",
            "hours": "24/7",
            "priority": "urgent"
        },
        {
            "name": "NHS 111",
            "description": "For urgent medical concerns or if you're unsure who to call",
            "phone": "111",
            "website": "https://www.nhs.uk/111",
            "location": "UK-wide",
            "type": "NHS Urgent Care",
            "hours":  "24/7",
            "priority": "urgent"
        },
        {
            "name":  "NHS Talking Therapies (IAPT) Wiltshire",
            "description":  "Self-referral for adults (no GP needed). Free access to CBT, counselling, guided self-help, and more",
            "phone": "01380 731335",
            "website": "https://www.wiltshiretalkingtherapies. nhs.uk",
            "location": "Wiltshire",
            "type": "NHS Therapy Service",
            "email": "awp. wiltshireiapt@nhs.net"
        },
        {
            "name": "Turning Point – Wiltshire Substance Use Service",
            "description": "Confidential support for alcohol/drug use and mental health",
            "phone":  "0345 603 6993",
            "email": "wiltshire.referrals@turning-point.co.uk",
            "website":  "https://www.turning-point.co.uk/services/wiltshire",
            "location": "Wiltshire",
            "type":  "Substance Use Support"
        },
        {
            "name":  "Wiltshire Mind",
            "description": "Counselling, peer support, wellbeing groups for adults and young people",
            "phone": "01225 706532",
            "email": "office@wiltshiremind. co.uk",
            "website": "https://www.wiltshiremind.co.uk",
            "location": "Wiltshire",
            "type": "Local Mental Health Charity"
        },
        {
            "name":  "Samaritans (West Wiltshire Branch)",
            "description": "24/7 confidential emotional support",
            "phone": "116 123",
            "email": "jo@samaritans.org",
            "website":  "https://www.samaritans.org/branches/west-wiltshire",
            "location": "West Wiltshire",
            "type":  "Crisis Support",
            "hours": "24/7"
        },
        {
            "name": "The Community Hub Melksham",
            "description":  "Safe space, info, signposting, and a friendly ear",
            "phone": "01225 704187",
            "email": "melkshamhub@gmail.com",
            "address": "1 Market Place, Melksham SN12 6ES",
            "website": "https://www.facebook.com/CommunityHubMelksham",
            "location": "Melksham",
            "type": "Community Hub"
        },
        {
            "name":  "Alabaré Wiltshire",
            "description":  "Support for homelessness, mental health, and veterans",
            "phone": "01722 322882",
            "email": "info@alabare.co.uk",
            "website":  "https://www.alabare.co.uk",
            "location": "Wiltshire",
            "type": "Homelessness & Mental Health Support"
        },
        {
            "name": "Wiltshire Mental Health Inclusion Service (Richmond Fellowship)",
            "description": "Social inclusion, wellbeing support, and activities",
            "phone": "01380 724833",
            "website": "https://www.richmondfellowship.org.uk/wiltshire",
            "location": "Wiltshire",
            "type": "Social Inclusion Service"
        },
        {
            "name":  "Carer Support Wiltshire",
            "description": "Advice, events, and emotional support for unpaid carers",
            "phone": "0800 181 4118",
            "email": "admin@carersupportwiltshire. co.uk",
            "website":  "https://carersupportwiltshire.co. uk",
            "location": "Wiltshire",
            "type": "Carer Support"
        },
        {
            "name": "Melksham Family Hub",
            "description": "Support for parents, children, and young people",
            "website": "https://www.wiltshire.gov.uk/children-young-people-family-hubs",
            "location": "Melksham",
            "type":  "Family Support"
        },
        {
            "name": "Wiltshire Parent Carer Council",
            "description": "For families with children with additional needs",
            "website": "https://www.wiltshireparentcarercouncil.co.uk",
            "location": "Wiltshire",
            "type":  "Parent Support"
        },
        {
            "name": "Melksham Town Council",
            "description": "Local events, community information, and support services directory",
            "website": "https://www.melksham-tc.gov.uk",
            "location": "Melksham",
            "type": "Local Authority"
        }
    ]
    
    with open('data/resources.json', 'w', encoding='utf-8') as f:
        json.dump(resources, f, indent=2, ensure_ascii=False)
    
    print(f"✓ Saved {len(resources)} Melksham/Wiltshire resources")

def create_crisis_information():
    """Create crisis support information"""
    crisis = [
        {
            "name":  "EMERGENCY - 999",
            "description": "If you or someone else is at immediate risk, call 999",
            "phone": "999",
            "hours": "24/7",
            "type": "Emergency",
            "priority": 1
        },
        {
            "name": "NHS 24/7 Mental Health Helpline (AWP)",
            "description": "Urgent mental health support for Wiltshire residents.  Call if you or someone else is in crisis",
            "phone": "0800 953 1919",
            "hours": "24/7",
            "website": "https://www.awp.nhs.uk",
            "type": "Local NHS Crisis",
            "priority": 2
        },
        {
            "name": "NHS 111",
            "description":  "For urgent medical concerns or if you're unsure who to call",
            "phone": "111",
            "hours": "24/7",
            "website": "https://www.nhs.uk/111",
            "type": "NHS Urgent Care",
            "priority": 2
        },
        {
            "name": "Samaritans",
            "description": "24/7 confidential emotional support for anyone in distress",
            "phone": "116 123",
            "email": "jo@samaritans.org",
            "hours": "24/7, 365 days a year",
            "website": "https://www.samaritans.org",
            "type": "Crisis Line",
            "priority": 3
        },
        {
            "name": "Shout",
            "description": "Free, confidential, 24/7 text messaging support service",
            "textline": "Text SHOUT to 85258",
            "hours": "24/7",
            "website": "https://giveusashout.org",
            "type": "Text Support",
            "priority": 3
        },
        {
            "name": "CALM (Campaign Against Living Miserably)",
            "description": "Support for anyone struggling, with focus on men's mental health",
            "phone": "0800 58 58 58",
            "webchat": "Available on website",
            "hours": "5pm-midnight daily",
            "website": "https://www.thecalmzone.net",
            "type": "Crisis Support",
            "priority": 3
        },
        {
            "name":  "Papyrus HOPELINEUK",
            "description": "Suicide prevention service for young people under 35",
            "phone": "0800 068 4141",
            "textline": "07860 039967",
            "email": "pat@papyrus-uk.org",
            "hours": "9am-midnight daily",
            "website": "https://www.papyrus-uk.org",
            "type": "Youth Crisis Support",
            "priority": 3
        },
        {
            "name": "Mind InfoLine",
            "description": "Information and support for mental health concerns",
            "phone": "0300 123 3393",
            "textline": "Text 86463",
            "hours": "9am-6pm, Monday to Friday",
            "website":  "https://www.mind.org.uk",
            "type":  "Information & Support"
        },
        {
            "name": "Rethink Mental Illness Advice Line",
            "description": "Expert advice for people affected by mental illness",
            "phone": "0808 801 0525",
            "hours": "9:30am-4pm, Monday to Friday",
            "website": "https://www.rethink.org",
            "type": "Advice & Information"
        },
        {
            "name": "SANEline",
            "description": "Emotional support and information",
            "phone": "0300 304 7000",
            "hours": "4: 30pm-10: 30pm daily",
            "website": "https://www.sane.org.uk",
            "type": "Support Line"
        }
    ]
    
    with open('data/crisis. json', 'w', encoding='utf-8') as f:
        json.dump(crisis, f, indent=2, ensure_ascii=False)
    
    print(f"✓ Saved {len(crisis)} crisis support services")

def fetch_api_content():
    """Fetch content from free APIs"""
    try:
        from src.api_integrations import APIContentFetcher, merge_with_existing_content
        
        print("\n📡 Fetching content from free APIs...")
        fetcher = APIContentFetcher()
        api_content = fetcher.fetch_all_content()
        
        merge_with_existing_content(api_content, Path('data'))
        return True
    except Exception as e:
        print(f"⚠ Warning: Could not fetch API content: {e}")
        print("Creating minimal database...")
        return False

def create_env_example():
    """Create example environment file"""
    env_content = """# Social Media API Keys (Optional)
# Copy this file to .env and add your keys

# Twitter/X API (https://developer.twitter.com)
TWITTER_API_KEY=your_api_key_here
TWITTER_API_SECRET=your_api_secret_here
TWITTER_ACCESS_TOKEN=your_access_token_here
TWITTER_ACCESS_TOKEN_SECRET=your_access_token_secret_here

# Facebook/Instagram API (https://developers.facebook.com)
FACEBOOK_PAGE_ACCESS_TOKEN=your_page_access_token_here
FACEBOOK_PAGE_ID=your_page_id_here

# Instagram (Business/Creator account required)
INSTAGRAM_USERNAME=your_username
INSTAGRAM_PASSWORD=your_password

# Optional: Enable auto-posting
AUTO_POST_ENABLED=false
POST_INTERVAL_HOURS=24
"""
    
    with open('. env. example', 'w') as f:
        f.write(env_content)
    
    print("✓ Created . env.example for social media configuration")

def create_gitignore():
    """Create .gitignore file"""
    gitignore_content = """# Environment variables
.env

# Python
__pycache__/
*. py[cod]
*$py.class
*.so
.Python
venv/
env/
*. egg-info/

# IDEs
.vscode/
. idea/
*.swp
*. swo

# OS
.DS_Store
Thumbs.db

# Logs
*.log
social_media_log.json

# User data
saved_posts/
"""
    
    with open('.gitignore', 'w') as f:
        f.write(gitignore_content)
    
    print("✓ Created .gitignore")

def display_completion():
    """Display setup completion message"""
    print("\n" + "="*60)
    print("✅ FIRST RUN SETUP COMPLETE!")
    print("="*60)
    
    # Count content
    data_dir = Path('data')
    stats = {}
    for file in ['quotes', 'stories', 'advice', 'affirmations', 'educational', 'resources', 'crisis']:
        filepath = data_dir / f"{file}.json"
        if filepath.exists():
            try:
                with open(filepath, 'r', encoding='utf-8') as f:
                    data = json.load(f)
                    stats[file] = len(data)
            except: 
                stats[file] = 0
    
    print("\n📊 Your Content Database:")
    for content_type, count in stats.items():
        print(f"   • {content_type. capitalize()}: {count} items")
    
    total = sum(stats.values())
    print(f"\n   Total:  {total} pieces of content!")
    
    print("\n💚 Everything is ready to use!")
    print("   Run the application from the main menu")
    print("="*60 + "\n")

def main():
    """Main setup function"""
    print("🔧 Running first-time setup.. .\n")
    
    try:
        create_directory_structure()
        create_melksham_resources()
        create_crisis_information()
        fetch_api_content()
        create_env_example()
        create_gitignore()
        display_completion()
        
        return 0
    except Exception as e: 
        print(f"\n❌ Setup failed: {e}")
        import traceback
        traceback.print_exc()
        print("\nPlease report this issue on GitHub")
        return 1

if __name__ == "__main__": 
    sys.exit(main())