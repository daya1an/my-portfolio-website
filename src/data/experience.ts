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
      "Spring",
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
      "Terraform",
      "MS SQL Server",
      "Entra Id",
      "GCP",
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
      "Rewrote legacy UI, cutting load time 50% by building reusable React components with custom hooks, wrapper classes, and Context API, applying BDD practices for maintainability.",
      "Built MongoDB‑driven dropdowns, tree views, and virtualized tables with server‑side caching, improving efficiency and scalability for large‑volume datasets.",
      "Implemented Elasticsearch for global search across requests, design guides, and proposals, enabling autocomplete and multi‑field filtering for faster discovery.",
      "Enforced AES‑GCM encryption for PII/SPII data sensitivity and remediated 60+ OWASP issues, achieving full compliance with SAST & DAST security tools.",
      "Developed APIs applying SOLID principles, DDD, and BDD, with Redis‑based distributed caching, pagination, rate limiting, and query optimization for high‑performance services.",
      "Built comprehensive test suites, leveraging GitHub Copilot to validate complex logic and edge cases using Jest (frontend) and JUnit (backend), achieving 100% coverage.",
    ],
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Spring",
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
      "Built Angular components including dynamic tables, tree views, and pop‑ups, delivering intuitive UI and extending capabilities beyond the legacy system.",
      "Implemented responsive web pages with lazy loading, breadcrumbs, and authorization, leveraging RxJS for input validation against malformed data.",
      "Developed multi‑tiered REST APIs with ACID‑compliant ORM services using Spring Data JPA & Hibernate, ensuring transactional consistency and reliability.",
      "Engineered microservices with Kafka and data aggregation services, enabling reliable asynchronous messaging and scalable, decoupled architectures.",
      "Optimized identity management via Redis‑backed JWT caching with cache invalidation strategies for Entra ID OIDC, cutting authentication latency by 65%.",
      "Enabled pre‑authorized communication via Spring Cloud across 10 microservices with Gradle BOM, reducing version conflicts and simplifying upgrades.",
      "Resolved APIGEE file transfer limitations by architecting a GCS bucket solution with signed URLs, enabling secure access for large files.",
    ],
    tech: [
      "Angular",
      "TypeScript",
      "PrimeNG",
      "Spring",
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
      "Migrated legacy monolithic application and 10+ microservices from AWS to OpenShift Kubernetes, enhancing reliability, scalability, and deployment efficiency.",
      "Unified region‑specific batch jobs into scheduled systems, ensuring cross‑regional consistency and distributed transactions in globally available platforms.",
      "Shifted build system from Ant to Gradle and enabled Tekton PAC pipeline, improving operational stability and reducing deployment time by 50%.",
      "Orchestrated workloads using Deployments, Services, Ingress, Egress, Routes, Prometheus, and Secrets, with load balancing and HPA for scalable performance.",
      "Integrated Dynatrace and Splunk via sidecar containers for LnP testing, enabling proactive observability, root cause analysis, and reduced MTTR.",
      "Strengthened release governance and security via CI/CD, DevSecOps, authentication controls, and Apigee for APIs consumed by multiple internal applications.",
      "Led reverse KT sessions, mentoring team members on CronJob scheduling, SSL/DNS mapping, alerts, and rules for batch jobs and APIs.",
    ],
    tech: [
      "Java",
      "Struts",
      "JSF",
      "WAS Liberty",
      "Spring",
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
