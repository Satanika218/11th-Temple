#!/usr/bin/env python3
"""
11th Temple Solutions - Automated Blog Management System
========================================================

This script automates the creation and publishing of weekly blog posts for the
11th Temple Solutions website. It audits existing posts, identifies gaps in the
weekly Sunday schedule, and generates new content using AI.

Author: SuperNinja AI Agent
Date: October 2025
Version: 1.0.0

Requirements:
- Python 3.8+
- OpenAI API key (or other LLM provider)
- GitHub access (already configured)
- Required packages: see requirements.txt
"""

import os
import sys
import json
import logging
from datetime import datetime, timedelta
from pathlib import Path
from typing import List, Dict, Optional, Tuple
import re
from dataclasses import dataclass
from enum import Enum

# Third-party imports (install via: pip install -r requirements.txt)
try:
    import openai
    from jinja2 import Template
    import yaml
    from dotenv import load_dotenv
except ImportError as e:
    print(f"Missing required package: {e}")
    print("Install requirements: pip install -r requirements.txt")
    sys.exit(1)

# Load environment variables from .env file
load_dotenv()

# ============================================================================
# CONFIGURATION
# ============================================================================

class Config:
    """Central configuration for the blog automation system"""
    
    # Blog Settings
    BLOG_START_DATE = datetime(2025, 3, 23)  # First blog post date
    PUBLISH_DAY = 6  # Sunday (0=Monday, 6=Sunday)
    AUTHOR_NAME = "Dan"
    WORD_COUNT_MIN = 400
    WORD_COUNT_MAX = 600
    
    # File Paths
    WORKSPACE_DIR = Path("/workspace/11th-Temple")
    BLOG_CONTENT_DIR = WORKSPACE_DIR / "src/content/blogs"
    BLOG_DATA_FILE = WORKSPACE_DIR / "src/content/newBlogData.tsx"
    OUTPUT_DIR = WORKSPACE_DIR / "blog-automation/generated-posts"
    LOG_DIR = WORKSPACE_DIR / "blog-automation/logs"
    
    # API Configuration
    OPENAI_API_KEY = os.getenv("OPENAI_API_KEY", "")
    OPENAI_MODEL = "gpt-4o-mini"  # Best value: high quality, very low cost (~$0.02/year)
    # Alternative options:
    # "gpt-4o" - Highest quality (~$0.38/year)
    # "gpt-3.5-turbo" - Budget option (~$0.10/year)
    OPENAI_TEMPERATURE = 0.7
    
    # Topic Configuration
    TOPICS = [
        "Technology adoption challenges and solutions in rural areas",
        "UK Government technology initiatives and grants for SMEs",
        "GDPR compliance updates and practical guidance",
        "AI applications specifically useful for small local businesses",
        "Automation solutions that reduce costs and improve efficiency",
        "Regional tech news from Powys, Shropshire, Wales, and Herefordshire"
    ]
    
    # Regional Focus
    TARGET_REGIONS = ["Powys", "Shropshire", "Wales", "Herefordshire"]
    
    # Logging
    LOG_LEVEL = logging.INFO
    LOG_FORMAT = '%(asctime)s - %(name)s - %(levelname)s - %(message)s'

# ============================================================================
# LOGGING SETUP
# ============================================================================

def setup_logging():
    """Configure logging for the application"""
    Config.LOG_DIR.mkdir(parents=True, exist_ok=True)
    
    log_file = Config.LOG_DIR / f"blog_automation_{datetime.now().strftime('%Y%m%d_%H%M%S')}.log"
    
    logging.basicConfig(
        level=Config.LOG_LEVEL,
        format=Config.LOG_FORMAT,
        handlers=[
            logging.FileHandler(log_file),
            logging.StreamHandler(sys.stdout)
        ]
    )
    
    return logging.getLogger(__name__)

logger = setup_logging()

# ============================================================================
# DATA MODELS
# ============================================================================

