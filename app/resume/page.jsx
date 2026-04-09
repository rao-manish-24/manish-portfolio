"use client";

import { useState } from "react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaNodeJs,
  FaPython,
  FaJava,
  FaDocker,
  FaAws,
  FaGitAlt,
  FaReact,
  FaLinkedin,
  FaGithub,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCertificate,
  FaTrophy,
} from "react-icons/fa";

import { 
  SiGo, 
  SiKubernetes, 
  SiTerraform, 
  SiApachekafka,
  SiNeo4J,
  SiMongodb,
  SiSnowflake,
  SiApacheairflow,
  SiGraphql,
  SiFlask,
  SiFastapi,
  SiScikitlearn,
  SiPandas,
  SiPlotly,
  SiTableau,
  SiGrafana,
  SiPrometheus,
  SiApachespark,
  SiJenkins,
  SiGooglecloud,
  SiMicrosoftazure,
  SiTypescript,
  SiRedux,
  SiVuedotjs,
  SiCplusplus,
  SiScala,
  SiRabbitmq,
  SiRedis,
  SiElasticsearch,
  SiOpenai,
} from "react-icons/si";

// Contact info
const contact = {
  name: "Manish Rao",
  phone: "512-829-1911",
  email: "manish.r@mycvscout.com",
  linkedin: "linkedin.com/in/raomanish9538",
  github: "github.com/rao-manish-24",
  location: "Dallas, Texas",
};

// Education data
const education = {
  title: "Education",
  items: [
    {
      institution: "Northeastern University",
      degree: "Master of Science in Software Engineering Systems",
      duration: "Sep 2023 – May 2025",
      location: "Boston, MA",
      courses: ["Data Science", "Algorithms", "Design Patterns", "Cloud Computing", "Gen AI", "Data Engineering with LLM"],
      logo: `${process.env.NEXT_PUBLIC_BASE_PATH}/assets/northeastern-university-logo.jpg`
    },
    {
      institution: "NMAM Institute of Technology",
      degree: "Bachelor of Engineering in Computer Science",
      duration: "Aug 2016 - July 2020",
      location: "Karnataka, India",
      courses: ["Machine Learning", "Data Structures", "DevOps", "Unix", "NLP", "Discrete Math", "Big Data", "Web Dev"],
    },
  ],
};

