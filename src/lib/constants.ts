export interface WritingItem {
  title: string;
  source: string;
  url: string;
}

export interface SpeakingItem {
  event: string;
  topic: string;
  location: string;
  date: string;
  url?: string;
}

export const HERO = {
  headline: "Public Sector Technologist",
  subtitle: "AI, data, and modern platforms for government",
  summary:
    "I focus on how AI, data, and modern platforms are reshaping tax administration and government operations. My work sits at the intersection of technology, policy, and real-world implementation.",
};

export const BIO: string[] = [
  "I help state and local tax agencies move from theory to practice across areas like artificial intelligence, emerging technology trends, data analytics, data safeguarding, cybersecurity, and platform modernization.",
  "I currently work with the Federation of Tax Administrators, the national organization supporting principal tax agencies in all 50 states, Washington, D.C., and the cities of New York and Philadelphia. I also host FTA Tax Breaks, where we explore the people, ideas, and technologies shaping the future of tax administration.",
  "Before that, I was a brand facilitator and lead project manager at a marketing agency, where I helped public, private, and non-profit organizations build stronger communities by creating compelling brands and memorable experiences.",
  "Outside of work, my partner Mike and I are rescue dog dads and unapologetic theme park enthusiasts.",
];

export const WRITING: WritingItem[] = [
  {
    title: "The Modernization of State and Local Tax Agencies",
    source: "University of Illinois-Chicago Government Finance Research Center",
    url: "https://gfrc.uic.edu/the-government-finance-research-blog/the-modernization-of-state-and-local-tax-agencies/",
  },
  {
    title: "FTA Tax Breaks Podcast",
    source: "Federation of Tax Administrators",
    url: "https://rss.com/podcasts/taxbreaks",
  },
];

export const SPEAKING: SpeakingItem[] = [
  {
    event: "FENAFIM-SENAM Conference",
    topic: "Artificial Intelligence in Tax Administration",
    location: "Brazil",
    date: "November 2025",
    url: "https://senam.org.br/programacao/",
  },
  {
    event: "Avalara CRUSH",
    topic: "Technology & tax compliance trends",
    location: "Austin, TX",
    date: "November 2024",
  },
  {
    event: "CIAT Technical Conference",
    topic: "International tax technology & data security",
    location: "Lima, Peru",
    date: "October 2024",
  },
];

export const SPEAKING_INTRO =
  "I speak and moderate panels on emerging technology, artificial intelligence, data security, and government modernization at conferences around the world. Here are a few recent appearances.";

export const SPEAKING_FTA = {
  text: "I also regularly speak at FTA's conferences and training events.",
  linkText: "See upcoming FTA events",
  url: "https://taxadmin.org/conferences-and-trainings/",
};

export const SPEAKING_CTA = {
  headline: "Interested in having me speak?",
  description:
    "I'm available for keynotes, panels, and workshops on AI in government, emerging technology trends, data security, cybersecurity, and the future of tax administration.",
  emailLabel: "Get in Touch",
};

export const CONTACT = {
  email: "ryan@mjrm.us",
  linkedin: "https://linkedin.com/in/ryanminnick",
  keybase: "https://keybase.io/ryanminnick",
};
