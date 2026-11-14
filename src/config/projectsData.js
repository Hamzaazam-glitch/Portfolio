export const FLAGSHIP_PROJECTS = [
  {
    id: 'face-matching',
    number: '01',
    category: 'Computer Vision & Vector Search',
    badge: 'Production Biometric Pipeline',
    title: 'Event Photo Face-Matching Platform',
    headline: 'Real-time facial landmark extraction and 512-dimensional vector indexing across tens of thousands of event photos.',
    problem: 'Event photographers capture 5,000 to 20,000 high-resolution photos per gathering. Manual tagging and distribution created 48–72 hour delays, leading to drop-off in attendee engagement and high labor costs.',
    architecture: {
      input: 'High-Res Event Photos (Bulk Upload)',
      stages: [
        { name: 'Detection Layer', detail: 'RetinaFace landmark & bounding-box isolation' },
        { name: 'Embedding Engine', detail: 'ArcFace 512-d biometric feature vector generation' },
        { name: 'Queue & Storage', detail: 'Celery + Redis asynchronous distributed worker pools' },
        { name: 'Vector Index', detail: 'Supabase pgvector with HNSW cosine similarity search' },
        { name: 'API & Webhook', detail: 'FastAPI endpoints for instantaneous attendee selfie query' }
      ],
      output: 'Sub-second personalized attendee gallery matching & auto-delivery'
    },
    mechanism: 'Utilizes RetinaFace for robust facial landmark detection under variable lighting, computes normalized 512-dimensional feature embeddings via ArcFace, and persists vectors in PostgreSQL with pgvector. Query selfies are embedded on-the-fly to execute sub-50ms approximate nearest neighbor (ANN) cosine similarity retrieval.',
    engineering: [
      'DeepFace',
      'ArcFace',
      'RetinaFace',
      'Supabase pgvector',
      'FastAPI',
      'Celery',
      'Redis',
      'PostgreSQL',
      'Python'
    ],
    impact: 'Engineered a fully automated ingest pipeline capable of indexing 10,000+ faces in minutes, reducing delivery turnaround from days to sub-second search with 99%+ verification accuracy.',
    image: '/assets/projects/face-matching-platform.png',
    alt: 'Event Photo Face-Matching Platform Architecture and Vector Search Interface',
    status: 'Flagship Production System',
    repoType: 'Architecture Case Study',
    github: null,
    demo: null
  },
  {
    id: 'sap-invoice-automation',
    number: '02',
    category: 'Enterprise Multimodal AI & HITL',
    badge: 'Multimodal Vision Automation',
    title: 'Enterprise SAP Accounts Payable Invoice Automation',
    headline: 'Zero-template multimodal document extraction with autonomous validation and human-in-the-loop exception routing.',
    problem: 'Accounts Payable teams manually keyed unstructured multinational supplier invoices into SAP ERP systems, suffering from error rates, delayed supplier discounts, and labor-intensive line-item reconciliation.',
    architecture: {
      input: 'Multilingual Invoices & Scanned PDFs',
      stages: [
        { name: 'Multimodal Parsing', detail: 'GPT-4 Vision & Gemini 1.5 Pro structured extraction' },
        { name: 'Schema Normalization', detail: 'Pydantic strict schema validation & currency alignment' },
        { name: 'Decision Engine', detail: 'LangGraph deterministic validation & confidence scoring' },
        { name: 'Exception Queue', detail: 'Human-in-the-Loop review dashboard for low-confidence lines' },
        { name: 'ERP Integration', detail: 'Automated SAP BAPI payload dispatch & audit trail' }
      ],
      output: 'Verified, reconciled SAP invoice entries with zero manual keying'
    },
    mechanism: 'Employs multimodal LLMs (GPT-4V and Gemini 1.5 Pro) with structured JSON schemas to parse non-standardized tabular line items. A LangGraph state machine verifies mathematical integrity, tax codes, and purchase order matches, routing invoices with confidence scores < 95% to a specialized human-in-the-loop review queue.',
    engineering: [
      'GPT-4 Vision',
      'Gemini 1.5 Pro',
      'Mistral AI',
      'LangGraph',
      'FastAPI',
      'Next.js',
      'SAP Integration',
      'TypeScript',
      'Python'
    ],
    impact: 'Automates end-to-end invoice reconciliation, dramatically cutting document processing cycle times while maintaining a 100% audit trail and deterministic financial safety rails.',
    image: '/assets/projects/sap-invoice-automation.png',
    alt: 'Enterprise SAP Accounts Payable Invoice Automation System Interface',
    status: 'Enterprise Production System',
    repoType: 'Architecture Case Study',
    github: null,
    demo: null
  },
  {
    id: 'aegisx',
    number: '03',
    category: 'Multi-Agent Autonomous Systems',
    badge: 'LangGraph Agent Architecture',
    title: 'AegisX AI-Powered Crypto Analysis System',
    headline: 'Directed acyclic graph (DAG) multi-agent orchestration for real-time market sentiment synthesis and quantitative risk evaluation.',
    problem: 'Fast-moving crypto market intelligence requires simultaneous analysis of on-chain data, social sentiment streams, technical indicators, and macroeconomic news, overwhelming human analysts.',
    architecture: {
      input: 'Live Market Data Feeds & Social Sentiment Streams',
      stages: [
        { name: 'Sentiment Agent', detail: 'NLP pipeline analyzing social commentary and news flow' },
        { name: 'Technical Agent', detail: 'Automated calculation of RSI, MACD, and volume anomalies' },
        { name: 'Risk Evaluator', detail: 'LangGraph state-machine coordinating debate & risk checks' },
        { name: 'Synthesis Engine', detail: 'Multi-model consensus protocol producing confidence scores' },
        { name: 'Operator Surface', detail: 'Interactive high-frequency decision dashboard' }
      ],
      output: 'Explainable, multi-perspective intelligence briefs with actionable confidence ratings'
    },
    mechanism: 'Constructed as a stateful multi-agent system in LangGraph where specialized agents execute concurrent investigative threads. Agents debate divergent signals, challenge edge cases, and converge on structured risk metrics before updating the shared state machine.',
    engineering: [
      'LangGraph',
      'LangChain',
      'OpenAI',
      'Python',
      'FastAPI',
      'TypeScript',
      'TailwindCSS'
    ],
    impact: 'Replaced manual multi-tab monitoring with an autonomous agent swarm that delivers synthesized, explainable market intelligence in seconds with explicit risk disclosures.',
    image: '/assets/projects/aegisx.png',
    alt: 'AegisX Multi-Agent Crypto Intelligence Dashboard',
    status: 'Agentic Core Platform',
    repoType: 'Architecture Case Study',
    github: null,
    demo: 'https://aegis-x-agent.vercel.app/#home'
  },
  {
    id: 'cleaning-service',
    number: '04',
    category: 'Agentic Operations & Dispatch',
    badge: 'Enterprise Operations Engine',
    title: 'AI Cleaning Service Management System',
    headline: 'Agentic operational layer coordinating autonomous multi-site workforce scheduling, SLA tracking, and dynamic dispatch.',
    problem: 'Commercial facility management required constant phone, chat, and spreadsheet intervention to handle dispatching, cancellations, team routing, and quality discrepancies across dozens of commercial sites.',
    architecture: {
      input: 'Client Requests, Service Bookings & Field Updates',
      stages: [
        { name: 'Scheduling Agent', detail: 'Constraint-satisfaction routing based on location & crew skill' },
        { name: 'Triage Agent', detail: 'Automated issue classification and urgent escalation' },
        { name: 'Quality Monitor', detail: 'Inspection report parsing and recurring defect anomaly detection' },
        { name: 'Notification Hub', detail: 'Two-way customer notification and SLA breach warnings' },
        { name: 'Executive View', detail: 'Live telemetry command center for operational leaders' }
      ],
      output: 'Autonomous, error-free scheduling and real-time operational visibility'
    },
    mechanism: 'Combines heuristic constraint solvers with LLM-powered conversational triage to orchestrate field staff allocations dynamically. Discrepancies in checklists trigger automated inspection tickets and route adjustments.',
    engineering: [
      'Python',
      'FastAPI',
      'OpenAI',
      'React',
      'PostgreSQL',
      'Docker'
    ],
    impact: 'Streamlined commercial cleaning coordination, reducing administrative dispatch overhead by orders of magnitude while providing a real-time operational command center.',
    image: '/assets/projects/ai-cleaning-service-management-system.png',
    alt: 'AI Cleaning Service Management System Operations Command Center',
    status: 'Production Operations System',
    repoType: 'Architecture Case Study',
    github: null,
    demo: null
  },
  {
    id: 'shopify-rag',
    number: '05',
    category: 'Vector Ingestion & Production RAG',
    badge: 'Async Catalog Synchronization',
    title: 'RAG-Powered Shopify Product Sync Pipeline',
    headline: 'Asynchronous catalog vectorization and semantic search pipeline enabling contextual conversational commerce.',
    problem: 'E-commerce stores with dynamic multi-thousand SKU catalogs suffer from stale search indices and brittle keyword queries, failing to answer nuanced conversational shopper inquiries.',
    architecture: {
      input: 'Shopify Store Catalog Webhooks & GraphQL Ingestion',
      stages: [
        { name: 'Ingestion Worker', detail: 'Celery tasks capturing product mutations via Webhooks' },
        { name: 'Chunker & Normalizer', detail: 'Structured attribute extraction and markdown synthesis' },
        { name: 'Embedding Worker', detail: 'Mistral / Gemini embeddings with rate-limit backoff' },
        { name: 'Vector Datastore', detail: 'Supabase pgvector with tenant-isolated namespaces' },
        { name: 'RAG Retrieval Engine', detail: 'Hybrid dense-sparse retrieval with conversational memory' }
      ],
      output: 'Sub-100ms context-grounded retrieval for conversational shopping assistants'
    },
    mechanism: 'Listens to product change events through webhooks, queues batch vectorization tasks via Redis and Celery, computes semantic embeddings using Mistral/Gemini models, and updates Supabase pgvector tables with transactional isolation. Retrieval uses reciprocal rank fusion between keyword and vector distance.',
    engineering: [
      'Mistral AI',
      'Gemini',
      'Supabase pgvector',
      'FastAPI',
      'Celery',
      'Redis',
      'Shopify GraphQL API',
      'Python'
    ],
    impact: 'Maintains sub-minute vector freshness across rapidly changing inventories while keeping AI shopping responses strictly grounded in verified inventory data.',
    image: '/assets/projects/shopify-rag-sync.png',
    alt: 'RAG-Powered Shopify Product Sync Pipeline Architecture',
    status: 'Production RAG Architecture',
    repoType: 'Architecture Case Study',
    github: null,
    demo: null
  },
  {
    id: 'itcna-expo-ocr',
    number: '06',
    category: 'OCR & Document Intelligence',
    badge: 'Enterprise Multimodal OCR',
    title: 'Business Card, Printed Paper & Panaflex Text Extraction System',
    headline: 'Automated OCR extraction pipeline parsing company names, emails, mobile numbers, and websites from physical expo materials.',
    problem: 'Following ITCNA Asia Expo, hundreds of business cards, printed papers, and booth panaflex photos collected from exhibitor booths required transcription. Manual data entry of company credentials was labor-intensive and prone to typographical errors.',
    architecture: {
      input: 'Business Cards, Printed Papers & Panaflex Photos (Upload / Drag-and-Drop)',
      stages: [
        { name: 'Upload & Review Surface', detail: 'Next.js frontend interface with drag-and-drop submission and preview validation' },
        { name: 'API Gateway', detail: 'FastAPI service managing image intake, payload validation, and task dispatch' },
        { name: 'Orchestration Workflow', detail: 'n8n workflow coordinating document routing, pre-processing, and multi-stage extraction' },
        { name: 'OCR Text Extraction', detail: 'Open-source PaddleOCR reading raw text lines across varied fonts, lighting, and angles' },
        { name: 'Regex & LLM Parsing', detail: 'Regex filters extracting emails, phones, and websites; LLM resolving company name' }
      ],
      output: 'Structured company records (Company Name, Email, Mobile Number, Website) ready for CRM sync'
    },
    mechanism: 'Users upload photos of business cards, printed documents, or booth panaflex banners (one company per item). The FastAPI backend forwards the image to an n8n processing pipeline where open-source PaddleOCR extracts the raw visual text. Python regular expressions isolate structured patterns (emails, mobile numbers, website URLs), while an LLM interprets unstructured surrounding text lines to identify the exact company name.',
    engineering: [
      'PaddleOCR',
      'FastAPI',
      'Next.js',
      'n8n',
      'LLM Entity Extraction',
      'Python',
      'Regex Parsing'
    ],
    impact: 'Assigned by company CEO after ITCNA Asia Expo to replace manual lead transcription with an automated extraction pipeline, enabling teams to upload expo collateral and directly obtain structured company contact records.',
    image: '/assets/projects/itcna-expo-extraction.png',
    alt: 'ITCNA Asia Expo Text Extraction System Interface',
    status: 'Client Production Pipeline',
    repoType: 'Architecture Case Study',
    github: null,
    demo: null
  },
  {
    id: 'nexis-cms',
    number: '07',
    category: 'Headless CMS & Content Architecture',
    badge: 'Headless CMS Concept',
    title: 'NexisCMS — Headless CMS Platform',
    headline: 'Landing page and dashboard preview for a headless CMS concept: blog, service and career content management, role-based access, and an API-first approach.',
    problem: 'Managing dynamic content across blogs, services, and career postings often requires heavy, rigid monolithic CMS setups that lack API flexibility and granular role-based access control.',
    architecture: {
      input: 'Structured Content, Media Assets & Role Definitions',
      stages: [
        { name: 'Frontend Surface', detail: 'Next.js landing experience and responsive dashboard interface' },
        { name: 'Styling Layer', detail: 'Tailwind CSS utility architecture with responsive components' },
        { name: 'Content Schema', detail: 'Modular schemas for blogs, service catalogs, and career listings' },
        { name: 'Access Control', detail: 'Role-based authorization structure for content editors and administrators' },
        { name: 'API Distribution', detail: 'API-first delivery layer for decoupled frontend consumers' }
      ],
      output: 'Decoupled, high-performance headless content management and delivery'
    },
    mechanism: 'Landing page and dashboard preview for a headless CMS concept: blog, service and career content management, role-based access, and an API-first approach.',
    engineering: [
      'Next.js',
      'Tailwind CSS'
    ],
    impact: 'Architected a modern API-first headless CMS concept with responsive dashboard workflows and role-based content modeling.',
    image: '/assets/projects/nexis-cms.png',
    alt: 'NexisCMS Headless Platform Dashboard Preview',
    status: 'Production Concept & Preview',
    repoType: 'Architecture Case Study',
    github: null,
    demo: 'https://nexis-cms.vercel.app'
  }
];