// Work Experience data
const experience = {
  title: "Work Experience",
  items: [
    {
      company: "JP MORGAN CHASE & CO.",
      position: "Software Engineer",
      duration: "Jan 2025 - Present",
      location: "Dallas, Texas",
      responsibilities: [
        "Designed and implemented secure, high-throughput payment APIs using Java, Spring Boot, and Spring Security supporting ACH transfers, internal account settlements, and authorization workflows handling high-volume concurrent requests.",
        "Implemented OAuth2 and JWT-based authentication integrated with internal identity services and API gateway layers enabling secure token-based authorization across multiple financial microservices.",
        "Optimized PostgreSQL schemas, indexing strategies, and transactional queries for payment records and settlement logs improving reconciliation and transaction lookup performance by 35% under high concurrency.",
        "Developed payment validation and fraud detection microservices integrating internal compliance systems and asynchronous Kafka event streams to analyze transaction patterns before payment authorization.",
        "Applied Redis-based caching and idempotency strategies for payment session and account validation data reducing transaction processing latency from 350ms to under 120ms during peak banking traffic.",
        "Containerized payment services using Docker and deployed on AWS EKS with Kubernetes autoscaling and Helm-based deployments integrated into Jenkins CI/CD pipelines enabling reliable releases and scalable infrastructure.",
        "Partnered with the data science team to build an internal AI-powered engineering assistant using Generative AI APIs, prompt engineering, and Hugging Face transformer models to securely query internal payment documentation reducing troubleshooting time by 25%.",
      ]
    },
    {
      company: "ACCENTURE - Disocvery Bank, SA",
      position: "Software Engineer",
      duration: "Jan 2021 - Jul 2023",
      location: "India",
      responsibilities: [
        "Constructed backend services for digital banking transactions, account management, and payment processing using Java, Spring Boot, Hibernate, and REST APIs, reducing API latency from 5s to under 2s and improving reliability for high-volume banking operations.",
        "Orchestrated event-driven microservices using Apache Kafka enabling asynchronous processing of payment workflows, account updates, and notification pipelines improving throughput and service decoupling.",
        "Formed React.js dashboards using TypeScript integrated with Spring Boot APIs enabling real-time monitoring of payment processing, account activity, and fraud alerts for banking operations teams.",
        "Managed AWS deployments using EC2, S3, and RDS with Docker containers and Terraform infrastructure provisioning enabling automated environment setup and scalable deployments.",
        "Formulated and optimized PostgreSQL database schemas and indexing strategies for transaction history and reconciliation modules improving batch processing and reporting performance.",
        "Established JWT authentication and role-based access control for secure banking APIs and standardized API documentation using OpenAPI/Swagger improving service discoverability across teams.",
        "Strengthened service reliability by implementing automated tests using JUnit and Mockito and introducing application monitoring using Prometheus and Grafana dashboards.",
        "Provided mentorship and technical guidance to junior engineers, conducting code reviews, knowledge-sharing sessions, and pairing on complex microservices tasks to improve team productivity and code quality.",
      ]
    },
    {
      company: "TATVASOFT",
      position: "Software Engineer",
      duration: "Jul 2019 - Dec 2020",
      location: "India",
      responsibilities: [
        "Architected backend services using Node.js and Express.js for a supply chain platform implementing REST APIs for order processing, shipment tracking, and inventory updates supporting 5,000+ monthly transactions.",
        "Built responsive front-end components using React.js, JavaScript, and Bootstrap improving dashboard usability and reducing page load time by 20% for logistics and warehouse operations teams.",
        "Engineered and optimized MySQL database schemas, queries, and stored procedures improving query performance by 25% and enabling reliable synchronization across warehouse systems.",
        "Integrated third-party logistics APIs and implemented data validation workflows improving shipment tracking accuracy and reducing operational updates.",
        "Collaborated in Agile development cycles using Jira for sprint planning, backlog tracking, code reviews, and Git-based workflows contributing to bi-weekly releases and resolving production issues.",
      ]
    },
  ],
};

// Technical Skills organized by category
const technicalSkills = {
  title: "Technical Skills",
  categories: [
    {
      name: "Languages",
      skills: ["Java", "Python", "JavaScript", "TypeScript", "SQL", "Go", "C++", "Scala", "HTML", "CSS"],
      icon: "💻"
    },
    {
      name: "Backend & Frameworks",
      skills: ["Spring Boot", "Spring Security", "Hibernate", "Node.js", "Express.js", "FastAPI", "Flask", "GraphQL", "REST APIs"],
      icon: "📚"
    },
    {
      name: "Frontend",
      skills: ["React", "Angular", "Redux", "Bootstrap", "Tailwind CSS", "Vue"],
      icon: "🖥️"
    },
    {
      name: "Databases & Messaging",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Kafka", "Snowflake", "Neo4j", "Cassandra", "Elasticsearch"],
      icon: "🗄️"
    },
    {
      name: "Cloud & DevOps",
      skills: ["AWS", "GCP", "Docker", "Kubernetes", "Terraform", "Jenkins", "Helm", "GitHub Actions", "GitLab CI", "Nginx"],
      icon: "☁️"
    },
    {
      name: "Observability & Testing",
      skills: ["Prometheus", "Grafana", "ELK Stack", "JUnit", "Mockito", "OpenAPI/Swagger"],
      icon: "📊"
    },
    {
      name: "AI/ML & Tools",
      skills: ["Hugging Face", "LangChain", "LlamaIndex", "RAG", "Scikit-Learn", "PyTorch", "TensorFlow", "Git", "Jira", "Agile"],
      icon: "🤖"
    },
  ]
};