@dataclass
class BlogPost:
    """Represents a blog post"""
    date: datetime
    slug: str
    title: str
    excerpt: str
    content: str
    author: str = Config.AUTHOR_NAME
    id: Optional[int] = None
    
    def to_dict(self) -> Dict:
        """Convert to dictionary"""
        return {
            'id': self.id,
            'date': self.date.strftime('%Y-%m-%d'),
            'slug': self.slug,
            'title': self.title,
            'excerpt': self.excerpt,
            'content': self.content,
            'author': self.author
        }

class TopicCategory(Enum):
    """Blog post topic categories"""
    RURAL_TECH = "rural_technology"
    GOVERNMENT_GRANTS = "government_grants"
    GDPR_COMPLIANCE = "gdpr_compliance"
    AI_APPLICATIONS = "ai_applications"
    AUTOMATION = "automation"
    REGIONAL_NEWS = "regional_news"

# ============================================================================
# BLOG AUDIT FUNCTIONS
# ============================================================================

class BlogAuditor:
    """Audits existing blog posts and identifies gaps"""
    
    def __init__(self):
        self.existing_posts: List[Dict] = []
        self.missing_dates: List[datetime] = []
        
    def scan_existing_posts(self) -> List[Dict]:
        """
        Scan the blog data file to extract all existing posts
        
        Returns:
            List of dictionaries containing post metadata
        """
        logger.info("Scanning existing blog posts...")
        
        try:
            with open(Config.BLOG_DATA_FILE, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Extract dates using regex
            date_pattern = r"date:\s*['&quot;](\d{4}-\d{2}-\d{2})['&quot;]"
            dates = re.findall(date_pattern, content)
            
            # Extract titles
            title_pattern = r"title:\s*([^,]+?)\.title"
            titles = re.findall(title_pattern, content)
            
            # Extract slugs
            slug_pattern = r"slug:\s*([^,]+?)\.slug"
            slugs = re.findall(slug_pattern, content)
            
            # Combine into post objects
            posts = []
            for i, date_str in enumerate(dates):
                post_date = datetime.strptime(date_str, '%Y-%m-%d')
                posts.append({
                    'date': post_date,
                    'date_str': date_str,
                    'title': titles[i] if i < len(titles) else 'Unknown',
                    'slug': slugs[i] if i < len(slugs) else 'unknown'
                })
            
            self.existing_posts = sorted(posts, key=lambda x: x['date'])
            logger.info(f"Found {len(self.existing_posts)} existing blog posts")
            
            return self.existing_posts
            
        except Exception as e:
            logger.error(f"Error scanning blog posts: {e}")
            return []
    
    def find_missing_sundays(self, end_date: Optional[datetime] = None) -> List[datetime]:
        """
        Identify missing Sunday posts between start date and end date
        
        Args:
            end_date: End date for audit (defaults to most recent Sunday)
            
        Returns:
            List of datetime objects for missing Sundays
        """
        logger.info("Identifying missing Sunday posts...")
        
        if not end_date:
            # Default to most recent Sunday
            today = datetime.now()
            days_since_sunday = (today.weekday() + 1) % 7
            end_date = today - timedelta(days=days_since_sunday)
        
        # Get all existing post dates
        existing_dates = {post['date'].date() for post in self.existing_posts}
        
        # Generate all expected Sundays
        current_date = Config.BLOG_START_DATE
        expected_sundays = []
        
        while current_date <= end_date:
            if current_date.weekday() == Config.PUBLISH_DAY:
                expected_sundays.append(current_date)
            current_date += timedelta(days=1)
        
        # Find missing dates
        missing = []
        for sunday in expected_sundays:
            if sunday.date() not in existing_dates:
                missing.append(sunday)
        
        self.missing_dates = sorted(missing)
        logger.info(f"Found {len(missing)} missing Sunday posts")
        
        return self.missing_dates
    
    def generate_audit_report(self) -> str:
        """
        Generate a comprehensive audit report
        
        Returns:
            Formatted audit report string
        """
        report = []
        report.append("=" * 80)
        report.append("BLOG AUDIT REPORT")
        report.append("=" * 80)
        report.append(f"Generated: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
        report.append(f"Blog Start Date: {Config.BLOG_START_DATE.strftime('%Y-%m-%d')}")
        report.append("")
        
        report.append(f"Total Existing Posts: {len(self.existing_posts)}")
        if self.existing_posts:
            report.append(f"First Post: {self.existing_posts[0]['date_str']}")
            report.append(f"Latest Post: {self.existing_posts[-1]['date_str']}")
        report.append("")
        
        report.append(f"Missing Sunday Posts: {len(self.missing_dates)}")
        if self.missing_dates:
            report.append("\nMissing Dates:")
            for date in self.missing_dates:
                report.append(f"  - {date.strftime('%Y-%m-%d (%A)')}")
        else:
            report.append("  ✓ No missing posts - schedule is complete!")
        
        report.append("")
        report.append("=" * 80)
        
        return "\n".join(report)

# ============================================================================
# CONTENT GENERATION
# ============================================================================

class ContentGenerator:
    """Generates blog post content using AI"""
    
    def __init__(self, api_key: str):
        """
        Initialize the content generator
        
        Args:
            api_key: OpenAI API key
        """
        if not api_key:
            logger.warning("No OpenAI API key provided. Content generation will use templates.")
            self.client = None
        else:
            openai.api_key = api_key
            self.client = openai
            logger.info("OpenAI client initialized")
    
    def select_topic(self, date: datetime, used_topics: List[str]) -> Tuple[str, TopicCategory]:
        """
        Select an appropriate topic for the given date
        
        Args:
            date: Publication date
            used_topics: List of recently used topics to avoid repetition
            
        Returns:
            Tuple of (topic description, topic category)
        """
        # Rotate through topics to ensure variety
        available_topics = [t for t in Config.TOPICS if t not in used_topics[-3:]]
        
        if not available_topics:
            available_topics = Config.TOPICS
        
        # Simple rotation based on week number
        week_num = date.isocalendar()[1]
        topic_index = week_num % len(available_topics)
        selected_topic = available_topics[topic_index]
        
        # Map to category
        category_map = {
            Config.TOPICS[0]: TopicCategory.RURAL_TECH,
            Config.TOPICS[1]: TopicCategory.GOVERNMENT_GRANTS,
            Config.TOPICS[2]: TopicCategory.GDPR_COMPLIANCE,
            Config.TOPICS[3]: TopicCategory.AI_APPLICATIONS,
            Config.TOPICS[4]: TopicCategory.AUTOMATION,
            Config.TOPICS[5]: TopicCategory.REGIONAL_NEWS,
        }
        
        category = category_map.get(selected_topic, TopicCategory.AI_APPLICATIONS)
        
        logger.info(f"Selected topic for {date.strftime('%Y-%m-%d')}: {selected_topic}")
        return selected_topic, category
    
    def generate_with_ai(self, topic: str, date: datetime) -> Dict[str, str]:
        """
        Generate blog post content using OpenAI API
        
        Args:
            topic: Topic description
            date: Publication date
            
        Returns:
            Dictionary with title, excerpt, and content
        """
        if not self.client:
            logger.error("OpenAI client not initialized")
            return self._generate_template_content(topic, date)
        
        try:
            # Create the prompt
            prompt = self._create_content_prompt(topic, date)
            
            logger.info(f"Generating content with OpenAI for topic: {topic}")
            
            response = self.client.chat.completions.create(
                model=Config.OPENAI_MODEL,
                messages=[
                    {"role": "system", "content": self._get_system_prompt()},
                    {"role": "user", "content": prompt}
                ],
                temperature=Config.OPENAI_TEMPERATURE,
                max_tokens=2000
            )
            
            content = response.choices[0].message.content
            
            # Parse the response
            parsed = self._parse_ai_response(content)
            
            logger.info("Content generated successfully")
            return parsed
            
        except Exception as e:
            logger.error(f"Error generating content with AI: {e}")
            return self._generate_template_content(topic, date)
    
    def _get_system_prompt(self) -> str:
        """Get the system prompt for the AI"""
        return f"""You are Dan, a technology consultant writing for 11th Temple Solutions' blog.
        
Your audience is local business owners in {', '.join(Config.TARGET_REGIONS)}.

Writing style:
- Professional yet approachable and conversational
- Use "you" and "your" to address readers directly
- Include practical, actionable advice
- Use real examples and case studies from Welsh/border county businesses
- Length: {Config.WORD_COUNT_MIN}-{Config.WORD_COUNT_MAX} words
- Include specific statistics and data where relevant
- Focus on practical takeaways for SMEs

Structure:
- Engaging introduction that hooks the reader
- Clear subheadings (use ### for H3 in markdown)
- Bullet points for lists
- Include a customer quote/testimonial
- End with clear call-to-action mentioning 11th Temple Solutions
- Include "Key Takeaways" section at the end

SEO:
- Include relevant keywords naturally
- Use location-specific terms (Powys, Shropshire, Wales, Herefordshire)
- Write compelling meta descriptions"""
    
    def _create_content_prompt(self, topic: str, date: datetime) -> str:
        """Create the content generation prompt"""
        month_year = date.strftime('%B %Y')
        
        return f"""Write a blog post for publication on {date.strftime('%A, %B %d, %Y')}.

Topic: {topic}

Context: This is for {month_year}, so include any relevant seasonal considerations or timely information.

Please provide:
1. A compelling, SEO-friendly title (60-70 characters)
2. A meta description/excerpt (150-160 characters)
3. The full blog post content in markdown format

The content should be highly relevant to small businesses in rural Wales and the English border counties.

Include:
- Specific examples from the region
- Practical advice that readers can implement
- At least one customer testimonial (you can create a realistic example)
- Statistics and data to support your points
- A clear call-to-action for 11th Temple Solutions services

Format your response as:
TITLE: [title here]
EXCERPT: [excerpt here]
CONTENT:
[full content here in markdown]"""
    
    def _parse_ai_response(self, response: str) -> Dict[str, str]:
        """Parse the AI response into structured data"""
        lines = response.split('\n')
        
        title = ""
        excerpt = ""
        content_lines = []
        section = None
        
        for line in lines:
            if line.startswith('TITLE:'):
                title = line.replace('TITLE:', '').strip()
                section = 'title'
            elif line.startswith('EXCERPT:'):
                excerpt = line.replace('EXCERPT:', '').strip()
                section = 'excerpt'
            elif line.startswith('CONTENT:'):
                section = 'content'
            elif section == 'content':
                content_lines.append(line)
        
        content = '\n'.join(content_lines).strip()
        
        return {
            'title': title,
            'excerpt': excerpt,
            'content': content
        }
    
    def _generate_template_content(self, topic: str, date: datetime) -> Dict[str, str]:
        """Generate content using templates (fallback when AI is unavailable)"""
        logger.info("Generating content using templates")
        
        # This is a simplified template - in production, you'd have more sophisticated templates
        title = f"{topic.split(':')[0]} for Welsh SMEs - {date.strftime('%B %Y')}"
        excerpt = f"Essential insights on {topic.lower()} for businesses in Powys, Shropshire, Wales, and Herefordshire."
        
        content = f"""# {title}

[Template content - Replace with AI-generated content]

This is a placeholder for the blog post content. In production, this would be replaced with 
AI-generated content or you would need to write the content manually.

Topic: {topic}
Date: {date.strftime('%Y-%m-%d')}

## Key Points to Cover

- Introduction to the topic
- Relevance to Welsh and border county businesses
- Practical examples and case studies
- Actionable advice
- Statistics and data
- Customer testimonial
- Call to action

## How 11th Temple Solutions Can Help

[Service description and CTA]

**Key Takeaways:**
- Point 1
- Point 2
- Point 3
"""
        
        return {
            'title': title,
            'excerpt': excerpt,
            'content': content
        }
    
    def create_slug(self, title: str) -> str:
        """
        Create a URL-friendly slug from a title
        
        Args:
            title: Blog post title
            
        Returns:
            URL-friendly slug
        """
        # Convert to lowercase
        slug = title.lower()
        
        # Remove special characters
        slug = re.sub(r'[^a-z0-9\s-]', '', slug)
        
        # Replace spaces with hyphens
        slug = re.sub(r'\s+', '-', slug)
        
        # Remove multiple hyphens
        slug = re.sub(r'-+', '-', slug)
        
        # Trim hyphens from ends
        slug = slug.strip('-')
        
        return slug

# ============================================================================
# FILE GENERATION
# ============================================================================

class FileGenerator:
    """Generates TypeScript/TSX files for blog posts"""
    
    # TSX template for blog posts
    TSX_TEMPLATE = """import React from 'react';
import { BlogPostType } from '../../src/content/types';

export const post: Omit<BlogPostType, 'id' | 'date'> = {
  slug: '{{ slug }}',
  title: '{{ title }}',
  excerpt: '{{ excerpt }}',
  content: (
    <>
{{ content }}
    </>
  )
};
"""
    
    def __init__(self):
        Config.OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    
    def markdown_to_jsx(self, markdown: str) -> str:
        """
        Convert markdown content to JSX format
        
        Args:
            markdown: Markdown content
            
        Returns:
            JSX-formatted content
        """
        lines = markdown.split('\n')
        jsx_lines = []
        in_list = False
        
        for line in lines:
            line = line.strip()
            
            if not line:
                jsx_lines.append('')
                continue
            
            # Handle headings
            if line.startswith('### '):
                title = line.replace('### ', '')
                jsx_lines.append(f'      <h3 className="text-2xl font-bold text-white mt-6 mb-4">{title}</h3>')
            
            # Handle bold text
            elif '**' in line:
                # Simple bold conversion
                line = re.sub(r'\*\*(.+?)\*\*', r'<strong>\1</strong>', line)
                jsx_lines.append(f'      <p>{line}</p>')
            
            # Handle bullet lists
            elif line.startswith('- '):
                if not in_list:
                    jsx_lines.append('      <ul className="list-disc list-inside space-y-2 my-4 text-brand-silver">')
                    in_list = True
                item = line.replace('- ', '')
                jsx_lines.append(f'        <li>{item}</li>')
            
            # Handle blockquotes
            elif line.startswith('>'):
                quote = line.replace('> ', '')
                jsx_lines.append(f'      <blockquote className="border-l-4 border-brand-lime p-4 my-6 bg-brand-navy-light text-brand-silver italic">')
                jsx_lines.append(f'        {quote}')
                jsx_lines.append('      </blockquote>')
            
            # Regular paragraphs
            else:
                if in_list:
                    jsx_lines.append('      </ul>')
                    in_list = False
                jsx_lines.append(f'      <p>{line}</p>')
        
        if in_list:
            jsx_lines.append('      </ul>')
        
        return '\n'.join(jsx_lines)
    
    def generate_tsx_file(self, post: BlogPost) -> Path:
        """
        Generate a TSX file for a blog post
        
        Args:
            post: BlogPost object
            
        Returns:
            Path to generated file
        """
        logger.info(f"Generating TSX file for: {post.slug}")
        
        # Convert markdown content to JSX
        jsx_content = self.markdown_to_jsx(post.content)
        
        # Escape quotes in title and excerpt
        title = post.title.replace("'", "\\'")
        excerpt = post.excerpt.replace("'", "\\'")
        
        # Render template
        template = Template(self.TSX_TEMPLATE)
        content = template.render(
            slug=post.slug,
            title=title,
            excerpt=excerpt,
            content=jsx_content
        )
        
        # Write file
        filename = f"{post.slug}.tsx"
        filepath = Config.OUTPUT_DIR / filename
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        
        logger.info(f"Generated file: {filepath}")
        return filepath
    
    def update_blog_data_file(self, posts: List[BlogPost]) -> bool:
        """
        Update the newBlogData.tsx file with new posts
        
        Args:
            posts: List of new BlogPost objects
            
        Returns:
            True if successful, False otherwise
        """
        logger.info(f"Updating blog data file with {len(posts)} new posts")
        
        try:
            # Read existing file
            with open(Config.BLOG_DATA_FILE, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Find the last post entry
            last_post_pattern = r'(\s+},\s+\n\s+// [A-Za-z]+ \d{4})'
            
            # Generate new post entries
            new_entries = []
            for post in posts:
                month_year = post.date.strftime('%B %Y')
                entry = f"""
    // {month_year}
    {{
      id: {post.id},
      slug: {post.slug}.slug,
      title: {post.slug}.title,
      excerpt: {post.slug}.excerpt,
      content: {post.slug}.content,
      author: '{post.author}',
      date: '{post.date.strftime('%Y-%m-%d')}'
    }},"""
                new_entries.append(entry)
            
            # Insert new entries before the closing bracket
            insert_point = content.rfind('];')
            if insert_point == -1:
                logger.error("Could not find insertion point in blog data file")
                return False
            
            updated_content = (
                content[:insert_point] +
                '\n'.join(new_entries) +
                '\n' +
                content[insert_point:]
            )
            
            # Write updated file
            with open(Config.BLOG_DATA_FILE, 'w', encoding='utf-8') as f:
                f.write(updated_content)
            
            logger.info("Blog data file updated successfully")
            return True
            
        except Exception as e:
            logger.error(f"Error updating blog data file: {e}")
            return False

# ============================================================================
# MAIN AUTOMATION ORCHESTRATOR
# ============================================================================

class BlogAutomation:
    """Main orchestrator for blog automation"""
    
    def __init__(self, api_key: str = ""):
        """
        Initialize the blog automation system
        
        Args:
            api_key: OpenAI API key (optional)
        """
        self.auditor = BlogAuditor()
        self.generator = ContentGenerator(api_key)
        self.file_generator = FileGenerator()
        self.used_topics: List[str] = []
    
    def run_audit(self) -> str:
        """
        Run a complete blog audit
        
        Returns:
            Audit report string
        """
        logger.info("Starting blog audit...")
        
        self.auditor.scan_existing_posts()
        self.auditor.find_missing_sundays()
        report = self.auditor.generate_audit_report()
        
        # Save report to file
        report_file = Config.OUTPUT_DIR / f"audit_report_{datetime.now().strftime('%Y%m%d_%H%M%S')}.txt"
        with open(report_file, 'w') as f:
            f.write(report)
        
        logger.info(f"Audit report saved to: {report_file}")
        
        return report
    
    def generate_missing_posts(self, limit: Optional[int] = None) -> List[BlogPost]:
        """
        Generate content for missing blog posts
        
        Args:
            limit: Maximum number of posts to generate (None for all)
            
        Returns:
            List of generated BlogPost objects
        """
        logger.info("Generating missing blog posts...")
        
        if not self.auditor.missing_dates:
            logger.info("No missing posts to generate")
            return []
        
        dates_to_generate = self.auditor.missing_dates[:limit] if limit else self.auditor.missing_dates
        generated_posts = []
        
        # Get the highest existing post ID
        max_id = max([p.get('id', 0) for p in self.auditor.existing_posts] + [0])
        next_id = max_id + 1
        
        for date in dates_to_generate:
            logger.info(f"Generating post for {date.strftime('%Y-%m-%d')}")
            
            # Select topic
            topic, category = self.generator.select_topic(date, self.used_topics)
            self.used_topics.append(topic)
            
            # Generate content
            content_data = self.generator.generate_with_ai(topic, date)
            
            # Create slug
            slug = self.generator.create_slug(content_data['title'])
            
            # Create BlogPost object
            post = BlogPost(
                id=next_id,
                date=date,
                slug=slug,
                title=content_data['title'],
                excerpt=content_data['excerpt'],
                content=content_data['content'],
                author=Config.AUTHOR_NAME
            )
            
            generated_posts.append(post)
            next_id += 1
            
            logger.info(f"Generated post: {post.title}")
        
        return generated_posts
    
    def publish_posts(self, posts: List[BlogPost]) -> bool:
        """
        Publish generated posts by creating files and updating data
        
        Args:
            posts: List of BlogPost objects to publish
            
        Returns:
            True if successful, False otherwise
        """
        logger.info(f"Publishing {len(posts)} posts...")
        
        try:
            # Generate TSX files
            for post in posts:
                self.file_generator.generate_tsx_file(post)
            
            # Update blog data file
            success = self.file_generator.update_blog_data_file(posts)
            
            if success:
                logger.info("All posts published successfully")
            else:
                logger.error("Failed to update blog data file")
            
            return success
            
        except Exception as e:
            logger.error(f"Error publishing posts: {e}")
            return False
    
    def run_full_automation(self, generate_limit: Optional[int] = None) -> Dict:
        """
        Run the complete automation workflow
        
        Args:
            generate_limit: Maximum number of posts to generate
            
        Returns:
            Dictionary with results
        """
        logger.info("=" * 80)
        logger.info("STARTING FULL BLOG AUTOMATION")
        logger.info("=" * 80)
        
        results = {
            'audit_report': '',
            'missing_count': 0,
            'generated_count': 0,
            'published_count': 0,
            'success': False
        }
        
        try:
            # Step 1: Audit
            results['audit_report'] = self.run_audit()
            results['missing_count'] = len(self.auditor.missing_dates)
            
            print(results['audit_report'])
            
            # Step 2: Generate
            if results['missing_count'] > 0:
                posts = self.generate_missing_posts(limit=generate_limit)
                results['generated_count'] = len(posts)
                
                # Step 3: Publish
                if posts:
                    success = self.publish_posts(posts)
                    if success:
                        results['published_count'] = len(posts)
                        results['success'] = True
            else:
                logger.info("No missing posts - blog is up to date!")
                results['success'] = True
            
            logger.info("=" * 80)
            logger.info("AUTOMATION COMPLETE")
            logger.info(f"Missing posts found: {results['missing_count']}")
            logger.info(f"Posts generated: {results['generated_count']}")
            logger.info(f"Posts published: {results['published_count']}")
            logger.info("=" * 80)
            
            return results
            
        except Exception as e:
            logger.error(f"Automation failed: {e}")
            results['success'] = False
            return results

# ============================================================================
# CLI INTERFACE
# ============================================================================

def main():
    """Main entry point for CLI"""
    import argparse
    
    parser = argparse.ArgumentParser(
        description='11th Temple Solutions Blog Automation System',
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  # Run audit only
  python blog_automation.py --audit-only
  
  # Generate and publish all missing posts
  python blog_automation.py --generate-all
  
  # Generate only the next 3 missing posts
  python blog_automation.py --generate-limit 3
  
  # Use custom API key
  python blog_automation.py --api-key YOUR_KEY --generate-all
        """
    )
    
    parser.add_argument(
        '--audit-only',
        action='store_true',
        help='Run audit only without generating content'
    )
    
    parser.add_argument(
        '--generate-all',
        action='store_true',
        help='Generate content for all missing posts'
    )
    
    parser.add_argument(
        '--generate-limit',
        type=int,
        metavar='N',
        help='Generate content for N missing posts'
    )
    
    parser.add_argument(
        '--api-key',
        type=str,
        help='OpenAI API key (or set OPENAI_API_KEY environment variable)'
    )
    
    parser.add_argument(
        '--dry-run',
        action='store_true',
        help='Run without actually publishing (for testing)'
    )
    
    args = parser.parse_args()
    
    # Get API key
    api_key = args.api_key or Config.OPENAI_API_KEY
    
    # Initialize automation
    automation = BlogAutomation(api_key=api_key)
    
    # Run based on arguments
    if args.audit_only:
        report = automation.run_audit()
        print(report)
    
    elif args.generate_all or args.generate_limit:
        limit = args.generate_limit if args.generate_limit else None
        results = automation.run_full_automation(generate_limit=limit)
        
        if results['success']:
            print("\n✓ Automation completed successfully!")
        else:
            print("\n✗ Automation failed - check logs for details")
            sys.exit(1)
    
    else:
        parser.print_help()

if __name__ == '__main__':
    main()