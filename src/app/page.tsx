"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6, 
      ease: [0.6, -0.05, 0.01, 0.99] as const
    } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 0.5 } 
  }
};

// Data
const experiences = [
  {
    title: "Lead Software Engineer",
    company: "IKONIC",
    period: "June 2023 – July 2025",
    highlights: [
      "Led end-to-end development of Good Today using MERN Stack with focus on scalability and performance",
      "Integrated Stripe for secure payment processing with subscription management and fraud prevention",
      "Designed microservices architecture on AWS using EC2, S3, Lambda, and CloudFront",
      "Implemented CI/CD pipelines using GitHub Actions for automated testing and deployments",
      "Optimized API performance with Redis caching, achieving 30% reduction in response times"
    ]
  },
  {
    title: "Senior Software Engineer",
    company: "Devsinc",
    period: "May 2021 – May 2023",
    highlights: [
      "Developed full-stack applications using React.js, Next.js, Node.js, and TypeScript",
      "Designed and integrated RESTful and GraphQL APIs with optimized backend performance",
      "Built reusable UI components with Redux and Context API for scalable architecture",
      "Managed database optimization for MySQL and MongoDB including indexing and query tuning",
      "Deployed applications on AWS with automated CI/CD workflows via GitLab"
    ]
  },
  {
    title: "Software Engineer",
    company: "DevNatives",
    period: "Jan 2018 – April 2021",
    highlights: [
      "Developed scalable backend services using Node.js and Express.js",
      "Integrated React.js frontend with Ruby on Rails backend via RESTful APIs",
      "Implemented role-based authentication using JWT and OAuth2",
      "Built real-time features with WebSockets for live updates",
      "Deployed applications on AWS with Docker containers and CI/CD pipelines"
    ]
  }
];

const projects = [
  {
    title: "Good Today",
    url: "https://www.goodtoday.org",
    description: "A non-profit platform making it easy and meaningful to give charity daily to hundreds of causes worldwide. Built with MERN Stack, featuring Stripe integration and microservices architecture.",
    tech: ["React", "Node.js", "MongoDB", "AWS", "Stripe"]
  },
  {
    title: "FashionPass",
    url: "https://www.fashionpass.com",
    description: "Subscription-based fashion platform with full-stack architecture using Next.js and Node.js. Features secure billing, subscription management, and order tracking.",
    tech: ["Next.js", "Node.js", "Stripe", "AWS", "PostgreSQL"]
  },
  {
    title: "Teamly",
    url: "https://www.teamly.com",
    description: "Performance tracking and internal communication platform with employee rewards system. Built core features using React and Node.js with AWS services.",
    tech: ["React", "Node.js", "AWS", "REST APIs", "Redis"]
  },
  {
    title: "Dealty",
    url: "https://www.dealty.ai",
    description: "Digital real estate platform transforming how home buyers, sellers, and agents connect. Seamless interface for property listings and discovery.",
    tech: ["React", "Next.js", "Node.js", "AI/ML", "AWS"]
  }
];