// Projects data
const projects = {
  title: "Projects",
  items: [
    {
      name: "Indexing Structured JSON Objects using Elastic Search & RabbitMQ",
      subtitle: "Health Insurance Records",
      github: "#",
      highlights: [
        "Architected a backend system using Flask to ingest, index, and search large scale JSON documents. Integrated Redis for caching frequent queries, improving response speed by 30%. Requests for create, update, and delete operations are queued in RabbitMQ.",
        "Secured web application by authorizing HTTP requests with OAuth 2.0 for authorization, Google IDP for secure web token authentication.",
      ],
      tags: ["Flask", "Elastic Search", "RabbitMQ", "Redis", "OAuth 2.0"]
    },
    {
      name: "CVE Guardian using Data Engineering Tools, LlamaIndex, Neo4j & OpenAI",
      github: "#",
      highlights: [
        "Vulnerability Details and Container Image Scanning for Vulnerability using CVE & NVD Dataset, using Airflow for event based triggering, Kafka for Producer and Consumer in Go and Python to load CVE data from 1999 to 2024, Snowflake for persistent storage.",
        "Generated embeddings of each CVE data consumed via Kafka & stored each embedding in a Neo4j schema using text-embedding-3-large.",
      ],
      tags: ["Airflow", "Kafka", "Neo4j", "OpenAI", "Snowflake", "LlamaIndex"]
    },
    {
      name: "Alfred Agent, Party Planning for Wayne Manor",
      subtitle: "using smolagents",
      github: "#",
      highlights: [
        "Developed AI agent framework using smolagents and Hugging Face's Inference API (Qwen2.5-Coder-32B-Instruct), implementing a multi-step reasoning workflow enabling natural language to executable conversion with persistence capabilities via Hugging Face Hub.",
        "Integrated enterprise-grade monitoring using OpenTelemetry and Langfuse with comprehensive execution metrics tracking.",
      ],
      tags: ["smolagents", "Hugging Face", "OpenTelemetry", "Langfuse", "AI Agents"]
    },
    {
      name: "Sketch Generation using GANs, CUHK Data & Deep Learning",
      github: "#",
      highlights: [
        "Created cGAN to generate realistic images from sketches, enhancing SSIM from 0.617 to 0.814 & PSNR from 17.73 to 24.17 with Gamma Correction. Engineered cGAN architecture optimized for GPU computing with 37% training acceleration through CUDA optimization.",
        "Assessed the generation quality of Gamma Corrected GANs by training ResNet-50 Classifier on CUHK Dataset",
      ],
      tags: ["GANs", "Deep Learning", "CUDA", "ResNet-50", "Computer Vision"]
    },
  ]
};

