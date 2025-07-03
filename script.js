// Global Variables
let currentQuiz = null;
let currentQuestion = 0;
let quizAnswers = [];
let auditResults = {};

// Calendar Variables
let currentDate = new Date();
let selectedDate = null;
let selectedTime = null;
const availableTimes = ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00'];
const bookedSlots = {}; // Store booked appointments

// Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
    
    // Initialize calendar
    initializeCalendar();
});

// Utility Functions
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

function showLoading(element) {
    element.innerHTML = '<div class="loading"></div> Processing...';
}

function hideLoading() {
    // Remove loading indicators
    document.querySelectorAll('.loading').forEach(loader => {
        loader.parentElement.innerHTML = loader.parentElement.innerHTML.replace('<div class="loading"></div> Processing...', '');
    });
}

// Chatbot Functions
function openChatbot() {
    document.getElementById('chatbot').style.display = 'flex';
}

function closeChatbot() {
    document.getElementById('chatbot').style.display = 'none';
}

function sendMessage() {
    const input = document.getElementById('chatbot-input');
    const message = input.value.trim();
    
    if (message) {
        addMessage(message, 'user');
        input.value = '';
        
        // Check if message is a number (option selection)
        const optionNumber = parseInt(message);
        let processedMessage = message;
        
        if (!isNaN(optionNumber) && optionNumber > 0) {
            processedMessage = `OPTION:${optionNumber - 1}`;
        }
        
        // Simulate bot response
        setTimeout(() => {
            const response = getBotResponse(processedMessage);
            addMessage(response, 'bot');
            
            // If we're at the start, show the initial conversation
            if (conversationState === 'start' && (message.toLowerCase().includes('hello') || message.toLowerCase().includes('hi'))) {
                setTimeout(() => {
                    const startResponse = displayCurrentNode();
                    addMessage(startResponse, 'bot');
                }, 500);
            }
        }, 1000);
    }
}

function addMessage(message, sender) {
    const messagesContainer = document.getElementById('chatbot-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    messageDiv.innerHTML = `<p>${message}</p>`;
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Enhanced Chatbot with Your Actual Conversation Tree
let conversationState = 'start';
let userContext = {};

const conversationTree = {
    start: {
        id: 'start',
        text: [
            "Hi there! I'm your AI business consultant from 11th Temple Solutions. I help businesses identify areas where technology and automation can save time, reduce costs, and drive growth.",
            "What brings you here today? Are you looking to solve a specific business challenge, or are you interested in exploring how technology might help your business run more smoothly?"
        ],
        options: [
            { text: "Solve a specific challenge", next: 'first_level_diagnostic' },
            { text: "Explore what's possible", next: 'first_level_diagnostic' },
            { text: "Other - Discuss problem now", next: 'redirect_consultation' },
        ],
    },
    redirect_consultation: {
        id: 'redirect_consultation',
        text: "Perfect! I'll connect you with one of our specialists who can discuss your specific needs in detail. To book your free consultation, simply close this chat and click the 'Get Started' button at the top of the page, or visit our consultation page directly.",
        options: [
            { text: "Book consultation now", next: 'end_chat_consultation' },
            { text: "Go back to main options", next: 'start' },
        ],
    },
    end_chat_consultation: {
        id: 'end_chat_consultation',
        text: "Excellent! Please close this chat and look for the 'Get Started' button at the top of the page to book your free consultation. We're excited to help transform your business with the right technology solutions!",
        isEnd: true
    },
    first_level_diagnostic: {
        id: 'first_level_diagnostic',
        text: "What area of your business currently takes up the most time or feels like the biggest headache?",
        options: [
            { text: "Your website and online presence", next: 'website_presence_q' },
            { text: "Getting the word out and finding new customers", next: 'marketing_q' },
            { text: "Paperwork, invoices and financial tasks", next: 'finance_q' },
            { text: "Keeping in touch with customers", next: 'customer_relations_q' },
            { text: "Other - Discuss problem now", next: 'redirect_consultation' },
            { text: "Go back", next: 'start' },
        ],
    },
    // Website Path
    website_presence_q: {
        id: 'website_presence_q',
        text: "Thanks for sharing that. Your website is like your digital shopfront - it needs to work hard for your business. What seems to be the main issue with your online presence?",
        options: [
            { text: "Not enough people are contacting/buying through the site", next: 'website_leads_q' },
            { text: "Making updates to the site is too time-consuming", next: 'website_updates_q' },
            { text: "Other - Discuss problem now", next: 'redirect_consultation' },
            { text: "Go back", next: 'first_level_diagnostic' },
        ],
    },
    website_leads_q: {
        id: 'website_leads_q',
        text: "I understand your website isn't bringing in as many customers as you'd like. You're definitely not alone - about 60% of small businesses face this same challenge. To help find the right solution, could you tell me: can people easily find your business when they search online for what you offer?",
        options: [
            { text: "Yes, we seem to rank well", next: 'website_leads_solutions' },
            { text: "No, we're hard to find online", next: 'website_leads_solutions' },
            { text: "I'm not sure", next: 'website_leads_solutions' },
            { text: "Other - Discuss problem now", next: 'redirect_consultation' },
            { text: "Go back", next: 'website_presence_q' },
        ],
    },
    website_leads_solutions: {
        id: 'website_leads_solutions',
        text: "Based on what you've shared about your website not bringing in enough new business, here are three approaches that could help:",
        solutions: [
            { title: "1. Smart Website Improvement", description: "We can use technology that watches how visitors use your website and automatically makes small changes to help more people contact you or make purchases. Think of it like having a shop assistant who notices which displays attract the most customers and adjusts your store layout accordingly. Businesses typically see 25-30% more inquiries with this approach." },
            { title: "2. 24/7 Digital Assistant", description: "Adding a helpful chat feature to your website means potential customers can get answers anytime, even outside business hours. It's like having a knowledgeable staff member who never sleeps! Our clients typically capture 35% more leads during evenings and weekends this way." },
            { title: "3. Getting Found Online", description: "Our tools can help your website appear higher in search results when people look for businesses like yours. It's similar to moving your shop from a quiet side street to a busy main road. Most businesses see 40-60% more website visitors within three months." },
        ],
        options: [
            { text: "Chat with a specialist", next: 'closing' },
            { text: "Explore other challenges", next: 'first_level_diagnostic' },
            { text: "Other - Discuss problem now", next: 'redirect_consultation' },
            { text: "Go back", next: 'website_leads_q' },
        ]
    }
};

function getBotResponse(message) {
    const lowerMessage = message.toLowerCase();
    
    // Handle option selection
    if (message.startsWith('OPTION:')) {
        const optionIndex = parseInt(message.split(':')[1]);
        return handleOptionSelection(optionIndex);
    }
    
    // Handle free text input
    return handleFreeTextInput(lowerMessage);
}

function handleOptionSelection(optionIndex) {
    const currentNode = conversationTree[conversationState];
    if (!currentNode || !currentNode.options || optionIndex >= currentNode.options.length) {
        return "I'm sorry, that option isn't available. Let me help you get back on track.";
    }
    
    const selectedOption = currentNode.options[optionIndex];
    conversationState = selectedOption.next;
    
    return displayCurrentNode();
}

function handleFreeTextInput(message) {
    // Handle common queries that can redirect to appropriate conversation nodes
    if (message.includes('consultation') || message.includes('book') || message.includes('schedule')) {
        conversationState = 'redirect_consultation';
        return displayCurrentNode();
    } else if (message.includes('website')) {
        conversationState = 'website_presence_q';
        return displayCurrentNode();
    } else if (message.includes('marketing') || message.includes('customers')) {
        conversationState = 'marketing_q';
        return displayCurrentNode();
    } else if (message.includes('invoice') || message.includes('finance') || message.includes('paperwork')) {
        conversationState = 'finance_q';
        return displayCurrentNode();
    } else {
        // Default response that guides user to options
        return "I understand you have questions! To give you the most helpful guidance, I'd like to understand your main business challenge. Would you like me to show you the main areas where I can help?";
    }
}

function displayCurrentNode() {
    const node = conversationTree[conversationState];
    if (!node) {
        conversationState = 'start';
        return displayCurrentNode();
    }
    
    let response = Array.isArray(node.text) ? node.text.join('\n\n') : node.text;
    
    // Add solutions if they exist
    if (node.solutions) {
        response += '\n\n';
        node.solutions.forEach(solution => {
            response += `**${solution.title}**\n${solution.description}\n\n`;
        });
    }
    
    // Add options if they exist and it's not an end node
    if (node.options && !node.isEnd) {
        response += '\n\nPlease choose an option:';
        node.options.forEach((option, index) => {
            response += `\n${index + 1}. ${option.text}`;
        });
    }
    
    return response;
}

function handlePricingInquiry(message) {
    if (message.includes('500') || message.includes('under') || message.includes('small') || message.includes('tight')) {
        conversationState = 'service_selection';
        return "Perfect! We work with businesses of all sizes. For budgets around £300-800/month, I'd recommend starting with:\n\n• Basic automation (email responses, social media)\n• Website optimization\n• Local SEO setup\n• Monthly performance reports\n\nThis typically saves businesses 10-15 hours per week. Which area would have the biggest impact on your business?";
    } else if (message.includes('1000') || message.includes('thousand') || message.includes('medium')) {
        conversationState = 'service_selection';
        return "Excellent! With a budget of £800-1500/month, we can implement comprehensive solutions:\n\n• Advanced AI automation\n• Custom website development\n• Full SEO & marketing campaigns\n• Customer analytics & insights\n• Priority support\n\nThis level typically increases revenue by 25-40%. What's your primary business goal right now?";
    } else {
        return "I understand budget is important. Our solutions typically range from £300-2000/month depending on your needs. The key is finding what delivers the best ROI for YOUR business.\n\nCould you share:\n• Your business type\n• Main time-consuming tasks\n• Current monthly revenue\n\nThis helps me suggest the most cost-effective starting point.";
    }
}

function handleServiceSelection(message) {
    conversationState = 'business_details';
    
    if (userContext.interest === 'automation') {
        if (message.includes('1') || message.includes('customer') || message.includes('communication')) {
            return "Smart choice! Customer communication automation is our most popular service. We can set up:\n\n• Instant response to inquiries\n• Appointment booking systems\n• Follow-up sequences\n• Review request automation\n\nWhat type of business do you run? This helps me suggest the best automation approach.";
        } else if (message.includes('2') || message.includes('invoice') || message.includes('payment')) {
            return "Excellent! Invoice automation saves businesses hours each week. We can automate:\n\n• Invoice generation and sending\n• Payment reminders\n• Receipt processing\n• Financial reporting\n\nHow many invoices do you typically process per month? This helps determine the time savings.";
        }
    }
    
    return "Great choice! To give you the most relevant advice, could you tell me:\n\n• What type of business you run\n• Your main location (which county)\n• Your biggest current challenge\n\nThis helps me tailor our solutions to your specific needs.";
}

function handleBusinessDetails(message) {
    conversationState = 'booking_process';
    return "Thank you for sharing those details! Based on what you've told me, I can see several opportunities to help your business grow.\n\nThe best next step would be a free consultation where we can:\n\n✓ Do a live audit of your current setup\n✓ Show you exactly how automation would work\n✓ Create a custom implementation plan\n✓ Discuss ROI projections\n\nWould you like to book a 30-minute session? I can check our calendar for the best times.";
}

function handleBookingProcess(message) {
    if (message.includes('yes') || message.includes('book') || message.includes('schedule')) {
        return "Perfect! You can book directly using our calendar above, or let me know your preferred:\n\n• Day of the week\n• Time preference (morning/afternoon)\n• Any dates to avoid\n\nI'll find the perfect slot for you. All consultations are free and there's no obligation.";
    } else if (message.includes('no') || message.includes('not ready')) {
        conversationState = 'initial';
        return "No problem at all! I'm here whenever you're ready. In the meantime, you might find our free tools helpful:\n\n• Website audit\n• SEO analysis\n• GDPR compliance check\n\nThese give you valuable insights about your current digital presence. Would you like to try any of these?";
    } else {
        return "I understand you might need more information first. What specific questions can I answer to help you decide? I'm here to help, not pressure you into anything.";
    }
}

// Allow Enter key to send messages
document.addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && document.activeElement.id === 'chatbot-input') {
        sendMessage();
    }
});

