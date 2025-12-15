"""
Post Formatter - Handles formatting and output of mental health posts
"""

from typing import Dict, List
from datetime import datetime

class PostFormatter:
    """Formats and saves mental health posts"""
    
    def __init__(self):
        self.disclaimer = "\n⚠️  IMPORTANT:  This is not a substitute for professional help. If you need urgent support, please contact NHS 111, Samaritans (116 123), or your local GP."
    
    def format_post(self, post: Dict) -> str:
        """Format a post for display"""
        if post.get('error'):
            return f"❌ Error: {post. get('content', 'Unknown error')}"
        
        content_type = post.get('type', 'general')
        output = []
        
        # Header based on type
        type_headers = {
            'quote': '💬 INSPIRATIONAL QUOTE',
            'story': '📖 UPLIFTING STORY',
            'advice': '💡 PRACTICAL ADVICE',
            'affirmation': '✨ POSITIVE AFFIRMATION',
            'educational': '📚 MENTAL HEALTH EDUCATION',
            'resource': '📍 LOCAL RESOURCE',
            'crisis':  '🆘 CRISIS SUPPORT',
            'seasonal': '🌟 SEASONAL SUPPORT'
        }
        
        header = type_headers.get(content_type, '💚 MENTAL HEALTH POST')
        output.append(f"\n{header}")
        output.append("-" * 60)
        
        # Title if exists
        if 'title' in post:
            output.append(f"\n{post['title']}\n")
        
        # Main content
        if 'text' in post:
            output. append(post['text'])
        elif 'content' in post: 
            output.append(post['content'])
        
        # Author/source for quotes
        if content_type == 'quote' and 'author' in post: 
            output.append(f"\n— {post['author']}")
            if 'source' in post: 
                output.append(f"   ({post['source']})")
        
        # Topics
        if 'topics' in post and post['topics']:
            topics_str = ", ".join(post['topics'])
            output.append(f"\n🏷️  Topics: {topics_str}")
        
        # Resource specific info
        if content_type == 'resource':
            if 'phone' in post:
                output. append(f"\n📞 Phone: {post['phone']}")
            if 'website' in post:
                output. append(f"🌐 Website: {post['website']}")
            if 'location' in post:
                output.append(f"📍 Location: {post['location']}")
        
        # Crisis specific info
        if content_type == 'crisis':
            if 'phone' in post:
                output. append(f"\n📞 Phone: {post['phone']}")
            if 'text' in post and 'textline' in str(post).lower():
                output.append(f"💬 Text: {post. get('textline', '')}")
            if 'hours' in post:
                output. append(f"🕐 Hours: {post['hours']}")
            if 'website' in post:
                output. append(f"🌐 Website: {post['website']}")
        
        # Add disclaimer for serious topics
        serious_topics = ['suicide', 'self-harm', 'crisis', 'emergency', 'severe']
        if any(topic. lower() in str(post).lower() for topic in serious_topics):
            output. append(self.disclaimer)
        
        # Footer
        output.append("\n" + "-" * 60)
        output.append(f"Generated:  {datetime.now().strftime('%Y-%m-%d %H:%M')}")
        output.append("Melksham Mental Health - Spreading Positivity & Support 💚")
        
        return "\n".join(output)
    
    def format_resources(self, resources: List[Dict]) -> str:
        """Format local resources list"""
        if not resources: 
            return "\nNo local resources found in database."
        
        output = []
        for resource in resources: 
            output.append(f"\n📍 {resource. get('name', 'Unknown')}")
            if 'description' in resource:
                output. append(f"   {resource['description']}")
            if 'phone' in resource:
                output. append(f"   📞 {resource['phone']}")
            if 'website' in resource: 
                output.append(f"   🌐 {resource['website']}")
            if 'location' in resource:
                output.append(f"   📌 {resource['location']}")
            output.append("")
        
        return "\n".join(output)
    
    def format_crisis_info(self, crisis_info:  List[Dict]) -> str:
        """Format crisis support information"""
        if not crisis_info: 
            return "\nNo crisis information found in database."
        
        output = ["\n🆘 If you're in immediate danger, call 999\n"]
        
        for info in crisis_info:
            output.append(f"📞 {info.get('name', 'Support Service')}")
            if 'phone' in info:
                output. append(f"   Phone: {info['phone']}")
            if 'textline' in info:
                output.append(f"   Text: {info['textline']}")
            if 'hours' in info:
                output.append(f"   Hours: {info['hours']}")
            if 'website' in info:
                output.append(f"   Website: {info['website']}")
            if 'description' in info:
                output. append(f"   {info['description']}")
            output.append("")
        
        return "\n".join(output)
    
    def save_post(self, formatted_post: str, filename: str):
        """Save a formatted post to file"""
        try:
            with open(filename, 'w', encoding='utf-8') as f:
                f.write(formatted_post)
        except IOError as e:
            print(f"Error saving file: {e}")
    
    def save_batch(self, posts: List[Dict], filename: str):
        """Save multiple posts to a single file"""
        try:
            with open(filename, 'w', encoding='utf-8') as f:
                f.write("=" * 60 + "\n")
                f.write("   BATCH GENERATED MENTAL HEALTH POSTS\n")
                f.write("   Melksham Mental Health\n")
                f.write("=" * 60 + "\n\n")
                
                for i, post in enumerate(posts, 1):
                    f.write(f"\n\n{'='*60}\n")
                    f.write(f"POST #{i}\n")
                    f.write(f"{'='*60}\n")
                    formatted = self.format_post(post)
                    f.write(formatted)
                    f.write("\n")
        except IOError as e:
            print(f"Error saving batch file: {e}")