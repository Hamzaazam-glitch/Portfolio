# Pending Project URLs Checklist

Yeh checklist un تمام projects aur fields ki hai jin ke real URLs (Live Demo / GitHub Repository) abhi pending hain. Fake URLs code se poori tarah hata diye gaye hain.

Jab real URL mile, to seedha file mein ja kar corresponding field mein URL string paste kar dein. Button aur browser address bar khud-ba-khud render ho jayenge.

---

## Central Target File
**File:** `src/config/projectsData.js`  
(Har project ka object `export const FLAGSHIP_PROJECTS = [ ... ]` array ke andar mojood hai)

---

## Projects Status & Target Fields

### 1. Event Photo Face-Matching Platform
- **Project ID:** `face-matching`
- **Location in `src/config/projectsData.js`:** Line ~38
- **Fields to populate:**
  - `demo`: `null` ➔ Real live deployment URL yahan paste karein (e.g. `'https://...'`)
  - `github`: `null` ➔ Real GitHub repository URL yahan paste karein (e.g. `'https://github.com/...'`)

### 2. Enterprise SAP Accounts Payable Invoice Automation
- **Project ID:** `sap-invoice-automation`
- **Location in `src/config/projectsData.js`:** Line ~77
- **Fields to populate:**
  - `demo`: `null` ➔ Real live demo URL yahan paste karein
  - `github`: `null` ➔ Real GitHub repository URL yahan paste karein

### 3. AegisX AI-Powered Crypto Analysis System
- **Project ID:** `aegisx`
- **Location in `src/config/projectsData.js`:** Line ~114
- **Fields to populate:**
  - `demo`: `'https://aegis-x-agent.vercel.app/#home'` ➔ **[ACTIVE & VERIFIED]**
  - `github`: `null` ➔ Real GitHub repository URL yahan paste karein

### 4. AI Cleaning Service Management System
- **Project ID:** `cleaning-service`
- **Location in `src/config/projectsData.js`:** Line ~151
- **Fields to populate:**
  - `demo`: `null` ➔ Real live demo URL yahan paste karein
  - `github`: `null` ➔ Real GitHub repository URL yahan paste karein

### 5. RAG-Powered Shopify Product Sync Pipeline
- **Project ID:** `shopify-rag`
- **Location in `src/config/projectsData.js`:** Line ~189
- **Fields to populate:**
  - `demo`: `null` ➔ Real live demo URL yahan paste karein
  - `github`: `null` ➔ Real GitHub repository URL yahan paste karein

### 6. Business Card, Printed Paper & Panaflex Text Extraction System
- **Project ID:** `itcna-expo-ocr`
- **Location in `src/config/projectsData.js`:** Line ~225
- **Fields to populate:**
  - `demo`: `null` ➔ Real live demo URL yahan paste karein
  - `github`: `null` ➔ Real GitHub repository URL yahan paste karein

---

## Rendering Behavior (Verified)
- **Buttons (Cards & Modal):** Jab tak `demo` ya `github` field `null` ya invalid hai, button render **nahi** hoga. Jaise hi valid URL (`http://` ya `https://`) paste karenge, button automatically display ho jayega.
- **Browser Address Bar:** Agar `demo` URL valid hai to address bar mein real domain show hota hai (e.g. AegisX par `https://aegis-x-agent.vercel.app/#home`). Agar `demo` null hai to address bar clean aur neutral rehta hai (koi fake domain nahi dikhta).
