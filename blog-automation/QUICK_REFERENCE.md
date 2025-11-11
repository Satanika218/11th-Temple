# Quick Reference Guide - Blog Automation

## 🚀 Common Commands

### Audit & Check
```bash
# Check for missing posts
python blog_automation.py --audit-only

# View latest log
tail -f logs/blog_automation_*.log
```

### Generate Posts
```bash
# Generate 1 post
python blog_automation.py --generate-limit 1

# Generate all missing posts
python blog_automation.py --generate-all

# Test without publishing
python blog_automation.py --generate-limit 1 --dry-run
```

### Verify Results
```bash
# Check generated files
ls -la generated-posts/

# View git changes
git status
git diff

# Test on website
npm run dev
# Visit: http://localhost:8081/blog
```

## 📁 Important Files

| File | Purpose |
|------|---------|
| `blog_automation.py` | Main automation script |
| `.env` | API keys and configuration |
| `requirements.txt` | Python dependencies |
| `generated-posts/` | Generated blog post files |
| `logs/` | Automation logs |

## ⚙️ Configuration

### Change API Model
```env
# In .env file
OPENAI_MODEL=gpt-4  # or gpt-3.5-turbo
```

### Adjust Word Count
```python
# In blog_automation.py
WORD_COUNT_MIN = 400
WORD_COUNT_MAX = 600
```

### Modify Topics
```python
# In blog_automation.py, Config class
TOPICS = [
    "Your topic 1",
    "Your topic 2",
    # ...
]
```

## 🔧 Troubleshooting

### API Key Issues
```bash
# Check if key is set
cat .env | grep OPENAI_API_KEY

# Set temporarily
export OPENAI_API_KEY=sk-your-key-here
```

### Permission Issues
```bash
# Fix permissions
chmod -R 755 blog-automation/
chmod 600 .env
```

### Git Issues
```bash
# Configure git
git config user.email "automation@11thtemplesolutions.com"
git config user.name "Blog Automation"
```

## 📊 Monitoring

### Check GitHub Actions
1. Go to repository on GitHub
2. Click **Actions** tab
3. View **Weekly Blog Post Generation** workflow

### View Logs
```bash
# Latest log
tail -100 logs/blog_automation_*.log

# Search for errors
grep ERROR logs/*.log

# Follow live
tail -f logs/blog_automation_*.log
```

### Check Costs
1. Visit https://platform.openai.com/usage
2. Review API usage
3. Monitor monthly costs

## 🔄 Maintenance

### Weekly
- [ ] Verify Sunday post was published
- [ ] Check GitHub Actions status
- [ ] Review generated content quality

### Monthly
- [ ] Review all generated posts
- [ ] Check API costs
- [ ] Update dependencies: `pip install -r requirements.txt --upgrade`
- [ ] Review and update topics if needed

## 📞 Quick Help

| Issue | Solution |
|-------|----------|
| No API key | Add to `.env` file |
| Permission denied | Run `chmod -R 755 blog-automation/` |
| Module not found | Run `pip install -r requirements.txt` |
| Git push fails | Configure git user/email |
| Low quality content | Switch to GPT-4 in `.env` |

## 🎯 Success Indicators

✅ Audit runs without errors  
✅ Posts generate successfully  
✅ Files appear in `generated-posts/`  
✅ Blog data file is updated  
✅ Posts visible on website  
✅ GitHub Actions runs weekly  
✅ No errors in logs  

## 📚 Full Documentation

- **Complete Guide**: See `README.md`
- **Setup Instructions**: See `SETUP_GUIDE.md`
- **Sample Posts**: See `sample-posts/` directory

---

**Version**: 1.0.0  
**Last Updated**: October 2025