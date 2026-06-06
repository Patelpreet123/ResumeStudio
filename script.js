let activeTab = "personal";
let draggedItem = null;

const blankData = {
  template: "two-column",
  isDemo: false,
  settings: {
    accentColor: "#000000",
    lineHeight: 1.5,
    pagePadding: 10,
    font: "Calibri",
    aiApiKey: "",
  },
  personal: {
    name: "",
    role: "",
    email: "",
    phone: "",
    location: "",
    links: [
      { name: "LinkedIn", url: "" },
      { name: "GitHub", url: "" },
      { name: "LeetCode", url: "" },
      { name: "CodeForces", url: "" },
      { name: "CodeChef", url: "" },
      { name: "HackerRank", url: "" },
      { name: "Codolio", url: "" },
    ],
  },
  sections: [
    {
      id: "education",
      title: "Education",
      type: "education",
      column: "main",
      items: [],
    },
    {
      id: "experience",
      title: "Experience",
      type: "experience",
      column: "main",
      items: [],
    },
    {
      id: "skills",
      title: "Technical Skills",
      type: "skills",
      column: "main",
      items: [],
    },
    {
      id: "projects",
      title: "Projects",
      type: "project",
      column: "main",
      items: [],
    },
    {
      id: "interests",
      title: "Field of Interest",
      type: "simple",
      column: "side",
      items: [],
    },
    {
      id: "achievements",
      title: "Achievements",
      type: "simple",
      column: "side",
      items: [],
    },
    {
      id: "hackathons",
      title: "Hackathons",
      type: "project",
      column: "side",
      items: [],
    },
    {
      id: "hobbies",
      title: "Hobbies",
      type: "text",
      column: "side",
      value: "",
    },
  ],
};

const demoData = {
  template: "two-column",
  isDemo: true,
  settings: {
    accentColor: "#5B21B6",
    lineHeight: 1.4,
    pagePadding: 5,
    font: "Arial",
    aiApiKey: "",
  },
  personal: {
    name: "PREET PATEL",
    role: "3rd Year CSE Undergraduate",
    email: "preet1p3p@gmail.com",
    phone: "+91-9054300958",
    location: "Vadodara, Gujarat, India",
    links: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/0xpreetpatel/",
      },
      { name: "GitHub", url: "https://github.com/Patelpreet123" },
      { name: "LeetCode", url: "https://leetcode.com/u/Preet_Patel_17/" },
      {
        name: "CodeForces",
        url: "https://codeforces.com/profile/Preet__Patel",
      },
      {
        name: "CodeChef",
        url: "https://www.codechef.com/users/preet_patel",
      },
      { name: "Codolio", url: "https://codolio.com/profile/the_preet" },
    ],
  },
  sections: [
    {
      id: "summary",
      title: "Profile Summary",
      type: "text",
      column: "main",
      value:
        "CSE undergraduate with a strong foundation in Data Structures & Algorithms and frontend development. Proficient in Java, JavaScript, HTML5, and CSS3, with hands-on experience building interactive web applications using DOM manipulation and event-driven logic. Actively involved in competitive programming and consistently applying problem-solving skills to real projects and coding challenges.",
    },
    {
      id: "education",
      title: "Education",
      type: "education",
      column: "main",
      items: [
        {
          degree: "B.Tech in Computer Science and Engineering (CSE)",
          school: "Parul Institute Of Technology (PIT), Parul University",
          startDate: "July 2024",
          endDate: "Present",
          gradeType: "CGPA",
          gradeValue: "9.43/10.0",
          description: "",
        },
        {
          degree: "Class XII CBSE",
          school: "Bhakt English Medium School, Kakrolia, Gujarat",
          startDate: "",
          endDate: "",
          gradeType: "Percentage",
          gradeValue: "79%",
          description: "",
        },
      ],
    },
    {
      id: "skills",
      title: "Technical Skills",
      type: "skills",
      column: "main",
      items: [
        {
          title: "Languages:",
          skillsList: ["Java", "JavaScript", "HTML5", "CSS3", "Python"],
        },
        {
          title: "Concepts:",
          skillsList: [
            "Data Structures & Algorithms",
            "Object-Oriented Programming",
          ],
        },
        {
          title: "Tools & Platforms:",
          skillsList: ["Git", "GitHub", "VS Code", "Intellij IDEA"],
        },
      ],
    },
    {
      id: "projects",
      title: "Projects",
      type: "project",
      column: "main",
      items: [
        {
          title: "Greedy Dice Game (using JS, HTML, CSS)",
          date: "MAR 2026",
          description:
            "• Developed a 2-player turn-based dice game with score tracking, Hold functionality, and reset support.\n• Implemented dynamic player switching, random dice rolls, and win condition logic using JavaScript.\n• Used DOM manipulation and class toggling to update the UI based on game state.",
          liveLink: "https://patelpreet123.github.io/Greedy_Dice/",
          githubLink: "https://github.com/Patelpreet123/Greedy_Dice",
        },
        {
          title: "Number Guessing Game (using JS, HTML, CSS)",
          date: "MAR 2026",
          description:
            "• Built a browser-based number guessing game using JavaScript with random number generation, input validation, and score tracking.\n• Used an array to store previous guesses and prevent duplicate entries, improving gameplay logic and user experience.\n• Added features like high score persistence, replay support (without reloading), and high/low feedback for each guess. Hosted the project on GitHub for version control and deployment.",
          liveLink: "https://patelpreet123.github.io/Gusser_Game/",
          githubLink: "https://github.com/Patelpreet123/Gusser_Game",
        },
      ],
    },
    {
      id: "interests",
      title: "Field of Interest",
      type: "simple",
      column: "side",
      items: [
        { text: "Competitive Coding" },
        { text: "Web Development (MERN stack)" },
        { text: "Artificial Intelligence And Machine Learning (AI/ML)" },
      ],
    },
    {
      id: "achievements",
      title: "Achievements",
      type: "simple",
      column: "side",
      items: [
        {
          text: "**Competitive Programming Profiles:** LeetCode: Solved 400+ (Rating: 1723) CodeChef: 2★ (Rating: 1494) CodeForces: Newbie (Rating: 1070)",
        },
        {
          text: "Awards: Felicitated as a University Topper at the Dewang Mehta IT Awards at the AUDA auditorium, Ahmedabad (August 2025).",
        },
      ],
    },
    {
      id: "hackathons",
      title: "Hackathons",
      type: "project",
      column: "side",
      items: [
        {
          title: "ODOO X GCET Hackathon 2025 (Offline Final Round)",
          date: "DEC 2025 - FEB 2026",
          description:
            "Built RentalHub, a MERN-stack rental management system, Implemented role-based access control, overbooking prevention, and flexible rental pricing mechanisms.",
          liveLink: "https://rental-management-system-nine.vercel.app/",
          githubLink: "https://github.com/Patelpreet123/RentalManagementSystem",
        },
        {
          title: "SIH 2025 (Smart India Hackathon 2025) - 2 Rounds",
          date: "NOV 2025 - DEC 2025",
          description: "",
          liveLink: "",
          githubLink: "",
        },
      ],
    },
    {
      id: "hobbies",
      title: "Hobbies",
      type: "text",
      column: "side",
      value:
        "Enjoy playing the keyboard and flute, also play chess in free time.",
    },
  ],
};
let resumeData =
  JSON.parse(localStorage.getItem("preetResumeStateV33")) || blankData;
if (
  resumeData.settings.groqApiKey !== undefined &&
  !resumeData.settings.aiApiKey
) {
  resumeData.settings.aiApiKey = resumeData.settings.groqApiKey;
}
if (
  resumeData.settings.geminiApiKey !== undefined &&
  !resumeData.settings.aiApiKey
) {
  resumeData.settings.aiApiKey = resumeData.settings.geminiApiKey;
}
delete resumeData.settings.groqApiKey;
delete resumeData.settings.geminiApiKey;
delete resumeData.settings.aiProvider;

if (resumeData.settings.aiApiKey === undefined)
  resumeData.settings.aiApiKey = "";
if (!resumeData.settings.font) resumeData.settings.font = "Calibri";
if (!resumeData.sections.find((s) => s.id === "summary")) {
  resumeData.sections.unshift({
    id: "summary",
    title: "Profile Summary",
    type: "text",
    column: "main",
    value: "",
  });
}
const fontMap = {
  Calibri: "'Calibri', 'Helvetica Neue', Helvetica, Arial, sans-serif",
  Arial: "Arial, 'Helvetica Neue', Helvetica, sans-serif",
  Georgia: "Georgia, 'Times New Roman', Times, serif",
  Garamond: "Garamond, 'EB Garamond', 'Times New Roman', serif",
  "Times New Roman": "'Times New Roman', Times, Georgia, serif",
  Palatino: "Palatino, 'Palatino Linotype', 'Book Antiqua', serif",
};

const themePresets = [
  { name: "Minimal Black", accentColor: "#000000", font: "Calibri" },
  { name: "Navy Pro", accentColor: "#1e3a5f", font: "Arial" },
  { name: "Warm Maroon", accentColor: "#9f1239", font: "Georgia" },
  { name: "Royal Purple", accentColor: "#5b21b6", font: "Garamond" },
];