const skillCategories = [
  {
    name: "Frontend",
    skills: ["React", "Angular", "Next.js", "TypeScript", "JavaScript"]
  },
  {
    name: "State Management",
    skills: ["Redux", "Context API", "Zustand", "React Query", "MobX"]
  },
  {
    name: "Styling",
    skills: ["Tailwind CSS", "Sass/SCSS", "Less", "Chakra UI", "Bootstrap", "Material UI"]
  },
  {
    name: "Backend",
    skills: ["Node.js", "Express.js", "NestJS", "Python", "Django", "FastAPI", "Ruby on Rails"]
  },
  {
    name: "SQL Databases",
    skills: ["PostgreSQL", "MySQL", "SQLite", "SQL Server"]
  },
  {
    name: "NoSQL Databases",
    skills: ["MongoDB", "DynamoDB", "CassandraDB", "Firebase", "Redis"]
  },
  {
    name: "AWS Services",
    skills: ["EC2", "Lambda", "S3", "CloudFront", "RDS", "CloudWatch", "EBS", "SQS/SNS", "API Gateway"]
  },
  {
    name: "GCP Services",
    skills: ["Compute Engine", "App Engine", "Cloud Functions", "Cloud Run", "BigQuery", "Cloud SQL"]
  },
  {
    name: "Azure & DevOps",
    skills: ["Azure DevOps", "Docker", "Kubernetes", "Nginx", "PM2", "Terraform"]
  },
  {
    name: "CI/CD",
    skills: ["GitHub Actions", "GitLab CI/CD", "Jenkins", "CircleCI", "Vercel", "Netlify"]
  },
  {
    name: "ML & Data Science",
    skills: ["scikit-learn", "NumPy", "Pandas", "Matplotlib", "TensorFlow", "PyTorch"]
  },
  {
    name: "AI Tools & APIs",
    skills: ["OpenAI API", "LangChain", "Claude API", "Hugging Face", "Vector DBs", "RAG"]
  }
];

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Background elements */}
      <div className="fixed inset-0 dot-pattern opacity-50 pointer-events-none" />
      <div className="fixed inset-0 grid-pattern opacity-30 pointer-events-none" />
      <div className="fixed top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-[#4dd0e1]/10 via-[#2d3a8c]/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#a78bfa]/10 via-[#2d3a8c]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#0a0e1a]/80 border-b border-[#4dd0e1]/10"
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="hidden md:flex items-center gap-8">
            {["About", "Experience", "Projects", "Skills", "References", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="nav-link text-sm">
                {item}
              </a>
            ))}
          </div>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#4dd0e1] to-[#a78bfa] text-sm font-semibold text-[#0a0e1a] hover:shadow-lg hover:shadow-[#4dd0e1]/25 transition-shadow"
          >
            Let&apos;s Talk
          </motion.a>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="order-2 lg:order-1"
            >
              <motion.div variants={fadeInUp} className="mb-4">
                <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-[#4dd0e1]/10 text-[#4dd0e1] border border-[#4dd0e1]/20">
                  Available for new opportunities
                </span>
              </motion.div>
              <motion.h1 
                variants={fadeInUp}
                className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight mb-6"
              >
                Hi, I&apos;m{" "}
                <span className="gradient-text">Abdul Raheel</span>
              </motion.h1>
              <motion.p 
                variants={fadeInUp}
                className="text-xl md:text-2xl text-[#94a3b8] mb-4 font-light"
              >
                Senior Full Stack Engineer
              </motion.p>
              <motion.p 
                variants={fadeInUp}
                className="text-lg text-[#64748b] mb-8 max-w-lg leading-relaxed"
              >
                7+ years crafting scalable, high-performance web applications.Passionate about clean code and exceptional user experiences.
              </motion.p>
              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(77, 208, 225, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-[#4dd0e1] to-[#a78bfa] font-semibold text-[#0a0e1a] inline-flex items-center gap-2"
                >
                  View My Work
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/dev-raheel/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-full border border-[#4dd0e1]/30 font-semibold text-[#4dd0e1] hover:bg-[#4dd0e1]/10 transition-colors inline-flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </motion.a>
                <motion.a
                  href="https://www.upwork.com/freelancers/abdulraheel2"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-full border border-[#a78bfa]/30 font-semibold text-[#a78bfa] hover:bg-[#a78bfa]/10 transition-colors inline-flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"/>
                  </svg>
                  Upwork
                </motion.a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 lg:order-2 flex justify-center"
            >
              <div className="relative">
                {/* Decorative rings */}
                <div className="absolute inset-0 rounded-full border-2 border-[#4dd0e1]/20 scale-110" />
                <div className="absolute inset-0 rounded-full border border-[#a78bfa]/10 scale-125 pulse-ring" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#4dd0e1]/20 via-[#2d3a8c]/20 to-[#a78bfa]/20 scale-105 blur-2xl" />
                
                {/* Profile image */}
                <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-[#2d3a8c]/50 glow">
                  <Image
                    src="/profile.jpg"
                    alt="Abdul Raheel"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center gap-2 text-[#64748b]"
            >
              <span className="text-xs uppercase tracking-widest">Scroll</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <span className="text-[#4dd0e1] text-sm font-medium uppercase tracking-widest mb-4 block">About Me</span>
            <h2 className="section-heading text-4xl md:text-5xl gradient-text">Building Digital Excellence</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp}>
              <p className="text-lg text-[#94a3b8] leading-relaxed mb-6">
                I&apos;m a Senior Full Stack Developer with over seven years of experience in building scalable, high-performance web applications. My expertise spans across modern technologies including React, Next.js, Node.js, TypeScript, Ruby on Rails, and Docker.
              </p>
              <p className="text-lg text-[#94a3b8] leading-relaxed mb-6">
                With a strong background in designing and optimizing microservices architectures, I specialize in API development, cloud deployments, and performance tuning—ensuring robust, secure, and maintainable code at every level.
              </p>
              <p className="text-lg text-[#94a3b8] leading-relaxed">
                I&apos;m passionate about leading teams, mentoring developers, and delivering complex projects from concept to production. My goal is to adopt modern technologies that drive innovation and business growth.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-4">
              {[
                { number: "7+", label: "Years Experience" },
                { number: "50+", label: "Projects Delivered" },
                { number: "9", label: "Companies" },
                { number: "30%", label: "Performance Gains" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass-card p-6 text-center"
                >
                  <span className="text-4xl font-bold gradient-text block mb-2">{stat.number}</span>
                  <span className="text-sm text-[#64748b]">{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Tech Stack Highlights Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#2d3a8c]/5 to-transparent pointer-events-none" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto relative"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <span className="text-[#4dd0e1] text-sm font-medium uppercase tracking-widest mb-4 block">Core Technologies</span>
            <h2 className="section-heading text-3xl md:text-4xl gradient-text">Tech Stack Highlights</h2>
          </motion.div>

          {/* Animated Tech Cards Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {[
              { name: "React", icon: "⚛️" },
              { name: "Node.js", icon: "🟢" },
              { name: "Next.js", icon: "▲" },
              { name: "Python", icon: "🐍" },
              { name: "TypeScript", icon: "TS" },
              { name: "AWS", icon: "☁️" },
              { name: "Docker", icon: "🐳" },
              { name: "AI/ML", icon: "🤖" },
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -8 }}
                className="glass-card p-4 gradient-border cursor-pointer group"
              >
                <motion.div
                  animate={{ 
                    y: [0, -8, 0],
                  }}
                  transition={{ 
                    duration: 3 + index * 0.3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2
                  }}
                  className="flex flex-col items-center gap-2"
                >
                  <div className={`text-3xl mb-1 ${tech.icon === "TS" ? "font-bold text-[#3178c6]" : tech.icon === "▲" ? "font-bold" : ""}`}>
                    {tech.icon === "TS" || tech.icon === "▲" ? (
                      <span className="text-2xl font-bold">{tech.icon}</span>
                    ) : (
                      <span>{tech.icon}</span>
                    )}
                  </div>
                  <span className="text-xs font-medium text-[#94a3b8] group-hover:text-[#4dd0e1] transition-colors">
                    {tech.name}
                  </span>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Additional floating cards in background */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
            {[
              { x: "10%", y: "20%", delay: 0 },
              { x: "85%", y: "30%", delay: 1 },
              { x: "20%", y: "70%", delay: 2 },
              { x: "75%", y: "80%", delay: 1.5 },
            ].map((pos, index) => (
              <motion.div
                key={index}
                animate={{
                  y: [0, -30, 0],
                  x: [0, 20, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 6 + index,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: pos.delay,
                }}
                style={{ left: pos.x, top: pos.y }}
                className="absolute glass-card p-3 w-16 h-16"
              >
                <div className="text-2xl text-center">
                  {["⚛️", "🟢", "▲", "🐍"][index]}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#2d3a8c]/5 to-transparent pointer-events-none" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto relative"
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <span className="text-[#4dd0e1] text-sm font-medium uppercase tracking-widest mb-4 block">Career Journey</span>
            <h2 className="section-heading text-4xl md:text-5xl gradient-text">Professional Experience</h2>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#4dd0e1]/50 via-[#a78bfa]/30 to-transparent transform md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-[#4dd0e1] to-[#a78bfa] border-4 border-[#0a0e1a] transform md:-translate-x-1/2 z-10" />

                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"} pl-8 md:pl-0`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="glass-card p-6 gradient-border"
                  >
                    <div className="flex items-center gap-3 mb-3 flex-wrap">
                      <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#4dd0e1]/10 text-[#4dd0e1] border border-[#4dd0e1]/20">
                        {exp.company}
                      </span>
                    </div>
                    <p className="text-[#64748b] text-sm mb-4">{exp.period}</p>
                    <ul className={`space-y-2 text-[#94a3b8] text-sm ${index % 2 === 0 ? "md:text-right" : ""}`}>
                      {exp.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="flex items-start gap-2">
                          <span className="text-[#4dd0e1] mt-1 shrink-0">▹</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {/* Spacer */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <span className="text-[#4dd0e1] text-sm font-medium uppercase tracking-widest mb-4 block">Portfolio</span>
            <h2 className="section-heading text-4xl md:text-5xl gradient-text">Featured Projects</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.a
                key={index}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={scaleIn}
                whileHover={{ scale: 1.03, y: -10 }}
                className="group glass-card p-8 gradient-border block"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-[#4dd0e1] transition-colors">
                    {project.title}
                  </h3>
                  <svg className="w-6 h-6 text-[#64748b] group-hover:text-[#4dd0e1] transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                <p className="text-[#94a3b8] mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, tIndex) => (
                    <span key={tIndex} className="skill-tag">{tech}</span>
                  ))}
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#2d3a8c]/5 to-transparent pointer-events-none" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto relative"
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <span className="text-[#4dd0e1] text-sm font-medium uppercase tracking-widest mb-4 block">Expertise</span>
            <h2 className="section-heading text-4xl md:text-5xl gradient-text">Technical Skills</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ scale: 1.03 }}
                className="glass-card p-5"
              >
                <h3 className="text-base font-bold text-[#4dd0e1] mb-3">{category.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIndex) => (
                    <span key={sIndex} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional skills */}
          <motion.div variants={fadeInUp} className="mt-12 text-center">
            <p className="text-[#64748b] mb-6">Also experienced with:</p>
            <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
              {["JWT", "OAuth2", "Passport.js", "WebSockets", "Socket.io", "GraphQL", "REST APIs", "Microservices", "Serverless", "Prompt Engineering", "GPT-4", "Whisper API", "DALL-E", "Embeddings", "Grafana", "ELK Stack", "Datadog", "Stripe API", "Twilio", "SendGrid"].map((skill, index) => (
                <motion.span
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  className="skill-tag"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* References/Testimonials Section */}
      <section id="references" className="py-32 px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <span className="text-[#4dd0e1] text-sm font-medium uppercase tracking-widest mb-4 block">Testimonials</span>
            <h2 className="section-heading text-4xl md:text-5xl gradient-text">What Clients Say</h2>
          </motion.div>

          {/* Video Testimonial */}
          <motion.div variants={scaleIn} className="glass-card p-8 gradient-border mb-12 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              {/* Client info */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Adam</h3>
                <p className="text-[#4dd0e1] font-medium">CEO & Co-Founder, Reddy.io</p>
                <p className="text-[#64748b] text-sm">USA</p>
              </div>

              {/* YouTube Video Embed */}
              <div className="w-full aspect-video rounded-xl overflow-hidden border border-[#4dd0e1]/20 glow">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/TNI8KAy1Uyk"
                  title="Client Testimonial - Adam, CEO of Reddy.io"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>

              {/* Quote decoration */}
              <div className="mt-8 text-center">
                <svg className="w-12 h-12 text-[#4dd0e1]/30 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
                <p className="text-[#94a3b8] text-lg italic max-w-2xl">
                  Watch the video above to hear directly from Adam about our collaboration and the quality of work delivered.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Written Reviews Section */}
          <motion.div variants={fadeInUp} className="text-center mb-10">
            <h3 className="text-2xl font-bold text-white mb-2">Client Reviews</h3>
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 text-[#f59e0b]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              ))}
              <span className="ml-2 text-[#f59e0b] font-bold">5.0</span>
            </div>
          </motion.div>

          {/* Review Screenshots Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {["/review1.png", "/review4.png", "/review3.png", "/review2.png"].map((review, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ scale: 1.02, y: -5 }}
                className="glass-card p-4 gradient-border overflow-hidden"
              >
                <Image
                  src={review}
                  alt={`Client Review ${index + 1}`}
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={fadeInUp}>
            <span className="text-[#4dd0e1] text-sm font-medium uppercase tracking-widest mb-4 block">Get In Touch</span>
            <h2 className="section-heading text-4xl md:text-5xl gradient-text mb-6">Let&apos;s Work Together</h2>
            <p className="text-xl text-[#94a3b8] mb-12 max-w-2xl mx-auto">
              Whether you have a project in mind or just want to connect, I&apos;d love to hear from you.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12">
            <motion.a
              href="mailto:abdulraheel98@gmail.com"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(77, 208, 225, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-[#4dd0e1] to-[#a78bfa] font-semibold text-[#0a0e1a] inline-flex items-center gap-3"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              abdulraheel98@gmail.com
            </motion.a>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex justify-center gap-6">
            {/* GitHub */}
            <motion.a
              href="https://github.com/abdulraheel98"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: "#4dd0e1" }}
              className="text-[#64748b] transition-colors"
              title="GitHub"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </motion.a>
            {/* LinkedIn */}
            <motion.a
              href="https://www.linkedin.com/in/dev-raheel/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: "#4dd0e1" }}
              className="text-[#64748b] transition-colors"
              title="LinkedIn"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </motion.a>
            {/* Upwork */}
            <motion.a
              href="https://www.upwork.com/freelancers/abdulraheel2"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: "#4dd0e1" }}
              className="text-[#64748b] transition-colors"
              title="Upwork"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"/>
              </svg>
            </motion.a>
            {/* Email */}
            <motion.a
              href="mailto:abdulraheel98@gmail.com"
              whileHover={{ scale: 1.2, color: "#4dd0e1" }}
              className="text-[#64748b] transition-colors"
              title="Email"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-[#4dd0e1]/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#64748b] text-sm">
            © {new Date().getFullYear()} Abdul Raheel. All rights reserved.
          </p>
          <p className="text-[#475569] text-sm">
            Built with <span className="text-[#4dd0e1]">Next.js</span> & <span className="text-[#a78bfa]">Tailwind CSS</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
