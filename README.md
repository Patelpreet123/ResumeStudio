# ResumeStudio 🎯
### *Where Great Resumes Begin*

A free, browser-based resume builder made entirely with **HTML, CSS & JavaScript** — no frameworks, no backend, no login required. Everything runs on your local machine. Your data never leaves your device.

> 🔗 **Live Demo** — https://patelpreet123.github.io/ResumeStudio/

---

## 📌 Table of Contents

- [About the Project](#about-the-project)
- [Who Is It For](#who-is-it-for)
- [Features](#features)
  - [Layouts](#layouts)
  - [Sections](#sections)
  - [Profile Links](#profile-links)
  - [Custom Sections](#custom-sections)
  - [Inline Formatting](#inline-formatting)
  - [Settings Panel](#settings-panel)
  - [Undo / Redo](#undo--redo)
  - [Drag to Reorder](#drag-to-reorder)
  - [Page Overflow Warning](#page-overflow-warning)
  - [Print to PDF](#print-to-pdf)
- [Data Storage — localStorage](#data-storage--localstorage)
- [Export & Import](#export--import)
- [AI Features](#ai-features)
  - [ATS Score](#ats-score)
  - [AI Enhance](#ai-enhance)
  - [AI Generate Summary](#ai-generate-summary)
  - [How to Get a Free API Key](#how-to-get-a-free-api-key)
- [Demo Resume](#demo-resume)
- [Interactive Tutorial](#interactive-tutorial)
- [Tech Stack](#tech-stack)
- [What I Learned](#what-i-learned)
- [Feedback](#feedback)

---

## About the Project

ResumeStudio is a fully client-side resume builder. There is no server, no database, and no third-party service handling your data. Everything is built using plain HTML, CSS, and JavaScript — and the entire resume data is stored in your browser's localStorage.

It was built as a learning side project with the help of AI. Every part of the code was read, understood, and debugged manually — and the process taught a lot of real, practical web development concepts.

---

## Who Is It For?

ResumeStudio is **specifically designed and tweaked for tech students and CS undergrads** — especially those in the Indian IT market applying for SDE internships and campus placements at companies like Zoho, Freshworks, Flipkart, PhonePe, and Razorpay.

Unlike generic resume builders, everything here — from the default sections and profile links to the AI scoring rubric — is built keeping a **Computer Science student's resume** in mind.

---

## Features

### Layouts

Two resume layout options are available:

| Layout | Description |
|---|---|
| **Two Column** | Main column (60%) for core content + Side column (40%) for supporting info |
| **Single Column** | All sections stacked top to bottom in one column |

You can switch between layouts at any time from the top bar. When you switch, spacing and padding auto-adjust for the new format.

---

### Sections

The following sections come preloaded and ready to fill:

| Section | Type |
|---|---|
| Profile Summary | Paragraph text |
| Education | Degree, School, Dates, Grade |
| Experience | Role, Company, Date, Description |
| Technical Skills | Skill categories with tags |
| Projects | Name, Date, Description, Links |
| Field of Interest | Bullet list |
| Achievements | Bullet list |
| Hackathons | Name, Date, Description, Links |
| Hobbies | Paragraph text |

Each section can be renamed, reordered, moved between columns, or deleted.

---

### Profile Links

Pre-filled platform name slots included:

- LinkedIn
- GitHub
- LeetCode
- CodeForces
- CodeChef
- HackerRank
- Codolio

You can reorder them using the up/down arrows, delete any you don't need, or add completely new ones. Only links with a URL filled in will appear on the resume.

---

### Custom Sections

Click **➕ Add Section** to create a new section from scratch. You get to choose:

**Section Title** — anything you want (e.g. Certifications, Open Source, Publications)

**Format Type** — choose from 6 types:

| Type | Best For |
|---|---|
| Projects / Hackathons | Name, Date, Description, Live + GitHub links |
| Experience | Role, Company, Date, Description |
| Technical Skills | Skill categories with tag-style inputs |
| Education | Degree, School, Dates, Grade type |
| Bullet List | Interests, Achievements, simple items |
| Paragraph | Free-form text block |

**Column** — Main (60%) or Side (40%) — only for Two Column layout.

---

### Inline Formatting

Use these shortcuts inside any text field — they render live on the resume:

| Shortcut | Output |
|---|---|
| `**text**` | **Bold** |
| `*text*` | *Italic* |
| `__text__` | Underline |
| `++text++` | Larger emphasis text |

No rich text editor needed. Just type naturally.

---

### Settings Panel

Click **⚙️ Settings** to access full customisation:

**Accent Color**
- Full color picker — choose any color
- 10 quick color swatches (Black, Navy, Maroon, Purple, Teal, Amber, Royal Blue, Forest Green, Violet, Crimson)

**Theme Presets** — one click sets both color and font together:
- Minimal Black (Calibri)
- Navy Pro (Arial)
- Warm Maroon (Georgia)
- Royal Purple (Garamond)

**Font Family** — choose from 6 options:
- Calibri *(default, clean)*
- Arial *(ATS-safe)*
- Georgia *(classic serif)*
- Garamond *(elegant)*
- Times New Roman *(traditional)*
- Palatino *(literary)*

**Line Spacing** — slider from 1.0 to 2.0

**Page Padding** — slider from 5mm to 30mm

**Section Order & Columns**
- Move any section up or down within its column
- Move any section from Main column to Side column and vice versa
- In Single Column mode, reorder all sections top to bottom

---

### Undo / Redo

Full undo/redo history with up to **50 saved states**.

- Click **↩ Undo** or press `Ctrl+Z`
- Click **↪ Redo** or press `Ctrl+Y`

History is recorded with a short debounce — it doesn't create a new state on every single keystroke, only after you pause typing.

---

### Drag to Reorder

Within any section (Projects, Education, Experience, etc.) — each item has a **☰ Drag** handle. Hold and drag it to reorder items within that section. Works for all section types.

---

### Page Overflow Warning

If your resume content exceeds one A4 page:

- A **red pulsing warning banner** appears at the bottom right
- A **red dashed line** is drawn on the resume preview exactly where the page break would fall, with a label showing "Page 2 starts here ✂"

The measurement uses the browser's own CSS mm-to-pixel engine — not hardcoded math — so it's accurate across all screen sizes and zoom levels.

---

### Print to PDF

Click **Print PDF** when your resume is ready.

> **Best results:** Use **Google Chrome** and set print margins to **None** in the print dialog.

The editor panel, tutorial overlays, and page break lines are all hidden during print. Only the clean resume renders.

---

## Data Storage — localStorage

ResumeStudio does not use any server or database.

Your browser has a built-in storage area called **localStorage** — think of it as a sticky note your browser keeps for a specific website. Every time you make a change, your resume is saved there instantly — no internet connection needed, no account, no server involved.

**Close the tab, shut your laptop, come back tomorrow** — everything is exactly where you left it.

Your data stays completely on your device and is never sent anywhere.

> ⚠️ **Note:** localStorage is tied to one specific browser on one specific device. If you clear your browser data or switch devices, you will lose your progress — which is why Export & Import exists.

---

## Export & Import

Since localStorage is browser and device specific, Export & Import lets you take your resume anywhere.

**Export**
- Click **💾 Export** in the top bar
- Your resume downloads as a `.json` file on your computer
- Your API key is automatically removed from the export for security

**Import**
- Click **📂 Import** and select a previously exported `.json` file
- Your resume loads back instantly, exactly as it was — ready to edit
- The file is validated before loading — invalid files are rejected with a clear error message

**Use cases:**
- Switch between devices or browsers
- Keep multiple versions of your resume (export before making big changes)
- Share your resume data with someone else to load in their ResumeStudio
- Rework on the same resume later — just import the json file back and continue right where you left off

---

## AI Features

AI features use the **grok API** running **Llama 3.3 70B** — one of the fastest and most capable open models available. It is **completely free** and does not require a credit card.

> All AI buttons have a **5-second cooldown** after each use to prevent accidental repeated calls.

---

### ATS Score

Click **🎯 ATS Check** to get your resume analyzed.

You can optionally paste a **Job Description** — or leave it blank for a general SDE internship review calibrated for the Indian IT market.

**What you get:**
- A score out of 100
- One-line summary of your strongest asset and biggest gap
- Missing keywords and skills (only genuinely absent ones — not things already in your resume)
- Specific, actionable improvement suggestions

**Scoring Rubric (Indian B.Tech SDE focus):**

| Category | Points |
|---|---|
| DSA & Competitive Programming (LeetCode, CodeChef, CodeForces) | 25 |
| Project Quality (real-world features, deployment, APIs) | 30 |
| Bullet Point Quality (XYZ impact format) | 20 |
| Tech Stack relevance for Indian market | 15 |
| Resume Completeness (all sections + working links) | 10 |

> Score calibration: 70–80 = strong shortlist candidate. 80–90 = excellent. 90+ = exceptional.

---

### AI Enhance

Every description field (Projects, Experience, Education, etc.) has an **✨ AI Enhance** button.

It rewrites your existing text into strong, ATS-optimised bullet points using the **XYZ Impact Format**:

> *[Action Verb] [what you built] using [specific technology], [resulting in / which] [measurable outcome]*

**Rules enforced by the AI:**
- Starts every bullet with a strong action verb (Built, Developed, Implemented, Designed, etc.)
- Keeps all technology names exactly as given
- No buzzwords (no "leveraged", "synergised", "spearheaded")
- Keeps numbers and metrics if present in the original
- Each bullet is 1–2 lines maximum

---

### AI Generate Summary

On the **Profile Summary** section, click **✨ Generate** to auto-write your summary.

The AI reads your entire resume — education, skills, projects, achievements, competitive programming stats — and writes a tight 2–3 sentence summary following this structure:

- **Sentence 1** — Identity: year, institution, CGPA (only if strong)
- **Sentence 2** — Technical depth: strongest tech stack + most impactful project
- **Sentence 3** — Differentiator: CP stats, hackathon, or award (only if genuinely strong)

No first-person pronouns. No filler words. No invented details.

> **Tip:** Fill in your other sections first, then generate the summary — the more data available, the better the output.

---

### How to Get a Free API Key

1. Go to [console.grok.com](https://console.grok.com)
2. Sign in with Google
3. Click **API Keys** → **Create API Key**
4. Copy the key (starts with `gsk_...`)
5. Open ResumeStudio → click **⚙️ Settings** → paste it in the **grok API Key** field

That's it. The key is saved in your localStorage and persists across sessions. It is never included in JSON exports.

---

## Demo Resume

Open the app → click **🪄 Menu** → **Load Demo Resume**.

This loads a real, filled resume — not a fake placeholder. It's the developer's own actual resume built entirely using ResumeStudio, with real projects, real links, and real data.

You can explore it, edit it, try out the AI features on it, and then start fresh with your own using **New Template** whenever you're ready.

---

## Interactive Tutorial

First-time users see a **Start Menu** with three options:

| Option | Description |
|---|---|
| 🆕 New Template | Start with a clean blank resume |
| 🎓 Interactive Tutorial | A step-by-step guided spotlight tour of all key features |
| 📄 Load Demo Resume | See a fully filled real resume example |

The tutorial uses a **spotlight effect** — it dims the entire screen and highlights one feature at a time with an explanation tooltip. You can exit at any point.

You can reopen the Start Menu anytime using the **🪄 Menu** button in the top bar.

---

## Tech Stack

| Technology | Usage |
|---|---|
| HTML5 | Structure and layout |
| CSS3 | Styling, themes, CSS variables, print media queries |
| Vanilla JavaScript | All logic — no frameworks or libraries |
| localStorage API | Auto-saving all resume data in the browser |
| grok API (Llama 3.3 70B) | AI features — ATS scoring, enhance, summary generation |
| Google Apps Script | Collecting user feedback via a serverless Google Sheet web app |
| CSS @media print | Clean A4 PDF output directly from the browser |
| Drag and Drop API | Reordering items within sections |
| Fetch API + async/await | All API calls with proper error handling |

---

## What I Learned

This project was built with the help of AI as a learning exercise. Here's what the process taught:

- **localStorage management**
- **API integration**
- **DOM manipulation**
- **Google Sheets + Apps Script** for feedback data
- **JSON data structuring**
and much more...

AI wrote a significant portion of the code. But reading it, understanding it, debugging it, and connecting everything together — that's where the real learning happened.

---

## Feedback

If you find a bug, a glitch, or have an idea for a new feature — please drop your feedback directly in the app.

There's a **💬 Feedback** button built right inside ResumeStudio. It takes less than a minute and goes directly to the developer.

---

## Author

**Preet Patel**  
3rd Year B.Tech CSE — Parul University  
[LinkedIn](https://www.linkedin.com/in/0xpreetpatel/) • [GitHub](https://github.com/Patelpreet123) • [LeetCode](https://leetcode.com/u/Preet_Patel_17/)

---

*Built with HTML, CSS & JavaScript — and a lot of learning along the way.*