const colorPickerSwatches = [
  { c: "#000000", n: "Black" },
  { c: "#1e3a5f", n: "Navy" },
  { c: "#9f1239", n: "Maroon" },
  { c: "#5b21b6", n: "Purple" },
  { c: "#0f766e", n: "Teal" },
  { c: "#b45309", n: "Amber" },
  { c: "#1d4ed8", n: "Royal Blue" },
  { c: "#166534", n: "Forest Green" },
  { c: "#7c3aed", n: "Violet" },
  { c: "#be123c", n: "Crimson" },
];

const fmtGuideHTML = `<div style="background:rgba(59,130,246,0.07);border:1px solid rgba(59,130,246,0.2);border-radius:6px;padding:9px 14px;margin-bottom:15px;font-size:0.78rem;color:var(--text-muted);line-height:2.1;"><b style="color:var(--primary);font-size:0.8rem;">✍️ Formatting Guide</b> &nbsp;&mdash;&nbsp; Use in any text field below: &nbsp;<code style="background:rgba(255,255,255,0.08);padding:1px 6px;border-radius:3px;font-family:monospace;">**text**</code>&rarr;<b> bold</b> &nbsp;&bull;&nbsp; <code style="background:rgba(255,255,255,0.08);padding:1px 6px;border-radius:3px;font-family:monospace;">*text*</code>&rarr;<i> italic</i> &nbsp;&bull;&nbsp; <code style="background:rgba(255,255,255,0.08);padding:1px 6px;border-radius:3px;font-family:monospace;">__text__</code>&rarr;<u> underline</u> &nbsp;&bull;&nbsp; <code style="background:rgba(255,255,255,0.08);padding:1px 6px;border-radius:3px;font-family:monospace;">++text++</code>&rarr;<b style="font-size:1.05em;"> large</b></div>`;

function escapeHTML(str) {
  return str
    ? String(str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
    : "";
}
function escapeAttr(str) {
  return str
    ? String(str)
        .replace(/&/g, "&amp;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
    : "";
}
function formatText(str) {
  if (!str) return "";
  let s = String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  s = s.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  s = s.replace(/\*(.*?)\*/g, "<em>$1</em>");
  s = s.replace(/__(.*?)__/g, "<u>$1</u>");
  s = s.replace(
    /\+\+(.*?)\+\+/g,
    '<span style="font-size:1.15em;font-weight:bold;">$1</span>',
  );
  return s;
}

function applyTheme(idx) {
  const t = themePresets[idx];
  resumeData.settings.accentColor = t.accentColor;
  resumeData.settings.font = t.font;
  saveData();
  renderEditor();
}
function updateColorPicker(val) {
  resumeData.settings.accentColor = val;
  const sw = document.getElementById("accent-color-swatch");
  const hx = document.getElementById("accent-color-hex-display");
  const ci = document.getElementById("hidden-color-input");
  if (sw) sw.style.background = val;
  if (hx) hx.textContent = val.toUpperCase();
  if (ci) ci.value = val;
  saveData();
}
function exportJSON() {
  if (!confirm("Export your current resume data as a JSON backup file?"))
    return;
  const blob = new Blob([JSON.stringify(resumeData, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download =
    (resumeData.personal.name || "Resume").replace(/\s+/g, "_") + "_Data.json";
  a.click();
  URL.revokeObjectURL(url);
}
function triggerImport() {
  document.getElementById("import-file").click();
}
function handleImport(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      resumeData = JSON.parse(e.target.result);
      saveStateDirect();
    } catch {
      alert("Invalid JSON file.");
    }
  };
  reader.readAsText(file);
  event.target.value = "";
}
const MAX_HISTORY = 50;
let historyStack = [],
  redoStack = [],
  historyTimer = null;

function recordHistory() {
  clearTimeout(historyTimer);
  historyTimer = setTimeout(() => {
    redoStack.length = 0;
    historyStack.push(JSON.stringify(resumeData));
    if (historyStack.length > MAX_HISTORY) historyStack.shift();
    updateUndoRedoBtns();
  }, 700);
}
function undo() {
  clearTimeout(historyTimer);
  if (historyStack.length < 2) return;
  redoStack.push(historyStack.pop());
  resumeData = JSON.parse(historyStack[historyStack.length - 1]);
  saveStateDirect();
}
function redo() {
  clearTimeout(historyTimer);
  if (!redoStack.length) return;
  const state = redoStack.pop();
  historyStack.push(state);
  resumeData = JSON.parse(state);
  saveStateDirect();
}
function saveStateDirect() {
  localStorage.setItem("preetResumeStateV33", JSON.stringify(resumeData));
  document.querySelector(".template-select").value = resumeData.template;
  document.getElementById("editor-form").innerHTML = "";
  setTimeout(() => {
    applySettings();
    renderPreview();
    setTab(activeTab);
    updateUndoRedoBtns();
  }, 20);
}
function updateUndoRedoBtns() {
  const u = document.getElementById("btn-undo");
  const r = document.getElementById("btn-redo");
  if (u) u.disabled = historyStack.length < 2;
  if (r) r.disabled = redoStack.length === 0;
}
document.addEventListener("dragend", () => {
  draggedItem = null;
});
document.addEventListener("keydown", (e) => {
  if ((e.ctrlKey || e.metaKey) && !e.shiftKey && e.key.toLowerCase() === "z") {
    e.preventDefault();
    undo();
  }
  if (
    (e.ctrlKey || e.metaKey) &&
    (e.key.toLowerCase() === "y" || (e.shiftKey && e.key.toLowerCase() === "z"))
  ) {
    e.preventDefault();
    redo();
  }
});
const GOOGLE_SHEET_WEB_APP_URL =
  "https://script.google.com/macros/s/AKfycbzDkqnNGLtyyRQ9mrHTv1HkX1Czl05nFWcuPqQCiV0l5rrtrQ7xlHX28gAFrPYA8pB2/exec";

function sendResumeLeadAndPrint() {
  try {
    const lead = {
      name: (resumeData?.personal?.name || "").trim(),
      email: (resumeData?.personal?.email || "").trim(),
      phone: (resumeData?.personal?.phone || "").trim(),
    };
    const frameId = "gs_hidden_sink";
    let frame = document.getElementById(frameId);
    if (!frame) {
      frame = document.createElement("iframe");
      frame.id = frameId;
      frame.name = frameId;
      frame.style.display = "none";
      document.body.appendChild(frame);
    }

    const form = document.createElement("form");
    form.method = "POST";
    form.action = GOOGLE_SHEET_WEB_APP_URL;
    form.target = frameId;
    form.style.display = "none";

    Object.entries(lead).forEach(([key, value]) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = key;
      input.value = value || "Unknown";
      form.appendChild(input);
    });

    document.body.appendChild(form);
    form.submit();
    setTimeout(() => {
      form.remove();
      window.print();
    }, 600);
  } catch (err) {
    console.error("Lead capture failed:", err);
    window.print();
  }
}
function saveData() {
  localStorage.setItem("preetResumeStateV33", JSON.stringify(resumeData));
  applySettings();
  renderPreview();
  renderNavigation();
  recordHistory();
}
function loadDemoData() {
  const savedKey = (resumeData.settings && resumeData.settings.aiApiKey) || "";
  resumeData = JSON.parse(JSON.stringify(demoData));
  resumeData.settings.aiApiKey = savedKey;
  clearTimeout(historyTimer);
  localStorage.setItem("preetResumeStateV33", JSON.stringify(resumeData));
  document.querySelector(".template-select").value = resumeData.template;
  document.getElementById("editor-form").innerHTML = "";
  setTimeout(() => {
    applySettings();
    renderPreview();
    setTab("personal");
    historyStack = [JSON.stringify(resumeData)];
    redoStack = [];
    updateUndoRedoBtns();
  }, 20);
}
function resetData(forcePrompt = false) {
  if (forcePrompt || confirm("Wipe all data and start from a blank slate?")) {
    const savedKey =
      (resumeData.settings && resumeData.settings.aiApiKey) || "";
    resumeData = JSON.parse(JSON.stringify(blankData));
    resumeData.settings.aiApiKey = savedKey;
    clearTimeout(historyTimer);
    localStorage.setItem("preetResumeStateV33", JSON.stringify(resumeData));
    document.querySelector(".template-select").value = resumeData.template;
    document.getElementById("editor-form").innerHTML = "";
    setTimeout(() => {
      applySettings();
      renderPreview();
      setTab("personal");
      historyStack = [JSON.stringify(resumeData)];
      redoStack = [];
      updateUndoRedoBtns();
    }, 20);
  }
}
function changeTemplate(val) {
  resumeData.template = val;
  saveData();
  if (activeTab === "settings") renderEditor();
}
function updateState(path, value) {
  if (/sections\.\d+\.title$/.test(path) && !String(value).trim()) return;
  const keys = path.split(".");
  let cur = resumeData;
  for (let i = 0; i < keys.length - 1; i++) cur = cur[keys[i]];
  cur[keys[keys.length - 1]] = value;
  if (path === "settings.lineHeight") {
    const el = document.getElementById("val-lineHeight");
    if (el) el.innerText = value;
  }
  if (path === "settings.pagePadding") {
    const el = document.getElementById("val-pagePadding");
    if (el) el.innerText = value + "mm";
  }
  saveData();
}
async function callAI(systemPrompt, userPrompt, jsonMode = false) {
  const apiKey = resumeData.settings.aiApiKey
    .replace(/[^\x20-\x7E]/g, "")
    .trim();
  const url = "https://api.groq.com/openai/v1/chat/completions";
  const model = "llama-3.3-70b-versatile";

  const body = {
    model,
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: userPrompt },
    ],
    temperature: 0.15,
  };
  if (jsonMode) body.response_format = { type: "json_object" };

  const resp = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(body),
  });

  if (!resp.ok) {
    const err = await resp.json().catch(() => ({}));
    throw new Error(
      err?.error?.message || `HTTP ${resp.status} error from Groq API`,
    );
  }

  const data = await resp.json();
  return data.choices[0].message.content;
}
function openATSModal() {
  if (!resumeData.settings.aiApiKey) {
    alert(
      "Please enter your free Groq API key in the Settings tab first.\nGet it at console.groq.com (100% free, no credit card).",
    );
    setTab("settings");
    return;
  }
  document.getElementById("ats-overlay").style.display = "flex";
  document.getElementById("ats-results").innerHTML = "";
}
function closeATSModal() {
  document.getElementById("ats-overlay").style.display = "none";
}

