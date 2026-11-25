// All portfolio content lives here. Edit this file to update the site.
// Source: Nandana's resume and LinkedIn profile. Nothing here is invented.

export const profile = {
  name: "Nandana Sargam Madhu",
  title: "Software Engineer",
  roles: ["Software Engineer", "Full Stack Developer", "ASP.NET Core Developer", "React Developer"],
  photo: "/me.jpg",
  headline: "Full-stack engineer building .NET and React applications",
  positioning:
    "I build REST APIs and responsive interfaces with C#, ASP.NET Core and React, backed by SQL Server. Two of my client projects are live today.",
  status: "Open to opportunities",
  location: "Kerala, India",
  email: "nandanamadhu21@gmail.com",
  phone: "+91 8547149902",
  linkedin: "https://www.linkedin.com/in/nandanasargam",
  github: "https://github.com/nandanasargam",
};

export const about = [
  "I am a software engineer with a year of professional experience at Uniware Technologies in Kottayam, working across the stack with C#, .NET Core, ASP.NET Core and React.js.",
  "My day-to-day covers API development, frontend and backend integration, debugging, performance improvement and keeping code maintainable. I also support teammates with daily development tasks so the team can focus on high-priority work.",
  "I have also built cross-platform mobile UI with Flutter, and I hold a cyber security certification from ISDC with Robert Gordon University, UK.",
];

export const projects = [
  {
    name: "Columbia Furnishings Website and CRM",
    problem:
      "An interior furnishings business needed a public website for its products and a way to manage the content and customer enquiries behind it.",
    solution:
      "A responsive product website paired with an admin CRM. The homepage updates dynamically from the CRM, and enquiries are handled in real time.",
    contribution: [
      "Developed the responsive website that showcases the furnishing products",
      "Built the admin CRM for product uploads, customer enquiries and promotional offers",
      "Enabled dynamic homepage updates and real-time enquiry handling",
    ],
    outcome: "Live as a working demo, with a separate admin login for managing content.",
    tech: ["ASP.NET", "React", "TypeScript", "Tailwind CSS", "SQL Server"],
    links: [
      { label: "Live site", href: "https://colombiademo.kioskpg.in/" },
      { label: "Admin CRM", href: "https://colombiademo.kioskpg.in/admin/login" },
    ],
  },
  {
    name: "Ayuss Wellness Community Portal",
    problem:
      "An Ayurvedic hospital needed an online community space where people could join as members and ask about treatments.",
    solution:
      "A clean, responsive community portal with member registration and treatment enquiry features.",
    contribution: [
      "Developed the community portal",
      "Designed a clean, user-friendly, responsive interface",
      "Implemented member registration and treatment enquiry functionality",
    ],
    outcome: "Live and publicly accessible.",
    tech: ["ASP.NET", "React", "TypeScript", "Tailwind CSS", "SQL Server"],
    links: [{ label: "Live site", href: "https://ayusswelcom.kioskpg.in/" }],
  },
];

export const experience = [
  {
    role: "Software Engineer, Full Stack (.NET and React)",
    company: "Uniware Technologies",
    place: "Kottayam, Kerala",
    period: "Apr 2025 to Apr 2026",
    points: [
      "Developed and maintained applications with C#, .NET Core, ASP.NET Core, React.js and Bootstrap",
      "Designed and integrated RESTful APIs, connecting frontend and backend",
      "Debugged issues and improved application performance",
      "Kept code clean and maintainable while meeting project deadlines",
      "Built responsive interfaces with React.js and Bootstrap",
      "Took part in sprint planning and worked with cross-functional teams",
      "Supported teammates with daily development tasks, freeing time for high-priority work",
    ],
  },
  {
    role: "Flutter Development Intern",
    company: "Softloom Solution",
    place: "",
    period: "May 2024 to Jun 2024",
    points: ["Developed mobile UI components with Flutter (cross-platform)"],
  },
];

export const skills = [
  { group: "Languages", items: ["C#", "JavaScript", "TypeScript", "HTML", "CSS"] },
  { group: "Backend", items: ["ASP.NET Core", ".NET Core", "REST API development", "MVC", "OOP"] },
  { group: "Frontend", items: ["React.js", "Tailwind CSS", "Bootstrap", "Responsive UI design"] },
  { group: "Mobile", items: ["Flutter", "Cross-platform development"] },
  { group: "Databases", items: ["SQL Server", "SQL", "Firebase"] },
  { group: "Practices and tools", items: ["Git", "Agile development", "Performance optimization", "Debugging"] },
];

export const education = [
  {
    title: "Bachelor of Vocation in Information Technology",
    org: "MG University",
    period: "2022 to 2025",
  },
  { title: "Higher Secondary Education", org: "Government of Kerala", period: "2020 to 2022" },
];

export const certifications = [
  "Software Engineering in C#, .NET and React (full-stack development), Uniware Technologies",
  "Cyber Security certification, ISDC with Robert Gordon University, Scotland, UK (Pilot and Pinnacle Program)",
  "Flutter internship program: cross-platform mobile application development",
  "HTML, CSS and JavaScript development",
];

export const languages = "English (fluent), Malayalam (native), Hindi (intermediate)";
