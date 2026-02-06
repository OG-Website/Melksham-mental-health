"""
Generate comprehensive advice database covering all mental health topics
"""

import json
from pathlib import Path

def generate_comprehensive_advice():
    advice_database = [
        # Anxiety Advice
        {
            "title": "5-4-3-2-1 Grounding Technique for Anxiety",
            "content":  "When anxiety strikes, use your senses to ground yourself:  Name 5 things you can see, 4 things you can touch, 3 things you can hear, 2 things you can smell, and 1 thing you can taste. This mindfulness technique brings you back to the present moment and interrupts anxious thought spirals.  Practice it regularly, even when not anxious, so it becomes automatic during difficult moments.",
            "topics": ["Anxiety", "Panic", "Coping Strategies", "Mindfulness"],
            "audience": ["adults", "teens", "general"],
            "evidence": "Recommended by NHS and Mind UK"
        },
        {
            "title": "Box Breathing for Instant Calm",
            "content":  "This simple breathing technique can reduce stress and anxiety in minutes:  Breathe in for 4 counts, hold for 4, breathe out for 4, hold for 4. Repeat 4-5 times. This activates your parasympathetic nervous system, physically calming your body.  Perfect for exam stress, workplace anxiety, panic attacks, or any overwhelming moment.  You can do this anywhere, anytime - in a meeting, on a bus, before bed.",
            "topics": ["Anxiety", "Stress", "Panic", "Coping Strategies"],
            "audience": ["students", "adults", "teens", "healthcare"],
            "evidence": "Evidence-based anxiety management technique"
        },
        {
            "title": "Challenge Anxious Thoughts with CBT",
            "content": "When anxiety spirals, write down the worried thought, then ask: What's the evidence for this?  What's the evidence against it? What would I tell a friend thinking this? What's a more balanced thought? This Cognitive Behavioral Therapy technique helps you recognize that thoughts aren't facts.  Example: 'Everyone will think I'm stupid' becomes 'I sometimes make mistakes like everyone else, and that's okay.' Available through NHS Talking Therapies Wiltshire (01380 731335).",
            "topics": ["Anxiety", "CBT", "Thought Patterns", "Coping Strategies"],
            "audience": ["adults", "teens", "students"],
            "evidence": "NHS-recommended CBT technique"
        },
        
        # Depression Advice
        {
            "title": "The Power of Daily Routine in Depression",
            "content": "When depressed, structure can be a lifeline.  Try to wake up and sleep at similar times, eat regular meals, and schedule at least one activity you used to enjoy - even if you don't feel like it.  Routine provides purpose when motivation is gone. Start tiny: just getting out of bed at the same time is a victory.  Each small routine builds on the last.  Remember: you don't have to feel motivated to build routine - routine often creates motivation.",
            "topics": ["Depression", "Self-care", "Routine", "Coping Strategies"],
            "audience": ["adults", "elderly", "general"],
            "evidence": "NHS Mental Health Guidelines"
        },
        {
            "title": "Behavioral Activation:  Taking Action Despite Low Mood",
            "content":  "Depression tells you to withdraw, but that often makes it worse. Behavioral Activation (a key CBT technique) means taking action even when you don't feel like it.  Start impossibly small:  open curtains, make a cup of tea, text one friend, walk to the end of your street. These tiny actions can shift mood. Plan activities in advance and commit regardless of how you feel. Available through NHS Talking Therapies (01380 731335).",
            "topics": ["Depression", "CBT", "Motivation", "Behavioral Activation"],
            "audience":  ["adults", "general"],
            "evidence": "Evidence-based depression treatment"
        },
        
        # Self-care Advice
        {
            "title": "Move Your Body for Mental Health",
            "content": "Physical activity is one of the most effective treatments for depression and anxiety. You don't need a gym - a 20-minute walk around Melksham, gardening, dancing in your kitchen, or YouTube yoga all count. Exercise releases endorphins, reduces stress hormones, improves sleep, and boosts self-esteem. Start small: just 10 minutes.  Build gradually. Movement is medicine for mental health.",
            "topics": ["Self-care", "Exercise", "Depression", "Anxiety"],
            "audience": ["adults", "elderly", "general"],
            "evidence":  "NHS Physical Activity Guidelines"
        },
        {
            "title": "Sleep Hygiene for Better Mental Health",
            "content": "Quality sleep is crucial for mental health. Create a bedtime routine:  no screens 1 hour before bed, keep your room cool and dark, try to sleep and wake at consistent times, avoid caffeine after 2pm, don't lie awake in bed (get up and do something calming). If sleep problems persist beyond 2 weeks, speak to your GP - insomnia is treatable and might indicate underlying mental health issues.",
            "topics":  ["Sleep", "Self-care", "Depression", "Anxiety"],
            "audience": ["adults", "teens", "general"],
            "evidence": "NHS Sleep Advice"
        },
        {
            "title": "Nutrition and Mental Health Connection",
            "content": "What you eat affects your mood.  Aim for: regular meals (blood sugar crashes affect mood), omega-3s (oily fish, walnuts), complex carbs (whole grains), hydration (dehydration causes fatigue and brain fog), and limiting alcohol (it's a depressant). When depressed, cooking feels impossible - that's okay. Simple nutritious options:  toast with peanut butter, beans on toast, bananas, yogurt.  Nourishing your body supports your mind.",
            "topics": ["Nutrition", "Self-care", "Depression", "Wellbeing"],
            "audience":  ["adults", "general"],
            "evidence": "Mental Health Foundation research"
        },
        
        // Connection & Loneliness
        {
            "title": "Fighting Loneliness:  Take Small Social Steps",
            "content": "Loneliness is a major mental health risk. Combat it with tiny steps: text someone you haven't spoken to, comment in an online group, visit The Community Hub Melksham (01225 704187), join a local class, volunteer, or attend a support group. Connection doesn't have to be deep conversations - even brief friendly interactions (chatting to a shopkeeper, saying hello to neighbours) reduce loneliness. You're not alone in feeling alone.",
            "topics": ["Loneliness", "Social Connection", "Community", "Isolation"],
            "audience": ["elderly", "adults", "general"],
            "evidence": "Mental Health Foundation research"
        },
        {
            "title": "Building a Support Network",
            "content":  "You don't need many people - just a few you can turn to.  Identify:  1) Someone to have fun with, 2) Someone to talk to about problems, 3) Someone practical you can ask for help, 4) A professional support (GP, therapist, helpline). They can be the same person or different.  Write their names and numbers down. When struggling, we forget we have support - having it written helps.  Local support available through Wiltshire Mind (01225 706532).",
            "topics": ["Support", "Social Connection", "Mental Health", "Crisis Planning"],
            "audience": ["adults", "teens", "general"],
            "evidence": "Mental health best practices"
        },
        
        # Stress & Burnout
        {
            "title": "Recognizing and Preventing Burnout",
            "content": "Burnout signs:  exhaustion despite rest, cynicism, reduced performance, physical symptoms (headaches, stomach issues), withdrawal. Prevention: set boundaries (saying no is self-care), take regular breaks, prioritize sleep, disconnect from work/responsibilities, practice self-compassion. If experiencing burnout, speak to your GP, consider NHS Talking Therapies (01380 731335), or talk to your employer about adjustments.  Burnout is preventable and treatable.",
            "topics":  ["Burnout", "Stress", "Work", "Self-care"],
            "audience": ["adults", "healthcare", "general"],
            "evidence": "WHO recognition and NHS guidance"
        },
        {
            "title": "Setting Boundaries for Mental Health",
            "content": "Boundaries protect your mental health. Practice saying:  'I can't commit to that,' 'I need some time alone,' 'That doesn't work for me,' 'Let me think about it and get back to you.' You don't need to justify or explain excessively. Boundaries aren't selfish - they're essential.  Start small: one boundary at a time. People who respect you will respect your boundaries. Those who don't are showing you they don't respect your wellbeing.",
            "topics":  ["Boundaries", "Self-care", "Relationships", "Stress"],
            "audience": ["adults", "carers", "general"],
            "evidence": "Therapeutic best practices"
        },
        
        # Crisis & Safety
        {
            "title":  "Creating a Crisis Safety Plan",
            "content": "When well, create a plan for when you're not:  1) Warning signs (thoughts, feelings, behaviors), 2) Self-help strategies that work for you, 3) People/places that distract you, 4) People you can ask for help (names and numbers), 5) Professionals to contact (GP, therapist, NHS 24/7 Helpline 0800 953 1919), 6) Making environment safe (removing means of self-harm). Keep this somewhere accessible.  Share it with someone you trust.",
            "topics": ["Crisis", "Safety Planning", "Self-harm", "Suicide Prevention"],
            "audience": ["adults", "teens", "general"],
            "evidence": "Evidence-based suicide prevention"
        },
        {
            "title": "When to Seek Professional Help",
            "content": "Seek help if:  feelings persist for 2+ weeks, they're affecting daily life (work, relationships, self-care), you're thinking about self-harm or suicide, physical symptoms develop, or self-help isn't working. Contact:  Your GP, NHS 111, NHS 24/7 Mental Health Helpline (0800 953 1919), NHS Talking Therapies (01380 731335), or Samaritans (116 123). Seeking help is brave, not weak.  Early intervention prevents crises.",
            "topics": ["Help-seeking", "Professional Support", "Crisis", "Mental Health Services"],
            "audience": ["adults", "teens", "general"],
            "evidence": "NHS Guidelines"
        },
        
        # Men's Mental Health
        {
            "title": "Men:  It's Okay to Not Be Okay",
            "content": "Men face unique barriers:  societal expectations of stoicism, fear of appearing weak, isolation.  But suicide is the biggest killer of men under 45 in the UK.  Talking saves lives. Strength is asking for help. Try:  CALM helpline (0800 58 58 58, 5pm-midnight), men's groups (check The Community Hub Melksham), talking to your GP, or confiding in one trusted person. Your mental health matters. Your life matters.",
            "topics": ["Men's Mental Health", "Suicide Prevention", "Help-seeking"],
            "audience": ["adults"],
            "evidence": "CALM and Samaritans research"
        },
        
        # Youth Specific
        {
            "title":  "For Young People: You Deserve Support",
            "content":  "Mental health struggles don't make you dramatic, attention-seeking, or weak. Your feelings are valid. Support options: talk to a trusted adult, school counselor, your GP, Papyrus (0800 068 4141 for under-35s), text SHOUT to 85258, or Wiltshire Mind youth services. Don't suffer alone. Your future self will thank you for reaching out now.  Mental health support can transform your life.",
            "topics":  ["Youth Mental Health", "Support", "Help-seeking"],
            "audience": ["teens", "students"],
            "evidence": "YoungMinds guidance"
        },
        
        # Mindfulness & Present Moment
        {
            "title": "Simple Mindfulness for Daily Life",
            "content": "Mindfulness isn't about emptying your mind - it's about noticing the present.  Try: mindful eating (really taste your food), mindful walking (notice each step), mindful breathing (just observe your breath for 2 minutes). When your mind wanders (it will), gently bring it back without judgment. Even 5 minutes daily reduces anxiety and depression. Free NHS mindfulness apps available.",
            "topics": ["Mindfulness", "Anxiety", "Stress", "Present Moment"],
            "audience": ["adults", "teens", "general"],
            "evidence": "NHS-recommended mindfulness-based interventions"
        },
        
        # Grief & Loss
        {
            "title": "Navigating Grief and Bereavement",
            "content":  "Grief has no timeline and no 'correct' way.  You might feel sad, angry, numb, guilty, or all of these. All feelings are valid. Tips: talk about the person (keeping their memory alive), accept support, maintain routine where possible, be patient with yourself, seek professional help if grief feels unmanageable. Bereavement support available through:  your GP, Cruse Bereavement Care, or local groups through The Community Hub Melksham (01225 704187).",
            "topics": ["Grief", "Bereavement", "Loss", "Emotional Wellbeing"],
            "audience":  ["adults", "elderly", "general"],
            "evidence": "Bereavement care guidelines"
        },
        
        # Workplace Mental Health
        {
            "title": "Protecting Mental Health at Work",
            "content": "Work-life balance matters:  take all your breaks, use annual leave, don't check emails outside hours where possible, communicate with your manager if struggling.  Your employer has a legal duty to support mental health. You can request:  flexible working, adjustments to workload, access to occupational health, time off for appointments. Don't wait until crisis - speak up early. Many employers now have mental health first aiders.",
            "topics": ["Workplace", "Stress", "Boundaries", "Mental Health"],
            "audience": ["adults", "healthcare", "general"],
            "evidence": "HSE workplace mental health standards"
        },
        
        # Digital Wellbeing
        {
            "title": "Social Media and Mental Health",
            "content": "Social media can increase anxiety, depression, and loneliness.  Protect yourself: limit daily usage (set app timers), unfollow accounts that make you feel bad, don't compare your behind-the-scenes to others' highlights, take regular breaks, never scroll before bed or first thing morning. Notice how different platforms affect your mood. It's okay to delete apps or take extended breaks. Your mental health matters more than staying connected online.",
            "topics": ["Digital Wellbeing", "Social Media", "Anxiety", "Self-care"],
            "audience":  ["teens", "students", "adults"],
            "evidence": "Royal College of Psychiatrists guidance"
        },
        
        # Self-Compassion
        {
            "title": "Practicing Self-Compassion",
            "content": "Talk to yourself like you would a good friend. When you make a mistake or feel down, avoid harsh self-criticism. Instead try: 'I'm doing my best and that's enough,' 'Everyone struggles sometimes,' 'I deserve kindness, especially from myself.' Self-compassion isn't self-indulgence - research shows it leads to better mental health outcomes than self-criticism. Be as kind to yourself as you are to others.",
            "topics":  ["Self-compassion", "Self-esteem", "Emotional Wellbeing"],
            "audience": ["adults", "teens", "general"],
            "evidence": "Research-backed by Mental Health Foundation"
        }
    ]
    
    return advice_database

if __name__ == "__main__": 
    advice = generate_comprehensive_advice()
    
    # Save to file
    output_path = Path('data/advice. json')
    
    # Load existing if any
    existing = []
    if output_path.exists():
        with open(output_path, 'r', encoding='utf-8') as f:
            existing = json.load(f)
    
    # Merge
    existing.extend(advice)
    
    # Save
    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(existing, f, indent=2, ensure_ascii=False)
    
    print(f"✓ Generated and saved {len(advice)} advice pieces")
    print(f"  Total advice in database: {len(existing)}")