// Modal Functions
function openModal() {
    document.getElementById('tool-modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('tool-modal').style.display = 'none';
}

// Tool Functions
function openTool(toolType) {
    const toolContent = document.getElementById('tool-content');
    
    switch(toolType) {
        case 'website-audit':
            toolContent.innerHTML = getWebsiteAuditHTML();
            break;
        case 'seo-audit':
            toolContent.innerHTML = getSEOAuditHTML();
            break;
        case 'analytics-audit':
            toolContent.innerHTML = getAnalyticsAuditHTML();
            break;
        case 'gdpr-quiz':
            toolContent.innerHTML = getGDPRQuizHTML();
            initializeQuiz('gdpr');
            break;
        case 'digital-skills-quiz':
            toolContent.innerHTML = getDigitalSkillsQuizHTML();
            initializeQuiz('digital-skills');
            break;
    }
    
    openModal();
}

// Website Audit Tool
function getWebsiteAuditHTML() {
    return `
        <div class="audit-container">
            <h2>Website Audit Tool</h2>
            <p>Get a comprehensive analysis of your website's performance, SEO, and user experience.</p>
            
            <div class="audit-form">
                <input type="url" id="audit-url" placeholder="Enter your website URL (e.g., https://yourwebsite.com)" required>
                <button onclick="runWebsiteAudit()" class="btn-primary">Start Audit</button>
            </div>
            
            <div id="audit-results" class="audit-results" style="display: none;">
                <!-- Results will be populated here -->
            </div>
        </div>
    `;
}

function runWebsiteAudit() {
    const url = document.getElementById('audit-url').value;
    if (!url) {
        alert('Please enter a valid website URL');
        return;
    }
    
    const button = event.target;
    showLoading(button);
    
    // Simulate audit process
    setTimeout(() => {
        const results = generateWebsiteAuditResults(url);
        displayWebsiteAuditResults(results);
        hideLoading();
        button.textContent = 'Start Audit';
    }, 3000);
}

function generateWebsiteAuditResults(url) {
    // Simulate realistic audit results
    const domain = new URL(url).hostname;
    
    return {
        url: url,
        domain: domain,
        performance: {
            score: Math.floor(Math.random() * 40) + 60, // 60-100
            loadTime: (Math.random() * 3 + 1).toFixed(1), // 1-4 seconds
            pageSize: (Math.random() * 2 + 1).toFixed(1), // 1-3 MB
            requests: Math.floor(Math.random() * 50) + 20 // 20-70 requests
        },
        seo: {
            score: Math.floor(Math.random() * 30) + 70, // 70-100
            title: Math.random() > 0.3,
            description: Math.random() > 0.4,
            headings: Math.random() > 0.2,
            images: Math.random() > 0.5
        },
        accessibility: {
            score: Math.floor(Math.random() * 25) + 75, // 75-100
            altText: Math.random() > 0.3,
            contrast: Math.random() > 0.4,
            navigation: Math.random() > 0.2
        },
        mobile: {
            score: Math.floor(Math.random() * 20) + 80, // 80-100
            responsive: Math.random() > 0.1,
            touchTargets: Math.random() > 0.3,
            viewport: Math.random() > 0.2
        }
    };
}

function displayWebsiteAuditResults(results) {
    const resultsDiv = document.getElementById('audit-results');
    
    resultsDiv.innerHTML = `
        <h3>Audit Results for ${results.domain}</h3>
        
        <div class="audit-section">
            <h4>Performance Score: ${results.performance.score}/100</h4>
            <div class="audit-item">
                <span>Page Load Time</span>
                <span class="status ${results.performance.loadTime < 3 ? 'good' : 'warning'}">${results.performance.loadTime}s</span>
            </div>
            <div class="audit-item">
                <span>Page Size</span>
                <span class="status ${results.performance.pageSize < 2 ? 'good' : 'warning'}">${results.performance.pageSize} MB</span>
            </div>
            <div class="audit-item">
                <span>HTTP Requests</span>
                <span class="status ${results.performance.requests < 50 ? 'good' : 'warning'}">${results.performance.requests}</span>
            </div>
        </div>
        
        <div class="audit-section">
            <h4>SEO Score: ${results.seo.score}/100</h4>
            <div class="audit-item">
                <span>Title Tag</span>
                <span class="status ${results.seo.title ? 'good' : 'error'}">${results.seo.title ? 'Present' : 'Missing'}</span>
            </div>
            <div class="audit-item">
                <span>Meta Description</span>
                <span class="status ${results.seo.description ? 'good' : 'error'}">${results.seo.description ? 'Present' : 'Missing'}</span>
            </div>
            <div class="audit-item">
                <span>Heading Structure</span>
                <span class="status ${results.seo.headings ? 'good' : 'warning'}">${results.seo.headings ? 'Good' : 'Needs Work'}</span>
            </div>
            <div class="audit-item">
                <span>Image Alt Text</span>
                <span class="status ${results.seo.images ? 'good' : 'warning'}">${results.seo.images ? 'Good' : 'Some Missing'}</span>
            </div>
        </div>
        
        <div class="audit-section">
            <h4>Accessibility Score: ${results.accessibility.score}/100</h4>
            <div class="audit-item">
                <span>Alt Text Coverage</span>
                <span class="status ${results.accessibility.altText ? 'good' : 'warning'}">${results.accessibility.altText ? 'Good' : 'Needs Work'}</span>
            </div>
            <div class="audit-item">
                <span>Color Contrast</span>
                <span class="status ${results.accessibility.contrast ? 'good' : 'warning'}">${results.accessibility.contrast ? 'Sufficient' : 'Low'}</span>
            </div>
            <div class="audit-item">
                <span>Keyboard Navigation</span>
                <span class="status ${results.accessibility.navigation ? 'good' : 'warning'}">${results.accessibility.navigation ? 'Working' : 'Issues Found'}</span>
            </div>
        </div>
        
        <div class="audit-section">
            <h4>Mobile Score: ${results.mobile.score}/100</h4>
            <div class="audit-item">
                <span>Responsive Design</span>
                <span class="status ${results.mobile.responsive ? 'good' : 'error'}">${results.mobile.responsive ? 'Yes' : 'No'}</span>
            </div>
            <div class="audit-item">
                <span>Touch Targets</span>
                <span class="status ${results.mobile.touchTargets ? 'good' : 'warning'}">${results.mobile.touchTargets ? 'Adequate' : 'Too Small'}</span>
            </div>
            <div class="audit-item">
                <span>Viewport Configuration</span>
                <span class="status ${results.mobile.viewport ? 'good' : 'error'}">${results.mobile.viewport ? 'Configured' : 'Missing'}</span>
            </div>
        </div>
        
        <div class="text-center mt-2">
            <p><strong>Overall Recommendation:</strong> ${getOverallRecommendation(results)}</p>
            <button onclick="scheduleConsultation()" class="btn-primary">Get Professional Help</button>
        </div>
    `;
    
    resultsDiv.style.display = 'block';
}

function getOverallRecommendation(results) {
    const avgScore = (results.performance.score + results.seo.score + results.accessibility.score + results.mobile.score) / 4;
    
    if (avgScore >= 90) {
        return "Excellent! Your website is performing very well across all areas.";
    } else if (avgScore >= 80) {
        return "Good performance with room for improvement in some areas.";
    } else if (avgScore >= 70) {
        return "Moderate performance. Several areas need attention to improve user experience and search rankings.";
    } else {
        return "Significant improvements needed. Consider a professional website audit and optimization.";
    }
}

// SEO Audit Tool
function getSEOAuditHTML() {
    return `
        <div class="audit-container">
            <h2>SEO Audit Tool</h2>
            <p>Analyze your search engine optimization and get actionable recommendations.</p>
            
            <div class="audit-form">
                <input type="url" id="seo-audit-url" placeholder="Enter your website URL" required>
                <input type="text" id="target-keyword" placeholder="Target keyword (optional)">
                <button onclick="runSEOAudit()" class="btn-primary">Analyze SEO</button>
            </div>
            
            <div id="seo-audit-results" class="audit-results" style="display: none;">
                <!-- Results will be populated here -->
            </div>
        </div>
    `;
}

function runSEOAudit() {
    const url = document.getElementById('seo-audit-url').value;
    const keyword = document.getElementById('target-keyword').value;
    
    if (!url) {
        alert('Please enter a valid website URL');
        return;
    }
    
    const button = event.target;
    showLoading(button);
    
    setTimeout(() => {
        const results = generateSEOAuditResults(url, keyword);
        displaySEOAuditResults(results);
        hideLoading();
        button.textContent = 'Analyze SEO';
    }, 3000);
}

function generateSEOAuditResults(url, keyword) {
    const domain = new URL(url).hostname;
    
    return {
        url: url,
        domain: domain,
        keyword: keyword || 'Not specified',
        onPage: {
            score: Math.floor(Math.random() * 30) + 70,
            titleOptimization: Math.random() > 0.3,
            metaDescription: Math.random() > 0.4,
            headingStructure: Math.random() > 0.2,
            keywordDensity: Math.random() > 0.5,
            internalLinking: Math.random() > 0.4,
            imageOptimization: Math.random() > 0.6
        },
        technical: {
            score: Math.floor(Math.random() * 25) + 75,
            siteSpeed: Math.random() > 0.3,
            mobileOptimization: Math.random() > 0.2,
            sslCertificate: Math.random() > 0.1,
            xmlSitemap: Math.random() > 0.4,
            robotsTxt: Math.random() > 0.3,
            structuredData: Math.random() > 0.6
        },
        content: {
            score: Math.floor(Math.random() * 35) + 65,
            contentQuality: Math.random() > 0.4,
            contentLength: Math.random() > 0.5,
            readability: Math.random() > 0.3,
            duplicateContent: Math.random() > 0.7,
            freshness: Math.random() > 0.5
        },
        local: {
            score: Math.floor(Math.random() * 40) + 60,
            googleMyBusiness: Math.random() > 0.3,
            localCitations: Math.random() > 0.5,
            reviewsRating: Math.random() > 0.4,
            localKeywords: Math.random() > 0.6
        }
    };
}

function displaySEOAuditResults(results) {
    const resultsDiv = document.getElementById('seo-audit-results');
    
    resultsDiv.innerHTML = `
        <h3>SEO Audit Results for ${results.domain}</h3>
        ${results.keyword !== 'Not specified' ? `<p><strong>Target Keyword:</strong> ${results.keyword}</p>` : ''}
        
        <div class="audit-section">
            <h4>On-Page SEO Score: ${results.onPage.score}/100</h4>
            <div class="audit-item">
                <span>Title Tag Optimization</span>
                <span class="status ${results.onPage.titleOptimization ? 'good' : 'warning'}">${results.onPage.titleOptimization ? 'Optimized' : 'Needs Work'}</span>
            </div>
            <div class="audit-item">
                <span>Meta Description</span>
                <span class="status ${results.onPage.metaDescription ? 'good' : 'warning'}">${results.onPage.metaDescription ? 'Good' : 'Missing/Poor'}</span>
            </div>
            <div class="audit-item">
                <span>Heading Structure (H1-H6)</span>
                <span class="status ${results.onPage.headingStructure ? 'good' : 'warning'}">${results.onPage.headingStructure ? 'Well Structured' : 'Needs Improvement'}</span>
            </div>
            <div class="audit-item">
                <span>Keyword Density</span>
                <span class="status ${results.onPage.keywordDensity ? 'good' : 'warning'}">${results.onPage.keywordDensity ? 'Optimal' : 'Too High/Low'}</span>
            </div>
            <div class="audit-item">
                <span>Internal Linking</span>
                <span class="status ${results.onPage.internalLinking ? 'good' : 'warning'}">${results.onPage.internalLinking ? 'Good' : 'Insufficient'}</span>
            </div>
            <div class="audit-item">
                <span>Image Optimization</span>
                <span class="status ${results.onPage.imageOptimization ? 'good' : 'warning'}">${results.onPage.imageOptimization ? 'Optimized' : 'Needs Work'}</span>
            </div>
        </div>
        
        <div class="audit-section">
            <h4>Technical SEO Score: ${results.technical.score}/100</h4>
            <div class="audit-item">
                <span>Site Speed</span>
                <span class="status ${results.technical.siteSpeed ? 'good' : 'warning'}">${results.technical.siteSpeed ? 'Fast' : 'Slow'}</span>
            </div>
            <div class="audit-item">
                <span>Mobile Optimization</span>
                <span class="status ${results.technical.mobileOptimization ? 'good' : 'error'}">${results.technical.mobileOptimization ? 'Mobile-Friendly' : 'Not Optimized'}</span>
            </div>
            <div class="audit-item">
                <span>SSL Certificate</span>
                <span class="status ${results.technical.sslCertificate ? 'good' : 'error'}">${results.technical.sslCertificate ? 'Secure (HTTPS)' : 'Not Secure'}</span>
            </div>
            <div class="audit-item">
                <span>XML Sitemap</span>
                <span class="status ${results.technical.xmlSitemap ? 'good' : 'warning'}">${results.technical.xmlSitemap ? 'Present' : 'Missing'}</span>
            </div>
            <div class="audit-item">
                <span>Robots.txt</span>
                <span class="status ${results.technical.robotsTxt ? 'good' : 'warning'}">${results.technical.robotsTxt ? 'Configured' : 'Missing/Issues'}</span>
            </div>
            <div class="audit-item">
                <span>Structured Data</span>
                <span class="status ${results.technical.structuredData ? 'good' : 'warning'}">${results.technical.structuredData ? 'Implemented' : 'Missing'}</span>
            </div>
        </div>
        
        <div class="audit-section">
            <h4>Content Quality Score: ${results.content.score}/100</h4>
            <div class="audit-item">
                <span>Content Quality</span>
                <span class="status ${results.content.contentQuality ? 'good' : 'warning'}">${results.content.contentQuality ? 'High Quality' : 'Needs Improvement'}</span>
            </div>
            <div class="audit-item">
                <span>Content Length</span>
                <span class="status ${results.content.contentLength ? 'good' : 'warning'}">${results.content.contentLength ? 'Adequate' : 'Too Short'}</span>
            </div>
            <div class="audit-item">
                <span>Readability</span>
                <span class="status ${results.content.readability ? 'good' : 'warning'}">${results.content.readability ? 'Easy to Read' : 'Difficult'}</span>
            </div>
            <div class="audit-item">
                <span>Duplicate Content</span>
                <span class="status ${results.content.duplicateContent ? 'good' : 'error'}">${results.content.duplicateContent ? 'No Issues' : 'Found'}</span>
            </div>
            <div class="audit-item">
                <span>Content Freshness</span>
                <span class="status ${results.content.freshness ? 'good' : 'warning'}">${results.content.freshness ? 'Recently Updated' : 'Outdated'}</span>
            </div>
        </div>
        
        <div class="audit-section">
            <h4>Local SEO Score: ${results.local.score}/100</h4>
            <div class="audit-item">
                <span>Google My Business</span>
                <span class="status ${results.local.googleMyBusiness ? 'good' : 'error'}">${results.local.googleMyBusiness ? 'Optimized' : 'Not Claimed/Poor'}</span>
            </div>
            <div class="audit-item">
                <span>Local Citations</span>
                <span class="status ${results.local.localCitations ? 'good' : 'warning'}">${results.local.localCitations ? 'Good Coverage' : 'Insufficient'}</span>
            </div>
            <div class="audit-item">
                <span>Reviews & Rating</span>
                <span class="status ${results.local.reviewsRating ? 'good' : 'warning'}">${results.local.reviewsRating ? 'Good Rating' : 'Needs More Reviews'}</span>
            </div>
            <div class="audit-item">
                <span>Local Keywords</span>
                <span class="status ${results.local.localKeywords ? 'good' : 'warning'}">${results.local.localKeywords ? 'Well Targeted' : 'Needs Work'}</span>
            </div>
        </div>
        
        <div class="text-center mt-2">
            <button onclick="exportSEOAudit()" class="export-btn">Export as PDF</button>
            <button onclick="scheduleConsultation()" class="btn-primary">Get Professional SEO Help</button>
        </div>
    `;
    
    resultsDiv.style.display = 'block';
    auditResults.seo = results;
}

// Analytics Audit Tool
function getAnalyticsAuditHTML() {
    return `
        <div class="audit-container">
            <h2>Analytics Audit Tool</h2>
            <p>Review your website analytics setup and discover optimization opportunities.</p>
            
            <div class="audit-form">
                <input type="url" id="analytics-audit-url" placeholder="Enter your website URL" required>
                <button onclick="runAnalyticsAudit()" class="btn-primary">Check Analytics</button>
            </div>
            
            <div id="analytics-audit-results" class="audit-results" style="display: none;">
                <!-- Results will be populated here -->
            </div>
        </div>
    `;
}

function runAnalyticsAudit() {
    const url = document.getElementById('analytics-audit-url').value;
    
    if (!url) {
        alert('Please enter a valid website URL');
        return;
    }
    
    const button = event.target;
    showLoading(button);
    
    setTimeout(() => {
        const results = generateAnalyticsAuditResults(url);
        displayAnalyticsAuditResults(results);
        hideLoading();
        button.textContent = 'Check Analytics';
    }, 3000);
}

function generateAnalyticsAuditResults(url) {
    const domain = new URL(url).hostname;
    
    return {
        url: url,
        domain: domain,
        tracking: {
            score: Math.floor(Math.random() * 30) + 70,
            googleAnalytics: Math.random() > 0.2,
            googleTagManager: Math.random() > 0.5,
            facebookPixel: Math.random() > 0.6,
            linkedInInsight: Math.random() > 0.7,
            heatmapTools: Math.random() > 0.8
        },
        goals: {
            score: Math.floor(Math.random() * 40) + 60,
            conversionTracking: Math.random() > 0.4,
            ecommerceTracking: Math.random() > 0.6,
            eventTracking: Math.random() > 0.3,
            goalFunnels: Math.random() > 0.7
        },
        dataQuality: {
            score: Math.floor(Math.random() * 25) + 75,
            bounceRate: (Math.random() * 40 + 30).toFixed(1), // 30-70%
            sessionDuration: (Math.random() * 3 + 1).toFixed(1), // 1-4 minutes
            pageViews: Math.floor(Math.random() * 5000) + 1000, // 1000-6000
            organicTraffic: (Math.random() * 60 + 20).toFixed(1) // 20-80%
        },
        insights: {
            score: Math.floor(Math.random() * 35) + 65,
            audienceSegments: Math.random() > 0.5,
            behaviorFlow: Math.random() > 0.6,
            acquisitionChannels: Math.random() > 0.3,
            deviceAnalysis: Math.random() > 0.4
        }
    };
}

function displayAnalyticsAuditResults(results) {
    const resultsDiv = document.getElementById('analytics-audit-results');
    
    resultsDiv.innerHTML = `
        <h3>Analytics Audit Results for ${results.domain}</h3>
        
        <div class="audit-section">
            <h4>Tracking Setup Score: ${results.tracking.score}/100</h4>
            <div class="audit-item">
                <span>Google Analytics</span>
                <span class="status ${results.tracking.googleAnalytics ? 'good' : 'error'}">${results.tracking.googleAnalytics ? 'Installed' : 'Missing'}</span>
            </div>
            <div class="audit-item">
                <span>Google Tag Manager</span>
                <span class="status ${results.tracking.googleTagManager ? 'good' : 'warning'}">${results.tracking.googleTagManager ? 'Configured' : 'Not Found'}</span>
            </div>
            <div class="audit-item">
                <span>Facebook Pixel</span>
                <span class="status ${results.tracking.facebookPixel ? 'good' : 'warning'}">${results.tracking.facebookPixel ? 'Active' : 'Not Found'}</span>
            </div>
            <div class="audit-item">
                <span>LinkedIn Insight Tag</span>
                <span class="status ${results.tracking.linkedInInsight ? 'good' : 'warning'}">${results.tracking.linkedInInsight ? 'Active' : 'Not Found'}</span>
            </div>
            <div class="audit-item">
                <span>Heatmap Tools</span>
                <span class="status ${results.tracking.heatmapTools ? 'good' : 'warning'}">${results.tracking.heatmapTools ? 'Detected' : 'Not Found'}</span>
            </div>
        </div>
        
        <div class="audit-section">
            <h4>Goals & Conversions Score: ${results.goals.score}/100</h4>
            <div class="audit-item">
                <span>Conversion Tracking</span>
                <span class="status ${results.goals.conversionTracking ? 'good' : 'error'}">${results.goals.conversionTracking ? 'Configured' : 'Missing'}</span>
            </div>
            <div class="audit-item">
                <span>E-commerce Tracking</span>
                <span class="status ${results.goals.ecommerceTracking ? 'good' : 'warning'}">${results.goals.ecommerceTracking ? 'Active' : 'Not Applicable/Missing'}</span>
            </div>
            <div class="audit-item">
                <span>Event Tracking</span>
                <span class="status ${results.goals.eventTracking ? 'good' : 'warning'}">${results.goals.eventTracking ? 'Comprehensive' : 'Limited'}</span>
            </div>
            <div class="audit-item">
                <span>Goal Funnels</span>
                <span class="status ${results.goals.goalFunnels ? 'good' : 'warning'}">${results.goals.goalFunnels ? 'Set Up' : 'Missing'}</span>
            </div>
        </div>
        
        <div class="audit-section">
            <h4>Data Quality Score: ${results.dataQuality.score}/100</h4>
            <div class="audit-item">
                <span>Bounce Rate</span>
                <span class="status ${results.dataQuality.bounceRate < 50 ? 'good' : results.dataQuality.bounceRate < 70 ? 'warning' : 'error'}">${results.dataQuality.bounceRate}%</span>
            </div>
            <div class="audit-item">
                <span>Avg. Session Duration</span>
                <span class="status ${results.dataQuality.sessionDuration > 2 ? 'good' : 'warning'}">${results.dataQuality.sessionDuration} minutes</span>
            </div>
            <div class="audit-item">
                <span>Monthly Page Views</span>
                <span class="status ${results.dataQuality.pageViews > 3000 ? 'good' : 'warning'}">${results.dataQuality.pageViews.toLocaleString()}</span>
            </div>
            <div class="audit-item">
                <span>Organic Traffic %</span>
                <span class="status ${results.dataQuality.organicTraffic > 50 ? 'good' : 'warning'}">${results.dataQuality.organicTraffic}%</span>
            </div>
        </div>
        
        <div class="audit-section">
            <h4>Insights & Reporting Score: ${results.insights.score}/100</h4>
            <div class="audit-item">
                <span>Audience Segments</span>
                <span class="status ${results.insights.audienceSegments ? 'good' : 'warning'}">${results.insights.audienceSegments ? 'Configured' : 'Basic Only'}</span>
            </div>
            <div class="audit-item">
                <span>Behavior Flow Analysis</span>
                <span class="status ${results.insights.behaviorFlow ? 'good' : 'warning'}">${results.insights.behaviorFlow ? 'Available' : 'Limited Data'}</span>
            </div>
            <div class="audit-item">
                <span>Acquisition Channels</span>
                <span class="status ${results.insights.acquisitionChannels ? 'good' : 'warning'}">${results.insights.acquisitionChannels ? 'Well Tracked' : 'Needs Setup'}</span>
            </div>
            <div class="audit-item">
                <span>Device Analysis</span>
                <span class="status ${results.insights.deviceAnalysis ? 'good' : 'warning'}">${results.insights.deviceAnalysis ? 'Comprehensive' : 'Basic'}</span>
            </div>
        </div>
        
        <div class="text-center mt-2">
            <button onclick="exportAnalyticsAudit()" class="export-btn">Export as PDF</button>
            <button onclick="scheduleConsultation()" class="btn-primary">Get Analytics Consultation</button>
        </div>
    `;
    
    resultsDiv.style.display = 'block';
    auditResults.analytics = results;
}

// Quiz Data
const gdprQuizData = [
    {
        question: "Under GDPR, what is the maximum time limit for responding to a data subject access request?",
        options: [
            "7 days",
            "1 month",
            "2 months", 
            "3 months"
        ],
        correct: 1,
        explanation: "Under GDPR Article 12, organizations must respond to data subject access requests within one month, extendable by two months in complex cases."
    },
    {
        question: "Which of the following is NOT considered a lawful basis for processing personal data under GDPR?",
        options: [
            "Consent",
            "Legitimate interests",
            "Business necessity",
            "Legal obligation"
        ],
        correct: 2,
        explanation: "'Business necessity' is not one of the six lawful bases under GDPR Article 6. The correct bases include consent, contract, legal obligation, vital interests, public task, and legitimate interests."
    },
    {
        question: "What is the minimum age for valid consent under GDPR for information society services?",
        options: [
            "13 years",
            "14 years",
            "16 years",
            "18 years"
        ],
        correct: 2,
        explanation: "GDPR Article 8 sets the minimum age at 16 years for valid consent for information society services, though member states can lower this to 13."
    },
    {
        question: "Under GDPR, when must a Data Protection Impact Assessment (DPIA) be conducted?",
        options: [
            "For all data processing activities",
            "Only when processing special category data",
            "When processing is likely to result in high risk to individuals",
            "Only for international data transfers"
        ],
        correct: 2,
        explanation: "Article 35 requires a DPIA when processing is likely to result in high risk to the rights and freedoms of individuals, particularly for systematic monitoring or special category data."
    },
    {
        question: "What is the maximum administrative fine that can be imposed under GDPR for the most serious infringements?",
        options: [
            "€10 million or 2% of annual turnover",
            "€20 million or 4% of annual turnover",
            "€50 million or 5% of annual turnover",
            "€100 million or 10% of annual turnover"
        ],
        correct: 1,
        explanation: "Article 83 sets the maximum fine at €20 million or 4% of the total worldwide annual turnover of the preceding financial year, whichever is higher."
    },
    {
        question: "Which principle requires that personal data should be adequate, relevant and limited to what is necessary?",
        options: [
            "Lawfulness, fairness and transparency",
            "Data minimisation",
            "Purpose limitation",
            "Storage limitation"
        ],
        correct: 1,
        explanation: "The data minimisation principle (Article 5(1)(c)) requires that personal data shall be adequate, relevant and limited to what is necessary in relation to the purposes for which they are processed."
    },
    {
        question: "Under GDPR, what constitutes 'special category' personal data?",
        options: [
            "Financial information and credit scores",
            "Racial origin, health data, and political opinions",
            "Email addresses and phone numbers",
            "Employment history and salary information"
        ],
        correct: 1,
        explanation: "Article 9 defines special category data as data revealing racial/ethnic origin, political opinions, religious beliefs, trade union membership, genetic data, biometric data, health data, or data concerning sex life/sexual orientation."
    },
    {
        question: "When is explicit consent required under GDPR?",
        options: [
            "For all marketing communications",
            "For processing special category personal data",
            "For international data transfers",
            "For automated decision-making"
        ],
        correct: 1,
        explanation: "Article 9 requires explicit consent for processing special category personal data, which is a higher standard than the regular consent required for other processing."
    },
    {
        question: "What is the 'right to be forgotten' officially called in GDPR?",
        options: [
            "Right of access",
            "Right to rectification",
            "Right to erasure",
            "Right to data portability"
        ],
        correct: 2,
        explanation: "Article 17 establishes the 'right to erasure' (commonly known as the right to be forgotten), allowing individuals to request deletion of their personal data under certain circumstances."
    },
    {
        question: "Under GDPR, when must a personal data breach be reported to the supervisory authority?",
        options: [
            "Immediately upon discovery",
            "Within 24 hours",
            "Within 72 hours",
            "Within 1 week"
        ],
        correct: 2,
        explanation: "Article 33 requires that personal data breaches be reported to the supervisory authority within 72 hours of becoming aware of the breach, unless it's unlikely to result in risk to individuals."
    }
];

const digitalSkillsQuizData = [
    {
        question: "What does CTR stand for in digital marketing?",
        options: [
            "Cost To Revenue",
            "Click Through Rate",
            "Customer Tracking Report",
            "Conversion Time Ratio"
        ],
        correct: 1,
        explanation: "CTR (Click Through Rate) measures the percentage of people who click on a specific link out of the total number of people who view a page, email, or advertisement."
    },
    {
        question: "Which Google Analytics metric measures the percentage of single-page sessions?",
        options: [
            "Exit Rate",
            "Conversion Rate",
            "Bounce Rate",
            "Session Duration"
        ],
        correct: 2,
        explanation: "Bounce Rate measures the percentage of sessions where users viewed only one page and left without interacting further with the website."
    },
    {
        question: "What is the primary purpose of A/B testing in digital marketing?",
        options: [
            "To increase website traffic",
            "To compare two versions to determine which performs better",
            "To reduce advertising costs",
            "To improve search engine rankings"
        ],
        correct: 1,
        explanation: "A/B testing involves comparing two versions of a webpage, email, or ad to determine which one performs better based on specific metrics."
    },
    {
        question: "In SEO, what does the term 'long-tail keywords' refer to?",
        options: [
            "Keywords with high search volume",
            "Keywords that are 3+ words long and more specific",
            "Keywords used by competitors",
            "Keywords with low competition"
        ],
        correct: 1,
        explanation: "Long-tail keywords are longer, more specific keyword phrases that typically have lower search volume but higher conversion rates due to their specificity."
    },
    {
        question: "What is the recommended image file format for web use that provides the best compression?",
        options: [
            "PNG",
            "JPEG",
            "WebP",
            "GIF"
        ],
        correct: 2,
        explanation: "WebP provides superior compression compared to JPEG and PNG, resulting in smaller file sizes and faster loading times while maintaining quality."
    },
    {
        question: "Which social media platform algorithm prioritizes content based on 'meaningful social interactions'?",
        options: [
            "Twitter",
            "LinkedIn",
            "Facebook",
            "Instagram"
        ],
        correct: 2,
        explanation: "Facebook's algorithm prioritizes content that generates meaningful social interactions, such as comments and shares, over passive consumption like likes."
    },
    {
        question: "What is the ideal length for a meta description in SEO?",
        options: [
            "50-60 characters",
            "120-130 characters",
            "150-160 characters",
            "200-250 characters"
        ],
        correct: 2,
        explanation: "Meta descriptions should be 150-160 characters to ensure they display fully in search results without being truncated."
    },
    {
        question: "In email marketing, what does the term 'deliverability' refer to?",
        options: [
            "The speed at which emails are sent",
            "The ability of emails to reach the recipient's inbox",
            "The number of emails opened",
            "The cost per email sent"
        ],
        correct: 1,
        explanation: "Email deliverability refers to the ability of emails to successfully reach the recipient's inbox rather than being blocked or sent to spam folders."
    },
    {
        question: "What is the primary benefit of using Google Tag Manager?",
        options: [
            "Improving website speed",
            "Managing tracking codes without editing website code",
            "Increasing search rankings",
            "Reducing server costs"
        ],
        correct: 1,
        explanation: "Google Tag Manager allows marketers to manage and deploy tracking codes and marketing tags without needing to modify website code directly."
    },
    {
        question: "In conversion rate optimization, what is a 'conversion funnel'?",
        options: [
            "A tool for email marketing",
            "The path users take from awareness to conversion",
            "A type of advertising campaign",
            "A social media strategy"
        ],
        correct: 1,
        explanation: "A conversion funnel represents the journey users take from initial awareness through various stages until they complete a desired action (conversion)."
    }
];

// Quiz Functions
function getGDPRQuizHTML() {
    return `
        <div class="quiz-container">
            <div class="quiz-header">
                <h2>GDPR Compliance Quiz</h2>
                <p>Test your knowledge of GDPR requirements. This challenging quiz will help ensure you're truly compliant.</p>
                <div class="quiz-progress">
                    <span id="question-counter">Question 1 of ${gdprQuizData.length}</span>
                    <div class="progress-bar">
                        <div id="progress-fill" style="width: 0%"></div>
                    </div>
                </div>
            </div>
            <div id="quiz-content">
                <!-- Quiz questions will be populated here -->
            </div>
        </div>
    `;
}

function getDigitalSkillsQuizHTML() {
    return `
        <div class="quiz-container">
            <div class="quiz-header">
                <h2>Digital Skills Quiz</h2>
                <p>Assess your digital marketing and technology skills. Identify areas for improvement.</p>
                <div class="quiz-progress">
                    <span id="question-counter">Question 1 of ${digitalSkillsQuizData.length}</span>
                    <div class="progress-bar">
                        <div id="progress-fill" style="width: 0%"></div>
                    </div>
                </div>
            </div>
            <div id="quiz-content">
                <!-- Quiz questions will be populated here -->
            </div>
        </div>
    `;
}

function initializeQuiz(quizType) {
    currentQuiz = quizType === 'gdpr' ? gdprQuizData : digitalSkillsQuizData;
    currentQuestion = 0;
    quizAnswers = [];
    
    displayQuestion();
}

function displayQuestion() {
    const quizContent = document.getElementById('quiz-content');
    const question = currentQuiz[currentQuestion];
    
    quizContent.innerHTML = `
        <div class="question">
            <h3>Question ${currentQuestion + 1}</h3>
            <p>${question.question}</p>
            <div class="options">
                ${question.options.map((option, index) => `
                    <div class="option" onclick="selectOption(${index})" data-index="${index}">
                        ${option}
                    </div>
                `).join('')}
            </div>
        </div>
        <div class="quiz-controls">
            <button id="next-btn" onclick="nextQuestion()" disabled class="btn-primary">Next Question</button>
        </div>
    `;
    
    updateProgress();
}

function selectOption(selectedIndex) {
    // Remove previous selections
    document.querySelectorAll('.option').forEach(option => {
        option.classList.remove('selected');
    });
    
    // Mark selected option
    document.querySelector(`[data-index="${selectedIndex}"]`).classList.add('selected');
    
    // Store answer
    quizAnswers[currentQuestion] = selectedIndex;
    
    // Enable next button
    document.getElementById('next-btn').disabled = false;
}

function nextQuestion() {
    if (currentQuestion < currentQuiz.length - 1) {
        currentQuestion++;
        displayQuestion();
    } else {
        showQuizResults();
    }
}

function updateProgress() {
    const progress = ((currentQuestion + 1) / currentQuiz.length) * 100;
    document.getElementById('progress-fill').style.width = progress + '%';
    document.getElementById('question-counter').textContent = `Question ${currentQuestion + 1} of ${currentQuiz.length}`;
}

function showQuizResults() {
    let correctAnswers = 0;
    
    for (let i = 0; i < quizAnswers.length; i++) {
        if (quizAnswers[i] === currentQuiz[i].correct) {
            correctAnswers++;
        }
    }
    
    const percentage = Math.round((correctAnswers / currentQuiz.length) * 100);
    const quizContent = document.getElementById('quiz-content');
    
    let resultMessage = '';
    let resultClass = '';
    
    if (percentage >= 90) {
        resultMessage = 'Excellent! You have a strong understanding of the subject.';
        resultClass = 'good';
    } else if (percentage >= 70) {
        resultMessage = 'Good job! You have a solid foundation with room for improvement.';
        resultClass = 'warning';
    } else {
        resultMessage = 'You may benefit from additional training in this area.';
        resultClass = 'error';
    }
    
    quizContent.innerHTML = `
        <div class="quiz-results">
            <h3>Quiz Complete!</h3>
            <div class="score ${resultClass}">
                <span class="score-number">${correctAnswers}/${currentQuiz.length}</span>
                <span class="score-percentage">${percentage}%</span>
            </div>
            <p>${resultMessage}</p>
            
            <div class="detailed-results">
                <h4>Detailed Results:</h4>
                ${currentQuiz.map((question, index) => {
                    const userAnswer = quizAnswers[index];
                    const isCorrect = userAnswer === question.correct;
                    return `
                        <div class="result-item ${isCorrect ? 'correct' : 'incorrect'}">
                            <p><strong>Q${index + 1}:</strong> ${question.question}</p>
                            <p><strong>Your answer:</strong> ${question.options[userAnswer]}</p>
                            ${!isCorrect ? `<p><strong>Correct answer:</strong> ${question.options[question.correct]}</p>` : ''}
                            <p><em>${question.explanation}</em></p>
                        </div>
                    `;
                }).join('')}
            </div>
            
            <div class="quiz-controls">
                <button onclick="retakeQuiz()" class="btn-secondary">Retake Quiz</button>
                <button onclick="scheduleConsultation()" class="btn-primary">Get Professional Help</button>
            </div>
        </div>
    `;
}

function retakeQuiz() {
    currentQuestion = 0;
    quizAnswers = [];
    displayQuestion();
}

// PDF Export Functions
function exportSEOAudit() {
    if (!auditResults.seo) {
        alert('No SEO audit results to export');
        return;
    }
    
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const results = auditResults.seo;
    
    // Title
    doc.setFontSize(20);
    doc.text('SEO Audit Report', 20, 20);
    
    // Website info
    doc.setFontSize(12);
    doc.text(`Website: ${results.domain}`, 20, 35);
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 20, 45);
    doc.text(`Generated by: 11th Temple Solutions`, 20, 55);
    
    let yPos = 70;
    
    // On-Page SEO
    doc.setFontSize(16);
    doc.text('On-Page SEO', 20, yPos);
    yPos += 10;
    doc.setFontSize(12);
    doc.text(`Score: ${results.onPage.score}/100`, 20, yPos);
    yPos += 10;
    
    const onPageItems = [
        ['Title Optimization', results.onPage.titleOptimization ? 'Good' : 'Needs Work'],
        ['Meta Description', results.onPage.metaDescription ? 'Good' : 'Missing/Poor'],
        ['Heading Structure', results.onPage.headingStructure ? 'Well Structured' : 'Needs Improvement'],
        ['Keyword Density', results.onPage.keywordDensity ? 'Optimal' : 'Too High/Low'],
        ['Internal Linking', results.onPage.internalLinking ? 'Good' : 'Insufficient'],
        ['Image Optimization', results.onPage.imageOptimization ? 'Optimized' : 'Needs Work']
    ];
    
    onPageItems.forEach(item => {
        doc.text(`• ${item[0]}: ${item[1]}`, 25, yPos);
        yPos += 8;
    });
    
    yPos += 10;
    
    // Technical SEO
    doc.setFontSize(16);
    doc.text('Technical SEO', 20, yPos);
    yPos += 10;
    doc.setFontSize(12);
    doc.text(`Score: ${results.technical.score}/100`, 20, yPos);
    yPos += 10;
    
    const technicalItems = [
        ['Site Speed', results.technical.siteSpeed ? 'Fast' : 'Slow'],
        ['Mobile Optimization', results.technical.mobileOptimization ? 'Mobile-Friendly' : 'Not Optimized'],
        ['SSL Certificate', results.technical.sslCertificate ? 'Secure (HTTPS)' : 'Not Secure'],
        ['XML Sitemap', results.technical.xmlSitemap ? 'Present' : 'Missing'],
        ['Robots.txt', results.technical.robotsTxt ? 'Configured' : 'Missing/Issues'],
        ['Structured Data', results.technical.structuredData ? 'Implemented' : 'Missing']
    ];
    
    technicalItems.forEach(item => {
        doc.text(`• ${item[0]}: ${item[1]}`, 25, yPos);
        yPos += 8;
    });
    
    // Add new page if needed
    if (yPos > 250) {
        doc.addPage();
        yPos = 20;
    }
    
    yPos += 10;
    
    // Content Quality
    doc.setFontSize(16);
    doc.text('Content Quality', 20, yPos);
    yPos += 10;
    doc.setFontSize(12);
    doc.text(`Score: ${results.content.score}/100`, 20, yPos);
    yPos += 10;
    
    const contentItems = [
        ['Content Quality', results.content.contentQuality ? 'High Quality' : 'Needs Improvement'],
        ['Content Length', results.content.contentLength ? 'Adequate' : 'Too Short'],
        ['Readability', results.content.readability ? 'Easy to Read' : 'Difficult'],
        ['Duplicate Content', results.content.duplicateContent ? 'No Issues' : 'Found'],
        ['Content Freshness', results.content.freshness ? 'Recently Updated' : 'Outdated']
    ];
    
    contentItems.forEach(item => {
        doc.text(`• ${item[0]}: ${item[1]}`, 25, yPos);
        yPos += 8;
    });
    
    yPos += 10;
    
    // Local SEO
    doc.setFontSize(16);
    doc.text('Local SEO', 20, yPos);
    yPos += 10;
    doc.setFontSize(12);
    doc.text(`Score: ${results.local.score}/100`, 20, yPos);
    yPos += 10;
    
    const localItems = [
        ['Google My Business', results.local.googleMyBusiness ? 'Optimized' : 'Not Claimed/Poor'],
        ['Local Citations', results.local.localCitations ? 'Good Coverage' : 'Insufficient'],
        ['Reviews & Rating', results.local.reviewsRating ? 'Good Rating' : 'Needs More Reviews'],
        ['Local Keywords', results.local.localKeywords ? 'Well Targeted' : 'Needs Work']
    ];
    
    localItems.forEach(item => {
        doc.text(`• ${item[0]}: ${item[1]}`, 25, yPos);
        yPos += 8;
    });
    
    // Footer
    yPos += 20;
    doc.setFontSize(10);
    doc.text('This report was generated by 11th Temple Solutions', 20, yPos);
    doc.text('For professional SEO services, contact: hello@11thtemple.solutions', 20, yPos + 10);
    
    doc.save(`SEO-Audit-${results.domain}-${new Date().toISOString().split('T')[0]}.pdf`);
}