// Achievements data
const achievements = {
  title: "Achievements & Certifications",
  items: [
    {
      title: "Accenture Celebrates Excellence (ACE) Award",
      type: "award",
      link: null,
    },
    {
      title: "LinkedIn Certifications",
      type: "certification",
      link: "https://www.linkedin.com/in/raomanish9538/overlay/Certifications/1624713061/treasury/?profileId=ACoAAEIX3RQBIQjRRIinAn3dvjxd3KyDKnOlxmg",
    },
    {
      title: "LangChain: Introduction to Agent Observability & Evaluations",
      type: "certification",
      link: "https://academy.langchain.com/certificates/h7nid0zb8a",
    },
    {
      title: "LangChain: Deep Research with LangGraph",
      type: "certification",
      link: "https://academy.langchain.com/certificates/rsfel6ali6",
    },
    {
      title: "Evaluating AI Agents",
      type: "certification",
      link: "https://learn.deeplearning.ai/accomplishments/7c572a03-b117-4f16-ae9a-eec706cec7f4",
    },
    {
      title: "Building and Evaluating Data Agents",
      type: "certification",
      link: "https://learn.deeplearning.ai/accomplishments/e26c9bff-c1a4-49ea-94dd-f35434071341",
    },
    {
      title: "Knowledge Graphs for RAG",
      type: "certification",
      link: "https://learn.deeplearning.ai/accomplishments/51d28601-7c8b-4fb8-8573-7f1282a6899f",
    },
    {
      title: "Building AI Voice Agents for Production",
      type: "certification",
      link: "https://learn.deeplearning.ai/accomplishments/6c54e0ca-b630-480c-aec8-deb113f87f80",
    },
    {
      title: "Knowledge Graphs for AI Agent: API Discovery",
      type: "certification",
      link: "https://learn.deeplearning.ai/accomplishments/23fc5098-7ada-44e3-b7f2-3476d750004c",
    },
    {
      title: "Long-Term Agentic Memory With LangGraph",
      type: "certification",
      link: "https://learn.deeplearning.ai/accomplishments/ff9653a8-782a-42b3-afe6-ef3fe70e918e",
    },
    {
      title: "LangChain: Introduction to LangGraph",
      type: "certification",
      link: "https://academy.langchain.com/certificates/0ztgnluvdm",
    },
    {
      title: "Building Code Agents with Hugging Face smolagents",
      type: "certification",
      link: "https://learn.deeplearning.ai/accomplishments/b4d2f6fe-c1d6-48bc-a394-1321a5ca3e5e",
    },
    {
      title: "AI Agents in LangGraph",
      type: "certification",
      link: "https://learn.deeplearning.ai/accomplishments/d17c1d05-443d-4b9e-bc7f-e3a9281b991e",
    },
    {
      title: "Orchestrating Workflows for GenAI Applications",
      type: "certification",
      link: "https://learn.deeplearning.ai/accomplishments/095fbdbf-1a5f-4b7b-a00f-96c2058e6cdd",
    },
    {
      title: "Agentic Knowledge Graph Construction",
      type: "certification",
      link: "https://learn.deeplearning.ai/accomplishments/80e1bbb8-bfc1-467f-bf4e-b69171a6cab0",
    },
    {
      title: "Neo4j Graph Data Science Certification",
      type: "certification",
      link: "https://graphacademy.neo4j.com/c/40ad566d-c188-4835-af90-316ec5611cd9/",
    },
    {
      title: "Neo4j Certified Professional",
      type: "certification",
      link: "https://graphacademy.neo4j.com/c/f0e6e550-b30d-4d82-a030-80df46f4ce11/",
    },
    {
      title: "Pydantic for LLM Workflows",
      type: "certification",
      link: "https://learn.deeplearning.ai/accomplishments/fb120a54-858e-4475-ab6b-61583380f55a",
    },
  ]
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion, AnimatePresence } from "framer-motion";

