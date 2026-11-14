export function renderNowTerminal(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <div class="now-terminal-shell glass-card">
      <div class="terminal-header">
        <div class="terminal-dots">
          <span class="dot dot-red"></span>
          <span class="dot dot-yellow"></span>
          <span class="dot dot-green"></span>
        </div>
        <div class="terminal-title font-mono">
          <span class="terminal-user">hamza@systems-core</span>:<span class="terminal-path">~</span>$ cat /now.md
        </div>
        <div class="terminal-status-badge font-mono">
          <span class="pulse-indicator"></span> LIVE_STATUS: ACTIVE
        </div>
      </div>
      <div class="terminal-body font-mono">
        <div class="terminal-line"><span class="terminal-prompt">#</span> <span class="text-accent-gold">SYSTEM STATUS // NOW</span></div>
        <div class="terminal-line"><span class="text-muted">Updated: September 2026 • Karachi, Pakistan (PK)</span></div>
        <div class="terminal-divider"></div>

        <div class="terminal-section">
          <div class="terminal-label">// CURRENT FOCUS & SPRINT</div>
          <p class="terminal-val">
            <span class="terminal-marker">▶</span> Architecting <strong>Enterprise SAP Accounts Payable Automation</strong> — zero-template multimodal document parsing using Gemini 1.5 Pro and GPT-4V, coupled with LangGraph deterministic validation state machines and automated SAP BAPI payload reconciliation.
          </p>
        </div>

        <div class="terminal-section">
          <div class="terminal-label">// MULTI-AGENT SYSTEMS R&D</div>
          <p class="terminal-val">
            <span class="terminal-marker">▶</span> Benchmarking <strong>AegisX</strong> multi-agent directed acyclic graphs (DAGs) in LangGraph: orchestrating real-time consensus protocols, sentiment synthesis, and quantitative risk checks across high-frequency market feeds.
          </p>
        </div>

        <div class="terminal-section">
          <div class="terminal-label">// VECTOR INFRASTRUCTURE & PRODUCTION RAG</div>
          <p class="terminal-val">
            <span class="terminal-marker">▶</span> Maintaining sub-minute freshness for <strong>Shopify RAG Sync</strong>: asynchronous catalog embedding updates using Supabase pgvector, HNSW cosine distance indices, and Celery worker pools.
          </p>
        </div>

        <div class="terminal-section">
          <div class="terminal-label">// AVAILABILITY & ENGAGEMENT</div>
          <p class="terminal-val text-accent-cyan">
            <span class="terminal-marker">▶</span> Open for Senior AI Engineer, Applied Machine Learning, and Agentic Systems Architect roles with high-velocity product teams worldwide.
          </p>
        </div>

        <div class="terminal-footer">
          <span class="terminal-prompt">hamza@systems-core:~$</span> <span class="terminal-cursor">_</span>
        </div>
      </div>
    </div>
  `;
}