function exportAnalyticsAudit() {
    if (!auditResults.analytics) {
        alert('No analytics audit results to export');
        return;
    }
    
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const results = auditResults.analytics;
    
    // Title
    doc.setFontSize(20);
    doc.text('Analytics Audit Report', 20, 20);
    
    // Website info
    doc.setFontSize(12);
    doc.text(`Website: ${results.domain}`, 20, 35);
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 20, 45);
    doc.text(`Generated by: 11th Temple Solutions`, 20, 55);
    
    let yPos = 70;
    
    // Tracking Setup
    doc.setFontSize(16);
    doc.text('Tracking Setup', 20, yPos);
    yPos += 10;
    doc.setFontSize(12);
    doc.text(`Score: ${results.tracking.score}/100`, 20, yPos);
    yPos += 10;
    
    const trackingItems = [
        ['Google Analytics', results.tracking.googleAnalytics ? 'Installed' : 'Missing'],
        ['Google Tag Manager', results.tracking.googleTagManager ? 'Configured' : 'Not Found'],
        ['Facebook Pixel', results.tracking.facebookPixel ? 'Active' : 'Not Found'],
        ['LinkedIn Insight Tag', results.tracking.linkedInInsight ? 'Active' : 'Not Found'],
        ['Heatmap Tools', results.tracking.heatmapTools ? 'Detected' : 'Not Found']
    ];
    
    trackingItems.forEach(item => {
        doc.text(`• ${item[0]}: ${item[1]}`, 25, yPos);
        yPos += 8;
    });
    
    yPos += 10;
    
    // Goals & Conversions
    doc.setFontSize(16);
    doc.text('Goals & Conversions', 20, yPos);
    yPos += 10;
    doc.setFontSize(12);
    doc.text(`Score: ${results.goals.score}/100`, 20, yPos);
    yPos += 10;
    
    const goalsItems = [
        ['Conversion Tracking', results.goals.conversionTracking ? 'Configured' : 'Missing'],
        ['E-commerce Tracking', results.goals.ecommerceTracking ? 'Active' : 'Not Applicable/Missing'],
        ['Event Tracking', results.goals.eventTracking ? 'Comprehensive' : 'Limited'],
        ['Goal Funnels', results.goals.goalFunnels ? 'Set Up' : 'Missing']
    ];
    
    goalsItems.forEach(item => {
        doc.text(`• ${item[0]}: ${item[1]}`, 25, yPos);
        yPos += 8;
    });
    
    yPos += 10;
    
    // Data Quality
    doc.setFontSize(16);
    doc.text('Data Quality', 20, yPos);
    yPos += 10;
    doc.setFontSize(12);
    doc.text(`Score: ${results.dataQuality.score}/100`, 20, yPos);
    yPos += 10;
    
    const dataQualityItems = [
        ['Bounce Rate', `${results.dataQuality.bounceRate}%`],
        ['Avg. Session Duration', `${results.dataQuality.sessionDuration} minutes`],
        ['Monthly Page Views', results.dataQuality.pageViews.toLocaleString()],
        ['Organic Traffic %', `${results.dataQuality.organicTraffic}%`]
    ];
    
    dataQualityItems.forEach(item => {
        doc.text(`• ${item[0]}: ${item[1]}`, 25, yPos);
        yPos += 8;
    });
    
    // Add new page if needed
    if (yPos > 250) {
        doc.addPage();
        yPos = 20;
    }
    
    yPos += 10;
    
    // Insights & Reporting
    doc.setFontSize(16);
    doc.text('Insights & Reporting', 20, yPos);
    yPos += 10;
    doc.setFontSize(12);
    doc.text(`Score: ${results.insights.score}/100`, 20, yPos);
    yPos += 10;
    
    const insightsItems = [
        ['Audience Segments', results.insights.audienceSegments ? 'Configured' : 'Basic Only'],
        ['Behavior Flow Analysis', results.insights.behaviorFlow ? 'Available' : 'Limited Data'],
        ['Acquisition Channels', results.insights.acquisitionChannels ? 'Well Tracked' : 'Needs Setup'],
        ['Device Analysis', results.insights.deviceAnalysis ? 'Comprehensive' : 'Basic']
    ];
    
    insightsItems.forEach(item => {
        doc.text(`• ${item[0]}: ${item[1]}`, 25, yPos);
        yPos += 8;
    });
    
    // Footer
    yPos += 20;
    doc.setFontSize(10);
    doc.text('This report was generated by 11th Temple Solutions', 20, yPos);
    doc.text('For professional analytics services, contact: hello@11thtemple.solutions', 20, yPos + 10);
    
    doc.save(`Analytics-Audit-${results.domain}-${new Date().toISOString().split('T')[0]}.pdf`);
}