async function runATSCheck() {
  const jd = document.getElementById("ats-jd").value.trim();
  const btn = document.getElementById("ats-btn");
  const resDiv = document.getElementById("ats-results");

  btn.disabled = true;
  btn.innerText = "Analyzing... (5-15s)";
  resDiv.innerHTML = "";
  let rText = `Name: ${resumeData.personal.name}\nRole: ${resumeData.personal.role}\n`;
  rText += `Email: ${resumeData.personal.email} | Phone: ${resumeData.personal.phone}\n`;
  rText += `Links: ${(resumeData.personal.links || [])
    .filter((l) => l.url)
    .map((l) => l.name + ": " + l.url)
    .join(", ")}\n`;
  resumeData.sections.forEach((s) => {
    rText += `\n=== ${s.title} ===\n`;
    if (s.type === "text") {
      rText += s.value + "\n";
    } else {
      (s.items || []).forEach((i) => {
        rText += `${i.title || i.degree || i.role || i.text || ""} | ${i.subtitle || i.school || i.company || i.date || ""}\n`;
        if (i.skillsList && i.skillsList.length)
          rText += "Skills: " + i.skillsList.join(", ") + "\n";
        if (i.description) rText += i.description + "\n";
        if (i.details) rText += i.details + "\n";
        if (i.text) rText += i.text + "\n";
      });
    }
  });

  const systemPrompt = `You are a Technical Recruiter at a top Indian tech company (Zoho, Freshworks, Flipkart, PhonePe, Razorpay, Amazon India) evaluating a 3rd-year B.Tech Computer Science student's resume for SDE internships and campus placements in the Indian IT market.

STUDENT CONTEXT:
- This is a 3rd-year (5th/6th semester) B.Tech student — they CANNOT have years of full-time experience. Do NOT deduct marks for this.
- Score calibration: 70-80 = strong shortlist candidate. 80-90 = excellent. 90+ = exceptional.
- A student with good DSA stats + 2-3 solid projects + relevant tech stack is genuinely a 70-75 candidate.

SCORING RUBRIC (100 points):
1. DSA & Competitive Programming — 25 pts
   • LeetCode 500+ or Rating 1800+ = 23-25 pts
   • LeetCode 300-499 or Rating 1500-1799 = 17-22 pts
   • LeetCode 200-299 or Rating 1200-1499 = 11-16 pts
   • LeetCode 100-199 = 5-10 pts
   • No CP stats at all = 0-4 pts
   • Bonus: CodeChef 3★+ or CF rating 1400+ = +3 pts
2. Project Quality — 30 pts
   • Real-world features (auth, REST API, DB, deployment, 3rd-party integrations) = 25-30 pts
   • Functional projects hosted online with clearly described features = 15-24 pts
   • Basic tutorial/clone projects = 5-14 pts
3. Bullet Point Quality (XYZ format) — 20 pts
   • All bullets: What + Tech Used + Measurable impact = 18-20 pts
   • Some bullets follow XYZ = 10-17 pts
   • Vague bullets with no tech context = 0-9 pts
4. Tech Stack for Indian Market — 15 pts
   • MERN / Spring Boot / Django / FastAPI + SQL or NoSQL + Git + relevant frameworks = 12-15 pts
   • Frontend-only or basic HTML/CSS/JS = 5-11 pts
5. Resume Completeness — 10 pts
   • All sections filled, working profile links (GitHub, LinkedIn, LeetCode) = 8-10 pts

⚠️ CRITICAL RULE — KEYWORD CHECKING (most important rule in this prompt):
Before you write ANYTHING in the "missingKeywords" array, you MUST perform this check for every single item:
  STEP 1: Search the entire resume text below for that exact word or technology.
  STEP 2: If it exists ANYWHERE in the resume — in skills, projects, descriptions, achievements, or any other section — DO NOT add it to missingKeywords.
  STEP 3: Only add it if it is genuinely 100% absent from the resume text.
Recommending a skill that is already clearly stated in the resume is a critical failure. Read carefully before you list anything.

For "improvements": give specific, technical, actionable advice. Example good advice: "Add a SQL/NoSQL database project to demonstrate backend persistence skills." Example bad advice: "Improve your projects" (too vague).

Return ONLY a raw JSON object — no markdown, no backticks, no text before or after:
{
  "score": <integer 0-100>,
  "feedback": "<ONE sentence highlighting the strongest asset. ONE sentence on the single most impactful gap.>",
  "missingKeywords": ["<tech/skill NOT in resume>"],
  "improvements": ["<specific action 1>", "<specific action 2>", "<specific action 3>"]
}`;

  const userPrompt = `Job Description: ${jd || "General SDE Intern / Campus Placement (MERN stack or Java backend, strong DSA focus) — Indian IT market"}\n\nResume Text (read every word carefully before responding):\n${rText}`;

  try {
    const raw = await callAI(systemPrompt, userPrompt, true);
    const clean = raw.replace(/```json|```/g, "").trim();
    const analysis = JSON.parse(clean);

    const scoreColor =
      analysis.score > 79
        ? "#10b981"
        : analysis.score > 59
          ? "#f59e0b"
          : "#ef4444";
    const providerLabel = "Groq · Llama 3.3 70B";

    resDiv.innerHTML = `
            <div style="font-size:3.5rem;font-weight:bold;color:${scoreColor};margin-top:15px;">${analysis.score}<span style="font-size:1.5rem;color:var(--text-muted)">/100</span></div>
            <p style="margin-bottom:20px;font-style:italic;font-size:1rem;color:var(--text-main);">"${escapeHTML(analysis.feedback)}"</p>
            <div style="text-align:left;background:var(--input-bg);padding:20px;border-radius:8px;border:1px solid var(--border);">
              <h4 style="color:#f43f5e;margin-bottom:10px;">⚠️ Missing Keywords / Skills</h4>
              <div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:20px;">
                ${
                  analysis.missingKeywords && analysis.missingKeywords.length
                    ? analysis.missingKeywords
                        .map(
                          (k) =>
                            `<span style="background:rgba(244,63,94,0.1);color:#f43f5e;padding:4px 10px;border-radius:4px;font-size:0.85rem;font-weight:bold;">${escapeHTML(k)}</span>`,
                        )
                        .join("")
                    : '<span style="color:var(--text-muted)">None found — good job!</span>'
                }
              </div>
              <h4 style="color:#3b82f6;margin-bottom:10px;">📈 Improvements to Make</h4>
              <ul style="padding-left:20px;font-size:0.92rem;color:var(--text-main);line-height:1.7;">
                ${analysis.improvements.map((i) => `<li style="margin-bottom:8px;">${escapeHTML(i)}</li>`).join("")}
              </ul>
            </div>
            <p style="margin-top:12px;font-size:0.75rem;color:var(--text-muted);">AI analysis by ${providerLabel}. Results may vary. <span class="beta-badge">BETA</span></p>`;
  } catch (error) {
    resDiv.innerHTML = `<div style="color:#ef4444;font-weight:bold;margin-top:20px;">Analysis Failed. Check your API key and try again.<br><small style="font-weight:normal;opacity:0.8;">${escapeHTML(error.message)}</small></div>`;
  } finally {
    btn.disabled = false;
    btn.innerText = "Analyze Resume";
  }
}
async function enhanceWithAI(path, elementId) {
  if (!resumeData.settings.aiApiKey) {
    alert("Please enter your AI API key in the Settings tab first.");
    setTab("settings");
    return;
  }
  const textarea = document.getElementById(elementId);
  const original = textarea.value;
  if (!original.trim())
    return alert("Please write some text in the description first.");

  textarea.value = "✨ AI is rewriting your bullet points… please wait.";
  textarea.disabled = true;

  const systemPrompt = `You are an expert resume writer specialising in Indian B.Tech Computer Science students applying for SDE internships and campus placements at companies like Zoho, Freshworks, Swiggy, Flipkart, Amazon India, and TCS Digital.

Your task: Rewrite the given text into strong, ATS-optimised resume bullet points.

STRICT RULES:
1. Start each bullet with a strong action verb: Built, Developed, Implemented, Designed, Optimised, Automated, Reduced, Improved, Integrated, Deployed, Tested, Created, Architected, Refactored, Migrated
2. Follow the XYZ Impact Format: "[Action verb] [what you built/did] using [specific technology], [resulting in / which / to] [measurable outcome or impact]"
3. Be specific — keep every technology name exactly as given (React, Node.js, MongoDB, Java, etc.)
4. Use plain, direct English — no buzzwords like "leveraged", "synergised", "utilised", "spearheaded"
5. Keep each bullet to 1-2 lines maximum
6. If the original text mentions numbers (users, requests, % improvement), keep them — numbers impress recruiters
7. Output ONLY the rewritten bullet points, one per line, each starting with "• "
8. No introduction, no closing remarks, no markdown code fences (no backticks), no extra blank lines`;

  const userPrompt = `Original text to rewrite into resume bullet points:\n\n${original}`;

  try {
    let improved = await callAI(systemPrompt, userPrompt, false);
    improved = improved
      .trim()
      .replace(/^```[a-z]*\n?/i, "")
      .replace(/```$/i, "")
      .trim();
    textarea.value = improved;
    updateState(path, improved);
  } catch (error) {
    alert("AI Enhancement Failed:\n\n" + error.message);
    textarea.value = original;
  } finally {
    textarea.disabled = false;
  }
}
async function generateSummary(sIdx) {
  if (!resumeData.settings.aiApiKey) {
    alert("Please enter your Groq API key in the Settings tab first.");
    setTab("settings");
    return;
  }
  const textarea = document.getElementById("txt-" + sIdx);
  if (!textarea) return;
  const prev = textarea.value;
  textarea.value = "✨ Generating your Profile Summary from resume data…";
  textarea.disabled = true;

  // Build rich context from the entire resume
  const p = resumeData.personal;
  let ctx = "";
  if (p.name) ctx += "Name: " + p.name + "\n";
  if (p.role) ctx += "Target Role: " + p.role + "\n";
  const activeLinks = (p.links || []).filter((l) => l.url);
  if (activeLinks.length)
    ctx +=
      "Profiles: " +
      activeLinks.map((l) => l.name + " — " + l.url).join(", ") +
      "\n";
  ctx += "\n";

  resumeData.sections.forEach((sec) => {
    if (sec.id === "summary") return;
    if (sec.type === "text" && !sec.value) return;
    if (sec.type !== "text" && !(sec.items && sec.items.length)) return;

    ctx += "=== " + sec.title + " ===\n";
    if (sec.type === "text") {
      ctx += sec.value + "\n";
    } else {
      (sec.items || []).forEach((item) => {
        if (sec.type === "education") {
          const dates = [item.startDate, item.endDate]
            .filter(Boolean)
            .join(" – ");
          ctx +=
            item.degree +
            " at " +
            item.school +
            (dates ? " (" + dates + ")" : "");
          if (item.gradeType !== "None" && item.gradeValue)
            ctx += " | " + item.gradeType + ": " + item.gradeValue;
          ctx += "\n";
          if (item.description) ctx += item.description + "\n";
        } else if (sec.type === "experience") {
          ctx +=
            (item.role || "") +
            " at " +
            (item.company || "") +
            (item.date ? " (" + item.date + ")" : "") +
            "\n";
          if (item.description)
            ctx += item.description.substring(0, 300) + "\n";
        } else if (sec.type === "skills") {
          ctx +=
            (item.title || "") +
            " " +
            (item.skillsList || []).join(", ") +
            "\n";
        } else if (sec.type === "project" || sec.type === "complex") {
          const sub = item.date || item.subtitle || "";
          ctx += (item.title || "") + (sub ? " (" + sub + ")" : "") + "\n";
          const desc = item.description || item.details || "";
          if (desc) ctx += desc.substring(0, 250) + "\n";
        } else if (sec.type === "simple") {
          if (item.text) ctx += "• " + item.text + "\n";
        }
      });
    }
    ctx += "\n";
  });

  const systemPrompt = `You are a senior technical recruiter and resume writer at a top Indian tech company (Zoho, Flipkart, Razorpay, Amazon India, PhonePe). You specialise in writing Profile Summaries for B.Tech Computer Science students applying for SDE internships and campus placements in the Indian IT market.

Your task: Write a 2–3 sentence Profile Summary using ONLY the information in the resume data below. Do not invent, assume, or add anything not explicitly present.

STRUCTURE — follow this order exactly:
• Sentence 1 — Identity: [Year of study] B.Tech CSE student at [Institution] with [CGPA only if ≥ 8.0 CGPA or ≥ 75%; omit grade entirely if weaker].
• Sentence 2 — Technical depth: Name the strongest tech stack (languages, frameworks, tools) and reference 1–2 of the most impactful projects or experience. Be specific.
• Sentence 3 — Differentiator (only if genuinely strong): competitive programming stats (LeetCode 300+, CodeChef 3★+, CF 1400+) OR a hackathon win/finalist OR a notable award. If the student's data is weak or absent, write exactly 2 sentences and stop.

STRICT RULES:
1. No first-person pronouns — no "I", "me", "my". Write impersonally.
2. 2–3 sentences MAXIMUM. Target 50–70 words total.
3. Zero filler words — never use: passionate, dynamic, hardworking, team player, result-driven, spearheaded, leveraged, synergized, motivated, enthusiastic, dedicated, aspiring.
4. Preserve all technology names exactly as given — do not alter capitalisation (React, Node.js, MongoDB, Java, etc.).
5. Output ONLY the summary paragraph. No labels, no preamble like "Here is your summary:", no markdown, no quotes around the output.`;

  const userPrompt =
    "Write a Profile Summary for this student.\n\nResume data:\n" + ctx;

  try {
    let result = await callAI(systemPrompt, userPrompt, false);
    result = result
      .trim()
      .replace(/^[\`]{3}[a-z]*\n?/i, "")
      .replace(/[\`]{3}$/i, "")
      .replace(/^(profile summary|summary):?\s*/i, "")
      .trim();
    textarea.value = result;
    updateState("sections." + sIdx + ".value", result);
  } catch (err) {
    alert("Summary generation failed:\n" + err.message);
    textarea.value = prev;
  } finally {
    textarea.disabled = false;
  }
}
function setTab(tabId) {
  activeTab = tabId;
  renderNavigation();
  renderEditor();
}
function renderNavigation() {
  const nav = document.getElementById("editor-nav");
  let html = `<button class="nav-btn ${activeTab === "personal" ? "active" : ""}" onclick="setTab('personal')">Personal Info</button>`;
  resumeData.sections.forEach((sec) => {
    html += `<button class="nav-btn ${activeTab === sec.id ? "active" : ""}" onclick="setTab('${sec.id}')">${formatText(sec.title)}</button>`;
  });
  html += `<button id="tour-add-sec" class="nav-btn add-btn" onclick="setTab('new-section')">➕ Add Section</button>`;
  nav.innerHTML = html;
}

function renderEditor() {
  const container = document.getElementById("editor-form");
  let html = `<div id="render-block-${Date.now()}" autocomplete="off">`;
  if (activeTab === "personal") {
    html += `<div class="section-card"><div class="section-header">Personal Information</div>${fmtGuideHTML}
            <div class="form-group"><label>Full Name</label><input type="text" placeholder="e.g. John Doe" data-path="personal.name" value="${escapeAttr(resumeData.personal.name)}"></div>
            <div class="form-group"><label>Target Role / Title</label><input type="text" placeholder="e.g. 3rd Year CSE Undergraduate" data-path="personal.role" value="${escapeAttr(resumeData.personal.role)}"></div>
            <div class="form-group"><label>Email</label><input type="text" placeholder="name@email.com" data-path="personal.email" value="${escapeAttr(resumeData.personal.email)}"></div>
            <div class="form-group"><label>Phone</label><input type="text" placeholder="+91 98765 43210" data-path="personal.phone" value="${escapeAttr(resumeData.personal.phone)}"></div>
            <div class="form-group"><label>Location</label><input type="text" placeholder="City, State, India" data-path="personal.location" value="${escapeAttr(resumeData.personal.location)}"></div>
            <div class="form-group"><label>Profile Links</label>`;
    resumeData.personal.links.forEach((link, lIdx) => {
      html += `<div class="input-row" style="align-items:center;"><input type="text" placeholder="Platform Name" data-path="personal.links.${lIdx}.name" value="${escapeAttr(link.name)}" style="flex:1;min-width:80px;"><input type="text" placeholder="Profile URL" data-path="personal.links.${lIdx}.url" value="${escapeAttr(link.url)}" style="flex:2;min-width:0;"><div style="display:flex;gap:2px;flex-shrink:0;"><button class="btn btn-outline btn-small" style="padding:5px 8px;font-size:0.85rem;" onclick="moveLinkOrder(${lIdx},-1)" title="Move Up">▲</button><button class="btn btn-outline btn-small" style="padding:5px 8px;font-size:0.85rem;" onclick="moveLinkOrder(${lIdx},1)" title="Move Down">▼</button><button class="btn btn-danger btn-small" onclick="resumeData.personal.links.splice(${lIdx},1);saveData();renderEditor();">✕</button></div></div>`;
    });
    html += `<button class="btn btn-outline btn-small" onclick="resumeData.personal.links.push({name:'',url:''});saveData();renderEditor();">+ Add Link</button></div></div>`;
  } else if (activeTab === "settings") {
    const s = resumeData.settings;
    const swatchesHTML = colorPickerSwatches
      .map(({ c, n }) => {
        const active = c.toLowerCase() === s.accentColor.toLowerCase();
        return `<div onclick="updateColorPicker('${c}')" title="${n} (${c})" style="width:26px;height:26px;border-radius:5px;background:${c};border:2px solid ${active ? "white" : "rgba(255,255,255,0.1)"};cursor:pointer;transition:transform 0.12s,border-color 0.12s;flex-shrink:0;" onmouseover="this.style.transform='scale(1.25)';this.style.borderColor='white';" onmouseout="this.style.transform='scale(1)';this.style.borderColor='${active ? "white" : "rgba(255,255,255,0.1)"}'"></div>`;
      })
      .join("");

    html += `<div class="section-card"><div class="section-header">Resume Styling & AI</div>

            <div class="form-group" style="padding:10px; background:rgba(16, 185, 129, 0.1); border:1px solid #10b981; border-radius:6px; margin-bottom:20px;">
                <label style="color:#10b981;">✨ Groq API Key (For ATS Check <span class="beta-badge">BETA</span> &amp; AI Enhance <span class="beta-badge">BETA</span>)</label>
                <input type="password" placeholder="gsk_..." data-path="settings.aiApiKey" value="${escapeAttr(s.aiApiKey)}" style="background:var(--bg-color); border-color:#10b981;">
                <span style="font-size:0.75rem; color:var(--text-muted); display:block; margin-top:6px;">
                    Required to use AI features. Get your free key at <a href="https://console.groq.com/" target="_blank" style="color:#3b82f6;">console.groq.com</a> → Sign up → API Keys
                </span>
            </div>

            <div class="form-group">
              <label>Accent Color</label>
              <div class="color-swatch-btn" onclick="document.getElementById('hidden-color-input').click()" title="Click to open the full color picker">
                <div id="accent-color-swatch" style="width:44px;height:44px;border-radius:7px;background:${s.accentColor};border:2px solid rgba(255,255,255,0.15);flex-shrink:0;box-shadow:0 2px 8px rgba(0,0,0,0.3);"></div>
                <div style="flex:1;">
                  <div id="accent-color-hex-display" style="font-size:1.05rem;font-weight:700;font-family:monospace;letter-spacing:1px;color:var(--text-main);">${s.accentColor.toUpperCase()}</div>
                  <div style="font-size:0.75rem;color:var(--text-muted);margin-top:3px;">Click swatch to open full color picker</div>
                </div>
                <span style="font-size:1.4rem;color:var(--text-muted);">🎨</span>
                <input type="color" id="hidden-color-input" value="${escapeAttr(s.accentColor)}" oninput="updateColorPicker(this.value)" style="position:absolute;width:1px;height:1px;opacity:0;pointer-events:none;border:none;padding:0;" />
              </div>
              <div style="margin-top:10px;display:flex;align-items:center;gap:8px;flex-wrap:wrap;">
                <span style="font-size:0.73rem;color:var(--text-muted);white-space:nowrap;font-weight:600;">Quick Colors:</span>
                ${swatchesHTML}
              </div>
            </div>

            <div class="form-group"><label>Font Family</label>
              <select data-path="settings.font">
                <option value="Calibri"          ${s.font === "Calibri" ? "selected" : ""}>Calibri (Default, Clean)</option>
                <option value="Arial"            ${s.font === "Arial" ? "selected" : ""}>Arial (ATS-Safe, Simple)</option>
                <option value="Georgia"          ${s.font === "Georgia" ? "selected" : ""}>Georgia (Classic Serif)</option>
                <option value="Garamond"         ${s.font === "Garamond" ? "selected" : ""}>Garamond (Elegant)</option>
                <option value="Times New Roman"  ${s.font === "Times New Roman" ? "selected" : ""}> Times New Roman (Traditional)</option>
                <option value="Palatino"         ${s.font === "Palatino" ? "selected" : ""}>Palatino (Literary)</option>
              </select>
            </div>

            <div class="form-group">
              <label>Quick Theme Presets <span style="font-weight:normal;color:var(--text-muted);font-size:0.8rem;">(sets color + font together)</span></label>
              <div class="theme-presets-grid">`;
    themePresets.forEach((theme, idx) => {
      const active =
        s.accentColor === theme.accentColor && s.font === theme.font;
      html += `<div class="theme-preset-card ${active ? "active" : ""}" onclick="applyTheme(${idx})" title="${theme.name}">
              <div class="theme-dot" style="background:${theme.accentColor};"></div>
              <span class="theme-card-name" style="font-family:${fontMap[theme.font]}">${theme.name}</span>
              <span class="theme-card-font">${theme.font}</span>
            </div>`;
    });
    html += `  </div></div>

            <div class="form-group"><label>Line Spacing <span id="val-lineHeight" class="val-display">${s.lineHeight}</span></label><input type="range" min="1.0" max="2.0" step="0.1" data-path="settings.lineHeight" value="${s.lineHeight}"></div>
            <div class="form-group"><label>Page Padding <span id="val-pagePadding" class="val-display">${s.pagePadding}mm</span></label><input type="range" min="5" max="30" step="1" data-path="settings.pagePadding" value="${s.pagePadding}"></div>
          </div>

          <div class="section-card"><div class="section-header">Section Order &amp; Columns</div>`;

    if (resumeData.template === "single-column") {
      html += `<div class="seq-col-box"><div class="seq-title">Document Order (Top to Bottom)</div>`;
      resumeData.sections.forEach((sec) => {
        html += `<div class="seq-item"><span>${formatText(sec.title)}</span><div style="display:flex;gap:5px;"><button class="btn btn-outline btn-small" style="font-size:1rem;padding:4px 12px;" onclick="moveSecLogical('${sec.id}',-1)" title="Move Up">▲</button><button class="btn btn-outline btn-small" style="font-size:1rem;padding:4px 12px;" onclick="moveSecLogical('${sec.id}',1)" title="Move Down">▼</button></div></div>`;
      });
      html += `</div>`;
    } else {
      const mainSecs = resumeData.sections.filter((s) => s.column === "main");
      const sideSecs = resumeData.sections.filter((s) => s.column === "side");
      html += `<div style="display:flex;gap:15px;align-items:flex-start;"><div class="seq-col-box" style="flex:5;"><div class="seq-title">Main Column (60%)</div>`;
      mainSecs.forEach((sec) => {
        html += `<div class="seq-item"><span>${formatText(sec.title)}</span><div style="display:flex;gap:3px;"><button class="btn btn-outline btn-small" style="font-size:1.1rem;line-height:1;padding:3px 10px;" onclick="moveSecLogical('${sec.id}',-1)" title="Move Up in Main Column">▲</button><button class="btn btn-outline btn-small" style="font-size:1.1rem;line-height:1;padding:3px 10px;" onclick="moveSecLogical('${sec.id}',1)" title="Move Down in Main Column">▼</button><button class="btn btn-small" style="background:#0f766e;color:white;border:none;font-size:0.72rem;padding:4px 7px;white-space:nowrap;border-radius:4px;" title="Move to Side Column" onclick="toggleSecCol('${sec.id}')">▶ Side</button></div></div>`;
      });
      html += `</div><div class="seq-col-box" style="flex:5;"><div class="seq-title">Side Column (40%)</div>`;
      sideSecs.forEach((sec) => {
        html += `<div class="seq-item"><span>${formatText(sec.title)}</span><div style="display:flex;gap:3px;"><button class="btn btn-small" style="background:#7c3aed;color:white;border:none;font-size:0.72rem;padding:4px 7px;white-space:nowrap;border-radius:4px;" title="Move to Main Column" onclick="toggleSecCol('${sec.id}')">◀ Main</button><button class="btn btn-outline btn-small" style="font-size:1.1rem;line-height:1;padding:3px 10px;" onclick="moveSecLogical('${sec.id}',-1)" title="Move Up in Side Column">▲</button><button class="btn btn-outline btn-small" style="font-size:1.1rem;line-height:1;padding:3px 10px;" onclick="moveSecLogical('${sec.id}',1)" title="Move Down in Side Column">▼</button></div></div>`;
      });
      html += `</div></div>`;
    }
    html += `</div>`;
  } else if (activeTab === "new-section") {
    html += `<div class="section-card"><div class="section-header">Create Custom Section</div>
            <div class="form-group"><label>Section Title</label><input type="text" id="new-sec-title" placeholder="e.g. Certifications"></div>
            <div class="form-group"><label>Format Type</label><select id="new-sec-type">
              <option value="project">Projects / Hackathons (Name, Date, Desc, Links)</option>
              <option value="experience">Experience (Role, Company, Date, Desc)</option>
              <option value="skills">Technical Skills (Categories with Tags)</option>
              <option value="education">Education (Degree, School, Dates, Grades)</option>
              <option value="simple">Bullet List (Interests, Achievements)</option>
              <option value="text">Paragraph (Profile Summary)</option>
            </select></div>
            <div class="form-group"><label>Layout Column</label><select id="new-sec-col"><option value="main">Main Column (60%)</option><option value="side">Side Column (40%)</option></select></div>
            <button class="btn btn-primary" onclick="createNewSection()" style="width:100%">Create Section</button></div>`;
  } else {
    const sec = resumeData.sections.find((s) => s.id === activeTab);
    if (!sec) {
      setTab("personal");
      return;
    }
    const sIdx = resumeData.sections.indexOf(sec);

    html += `<div class="section-card"><div class="section-header">
            <input type="text" data-path="sections.${sIdx}.title" value="${escapeAttr(sec.title)}" style="font-weight:bold; width:60%; background:transparent; border:1px dashed var(--border); color:var(--text-main); margin-bottom:0; padding:5px;">
            <button class="btn btn-danger btn-small" onclick="deleteSection('${sec.id}')">Delete Section</button>
          </div>${fmtGuideHTML}`;

    if (sec.type === "text") {
      html += `<div class="form-group">
              <div style="display:flex; justify-content:space-between; align-items:flex-end; margin-bottom:5px;">
                <label style="margin-bottom:0;">Paragraph Content</label>
                <div style="display:flex;gap:6px;align-items:center;">
                  <button class="ai-btn" style="background:linear-gradient(45deg,#0f766e,#3b82f6);" onclick="generateSummary(${sIdx})" title="Auto-generate from all your resume data">✨ Generate <sup style="font-size:0.55rem;background:rgba(255,255,255,0.2);padding:1px 3px;border-radius:3px;font-weight:900;">AI</sup></button>
                  <button class="ai-btn" onclick="enhanceWithAI('sections.${sIdx}.value', 'txt-${sIdx}')" title="Rewrite and improve existing text">✍️ Enhance <sup style="font-size:0.55rem;background:rgba(255,255,255,0.2);padding:1px 3px;border-radius:3px;font-weight:900;">AI</sup></button>
                </div>
              </div>
              <textarea id="txt-${sIdx}" data-path="sections.${sIdx}.value" placeholder="Write your summary here, or click ✨ Generate to auto-create one from your resume data…" style="min-height:100px;">${escapeHTML(sec.value)}</textarea>
            </div>`;
    } else {
      sec.items.forEach((item, iIdx) => {
        html += `<div class="item-card" ondragover="event.preventDefault();event.dataTransfer.dropEffect='move';" ondrop="handleDrop(event, ${sIdx}, ${iIdx})">`;

        if (sec.type === "education") {
          html += `
                  <div class="form-group"><label>Degree / Title</label><input type="text" data-path="sections.${sIdx}.items.${iIdx}.degree" value="${escapeAttr(item.degree)}"></div>
                  <div class="form-group"><label>School / University Name</label><input type="text" data-path="sections.${sIdx}.items.${iIdx}.school" value="${escapeAttr(item.school)}"></div>
                  <div class="input-row">
                    <div class="form-group"><label>Start Date</label><input type="text" data-path="sections.${sIdx}.items.${iIdx}.startDate" value="${escapeAttr(item.startDate)}"></div>
                    <div class="form-group"><label>End Date</label><input type="text" data-path="sections.${sIdx}.items.${iIdx}.endDate" value="${escapeAttr(item.endDate)}"></div>
                  </div>
                  <div class="input-row">
                    <div class="form-group"><label>Grade Type</label><select data-path="sections.${sIdx}.items.${iIdx}.gradeType"><option value="CGPA" ${item.gradeType === "CGPA" ? "selected" : ""}>CGPA</option><option value="Percentage" ${item.gradeType === "Percentage" ? "selected" : ""}>Percentage</option><option value="None" ${item.gradeType === "None" ? "selected" : ""}>Hide Grade</option></select></div>
                    <div class="form-group"><label>Grade Value</label><input type="text" data-path="sections.${sIdx}.items.${iIdx}.gradeValue" value="${escapeAttr(item.gradeValue)}"></div>
                  </div>
                  <div class="form-group">
                    <div style="display:flex; justify-content:space-between; align-items:flex-end; margin-bottom:5px;">
                      <label style="margin-bottom:0;">Description (Optional)</label>
                      <button class="ai-btn" onclick="enhanceWithAI('sections.${sIdx}.items.${iIdx}.description', 'desc-${sIdx}-${iIdx}')">✨ AI Enhance <sup style="font-size:0.58rem; background:rgba(255,255,255,0.25); padding:1px 3px; border-radius:3px; font-weight:900; letter-spacing:0.5px;">BETA</sup></button>
                    </div>
                    <textarea id="desc-${sIdx}-${iIdx}" data-path="sections.${sIdx}.items.${iIdx}.description">${escapeHTML(item.description)}</textarea>
                  </div>`;
        } else if (sec.type === "experience") {
          html += `
                  <div class="form-group"><label>Position / Role</label><input type="text" placeholder="e.g. Web Developer Intern" data-path="sections.${sIdx}.items.${iIdx}.role" value="${escapeAttr(item.role)}"></div>
                  <div class="form-group"><label>Company Name</label><input type="text" placeholder="e.g. Google" data-path="sections.${sIdx}.items.${iIdx}.company" value="${escapeAttr(item.company)}"></div>
                  <div class="form-group"><label>Date</label><input type="text" placeholder="e.g. Jan 2025 - Present" data-path="sections.${sIdx}.items.${iIdx}.date" value="${escapeAttr(item.date)}"></div>
                  <div class="form-group">
                    <div style="display:flex; justify-content:space-between; align-items:flex-end; margin-bottom:5px;">
                      <label style="margin-bottom:0;">Description</label>
                      <button class="ai-btn" onclick="enhanceWithAI('sections.${sIdx}.items.${iIdx}.description', 'desc-${sIdx}-${iIdx}')">✨ AI Enhance <sup style="font-size:0.58rem; background:rgba(255,255,255,0.25); padding:1px 3px; border-radius:3px; font-weight:900; letter-spacing:0.5px;">BETA</sup></button>
                    </div>
                    <textarea id="desc-${sIdx}-${iIdx}" placeholder="Describe your responsibilities..." data-path="sections.${sIdx}.items.${iIdx}.description">${escapeHTML(item.description)}</textarea>
                  </div>`;
        } else if (sec.type === "skills") {
          html += `
                  <div class="form-group"><label>Skill Category Title</label><input type="text" placeholder="e.g. Languages" data-path="sections.${sIdx}.items.${iIdx}.title" value="${escapeAttr(item.title)}"></div>
                  <div class="form-group"><label>Add Individual Skill</label>
                    <div style="display:flex; gap:5px;">
                      <input type="text" id="new-skill-${sIdx}-${iIdx}" placeholder="e.g. Java" onkeypress="if(event.key==='Enter'){ addSkill(${sIdx},${iIdx}); }">
                      <button class="btn btn-outline" onclick="addSkill(${sIdx},${iIdx})">Add</button>
                    </div>
                    <div class="skills-container">`;
          if (item.skillsList) {
            item.skillsList.forEach((skill, tIdx) => {
              html += `<div class="skill-tag">${escapeHTML(skill)} <span onclick="removeSkill(${sIdx},${iIdx},${tIdx})">×</span></div>`;
            });
          }
          html += `   </div></div>`;
        } else if (sec.type === "project" || sec.type === "complex") {
          const tText = escapeAttr(item.title);
          const subText = escapeAttr(
            sec.type === "complex" ? item.subtitle : item.date,
          );
          const descText = escapeHTML(
            sec.type === "complex" ? item.details : item.description,
          );
          const liveLink = escapeAttr(item.liveLink || item.link);
          const gitLink = escapeAttr(item.githubLink || item.github);
          const descPath = sec.type === "complex" ? "details" : "description";
          html += `
                  <div class="form-group"><label>Name / Title</label><input type="text" placeholder="Project Name" data-path="sections.${sIdx}.items.${iIdx}.title" value="${tText}"></div>
                  ${
                    sec.type === "complex"
                      ? `<div class="form-group"><label>Subtitle</label><input type="text" data-path="sections.${sIdx}.items.${iIdx}.subtitle" value="${subText}"></div>`
                      : `<div class="form-group"><label>Date</label><input type="text" placeholder="e.g. MAR 2026" data-path="sections.${sIdx}.items.${iIdx}.date" value="${subText}"></div>`
                  }
                  <div class="form-group">
                    <div style="display:flex; justify-content:space-between; align-items:flex-end; margin-bottom:5px;">
                      <label style="margin-bottom:0;">Description</label>
                      <button class="ai-btn" onclick="enhanceWithAI('sections.${sIdx}.items.${iIdx}.${descPath}', 'desc-${sIdx}-${iIdx}')">✨ AI Enhance <sup style="font-size:0.58rem; background:rgba(255,255,255,0.25); padding:1px 3px; border-radius:3px; font-weight:900; letter-spacing:0.5px;">BETA</sup></button>
                    </div>
                    <textarea id="desc-${sIdx}-${iIdx}" data-path="sections.${sIdx}.items.${iIdx}.${descPath}">${descText}</textarea>
                  </div>
                  <div class="project-links-container">
                    <div class="form-group" style="margin-bottom:8px;"><label>🔗 Live Demo URL</label><input type="text" placeholder="https://..." data-path="sections.${sIdx}.items.${iIdx}.liveLink" value="${liveLink}"></div>
                    <div class="form-group" style="margin-bottom:0;"><label>💻 GitHub Repo URL</label><input type="text" placeholder="https://..." data-path="sections.${sIdx}.items.${iIdx}.githubLink" value="${gitLink}"></div>
                  </div>`;
        } else {
          html += `<div class="form-group" style="margin-bottom:0;"><label>Text</label><textarea placeholder="Enter list item..." data-path="sections.${sIdx}.items.${iIdx}.text">${escapeHTML(item.text)}</textarea></div>`;
        }

        html += `<div class="item-controls">
                <div class="drag-handle" title="Hold and drag to reorder"
                  onmousedown="this.closest('.item-card').setAttribute('draggable',true); draggedItem={sIdx:${sIdx},iIdx:${iIdx}};"
                  onmouseup="this.closest('.item-card').removeAttribute('draggable')"
                  onmouseleave="this.closest('.item-card').removeAttribute('draggable')"
                >☰ Drag</div>
                <button class="btn btn-danger btn-small" onclick="removeItem(${sIdx},${iIdx})">Remove Item</button>
              </div></div>`;
      });
      html += `<button class="btn btn-outline" style="width:100%;" onclick="addItem(${sIdx},'${sec.type}')">+ Add Item</button>`;
    }
    html += `</div>`;
  }

  html += `</div>`;
  container.innerHTML = html;
  attachInputListeners();
}

function attachInputListeners() {
  document
    .querySelectorAll(
      "#editor-form input[data-path],#editor-form textarea[data-path],#editor-form select[data-path]",
    )
    .forEach((input) =>
      input.addEventListener("input", (e) =>
        updateState(e.target.getAttribute("data-path"), e.target.value),
      ),
    );
}

function moveLinkOrder(idx, dir) {
  const links = resumeData.personal.links;
  const newIdx = idx + dir;
  if (newIdx < 0 || newIdx >= links.length) return;
  [links[idx], links[newIdx]] = [links[newIdx], links[idx]];
  saveData();
  renderEditor();
}
function moveSecLogical(secId, dir) {
  const idx = resumeData.sections.findIndex((s) => s.id === secId);
  if (idx === -1) return;
  const sec = resumeData.sections[idx];

  if (resumeData.template === "single-column") {
    const newIdx = idx + dir;
    if (newIdx < 0 || newIdx >= resumeData.sections.length) return;
    [resumeData.sections[idx], resumeData.sections[newIdx]] = [
      resumeData.sections[newIdx],
      resumeData.sections[idx],
    ];
  } else {
    // Two-column: only reorder within the same column
    const col = sec.column;
    const colSecs = resumeData.sections.filter((s) => s.column === col);
    const colPos = colSecs.findIndex((s) => s.id === secId);
    const targetColPos = colPos + dir;
    if (targetColPos < 0 || targetColPos >= colSecs.length) return;
    const targetId = colSecs[targetColPos].id;
    const targetIdx = resumeData.sections.findIndex((s) => s.id === targetId);
    [resumeData.sections[idx], resumeData.sections[targetIdx]] = [
      resumeData.sections[targetIdx],
      resumeData.sections[idx],
    ];
  }
  saveData();
  renderEditor();
}

function toggleSecCol(secId) {
  const sec = resumeData.sections.find((s) => s.id === secId);
  if (!sec) return;
  sec.column = sec.column === "main" ? "side" : "main";
  saveData();
  renderEditor();
}
function createNewSection() {
  const titleEl = document.getElementById("new-sec-title");
  const title = titleEl ? titleEl.value.trim() : "";
  if (!title) return alert("Please enter a section title.");
  const type = document.getElementById("new-sec-type").value;
  const col = document.getElementById("new-sec-col").value;
  const id = "sec_" + Date.now();
  const newSec = { id, title, type, column: col };
  if (type === "text") newSec.value = "";
  else newSec.items = [];
  resumeData.sections.push(newSec);
  saveData();
  setTab(id);
}

function deleteSection(id) {
  if (!confirm("Delete this section? All data in it will be lost.")) return;
  const idx = resumeData.sections.findIndex((s) => s.id === id);
  if (idx !== -1) resumeData.sections.splice(idx, 1);
  saveData();
  setTab("personal");
}
function addItem(sIdx, type) {
  const sec = resumeData.sections[sIdx];
  if (!sec) return;
  let newItem = {};
  if (type === "education") {
    newItem = {
      degree: "",
      school: "",
      startDate: "",
      endDate: "",
      gradeType: "CGPA",
      gradeValue: "",
      description: "",
    };
  } else if (type === "experience") {
    newItem = { role: "", company: "", date: "", description: "" };
  } else if (type === "skills") {
    newItem = { title: "", skillsList: [] };
  } else if (type === "project" || type === "complex") {
    newItem = {
      title: "",
      date: "",
      description: "",
      liveLink: "",
      githubLink: "",
    };
  } else {
    newItem = { text: "" };
  }
  sec.items.push(newItem);
  saveData();
  renderEditor();
}

function removeItem(sIdx, iIdx) {
  resumeData.sections[sIdx].items.splice(iIdx, 1);
  saveData();
  renderEditor();
}
function addSkill(sIdx, iIdx) {
  const input = document.getElementById("new-skill-" + sIdx + "-" + iIdx);
  const val = input ? input.value.trim() : "";
  if (!val) return;
  const item = resumeData.sections[sIdx].items[iIdx];
  if (!item.skillsList) item.skillsList = [];
  item.skillsList.push(val);
  saveData();
  renderEditor();
}

function removeSkill(sIdx, iIdx, tIdx) {
  resumeData.sections[sIdx].items[iIdx].skillsList.splice(tIdx, 1);
  saveData();
  renderEditor();
}
function handleDrop(event, sIdx, iIdx) {
  event.preventDefault();
  if (!draggedItem || draggedItem.sIdx !== sIdx) return;
  const fromIdx = draggedItem.iIdx;
  const toIdx = iIdx;
  draggedItem = null;
  if (fromIdx === toIdx) return;
  const items = resumeData.sections[sIdx].items;
  const [moved] = items.splice(fromIdx, 1);
  items.splice(toIdx, 0, moved);
  saveData();
  renderEditor();
}
function applySettings() {
  const root = document.documentElement;
  const s = resumeData.settings;
  root.style.setProperty("--res-accent", s.accentColor);
  root.style.setProperty("--res-line-height", s.lineHeight);
  root.style.setProperty("--res-padding", s.pagePadding + "mm");
  root.style.setProperty("--res-font", fontMap[s.font] || fontMap["Calibri"]);
}

function buildSectionHTML(sec) {
  let html = `<div class="res-section"><div class="res-section-title">${formatText(sec.title)}</div>`;
  if (sec.type === "text") {
    html += sec.value
      ? `<div class="res-text">${formatText(sec.value)}</div>`
      : `<div class="empty-placeholder">[ Add paragraph text ]</div>`;
  } else {
    if (!sec.items.length) {
      html += `<div class="empty-placeholder">[ Add items in editor ]</div>`;
    } else {
      if (sec.type === "education") {
        sec.items.forEach((item) => {
          const dateStr = [item.startDate, item.endDate]
            .filter(Boolean)
            .join(" – ");
          const gradeStr =
            item.gradeType !== "None" &&
            item.gradeValue &&
            item.gradeValue.trim()
              ? `${item.gradeType} – ${item.gradeValue}`
              : "";
          html += `<div class="res-item"><div class="res-item-header"><span>${formatText(item.degree)}</span>${dateStr ? `<span style="font-weight:normal;font-size:9.5pt;">${escapeHTML(dateStr)}</span>` : ""}</div><div class="res-item-subtitle"><span>${formatText(item.school)}</span>${gradeStr ? `<span>${escapeHTML(gradeStr)}</span>` : ""}</div>${item.description ? `<div class="res-text">${formatText(item.description)}</div>` : ""}</div>`;
        });
      } else if (sec.type === "experience") {
        sec.items.forEach((item) => {
          html += `<div class="res-item"><div class="res-item-header"><span>${formatText(item.role)}</span>${item.date ? `<span style="font-weight:normal;font-size:9.5pt;">${escapeHTML(item.date)}</span>` : ""}</div>${item.company ? `<div class="res-item-subtitle"><span>${formatText(item.company)}</span></div>` : ""}${item.description ? `<div class="res-text">${formatText(item.description)}</div>` : ""}</div>`;
        });
      } else if (sec.type === "skills") {
        sec.items.forEach((item) => {
          html += `<div class="res-item" style="margin-bottom:5px;"><strong>${formatText(item.title)}</strong> ${item.skillsList ? item.skillsList.map(formatText).join(", ") : ""}</div>`;
        });
      } else if (sec.type === "project" || sec.type === "complex") {
        sec.items.forEach((item) => {
          const titleText = formatText(item.title);
          const subText = formatText(
            sec.type === "complex" ? item.subtitle : item.date,
          );
          const descText = formatText(
            sec.type === "complex" ? item.details : item.description,
          );
          const live = item.liveLink || item.link;
          const git = item.githubLink || item.github;
          html += `<div class="res-item"><div class="res-item-header"><span>${titleText}</span>${subText ? `<span style="font-weight:normal;font-size:9.5pt;">${subText}</span>` : ""}</div>${descText ? `<div class="res-text">${descText}</div>` : ""}`;
          if (live || git) {
            html += `<div class="res-item-proj-links">`;
            if (live && live !== "#")
              html += `<a href="${escapeAttr(live)}" target="_blank">&lt;/&gt; Live Demo</a>`;
            else if (live) html += `<span>&lt;/&gt; Live Demo</span>`;
            if (git && git !== "#")
              html += `<a href="${escapeAttr(git)}" target="_blank">&lt;/&gt; GitHub Repo</a>`;
            else if (git) html += `<span>&lt;/&gt; GitHub Repo</span>`;
            html += `</div>`;
          }
          html += `</div>`;
        });
      } else if (sec.type === "simple") {
        html += `<ul class="res-list">`;
        sec.items.forEach((item) => {
          if (item.text && item.text.trim())
            html += `<li>${formatText(item.text)}</li>`;
        });
        html += `</ul>`;
      }
    }
  }
  return html + `</div>`;
}

function renderPreview() {
  const p = resumeData.personal;
  const container = document.getElementById("resume-preview");
  container.className = `resume-page layout-${resumeData.template}`;

  let linksHTML = "";
  if (p.links) {
    p.links.forEach((link) => {
      if (link.name.trim() && link.url.trim())
        linksHTML += `<a href="${escapeAttr(link.url)}" target="_blank">${escapeHTML(link.name)}</a>`;
      else if (link.name.trim())
        linksHTML += `<span>${escapeHTML(link.name)}</span>`;
    });
  }

  const fName = p.name
    ? formatText(p.name)
    : `<span class="empty-placeholder"><h1>Your Name</h1></span>`;
  const fRole = p.role ? formatText(p.role) : `Your Job Title`;

  let html = `<div class="res-header">`;
  if (resumeData.isDemo) html += `<div class="demo-tag">(Demo Resume)</div>`;
  html += `<div class="res-name">${fName}</div>
          <div class="res-role">${fRole}</div>
          <div class="res-contact">${[p.email, p.phone, p.location].filter(Boolean).map(formatText).join(" • ")}</div>
          ${linksHTML ? `<div class="res-links">${linksHTML}</div>` : ""}
        </div>`;

  if (resumeData.template === "single-column") {
    html += `<div class="res-body">`;
    resumeData.sections.forEach((sec) => (html += buildSectionHTML(sec)));
    html += `</div>`;
  } else {
    let mainHTML = "",
      sideHTML = "";
    resumeData.sections.forEach((sec) =>
      sec.column === "main"
        ? (mainHTML += buildSectionHTML(sec))
        : (sideHTML += buildSectionHTML(sec)),
    );
    html += `<div class="res-body"><div class="res-main-col">${mainHTML}</div><div class="res-side-col">${sideHTML}</div></div>`;
  }
  container.innerHTML = html;
  setTimeout(updatePageBreaks, 100);
}

function updatePageBreaks() {
  const page = document.getElementById("resume-preview");
  page.querySelectorAll(".page-break-line").forEach((el) => el.remove());
  const A4_HEIGHT = 1122;
  const totalHeight = page.scrollHeight;
  const indicator = document.getElementById("overflow-indicator");
  if (totalHeight > A4_HEIGHT + 80) {
    indicator.style.display = "block";
    let pages = Math.ceil(totalHeight / A4_HEIGHT);
    for (let i = 1; i < pages; i++) {
      const line = document.createElement("div");
      line.className = "page-break-line";
      line.style.top = i * A4_HEIGHT + "px";
      line.innerHTML = `<span class="page-break-label">Page ${i + 1} starts here ✂</span>`;
      page.appendChild(line);
    }
  } else {
    indicator.style.display = "none";
  }
}
document.addEventListener("DOMContentLoaded", () => {
  if (!localStorage.getItem("preetResumeVisitedV33"))
    document.getElementById("onboarding-overlay").style.display = "flex";
});
function openStartMenu() {
  document.getElementById("onboarding-overlay").style.display = "flex";
}
function closeStartMenu() {
  localStorage.setItem("preetResumeVisitedV33", "true");
  document.getElementById("onboarding-overlay").style.display = "none";
}
function dismissOnboarding(choice) {
  localStorage.setItem("preetResumeVisitedV33", "true");
  document.getElementById("onboarding-overlay").style.display = "none";
  if (choice === "demo") loadDemoData();
  else if (choice === "blank") resetData(true);
  else if (choice === "tutorial") startTutorial();
}
let currentTourStep = 0;
const tourSteps = [
  {
    id: "tour-design",
    title: "⚙️ Design Settings",
    text: "Change your resume's colors, layout, line spacing, and font here. Pick from ready-made theme presets or use the color picker to choose your own custom accent color.",
  },
  {
    id: "tour-history",
    title: "↩ Undo / Redo",
    text: "Made a mistake? Hit <b>Undo</b> to go back instantly. You can also press <b>Ctrl+Z</b> on your keyboard. Use <b>Redo</b> (Ctrl+Y) to bring back what you removed.",
  },
  {
    id: "tour-data",
    title: "💾 Import / Export",
    text: "Click <b>Export</b> to save your resume as a JSON backup file on your computer. Click <b>Import</b> to reload it anytime — great for keeping different versions of your resume!",
  },
  {
    id: "tour-add-sec",
    title: "➕ Add Sections",
    text: "Need a new section like <b>Certifications</b> or <b>Open Source</b>? Click here to create one. Just give it a name, pick a format type, and it appears on your resume instantly.",
  },
  {
    id: "tour-ats",
    title:
      "🎯 ATS Check <span style='font-size:0.7rem;background:linear-gradient(135deg,#a855f7,#ec4899);color:white;padding:2px 6px;border-radius:4px;vertical-align:middle;margin-left:4px;'>BETA</span>",
    text: `This AI tool scores your resume like a real company ATS system — calibrated for <b>Indian B.Tech CS students</b> applying for SDE internships and campus placements.<br><br>
                 <b>Requires a Groq API Key (100% free, no credit card)</b><ol style="padding-left:18px;margin-top:8px;line-height:2;">
                 <li>Go to <a href="https://console.groq.com/" target="_blank" style="color:#3b82f6;">console.groq.com</a></li>
                 <li>Sign in with Google</li><li>Click <b>API Keys → Create API Key</b></li>
                 <li>Paste it in <b>Settings</b></li></ol>`,
  },
  {
    id: "tour-output",
    title: "🖨️ Save as PDF",
    text: "When your resume looks ready, click <b>Print PDF</b> to save it as a PDF. For best results, use <b>Chrome</b> and set margins to <b>'None'</b> in the print dialog.",
  },
];

function startTutorial() {
  resumeData = JSON.parse(JSON.stringify(blankData));
  saveData();
  setTab("personal");
  currentTourStep = 0;
  const spotlight = document.getElementById("tutorial-spotlight");
  const tooltip = document.getElementById("tutorial-tooltip");
  spotlight.style.transition = "none";
  tooltip.style.transition = "none";
  spotlight.style.display = "block";
  tooltip.style.display = "block";
  spotlight.style.opacity = "0";
  tooltip.style.opacity = "0";
  requestAnimationFrame(() => setTimeout(showTourStep, 50));
}
function showTourStep() {
  if (currentTourStep >= tourSteps.length) {
    endTutorial();
    return;
  }
  const step = tourSteps[currentTourStep];
  const el = document.getElementById(step.id);
  const spotlight = document.getElementById("tutorial-spotlight");
  const tooltip = document.getElementById("tutorial-tooltip");
  if (el) {
    el.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
    tooltip.style.opacity = "0";
    setTimeout(() => {
      const rect = el.getBoundingClientRect();
      const pad = 6;
      spotlight.style.top = rect.top - pad + "px";
      spotlight.style.left = rect.left - pad + "px";
      spotlight.style.width = rect.width + pad * 2 + "px";
      spotlight.style.height = rect.height + pad * 2 + "px";
      let ttTop = rect.bottom + pad + 15;
      if (ttTop + 280 > window.innerHeight) ttTop = rect.top - pad - 290;
      let ttLeft = Math.max(15, rect.left - 50);
      if (ttLeft + 340 > window.innerWidth) ttLeft = window.innerWidth - 360;
      tooltip.style.top = ttTop + "px";
      tooltip.style.left = ttLeft + "px";
      tooltip.innerHTML = `<h3 style="color:var(--primary);margin-bottom:10px;font-size:1.1rem;">${step.title}</h3>
              <div style="color:var(--text-main);line-height:1.65;margin-bottom:20px;font-size:0.88rem;">${step.text}</div>
              <div style="display:flex;justify-content:space-between;">
                <button class="btn btn-outline btn-small" onclick="endTutorial()">Exit Tour</button>
                <button class="btn btn-primary btn-small" onclick="currentTourStep++;showTourStep();">${currentTourStep === tourSteps.length - 1 ? "Finish!" : "Next ➔"}</button>
              </div>`;
      void spotlight.offsetWidth;
      spotlight.style.transition =
        currentTourStep === 0
          ? "opacity 0.4s ease"
          : "all 0.4s cubic-bezier(0.25,1,0.5,1)";
      tooltip.style.transition = "opacity 0.4s ease";
      spotlight.style.opacity = "1";
      tooltip.style.opacity = "1";
    }, 300);
  }
}
function endTutorial() {
  document.getElementById("tutorial-spotlight").style.opacity = "0";
  document.getElementById("tutorial-tooltip").style.opacity = "0";
  setTimeout(() => {
    document.getElementById("tutorial-spotlight").style.display = "none";
    document.getElementById("tutorial-tooltip").style.display = "none";
  }, 400);
}
document.querySelector(".template-select").value = resumeData.template;
applySettings();
setTab("personal");
renderPreview();
historyStack = [JSON.stringify(resumeData)];
updateUndoRedoBtns();
window.addEventListener("resize", () => setTimeout(updatePageBreaks, 100));
