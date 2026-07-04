export interface Project {
  title: string;
  description: string;
  tech: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export const projectsData: Project[] = [
  {
    title: "GenAI REST Service",
    description: "A production-grade Spring Boot REST API integrating Google Gemini 2.5 Flash across seven AI use cases (text generation, summarization, Q&A, translation, code generation, analysis, and chat). Built with Redis caching, MySQL persistence, AOP-based audit logging, Resilience4j circuit breakers, rate limiting, input sanitization, and Prometheus metrics.",
    tech: ["Spring Boot", "Spring AI", "Gemini", "Redis", "Resilience4j", "Prometheus"],
    featured: true,
    githubUrl: "https://github.com/daya1an/spring-genai",
  },
  {
    title: "ECOMMERCE MEDALLION LAKEHOUSE",
    description: "An ecommerce data engineering project on Databricks using the Medallion Architecture (Bronze → Silver → Gold). Raw CSV data across brands, products, customers, calendar, and order items is ingested and transformed across layered PySpark notebooks, producing BI-ready Delta tables with derived metrics (FX conversion, region enrichment, coupon flags).",
    tech: ["Python", "Pyspark","SQL", "Databricks", "AWS S3", "Power BI"],
    featured: true,
    githubUrl: "https://github.com/daya1an/ecommerce-medallion-lakehouse"
  },
  {
    title: "Transportation Data Lakehouse",
    description: "- A scalable Medallion data lakehouse on Databricks for a ride-hailing service, processing massive volumes of trips, city, and calendar data from AWS S3 to enable granular, city-level business intelligence and operational analytics across India.",
    tech: ["Python", "Pyspark", "SQL", "Databricks", "AWS", "Delta Live Tables", "Delta Lake"],
    featured: false,
    githubUrl: "https://github.com/daya1an/transportation-data-lakehouse"
  },
  {
    title: "Sentiment Ledger",
    description: "An AI-powered invoice approval system built with Spring Boot and Google Gemini. Invoices are submitted via a REST API, processed asynchronously through Kafka, and evaluated against company financial policies using RAG on MongoDB Atlas Vector Store. Decisions are recorded in an immutable audit ledger with idempotency guarantees.",
    tech: ["Spring Boot", "Spring AI", "Google Gemini", "RAG", "KAFKA", "MongoDB Atlas"],
    featured: false,
    githubUrl: "https://github.com/daya1an/sentiment-ledger"
  },
  {
    title: "My Portfolio Website",
    description: "My personal portfolio is a fast, modern platform built to showcase my professional career, accelerated through vibe-coding with Lovable. Powered by React, TypeScript, Vite, Bun, Tailwind, and PrimeReact, it features a decoupled architecture where all content is isolated in src/data/ for effortless updates. The design merges a sleek, minimalistic black-and-white layout with custom minimalistic accents, delivering a unique yet professional outlook and   experience.",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "PrimeReact"],
    featured: true,
    githubUrl: "https://github.com/daya1an/portfolio"
  },
  {
    title: "Event Announcement System",
    description: "Serverless event notification platform where users subscribe by email and admins publish events that automatically alert all subscribers, removing manual mailing list upkeep. Used Lambda to avoid idle server costs, SNS for native email fan-out instead of a custom notifier, S3 for cheap static hosting, CloudFront for fast HTTPS delivery, and Terraform to make infra reproducible in one command.",
    tech: ["Python", "HTML", "CSS", "JavaScript","Terraform", "AWS – Lambda, SNS, S3, & CloudFront"],
    featured: false,
    githubUrl: "https://github.com/daya1an/event-announcement-system"
  }
];
