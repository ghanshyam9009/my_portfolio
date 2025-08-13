// Portfolio data
export const experienceData = [
  {
    id: 1,
    title: "SDE",
    company: "Innfinnghts Pvt. Ltd.",
    duration: "january 2025 - Present",
    type: "Full-time",
    description:
      "Innfinnghts builds robust financial systems to power real-time trading, automation, and smart market analytics.",
    responsibilities: [
      "Developed and maintained backend services to support real-time trading operations and live data processing.",
      "Integrated third-party trading APIs to streamline live market data and ensure accurate data handling.",
      "Built and optimized WebSocket-based live market feeds and real-time order tracking systems.",
      "Deployed scalable microservices using AWS Lambda and ECS, enabling high availability and fault tolerance.",
      "Worked with DynamoDB to efficiently manage stateful trading data and SL/TP logic.",
      "Collaborated with frontend and backend teams to build reliable, scalable full-stack systems.",
    ],
    techStack: [
      { name: "Node.js", icon: "🟢" },
      { name: "Express", icon: "🚂" },
      { name: "React", icon: "⚛️" },
      { name: "WebSocket", icon: "🔌" },
      { name: "OpenAI API", icon: "🧠" },
      { name: "DynamoDB", icon: "🗃️" },
      { name: "AWS Lambda", icon: "☁️" },
      { name: "ECS", icon: "📦" },
      { name: "FastAPI", icon: "⚡" },
      // { name: "PostgreSQL", icon: "🐘" },
    ],
    image: "/api/placeholder/400/250",
    projectName: "Real-Time Trading Engine",
  },

  {
    id: 3,
    title: "Fullstack Developer",
    company: "P-cation",
    duration: "September 2024 - November 2024",
    type: "Remote",
    description:
      "Worked on a cutting-edge project enabling users to create personalized AI agents with OpenAI API integration.",
    responsibilities: [
      "Developed full-stack features for a platform where users could create multiple AI agents based on their needs.",
      "Integrated OpenAI API to enable conversational experiences similar to ChatGPT.",
      "Handled chat interfaces and agent configurations dynamically using user prompts and requirements.",
      "Built RESTful APIs, managed user sessions, and stored agent metadata securely.",
    ],
    techStack: [
      { name: "React", icon: "⚛️" },
      { name: "Next.js", icon: "⚫" },
      { name: "Node.js", icon: "🟢" },
      { name: "OpenAI API", icon: "🧠" },
      { name: "MongoDB", icon: "🍃" },
      { name: "Express", icon: "🚂" },
    ],
    image: "/api/placeholder/400/250",
    projectName: "AI Agent Builder Platform",
  },
  {
    id: 2,
    title: "Python Developer",
    company: "ListApp Pharmatech Pvt. Ltd.",
    duration: "July 2024 - August 2024",
    type: "Onsite",
    description:
      "PharmaTech startup focused on automating invoice processing and enhancing internal analytics.",
    responsibilities: [
      "Engineered an invoice recognition system using OCR and NER, improving data processing speed by 40%.",
      "Optimized data pipelines to enhance processing efficiency and application speed.",
      "Participated in weekly code reviews, ensuring adherence to clean coding practices and project deadlines.",
    ],
    techStack: [
      { name: "Python", icon: "🐍" },
      { name: "OCR", icon: "🖼️" },
      { name: "NER", icon: "🧠" },
      { name: "Pandas", icon: "📊" },
    ],
    image: "/api/placeholder/400/250",
    projectName: "Invoice AI Recognition System",
  },

];

