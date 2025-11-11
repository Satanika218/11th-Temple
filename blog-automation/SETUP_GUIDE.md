# Complete Setup Guide - Blog Automation System

## 📋 Table of Contents

1. [Prerequisites](#prerequisites)
2. [Initial Setup](#initial-setup)
3. [Testing](#testing)
4. [Automation Setup](#automation-setup)
5. [Verification](#verification)
6. [Troubleshooting](#troubleshooting)

---

## Prerequisites

Before starting, ensure you have:

- ✅ Python 3.8 or higher installed
- ✅ Git installed and configured
- ✅ Access to your GitHub repository
- ✅ OpenAI API account (https://platform.openai.com/)
- ✅ Terminal/command line access

### Check Your Python Version

```bash
python --version
# Should show Python 3.8 or higher
```

If you need to install Python:
- **Windows**: Download from https://www.python.org/downloads/
- **Mac**: `brew install python3`
- **Linux**: `sudo apt-get install python3 python3-pip`

---

## Initial Setup

### Step 1: Get Your OpenAI API Key

1. Go to https://platform.openai.com/
2. Sign up or log in
3. Navigate to API Keys section
4. Click "Create new secret key"
5. Copy the key (starts with `sk-`)
6. **Important**: Save this key securely - you won't be able to see it again!

**Cost Note**: 
- GPT-3.5-Turbo: ~$0.002 per blog post
- GPT-4: ~$0.03 per blog post
- Recommended: Start with GPT-3.5-Turbo for testing

### Step 2: Install Python Dependencies

```bash
# Navigate to the blog automation directory
cd /workspace/11th-Temple/blog-automation

# Install required packages
pip install -r requirements.txt

# Verify installation
pip list | grep openai
```

Expected output:
```
openai    1.x.x
```

### Step 3: Configure Environment Variables

```bash
# Copy the example environment file
cp .env.example .env

# Edit the .env file
nano .env  # or use vim, code, or any text editor
```

Add your OpenAI API key:
```env
OPENAI_API_KEY=sk-your-actual-api-key-here
OPENAI_MODEL=gpt-3.5-turbo
OPENAI_TEMPERATURE=0.7
```

**Security Note**: Never commit the `.env` file to Git!

```bash
# Verify .env is in .gitignore
grep ".env" ../.gitignore
```

### Step 4: Verify File Permissions

```bash
# Make the script executable
chmod +x blog_automation.py

# Secure the .env file
chmod 600 .env
```

---

## Testing

### Test 1: Run Audit Only

This checks if the system can read your existing blog posts.

```bash
python blog_automation.py --audit-only
```

**Expected Output**:
```
================================================================================
BLOG AUDIT REPORT
================================================================================
Generated: 2025-10-14 18:00:00
Blog Start Date: 2025-03-23

Total Existing Posts: 30
First Post: 2025-03-23
Latest Post: 2025-10-05

Missing Sunday Posts: 2

Missing Dates:
  - 2025-10-12 (Sunday)
  - 2025-10-19 (Sunday)

================================================================================
```

**If this works**: ✅ Your system can read the blog data correctly!

**If this fails**: See [Troubleshooting](#troubleshooting) section.

### Test 2: Generate One Post (Dry Run)

This tests content generation without actually publishing.

```bash
python blog_automation.py --generate-limit 1 --dry-run
```

**Expected Output**:
```
INFO - Starting blog audit...
INFO - Found 30 existing blog posts
INFO - Identifying missing Sunday posts...
INFO - Found 2 missing Sunday posts
INFO - Generating post for 2025-10-12
INFO - Selected topic: Technology adoption challenges...
INFO - Generating content with OpenAI...
INFO - Content generated successfully
INFO - Generated post: [Title of generated post]
```

**If this works**: ✅ Content generation is working!

**If this fails**: Check your API key and internet connection.

### Test 3: Generate and Publish One Post

This actually creates files and updates your blog.

```bash
python blog_automation.py --generate-limit 1
```

**Expected Output**:
```
INFO - Publishing 1 posts...
INFO - Generating TSX file for: [slug]
INFO - Generated file: /workspace/11th-Temple/blog-automation/generated-posts/[slug].tsx
INFO - Updating blog data file with 1 new posts
INFO - Blog data file updated successfully
INFO - All posts published successfully
```

**Verify the results**:

```bash
# Check generated files
ls -la generated-posts/

# Check if blog data was updated
git status

# View the generated post
cat generated-posts/[slug].tsx
```

**If this works**: ✅ Your system is fully operational!

### Test 4: Verify on Website

```bash
# Start the development server
cd /workspace/11th-Temple
npm run dev
```

Visit: http://localhost:8081/blog

You should see your newly generated blog post!

---

## Automation Setup

### Option A: GitHub Actions (Recommended)

This runs automatically every Sunday at 6 AM UTC.

#### Step 1: Add OpenAI API Key to GitHub Secrets

1. Go to your GitHub repository: https://github.com/Satanika218/11th-Temple
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Name: `OPENAI_API_KEY`
5. Value: Your OpenAI API key (starts with `sk-`)
6. Click **Add secret**

#### Step 2: Verify Workflow File

The workflow file is already created at `.github/workflows/blog-automation.yml`

```bash
# Check if the file exists
ls -la .github/workflows/blog-automation.yml
```

#### Step 3: Enable GitHub Actions

1. Go to your repository on GitHub
2. Click the **Actions** tab
3. If prompted, click **I understand my workflows, go ahead and enable them**

#### Step 4: Test Manual Trigger

1. Go to **Actions** tab
2. Click **Weekly Blog Post Generation** workflow
3. Click **Run workflow** dropdown
4. Enter `1` for number of posts
5. Click **Run workflow**

Watch the workflow run. It should:
- ✅ Install dependencies
- ✅ Generate a blog post
- ✅ Commit and push changes
- ✅ Complete successfully

#### Step 5: Verify Automatic Schedule

The workflow will now run automatically every Sunday at 6 AM UTC.

**To check next run**:
1. Go to **Actions** tab
2. Click **Weekly Blog Post Generation**
3. Look for "Next scheduled run" information

### Option B: Cron Job (Linux/Mac Server)

If you're running this on your own server:

```bash
# Edit crontab
crontab -e

# Add this line (runs every Sunday at 6 AM)
0 6 * * 0 cd /workspace/11th-Temple/blog-automation && /usr/bin/python3 blog_automation.py --generate-limit 1 >> /var/log/blog-automation.log 2>&1

# Save and exit

# Verify crontab
crontab -l
```

**Test the cron job**:
```bash
# Run manually to test
/usr/bin/python3 /workspace/11th-Temple/blog-automation/blog_automation.py --generate-limit 1
```

### Option C: Windows Task Scheduler

1. Open **Task Scheduler**
2. Click **Create Basic Task**
3. Name: "Blog Automation"
4. Trigger: **Weekly**
5. Day: **Sunday**
6. Time: **06:00**
7. Action: **Start a program**
   - Program: `C:\Python311\python.exe` (adjust path)
   - Arguments: `blog_automation.py --generate-limit 1`
   - Start in: `C:\workspace\11th-Temple\blog-automation`
8. Click **Finish**

**Test the task**:
- Right-click the task → **Run**
- Check the logs in `blog-automation/logs/`

---

## Verification

### Daily Checks (First Week)

For the first week, check daily to ensure everything works:

```bash
# Check if workflow ran
# Go to GitHub → Actions → Check latest run

# Check logs
tail -f blog-automation/logs/blog_automation_*.log

# Check generated posts
ls -la blog-automation/generated-posts/

# Verify on website
npm run dev
# Visit http://localhost:8081/blog
```

### Weekly Checks (Ongoing)

After the first week, check weekly:

1. **Monday Morning**: Verify Sunday's post was published
2. **Check GitHub Actions**: Ensure workflow completed successfully
3. **Review Content**: Read the generated post for quality
4. **Check Costs**: Monitor OpenAI API usage

### Monthly Maintenance

Once a month:

1. **Review All Generated Posts**: Check quality and accuracy
2. **Update Topics**: Refresh topic list if needed
3. **Check API Costs**: Review OpenAI billing
4. **Update Dependencies**: `pip install -r requirements.txt --upgrade`
5. **Review Logs**: Check for any warnings or errors

---

## Troubleshooting

### Issue: "No module named 'openai'"

**Solution**:
```bash
pip install -r requirements.txt
# or
pip install openai
```

### Issue: "No OpenAI API key provided"

**Solution**:
```bash
# Check if .env file exists
ls -la .env

# Check if API key is set
cat .env | grep OPENAI_API_KEY

# If missing, add it
echo "OPENAI_API_KEY=sk-your-key-here" >> .env
```

### Issue: "Error scanning blog posts"

**Solution**:
```bash
# Verify file path
ls -la /workspace/11th-Temple/src/content/newBlogData.tsx

# Check file permissions
chmod 644 /workspace/11th-Temple/src/content/newBlogData.tsx
```

### Issue: "Permission denied" when writing files

**Solution**:
```bash
# Fix directory permissions
chmod -R 755 blog-automation/
chmod -R 755 src/content/blogs/

# Create directories if missing
mkdir -p blog-automation/generated-posts
mkdir -p blog-automation/logs
```

### Issue: GitHub Actions workflow fails

**Solution**:

1. **Check Secrets**:
   - Go to Settings → Secrets → Actions
   - Verify `OPENAI_API_KEY` exists and is correct

2. **Check Workflow Logs**:
   - Go to Actions tab
   - Click the failed workflow
   - Review error messages

3. **Common Fixes**:
   ```yaml
   # Ensure permissions are set in workflow file
   permissions:
     contents: write
   ```

### Issue: Generated content is low quality

**Solutions**:

1. **Use GPT-4 instead of GPT-3.5**:
   ```env
   OPENAI_MODEL=gpt-4
   ```

2. **Adjust temperature**:
   ```env
   OPENAI_TEMPERATURE=0.8  # More creative
   ```

3. **Enhance system prompt**:
   Edit `_get_system_prompt()` in `blog_automation.py`

### Issue: Git push fails in automation

**Solution**:
```bash
# Configure git identity
git config user.email "automation@11thtemplesolutions.com"
git config user.name "Blog Automation"

# For GitHub Actions, ensure permissions are correct
# (Already configured in workflow file)
```

### Issue: Posts not appearing on website

**Solution**:

1. **Check if files were created**:
   ```bash
   ls -la src/content/blogs/
   ```

2. **Verify blog data file was updated**:
   ```bash
   git diff src/content/newBlogData.tsx
   ```

3. **Rebuild the site**:
   ```bash
   npm run build
   npm run dev
   ```

4. **Clear browser cache** and refresh

---

## Getting Help

If you encounter issues not covered here:

1. **Check Logs**:
   ```bash
   tail -100 blog-automation/logs/blog_automation_*.log
   ```

2. **Run with Verbose Logging**:
   ```python
   # In blog_automation.py, change:
   LOG_LEVEL = logging.DEBUG
   ```

3. **Test Components Individually**:
   ```bash
   # Test audit only
   python blog_automation.py --audit-only
   
   # Test generation only (no publish)
   python blog_automation.py --generate-limit 1 --dry-run
   ```

4. **Check System Requirements**:
   ```bash
   python --version  # Should be 3.8+
   pip list  # Check installed packages
   git --version  # Verify git is installed
   ```

---

## Success Checklist

Before considering setup complete, verify:

- [ ] Audit runs successfully
- [ ] Can generate one post manually
- [ ] Generated post appears on website
- [ ] GitHub Actions workflow runs successfully
- [ ] Automatic schedule is configured
- [ ] Logs are being created
- [ ] API costs are acceptable
- [ ] Content quality meets standards
- [ ] Git commits are working
- [ ] No errors in logs

---

## Next Steps

Once setup is complete:

1. **Monitor First Month**: Check weekly to ensure smooth operation
2. **Adjust Topics**: Customize topics based on your needs
3. **Refine Prompts**: Improve content quality by enhancing AI prompts
4. **Add Features**: Consider adding image generation, social media posts, etc.
5. **Document Changes**: Keep notes on any customizations you make

---

## Support

For additional help:
- **Email**: Hello@11thtemplesolutions.com
- **Documentation**: See README.md for detailed information
- **Logs**: Always check logs first for error messages

---

**Setup Guide Version**: 1.0.0  
**Last Updated**: October 2025  
**Maintained By**: SuperNinja AI Agent