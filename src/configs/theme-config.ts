const email = "hello@dianerdiana.dev";

export const themeConfig = {
  site: {
    name: "Dian Erdiana",
    title: "Dian Erdiana",
    description: "Portfolio software engineer yang rapi, terstruktur, dan berfokus pada kualitas implementasi.",
    language: "id",
    tagline: "Engineering over aesthetics. Clarity over complexity.",
    email,
  },
  assets: {
    favicon: "/favicon.ico",
    logo: "/logo/logo.svg",
    defaultOgImage: "",
  },
  links: {
    home: "/",
    projects: "/projects",
    blogs: "/blogs",
    contact: "/#contact",
    resume: "/",
    email: `mailto:${email}`,
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
  },
  navigation: {
    items: [
      { label: "About", href: "/#about" },
      { label: "Skills", href: "/#skills" },
      { label: "Experience", href: "/#experience" },
      { label: "Projects", href: "/projects" },
      { label: "Blogs", href: "/blogs" },
      { label: "Contact", href: "/#contact" },
    ],
    cta: {
      label: "Hire Me",
      href: `mailto:${email}`,
    },
  },
  socialLinks: [
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
    { label: "GitHub", href: "https://github.com/" },
    { label: "Email", href: `mailto:${email}` },
    { label: "Resume", href: "/" },
  ],
  pages: {
    home: {
      title: "Dian Erdiana",
      description: "Portfolio software engineer yang rapi, terstruktur, dan berfokus pada kualitas implementasi.",
    },
    projects: {
      title: "Projects",
      description: "Kumpulan project Dian Erdiana berdasarkan kategori, problem, solution, hasil, dan teknologi.",
      eyebrow: "Projects",
      heading: "A categorized view of selected engineering work.",
      descriptionText:
        "Setiap card dirancang untuk memperlihatkan konteks masalah, keputusan implementasi, hasil, dan teknologi yang dipakai supaya project mudah dibandingkan.",
      indexTitle: "Project index",
    },
    blogs: {
      title: "Blogs",
      description: "Kumpulan artikel Dian Erdiana tentang engineering, frontend, portfolio, dan keputusan teknis.",
      eyebrow: "Blogs",
      heading: "Notes on engineering decisions and clear interfaces.",
      descriptionText:
        "Artikel singkat tentang bagaimana struktur, tradeoff, dan detail interface bisa membuat software terasa lebih rapi dan mudah dipercaya.",
      filtersLabel: "Blog filters",
      sortTitle: "Sorting",
      topicTitle: "Topics",
      allTopicsLabel: "All topics",
      perPageLabel: "10 articles per page",
      emptyState: "Tidak ada article yang cocok dengan topic terpilih.",
      sortOptions: [
        { label: "Newest", value: "newest" },
        { label: "Oldest", value: "oldest" },
        { label: "Most viewed", value: "most-viewed" },
        { label: "Shortest read", value: "shortest-read" },
        { label: "Longest read", value: "longest-read" },
      ],
    },
    articleDetail: {
      backLabel: "Back to blogs",
      backHref: "/blogs",
    },
  },
  sections: {
    hero: {
      eyebrow: "Full-stack developer",
      heading: "Building reliable software with calm, structured execution.",
      description:
        "Saya membangun aplikasi web yang rapi, mudah dipelihara, dan berfokus pada kualitas keputusan teknis. Portfolio ini menyoroti proses berpikir, hasil terukur, dan cara saya menyelesaikan masalah engineering.",
      primaryCta: { label: "View Projects", href: "/projects" },
      secondaryCta: { label: "Contact", href: "#contact" },
      snapshot: {
        title: "Engineering Snapshot",
        subtitle: "Portfolio foundation",
        status: "Available",
        items: [
          {
            title: "Focus",
            description: "Maintainable products, practical architecture, clean delivery.",
          },
          {
            title: "Current Stack",
            description: "Astro, React, TailwindCSS, TypeScript, database-backed apps.",
          },
          {
            title: "Working Principle",
            description: "Craftsmanship over hype. Clarity over complexity.",
          },
        ],
        metrics: [
          { value: "01", label: "Foundation" },
          { value: "00", label: "Client JS" },
          { value: "SSG", label: "Output" },
        ],
      },
    },
    about: {
      eyebrow: "About",
      heading: "Focused on dependable engineering.",
      paragraphs: [
        "Saya melihat software engineering sebagai pekerjaan yang menuntut kejelasan: memahami masalah, memilih tradeoff yang tepat, lalu mengeksekusi dengan struktur yang mudah dipahami oleh tim berikutnya.",
        "Website ini dirancang untuk menampilkan cara berpikir tersebut secara tenang. Home memberi kesan pertama, sementara project detail nantinya menjadi pusat bukti: problem, keputusan teknis, hasil, dan pelajaran yang didapat.",
      ],
    },
    skills: {
      eyebrow: "Skills",
      heading: "A practical, maintainable stack.",
      description:
        "Skill ditata berdasarkan kategori kerja agar mudah dipindai oleh recruiter dan tetap siap diperluas dengan data yang lebih spesifik pada tahap berikutnya.",
      groups: [
        { title: "Frontend", items: ["Astro", "React", "TypeScript", "TailwindCSS"] },
        { title: "Backend", items: ["API design", "Authentication", "Validation", "Service structure"] },
        { title: "Database", items: ["Relational data", "Schema design", "Query planning", "Migrations"] },
        { title: "Cloud", items: ["Deployment", "Environment config", "Static delivery", "Runtime basics"] },
        { title: "DevOps", items: ["Build checks", "Version control", "Release discipline", "Debugging"] },
        { title: "Tools", items: ["Git", "Node.js", "npm", "Documentation"] },
      ],
    },
    experience: {
      eyebrow: "Experience",
      heading: "A workflow centered on impact.",
      description:
        "Section ini disiapkan sebagai timeline. Sampai data pengalaman profesional ditambahkan, kontennya menampilkan pola kerja yang akan menjadi dasar penulisan impact, bukan job description.",
      entries: [
        {
          phase: "Problem framing",
          title: "Start with context before implementation",
          description: "Memahami tujuan bisnis, pengguna, batasan teknis, dan definisi selesai sebelum memilih solusi.",
        },
        {
          phase: "System design",
          title: "Prefer clear structure over clever abstractions",
          description:
            "Membuat modul, data flow, dan interface yang bisa dibaca ulang tanpa bergantung pada ingatan pembuatnya.",
        },
        {
          phase: "Delivery",
          title: "Ship in increments with visible quality gates",
          description:
            "Mengutamakan build yang stabil, perubahan terukur, dan dokumentasi keputusan penting saat kompleksitas naik.",
        },
      ],
    },
    featuredProjects: {
      eyebrow: "Featured Projects",
      heading: "Project details will carry the portfolio.",
      description:
        "Card proyek dibuat besar dan terstruktur agar nanti mudah diganti dengan studi kasus nyata tanpa mengubah sistem layout.",
      cta: { label: "View all projects", href: "/projects" },
    },
    articles: {
      eyebrow: "Articles",
      heading: "Notes on craft and clarity.",
      description: "Catatan singkat tentang engineering, interface, dan cara mengambil keputusan teknis.",
      cta: { label: "View all articles", href: "/blogs" },
    },
    certificates: {
      eyebrow: "Certificates",
      heading: "Relevant proof, carefully curated.",
      description:
        "Grid ini sengaja ringkas agar sertifikat tidak mengambil alih halaman. Data final dapat diganti dengan sertifikat yang benar-benar relevan.",
    },
    contact: {
      eyebrow: "Contact",
      heading: "Let us talk when clarity matters.",
      description:
        "Untuk interview, kolaborasi, atau diskusi teknis, gunakan salah satu kanal berikut. Form di kanan hanya dimuat saat section ini terlihat agar halaman tetap ringan.",
    },
  },
} as const;
