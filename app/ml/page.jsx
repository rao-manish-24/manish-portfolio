"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FiLayers, FiZap } from "react-icons/fi";

const mcqQuestions = [
  {
    id: 1,
    question: "In a recommendation system, what is the primary purpose of the Two-Tower architecture?",
    options: [
      "To double the training speed of the model",
      "To separate user and item encoders for precomputed embeddings and efficient ANN search",
      "To create backup models for fault tolerance",
      "To reduce memory usage by half"
    ],
    correctAnswer: 1,
    explanation: "Two-Tower architecture uses separate encoders for users and items, allowing item embeddings to be precomputed and indexed for efficient approximate nearest neighbor (ANN) search at serving time."
  },
  {
    id: 2,
    question: "What is the main purpose of a Feature Store in ML systems?",
    options: [
      "To store trained model weights",
      "To provide centralized feature management with online/offline consistency",
      "To cache prediction results",
      "To store raw training data"
    ],
    correctAnswer: 1,
    explanation: "A Feature Store provides centralized feature management, ensures consistency between training and serving features, and enables feature reuse across multiple models."
  },
  {
    id: 3,
    question: "In cascade ranking for search systems, why do we use multiple stages?",
    options: [
      "To increase model complexity",
      "To balance relevance and latency by using cheap models to filter and expensive models to rank",
      "To handle more languages",
      "To improve data privacy"
    ],
    correctAnswer: 1,
    explanation: "Cascade ranking uses multi-stage funnels where cheap/fast models filter millions of candidates down, and expensive/accurate models rank the remaining hundreds, balancing relevance with latency constraints."
  },
  {
    id: 4,
    question: "What is 'training-serving skew' in ML systems?",
    options: [
      "When the model is trained on GPU but served on CPU",
      "Differences between features used during training vs serving that cause performance degradation",
      "When training takes longer than serving",
      "When the model size changes between training and serving"
    ],
    correctAnswer: 1,
    explanation: "Training-serving skew occurs when there are differences in how features are computed during training versus serving, leading to degraded model performance in production."
  },
  {
    id: 5,
    question: "In a fraud detection system, what is the typical trade-off when tuning the decision threshold?",
    options: [
      "Speed vs accuracy",
      "Precision vs recall (fraud caught vs false positives/customer friction)",
      "Model size vs latency",
      "Training time vs inference time"
    ],
    correctAnswer: 1,
    explanation: "In fraud detection, there's a classic precision-recall trade-off: higher recall catches more fraud but increases false positives (customer friction), while higher precision reduces false positives but may miss fraud cases."
  },
  {
    id: 6,
    question: "What is the purpose of 'shadow deployment' in ML systems?",
    options: [
      "To deploy models in dark data centers",
      "To run new models on production traffic without affecting outcomes for safe validation",
      "To hide model predictions from users",
      "To reduce serving costs"
    ],
    correctAnswer: 1,
    explanation: "Shadow deployment runs a new model on real production traffic in parallel with the current model, but the new model's predictions don't affect actual outcomes, allowing safe validation before full rollout."
  },
  {
    id: 7,
    question: "In LLM serving, what is 'PagedAttention' used for?",
    options: [
      "To split documents into pages for processing",
      "To efficiently manage KV cache memory allocation",
      "To paginate API responses",
      "To compress model weights"
    ],
    correctAnswer: 1,
    explanation: "PagedAttention is a memory management technique that efficiently allocates and deallocates memory for the key-value cache in LLM inference, reducing memory waste and enabling higher throughput."
  },
  {
    id: 8,
    question: "What is the main advantage of using HNSW (Hierarchical Navigable Small World) for vector search?",
    options: [
      "It provides exact nearest neighbor search",
      "It offers high recall with logarithmic search complexity",
      "It requires no memory",
      "It doesn't need an index"
    ],
    correctAnswer: 1,
    explanation: "HNSW is an approximate nearest neighbor algorithm that provides high recall (often >95%) with logarithmic search complexity, making it ideal for large-scale vector search applications."
  },
  {
    id: 9,
    question: "In a news feed ranking system, what is 'position bias' and how is it typically addressed?",
    options: [
      "Bias in political news, addressed by content filtering",
      "Users tend to click items at top positions regardless of relevance, addressed via Inverse Propensity Weighting (IPW)",
      "Server location affecting latency, addressed by CDNs",
      "Model bias towards certain features, addressed by regularization"
    ],
    correctAnswer: 1,
    explanation: "Position bias refers to users' tendency to interact with items shown in higher positions regardless of actual relevance. It's typically corrected using Inverse Propensity Weighting (IPW) during training."
  },
  {
    id: 10,
    question: "What is the purpose of 'model distillation' in ML serving?",
    options: [
      "To remove impurities from the model",
      "To train a smaller, faster model to mimic a larger, more accurate model",
      "To convert models between frameworks",
      "To extract features from the model"
    ],
    correctAnswer: 1,
    explanation: "Model distillation (knowledge distillation) trains a smaller 'student' model to mimic the behavior of a larger 'teacher' model, enabling faster inference while maintaining most of the accuracy."
  },
  {
    id: 11,
    question: "In ads CTR prediction, why is 'calibration' important?",
    options: [
      "To adjust model weights during training",
      "To ensure predicted probabilities match actual click rates for accurate bid optimization",
      "To calibrate hardware for faster inference",
      "To synchronize multiple model replicas"
    ],
    correctAnswer: 1,
    explanation: "Calibration ensures that predicted CTR probabilities accurately reflect true click rates. This is crucial for bid optimization in ad auctions where advertisers pay based on expected value."
  },
  {
    id: 12,
    question: "What is 'concept drift' in production ML systems?",
    options: [
      "When model code changes unexpectedly",
      "When the statistical properties of the target variable change over time",
      "When users forget how to use the system",
      "When servers drift out of sync"
    ],
    correctAnswer: 1,
    explanation: "Concept drift occurs when the statistical relationship between input features and the target variable changes over time, causing model performance to degrade if not detected and addressed."
  },
  {
    id: 13,
    question: "In hybrid search systems, what is 'Reciprocal Rank Fusion (RRF)'?",
    options: [
      "A neural network architecture for search",
      "A method to combine results from multiple retrieval sources based on rank positions",
      "A technique to compress search indexes",
      "A way to encrypt search queries"
    ],
    correctAnswer: 1,
    explanation: "Reciprocal Rank Fusion is a technique to merge results from multiple retrieval sources (e.g., BM25 and dense retrieval) by combining their rank positions, giving higher scores to items ranked well by multiple sources."
  },
  {
    id: 14,
    question: "What is the purpose of 'continuous batching' in LLM serving?",
    options: [
      "To continuously collect training data",
      "To dynamically add/remove requests from batches to maximize GPU utilization",
      "To batch user feedback continuously",
      "To merge model checkpoints"
    ],
    correctAnswer: 1,
    explanation: "Continuous batching dynamically adds new requests to ongoing batches and removes completed ones, maximizing GPU utilization compared to static batching where all requests must complete before starting new ones."
  },
  {
    id: 15,
    question: "In ML system design, what is the 'cold start problem' for recommendations?",
    options: [
      "When servers take too long to boot up",
      "Difficulty providing good recommendations for new users/items with no interaction history",
      "When the model weights are not initialized properly",
      "When the cache is empty after restart"
    ],
    correctAnswer: 1,
    explanation: "The cold start problem refers to the challenge of making quality recommendations for new users (no preference history) or new items (no interaction data). Solutions include content-based fallbacks, popularity-based recommendations, and exploration bonuses."
  },
  {
    id: 16,
    question: "What is 'A/B testing interleaving' and why is it preferred over traditional A/B testing for ranking systems?",
    options: [
      "Running two tests at the same time to save resources",
      "Mixing results from both ranking models in the same result list to reduce variance and detect smaller differences faster",
      "Testing the model on both Android and iOS simultaneously",
      "Alternating between two models every other day"
    ],
    correctAnswer: 1,
    explanation: "Interleaving mixes results from both control and treatment ranking models within the same result list, using user clicks to determine the winner. This approach has lower variance than traditional A/B testing because it controls for query and user variability, allowing faster detection of smaller ranking quality differences."
  }
];

