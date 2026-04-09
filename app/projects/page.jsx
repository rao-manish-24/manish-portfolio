"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { BsGithub, BsChevronDown, BsChevronUp, BsBoxArrowUpRight } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

const projects = [
  // AI & Full-Stack Applications
  {
    num: "01",
    category: "AI-Powered News Aggregation System",
    title: "AI News Aggregator",
    description:
      "An intelligent, AI-powered news aggregation system using GPT-4.1 and GPT-4o-mini that automatically scrapes, processes, and delivers personalized AI news digests via email.",
    detailedPoints: [
      "Built multi-source content scrapers for YouTube (with transcript extraction), OpenAI news, and Anthropic blog posts",
      "Implemented AI-powered summarization using GPT-4o-mini and personalized article ranking using GPT-4.1",
      "Designed a curator agent that scores articles (0-10) based on user profile relevance",
      "Developed automated email digest pipeline with beautifully formatted HTML newsletters via Gmail SMTP",
      "Managed persistent storage with PostgreSQL and SQLAlchemy with duplicate detection and incremental processing",
    ],
    stack: ["Python", "OpenAI GPT-4.1", "PostgreSQL", "LangChain", "Docker"],
    github: "https://github.com/rao-manish-24/ai-news-aggregator",
  },
  {
    num: "02",
    category: "AI-Powered Movie Streaming Platform",
    title: "Needflicks",
    description:
      "A full-stack movie streaming platform with AI-powered sentiment analysis using LangChain & OpenAI, personalized recommendations, and JWT-based secure authentication.",
    detailedPoints: [
      "Built a Go/Gin backend with MongoDB, featuring JWT authentication with access/refresh token rotation via HTTP-only cookies",
      "Integrated LangChain with OpenAI for automated sentiment analysis of admin movie reviews, auto-assigning rankings",
      "Developed a personalized recommendation engine based on user favorite genres and AI-classified movie rankings",
      "Created a React 19 frontend with role-based access control (Admin/User), video streaming via React Player, and responsive Netflix-inspired UI",
      "Implemented secure architecture with bcrypt password hashing, CORS middleware, input validation, and admin-only routes",
    ],
    stack: ["Go", "React", "MongoDB", "OpenAI", "LangChain"],
    live: "https://needflicks.vercel.app/",
    github: "https://github.com/rao-manish-24/Needflicks",
  },

  // E-commerce Platforms
  {
    num: "03",
    category: "E-commerce Application",
    title: "Crown Clothing",
    description:
      "A modern React & Vite-based e-commerce platform for browsing products, managing carts, and secure checkout with Stripe.",
    detailedPoints: [
      "Implemented user authentication using Firebase Auth (Google Popup & Email/Password)",
      "Fetched and stored products, categories, and user data in Firestore",
      "Managed global state for cart and shop with React Context API",
      "Integrated Stripe payments via Netlify serverless function for secure checkout",
      "Styled with Sass and styled-components for responsive UI",
    ],
    stack: ["React", "Vite", "Firebase", "Firestore", "Stripe"],
    live: "https://crown-clothings-store.netlify.app/",
    github: "https://github.com/rao-manish-24/crown_clothing_fullstack",
  },
  {
    num: "04",
    category: "Fullstack Ecommerce Web Application in Go",
    title: "Go E-commerce Platform",
    description:
      "Go Ecommerce Web Application with MongoDB, user authentication & go modules for dependency management",
    detailedPoints: [
      "Implemented secure user authentication and authorization system",
      "Built RESTful APIs for order management and inventory control",
      "Integrated payment processing system with error handling",
      "Developed real-time inventory tracking system",
      "Created admin dashboard for order and inventory management",
    ],
    stack: ["Golang", "MongoDB", "Docker"],
    github: "https://github.com/rao-manish-24/Go--Ecommerce-Application",
  },
  {
    num: "05",
    category: "Full-Stack Video Platform",
    title: "YouTube Clone",
    description:
      "A full-featured YouTube clone built with Django and ImageKit.io for video storage and HLS adaptive bitrate streaming with user authentication and channel pages.",
    detailedPoints: [
      "Built a Django backend with user authentication (register, login, logout) and video upload support up to 100MB (MP4, WebM, MOV, AVI)",
      "Integrated ImageKit.io for video storage with HLS adaptive bitrate streaming from 240p to 1080p",
      "Implemented like/dislike voting system with real-time updates and channel pages for user video collections",
      "Developed automatic username watermarking on thumbnails and custom thumbnail upload functionality",
      "Designed a responsive dark-theme UI inspired by YouTube with WhiteNoise static file serving and Railway deployment",
    ],
    stack: ["Django", "Python", "ImageKit.io", "SQLite", "Railway"],
    live: "https://youtube-clone-production-d9d9.up.railway.app/",
    github: "https://github.com/rao-manish-24/youtube-clone",
  },

  // Microservices & Backend
  {
    num: "06",
    category: "Golang Microservices",
    title: "Toll Calculation using Go Microservices",
    description:
      "A suite of Go-based microservices processing simulated OBU data to calculate toll fees, leveraging Kafka, gRPC, and Prometheus.",
    detailedPoints: [
      "Built four microservices (OBU, Data Receiver, Distance Calculator, Invoice Aggregator) in Go",
      "Orchestrated real-time data flow with Apache Kafka messaging",
      "Exposed REST & gRPC endpoints, including a go-kit based aggregator",
      "Instrumented with Prometheus & Grafana for metrics and monitoring",
      "Containerized and orchestrated via Docker Compose",
    ],
    stack: ["Go", "Kafka", "gRPC", "Prometheus", "Grafana"],
    github:
      "https://github.com/rao-manish-24/toll-calculation-using-go-microservices",
  },
  {
    num: "07",
    category: "URL Shortener Service",
    title: "Go URL Shortener",
    description:
      "High-performance URL shortening service built with Go and Redis",
    detailedPoints: [
      "Built scalable URL shortening service using Go-Fiber framework",
      "Implemented Redis for high-speed URL mapping storage",
      "Developed rate limiting and security features",
      "Created analytics dashboard for URL tracking",
      "Achieved sub-millisecond response times",
    ],
    stack: ["Go", "Redis"],
    github:
      "https://github.com/rao-manish-24/Build-your-own-URL-Shortener-using-Redis-and-Go-Fiber",
  },

  // Data Engineering & Real-Time Pipelines
  {
    num: "08",
    category: "Health Insurance Data Indexing System",
    title: "JSON Object Indexing Platform",
    description:
      "A high-performance indexing system for healthcare data processing",
    detailedPoints: [
      "Developed a scalable Python-Flask API that processes and indexes complex healthcare JSON documents",
      "Implemented real-time data processing using RabbitMQ message queues with 99.9% reliability",
      "Optimized search performance using Elasticsearch, achieving 50ms average query response time",
      "Integrated Redis caching layer reducing repeated query load by 40%",
      "Designed fault-tolerant architecture handling 100K+ daily insurance claim records",
    ],
    stack: ["Python", "Flask", "Elasticsearch", "Redis", "RabbitMQ"],
    github:
      "https://github.com/rao-manish-24/Adv-Big-Data-Indexing--Scalable-Search-Indexing-for-JSON-Objects-of-Hospital-Plans",
  },
  {
    num: "09",
    category: "NYC Ride Data Pipeline",
    title: "ETL Data Pipeline",
    description: "Scalable ETL pipeline for processing NYC ride data",
    detailedPoints: [
      "Developed high-throughput data processing pipeline",
      "Implemented parallel processing using Dask",
      "Optimized data storage using DuckDB",
      "Created automated data quality checks",
      "Processed over 1TB of ride data efficiently",
    ],
    stack: ["Python", "Pandas", "Dask", "DuckDB", "Docker"],
    github: "",
  },

  // Machine Learning & AI Agents
  {
    num: "10",
    category: "Credit Limit Allocation & Loan Defaulter Prediction",
    title: "ML-Powered Credit Risk Analysis",
    description:
      "Advanced machine learning system for credit risk assessment and loan default prediction",
    detailedPoints: [
      "Developed ML models achieving 92% accuracy in default prediction",
      "Processed and analyzed 100K+ customer records for training",
      "Implemented feature engineering for 20+ financial indicators",
      "Created interactive dashboards for risk visualization",
      "Reduced false positives by 35% compared to traditional methods",
    ],
    stack: ["Python", "Scikit-learn", "Pandas", "Numpy", "Seaborn"],
    github:
      "https://github.com/rao-manish-24/DataScience--Credit-Limit-Allocator-using-Machine-Learning",
  },
  {
    num: "11",
    category: "CVE-GraphRAG using Kafka and Neo4j",
    title: "Graph-based RAG System",
    description:
      "Advanced CVE analysis system using graph databases and RAG architecture",
    detailedPoints: [
      "Built scalable data pipeline processing 100K+ CVE records",
      "Implemented real-time vulnerability detection system",
      "Developed graph-based query optimization reducing response time by 60%",
      "Integrated OpenAI API for intelligent vulnerability analysis",
      "Created interactive visualization dashboard for security insights",
    ],
    stack: ["Kafka", "OpenAI", "Streamlit", "Snowflake", "Neo4j"],
    github: "https://github.com/rao-manish-24/CVE-GraphRAG",
  },
  {
    num: "12",
    category: "CVE-Guardian and Container Image Scanning",
    title: "CVE-Guardian System",
    description:
      "Advanced vulnerability detection system using Llama-Index and Langchain",
    detailedPoints: [
      "Developed an automated vulnerability scanning system for container images",
      "Integrated Llama-Index and Langchain for intelligent vulnerability analysis",
      "Implemented real-time monitoring and alert system",
      "Created comprehensive reporting dashboard",
      "Reduced false positive detection rate by 45%",
    ],
    stack: ["Kafka in Go", "OpenAI API", "TailwindCSS", "PGVector"],
    github: "https://github.com/cve-data-engineering",
  },

  // Computer Vision & Deep-Learning
  {
    num: "13",
    category: "Computer Vision Project",
    title: "Depth Anything V2 Vision System",
    description:
      "Comprehensive real-time image and video processing toolkit using OpenCV and neural networks",
    detailedPoints: [
      "Developed advanced C++ applications for real-time image and video processing",
      "Integrated Depth Anything V2 neural network for accurate depth estimation",
      "Implemented multiple custom filters including optimized Gaussian blur and Sobel edge detection",
      "Created interactive face detection with selective colorization features",
      "Built depth-based visual effects including fog simulation and embossing",
    ],
    stack: ["C++", "OpenCV", "ONNX Runtime", "CMake"],
    github: "",
  },
  {
    num: "14",
    category: "Computer Vision & Deep Learning",
    title: "SiglipVision Transformer",
    description:
      "From-scratch PyTorch implementation of Google&apos;s SiglipVision model with validation against Hugging Face",
    detailedPoints: [
      "Built complete implementation of Google&apos;s vision transformer architecture for image understanding",
      "Developed custom vision embeddings layer with patch extraction and positional encoding",
      "Implemented multi-head attention mechanism with scaled dot-product attention",
      "Created validation system to verify output compatibility with Hugging Face transformers library",
      "Designed visualization tools for patch embeddings and model attention patterns",
    ],
    stack: ["PyTorch", "HuggingFace", "Python", "torchvision"],
    github: "",
  },
  {
    num: "15",
    category: "Real-Time Computer Vision",
    title: "2D Object Recognition System",
    description:
      "A comprehensive C++ real-time 2D object recognition system using custom-built computer vision algorithms for translation, scale, and rotation invariant object identification.",
    detailedPoints: [
      "Implemented K-means (ISODATA) adaptive thresholding, morphological operations, and two-pass connected components analysis from scratch in C++",
      "Engineered an 11-feature vector including Hu moments, compactness, eccentricity, and aspect ratio for robust shape description",
      "Built Nearest Neighbor and K-Nearest Neighbor classifiers with multiple distance metrics (Euclidean, Cosine, L1, L-infinity)",
      "Developed an interactive training mode with CSV-based object database and confusion matrix evaluation framework",
      "Achieved 85-95% accuracy at 30+ FPS with real-time oriented bounding box and axis visualization",
    ],
    stack: ["C++", "OpenCV", "CMake"],
    github: "https://github.com/rao-manish-24/real-time-2d-object-recognition",
  },

  // Design-Patterns Demo
  {
    num: "16",
    category: "Object-Oriented Design & Architecture",
    title: "Multi-Pattern Weather Forecasting System",
    description:
      "Sophisticated Java application demonstrating seven design patterns through a weather forecasting system",
    detailedPoints: [
      "Designed a system implementing Builder, Factory, Singleton, Decorator, Strategy, Composite, and Adapter patterns",
      "Developed multi-location weather forecasting with temperature and precipitation modeling",
      "Created regional weather analysis through composite location objects",
      "Implemented multiple algorithmic weather modeling strategies",
      "Built an extensible architecture allowing easy addition of new locations and prediction models",
    ],
    stack: ["Java", "OO Design", "Design Patterns"],
    github: "https://github.com/rao-manish-24/Weather-Forecasting-for-Multiple-Locations",
  },
];