const Resume = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.2, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-screen py-8 xl:py-12"
    >
      <div className="container mx-auto">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-10"
        >
          {/* Name and Title */}
          <div className="text-center mb-8">
            <h1 className="text-5xl xl:text-6xl font-bold mb-4 bg-gradient-to-r from-foreground via-foreground to-accent bg-clip-text text-transparent">
              {contact.name}
            </h1>
            <p className="text-xl text-foreground/60">Senior Software Engineer | MS in Software Engineering Systems @ Northeastern University, Boston, MA | B.E in Computer Science @ NMAM Institute of Technology, Karnataka, India</p>
          </div>

          {/* Contact Info Bar */}
          <div className="flex flex-wrap justify-center gap-4 xl:gap-8 text-sm">
            <a href={`tel:${contact.phone}`} className="flex items-center gap-2 text-foreground/70 hover:text-accent transition-colors group">
              <span className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <FaPhone className="text-accent text-xs" />
              </span>
              <span>{contact.phone}</span>
            </a>
            <a href={`mailto:${contact.email}`} className="flex items-center gap-2 text-foreground/70 hover:text-accent transition-colors group">
              <span className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <FaEnvelope className="text-accent text-xs" />
              </span>
              <span>{contact.email}</span>
            </a>
            <a href={`https://${contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-foreground/70 hover:text-accent transition-colors group">
              <span className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <FaLinkedin className="text-accent text-xs" />
              </span>
              <span>LinkedIn</span>
            </a>
            <a href={`https://${contact.github}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-foreground/70 hover:text-accent transition-colors group">
              <span className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <FaGithub className="text-accent text-xs" />
              </span>
              <span>GitHub</span>
            </a>
            <div className="flex items-center gap-2 text-foreground/70">
              <span className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                <FaMapMarkerAlt className="text-accent text-xs" />
              </span>
              <span>{contact.location}</span>
            </div>
          </div>
        </motion.div>

        {/* Tabs Navigation */}
        <Tabs
          defaultValue="overview"
          value={activeTab}
          onValueChange={setActiveTab}
          className="flex flex-col xl:flex-row gap-8"
        >
          <TabsList className="flex flex-col w-full xl:w-[220px] mx-auto xl:mx-0 gap-3 shrink-0 bg-transparent">
            {[
              { value: "overview", label: "Overview", icon: "📋" },
              { value: "experience", label: "Experience", icon: "💼" },
              { value: "education", label: "Education", icon: "🎓" },
              { value: "skills", label: "Skills", icon: "⚡" },
              { value: "projects", label: "Projects", icon: "🚀" },
              { value: "achievements", label: "Achievements", icon: "🏆" },
            ].map((tab) => (
              <TabsTrigger 
                key={tab.value} 
                value={tab.value}
                className="flex items-center gap-3 justify-start px-4 py-3 text-left data-[state=active]:bg-accent/10 data-[state=active]:text-accent data-[state=active]:border-l-2 data-[state=active]:border-accent rounded-r-lg transition-all"
              >
                <span className="text-lg">{tab.icon}</span>
                <span>{tab.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="flex-1 min-h-[70vh]">
            {/* Overview Tab */}
            <TabsContent value="overview" className="w-full mt-0">
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-8"
              >
                {/* Quick Stats */}
                <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { label: "Years Experience", value: "5+", icon: "💼" },
                    { label: "Projects", value: "10+", icon: "🚀" },
                    { label: "Technologies", value: "50+", icon: "⚡" },
                    { label: "Certifications", value: "17+", icon: "🏆" },
                  ].map((stat, index) => (
                    <div key={index} className="bg-secondary rounded-xl p-6 text-center hover:bg-tertiary transition-all duration-300 border border-foreground/5 hover:border-accent/20">
                      <span className="text-3xl mb-2 block">{stat.icon}</span>
                      <span className="text-3xl font-bold text-accent block mb-1">{stat.value}</span>
                      <span className="text-foreground/60 text-sm">{stat.label}</span>
                    </div>
                  ))}
                </motion.div>

                {/* Summary Section */}
                <motion.div variants={itemVariants} className="bg-secondary rounded-xl p-6 border border-foreground/5">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    Professional Summary
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Senior Software Engineer with 5+ years&apos; experience building distributed backend systems and financial platforms using Java, Spring Boot, Node.js, and Python.
                    Skilled in microservices, event-driven systems, REST/GraphQL APIs, and frontend frameworks like React and Angular.
                    Experienced in AWS, Docker, Kubernetes, Terraform, CI/CD, observability (Prometheus, Grafana, ELK), and AI/ML integration with Hugging Face and RAG workflows.
                  </p>
                </motion.div>

                {/* Recent Experience Preview */}
                <motion.div variants={itemVariants} className="bg-secondary rounded-xl p-6 border border-foreground/5">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    Recent Experience
                  </h3>
                  <div className="space-y-4">
                    {experience.items.slice(0, 2).map((exp, index) => (
                      <div key={index} className="flex items-start gap-4 p-4 bg-primary rounded-lg">
                        <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                          <span className="text-accent font-bold text-lg">{exp.company.charAt(0)}</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">{exp.position}</h4>
                          <p className="text-accent text-sm">{exp.company}{exp.client ? ` - ${exp.client}` : ""}</p>
                          <p className="text-foreground/50 text-sm">{exp.duration} • {exp.location}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Top Skills Preview */}
                <motion.div variants={itemVariants} className="bg-secondary rounded-xl p-6 border border-foreground/5">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    Core Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {["Java", "Spring Boot", "Python", "Node.js", "React", "AWS", "Docker", "Kubernetes", "Terraform", "Kafka", "PostgreSQL", "Redis", "GraphQL", "Hugging Face"].map((skill, index) => (
                      <span key={index} className="px-3 py-1.5 bg-accent/10 text-accent rounded-full text-sm hover:bg-accent/20 transition-colors cursor-default">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </TabsContent>

            {/* Experience Tab */}
            <TabsContent value="experience" className="w-full mt-0">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-6"
              >
                <motion.div variants={itemVariants}>
                  <h2 className="text-3xl font-bold mb-2">{experience.title}</h2>
                  <p className="text-foreground/60 mb-6">Detailed overview of my professional journey</p>
                </motion.div>

                <ScrollArea className="h-[calc(100vh-350px)]">
                  <div className="space-y-6 pr-4">
                    {experience.items.map((exp, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="bg-secondary rounded-xl overflow-hidden border border-foreground/5 hover:border-accent/20 transition-all duration-300"
                      >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-accent/10 to-transparent p-6 border-b border-foreground/5">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            <div>
                              <h3 className="text-2xl font-bold text-foreground mb-1">{exp.position}</h3>
                              <p className="text-accent font-medium">{exp.company}{exp.client ? ` • ${exp.client}` : ""}</p>
                            </div>
                            <div className="flex flex-col items-start md:items-end gap-1">
                              <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium">
                                {exp.duration}
                              </span>
                              <span className="text-foreground/50 text-sm flex items-center gap-1">
                                <FaMapMarkerAlt className="text-xs" />
                                {exp.location}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Responsibilities */}
                        <div className="p-6">
                          <h4 className="text-sm uppercase tracking-wider text-foreground/40 mb-4">Key Responsibilities & Achievements</h4>
                          <ul className="space-y-3">
                            {exp.responsibilities.map((resp, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-3 text-foreground/70 hover:text-foreground/90 transition-colors group"
                              >
                                <span className="mt-2 w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0 group-hover:scale-125 transition-transform" />
                                <span className="leading-relaxed">{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </ScrollArea>
              </motion.div>
            </TabsContent>

            {/* Education Tab */}
            <TabsContent value="education" className="w-full mt-0">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-6"
              >
                <motion.div variants={itemVariants}>
                  <h2 className="text-3xl font-bold mb-2">{education.title}</h2>
                  <p className="text-foreground/60 mb-6">Academic background and continuous learning</p>
                </motion.div>

                <div className="space-y-6">
                  {education.items.map((item, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="bg-secondary rounded-xl overflow-hidden border border-foreground/5 hover:border-accent/20 transition-all duration-300"
                    >
                      <div className="p-6">
                        <div className="flex flex-col md:flex-row md:items-start gap-6">
                          {/* Logo/Icon */}
                          <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                            {item.logo ? (
                              <img
                                src={item.logo}
                                alt={`${item.institution} logo`}
                                className="w-12 h-12 object-contain rounded-lg"
                              />
                            ) : (
                              <span className="text-3xl">🎓</span>
                            )}
                          </div>

                          {/* Content */}
                          <div className="flex-1">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                              <div>
                                <h3 className="text-xl font-bold text-foreground">{item.institution}</h3>
                                <p className="text-accent">{item.degree}</p>
                              </div>
                              <div className="flex flex-col items-start md:items-end gap-1">
                                <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm">
                                  {item.duration}
                                </span>
                                <span className="text-foreground/50 text-sm">{item.location}</span>
                              </div>
                            </div>

                            {/* Courses */}
                            {item.courses && (
                              <div className="mt-4 pt-4 border-t border-foreground/10">
                                <h4 className="text-sm uppercase tracking-wider text-foreground/40 mb-3">Relevant Coursework</h4>
                                <div className="flex flex-wrap gap-2">
                                  {item.courses.map((course, idx) => (
                                    <span
                                      key={idx}
                                      className="px-3 py-1 bg-primary text-foreground/70 rounded-lg text-sm hover:bg-accent/10 hover:text-accent transition-colors"
                                    >
                                      {course}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </TabsContent>

            {/* Skills Tab */}
            <TabsContent value="skills" className="w-full mt-0">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-6"
              >
                <motion.div variants={itemVariants}>
                  <h2 className="text-3xl font-bold mb-2">{technicalSkills.title}</h2>
                  <p className="text-foreground/60 mb-6">Technologies and tools I work with</p>
                </motion.div>

                <ScrollArea className="h-[calc(100vh-350px)]">
                  <div className="space-y-6 pr-4">
                    {technicalSkills.categories.map((category, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="bg-secondary rounded-xl p-6 border border-foreground/5 hover:border-accent/20 transition-all duration-300"
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-2xl">{category.icon}</span>
                          <h3 className="text-xl font-semibold text-foreground">{category.name}</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {category.skills.map((skill, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1.5 bg-primary text-foreground/70 rounded-lg text-sm hover:bg-accent/10 hover:text-accent transition-all duration-200 cursor-default border border-foreground/5 hover:border-accent/30"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </ScrollArea>
              </motion.div>
            </TabsContent>

            {/* Projects Tab */}
            <TabsContent value="projects" className="w-full mt-0">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-6"
              >
                <motion.div variants={itemVariants}>
                  <h2 className="text-3xl font-bold mb-2">{projects.title}</h2>
                  <p className="text-foreground/60 mb-6">Featured projects and technical implementations</p>
                </motion.div>

                <ScrollArea className="h-[calc(100vh-350px)]">
                  <div className="space-y-6 pr-4">
                    {projects.items.map((project, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="bg-secondary rounded-xl overflow-hidden border border-foreground/5 hover:border-accent/20 transition-all duration-300 group"
                      >
                        {/* Project Header */}
                        <div className="p-6 border-b border-foreground/5">
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                                {project.name}
                              </h3>
                              {project.subtitle && (
                                <p className="text-foreground/50 text-sm mt-1">{project.subtitle}</p>
                              )}
                            </div>
                          </div>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-2 mt-4">
                            {project.tags.map((tag, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-1 bg-accent/10 text-accent rounded text-xs"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Project Details */}
                        <div className="p-6">
                          <ul className="space-y-3">
                            {project.highlights.map((highlight, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-3 text-foreground/70"
                              >
                                <span className="mt-2 w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                                <span className="leading-relaxed">{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </ScrollArea>
              </motion.div>
            </TabsContent>

            {/* Achievements Tab */}
            <TabsContent value="achievements" className="w-full mt-0">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-6"
              >
                <motion.div variants={itemVariants}>
                  <h2 className="text-3xl font-bold mb-2">{achievements.title}</h2>
                  <p className="text-foreground/60 mb-6">Recognition and professional certifications</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {achievements.items.map((item, index) => {
                    const isLink = item.link;
                    const className = "bg-secondary rounded-xl p-6 border border-foreground/5 hover:border-accent/20 transition-all duration-300 group flex items-center gap-4" + (isLink ? " cursor-pointer" : "");
                    const content = (
                      <>
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                          item.type === "award" ? "bg-yellow-500/10" : "bg-accent/10"
                        }`}>
                          {item.type === "award" ? (
                            <FaTrophy className="text-yellow-500 text-xl" />
                          ) : (
                            <FaCertificate className="text-accent text-xl" />
                          )}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-foreground/50 text-sm capitalize">{item.type}</p>
                        </div>
                      </>
                    );
                    return isLink ? (
                      <motion.a
                        key={index}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        variants={itemVariants}
                        className={className}
                      >
                        {content}
                      </motion.a>
                    ) : (
                      <motion.div key={index} variants={itemVariants} className={className}>
                        {content}
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