const MCQQuiz = () => {
  const [answers, setAnswers] = useState({});
  const [showExplanations, setShowExplanations] = useState({});

  const handleAnswer = (questionId, selectedIndex) => {
    if (answers[questionId] !== undefined) return; // Already answered
    setAnswers(prev => ({ ...prev, [questionId]: selectedIndex }));
    setShowExplanations(prev => ({ ...prev, [questionId]: true }));
  };

  const getOptionStyle = (questionId, optionIndex) => {
    const selectedAnswer = answers[questionId];
    const correctAnswer = mcqQuestions.find(q => q.id === questionId)?.correctAnswer;
    
    if (selectedAnswer === undefined) {
      return "bg-secondary border-transparent hover:bg-tertiary cursor-pointer";
    }
    
    if (optionIndex === correctAnswer) {
      return "bg-[#1B4D3E] border-[#00FF9D] text-[#00FF9D]";
    }
    
    if (optionIndex === selectedAnswer && selectedAnswer !== correctAnswer) {
      return "bg-[#4D1B1B] border-red-500 text-red-400";
    }
    
    return "bg-secondary border-transparent opacity-50";
  };

  const score = Object.entries(answers).filter(([qId, ans]) => {
    const question = mcqQuestions.find(q => q.id === parseInt(qId));
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
          <h3 className="text-2xl font-bold text-foreground mb-1">ML System Design Quiz</h3>
          <p className="text-foreground/50">Test your knowledge with {mcqQuestions.length} questions</p>
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
              className="px-4 py-2 bg-foreground/10 hover:bg-foreground/20 rounded-lg text-sm text-foreground/70 hover:text-foreground transition-all"
            >
              Reset Quiz
            </button>
          )}
        </div>
      </div>

      {/* Questions */}
      {mcqQuestions.map((q, index) => (
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
                      ? "border-[#00FF9D] text-[#00FF9D] bg-[#1B4D3E]"
                      : answers[q.id] === optIndex && optIndex !== q.correctAnswer
                      ? "border-red-500 text-red-400 bg-red-500/20"
                      : "border-foreground/20 text-foreground/50"
                  }`}>
                    {String.fromCharCode(65 + optIndex)}
                  </span>
                  <span className={`${
                    answers[q.id] !== undefined && optIndex === q.correctAnswer
                      ? "text-[#00FF9D]"
                      : answers[q.id] === optIndex && optIndex !== q.correctAnswer
                      ? "text-red-300"
                      : "text-foreground/70"
                  }`}>
                    {option}
                  </span>
                  {answers[q.id] !== undefined && optIndex === q.correctAnswer && (
                    <span className="ml-auto text-[#00FF9D]">✓</span>
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
                      ? "bg-[#1B4D3E]/50 border border-[#00FF9D]/30" 
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
      {Object.keys(answers).length === mcqQuestions.length && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gradient-to-r from-[#00ff9d]/20 via-cyan-500/20 to-teal-500/20 rounded-xl p-8 border border-[#00ff9d]/30 text-center"
        >
          <h3 className="text-3xl font-bold text-foreground mb-2">Quiz Complete! 🎉</h3>
          <p className="text-xl text-foreground/70 mb-4">
            You scored <span className="text-[#00ff9d] font-bold">{score}</span> out of <span className="text-foreground font-bold">{mcqQuestions.length}</span>
          </p>
          <p className="text-foreground/50 mb-6">
            {score === mcqQuestions.length 
              ? "Perfect score! You're ready for your ML System Design interview!" 
              : score >= 13 
              ? "Great job! You have a solid understanding of ML systems."
              : score >= 9
              ? "Good effort! Review the explanations to strengthen your knowledge."
              : "Keep studying! Review the ML system design concepts."}
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

const MLSystemDesignPage = () => {
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
              <FiLayers className="text-[#00ff9d]" />
              <span className="text-sm text-foreground/60">Machine Learning System Design</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#00ff9d] via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                ML System Design
              </span>
              <br />
              <span className="text-foreground/90">MCQ Quiz</span>
            </h1>
            
            <p className="text-xl text-foreground/50 max-w-2xl mb-8">
              Test your knowledge of production ML systems with {mcqQuestions.length} interview-style 
              multiple choice questions covering recommendation systems, LLM serving, and more.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <MCQQuiz />
      </div>

      {/* Footer */}
      <div className="border-t border-foreground/5 mt-12">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <p className="text-center text-foreground/30 text-sm">
            Inspired by ML systems at Google, Meta, Netflix, and other tech giants. 
            Content is for educational purposes and interview preparation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MLSystemDesignPage;
