export const SKILLS_DOMAINS = [
  {
    id: 'agentic',
    name: 'Agentic AI & Multi-Agent Systems',
    description: 'Autonomous state machines, directed acyclic graphs, tool execution, and multi-agent coordination.',
    color: '#ffb454',
    skills: [
      { name: 'LangGraph', level: 'Core Competency', detail: 'Stateful multi-agent DAGs & human-in-the-loop cycles' },
      { name: 'CrewAI', level: 'Advanced', detail: 'Role-based agent delegation and collaborative execution' },
      { name: 'LangChain', level: 'Advanced', detail: 'Chains, memory buffers, dynamic tool calling' },
      { name: 'Multi-Agent Swarms', level: 'Advanced', detail: 'Consensus protocols, debate layers, supervisor routing' },
      { name: 'Tool Calling & Function Calling', level: 'Mastery', detail: 'Deterministic JSON schema binding & validation' }
    ]
  },
  {
    id: 'vision',
    name: 'Computer Vision & Biometrics',
    description: 'Facial recognition, landmark detection, high-dimensional biometric embeddings, and image processing.',
    color: '#5eead4',
    skills: [
      { name: 'DeepFace', level: 'Advanced', detail: 'Biometric verification and facial attribute analysis' },
      { name: 'ArcFace', level: 'Advanced', detail: '512-dimensional facial feature representation' },
      { name: 'RetinaFace', level: 'Advanced', detail: 'High-precision facial landmark & bounding box isolation' },
      { name: 'OpenCV', level: 'Competency', detail: 'Image preprocessing, morphological operations, filtering' },
      { name: 'GPT-4 Vision', level: 'Mastery', detail: 'Multimodal document and visual table comprehension' }
    ]
  },
  {
    id: 'llm',
    name: 'LLM Systems & Production RAG',
    description: 'Frontier foundation models, vector embeddings, semantic retrieval, and guardrail validation.',
    color: '#8b5cf6',
    skills: [
      { name: 'Mistral AI', level: 'Production', detail: 'High-throughput embeddings and localized reasoning' },
      { name: 'Gemini 1.5 Pro', level: 'Production', detail: 'Long-context document ingestion and multimodal reasoning' },
      { name: 'OpenAI GPT-4o / GPT-4V', level: 'Production', detail: 'Complex multi-step reasoning and structured outputs' },
      { name: 'Hybrid Dense/Sparse RAG', level: 'Advanced', detail: 'Reciprocal rank fusion, semantic chunking' },
      { name: 'Pydantic & JSON Safeguards', level: 'Mastery', detail: 'Strict schema enforcement and zero-hallucination parsing' }
    ]
  },
  {
    id: 'vector',
    name: 'Data & Vector Systems',
    description: 'High-dimensional vector indexing, relational data architectures, and real-time caching.',
    color: '#38bdf8',
    skills: [
      { name: 'Supabase pgvector', level: 'Production', detail: 'HNSW vector indexing and cosine distance queries' },
      { name: 'PostgreSQL', level: 'Advanced', detail: 'Relational data modeling, ACID transactions, complex joins' },
      { name: 'Redis', level: 'Advanced', detail: 'In-memory queueing, rate limiting, and session state' },
      { name: 'SQL', level: 'Mastery', detail: 'Analytical querying, window functions, query optimization' },
      { name: 'Pandas & NumPy', level: 'Mastery', detail: 'Vectorized mathematical transformations and dataset cleansing' }
    ]
  },
  {
    id: 'backend',
    name: 'Backend & Distributed Systems',
    description: 'High-concurrency asynchronous APIs, distributed task workers, and enterprise integrations.',
    color: '#f59e0b',
    skills: [
      { name: 'FastAPI', level: 'Mastery', detail: 'Async ASGI endpoints, OpenAPI schemas, dependency injection' },
      { name: 'Python', level: 'Core Language', detail: 'Modern async I/O, object-oriented design, type hints' },
      { name: 'Celery', level: 'Production', detail: 'Distributed background job queues and worker concurrency' },
      { name: 'REST APIs & Webhooks', level: 'Mastery', detail: 'Event-driven webhook ingestion and secure authentication' },
      { name: 'SAP Integration', level: 'Applied', detail: 'Enterprise BAPI / RFC payload dispatch & validation' }
    ]
  },
  {
    id: 'ml',
    name: 'Machine Learning & Deep Learning',
    description: 'Classical predictive modeling, convolutional neural networks, and statistical inference.',
    color: '#ec4899',
    skills: [
      { name: 'TensorFlow & Keras', level: 'Competency', detail: 'CNNs, transfer learning, and deep classification pipelines' },
      { name: 'Scikit-Learn', level: 'Mastery', detail: 'Classification, regression, clustering, ensemble models' },
      { name: 'Feature Engineering', level: 'Advanced', detail: 'Encoding, scaling, dimensionality reduction, feature selection' },
      { name: 'Model Evaluation', level: 'Mastery', detail: 'Precision-recall trade-offs, ROC-AUC, cross-validation' }
    ]
  },
  {
    id: 'automation',
    name: 'Enterprise Automation',
    description: 'Workflow orchestration, cross-platform webhook integrations, and self-healing pipelines.',
    color: '#10b981',
    skills: [
      { name: 'n8n Enterprise', level: 'Mastery', detail: 'Complex multi-branch workflow automation and node scripting' },
      { name: 'Human-in-the-Loop', level: 'Advanced', detail: 'Approval queues, exception routing, audit trails' },
      { name: 'Gmail & CRM APIs', level: 'Advanced', detail: 'Programmatic inbox and pipeline synchronization' },
      { name: 'Shopify GraphQL', level: 'Advanced', detail: 'Batch product updates and webhook event listening' }
    ]
  },
  {
    id: 'frontend',
    name: 'Frontend & Data Visualization',
    description: 'Modern reactive interfaces, WebGL 3D canvases, and executive intelligence dashboards.',
    color: '#6366f1',
    skills: [
      { name: 'Next.js & React', level: 'Production', detail: 'Component architecture, SSR, responsive dashboard interfaces' },
      { name: 'TypeScript & ES6+', level: 'Advanced', detail: 'Strict typing, modern DOM manipulation, async flow' },
      { name: 'Three.js & WebGL', level: 'Applied', detail: 'Scene management, shaders, camera choreography' },
      { name: 'GSAP & ScrollTrigger', level: 'Mastery', detail: 'High-performance timeline animations and scrub effects' },
      { name: 'Power BI', level: 'Advanced', detail: 'Executive metric modeling, DAX queries, storytelling dashboards' }
    ]
  }
];
