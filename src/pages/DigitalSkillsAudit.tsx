
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/Footer";
import ChatbotLauncher from "@/components/ChatbotLauncher";
import { Link } from "react-router-dom";

interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  feedback: string;
}

const questions: Question[] = [
  {
    id: "device_operation",
    question: "Which of these statements best describes your ability to operate digital devices?",
    options: [
      "I struggle to turn on digital devices without assistance",
      "I can turn on devices but find navigating interfaces challenging",
      "I can operate devices but am unfamiliar with many features",
      "I can confidently turn on and operate various digital devices"
    ],
    correctAnswer: 3,
    feedback: "Foundation skills like confidently operating digital devices are essential building blocks for all other digital capabilities. Without these skills, your business may face significant challenges in today's digital environment. Our targeted training can help develop these fundamental abilities."
  },
  {
    id: "basic_controls",
    question: "Which statement best describes your ability to use device controls?",
    options: [
      "I prefer to have someone else operate digital devices for me",
      "I can use a mouse but find touchscreens confusing",
      "I sometimes struggle with keyboard shortcuts and advanced controls",
      "I can confidently use controls such as mouse, keyboard, and touchscreen on various devices"
    ],
    correctAnswer: 3,
    feedback: "Confidence with basic device controls is fundamental to digital literacy. Without these skills, your efficiency and ability to leverage digital tools for your business will be significantly limited. Our foundation skills training can help you develop comfort with these essential controls."
  },
  {
    id: "internet_connectivity",
    question: "Which statement best describes your understanding of internet connectivity?",
    options: [
      "I don't understand how devices connect to the internet",
      "I know what Wi-Fi is but struggle to connect devices",
      "I can connect to familiar networks but have trouble with new connections",
      "I understand how to connect to the internet and can troubleshoot basic connectivity issues"
    ],
    correctAnswer: 3,
    feedback: "Understanding internet connectivity is a critical foundation skill. Without this knowledge, your business may experience unnecessary downtime and productivity losses. Our targeted training can help you develop confidence in managing internet connections and basic troubleshooting."
  },
  {
    id: "email_communication",
    question: "Which approach best demonstrates effective email communication in a business context?",
    options: [
      "Sending all communications without subject lines to save time",
      "Using informal language and emojis in all business correspondence",
      "Forwarding chain emails to maintain business relationships",
      "Using appropriate greetings, clear subject lines, and professional language"
    ],
    correctAnswer: 3,
    feedback: "Professional email communication is essential for business credibility. Your answer suggests a gap in digital communication skills that could impact your business relationships. Our communication skills training can help you develop more effective digital correspondence practices."
  },
  {
    id: "digital_collaboration",
    question: "When collaborating on business documents with colleagues, which approach is most effective?",
    options: [
      "Printing documents, making handwritten notes, and scanning them to share",
      "Emailing different versions of the same document to multiple recipients",
      "Using only text messages to discuss document changes",
      "Using cloud-based collaboration tools with permission settings and version control"
    ],
    correctAnswer: 3,
    feedback: "Effective digital collaboration is crucial for business efficiency. Your answer indicates a skills gap that could be leading to version control issues, lost information, and reduced productivity. Our digital collaboration training can help you implement more efficient document sharing and co-working practices."
  },
  {
    id: "professional_networking",
    question: "Which approach best demonstrates effective use of professional online networks?",
    options: [
      "Creating multiple profiles with inconsistent information",
      "Connecting with anyone regardless of relevance to your business",
      "Posting personal content regularly on professional platforms",
      "Maintaining a complete, professional profile and strategically building relevant connections"
    ],
    correctAnswer: 3,
    feedback: "Strategic use of professional networks can significantly impact business opportunities. Your answer suggests you may be missing opportunities to effectively leverage these platforms. Our professional networking training can help you build a more effective online presence for business growth."
  },
  {
    id: "information_evaluation",
    question: "When researching information for your business online, which approach demonstrates the best evaluation practice?",
    options: [
      "Trusting information from any website that appears in search results",
      "Considering information valid if it has an attractive website design",
      "Using only information from the first page of search results",
      "Verifying information across multiple reputable sources and checking author credentials"
    ],
    correctAnswer: 3,
    feedback: "Critical evaluation of online information is essential for sound business decision-making. Your answer suggests a potential vulnerability to misinformation that could impact your business strategy. Our information literacy training can help you develop stronger skills in evaluating online content."
  },
  {
    id: "data_organization",
    question: "Which approach best demonstrates effective organization of business data?",
    options: [
      "Saving all files to the desktop for easy access",
      "Creating new folders for each file to ensure separation",
      "Relying on search functions rather than organizing files",
      "Using a logical folder structure with consistent naming conventions and appropriate metadata"
    ],
    correctAnswer: 3,
    feedback: "Systematic organization of digital information is crucial for business efficiency. Your answer indicates a skills gap that could be causing wasted time, lost files, and reduced productivity. Our data organization training can help you implement more effective information management systems."
  },
  {
    id: "cross_device_access",
    question: "Which approach best demonstrates effective management of business information across devices?",
    options: [
      "Manually transferring files between devices using USB drives",
      "Emailing files to yourself to access them on different devices",
      "Keeping separate copies of files on each device",
      "Using cloud storage and synchronization services with appropriate security measures"
    ],
    correctAnswer: 3,
    feedback: "Secure, efficient access to business information across multiple devices is increasingly essential. Your answer suggests you may be using inefficient methods that increase security risks and reduce productivity. Our cross-device information management training can help you implement more effective solutions."
  },
  {
    id: "online_account_security",
    question: "Which practice best demonstrates secure management of online business accounts?",
    options: [
      "Using the same password for all business accounts for consistency",
      "Writing down all passwords in a notebook kept near your computer",
      "Sharing login credentials with all team members for convenience",
      "Using unique, strong passwords and two-factor authentication where available"
    ],
    correctAnswer: 3,
    feedback: "Secure account management is fundamental to protecting your business online. Your answer indicates a significant security vulnerability that could put your business at risk. Our digital security training can help you implement more robust account protection practices."
  },
  {
    id: "digital_payment_systems",
    question: "Which approach demonstrates the most secure use of online payment systems?",
    options: [
      "Using public Wi-Fi networks for banking transactions to save data",
      "Sharing payment details over email or text message",
      "Clicking on payment links from any email that appears to be from a client",
      "Verifying website security (https), using trusted payment providers, and checking for unusual activity"
    ],
    correctAnswer: 3,
    feedback: "Secure digital payment practices are essential for protecting your business finances. Your answer suggests potential security vulnerabilities that could lead to financial loss. Our secure transactions training can help you implement safer payment practices."
  },
  {
    id: "digital_record_management",
    question: "Which approach best demonstrates effective management of digital business records?",
    options: [
      "Keeping minimal records to avoid digital storage costs",
      "Storing records only on local devices for security",
      "Deleting older records regularly to save space",
      "Maintaining comprehensive, secure digital records with appropriate retention periods and backup systems"
    ],
    correctAnswer: 3,
    feedback: "Effective digital record management is crucial for business compliance and continuity. Your answer indicates potential gaps in your record-keeping practices that could create legal vulnerabilities."
  }
];

