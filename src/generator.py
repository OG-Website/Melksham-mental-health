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
            'affirmations': 'affirmations.json',
            'educational': 'educational.json',
            'resources': 'resources.json',
            'crisis': 'crisis.json',
            'seasonal': 'seasonal.json'
        }
        
        for key, filename in files.items():
            filepath = self.data_dir / filename
            try:
                with open(filepath, 'r', encoding='utf-8') as f:
                    data = json.load(f)
                    self.content[key] = data if isinstance(data, list) else []
                    print(f"✓ Loaded {len(self.content[key])} items from {filename}")
            except FileNotFoundError:
                print(f"✗ Warning: {filename} not found. Creating empty dataset.")
                self.content[key] = []
            except json.JSONDecodeError as e:
                print(f"✗ Warning: {filename} is invalid JSON: {e}. Creating empty dataset.")
                self.content[key] = []
    
    def generate_random(self) -> Dict:
        """Generate a random post from all content types"""
        content_types = ['quotes', 'stories', 'advice', 'affirmations', 'educational']
        
        # Filter to types that have content
        available_types = [t for t in content_types if self.content.get(t)]
        
        if not available_types:
            return {
                'type': 'error',
                'content': 'No content available. Please check your data files.',
                'error': True
            }
        
        content_type = random.choice(available_types)
        return self.generate_by_type(content_type)
    
    def generate_by_type(self, content_type: str) -> Dict:
        """Generate content of a specific type"""
        # Normalize type name
        content_type = content_type.lower().strip()
        
        if content_type not in self.content or not self.content[content_type]:
            return {
                'type': content_type,
                'content': f'No content available for type: {content_type}',
                'error': True
            }
        
        item = random.choice(self.content[content_type])
        result = item.copy()
        result['type'] = content_type
        return result
    
    def generate_by_topic(self, topic: str) -> Dict:
        """Generate content filtered by topic"""
        matching_content = []
        topic_lower = topic.lower().strip()
        
        for content_type, items in self.content.items():
            if content_type in ['crisis', 'resources', 'seasonal']:
                continue
            
            if not isinstance(items, list):
                continue
                
            for item in items:
                if not isinstance(item, dict):
                    continue
                if 'topics' in item and isinstance(item['topics'], list):
                    item_topics = [t.lower() for t in item['topics']]
                    if topic_lower in item_topics or any(topic_lower in t for t in item_topics):
                        item_copy = item.copy()
                        item_copy['type'] = content_type
                        matching_content.append(item_copy)
        
        if not matching_content:
            return {
                'type': 'general',
                'content': f'No specific content found for "{topic}", but remember: seeking help is a sign of strength.',
                'topics': [topic]
            }
        
        return random.choice(matching_content)
    
    def generate_by_audience(self, audience: str) -> Dict:
        """Generate content filtered by audience"""
        matching_content = []
        audience_lower = audience.lower().strip()
        
        for content_type, items in self.content.items():
            if content_type in ['crisis', 'resources', 'seasonal']:
                continue
            
            if not isinstance(items, list):
                continue
                
            for item in items:
                if not isinstance(item, dict):
                    continue
                if 'audience' in item and isinstance(item['audience'], list):
                    item_audiences = [a.lower() for a in item['audience']]
                    if audience_lower in item_audiences or 'general' in item_audiences:
                        item_copy = item.copy()
                        item_copy['type'] = content_type
                        matching_content.append(item_copy)
        
        if not matching_content:
            return self.generate_random()
        
        return random.choice(matching_content)
    
    def batch_generate(self, count: int) -> List[Dict]:
        """Generate multiple random posts"""
        posts = []
        for _ in range(count):
            posts.append(self.generate_random())
        return posts
    
    def get_local_resources(self) -> List[Dict]:
        """Get Melksham and Wiltshire specific resources"""
        if 'resources' in self.content and isinstance(self.content['resources'], list):
            return [r for r in self.content['resources'] 
                    if isinstance(r, dict) and r.get('location') in ['Melksham', 'Wiltshire', 'Local', 'UK']]
        return []
    
    def get_crisis_support(self) -> List[Dict]:
        """Get crisis support information"""
        return self.content.get('crisis', [])
    
    def get_crisis_info(self) -> Dict:
        """Get crisis info as a formatted dict"""
        crisis_data = self.content.get('crisis', [])
        if crisis_data:
            return {
                'type': 'crisis',
                'content': '\n\n'.join([
                    f"🆘 {item.get('name', 'Resource')}\n"
                    f"📞 {item.get('phone', 'N/A')}\n"
                    f"ℹ️ {item.get('description', '')}"
                    for item in crisis_data if isinstance(item, dict)
                ]) or 'Crisis support information not available.'
            }
        return {'type': 'crisis', 'content': 'Crisis support information not available.'}
    
    def search_content(self, keyword: str) -> List[Dict]:
        """Search all content for a keyword"""
        results = []
        keyword_lower = keyword.lower().strip()
        
        for content_type, items in self.content.items():
            if not isinstance(items, list):
                continue
                
            for item in items:
                if not isinstance(item, dict):
                    continue
                    
                # Search in various fields
                searchable_text = ""
                for field in ['content', 'title', 'text', 'message', 'description']:
                    if field in item and isinstance(item[field], str):
                        searchable_text += " " + item[field].lower()
                
                if keyword_lower in searchable_text:
                    result = {
                        'type': content_type,
                        'item': item,
                        'preview': (item.get('title') or item.get('text', '')[:60] or item.get('content', '')[:60]) + "..."
                    }
                    results.append(result)
        
        return results
    
    def get_statistics(self) -> Dict:
        """Get content statistics"""
        stats = {}
        for key in ['quotes', 'stories', 'advice', 'affirmations', 'educational', 'resources', 'crisis', 'seasonal']:
            stats[key] = len(self.content.get(key, []))
        
        stats['total'] = sum(stats.values())
        
        # Count unique topics
        all_topics = set()
        for content_type, items in self.content.items():
            if not isinstance(items, list):
                continue
            for item in items:
                if isinstance(item, dict) and 'topics' in item and isinstance(item['topics'], list):
                    all_topics.update(item['topics'])
        stats['topics'] = len(all_topics)
        
        return stats
    
    def get_topics(self) -> List[str]:
        """Get list of all available topics"""
        all_topics = set()
        for content_type, items in self.content.items():
            if not isinstance(items, list):
                continue
            for item in items:
                if isinstance(item, dict) and 'topics' in item and isinstance(item['topics'], list):
                    all_topics.update(item['topics'])
        return sorted(list(all_topics))