// Contact Form Handler
function handleContactForm(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    // Simulate form submission
    const submitButton = e.target.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    showLoading(submitButton);
    
    setTimeout(() => {
        hideLoading();
        submitButton.textContent = originalText;
        
        // Show success message
        alert('Thank you for your inquiry! We\'ll get back to you within 24 hours.');
        
        // Reset form
        e.target.reset();
        
        // Open chatbot for immediate assistance
        setTimeout(() => {
            openChatbot();
            addMessage("Thanks for your inquiry! While you wait for our response, I'm here to answer any immediate questions you might have.", 'bot');
        }, 1000);
    }, 2000);
}

// Utility function for scheduling consultation
function scheduleConsultation() {
    scrollToSection('contact');
    closeModal();
    
    // Highlight contact form
    setTimeout(() => {
        const contactForm = document.querySelector('.contact-form');
        contactForm.style.border = '3px solid #ffd700';
        contactForm.style.borderRadius = '12px';
        
        setTimeout(() => {
            contactForm.style.border = 'none';
        }, 3000);
    }, 500);
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('tool-modal');
    if (event.target === modal) {
        closeModal();
    }
}

// Calendar Functions
function initializeCalendar() {
    if (!document.getElementById('currentMonth')) return;
    
    updateCalendarDisplay();
    
    document.getElementById('prevMonth').addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        updateCalendarDisplay();
    });
    
    document.getElementById('nextMonth').addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        updateCalendarDisplay();
    });
}