export const projectsData = [
  {
    id: 1,
    title: "Income Tracer",
    subtitle: "Full-featured MERN trading & funds tracker",
    description:
      "Income Tracer is a MERN-stack application for tracking trades, orders, and fund movements with real-time updates and a detailed funds-tracker ledger.",
    longDescription:
      "Income Tracer is a production-grade MERN application that tracks user positions, orders (limit/SL/TP), and funds with audit logs. It uses WebSockets for real-time position updates, a funds-tracker collection for every credit/deduction event, and dashboards for PnL, open/closed positions and account history.",
    techStack: [
      { name: "MongoDB", icon: "🍃", color: "bg-green-100 text-green-800" },
      { name: "Express", icon: "🚀", color: "bg-gray-100 text-gray-800" },
      { name: "React", icon: "⚛️", color: "bg-blue-100 text-blue-800" },
      { name: "Node.js", icon: "🟢", color: "bg-green-100 text-green-800" },
      { name: "Socket.io", icon: "🔌", color: "bg-indigo-100 text-indigo-800" },
      { name: "AWS / Docker", icon: "☁️", color: "bg-gray-100 text-gray-800" },
    ],
    image: "/images/riseStream/project-2.png",
    demoUrl: "https://income-tracer-project-1.onrender.com/",
    githubUrl: "https://github.com/ghanshyam9009/income-tracer-project",
    features: [
      "Full MERN-stack application for tracking trades, orders, and funds",
      "Real-time position and order updates via WebSockets",
      "Detailed funds-tracker ledger logging every credit/deduction with pre/post balances",
      "Automatic SL/TP execution and portfolio liquidation based on loss limits",
      "User-level position isolation for same-symbol trades",
      "Comprehensive PnL calculations for open and closed positions",
      "Admin dashboards for positions, trade history, and fund movements",
      "Responsive UI for seamless use across devices",
    ],    
    category: "Full Stack",
    status: "Completed",
  },
  {
    id: 2,
    title: "QuiiAI",
    subtitle: "AI-powered content writer with Stripe payments",
    description:
      "QuiiAI is a content-writing SaaS that leverages OpenAI's ChatGPT API to generate articles, blog posts and marketing copy, with subscription & one-time payments via Stripe.",
    longDescription:
      "QuiiAI provides users an easy writer interface that generates SEO-friendly drafts using the OpenAI (ChatGPT) API. It supports multi-tier subscription billing, usage-based invoicing through Stripe, webhook-driven billing events, and editor workflows for saving/editing/generated drafts. The backend handles prompt templates, rate-limits, and usage logging.",
    techStack: [
      { name: "Next.js", icon: "⚛️", color: "bg-blue-100 text-blue-800" },
      { name: "Node.js / Express", icon: "🟢", color: "bg-green-100 text-green-800" },
      { name: "OpenAI API", icon: "🤖", color: "bg-purple-100 text-purple-800" },
      { name: "Stripe", icon: "💳", color: "bg-yellow-100 text-yellow-800" },
      { name: "PostgreSQL", icon: "🐘", color: "bg-blue-100 text-blue-800" },
      { name: "Vercel", icon: "☁️", color: "bg-gray-100 text-gray-800" },
    ],
    image: "/images/riseStream/project-1.png",
    demoUrl: "https://quillai-1.onrender.com/",
    githubUrl: "https://github.com/ghanshyam9009/QuillAI",
    features: [
      "AI generation using ChatGPT/OpenAI API with prompt templates",
      "Subscription & one-time payments via Stripe + webhook handling",
      "Editor to review, edit and save generated drafts",
      "Usage logging, rate-limits and billing reconciliation",
      "Export to markdown / copy to clipboard / publish workflows",
    ],
    category: "SaaS",
    status: "Completed",
  },
  {
    id: 3,
    title: "Sorting Visualizer",
    subtitle: "Interactive algorithm visualizer for sorting algorithms",
    description:
      "A frontend tool that visualizes common sorting algorithms (Quick, Merge, Heap, Bubble, Insertion) with step-by-step animations and comparisons.",
    longDescription:
      "Sorting Visualizer is an educational React app that helps developers and students visualize how sorting algorithms operate. Users can pick algorithms, control speed, pause/play, step through operations, and compare time/space characteristics. Great for interviews and teaching.",
    techStack: [
      { name: "React", icon: "⚛️", color: "bg-blue-100 text-blue-800" },
      { name: "TypeScript", icon: "🔷", color: "bg-blue-100 text-blue-800" },
      { name: "Tailwind CSS", icon: "🎨", color: "bg-cyan-100 text-cyan-800" },
      { name: "Framer Motion", icon: "🎞️", color: "bg-purple-100 text-purple-800" },
    ],
    image: "/images/riseStream/project-3.png",
    demoUrl: "https://new-sorting-project.onrender.com/",
    githubUrl: "https://github.com/ghanshyam9009/income-tracer-project",
    features: [
      "Visualize Quick / Merge / Heap / Bubble / Insertion sorts",
      "Adjust array size and animation speed",
      "Step-by-step mode, pause/play and highlight swaps/comparisons",
      "Compare algorithms side-by-side and show complexity stats",
      "Responsive and keyboard-accessible controls",
    ],
    category: "Frontend",
    status: "Completed",
  },
  {
    id: 4,
    title: "Blog Clone",
    subtitle: "Full clone of a modern blog platform",
    description:
      "A full-featured blog application clone with authentication, posts, comments, tagging, editor and SEO-optimized pages.",
    longDescription:
      "This blog clone replicates the core features of modern blogging platforms: WYSIWYG editor, server-side rendering for SEO, user authentication, post listing with pagination, comments, tags, and author pages. Built with performance and SEO in mind.",
    techStack: [
      { name: "Next.js", icon: "⚛️", color: "bg-blue-100 text-blue-800" },
      { name: "Prisma", icon: "📊", color: "bg-indigo-100 text-indigo-800" },
      { name: "PostgreSQL", icon: "🐘", color: "bg-blue-100 text-blue-800" },
      { name: "Tailwind CSS", icon: "🎨", color: "bg-cyan-100 text-cyan-800" },
      { name: "Vercel", icon: "☁️", color: "bg-gray-100 text-gray-800" },
    ],
    image: "/images/riseStream/project-4.png",
    demoUrl: "https://fullstack-blog-project-qctv.onrender.com/",
    githubUrl: "https://github.com/ghanshyam9009/Fullstack-Blog-Project",
    features: [
      "Full-stack architecture with secure authentication and authorization",
      "Server-side rendered pages for SEO and fast loading",
      "Comment system with threaded replies and moderation tools",
      "Tagging, categories, and author profile pages",
      "Full-text search and filtering options",
      "Role-based access control for authors, editors, and admins",
      "Responsive design optimized for mobile, tablet, and desktop",
    ],
    category: "Full Stack",
    status: "Completed",
  },
];


export const skillCategories = [
  {
    name: "Frontend",
    skills: [
      "React",
      "Angular",
      "Vue.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
  },
  {
    name: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "Java",
      "Python",
      "MongoDB",
      "PostgreSQL",
      "MySQL",
    ],
  },
  {
    name: "Tools & Others",
    skills: ["Git", "Docker", "AWS", "Figma", "Postman", "Jest", "Webpack"],
  },
];
