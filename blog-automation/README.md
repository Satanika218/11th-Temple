# 11th Temple Solutions - Automated Blog Management System

## Overview

This automated blog management system ensures your website publishes high-quality blog posts every Sunday without manual intervention. It audits existing posts, identifies gaps in the schedule, generates AI-powered content, and publishes it to your React website.

## Features

- **Automated Auditing**: Scans existing blog posts and identifies missing Sundays
- **AI Content Generation**: Creates 400-600 word blog posts using OpenAI GPT-4
- **Topic Rotation**: Automatically rotates through 6 key topic areas
- **Regional Focus**: Content tailored for Powys, Shropshire, Wales, and Herefordshire
- **TypeScript Integration**: Generates properly formatted TSX files for your React app
- **GitHub Integration**: Ready for automated commits and deployment
- **Comprehensive Logging**: Detailed logs for monitoring and debugging

## Installation

### Prerequisites

- Python 3.8 or higher
- pip (Python package manager)
- OpenAI API key (get one at https://platform.openai.com/)
- Git access to your repository

### Step 1: Install Dependencies

```bash
cd /workspace/11th-Temple/blog-automation
pip install -r requirements.txt
```

### Step 2: Configure Environment

```bash
# Copy the example environment file
cp .env.example .env

# Edit .env and add your OpenAI API key
nano .env  # or use your preferred editor
```

Add your OpenAI API key:
```
OPENAI_API_KEY=sk-your-actual-api-key-here
```

### Step 3: Test the Installation

```bash
# Run an audit to see if everything works
python blog_automation.py --audit-only
```

You should see a report showing existing posts and any missing Sundays.

## Usage

### Basic Commands

#### 1. Audit Only (Check for Missing Posts)

```bash
python blog_automation.py --audit-only
```

This will:
- Scan all existing blog posts
- Identify missing Sunday posts
- Generate a detailed audit report
- Save the report to `generated-posts/audit_report_[timestamp].txt`

#### 2. Generate All Missing Posts

```bash
python blog_automation.py --generate-all
```

This will:
- Run a complete audit
- Generate content for ALL missing Sunday posts
- Create TSX files for each post
- Update the blog data file
- Commit changes to Git (if configured)

**⚠️ Warning**: This may generate many posts if you have a large gap. Consider using `--generate-limit` instead.

#### 3. Generate Limited Number of Posts

```bash
# Generate only the next 3 missing posts
python blog_automation.py --generate-limit 3
```

This is recommended for:
- Initial testing
- Gradual backfilling of content
- Controlling API costs

#### 4. Dry Run (Test Without Publishing)

```bash
python blog_automation.py --generate-limit 1 --dry-run
```

This will generate content but NOT publish it. Useful for testing.

#### 5. Use Custom API Key

```bash
python blog_automation.py --api-key YOUR_KEY --generate-limit 1
```

Override the environment variable API key for a single run.

### Advanced Usage

#### Generate Posts for Specific Date Range

Edit the script and modify the `find_missing_sundays()` call:

```python
# In blog_automation.py, modify the end_date parameter
end_date = datetime(2025, 12, 31)  # Generate up to this date
automation.auditor.find_missing_sundays(end_date=end_date)
```

#### Customize Topics

Edit the `Config.TOPICS` list in `blog_automation.py`:

```python
TOPICS = [
    "Your custom topic 1",
    "Your custom topic 2",
    # ... add more topics
]
```

#### Change Word Count

Modify the word count range in `Config`:

```python
WORD_COUNT_MIN = 500  # Increase minimum
WORD_COUNT_MAX = 800  # Increase maximum
```

## Automation Setup

### Option 1: GitHub Actions (Recommended)

Create `.github/workflows/blog-automation.yml`:

```yaml
name: Weekly Blog Post Generation

on:
  schedule:
    # Run every Sunday at 6 AM UTC
    - cron: '0 6 * * 0'
  workflow_dispatch:  # Allow manual triggering

jobs:
  generate-blog-post:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout repository
        uses: actions/checkout@v3
      
      - name: Set up Python
        uses: actions/setup-python@v4
        with:
          python-version: '3.11'
      
      - name: Install dependencies
        run: |
          cd blog-automation
          pip install -r requirements.txt
      
      - name: Generate blog post
        env:
          OPENAI_API_KEY: ${{ secrets.OPENAI_API_KEY }}
        run: |
          cd blog-automation
          python blog_automation.py --generate-limit 1
      
      - name: Commit and push changes
        run: |
          git config --local user.email "automation@11thtemplesolutions.com"
          git config --local user.name "Blog Automation"
          git add .
          git commit -m "🤖 AUTO: Generated weekly blog post for $(date +%Y-%m-%d)" || echo "No changes to commit"
          git push
```

**Setup Steps:**
1. Go to your GitHub repository settings
2. Navigate to Secrets and Variables → Actions
3. Add a new secret: `OPENAI_API_KEY` with your API key
4. The workflow will run automatically every Sunday at 6 AM UTC

### Option 2: Cron Job (Linux/Mac)

```bash
# Edit your crontab
crontab -e

# Add this line (runs every Sunday at 6 AM)
0 6 * * 0 cd /workspace/11th-Temple/blog-automation && /usr/bin/python3 blog_automation.py --generate-limit 1 >> /var/log/blog-automation.log 2>&1
```

### Option 3: Windows Task Scheduler

1. Open Task Scheduler
2. Create Basic Task
3. Trigger: Weekly, Sunday, 6:00 AM
4. Action: Start a program
   - Program: `python`
   - Arguments: `blog_automation.py --generate-limit 1`
   - Start in: `C:\path\to\11th-Temple\blog-automation`

## File Structure

```
blog-automation/
├── blog_automation.py          # Main automation script
├── requirements.txt            # Python dependencies
├── .env.example               # Environment variable template
├── .env                       # Your actual environment variables (gitignored)
├── README.md                  # This file
├── sample-posts/              # Example blog posts
│   ├── rural-connectivity-digital-divide-2025.tsx
│   ├── uk-government-ai-grants-smes-2025.tsx
│   └── gdpr-compliance-checklist-2025-updates.tsx
├── generated-posts/           # Generated blog post files
│   └── audit_report_*.txt    # Audit reports
└── logs/                      # Automation logs
    └── blog_automation_*.log
```

## Content Generation

### How It Works

1. **Topic Selection**: The system rotates through 6 predefined topics based on the week number
2. **AI Generation**: Uses OpenAI GPT-4 to create content following your style guide
3. **Format Conversion**: Converts markdown to JSX format for React
4. **File Creation**: Generates properly formatted TSX files
5. **Data Update**: Updates the blog data file with new post metadata

### Content Quality

Each generated post includes:
- SEO-optimized title (60-70 characters)
- Compelling excerpt (150-160 characters)
- 400-600 word article body
- Regional focus (Powys, Shropshire, Wales, Herefordshire)
- Practical advice and actionable takeaways
- Customer testimonial (AI-generated but realistic)
- Call-to-action for 11th Temple Solutions
- Key takeaways section

### Topics Covered

1. **Rural Technology**: Connectivity, infrastructure, digital divide
2. **Government Grants**: Funding opportunities, application guidance
3. **GDPR Compliance**: Updates, checklists, best practices
4. **AI Applications**: Practical AI use cases for SMEs
5. **Automation**: Cost-saving automation solutions
6. **Regional News**: Local tech news and developments

## Monitoring & Maintenance

### Check Logs

```bash
# View latest log file
tail -f blog-automation/logs/blog_automation_*.log

# Search for errors
grep ERROR blog-automation/logs/*.log
```

### Verify Generated Content

1. Check `generated-posts/` directory for new TSX files
2. Review content quality before committing
3. Test the blog page locally: `npm run dev`
4. Verify posts appear correctly on `/blog`

### Monthly Maintenance

- **Review API Usage**: Check OpenAI dashboard for costs
- **Audit Content Quality**: Read generated posts for accuracy
- **Update Topics**: Refresh topic list based on current trends
- **Check Logs**: Review for any errors or warnings
- **Backup**: Ensure generated posts are backed up

## Troubleshooting

### Issue: "No OpenAI API key provided"

**Solution**: 
```bash
# Set environment variable
export OPENAI_API_KEY=your-key-here

# Or add to .env file
echo "OPENAI_API_KEY=your-key-here" >> .env
```

### Issue: "Error scanning blog posts"

**Solution**: Verify the blog data file path is correct:
```python
# In blog_automation.py, check:
BLOG_DATA_FILE = WORKSPACE_DIR / "src/content/newBlogData.tsx"
```

### Issue: Generated content is low quality

**Solutions**:
1. Increase temperature for more creativity: `OPENAI_TEMPERATURE = 0.8`
2. Use GPT-4 instead of GPT-3.5: `OPENAI_MODEL = "gpt-4"`
3. Enhance the system prompt with more specific instructions
4. Provide example posts for the AI to learn from

### Issue: "Permission denied" when writing files

**Solution**:
```bash
# Fix permissions
chmod -R 755 blog-automation/
chmod -R 755 src/content/blogs/
```

### Issue: Git commit fails

**Solution**:
```bash
# Configure git identity
git config user.email "automation@11thtemplesolutions.com"
git config user.name "Blog Automation"
```

## Cost Estimation

### OpenAI API Costs

- **GPT-4**: ~$0.03 per post (600 words)
- **GPT-3.5-Turbo**: ~$0.002 per post (600 words)

**Monthly Cost** (4 posts/month):
- GPT-4: ~$0.12/month
- GPT-3.5-Turbo: ~$0.01/month

**Annual Cost** (52 posts/year):
- GPT-4: ~$1.56/year
- GPT-3.5-Turbo: ~$0.10/year

💡 **Tip**: Start with GPT-3.5-Turbo for testing, upgrade to GPT-4 for production.

## Security Best Practices

### API Key Security

1. **Never commit API keys to Git**:
   ```bash
   # Ensure .env is in .gitignore
   echo ".env" >> .gitignore
   ```

2. **Use environment variables**:
   ```bash
   export OPENAI_API_KEY=your-key-here
   ```

3. **Rotate keys regularly**: Generate new API keys every 90 days

4. **Use GitHub Secrets**: Store API keys in GitHub repository secrets, not in code

### File Permissions

```bash
# Restrict access to sensitive files
chmod 600 .env
chmod 700 blog_automation.py
```

## Customization Guide

### Change Author Name

Edit `Config.AUTHOR_NAME` in `blog_automation.py`:
```python
AUTHOR_NAME = "Your Name"
```

### Modify Blog Schedule

Change the publish day (0=Monday, 6=Sunday):
```python
PUBLISH_DAY = 6  # Sunday
```

### Add New Topics

Extend the `Config.TOPICS` list:
```python
TOPICS = [
    "Existing topic 1",
    "Existing topic 2",
    "Your new topic here",  # Add new topics
]
```

### Customize Content Style

Modify the `_get_system_prompt()` method in `ContentGenerator`:
```python
def _get_system_prompt(self) -> str:
    return """Your custom instructions here..."""
```

## Support & Maintenance

### Getting Help

1. **Check Logs**: Review log files for error messages
2. **Test Locally**: Run with `--dry-run` flag first
3. **Review Documentation**: Read this README thoroughly
4. **Check GitHub Issues**: Look for similar problems

### Reporting Issues

When reporting issues, include:
- Error message from logs
- Command you ran
- Python version: `python --version`
- Package versions: `pip list`
- Operating system

### Updates

To update the system:
```bash
cd blog-automation
git pull origin main
pip install -r requirements.txt --upgrade
```

## Future Enhancements

Potential improvements for future versions:

- [ ] Multi-language support (Welsh/English)
- [ ] Image generation for blog posts
- [ ] Social media post generation
- [ ] Email newsletter integration
- [ ] Analytics integration
- [ ] A/B testing for titles
- [ ] SEO keyword research integration
- [ ] Plagiarism checking
- [ ] Content calendar visualization
- [ ] Slack/Discord notifications

## License

This automation system is proprietary to 11th Temple Solutions.

## Contact

For questions or support:
- Email: Hello@11thtemplesolutions.com
- Website: https://11thtemplesolutions.com
- Phone: +44 7312 190 728

---

**Last Updated**: October 2025  
**Version**: 1.0.0  
**Maintained By**: SuperNinja AI Agent