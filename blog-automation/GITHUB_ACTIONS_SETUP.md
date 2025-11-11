# GitHub Actions Setup Guide

## ✅ What's Already Done

1. ✅ Blog automation script is complete and tested
2. ✅ OpenAI API integration is working (GPT-4o-mini)
3. ✅ GitHub Actions workflow file is configured
4. ✅ All code is committed and pushed to GitHub
5. ✅ Local .env file is configured with your API key

## 🔧 What You Need to Do (5 Minutes)

### Step 1: Add OpenAI API Key to GitHub Secrets

1. **Go to your GitHub repository**: https://github.com/Satanika218/11th-Temple

2. **Navigate to Settings**:
   - Click on "Settings" tab (top right of repository page)

3. **Go to Secrets and Variables**:
   - In the left sidebar, click "Secrets and variables"
   - Click "Actions"

4. **Add New Repository Secret**:
   - Click "New repository secret" button
   - **Name**: `OPENAI_API_KEY`
   - **Value**: `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`
   - Click "Add secret"

### Step 2: Verify GitHub Actions is Enabled

1. **Go to Actions tab**: https://github.com/Satanika218/11th-Temple/actions

2. **Check if Actions are enabled**:
   - If you see a message saying "Actions are disabled", click "I understand my workflows, go ahead and enable them"
   - If you see workflows listed, Actions are already enabled ✅

### Step 3: Test the Workflow (Optional)

1. **Go to Actions tab**: https://github.com/Satanika218/11th-Temple/actions

2. **Find "Weekly Blog Post Generation" workflow**:
   - Click on "Weekly Blog Post Generation" in the left sidebar

3. **Run workflow manually**:
   - Click "Run workflow" button (top right)
   - Leave "Number of posts to generate" as 1
   - Click "Run workflow"

4. **Watch the workflow run**:
   - You'll see a new workflow run appear
   - Click on it to see the progress
   - It should complete in about 30-60 seconds

5. **Verify the result**:
   - After completion, check your repository for a new commit
   - The commit should contain a new blog post file

## 📅 Automatic Schedule

Once set up, the workflow will automatically:
- Run every **Sunday at 6:00 AM UTC**
- Generate **1 new blog post**
- Commit and push the changes to your repository
- No manual intervention required!

## 🔍 Monitoring

### Check Workflow Runs
- Go to: https://github.com/Satanika218/11th-Temple/actions
- You'll see all past and upcoming workflow runs
- Click on any run to see detailed logs

### Check Generated Posts
- New posts will appear in: `blog-automation/generated-posts/`
- Each post is a `.tsx` file ready to be integrated into your website

### Check Logs
- Each workflow run creates detailed logs
- Logs are available in the Actions tab
- You can download logs for troubleshooting

## 🎯 What Happens Next

### First Automated Run
- **When**: Next Sunday at 6:00 AM UTC
- **What**: Generates 1 blog post for the oldest missing Sunday
- **Where**: Committed to your main branch automatically

### Subsequent Runs
- Continues every Sunday
- Fills in missing posts first
- Then generates new posts for current week
- Maintains consistent weekly publishing schedule

## 💰 Cost Tracking

### OpenAI API Costs
- **Per Post**: ~$0.0004 (less than a penny)
- **Per Month**: ~$0.002 (4 posts)
- **Per Year**: ~$0.02 (52 posts)

### How to Monitor
1. Go to: https://platform.openai.com/usage
2. Log in with your OpenAI account
3. View usage dashboard
4. Set up billing alerts if desired

## 🛠️ Troubleshooting

### If Workflow Fails

1. **Check the error logs**:
   - Go to Actions tab
   - Click on the failed workflow run
   - Read the error message

2. **Common Issues**:
   - **"No OpenAI API key"**: Secret not set correctly
   - **"Permission denied"**: GitHub Actions not enabled
   - **"Rate limit"**: Too many requests (unlikely with 1 post/week)

3. **Get Help**:
   - Check logs in Actions tab
   - Review error messages
   - Contact support if needed

### If Posts Aren't Appearing on Website

The generated posts are in `.tsx` format and need to be integrated into your website's blog system. You have two options:

1. **Manual Integration** (Current Setup):
   - Posts are generated in `blog-automation/generated-posts/`
   - Copy them to your blog pages directory
   - Update your blog data file

2. **Automatic Integration** (Future Enhancement):
   - Modify the script to directly update your blog pages
   - Requires knowing your exact blog structure
   - Can be set up later if needed

## ✅ Verification Checklist

Before considering setup complete, verify:

- [ ] OpenAI API key added to GitHub Secrets
- [ ] GitHub Actions enabled in repository
- [ ] Workflow file exists at `.github/workflows/blog-automation.yml`
- [ ] Test workflow run completed successfully
- [ ] New blog post file generated
- [ ] Commit appeared in repository

## 📞 Support

If you encounter any issues:

1. Check the troubleshooting section above
2. Review workflow logs in GitHub Actions
3. Verify API key is correct and has credits
4. Ensure GitHub Actions has write permissions

## 🎉 Success Indicators

You'll know everything is working when:

1. ✅ Workflow runs successfully every Sunday
2. ✅ New blog post files appear in repository
3. ✅ Commits are made automatically
4. ✅ OpenAI usage shows minimal costs
5. ✅ No error notifications from GitHub

---

**Next Steps**: Follow Step 1 above to add your OpenAI API key to GitHub Secrets, then optionally test the workflow manually.