/* ── single project card ─────────────────────────────────────── */
const ProjectCard = ({ project, index }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * Math.min(index, 8), duration: 0.5, ease: "easeOut" }}
      className="group relative flex flex-col rounded-2xl border border-foreground/10 bg-secondary/50 hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5 min-h-[420px]"
    >
      {/* ── accent bar at top ── */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent/0 via-accent/60 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl" />

      <div className="p-6 xl:p-8 flex flex-col flex-1">
        {/* ── header row: number + github ── */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-5xl font-extrabold text-accent/15 select-none leading-none">
            {project.num}
          </span>
          <div className="flex items-center gap-3">
            {project.live && (
              <Link
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/15 text-accent hover:bg-accent hover:text-dark text-xs font-medium transition-all duration-200"
              >
                <BsBoxArrowUpRight className="text-xs" />
                <span>Live</span>
              </Link>
            )}
            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-foreground/40 hover:text-accent transition-colors text-sm"
              >
                <BsGithub className="text-lg" />
                <span className="hidden sm:inline">Source</span>
              </Link>
            )}
          </div>
        </div>

        {/* ── title ── */}
        <h3 className="text-xl xl:text-2xl font-bold text-foreground mb-1 group-hover:text-accent transition-colors duration-300 line-clamp-2 min-h-[56px]">
          {project.title}
        </h3>

        {/* ── category badge ── */}
        <span className="inline-block text-xs font-medium tracking-wide uppercase text-accent/70 mb-4 line-clamp-1">
          {project.category}
        </span>

        {/* ── description ── */}
        <p className="text-sm leading-relaxed text-foreground/60 mb-5 line-clamp-3 min-h-[60px]">
          {project.description}
        </p>

        {/* ── tech stack pills ── */}
        <div className="flex flex-wrap items-center gap-2 mb-5 min-h-[64px]">
          {project.stack.map((tech, i) => (
            <span
              key={i}
              className="inline-flex items-center h-7 px-3 text-xs font-medium rounded-full bg-accent/10 text-accent border border-accent/20 whitespace-nowrap"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* ── expandable key features ── */}
        <div className="mt-auto">
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-2 text-sm font-medium text-foreground/50 hover:text-accent transition-colors cursor-pointer"
          >
            {expanded ? <BsChevronUp /> : <BsChevronDown />}
            {expanded ? "Hide Details" : "Key Highlights"}
          </button>

          <motion.div
            initial={false}
            animate={{
              height: expanded ? "auto" : 0,
              opacity: expanded ? 1 : 0,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <ul className="mt-3 space-y-2 border-t border-foreground/5 pt-3">
              {project.detailedPoints.map((point, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-foreground/60"
                >
                  <span className="text-accent mt-0.5 shrink-0">&#8227;</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

/* ── page component ──────────────────────────────────────────── */
const Projects = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] py-12 xl:py-16 bg-deep"
    >
      <div className="container mx-auto px-4 xl:px-0">
        {/* ── page heading ── */}
        <div className="mb-12 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.5 }}
            className="text-4xl xl:text-5xl font-bold text-foreground mb-3"
          >
            Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.7, duration: 0.5 }}
            className="text-foreground/50 text-lg max-w-2xl mx-auto"
          >
            Here are some of the projects I have worked on.
          </motion.p>
        </div>

        {/* ── card grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-8 items-start">
          {projects.map((project, index) => (
            <ProjectCard key={project.num} project={project} index={index} />
          ))}
        </div>

        {/* ── image below projects ── */}
        <div className="mt-16 flex justify-center">
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/assets/good-code.webp`}
            alt="Good code"
            width={800}
            height={400}
            className="rounded-2xl object-cover max-w-full h-auto"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