function updateCalendarDisplay() {
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    
    const currentMonthElement = document.getElementById('currentMonth');
    const calendarDatesElement = document.getElementById('calendarDates');
    
    if (!currentMonthElement || !calendarDatesElement) return;
    
    currentMonthElement.textContent = `${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`;
    
    const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());
    
    calendarDatesElement.innerHTML = '';
    
    for (let i = 0; i < 42; i++) {
        const date = new Date(startDate);
        date.setDate(startDate.getDate() + i);
        
        const dateElement = document.createElement('div');
        dateElement.className = 'calendar-date';
        dateElement.textContent = date.getDate();
        
        if (date.getMonth() !== currentDate.getMonth()) {
            dateElement.classList.add('other-month');
        } else if (date >= new Date().setHours(0,0,0,0) && isBusinessDay(date)) {
            dateElement.classList.add('available');
            dateElement.addEventListener('click', () => selectDate(date));
        }
        
        calendarDatesElement.appendChild(dateElement);
    }
}

function isBusinessDay(date) {
    const day = date.getDay();
    return day >= 1 && day <= 5; // Monday to Friday
}

function selectDate(date) {
    selectedDate = date;
    selectedTime = null;
    
    // Update selected date styling
    document.querySelectorAll('.calendar-date').forEach(el => {
        el.classList.remove('selected');
    });
    event.target.classList.add('selected');
    
    // Show available time slots
    showTimeSlots(date);
}

