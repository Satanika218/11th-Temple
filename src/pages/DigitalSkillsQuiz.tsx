
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Brain, CheckCircle, AlertTriangle, TrendingUp, Download } from "lucide-react";
import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/Footer";
import ChatbotLauncher from "@/components/ChatbotLauncher";
import { Link } from "react-router-dom";
import { generateDigitalSkillsPDF } from "@/utils/digitalSkillsPDFGenerator";
import { useLoadingState } from "@/hooks/useLoadingState";
import { toast } from "sonner";

const DigitalSkillsQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const { isLoading, execute } = useLoadingState();

  const questions = [
    {
      category: "Communicating",
      question: "Your team needs to collaborate on a document with multiple stakeholders across different locations. What's the most effective approach?",
      options: [
        "Email the document back and forth with version numbers",
        "Use a cloud-based collaborative platform with real-time editing and comment features",
        "Schedule video calls to discuss changes verbally",
        "Create a shared folder and take turns editing"
      ],
      correct: 1
    },
    {
      category: "Communicating",
      question: "You need to present quarterly results to remote board members. Which approach ensures maximum engagement?",
      options: [
        "Send a detailed email with attachments",
        "Use interactive presentation software with screen sharing and polling features",
        "Mail printed copies before a phone conference",
        "Record a video message and send the link"
      ],
      correct: 1
    },
    {
      category: "Communicating",
      question: "Managing client communications across multiple channels is becoming chaotic. What's the best solution?",
      options: [
        "Continue using separate email, phone, and chat systems",
        "Implement a CRM system that integrates all communication channels",
        "Assign different team members to different communication methods",
        "Ask clients to only use email for all communications"
      ],
      correct: 1
    },
    {
      category: "Communicating",
      question: "Your business needs to maintain professional communication with international clients across time zones. What's most effective?",
      options: [
        "Only communicate during your business hours",
        "Use scheduling tools and automated responses with clear availability windows",
        "Hire staff to cover all time zones",
        "Ask clients to adapt to your schedule"
      ],
      correct: 1
    },
    {
      category: "Handling Information",
      question: "Your business data is scattered across multiple systems and formats. What's the priority action?",
      options: [
        "Continue using existing systems as they work fine",
        "Implement a centralized data management system with automated synchronization",
        "Hire more staff to manually manage data entry",
        "Reduce the amount of data you collect"
      ],
      correct: 1
    },
    {
      category: "Handling Information",
      question: "You need to analyze customer behavior patterns to improve service delivery. What approach provides the most valuable insights?",
      options: [
        "Review customer complaints manually",
        "Use analytics tools to track customer journey and behavior patterns across touchpoints",
        "Survey customers annually",
        "Ask staff for their observations"
      ],
      correct: 1
    },
    {
      category: "Handling Information",
      question: "Your team struggles to find important documents quickly. What's the most efficient solution?",
      options: [
        "Create more detailed folder structures",
        "Implement a searchable document management system with tagging and metadata",
        "Train staff to remember where documents are stored",
        "Reduce the number of documents created"
      ],
      correct: 1
    },
    {
      category: "Handling Information",
      question: "You need to ensure data accuracy across multiple departments. What's the best approach?",
      options: [
        "Have each department manage their own data separately",
        "Implement automated data validation and single source of truth systems",
        "Conduct monthly manual data audits",
        "Trust that staff will enter data correctly"
      ],
      correct: 1
    },
    {
      category: "Transacting",
      question: "Customer payment processing is slow and causing complaints. What's the most effective solution?",
      options: [
        "Explain to customers that payment processing takes time",
        "Implement automated payment systems with instant confirmation and multiple payment options",
        "Hire more staff to process payments faster",
        "Only accept cash payments to avoid delays"
      ],
      correct: 1
    },
    {
      category: "Transacting",
      question: "You want to expand your business online but are concerned about security. What's the priority?",
      options: [
        "Wait until you're more comfortable with technology",
        "Implement robust e-commerce platform with SSL encryption and PCI compliance",
        "Start with social media sales only",
        "Only sell to customers you know personally"
      ],
      correct: 1
    },
    {
      category: "Transacting",
      question: "Invoice management is taking too much time and causing cash flow issues. What's the best approach?",
      options: [
        "Hire an accountant to manage all invoicing",
        "Implement automated invoicing with payment tracking and reminder systems",
        "Switch to cash-only business model",
        "Invoice less frequently to reduce workload"
      ],
      correct: 1
    },
    {
      category: "Transacting",
      question: "You need to track business expenses for tax purposes. What's the most efficient method?",
      options: [
        "Keep all receipts in a shoebox for year-end sorting",
        "Use expense management software with receipt scanning and automatic categorization",
        "Enter everything manually into spreadsheets",
        "Pay an accountant to track everything"
      ],
      correct: 1
    },
    {
      category: "Problem Solving",
      question: "Your website traffic dropped significantly. What's your first step?",
      options: [
        "Wait to see if traffic returns naturally",
        "Use analytics tools to identify traffic sources, user behavior, and potential technical issues",
        "Increase advertising spending immediately",
        "Redesign the entire website"
      ],
      correct: 1
    },
    {
      category: "Problem Solving",
      question: "A key business system crashes during peak hours. What's your best response?",
      options: [
        "Panic and close the business until it's fixed",
        "Activate documented backup procedures and implement business continuity plan",
        "Try to fix it yourself regardless of your technical expertise",
        "Wait for the system to fix itself"
      ],
      correct: 1
    },
    {
      category: "Problem Solving",
      question: "Customer complaints about service quality are increasing. How do you address this systematically?",
      options: [
        "Ignore complaints as they're probably not representative",
        "Implement feedback management system to track, analyze, and respond to patterns",
        "Offer discounts to all complaining customers",
        "Blame staff without investigating underlying causes"
      ],
      correct: 1
    },
    {
      category: "Problem Solving",
      question: "Your digital marketing efforts aren't generating expected results. What's the most effective approach?",
      options: [
        "Stop all digital marketing as it doesn't work",
        "Analyze performance data to identify what's working and optimize underperforming areas",
        "Increase budget across all channels equally",
        "Copy what competitors are doing exactly"
      ],
      correct: 1
    },
    {
      category: "Being Safe Online",
      question: "You suspect a phishing attempt in your business email. What's the immediate action?",
      options: [
        "Click the link to see if it's legitimate",
        "Report it to IT, warn team members, and implement additional email security measures",
        "Delete it and hope nothing bad happens",
        "Forward it to colleagues to ask their opinion"
      ],
      correct: 1
    },
    {
      category: "Being Safe Online",
      question: "An employee wants to use personal devices for work. What's the appropriate policy?",
      options: [
        "Allow unrestricted personal device use",
        "Implement BYOD policy with device management, security requirements, and data protection measures",
        "Forbid all personal devices completely",
        "Let each employee decide their own security measures"
      ],
      correct: 1
    },
    {
      category: "Being Safe Online",
      question: "Your business needs to store sensitive customer data. What's the priority consideration?",
      options: [
        "Store everything on a personal laptop for easy access",
        "Implement encrypted storage with access controls, backup procedures, and GDPR compliance",
        "Print everything and store in filing cabinets",
        "Use free online storage services"
      ],
      correct: 1
    },
    {
      category: "Being Safe Online",
      question: "You discover that business passwords are weak and reused. What's the best solution?",
      options: [
        "Ask staff to create slightly longer passwords",
        "Implement password manager with multi-factor authentication and regular security training",
        "Write down all passwords and keep them in a locked drawer",
        "Use the same strong password for everything"
      ],
      correct: 1
    }
  ];

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers, answerIndex];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateScore = () => {
    const correctAnswers = answers.filter((answer, index) => answer === questions[index].correct).length;
    return Math.round((correctAnswers / questions.length) * 100);
  };

  const getScoreLevel = (score: number) => {
    if (score >= 85) return { level: "Digital Expert", color: "text-brand-lime", icon: <TrendingUp className="h-6 w-6 text-brand-lime" /> };
    if (score >= 70) return { level: "Advanced User", color: "text-brand-purple", icon: <CheckCircle className="h-6 w-6 text-brand-purple" /> };
    if (score >= 50) return { level: "Competent User", color: "text-yellow-600", icon: <Brain className="h-6 w-6 text-yellow-600" /> };
    return { level: "Developing Skills", color: "text-red-600", icon: <AlertTriangle className="h-6 w-6 text-red-600" /> };
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
  };

  const handleDownloadPDF = () => {
    execute(async () => {
      const score = calculateScore();
      await generateDigitalSkillsPDF({
        score,
        answers,
        businessName: "Your Business", // In real implementation, collect this in a form
        contactName: "Quiz Participant",
        contactEmail: "participant@email.com"
      });
      toast.success("Digital Skills Assessment PDF downloaded successfully!");
    });
  };

  if (showResults) {
    const score = calculateScore();
    const scoreLevel = getScoreLevel(score);

    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100">
        <Navigation />
        
        <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <Card className="bg-white shadow-2xl rounded-2xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-green-600 to-blue-600 text-white text-center py-8">
              <div className="flex justify-center mb-4">
                {scoreLevel.icon}
              </div>
              <CardTitle className="text-3xl font-bold mb-2">Assessment Complete</CardTitle>
              <p className="text-xl">Your Digital Skills Level: <span className="font-bold">{scoreLevel.level}</span></p>
            </CardHeader>
            
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <div className={`text-6xl font-bold mb-4 ${scoreLevel.color}`}>
                  {score}%
                </div>
                <p className="text-xl text-gray-600">Overall Digital Skills Score</p>
                <p className="text-sm text-gray-500 mt-1">Based on knowledge of digital tools, online security, and workplace technology</p>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">What This Means for Your Business</h3>
                {score >= 85 && (
                  <p className="text-gray-700 leading-relaxed">
                    Excellent! Your digital skills are advanced. You're ready to implement complex digital solutions and lead digital transformation initiatives. Consider sharing your expertise with team members.
                  </p>
                )}
                {score >= 70 && score < 85 && (
                  <p className="text-gray-700 leading-relaxed">
                    Great work! You have strong digital skills with room for growth in specialized areas. Focus on advanced automation and data analytics to maximize business impact.
                  </p>
                )}
                {score >= 50 && score < 70 && (
                  <p className="text-gray-700 leading-relaxed">
                    Good foundation! You understand digital basics but could benefit from targeted training in problem-solving and security. Consider professional development in key areas.
                  </p>
                )}
                {score < 50 && (
                  <p className="text-gray-700 leading-relaxed">
                    This assessment has identified areas where professional development could significantly boost your business productivity. Consider structured digital skills training for you and your team.
                  </p>
                )}
              </div>

              <div className="bg-gray-50 rounded-xl p-6 mb-8">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">UK Digital Skills Context</h4>
                <p className="text-gray-600 text-sm mb-3">
                  • 11.3 million UK adults lack full basic digital skills
                  • UK businesses lose £63 billion annually due to digital skills gaps
                  • Companies with digitally skilled workforces are 5x more likely to be high-performing
                </p>
                <p className="text-gray-700">
                  Ready to address your digital skills gaps? Our training programs help UK businesses build confident, compliant digital workforces.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={handleDownloadPDF}
                  disabled={isLoading}
                  className="bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-semibold px-6 py-3"
                >
                  <Download className="mr-2 h-4 w-4" />
                  {isLoading ? "Generating..." : "Download PDF Report"}
                </Button>
                <Button 
                  onClick={resetQuiz}
                  className="bg-gray-600 hover:bg-gray-700 text-white font-semibold px-6 py-3"
                >
                  Retake Assessment
                </Button>
                <Link to="/consultation">
                  <Button className="bg-brand-lime hover:bg-brand-lime/90 text-brand-navy font-semibold px-6 py-3">
                    Discuss Your Results
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        <Footer />
        <ChatbotLauncher />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {currentQuestion === 0 && (
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Essential Digital Skills Assessment
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Test your workplace digital capabilities with scenarios UK businesses face every day
            </p>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
              <p className="text-sm text-gray-700">
                <strong>Why This Matters:</strong> 11.3 million UK adults lack full basic digital skills, costing businesses £63 billion annually. 
                This assessment identifies gaps that could be limiting your business growth.
              </p>
            </div>
          </div>
        )}

        <Card className="bg-white shadow-2xl rounded-2xl overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
            <div className="flex justify-between items-center">
              <CardTitle className="text-xl font-bold">
                Question {currentQuestion + 1} of {questions.length}
              </CardTitle>
              <div className="flex items-center space-x-2">
                <Brain className="h-5 w-5" />
                <span className="text-sm">{questions[currentQuestion].category}</span>
              </div>
            </div>
            <Progress 
              value={(currentQuestion / questions.length) * 100} 
              className="mt-2 bg-white/20" 
            />
          </CardHeader>
          
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {questions[currentQuestion].question}
            </h2>
            
            <div className="space-y-4">
              {questions[currentQuestion].options.map((option, index) => (
                <Button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  className="w-full p-6 text-left bg-white hover:bg-brand-lime/10 text-gray-800 border border-gray-300 hover:border-brand-lime rounded-xl transition-all duration-300 min-h-[60px] justify-start text-base leading-relaxed shadow-sm"
                  variant="outline"
                >
                  <span className="font-semibold mr-3 text-brand-lime">
                    {String.fromCharCode(65 + index)}.
                  </span>
                  {option}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
      <ChatbotLauncher />
    </div>
  );
};

export default DigitalSkillsQuiz;
