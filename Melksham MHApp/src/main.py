#!/usr/bin/env python3
"""
Mental Health Post Creator - Main Entry Point
A comprehensive tool for generating positive mental health content
"""

import sys
from generator import ContentGenerator
from formatter import PostFormatter

def print_header():
    """Display application header"""
    print("\n" + "="*60)
    print("   MELKSHAM MENTAL HEALTH - POST CREATOR")
    print("   Positive Content for Mental Health Awareness")
    print("="*60 + "\n")

def print_menu():
    """Display main menu"""
    print("\n--- MAIN MENU ---")
    print("1.  Generate Random Post")
    print("2.  Generate by Content Type")
    print("3.  Generate by Topic")
    print("4.  Generate by Audience")
    print("5.  Batch Generate Posts")
    print("6.  View Local Resources (Melksham/Wiltshire)")
    print("7.  View Crisis Support Information")
    print("8.  Search Content")
    print("9.  Statistics")
    print("10. Settings")
    print("11. Exit")
    print("-" * 40)

def content_type_menu():
    """Display content type selection menu"""
    print("\n--- SELECT CONTENT TYPE ---")
    print("1. Uplifting Story")
    print("2. Inspirational Quote")
    print("3. Practical Advice")
    print("4. Positive Affirmation")
    print("5. Educational Content")
    print("6. Local Resource")
    print("7. Crisis Support Info")
    print("8. Seasonal Content")
    print("9. Back to Main Menu")
    
def topic_menu():
    """Display topic selection menu"""
    print("\n--- SELECT TOPIC ---")
    topics = [
        "Depression", "Anxiety", "Stress & Burnout", "Loneliness",
        "Grief & Bereavement", "Trauma & PTSD", "Neurodiversity",
        "Eating Disorders", "Substance Use", "Self-harm Awareness",
        "Suicidal Thoughts Support", "Perinatal Mental Health",
        "Men's Mental Health", "Youth Mental Health", "Elderly Mental Health",
        "Workplace Mental Health", "LGBTQ+ Mental Health",
        "Cultural & Ethnic Minority MH", "Physical & Mental Health Connection",
        "Relationship Issues", "Financial Stress"
    ]
    
    for i, topic in enumerate(topics, 1):
        print(f"{i}. {topic}")
    print(f"{len(topics) + 1}. Back to Main Menu")
    return topics

def audience_menu():
    """Display audience selection menu"""
    print("\n--- SELECT AUDIENCE ---")
    print("1. General Adult")
    print("2. Teenagers")
    print("3. Elderly")
    print("4. Parents/Carers")
    print("5. NHS/Healthcare Workers")
    print("6. Students")
    print("7. Back to Main Menu")

