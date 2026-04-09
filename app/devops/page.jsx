"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FiServer, FiRefreshCw } from "react-icons/fi";

const questions = [
  {
    id: 1,
    question: "What's the real reason behind Netflix's Chaos Monkey?",
    options: [
      "To entertain developers during lunch breaks",
      "To make production more exciting",
      "To intentionally break production during business hours",
      "To build resilient systems by simulating failures"
    ],
    correctAnswer: 3,
    explanation: "Netflix created Chaos Monkey to randomly terminate instances in production, forcing teams to build resilient systems that can handle failures gracefully."
  },
  {
    id: 2,
    question: "Why do elite DevOps teams deploy more frequently?",
    options: [
      "They love working overtime",
      "Smaller changes are easier to debug and rollback",
      "To keep developers busy",
      "Because their managers said so"
    ],
    correctAnswer: 1,
    explanation: "Smaller, frequent deployments reduce risk by making changes easier to understand, debug, and rollback if needed."
  },
  {
    id: 3,
    question: "What's the true purpose of an Error Budget?",
    options: [
      "To track how many bugs developers create",
      "To plan the IT department's yearly budget",
      "To balance reliability with innovation",
      "To measure team performance"
    ],
    correctAnswer: 2,
    explanation: "Error budgets help teams balance reliability work with innovation by setting acceptable reliability thresholds."
  },
  {
    id: 4,
    question: "Which metric is NOT one of Google's Four Golden Signals?",
    options: [
      "Latency",
      "CPU Usage",
      "Traffic",
      "Saturation"
    ],
    correctAnswer: 1,
    explanation: "The Four Golden Signals are Latency, Traffic, Errors, and Saturation. CPU Usage is just one component of Saturation."
  },
  {
    id: 5,
    question: "What's the surprising truth about high-performing DevOps teams?",
    options: [
      "They never have outages",
      "They work 24/7 shifts",
      "They fail faster and recover quicker",
      "They avoid making changes to production"
    ],
    correctAnswer: 2,
    explanation: "High-performing teams actually fail MORE frequently but recover in minutes instead of hours. DORA research shows they have 1/5th the failure rate of low performers because they learn from small, frequent failures instead of having rare but catastrophic ones."
  },
  {
    id: 6,
    question: "Why did Google's SRE team ban toil?",
    options: [
      "To make work more fun",
      "To reduce operational costs",
      "To prevent automation",
      "To protect engineering time for innovation"
    ],
    correctAnswer: 3,
    explanation: "Google mandates that SREs spend max 50% time on toil (manual, repetitive tasks) to ensure teams focus on automation and system improvements. If toil exceeds this, they must automate or hand it back to development teams."
  },
  {
    id: 7,
    question: "What's the real purpose of the 'You build it, you run it' principle?",
    options: [
      "To punish developers for bugs",
      "To reduce operational costs",
      "To create better feedback loops",
      "To eliminate operations teams"
    ],
    correctAnswer: 2,
    explanation: "When developers operate their own services, they experience pain points directly and naturally write more operational-friendly code. Amazon found this creates a powerful feedback loop that improves both code quality and operational excellence."
  },
  {
    id: 8,
    question: "Why do modern SRE teams prefer Service Level Objectives (SLOs) over uptime?",
    options: [
      "SLOs are easier to measure",
      "Management prefers SLOs",
      "Uptime is too expensive",
      "SLOs focus on user experience"
    ],
    correctAnswer: 3,
    explanation: "Traditional uptime metrics can show 100% while users experience problems. SLOs measure what users actually care about (like page load times or successful requests) making them a better indicator of real service quality."
  },
  {
    id: 9,
    question: "What's the fundamental difference between CI and CD?",
    options: [
      "CI is for developers, CD is for operations",
      "CI integrates code changes, CD delivers those changes",
      "CI is automated, CD is manual",
      "CI is faster, CD is more thorough"
    ],
    correctAnswer: 1,
    explanation: "Continuous Integration (CI) focuses on automatically integrating code changes from multiple developers into a shared repository with testing. Continuous Delivery/Deployment (CD) extends this by automatically delivering those validated changes to production-like environments or directly to production."
  },
  {
    id: 10,
    question: "Why is Infrastructure as Code (IaC) considered revolutionary for operations?",
    options: [
      "It makes infrastructure cheaper",
      "It eliminates the need for operations teams",
      "It allows infrastructure to be version-controlled, tested, and reproducible",
      "It makes deployments slower but more reliable"
    ],
    correctAnswer: 2,
    explanation: "IaC transforms infrastructure management from manual, error-prone processes into code that can be version-controlled, tested, reviewed, and automatically deployed - bringing software engineering practices to infrastructure and enabling truly reproducible environments."
  },
  {
    id: 11,
    question: "What's the real reason Kubernetes has become the standard for container orchestration?",
    options: [
      "It was created by Google",
      "It provides declarative configuration and self-healing capabilities",
      "It's the easiest container platform to use",
      "It's the fastest container runtime available"
    ],
    correctAnswer: 1,
    explanation: "Kubernetes' success comes from its declarative approach (you specify desired state, not how to achieve it) and self-healing capabilities that automatically restore failed containers and nodes. This operational model fundamentally changed how teams manage container workloads at scale."
  },
  {
    id: 12,
    question: "What is the 'shifting left' principle in DevSecOps?",
    options: [
      "Moving operational concerns to development teams",
      "Integrating security earlier in the development lifecycle",
      "Pushing deployments to earlier in the week",
      "Reducing the number of right-aligned UI elements"
    ],
    correctAnswer: 1,
    explanation: "Shifting left in DevSecOps means integrating security practices and testing earlier in the development process rather than treating it as a final gate. This makes security issues cheaper to fix, reduces delivery delays, and builds security into the product from the start."
  },
  {
    id: 13,
    question: "What is the main advantage of blue-green deployments?",
    options: [
      "They use less server resources",
      "They enable near-zero downtime releases",
      "They are faster than traditional deployments",
      "They require less testing"
    ],
    correctAnswer: 1,
    explanation: "Blue-green deployments maintain two identical production environments. One serves traffic (blue) while the other (green) receives the new release. After verification, traffic is switched to green. This enables near-zero downtime, immediate rollbacks, and proper testing in a production environment before exposure to users."
  },
  {
    id: 14,
    question: "What's the surprising truth about incident postmortems in high-performing organizations?",
    options: [
      "They focus primarily on human error",
      "They require executive approval",
      "They focus on systems and processes, not blame",
      "They lead to disciplinary action for those involved"
    ],
    correctAnswer: 2,
    explanation: "Top-performing organizations conduct blameless postmortems that recognize human error is inevitable and focus instead on improving systems, processes, and safeguards. This creates psychological safety that leads to more honest assessments and better learning from incidents."
  },
  {
    id: 15,
    question: "Why do elite DevOps teams invest heavily in observability beyond monitoring?",
    options: [
      "To satisfy compliance requirements",
      "Because traditional monitoring tools are too expensive",
      "To debug production without needing to reproduce issues",
      "To create more dashboards for management"
    ],
    correctAnswer: 2,
    explanation: "Observability goes beyond monitoring predefined metrics to enabling questions about unknown unknowns. With proper instrumentation (logs, metrics, traces), teams can debug production issues without needing to reproduce them, cutting MTTR dramatically and enabling exploration of system behaviors that weren't anticipated when instrumentation was added."
  },
  {
    id: 16,
    question: "What's the counterintuitive truth about increasing deployment frequency?",
    options: [
      "It actually reduces risk rather than increasing it",
      "It makes teams work longer hours",
      "It leads to more customer complaints",
      "It primarily benefits management metrics"
    ],
    correctAnswer: 0,
    explanation: "Contrary to intuition, deploying more frequently actually reduces risk. Small, frequent changes are easier to test, debug, and roll back when needed. The DORA research shows high-performing teams deploy 208 times more frequently than low performers while maintaining higher stability."
  },
  {
    id: 17,
    question: "What is 'everything as code' and why does it matter?",
    options: [
      "Writing all documentation in programming languages",
      "Representing infrastructure, policies, and pipelines as code",
      "Requiring all employees to learn programming",
      "Eliminating GUI tools entirely"
    ],
    correctAnswer: 1,
    explanation: "Everything as code extends beyond infrastructure to include policy as code, security as code, pipelines as code, etc. This approach brings software engineering practices (version control, testing, review) to all aspects of system design and operations, enabling automation, reproducibility, and scalability beyond what manual processes could achieve."
  },
  {
    id: 18,
    question: "What do companies with elite DevOps performance have in common according to DORA research?",
    options: [
      "They always use the newest technologies",
      "They invest primarily in automation tools",
      "They focus on technical practices, culture, and lean processes together",
      "They hire mostly from top-tier tech companies"
    ],
    correctAnswer: 2,
    explanation: "The DORA research shows that elite performers implement a combination of technical practices (CI/CD, trunk-based development), cultural elements (psychological safety, learning culture), and lean management principles (limiting WIP, visualizing flow). No single dimension is sufficient - excellence requires all three."
  }
];

