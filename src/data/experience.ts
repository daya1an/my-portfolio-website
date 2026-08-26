export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
  tech: string[];
  level: number;
}

export const experienceData: Experience[] = [
  {
    title: "Parts Control Application",
    company: "New App Development",
    period: "2026Q2 – Present",
    description:
      "Base - Mainframe application, birth place of Ford Engineering and Service Parts Details. Functioning as SME for the Modernized Part of this Application.",
    highlights: [
      "Developed high‑performance APIs serving 25+ applications at sub‑100ms latency, applying advanced tuning with Spring Cloud, Spring Data, and Elasticsearch to deliver lightning‑fast search and responsiveness.",
      "Fixed critical bugs in Dataform ETL stored procedures, improving data quality and ensuring seamless transformation of mainframe datasets into BigQuery tables that reliably feed downstream APIs.",
      "Implemented ETL jobs with GCS buckets for efficient I/O file management and optimized SFTP transfers with automated email notifications, surpassing legacy mainframe capabilities in speed and reliability.",
      "Automated ETL workflows on GCP using Cloud Run and Scheduler orchestrated via Terraform, enabling consistent daily batch processing while reducing operational overhead and manual intervention.",
      "Delivered 20+ features across Agile sprints by collaborating directly with product owners on requirement scoping, accelerating time‑to‑release and improving stakeholder alignment.",
      "Resolved Tekton pipeline failures, migrated CI/CD to GitHub Actions, remediated SAST vulnerabilities, and cut release cycles by 50%, significantly boosting reliability, security, and deployment speed.",
    ],
    tech: [
      "React",
      "Redux",
      "TypeScript",
      "Spring Boot",
      "REST API",
      "IBM DB2",
      "BigQuery",
      "GCP",
      "Batch Processing",
      "Tekton",
      "GitHub Actions",
    ],
    level: 5,
  },
  {
    title: "Ecommerce Catalog",
    company: "COTS Application - Infrastructure Migration",
    period: "2025Q3 – Present",
    description:
      "An Ecommerce Site that allows users to browse ford vehicles and its associated part details. Enabling successful migration by providing architecture, design, and technical guidance to vendor teams, ensuring alignment with enterprise standards and scalable migration practices.",
    highlights: [
      "Owning infrastructure responsibilities and providing assistance on CaaS Services, monitoring, and troubleshooting to ensure availability and integrity.",
      "Migrated MS SQL Server to GCP Cloud SQL, transitioning data sources, configuring DDL/DML, and maintaining infrastructure automation with Terraform.",
      "Configured weekly maintenance jobs to update statistics, rebuild indexes, and perform integrity checks, ensuring downtime avoidance and data integrity.",
      "Identified gaps in system design clarity and technical feasibility, drove feasibility analysis, POCs, prototyping and R&D to validate approaches, strengthening design documentation and de-risking technical decisions before implementation.",
      "Established Entra ID authentication with MFA, supported stakeholders in integrating it into code, and executed Load and Performance testing using  Dynatrace for Observability.",
    ],
    tech: [
      "Angular",
      "JavaScript",
      "Spring Boot",
      "Terraform",
      "MS SQL Server",
      "Entra Id",
      "GCP",
      "DB Migration",
      "OpenShift",
      "Dynatrace",
    ],
    level: 4,
  },
  {
    title: "Global Brand Protection System",
    company: "Legacy Application Modernization",
    period: "2025Q4 – 2026Q1",
    description:
      "An application used to seek Exemptions approvals and track Trademark compliance, which connects Global Analysts and Supervisors, to raise Requests, Proposals, and Approvals. Modernized this legacy application by rebuilding UI, optimizing data handling, enforcing security standards, and delivering resilient APIs with enterprise compliance.",
    highlights: [
      "Rebuilt the legacy UI using reusable React components, custom hooks, HOCs, Context API, memoization, and error boundaries, reducing site latency by 30%.",
      "Developed database-driven dropdowns, tree views, and virtualized tables with server-side caching, improving load efficiency for large-volume datasets.",
      "Implemented Elasticsearch-powered global search across requests, design guides, and proposals, enabling autocomplete and multi-field filtering.",
      "Enforced AES-GCM encryption for PII/SPII data and remediated 100+ OWASP vulnerabilities, achieving full compliance across SAST and DAST security tools.",
      "Designed APIs applying SOLID principles, design patterns, and Domain-Driven Design, improving modularity, scalability, and long-term maintainability.",
      "Improved API reliability through Redis-based distributed caching, pagination, and rate limiting, cutting latency and reducing infrastructure costs.",
      "Built test suites with GitHub Copilot under responsible AI review, validating complex logic and edge cases via Jest and JUnit, raising test coverage by 40%.",
    ],
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Spring Boot",
      "REST API",
      "Redis",
      "PostgreSQL",
      "GCP",
      "ADFS",
      "Tekton",
    ],
    level: 3,
  },
  {
    title: "Global Catalog",
    company: "Enhancement Project",
    period: "2025Q1 – 2025Q3",
    description:
      "An Inventory Management System that retrieves part details from Parts Control, allows users to catalog them, and distributes the information to multiple downstream systems. Enhanced application's modules by delivering new features, building resilient APIs, strengthening authentication, and streamlining CI/CD for performance and security.",
    highlights: [
      "Built Angular components including dynamic tables, tree views, and modals, delivering an intuitive UI that extended capabilities beyond the legacy system.",
      "Developed web pages using AI-assisted coding tools, incorporating lazy loading, breadcrumbs, authorization, and RxJS-based form validation.",
      "Built scalable distributed system APIs with PostgreSQL ACID transactions via Spring Data JPA, ensuring data consistency and reduced query latency.",
      "Engineered microservices with Kafka and data aggregation services, enabling reliable asynchronous messaging and scalable, decoupled architectures.",
      "Optimized Entra ID OIDC authentication by caching JWKS and validating claims with cache invalidation strategies, reducing auth latency by 65%.",
      "Implemented secure inter-service communication using Spring Cloud and unified dependency management with Gradle BOM across 15+ distributed microservices.",
      "Resolved an Apigee file transfer size limitation by architecting a GCS bucket solution with signed URLs, enabling secure access to large files.",
    ],
    tech: [
      "Angular",
      "TypeScript",
      "PrimeNG",
      "Spring Boot",
      "REST API",
      "PostgreSQL",
      "GCP",
      "Entra ID",
      "Pub/Sub",
      "Redis",
      "GitHub Actions",
    ],
    level: 2,
  },
  {
    title: "Global Service Parts Packaging System",
    company: "Legacy Application - Infrastructure Migration",
    period: "2024Q1 – 2026Q3",
    description:
      "Global Application for creating and managing packaging and logistics specifications of Engineering and Service Parts. Modernized legacy infrastructure by upgrading codebase, migrating workloads to OpenShift, strengthening API security, and optimizing batch operations with enterprise standards.",
    highlights: [
      "Migrated the legacy application and 10+ microservices to OpenShift, moving storage from S3 to PVC to meet legacy POSIX requirements, reducing cost and deployment complexity.",
      "Unified region-specific batch jobs into a single configurable multi-region application with concurrent processing, reducing maintenance and operational overhead.",
      "Built scalable microservices and multithreaded APIs using TDD and concurrency patterns, improving service throughput for downstream consumers.",
      "Orchestrated Kubernetes workloads including Deployments, Services, NetworkPolicies, Routes, and Secrets, with Prometheus monitoring, load balancing, and HPA.",
      "Integrated Dynatrace and Splunk via sidecar containers for load and performance testing, enabling proactive observability, metrics collection, and root cause analysis.",
      "Strengthened release governance and security through CI/CD, DevSecOps practices, authentication controls, and Apigee for APIs consumed by multiple internal applications.",
      "Facilitated reverse knowledge transfer sessions, mentoring 10+ team members on CronJobs, SSL/DNS, Prometheus rules, and alerting, with supporting process documentation.",
    ],
    tech: [
      "Java",
      "Struts",
      "JSF",
      "WAS Liberty",
      "Spring Boot",
      "MS SQL Server",
      "IBM DB2",
      "AWS",
      "Red Hat OpenShift",
      "ADFS",
      "JFrog",
      "Tekton",
      "Batch Processing",
    ],
    level: 1,
  },
];