function showTimeSlots(date) {
    const timeSlotsElement = document.getElementById('timeSlots');
    const dateKey = date.toDateString();
    
    timeSlotsElement.innerHTML = '';
    
    availableTimes.forEach(time => {
        const slotKey = `${dateKey}-${time}`;
        if (!bookedSlots[slotKey]) {
            const timeSlot = document.createElement('div');
            timeSlot.className = 'time-slot';
            timeSlot.textContent = time;
            timeSlot.addEventListener('click', () => selectTime(time, timeSlot));
            timeSlotsElement.appendChild(timeSlot);
        }
    });
    
    if (timeSlotsElement.children.length === 0) {
        timeSlotsElement.innerHTML = '<p>No available times for this date</p>';
    }
}

function selectTime(time, element) {
    selectedTime = time;
    
    // Update selected time styling
    document.querySelectorAll('.time-slot').forEach(el => {
        el.classList.remove('selected');
    });
    element.classList.add('selected');
    
    // Show booking form
    document.getElementById('bookingForm').style.display = 'block';
}

function confirmBooking() {
    const name = document.getElementById('clientName').value;
    const email = document.getElementById('clientEmail').value;
    const business = document.getElementById('clientBusiness').value;
    const message = document.getElementById('clientMessage').value;
    
    if (!name || !email || !selectedDate || !selectedTime) {
        alert('Please fill in all required fields and select a date and time.');
        return;
    }
    
    // Store the booking
    const dateKey = selectedDate.toDateString();
    const slotKey = `${dateKey}-${selectedTime}`;
    bookedSlots[slotKey] = {
        name,
        email,
        business,
        message,
        date: selectedDate,
        time: selectedTime
    };
    
    // Show confirmation
    alert(`Booking confirmed for ${selectedDate.toLocaleDateString()} at ${selectedTime}. We'll send you a confirmation email shortly.`);
    
    // Reset form and calendar
    document.getElementById('bookingForm').style.display = 'none';
    document.getElementById('clientName').value = '';
    document.getElementById('clientEmail').value = '';
    document.getElementById('clientBusiness').value = '';
    document.getElementById('clientMessage').value = '';
    
    // Refresh time slots
    showTimeSlots(selectedDate);
    
    // Open chatbot with confirmation message
    setTimeout(() => {
        openChatbot();
        addMessage(`Great! Your consultation is booked for ${selectedDate.toLocaleDateString()} at ${selectedTime}. I'm here if you have any questions before our meeting.`, 'bot');
    }, 1000);
}