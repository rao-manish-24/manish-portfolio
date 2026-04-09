"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

// Tech Stack Icons
import {
  SiPython,
  SiGo,
  SiJavascript,
  SiTypescript,
  SiKubernetes,
  SiJenkins,
  SiDocker,
  SiAmazonwebservices,
  SiGooglecloud,
  SiTerraform,
  SiAnsible,
  SiGithubactions,
  SiGitlab,
  SiPrometheus,
  SiGrafana,
  SiElasticsearch,
  SiApachekafka,
  SiRedis,
  SiMongodb,
  SiPostgresql,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiPytorch,
  SiTensorflow,
  SiOpenai,
  SiHuggingface,
  SiLangchain,
  SiApacheairflow,
  SiLinux,
  SiGit,
  SiNginx,
  SiHelm,
  SiArgo,
  SiMysql,
  SiSnowflake,
  SiApachespark,
  SiFastapi,
  SiFlask,
} from "react-icons/si";

import { FaJava, FaBrain, FaRobot, FaNetworkWired, FaCogs } from "react-icons/fa";

const domains = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Designing and developing responsive and dynamic web applications using modern frameworks and best practices.",
    href: "#",
  },
  {
    num: "02",
    title: "Machine Learning",
    description:
      "Building and training machine learning models to predict outcomes, data cleaning & preprocessing, EDA.",
    href: "#",
  },
  {
    num: "03",
    title: "AI Engineering",
    description:
      "Designing and implementing production-ready AI systems, LLM integrations, RAG pipelines, and intelligent automation solutions.",
    href: "#",
  },
  {
    num: "04",
    title: "AI Agent Development",
    description:
      "Building autonomous AI agents using frameworks like LangChain, LlamaIndex, and custom orchestration for complex task automation.",
    href: "#",
  },
  {
    num: "05",
    title: "DevOps & Cloud",
    description:
      "Building and maintaining CI/CD pipelines, Dockerizing applications, Kubernetes orchestration, and managing infrastructure on Cloud.",
    href: "#",
  },
  {
    num: "06",
    title: "Testing & Reliability",
    description:
      "Writing and maintaining test cases, scripts and automation tools for testing and maintenance of applications.",
    href: "#",
  },
];