const DigitalSkillsAudit = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: string]: number }>({});
  const [showResults, setShowResults] = useState(false);
  const [currentAnswer, setCurrentAnswer] = useState<string>("");

  const handleAnswerChange = (value: string) => {
    setCurrentAnswer(value);
  };

  const handleNext = () => {
    if (currentAnswer !== "") {
      setAnswers(prev => ({
        ...prev,
        [questions[currentQuestion].id]: parseInt(currentAnswer)
      }));

      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(prev => prev + 1);
        setCurrentAnswer("");
      } else {
        setShowResults(true);
      }
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
      const prevAnswer = answers[questions[currentQuestion - 1].id];
      setCurrentAnswer(prevAnswer !== undefined ? prevAnswer.toString() : "");
    }
  };

  const calculateResults = () => {
    const totalQuestions = questions.length;
    const correctAnswers = questions.reduce((count, question, index) => {
      return answers[question.id] === question.correctAnswer ? count + 1 : count;
    }, 0);
    
    return {
      score: Math.round((correctAnswers / totalQuestions) * 100),
      correctAnswers,
      totalQuestions
    };
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (showResults) {
    const results = calculateResults();
    
    return (
      <div className="min-h-screen bg-brand-navy">
        <Navigation />
        
        <div className="max-w-4xl mx-auto px-4 py-12">
          <Card className="bg-brand-navy-light border-brand-silver/20">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-white mb-4">
                Your Digital Skills Assessment Results
              </CardTitle>
              <div className="text-6xl font-bold text-brand-lime mb-4">
                {results.score}%
              </div>
              <p className="text-brand-silver text-lg">
                You scored {results.correctAnswers} out of {results.totalQuestions} questions correctly.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                {results.score >= 80 ? (
                  <div className="bg-brand-lime/10 border border-brand-lime/30 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-brand-lime mb-2">Excellent Digital Skills!</h3>
                    <p className="text-brand-silver">
                      You demonstrate strong digital capabilities across all essential skill areas. 
                      Consider exploring our advanced automation solutions to further enhance your business efficiency.
                    </p>
                  </div>
                ) : results.score >= 60 ? (
                  <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-brand-lime mb-2">Good Foundation with Room for Growth</h3>
                    <p className="text-brand-silver">
                      You have solid basic skills but could benefit from targeted training in specific areas. 
                      Our customized training programs can help you bridge these gaps and unlock your business potential.
                    </p>
                  </div>
                ) : (
                  <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-red-400 mb-2">Significant Opportunity for Improvement</h3>
                    <p className="text-brand-silver">
                      Your assessment indicates substantial gaps in essential digital skills that may be limiting your business growth. 
                      Our comprehensive training programs can help you develop these crucial capabilities.
                    </p>
                  </div>
                )}
              </div>

              <div className="border-t border-brand-silver/20 pt-6">
                <h3 className="text-xl font-semibold text-white mb-4">Detailed Feedback</h3>
                <div className="space-y-4">
                  {questions.map((question, index) => {
                    const userAnswer = answers[question.id];
                    const isCorrect = userAnswer === question.correctAnswer;
                    
                    return (
                      <div key={question.id} className={`p-4 rounded-lg border ${
                        isCorrect ? 'bg-brand-lime/10 border-brand-lime/30' : 'bg-red-900/10 border-red-500/30'
                      }`}>
                        <h4 className="font-semibold text-white mb-2">
                          Question {index + 1}: {isCorrect ? '✓' : '✗'}
                        </h4>
                        <p className="text-brand-silver text-sm mb-2">{question.question}</p>
                        {!isCorrect && (
                          <p className="text-brand-silver text-sm italic">{question.feedback}</p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="text-center pt-6 border-t border-brand-silver/20">
                <h3 className="text-xl font-semibold text-white mb-4">Ready to Improve Your Digital Skills?</h3>
                <p className="text-brand-silver mb-6">
                  Book a free consultation to discuss how we can help you develop the digital skills your business needs to thrive.
                </p>
                <Link to="/consultation">
                  <Button className="bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-semibold px-8 py-3">
                    Free 30min Consultation - Let's Talk How We Help
                  </Button>
                </Link>
              </div>

              <div className="text-center text-xs text-brand-silver pt-4">
                <p>
                  This audit is based on the UK's Essential Digital Skills Framework.{" "}
                    <a 
                      href="https://www.gov.uk/government/publications/essential-digital-skills-framework" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-brand-lime hover:underline"
                      aria-label="Essential Digital Skills Framework - opens in new window"
                    >
                    [1]: https://www.gov.uk/government/publications/essential-digital-skills-framework
                  </a>
                </p>
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
    <div className="min-h-screen bg-brand-navy">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Digital Skills Audit Tool
          </h1>
          <p className="text-xl text-brand-silver mb-6">
            Based on the UK's Essential Digital Skills Framework
          </p>
          <div className="bg-brand-navy-light rounded-lg p-6 text-left max-w-3xl mx-auto border border-brand-silver/20">
            <h2 className="text-lg font-semibold text-white mb-4">Introduction</h2>
            <p className="text-brand-silver mb-4">
              This comprehensive digital skills audit tool is designed to assess business owners' proficiency across 
              the key components of the UK government's Essential Digital Skills Framework. The framework defines the 
              digital skills adults need to safely benefit from, participate in, and contribute to the digital world.
            </p>
            <p className="text-brand-silver mb-4">The audit focuses on the five essential skill areas identified in the framework:</p>
            <ul className="list-disc list-inside text-brand-silver mb-4 space-y-1">
              <li>Communicating</li>
              <li>Handling information and content</li>
              <li>Transacting</li>
              <li>Problem solving</li>
              <li>Being safe and legal online</li>
            </ul>
            <p className="text-brand-silver">Plus the foundational skills that underpin these areas.</p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-brand-silver mb-2">
            <span>Progress</span>
            <span>{currentQuestion + 1} of {questions.length}</span>
          </div>
          <Progress value={progress} className="h-2 bg-brand-navy-light" />
        </div>

        {/* Question Card */}
        <Card className="bg-brand-navy-light border-brand-silver/20">
          <CardHeader>
            <CardTitle className="text-white">
              Question {currentQuestion + 1}: {
                currentQuestion < 3 ? 'Foundation Skills Assessment' :
                currentQuestion < 6 ? 'Communicating Skills Assessment' :
                currentQuestion < 9 ? 'Handling Information and Content Assessment' :
                'Transacting Skills Assessment'
              }
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-white">
                {questions[currentQuestion].question}
              </h3>
              
              <RadioGroup value={currentAnswer} onValueChange={handleAnswerChange}>
                {questions[currentQuestion].options.map((option, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-brand-silver/5 transition-colors">
                    <RadioGroupItem 
                      value={index.toString()} 
                      id={`option-${index}`}
                      className="border-brand-silver data-[state=checked]:bg-brand-lime data-[state=checked]:border-brand-lime mt-1"
                    />
                    <Label 
                      htmlFor={`option-${index}`} 
                      className="text-brand-silver cursor-pointer flex-1 leading-relaxed"
                    >
                      {String.fromCharCode(65 + index)}) {option}
                    </Label>
                  </div>
                ))}
              </RadioGroup>

              <div className="flex justify-between pt-6">
                <Button
                  onClick={handlePrevious}
                  disabled={currentQuestion === 0}
                  variant="outline"
                  className="border-brand-silver text-brand-silver hover:bg-brand-silver hover:text-brand-navy disabled:opacity-50"
                >
                  Previous
                </Button>
                <Button
                  onClick={handleNext}
                  disabled={currentAnswer === ""}
                  className="bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-semibold disabled:opacity-50"
                >
                  {currentQuestion === questions.length - 1 ? 'View Results' : 'Next'}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center text-xs text-brand-silver mt-8">
          <p>
            This audit is based on the UK's Essential Digital Skills Framework.{" "}
            <a 
              href="https://www.gov.uk/government/publications/essential-digital-skills-framework" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-brand-lime hover:underline"
              aria-label="Essential Digital Skills Framework - opens in new window"
            >
              [1]: https://www.gov.uk/government/publications/essential-digital-skills-framework
            </a>
          </p>
        </div>
      </div>

      <Footer />
      <ChatbotLauncher />
    </div>
  );
};

export default DigitalSkillsAudit;