def main():
    """Main application loop"""
    generator = ContentGenerator()
    formatter = PostFormatter()
    
    print_header()
    print("Welcome to the Mental Health Post Creator!")
    print("Generating positive, evidence-based content for UK audiences")
    print("with special focus on Melksham and Wiltshire communities.\n")
    
    while True:
        print_menu()
        choice = input("\nEnter your choice (1-11): ").strip()
        
        if choice == '1':
            # Generate random post
            print("\n" + "="*60)
            post = generator.generate_random()
            formatted_post = formatter.format_post(post)
            print(formatted_post)
            print("="*60)
            
            save = input("\nSave this post?  (y/n): ").strip().lower()
            if save == 'y':
                filename = input("Enter filename (default: post.txt): ").strip() or "post.txt"
                formatter.save_post(formatted_post, filename)
                print(f"✓ Post saved to {filename}")
        
        elif choice == '2': 
            # Generate by content type
            content_type_menu()
            type_choice = input("\nEnter your choice:  ").strip()
            
            type_map = {
                '1': 'story',
                '2': 'quote',
                '3': 'advice',
                '4':  'affirmation',
                '5': 'educational',
                '6': 'resource',
                '7': 'crisis',
                '8': 'seasonal'
            }
            
            if type_choice in type_map: 
                print("\n" + "="*60)
                post = generator.generate_by_type(type_map[type_choice])
                formatted_post = formatter.format_post(post)
                print(formatted_post)
                print("="*60)
                
                save = input("\nSave this post? (y/n): ").strip().lower()
                if save == 'y':
                    filename = input("Enter filename (default: post.txt): ").strip() or "post.txt"
                    formatter. save_post(formatted_post, filename)
                    print(f"✓ Post saved to {filename}")
        
        elif choice == '3':
            # Generate by topic
            topics = topic_menu()
            topic_choice = input("\nEnter your choice: ").strip()
            
            try:
                topic_idx = int(topic_choice) - 1
                if 0 <= topic_idx < len(topics):
                    print("\n" + "="*60)
                    post = generator. generate_by_topic(topics[topic_idx])
                    formatted_post = formatter.format_post(post)
                    print(formatted_post)
                    print("="*60)
                    
                    save = input("\nSave this post? (y/n): ").strip().lower()
                    if save == 'y':
                        filename = input("Enter filename (default: post. txt): ").strip() or "post.txt"
                        formatter.save_post(formatted_post, filename)
                        print(f"✓ Post saved to {filename}")
            except (ValueError, IndexError):
                print("Invalid choice. Please try again.")
        
        elif choice == '4': 
            # Generate by audience
            audience_menu()
            aud_choice = input("\nEnter your choice: ").strip()
            
            aud_map = {
                '1': 'adults',
                '2': 'teens',
                '3': 'elderly',
                '4': 'carers',
                '5': 'healthcare',
                '6': 'students'
            }
            
            if aud_choice in aud_map:
                print("\n" + "="*60)
                post = generator.generate_by_audience(aud_map[aud_choice])
                formatted_post = formatter.format_post(post)
                print(formatted_post)
                print("="*60)
                
                save = input("\nSave this post?  (y/n): ").strip().lower()
                if save == 'y':
                    filename = input("Enter filename (default:  post.txt): ").strip() or "post.txt"
                    formatter.save_post(formatted_post, filename)
                    print(f"✓ Post saved to {filename}")
        
        elif choice == '5': 
            # Batch generate
            num = input("\nHow many posts would you like to generate? ").strip()
            try:
                num_posts = int(num)
                if num_posts > 0:
                    print(f"\nGenerating {num_posts} posts.. .\n")
                    posts = generator.batch_generate(num_posts)
                    
                    for i, post in enumerate(posts, 1):
                        print(f"\n--- POST {i} ---")
                        formatted_post = formatter.format_post(post)
                        print(formatted_post)
                        print("-" * 60)
                    
                    save = input(f"\nSave all {num_posts} posts? (y/n): ").strip().lower()
                    if save == 'y': 
                        formatter.save_batch(posts, "batch_posts.txt")
                        print(f"✓ All posts saved to batch_posts.txt")
            except ValueError:
                print("Please enter a valid number.")
        
        elif choice == '6':
            # View local resources
            print("\n" + "="*60)
            print("   LOCAL MENTAL HEALTH RESOURCES")
            print("   Melksham & Wiltshire")
            print("="*60)
            resources = generator.get_local_resources()
            formatted = formatter.format_resources(resources)
            print(formatted)
            print("="*60)
        
        elif choice == '7': 
            # View crisis support
            print("\n" + "="*60)
            print("   CRISIS SUPPORT INFORMATION")
            print("   Immediate Help Available")
            print("="*60)
            crisis_info = generator.get_crisis_support()
            formatted = formatter.format_crisis_info(crisis_info)
            print(formatted)
            print("="*60)
        
        elif choice == '8':
            # Search content
            keyword = input("\nEnter search keyword: ").strip()
            if keyword:
                results = generator.search_content(keyword)
                print(f"\nFound {len(results)} results for '{keyword}':\n")
                for i, result in enumerate(results[: 10], 1):  # Show first 10
                    print(f"{i}. [{result['type']}] {result['preview']}")
                if len(results) > 10:
                    print(f"\n... and {len(results) - 10} more results")
        
        elif choice == '9': 
            # Statistics
            stats = generator.get_statistics()
            print("\n" + "="*60)
            print("   CONTENT STATISTICS")
            print("="*60)
            print(f"Total Quotes: {stats['quotes']}")
            print(f"Total Stories: {stats['stories']}")
            print(f"Total Advice: {stats['advice']}")
            print(f"Total Affirmations: {stats['affirmations']}")
            print(f"Total Educational Content: {stats['educational']}")
            print(f"Total Resources:  {stats['resources']}")
            print(f"Total Crisis Resources: {stats['crisis']}")
            print(f"Topics Covered: {stats['topics']}")
            print(f"Total Content Pieces: {stats['total']}")
            print("="*60)
        
        elif choice == '10':
            # Settings
            print("\n--- SETTINGS ---")
            print("1. Toggle Social Media Character Count")
            print("2. Set Output Format (txt/markdown/json)")
            print("3. Back to Main Menu")
            # Placeholder for settings functionality
            input("\nSettings functionality coming soon.  Press Enter to continue...")
        
        elif choice == '11':
            # Exit
            print("\nThank you for using Mental Health Post Creator!")
            print("Remember:  You are not alone.  Help is always available.")
            print("Take care!  💚\n")
            sys.exit(0)
        
        else:
            print("\n⚠ Invalid choice. Please enter a number between 1 and 11.")

if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\n\nApplication interrupted.  Goodbye!")
        sys.exit(0)
    except Exception as e:
        print(f"\n⚠ An error occurred: {e}")
        print("Please report this issue if it persists.")
        sys.exit(1)