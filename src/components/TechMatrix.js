export function renderTechMatrix(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const techCategories = [
    {
      num: '01',
      title: 'AI / MACHINE LEARNING',
      subtitle: 'Statistical modeling, deep neural networks & computer vision',
      core: [
        { name: 'Python', role: 'Core Language', icon: 'py' },
        { name: 'Scikit-Learn', role: 'Classical ML', icon: 'skl' },
        { name: 'TensorFlow / Keras', role: 'Deep Learning', icon: 'tf' },
        { name: 'DeepFace / ArcFace', role: '512-d Biometrics', icon: 'cv' }
      ],
      supporting: [
        'RetinaFace',
        'OpenCV',
        'NumPy',
        'Pandas',
        'Feature Engineering',
        'CNN Architectures',
        'Model Evaluation',
        'ROC-AUC Optimization'
      ]
    },
    {
      num: '02',
      title: 'AI SYSTEMS & AGENTIC ARCHITECTURES',
      subtitle: 'Multi-agent DAGs, tool calling & production RAG retrieval',
      core: [
        { name: 'LangGraph', role: 'Stateful DAG Swarms', icon: 'lg' },
        { name: 'LangChain', role: 'Tool Execution', icon: 'lc' },
        { name: 'Gemini 1.5 Pro', role: 'Multimodal Parsing', icon: 'gem' },
        { name: 'Mistral & Groq', role: 'High-Throughput RAG', icon: 'mis' }
      ],
      supporting: [
        'Multi-Agent Coordination',
        'CrewAI',
        'Deterministic Pydantic Schemas',
        'Human-in-the-Loop Safeguards',
        'Hybrid Dense-Sparse RAG',
        'Prompt Engineering',
        'JSON Schema Binding',
        'GPT-4 Vision'
      ]
    },
    {
      num: '03',
      title: 'BACKEND & DATA INFRASTRUCTURE',
      subtitle: 'High-concurrency async APIs, distributed queues & vector datastores',
      core: [
        { name: 'FastAPI', role: 'Async ASGI Endpoints', icon: 'fa' },
        { name: 'Supabase pgvector', role: 'Vector Embeddings', icon: 'sup' },
        { name: 'PostgreSQL', role: 'Relational Store', icon: 'pg' },
        { name: 'Celery & Redis', role: 'Distributed Task Queue', icon: 'cel' }
      ],
      supporting: [
        'REST APIs',
        'Webhooks',
        'SQL Optimization',
        'HNSW Indexing',
        'ACID Transactions',
        'Data Cleaning',
        'SAP BAPI Payload Dispatch'
      ]
    },
    {
      num: '04',
      title: 'AUTOMATION & TOOLS',
      subtitle: 'Enterprise workflow orchestration, containers & business intelligence',
      core: [
        { name: 'n8n Enterprise', role: 'Workflow Orchestration', icon: 'n8n' },
        { name: 'Docker', role: 'Containerization', icon: 'doc' },
        { name: 'Git & GitHub', role: 'Version Control', icon: 'git' },
        { name: 'Power BI', role: 'Executive Intelligence', icon: 'pbi' }
      ],
      supporting: [
        'VS Code',
        'Linux / Bash',
        'Postman',
        'Shopify GraphQL',
        'Gmail API',
        'Google Sheets API',
        'CI/CD Pipelines'
      ]
    }
  ];

  const marqueeItems = [
    'Python', 'FastAPI', 'LangGraph', 'Supabase pgvector', 'ArcFace',
    'Gemini 1.5 Pro', 'DeepFace', 'Scikit-Learn', 'TensorFlow', 'n8n Enterprise',
    'PostgreSQL', 'Redis', 'Celery', 'Docker', 'Mistral AI', 'Power BI',
    'RetinaFace', 'LangChain', 'OpenCV', 'REST APIs', 'SQL', 'Git'
  ];

  container.innerHTML = `
    <div class="tech-stack-container">
      <div class="tech-category-list">
        ${techCategories.map((cat, idx) => `
          <div class="tech-category-panel glass-card reveal" data-category="${cat.num}">
            <div class="tech-cat-header">
              <div class="tech-cat-title-row">
                <span class="tech-cat-num font-mono">${cat.num}</span>
                <span class="tech-cat-divider font-mono">//</span>
                <h3 class="tech-cat-name font-mono">${cat.title}</h3>
              </div>
              <p class="tech-cat-sub font-mono">${cat.subtitle}</p>
            </div>

            <!-- Core Technologies Grid -->
            <div class="tech-core-grid">
              ${cat.core.map((coreItem) => `
                <div class="tech-core-card">
                  <div class="core-card-icon font-mono">${coreItem.icon.toUpperCase()}</div>
                  <div class="core-card-info">
                    <strong class="core-name font-mono">${coreItem.name}</strong>
                    <span class="core-role font-mono">${coreItem.role}</span>
                  </div>
                </div>
              `).join('')}
            </div>

            <!-- Supporting Tech Pills -->
            <div class="tech-supporting-row font-mono">
              <span class="supporting-tag">// SUPPORTING:</span>
              ${cat.supporting.map((tool) => `
                <span class="tech-support-pill">${tool}</span>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>

      <!-- Infinite Marquee Ticker -->
      <div class="tech-marquee-wrapper" aria-hidden="true">
        <div class="tech-marquee-track">
          <div class="marquee-content font-mono">
            ${marqueeItems.map((item) => `
              <span class="marquee-pill"><span class="m-dot">●</span> ${item}</span>
            `).join('')}
          </div>
          <div class="marquee-content font-mono" aria-hidden="true">
            ${marqueeItems.map((item) => `
              <span class="marquee-pill"><span class="m-dot">●</span> ${item}</span>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `;
}
