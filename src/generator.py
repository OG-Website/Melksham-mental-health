"""
Content Generator - Core logic for generating mental health posts
"""

import json
import random
from pathlib import Path
from typing import Dict, List, Optional

class ContentGenerator:
    """Handles loading and generating mental health content"""
    
    def __init__(self, data_dir: str = "data"):
        """Initialize the content generator"""
        self.data_dir = Path(data_dir)
        self.content = {}
        self.load_all_content()
    
    def load_all_content(self):
        """Load all content from JSON files"""
        files = {
            'quotes': 'quotes.json',
            'stories': 'stories.json',
            'advice': 'advice.json',
            'affirmations': 'affirmations. json',
            'educational': 'educational.json',
            'resources': 'resources.json',
            'crisis': 'crisis.json',
            'seasonal': 'seasonal.json'
        }
        
        for key, filename in files.items():
            filepath = self.data_dir / filename
            try:
                with open(filepath, 'r', encoding='utf-8') as f:
                    self.content[key] = json.load(f)
            except FileNotFoundError:
                print(f"Warning: {filename} not found. Creating empty dataset.")
                self.content[key] = []
            except json.JSONDecodeError:
                print(f"Warning:  {filename} is invalid JSON. Creating empty dataset.")
                self.content[key] = []
    
    def generate_random(self) -> Dict:
        """Generate a random post from all content types"""
        content_types = ['quotes', 'stories', 'advice', 'affirmations', 'educational']
        content_type = random.choice(content_types)
        return self.generate_by_type(content_type)
    
    def generate_by_type(self, content_type: str) -> Dict:
        """Generate content of a specific type"""
        if content_type not in self.content or not self.content[content_type]:
            return {
                'type': content_type,
                'content': 'No content available for this type.',
                'error': True
            }
        
        item = random.choice(self.content[content_type])
        item['type'] = content_type
        return item
    
    def generate_by_topic(self, topic:  str) -> Dict:
        """Generate content filtered by topic"""
        matching_content = []
        
        for content_type, items in self.content.items():
            if content_type in ['crisis', 'resources', 'seasonal']:
                continue
                
            for item in items: 
                if 'topics' in item and topic. lower() in [t.lower() for t in item['topics']]:
                    item_copy = item.copy()
                    item_copy['type'] = content_type
                    matching_content.append(item_copy)
        
        if not matching_content:
            return {
                'type': 'general',
                'content': f'No specific content found for "{topic}", but remember:  seeking help is a sign of strength.',
                'topics': [topic]
            }
        
        return random.choice(matching_content)
    
    def generate_by_audience(self, audience: str) -> Dict:
        """Generate content filtered by audience"""
        matching_content = []
        
        for content_type, items in self.content.items():
            if content_type in ['crisis', 'resources', 'seasonal']: 
                continue
                
            for item in items:
                if 'audience' in item and audience.lower() in [a.lower() for a in item['audience']]:
                    item_copy = item.copy()
                    item_copy['type'] = content_type
                    matching_content.append(item_copy)
        
        if not matching_content:
            # Fallback to general content
            return self.generate_random()
        
        return random. choice(matching_content)
    
    def batch_generate(self, count: int) -> List[Dict]:
        """Generate multiple random posts"""
        posts = []
        for _ in range(count):
            posts.append(self.generate_random())
        return posts
    
    def get_local_resources(self) -> List[Dict]:
        """Get Melksham and Wiltshire specific resources"""
        if 'resources' in self.content:
            return [r for r in self.content['resources'] if r. get('location') in ['Melksham', 'Wiltshire', 'Local']]
        return []
    
    def get_crisis_support(self) -> List[Dict]:
        """Get crisis support information"""
        return self.content.get('crisis', [])
    
    def search_content(self, keyword: str) -> List[Dict]:
        """Search all content for a keyword"""
        results = []
        keyword_lower = keyword.lower()
        
        for content_type, items in self.content.items():
            for item in items:
                # Search in various fields
                searchable_text = ""
                if 'content' in item:
                    searchable_text += item['content']. lower()
                if 'title' in item:
                    searchable_text += " " + item['title'].lower()
                if 'text' in item:
                    searchable_text += " " + item['text'].lower()
                
                if keyword_lower in searchable_text: 
                    result = {
                        'type':  content_type,
                        'item': item,
                        'preview': (item.get('title') or item.get('text', '')[:60] or item.get('content', '')[:60]) + "..."
                    }
                    results.append(result)
        
        return results
    
    def get_statistics(self) -> Dict:
        """Get content statistics"""
        stats = {
            'quotes': len(self.content. get('quotes', [])),
            'stories': len(self.content.get('stories', [])),
            'advice': len(self. content.get('advice', [])),
            'affirmations': len(self.content.get('affirmations', [])),
            'educational': len(self.content. get('educational', [])),
            'resources': len(self.content.get('resources', [])),
            'crisis': len(self. content.get('crisis', [])),
            'seasonal': len(self.content.get('seasonal', [])),
        }
        
        stats['total'] = sum(stats. values())
        
        # Count unique topics
        all_topics = set()
        for content_type, items in self.content.items():
            for item in items:
                if 'topics' in item: 
                    all_topics.update(item['topics'])
        stats['topics'] = len(all_topics)
        
        return stats