export const SUPPORTING_PROJECTS = [
  {
    id: 'latch-crm',
    category: 'AI CRM & Automation',
    title: 'Latch Automate CRM',
    description: 'Autonomous customer relationship platform integrating conversational qualification, lead scoring, and automated pipeline progression.',
    stack: ['Python', 'FastAPI', 'n8n', 'OpenAI', 'PostgreSQL'],
    impact: 'Automated multi-stage lead intake, conversational scoring, and real-time CRM updates.'
  },
  {
    id: 'lead-generation',
    category: 'Data Extraction & Enrichment',
    title: 'Enterprise Lead Generation Automation',
    description: 'High-throughput data extraction and enrichment engine synthesizing business intent signals and verified contact intelligence.',
    stack: ['Python', 'BeautifulSoup', 'n8n', 'OpenAI', 'Google Sheets API'],
    impact: 'Engineered resilient scraping and validation pipelines that eliminated manual prospect research.'
  },
  {
    id: 'gmail-agent',
    category: 'Agentic Workflow Automation',
    title: 'Gmail AI Automation Agent',
    description: 'Intelligent inbox assistant classifying incoming intent, generating context-rich drafts, and synchronizing operational tasks.',
    stack: ['Python', 'OpenAI', 'n8n', 'Gmail API'],
    impact: 'Accelerated high-volume email triage with human-in-the-loop confirmation before dispatch.'
  }
];
