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
        <div class="terminal-line"><span class="text-muted">Updated: November 2026 • Karachi, Pakistan (PK)</span></div>
        <div class="terminal-divider"></div>

        <div class="terminal-section">
          <div class="terminal-label">// CURRENT FOCUS & SPRINT</div>
          <p class="terminal-val">
            <span class="terminal-marker">▶</span> Building an AI invoice automation workflow with n8n, FastAPI and Supabase, covering purchase-order and goods-receipt matching. The ERP posting step is simulated until system access is available.
          </p>
        </div>

        <div class="terminal-section">
          <div class="terminal-label">// MULTI-AGENT SYSTEMS R&D</div>
          <p class="terminal-val">
            <span class="terminal-marker">▶</span> Working on AegisX, a multi-agent crypto analysis system built with LangGraph. Live demo available.
          </p>
        </div>

        <div class="terminal-section">
          <div class="terminal-label">// VECTOR INFRASTRUCTURE & PRODUCTION RAG</div>
          <p class="terminal-val">
            <span class="terminal-marker">▶</span> Shopify RAG Sync: syncing Shopify catalog data into Supabase pgvector for retrieval.
          </p>
        </div>

        <div class="terminal-section">
          <div class="terminal-label">// AVAILABILITY & ENGAGEMENT</div>
          <p class="terminal-val text-accent-cyan">
            <span class="terminal-marker">▶</span> Open to AI automation and ML engineering roles, and to freelance automation projects.
          </p>
        </div>

        <div class="terminal-footer">
          <span class="terminal-prompt">hamza@systems-core:~$</span> <span class="terminal-cursor">_</span>
        </div>
      </div>
    </div>
  `;
}
