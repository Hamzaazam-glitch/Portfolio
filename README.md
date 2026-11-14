# Muhammad Hamza Azam — AI Systems Architect Portfolio

Production portfolio showcasing applied AI systems, multi-agent architectures (LangGraph), biometric computer vision (ArcFace/RetinaFace), enterprise SAP ERP automation, and high-throughput vector retrieval (Supabase pgvector).

## Tech Stack
- **Bundler & Build Tool:** Vite 8 (ES modules, code-split vendor bundles)
- **3D Graphics:** Three.js (interactive WebGL Neural Core)
- **Motion & Smooth Scroll:** GSAP 3 (ScrollTrigger), Lenis
- **Styling:** Vanilla CSS design system with full reduced-motion & mobile responsive support
- **Backend / Serverless:** Node.js serverless endpoint (`api/contact.js`)

## Local Development & Build
- `npm install` — Install dependencies
- `npm run dev` — Start local development server with Vite middleware on port 3000
- `npm run build` — Compile production bundle into `dist/`
- `npm run preview` — Preview production build locally

## Environment Variables
The following environment variables are required for contact form database persistence and email notifications. Configure them in `.env` locally or in Vercel project settings:

- `SUPABASE_URL` — Supabase project URL endpoint
- `SUPABASE_SERVICE_ROLE_KEY` — Supabase service role secret key (bypasses RLS for server-side inserts)
- `SUPABASE_KEY` — Supabase anon key fallback
- `SUPABASE_TABLE` — Optional table override (defaults to `contact_messages`)
- `RESEND_API_KEY` — Resend API key for transactional email dispatch
- `RESEND_FROM_EMAIL` — Verified sender address in Resend (defaults to `onboarding@resend.dev`)
- `NOTIFICATION_EMAIL` — Recipient email address for inbound inquiries