const DevOpsQuiz = () => {
  const [answers, setAnswers] = useState({});
  const [showExplanations, setShowExplanations] = useState({});

  const handleAnswer = (questionId, selectedIndex) => {
    if (answers[questionId] !== undefined) return; // Already answered
    setAnswers(prev => ({ ...prev, [questionId]: selectedIndex }));
    setShowExplanations(prev => ({ ...prev, [questionId]: true }));
  };

  const getOptionStyle = (questionId, optionIndex) => {
    const selectedAnswer = answers[questionId];
    const correctAnswer = questions.find(q => q.id === questionId)?.correctAnswer;
    
    if (selectedAnswer === undefined) {
      return "bg-foreground/5 border-foreground/10 hover:bg-foreground/10 hover:border-foreground/20 cursor-pointer";
    }
    
    if (optionIndex === correctAnswer) {
      return "bg-emerald-500/20 border-emerald-500/50 text-emerald-300";
    }
    
    if (optionIndex === selectedAnswer && selectedAnswer !== correctAnswer) {
      return "bg-red-500/20 border-red-500/50 text-red-300";
    }
    
    return "bg-foreground/5 border-foreground/10 opacity-50";
  };

  const score = Object.entries(answers).filter(([qId, ans]) => {
    const question = questions.find(q => q.id === parseInt(qId));
    return question && ans === question.correctAnswer;
  }).length;

  const resetQuiz = () => {
    setAnswers({});
    setShowExplanations({});
  };

  return (
    <div className="space-y-8">
      {/* Score Header */}
      <div className="flex items-center justify-between bg-gradient-to-r from-[#00ff9d]/10 to-cyan-500/10 rounded-xl p-6 border border-[#00ff9d]/20">
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-1">DevOps & SRE Quiz</h3>
          <p className="text-foreground/50">Test your knowledge with {questions.length} questions</p>
        </div>
        <div className="flex items-center gap-6">
          <div className="text-center">
            <span className="text-4xl font-bold bg-gradient-to-r from-[#00ff9d] to-cyan-400 bg-clip-text text-transparent">
              {score}
            </span>
            <span className="text-2xl text-foreground/50">/{Object.keys(answers).length}</span>
            <p className="text-xs text-foreground/40 mt-1">Correct</p>
          </div>
          {Object.keys(answers).length > 0 && (
            <button
              onClick={resetQuiz}
              className="px-4 py-2 bg-foreground/10 hover:bg-foreground/20 rounded-lg text-sm text-foreground/70 hover:text-foreground transition-all flex items-center gap-2"
            >
              <FiRefreshCw className="w-4 h-4" />
              Reset Quiz
            </button>
          )}
        </div>
      </div>

      {/* Questions */}
      {questions.map((q, index) => (
        <motion.div
          key={q.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
          className="bg-card rounded-xl border border-foreground/10 overflow-hidden"
        >
          {/* Question Header */}
          <div className="px-6 py-4 border-b border-foreground/5 bg-foreground/5">
            <div className="flex items-start gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-[#00ff9d] to-cyan-500 rounded-lg flex items-center justify-center text-sm font-bold text-black">
                {q.id}
              </span>
              <p className="text-lg text-foreground/90 leading-relaxed">{q.question}</p>
            </div>
          </div>

          {/* Options */}
          <div className="p-6 space-y-3">
            {q.options.map((option, optIndex) => (
              <motion.button
                key={optIndex}
                onClick={() => handleAnswer(q.id, optIndex)}
                disabled={answers[q.id] !== undefined}
                className={`w-full text-left px-5 py-4 rounded-xl border transition-all duration-300 ${getOptionStyle(q.id, optIndex)}`}
                whileHover={answers[q.id] === undefined ? { scale: 1.01 } : {}}
                whileTap={answers[q.id] === undefined ? { scale: 0.99 } : {}}
              >
                <div className="flex items-center gap-4">
                  <span className={`flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center text-sm font-medium ${
                    answers[q.id] !== undefined && optIndex === q.correctAnswer
                      ? "border-emerald-500 text-emerald-400 bg-emerald-500/20"
                      : answers[q.id] === optIndex && optIndex !== q.correctAnswer
                      ? "border-red-500 text-red-400 bg-red-500/20"
                      : "border-foreground/20 text-foreground/50"
                  }`}>
                    {String.fromCharCode(65 + optIndex)}
                  </span>
                  <span className={`${
                    answers[q.id] !== undefined && optIndex === q.correctAnswer
                      ? "text-emerald-300"
                      : answers[q.id] === optIndex && optIndex !== q.correctAnswer
                      ? "text-red-300"
                      : "text-foreground/70"
                  }`}>
                    {option}
                  </span>
                  {answers[q.id] !== undefined && optIndex === q.correctAnswer && (
                    <span className="ml-auto text-emerald-400">✓</span>
                  )}
                  {answers[q.id] === optIndex && optIndex !== q.correctAnswer && (
                    <span className="ml-auto text-red-400">✗</span>
                  )}
                </div>
              </motion.button>
            ))}
          </div>

          {/* Explanation */}
          <AnimatePresence>
            {showExplanations[q.id] && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6">
                  <div className={`p-4 rounded-xl ${
                    answers[q.id] === q.correctAnswer 
                      ? "bg-emerald-500/10 border border-emerald-500/20" 
                      : "bg-amber-500/10 border border-amber-500/20"
                  }`}>
                    <p className="text-sm font-medium text-foreground/80 mb-1">
                      {answers[q.id] === q.correctAnswer ? "✅ Correct!" : "💡 Explanation:"}
                    </p>
                    <p className="text-sm text-foreground/60">{q.explanation}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}

      {/* Completion Message */}
      {Object.keys(answers).length === questions.length && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gradient-to-r from-[#00ff9d]/20 via-cyan-500/20 to-teal-500/20 rounded-xl p-8 border border-[#00ff9d]/30 text-center"
        >
          <h3 className="text-3xl font-bold text-foreground mb-2">Quiz Complete! 🎉</h3>
          <p className="text-xl text-foreground/70 mb-4">
            You scored <span className="text-[#00ff9d] font-bold">{score}</span> out of <span className="text-foreground font-bold">{questions.length}</span>
          </p>
          <p className="text-foreground/50 mb-6">
            {score === questions.length 
              ? "Perfect score! You're a DevOps & SRE master!" 
              : score >= 14 
              ? "Excellent! You have a solid understanding of DevOps & SRE principles."
              : score >= 10
              ? "Good effort! Review the explanations to strengthen your knowledge."
              : "Keep studying! Review the DevOps & SRE concepts."}
          </p>
          <button
            onClick={resetQuiz}
            className="px-6 py-3 bg-gradient-to-r from-[#00ff9d] to-cyan-500 rounded-xl text-black font-medium hover:opacity-90 transition-opacity"
          >
            Retake Quiz
          </button>
        </motion.div>
      )}
    </div>
  );
};

const DevOpsPage = () => {
  return (
    <div className="min-h-screen bg-deep">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#00ff9d]/10 via-transparent to-transparent" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#00ff9d]/10 rounded-full blur-3xl" />
          <div className="absolute top-40 right-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-foreground/5 rounded-full border border-foreground/10 mb-6">
              <FiServer className="text-[#00ff9d]" />
              <span className="text-sm text-foreground/60">DevOps & Site Reliability Engineering</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#00ff9d] via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                DevOps & SRE
              </span>
              <br />
              <span className="text-foreground/90">MCQ Quiz</span>
            </h1>
            
            <p className="text-xl text-foreground/50 max-w-2xl mb-8">
              Test your DevOps knowledge with {questions.length} mind-bending questions covering 
              CI/CD, Kubernetes, observability, incident management, and more.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <DevOpsQuiz />
      </div>

      {/* Footer */}
      <div className="border-t border-foreground/5 mt-12">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <p className="text-center text-foreground/30 text-sm">
            Inspired by best practices from Google SRE, Netflix, Amazon, and DORA research.
            Content is for educational purposes and interview preparation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DevOpsPage;
