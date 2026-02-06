# Detailed Usage Guide

## Getting Started

### First Launch
When you first run the application: 
```bash
python src/main.py
```

You'll see the welcome screen and main menu.

## Menu Options Explained

### 1. Generate Random Post
- Instantly creates a random piece of mental health content
- Pulls from all available content types
- Great for daily inspiration or social media posts
- **Use case**: Quick positive content for sharing

### 2. Generate by Content Type
Choose specifically what type of content you want: 

**Story** - Recovery journeys, personal wins, hope-filled narratives
- Example: "Finding Light in the Darkness"
- Great for:  Blogs, newsletters, longer social media posts

**Quote** - Inspirational words from UK mental health professionals
- Example:  Quotes from NHS, Mind UK, etc.
- Great for: Quick social media posts, graphics, daily reminders

**Advice** - Practical, evidence-based coping strategies
- Example: "5-4-3-2-1 Grounding Technique"
- Great for: Educational content, helpful tips, self-care guides

**Affirmation** - Positive mantras and self-compassion reminders
- Example: "I am worthy of love and compassion"
- Great for: Daily reminders, mental health check-ins

**Educational** - Facts and information about mental health
- Example: "Understanding Depression"
- Great for: Awareness campaigns, educational materials

**Resource** - Local Melksham/Wiltshire support services
- Great for:  Signposting, community information

**Crisis** - Emergency support information
- Great for: Always available when needed

### 3. Generate by Topic
Filter content to specific mental health areas: 
- Depression
- Anxiety
- Stress & Burnout
- Loneliness
- And 15+ more topics

**Use case**: Targeting specific awareness days or audience needs

### 4. Generate by Audience
Tailor content for specific groups:
- **General Adult**:  Broad appeal
- **Teenagers**: Youth-friendly language and concerns
- **Elderly**: Relevant to older adults
- **Parents/Carers**: Support for those caring for others
- **NHS/Healthcare Workers**:  Addressing burnout, workplace stress
- **Students**:  Exam stress, university life

### 5. Batch Generate Posts
Create multiple posts at once: 
1. Enter number of posts (e.g., 10)
2. Posts are generated and displayed
3. Option to save all to a single file

**Use case**: Planning week's/month's content in advance

### 6. View Local Resources
Displays Melksham and Wiltshire specific mental health services:
- Contact details
- Websites
- Descriptions
- Locations

**Use case**: Signposting community members to local help

### 7. View Crisis Support Information
Quick access to ALL crisis services:
- 999 Emergency
- NHS 111
- Samaritans
- Shout text line
- CALM
- Local crisis lines

**Always available - could save a life**

### 8. Search Content
Find specific topics or keywords:
- Enter a search term
- See all matching content
- Preview results before generating

**Use case**: Finding content about specific issues

### 9. Statistics
View your content library metrics:
- Total pieces of each content type
- Topics covered
- Overall content count

**Use case**: Understanding available resources

### 10. Settings
Future functionality for:
- Output format preferences
- Character count for social media
- Custom export options

## Saving Posts

After generating any post, you'll be asked: 
```
Save this post?  (y/n):
```

- Enter `y` to save
- Provide a filename (or use default)
- Posts are saved as text files in your current directory

### Batch Saving
Batch generated posts save all content to one file with clear separators. 

## Best Practices

### For Social Media
1. Generate content
2. Copy/paste to your platform
3. Add relevant hashtags:  #MentalHealthAwareness #MelkshamCommunity
4. Always include crisis resources for serious topics

### For Community Groups
1. Batch generate weekly content
2. Save to file
3. Review and customize
4. Share with appropriate disclaimers

### For Personal Use
1. Generate daily affirmations or quotes
2. Save favorites
3. Build your own mental health toolkit

## Keyboard Shortcuts

- `Ctrl+C`: Exit application at any time
- Just type the menu number and press Enter

## Troubleshooting

**"No content available"**
- Check that JSON files exist in data/ folder
- Ensure JSON files have valid content

**"File not found"**
- Make sure you're running from the repository root
- Check data/ directory exists

**"Invalid choice"**
- Ensure you're entering numbers only
- Check the valid range for that menu

## Tips for Maximum Impact

1. **Daily Posts**: Generate one piece daily for consistent awareness
2. **Topic Focus**: Dedicate weeks to specific topics
3. **Local Connection**:  Regularly share local Melksham resources
4. **Combine Content**: Use quotes with advice for richer posts
5. **Always Include Resources**: Ensure people know where to get help

## Examples