// Tech Stack Categories
const techStack = [
  {
    category: "Programming Languages",
    icon: FaCogs,
    technologies: [
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "Go", icon: SiGo, color: "#00ADD8" },
      { name: "Java", icon: FaJava, color: "#ED8B00" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    ],
  },
  {
    category: "AI & Machine Learning",
    icon: FaBrain,
    technologies: [
      { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
      { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
      { name: "OpenAI", icon: SiOpenai, color: "#412991" },
      { name: "HuggingFace", icon: SiHuggingface, color: "#FFD21E" },
      { name: "LangChain", icon: SiLangchain, color: "#1C3C3C" },
    ],
  },
  {
    category: "DevOps & CI/CD",
    icon: FaNetworkWired,
    technologies: [
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
      { name: "Jenkins", icon: SiJenkins, color: "#D24939" },
      { name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF" },
      { name: "GitLab CI", icon: SiGitlab, color: "#FC6D26" },
      { name: "Terraform", icon: SiTerraform, color: "#7B42BC" },
      { name: "Ansible", icon: SiAnsible, color: "#EE0000" },
      { name: "Helm", icon: SiHelm, color: "#0F1689" },
      { name: "ArgoCD", icon: SiArgo, color: "#EF7B4D" },
    ],
  },
  {
    category: "Cloud Platforms",
    icon: FaRobot,
    technologies: [
      { name: "AWS", icon: SiAmazonwebservices, color: "#FF9900" },
      { name: "GCP", icon: SiGooglecloud, color: "#4285F4" },
    ],
  },
  {
    category: "Databases & Messaging",
    icon: FaCogs,
    technologies: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "Redis", icon: SiRedis, color: "#DC382D" },
      { name: "Kafka", icon: SiApachekafka, color: "#231F20" },
      { name: "Snowflake", icon: SiSnowflake, color: "#29B5E8" },
    ],
  },
  {
    category: "Monitoring & Observability",
    icon: FaNetworkWired,
    technologies: [
      { name: "Prometheus", icon: SiPrometheus, color: "#E6522C" },
      { name: "Grafana", icon: SiGrafana, color: "#F46800" },
      { name: "Elasticsearch", icon: SiElasticsearch, color: "#005571" },
    ],
  },
  {
    category: "Web & Backend Frameworks",
    icon: FaCogs,
    technologies: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "FastAPI", icon: SiFastapi, color: "#009688" },
      { name: "Flask", icon: SiFlask, color: "#000000" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    ],
  },
  {
    category: "Data Engineering",
    icon: FaBrain,
    technologies: [
      { name: "Apache Spark", icon: SiApachespark, color: "#E25A1C" },
      { name: "Airflow", icon: SiApacheairflow, color: "#017CEE" },
    ],
  },
  {
    category: "Tools & Others",
    icon: FaCogs,
    technologies: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "Linux", icon: SiLinux, color: "#FCC624" },
      { name: "Nginx", icon: SiNginx, color: "#009639" },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const techItemVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const Domains = () => {
  return (
    <section className="min-h-screen flex flex-col py-12 xl:py-16">
      <div className="container mx-auto">
        {/* Domains Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="text-4xl xl:text-5xl font-bold text-foreground mb-4">
            Domains & <span className="text-accent">Expertise</span>
          </h1>
          <p className="text-foreground/60 text-lg max-w-2xl">
            Specialized in building scalable systems across multiple domains
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24"
        >
          {domains.map((domain, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex-1 flex flex-col justify-center gap-4 group p-6 rounded-xl bg-foreground/5 hover:bg-foreground/10 border border-foreground/10 hover:border-accent/50 transition-all duration-500"
            >
              {/* top */}
              <div className="w-full flex justify-between items-center">
                <div className="text-4xl font-extrabold text-accent/40 group-hover:text-accent transition-all duration-500">
                  {domain.num}
                </div>
                <Link
                  href={domain.href}
                  className="w-[50px] h-[50px] rounded-full bg-foreground/10 group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                >
                  <BsArrowDownRight className="text-foreground group-hover:text-dark text-xl" />
                </Link>
              </div>
              {/* title */}
              <h2 className="text-2xl font-bold leading-none text-foreground group-hover:text-accent transition-all duration-500">
                {domain.title}
              </h2>
              {/* description */}
              <p className="text-foreground/60 text-sm leading-relaxed">{domain.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Stack Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex flex-col xl:flex-row gap-12">
            {/* Tech Stack Left */}
            <div className="flex-1">
              <h2 className="text-4xl xl:text-5xl font-bold text-foreground mb-4">
                Tech <span className="text-accent">Stack</span>
              </h2>
              <p className="text-foreground/60 text-lg max-w-2xl mb-12">
                Technologies and tools I work with to build robust, scalable solutions
              </p>

              <div className="space-y-10">
                {techStack.map((category, categoryIndex) => (
                  <motion.div
                    key={categoryIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + categoryIndex * 0.1, duration: 0.5 }}
                    className="relative"
                  >
                    {/* Category Header */}
                    <div className="flex items-center gap-3 mb-6">
                      <category.icon className="text-accent text-2xl" />
                      <h3 className="text-xl font-semibold text-foreground/90">
                        {category.category}
                      </h3>
                      <div className="flex-1 h-[1px] bg-gradient-to-r from-foreground/20 to-transparent ml-4" />
                    </div>

                    {/* Technologies Grid */}
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-6 gap-4"
                    >
                      {category.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={techIndex}
                          variants={techItemVariants}
                          whileHover={{
                            scale: 1.1,
                            y: -5,
                            transition: { duration: 0.2 }
                          }}
                          className="group/tech flex flex-col items-center gap-2 p-4 rounded-xl bg-foreground/5 hover:bg-foreground/10 border border-foreground/10 hover:border-accent/50 transition-all duration-300 cursor-pointer"
                        >
                          <tech.icon
                            className="text-3xl xl:text-4xl transition-all duration-300 group-hover/tech:drop-shadow-lg"
                            style={{
                              color: tech.color,
                              filter: 'brightness(0.9)',
                            }}
                            onMouseEnter={(e) => e.target.style.filter = 'brightness(1.2) drop-shadow(0 0 8px ' + tech.color + ')'}
                            onMouseLeave={(e) => e.target.style.filter = 'brightness(0.9)'}
                          />
                          <span className="text-xs text-foreground/60 group-hover/tech:text-foreground text-center font-medium transition-colors duration-300">
                            {tech.name}
                          </span>
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Image Right */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex w-full xl:w-[450px] shrink-0 items-center justify-center xl:items-start xl:sticky xl:top-24 xl:self-start mt-8 xl:mt-[480px]"
            >
              <div className="rounded-2xl overflow-hidden border border-foreground/10 shadow-lg shadow-accent/5">
                <Image
                  src="/assets/hold-manish.jpg"
                  width={450}
                  height={640}
                  alt="Manish Rao"
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* AI & Agent Development Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-20 p-8 rounded-2xl bg-gradient-to-br from-accent/10 via-foreground/5 to-accent/5 border border-accent/20"
        >
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <FaRobot className="text-accent text-3xl" />
                <h3 className="text-2xl font-bold text-foreground">
                  AI Engineering & Agent Development
                </h3>
              </div>
              <p className="text-foreground/70 leading-relaxed mb-6">
                Specializing in building production-ready AI systems including LLM integrations,
                RAG pipelines, autonomous agents, and intelligent automation solutions.
                Experienced with modern AI frameworks and orchestration tools.
              </p>
              <div className="flex flex-wrap gap-3">
                {["LangChain", "LlamaIndex", "OpenAI API", "HuggingFace", "Vector DBs", "RAG", "Agent Orchestration", "Prompt Engineering"].map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 text-sm bg-accent/20 text-accent rounded-full border border-accent/30 hover:bg-accent/30 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-4 flex-wrap justify-center lg:justify-end">
              <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-foreground/5 border border-foreground/10">
                <SiOpenai className="text-4xl text-[#412991]" />
                <span className="text-xs text-foreground/60">OpenAI</span>
              </div>
              <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-foreground/5 border border-foreground/10">
                <SiHuggingface className="text-4xl text-[#FFD21E]" />
                <span className="text-xs text-foreground/60">HuggingFace</span>
              </div>
              <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-foreground/5 border border-foreground/10">
                <SiLangchain className="text-4xl text-[#1C3C3C]" />
                <span className="text-xs text-foreground/60">LangChain</span>
              </div>
              <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-foreground/5 border border-foreground/10">
                <FaBrain className="text-4xl text-accent" />
                <span className="text-xs text-foreground/60">AI Agents</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Domains;
