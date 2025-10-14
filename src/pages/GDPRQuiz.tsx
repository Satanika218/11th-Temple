
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Shield, CheckCircle, AlertTriangle, TrendingUp, Download } from "lucide-react";
import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/Footer";
import ChatbotLauncher from "@/components/ChatbotLauncher";
import { Link } from "react-router-dom";
import { generateGDPRQuizPDF } from "@/utils/gdprQuizPDFGenerator";
import { useLoadingState } from "@/hooks/useLoadingState";
import { toast } from "sonner";

const GDPRQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const { isLoading, execute } = useLoadingState();

  const questions = [
    {
      category: "Consent & Lawful Basis",
      question: "A customer signs up for your newsletter and later asks to be removed. They also request all their data be deleted. What's the correct response?",
      options: [
        "Remove them from the newsletter but keep their data for marketing purposes",
        "Honor both requests immediately unless you have another lawful basis for processing",
        "Ask them to pay an administrative fee for data deletion",
        "Only remove them from the newsletter as deletion is too complicated"
      ],
      correct: 1
    },
    {
      category: "Consent & Lawful Basis",
      question: "Your business wants to process employee data for a new HR system. What lawful basis is most appropriate?",
      options: [
        "Consent from each employee",
        "Legitimate interests as it's necessary for employment contract performance",
        "Vital interests as employment is important",
        "Public task as you're helping the economy"
      ],
      correct: 1
    },
    {
      category: "Consent & Lawful Basis",
      question: "A 12-year-old wants to sign up for your online service. What's required for GDPR compliance?",
      options: [
        "Their own consent is sufficient",
        "Parental consent is required and must be verifiable",
        "No one under 18 can consent to data processing",
        "School consent is sufficient"
      ],
      correct: 1
    },
    {
      category: "Consent & Lawful Basis",
      question: "You're processing customer data for fraud prevention. A customer objects to this processing. What's your response?",
      options: [
        "Stop processing their data immediately",
        "Continue processing as fraud prevention is a legitimate interest that overrides their objection",
        "Ask for their consent to continue",
        "Delete their account completely"
      ],
      correct: 1
    },
    {
      category: "Consent & Lawful Basis",
      question: "Pre-GDPR, you collected customer data with broad consent. Post-GDPR, you want to use this data for new purposes. What's required?",
      options: [
        "Continue using the data as consent was given previously",
        "Obtain fresh, specific consent for the new purposes",
        "Assume implied consent for similar activities",
        "Wait one year then use the data freely"
      ],
      correct: 1
    },
    {
      category: "Data Subject Rights",
      question: "An individual requests access to all personal data you hold about them. You must respond within:",
      options: [
        "72 hours",
        "One month (extendable to three months for complex requests)",
        "One week",
        "Three months in all cases"
      ],
      correct: 1
    },
    {
      category: "Data Subject Rights",
      question: "A customer requests data portability. Which statement is correct?",
      options: [
        "You must provide data in any format they request",
        "You must provide data in a structured, commonly used, machine-readable format",
        "Data portability only applies to social media companies",
        "You can charge a reasonable fee for this service"
      ],
      correct: 1
    },
    {
      category: "Data Subject Rights",
      question: "Someone requests erasure of their data, but you need it for legal compliance. What do you do?",
      options: [
        "Delete the data immediately as requested",
        "Retain the data for legal compliance but restrict its processing for other purposes",
        "Refuse the erasure request completely",
        "Ask them to provide legal justification for deletion"
      ],
      correct: 1
    },
    {
      category: "Data Subject Rights",
      question: "An individual claims their personal data is inaccurate and requests rectification. You disagree. What's required?",
      options: [
        "Ignore the request as you believe the data is correct",
        "Investigate the claim and either correct the data or note the individual's objection",
        "Ask them to prove the data is wrong",
        "Charge them for the investigation time"
      ],
      correct: 1
    },
    {
      category: "Data Subject Rights",
      question: "A data subject exercises their right to object to processing. When can you continue processing despite their objection?",
      options: [
        "Never - objections must always be honored",
        "If you can demonstrate compelling legitimate grounds that override their interests",
        "If you've been processing the data for over a year",
        "If the objection is submitted by email rather than in writing"
      ],
      correct: 1
    },
    {
      category: "Data Protection & Security",
      question: "You discover a data breach affecting 500 customer records including names and email addresses. What's required?",
      options: [
        "No action needed as it's only basic contact information",
        "Report to ICO within 72 hours and notify affected individuals without undue delay",
        "Only report to ICO if customers complain",
        "Wait to see if the data is misused before reporting"
      ],
      correct: 1
    },
    {
      category: "Data Protection & Security",
      question: "Your business handles sensitive personal data. Which security measure is most critical?",
      options: [
        "Using the same strong password for all systems",
        "Implementing encryption, access controls, and regular security assessments",
        "Printing everything and storing in locked cabinets",
        "Only allowing access during business hours"
      ],
      correct: 1
    },
    {
      category: "Data Protection & Security",
      question: "You're conducting a DPIA (Data Protection Impact Assessment). When is this legally required?",
      options: [
        "For all data processing activities",
        "When processing is likely to result in high risk to individuals' rights and freedoms",
        "Only when processing over 1000 records",
        "Never for small businesses"
      ],
      correct: 1
    },
    {
      category: "Data Protection & Security",
      question: "An employee accidentally emails customer data to the wrong recipient. What's your first priority?",
      options: [
        "Discipline the employee immediately",
        "Contain the breach, assess the risk, and follow your breach response procedure",
        "Hope the recipient doesn't notice",
        "Ask the recipient to delete the email"
      ],
      correct: 1
    },
    {
      category: "Data Protection & Security",
      question: "You want to transfer personal data to a supplier in a non-EU country. What's required?",
      options: [
        "No special requirements as it's for business purposes",
        "Ensure adequate safeguards through adequacy decisions, SCCs, or other approved mechanisms",
        "Just get the data subject's consent",
        "It's prohibited to transfer data outside the EU"
      ],
      correct: 1
    },
    {
      category: "Workplace Application",
      question: "You want to monitor employee emails for productivity. What's the GDPR-compliant approach?",
      options: [
        "Monitor freely as employees have no privacy expectations at work",
        "Conduct legitimate interests assessment, inform employees, and implement proportionate monitoring",
        "Get written consent from all employees",
        "Only monitor senior management"
      ],
      correct: 1
    },
    {
      category: "Workplace Application",
      question: "An employee asks for copies of all their personal data held in HR files. What can you charge for this?",
      options: [
        "£10 administration fee",
        "Nothing - the first copy must be provided free of charge",
        "Cost of photocopying and postage",
        "Hourly rate for staff time to compile the information"
      ],
      correct: 1
    },
    {
      category: "Workplace Application",
      question: "You're implementing a new customer database. Your IT supplier will have access to personal data. What's required?",
      options: [
        "Nothing special as they're just providing technical support",
        "A written data processing agreement specifying their obligations and your instructions",
        "Just a general confidentiality agreement",
        "Permission from all customers whose data will be accessed"
      ],
      correct: 1
    },
    {
      category: "Workplace Application",
      question: "A former employee requests erasure of their HR data. You need some records for legal reasons. What's the correct approach?",
      options: [
        "Delete everything as requested",
        "Retain only what's necessary for legal compliance and delete the rest",
        "Keep everything as employment records are exempt from erasure",
        "Ask them to specify exactly which data they want deleted"
      ],
      correct: 1
    },
    {
      category: "Workplace Application",
      question: "Your business uses cookies on its website for analytics. What's required for GDPR compliance?",
      options: [
        "No action needed as analytics cookies are essential",
        "Obtain clear consent and provide easy withdrawal mechanism",
        "Just display a cookie notice",
        "Cookies are not covered by GDPR"
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
    if (score >= 85) return { level: "GDPR Expert", color: "text-brand-lime", icon: <TrendingUp className="h-6 w-6 text-brand-lime" /> };
    if (score >= 70) return { level: "Compliance Professional", color: "text-brand-purple", icon: <CheckCircle className="h-6 w-6 text-brand-purple" /> };
    if (score >= 50) return { level: "Developing Knowledge", color: "text-yellow-600", icon: <Shield className="h-6 w-6 text-yellow-600" /> };
    return { level: "Requires Training", color: "text-red-600", icon: <AlertTriangle className="h-6 w-6 text-red-600" /> };
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
  };

  const handleDownloadPDF = () => {
    execute(async () => {
      const score = calculateScore();
      await generateGDPRQuizPDF({
        score,
        answers,
        businessName: "Your Business", // In real implementation, collect this in a form
        contactName: "Quiz Participant",
        contactEmail: "participant@email.com"
      });
      toast.success("GDPR Compliance Assessment PDF downloaded successfully!");
    });
  };

  if (showResults) {
    const score = calculateScore();
    const scoreLevel = getScoreLevel(score);

    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-100">
        <Navigation />
        
        <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <Card className="bg-white shadow-2xl rounded-2xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-red-600 to-orange-600 text-white text-center py-8">
              <div className="flex justify-center mb-4">
                {scoreLevel.icon}
              </div>
              <CardTitle className="text-3xl font-bold mb-2">GDPR Assessment Complete</CardTitle>
              <p className="text-xl">Your Compliance Level: <span className="font-bold">{scoreLevel.level}</span></p>
            </CardHeader>
            
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <div className={`text-6xl font-bold mb-4 ${scoreLevel.color}`}>
                  {score}%
                </div>
                <p className="text-xl text-gray-600">GDPR Knowledge Score</p>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Compliance Risk Assessment</h3>
                {score >= 85 && (
                  <p className="text-gray-700 leading-relaxed">
                    Excellent! Your GDPR knowledge is comprehensive. You understand complex compliance requirements and can guide others. Consider becoming a Data Protection Officer or compliance specialist.
                  </p>
                )}
                {score >= 70 && score < 85 && (
                  <p className="text-gray-700 leading-relaxed">
                    Strong compliance knowledge with minor gaps. You understand most GDPR requirements but should focus on specialized areas like international transfers and technical measures.
                  </p>
                )}
                {score >= 50 && score < 70 && (
                  <p className="text-gray-700 leading-relaxed">
                    Basic understanding established but significant gaps remain. Professional GDPR training is recommended to avoid potential compliance failures and costly penalties.
                  </p>
                )}
                {score < 50 && (
                  <p className="text-gray-700 leading-relaxed">
                    Critical compliance gaps identified. Immediate professional GDPR training is essential to prevent costly breaches and ensure legal compliance for your business operations.
                  </p>
                )}
              </div>

              <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">UK GDPR Compliance Reality</h4>
                <p className="text-gray-600 text-sm mb-3">
                  • ICO issued £42.1 million in fines during 2023 alone
                  • 73% of UK SMEs experienced data breaches in the past year
                  • Average breach cost: £3.5 million for UK businesses
                  • Maximum penalties: £17.5 million or 4% of annual turnover
                </p>
                <p className="text-gray-700">
                  Identify compliance gaps before they become costly breaches. Our GDPR specialists help UK businesses achieve bulletproof compliance.
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
                  <Button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3">
                    Get Compliance Help
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
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-100">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {currentQuestion === 0 && (
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              UK GDPR Compliance Assessment
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Test your knowledge of critical data protection requirements for UK businesses
            </p>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
              <p className="text-sm text-gray-700">
                <strong>Critical Risk Warning:</strong> ICO issued £42.1M in fines in 2023. 73% of UK SMEs experienced breaches. 
                Average cost: £3.5M. Maximum penalty: £17.5M or 4% of turnover. Test your compliance knowledge now.
              </p>
            </div>
          </div>
        )}

        <Card className="bg-white shadow-2xl rounded-2xl overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-red-600 to-orange-600 text-white">
            <div className="flex justify-between items-center">
              <CardTitle className="text-xl font-bold">
                Question {currentQuestion + 1} of {questions.length}
              </CardTitle>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5" />
                <span className="text-sm">{questions[currentQuestion].category}</span>
              </div>
            </div>
            <Progress 
              value={(currentQuestion / questions.length) * 100} 
              className="mt-2 bg-white/20" 
            />
          </CardHeader>
          
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              {questions[currentQuestion].question}
            </h2>
            
            <div className="space-y-4">
              {questions[currentQuestion].options.map((option, index) => (
                <Button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  className="w-full p-6 text-left bg-gray-50 hover:bg-red-50 text-gray-800 border border-gray-200 hover:border-red-300 rounded-xl transition-all duration-300 min-h-[60px] justify-start text-base leading-relaxed"
                  variant="outline"
                >
                  <span className="font-semibold mr-3 text-red-600">
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

export default GDPRQuiz;
