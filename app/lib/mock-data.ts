export interface Author {
  id: string;
  name: string;
  avatar: string;
  bio: string;
  followers: number;
  following: number;
}

export interface Story {
  id: string;
  title: string;
  subtitle: string;
  content: string;
  coverImage?: string;
  author: Author;
  publishedAt: string;
  readTime: number;
  claps: number;
  comments: number;
  tags: string[];
  isMemberOnly?: boolean;
  image?: string;
}

export interface Topic {
  id: string;
  name: string;
  image: string;
  slug: string;
  description: string;
  followers: number;
  stories: number;
}

export const authors: Author[] = [
  { id: "1", name: "Sarah Chen", avatar: "https://i.pravatar.cc/150?img=1", bio: "Staff writer covering technology, culture, and the future of work. Previously at The Atlantic.", followers: 12400, following: 340 },
  { id: "2", name: "Marcus Rivera", avatar: "https://i.pravatar.cc/150?img=3", bio: "Software engineer and technical writer. Building tools for the next generation of creators.", followers: 8900, following: 210 },
  { id: "3", name: "Elena Vogt", avatar: "https://i.pravatar.cc/150?img=5", bio: "UX researcher and design thinker. Exploring the intersection of psychology and product design.", followers: 15200, following: 180 },
  { id: "4", name: "James Okafor", avatar: "https://i.pravatar.cc/150?img=8", bio: "Data scientist turned storyteller. Making complex ideas accessible to everyone.", followers: 6700, following: 420 },
  { id: "5", name: "Aria Patel", avatar: "https://i.pravatar.cc/150?img=9", bio: "Climate journalist and environmental advocate. Writing about sustainability and innovation.", followers: 22100, following: 150 },
  { id: "6", name: "Daniel Brooks", avatar: "https://i.pravatar.cc/150?img=11", bio: "Startup founder sharing lessons on entrepreneurship, growth, and product-market fit.", followers: 9800, following: 275 },
  { id: "7", name: "Nina Alvarez", avatar: "https://i.pravatar.cc/150?img=12", bio: "Freelance writer focused on remote work, productivity, and digital nomad life.", followers: 13400, following: 310 },
  { id: "8", name: "Omar Hassan", avatar: "https://i.pravatar.cc/150?img=13", bio: "AI researcher breaking down machine learning concepts for beginners.", followers: 17600, following: 190 },
  { id: "9", name: "Lily Thompson", avatar: "https://i.pravatar.cc/150?img=14", bio: "Personal finance educator helping millennials build wealth and financial freedom.", followers: 20100, following: 260 },
  { id: "10", name: "Victor Kim", avatar: "https://i.pravatar.cc/150?img=15", bio: "Full-stack developer writing about React, Next.js, and modern web architecture.", followers: 11200, following: 230 },
  { id: "11", name: "Sophia Müller", avatar: "https://i.pravatar.cc/150?img=16", bio: "Cognitive scientist exploring human behavior, habits, and decision-making.", followers: 14500, following: 170 },
  { id: "12", name: "Ahmed Khan", avatar: "https://i.pravatar.cc/150?img=17", bio: "Cybersecurity analyst sharing insights on privacy, security, and ethical hacking.", followers: 9300, following: 300 },
  { id: "13", name: "Isabella Rossi", avatar: "https://i.pravatar.cc/150?img=18", bio: "Creative director writing about branding, storytelling, and visual identity.", followers: 16800, following: 140 },
  { id: "14", name: "Ryan O’Connor", avatar: "https://i.pravatar.cc/150?img=19", bio: "Tech reviewer and gadget enthusiast covering the latest in consumer electronics.", followers: 12100, following: 260 },
  { id: "15", name: "Maya Singh", avatar: "https://i.pravatar.cc/150?img=20", bio: "Health and wellness coach focused on mindfulness, fitness, and balanced living.", followers: 18700, following: 220 },
  { id: "16", name: "Lucas Martins", avatar: "https://i.pravatar.cc/150?img=21", bio: "Product manager writing about SaaS growth, metrics, and team leadership.", followers: 10200, following: 195 },
  { id: "17", name: "Hannah Lee", avatar: "https://i.pravatar.cc/150?img=22", bio: "Frontend developer sharing UI patterns, accessibility tips, and design systems.", followers: 15600, following: 240 },
  { id: "18", name: "Noah Williams", avatar: "https://i.pravatar.cc/150?img=23", bio: "Blockchain enthusiast exploring Web3, crypto economics, and decentralization.", followers: 8900, following: 310 },
  { id: "19", name: "Zara Ahmed", avatar: "https://i.pravatar.cc/150?img=24", bio: "EdTech writer focused on online learning, AI tutors, and the future of education.", followers: 14100, following: 205 },
  { id: "20", name: "Ethan Brown", avatar: "https://i.pravatar.cc/150?img=25", bio: "DevOps engineer explaining cloud infrastructure, CI/CD, and scalable systems.", followers: 11800, following: 260 },
  { id: "21", name: "Priya Nair", avatar: "https://i.pravatar.cc/150?img=26", bio: "Marketing strategist writing about content marketing and brand growth.", followers: 17300, following: 180 },
  { id: "22", name: "Tomás Silva", avatar: "https://i.pravatar.cc/150?img=27", bio: "Mobile app developer building cross-platform apps with Flutter and React Native.", followers: 9600, following: 290 },
  { id: "23", name: "Grace Johnson", avatar: "https://i.pravatar.cc/150?img=28", bio: "Career coach helping professionals navigate job transitions and leadership roles.", followers: 21000, following: 150 },
  { id: "24", name: "Yuki Tanaka", avatar: "https://i.pravatar.cc/150?img=29", bio: "Data analyst sharing practical SQL, dashboards, and business intelligence tips.", followers: 13200, following: 275 },
  { id: "25", name: "Samuel Adeyemi", avatar: "https://i.pravatar.cc/150?img=30", bio: "Entrepreneur and investor discussing startups, venture capital, and innovation.", followers: 24400, following: 120 },
];

export const stories: Story[] = [
  {
    id: "1",
    title: "The Architecture of Attention in the Age of Infinite Scroll",
    subtitle: "How our digital environments shape the way we think, create, and connect with one another",
    content: `In the quiet hours of the morning, before the world wakes and the notifications begin their relentless march, there exists a space of remarkable clarity. It is in these moments that the architecture of our attention reveals itself most plainly.

We have built, over the past two decades, an extraordinary machine for capturing and redirecting human focus. The infinite scroll, the algorithmic feed, the notification badge — each is a small architectural decision that, taken together, has reshaped how billions of people experience consciousness itself.

## The Paradox of Choice

Barry Schwartz warned us about this in 2004. But even he couldn't have predicted how the paradox of choice would manifest in our information diets. We don't just choose between brands of jam anymore. We choose, moment by moment, between an essentially infinite array of thoughts, ideas, and narratives competing for our attention.

> "The cost of a thing is the amount of what I will call life which is required to be exchanged for it, immediately or in the long run." — Henry David Thoreau

This exchange rate has never been more unfavorable. The average person now encounters more information in a single day than a 15th-century scholar would in their entire lifetime. The question is no longer whether we can access information, but whether we can resist it.

## Designing for Depth

The most interesting design challenge of our era isn't making things more engaging — we've solved that problem, perhaps too well. The real challenge is designing for depth. How do we create digital environments that encourage sustained thought rather than reactive scrolling?

Some promising approaches have emerged:

1. **Friction by design**: Intentionally slowing down the consumption process
2. **Progressive disclosure**: Revealing complexity gradually rather than all at once
3. **Temporal boundaries**: Creating natural stopping points in the experience
4. **Context preservation**: Maintaining the thread of thought across interactions

These patterns share a common philosophy: that attention is not a resource to be extracted, but a capacity to be cultivated.`,
    author: authors[0],
    publishedAt: "2026-02-08",
    readTime: 8,
    claps: 2340,
    image: "https://miro.medium.com/v2/resize:fit:849/format:webp/1*L-N_th_EjaDu3ANhBnd4RA.png",
    comments: 89,
    tags: ["Technology", "Design", "Culture"],
    isMemberOnly: true,
  },
  {
    id: "2",
    title: "Why Every Developer Should Write",
    subtitle: "Writing isn't just communication — it's a thinking tool that makes you a better engineer",
    content: "The best engineers I know are also prolific writers...",
    author: authors[1],
    publishedAt: "2026-02-07",
    readTime: 5,
    claps: 1890,
    image: "https://miro.medium.com/v2/resize:fit:849/format:webp/1*nH6A-l2IdTX0Mh7HZxRBCg.png",
    comments: 134,
    tags: ["Programming", "Writing", "Career"],
  },
  {
    id: "3",
    title: "The Invisible Design Decisions That Shape Your Day",
    subtitle: "From the alarm clock to the last scroll before sleep, design is everywhere",
    content: "You wake up to a carefully designed sound...",
    author: authors[2],
    publishedAt: "2026-02-06",
    readTime: 7,
    claps: 3100,
    image: "https://miro.medium.com/v2/resize:fit:849/format:webp/1*EZck_FywC5Y88rxXc9gtlw.png",
    comments: 67,
    tags: ["Design", "UX", "Psychology"],
    isMemberOnly: true,
  },
  {
    id: "4",
    title: "What Data Scientists Don't Tell You About AI",
    subtitle: "The gap between AI hype and AI reality is wider than most people think",
    content: "Every week, a new AI breakthrough captures headlines...",
    author: authors[3],
    publishedAt: "2026-02-05",
    readTime: 11,
    claps: 5200,
    image: "https://miro.medium.com/v2/resize:fit:849/format:webp/1*K7iqsUkW4oSnGfTd0TL_8A.png",
    comments: 213,
    tags: ["AI", "Data Science", "Technology"],
  },
  {
    id: "5",
    title: "The City That Runs on Seaweed",
    subtitle: "How a small coastal town became a model for sustainable urban design",
    content: "Nestled between volcanic cliffs and the North Atlantic...",
    author: authors[4],
    publishedAt: "2026-02-04",
    readTime: 9,
    claps: 4100,
    image: "https://miro.medium.com/v2/resize:fit:849/format:webp/1*rh62wX0tjOvDmB_taswsPA.png",
    comments: 156,
    tags: ["Climate", "Sustainability", "Innovation"],
  },
  {
    id: "6",
    title: "The Lost Art of Reading Slowly",
    subtitle: "In a world optimized for speed, there's radical power in taking your time",
    content: "Speed reading courses promise to triple your reading pace...",
    author: authors[0],
    publishedAt: "2026-02-03",
    readTime: 6,
    claps: 1750,
    image: "https://miro.medium.com/v2/resize:fit:849/format:webp/1*xfboC-sVIT2hzWkgQZT_7w.png",
    comments: 45,
    tags: ["Culture", "Reading", "Mindfulness"],
  },
  {
    id: "7",
    title: "Building a Second Brain with Plain Text Files",
    subtitle: "Forget fancy apps — a simple folder of text files might be all you need",
    content: "I've tried every note-taking app imaginable...",
    author: authors[1],
    publishedAt: "2026-02-02",
    readTime: 8,
    claps: 2900,
    image: "https://miro.medium.com/v2/resize:fit:849/format:webp/1*LdO6THdw6keJGGF2TxxoOA.png",
    comments: 178,
    tags: ["Productivity", "Programming", "Tools"],
  },
  {
    id: "8",
    title: "The Psychology of Color in Digital Products",
    subtitle: "Why that shade of blue makes you trust a website more than you should",
    content: "Color is the silent ambassador of design...",
    author: authors[2],
    publishedAt: "2026-02-01",
    readTime: 6,
    claps: 1200,
    image: "https://miro.medium.com/v2/resize:fit:849/format:webp/0*yE7DQFg38iD0axKe",
    comments: 34,
    tags: ["Design", "Psychology", "Product"],
  },
  {
    id: "9",
    title: "Remote Work Isn't About Location — It's About Trust",
    subtitle: "Why the future of work depends more on culture than on tools",
    content: "When offices closed, many companies believed productivity would collapse...",
    author: authors[6],
    publishedAt: "2026-01-31",
    readTime: 7,
    claps: 2650,
    image: "https://miro.medium.com/v2/da:true/resize:fill:200:134/0*rHHxVr_QnCI3xsam",
    comments: 98,
    tags: ["Remote Work", "Culture", "Career"],
  },
  {
    id: "10",
    title: "Inside the Mind of a Product Manager",
    subtitle: "Balancing vision, velocity, and very strong opinions",
    content: "Product management is often misunderstood...",
    author: authors[5],
    publishedAt: "2026-01-30",
    readTime: 9,
    claps: 3420,
    image: "https://miro.medium.com/v2/resize:fill:200:134/1*WjkVcmAf7zsneXoFUML0Cg.avif",
    comments: 121,
    tags: ["Product", "Startup", "Leadership"],
    isMemberOnly: true,
  },
  {
    id: "11",
    title: "The Hidden Cost of Convenience",
    subtitle: "What we trade away when everything becomes one-click",
    content: "Convenience is the defining feature of modern life...",
    author: authors[4],
    publishedAt: "2026-01-29",
    readTime: 6,
    claps: 1980,
    image: "https://miro.medium.com/v2/resize:fill:200:134/1*6UJVfLXpLEdHh4KRYcWcGw.png",
    comments: 64,
    tags: ["Technology", "Culture", "Society"],
  },
  {
    id: "12",
    title: "From Junior to Senior: The Developer Growth Curve",
    subtitle: "It's less about syntax and more about systems thinking",
    content: "Early in your career, progress feels linear...",
    author: authors[9],
    publishedAt: "2026-01-28",
    readTime: 10,
    claps: 4210,
    image: "https://miro.medium.com/v2/resize:fill:200:134/1*C8RVDKs_uZrVUdgpsF6Fmw.png",
    comments: 202,
    tags: ["Programming", "Career", "Growth"],
  },
  {
    id: "13",
    title: "Why Most AI Startups Fail",
    subtitle: "The difference between a demo and a durable business",
    content: "Building an AI demo is easier than ever...",
    author: authors[7],
    publishedAt: "2026-01-27",
    readTime: 8,
    claps: 3890,
    image: "https://miro.medium.com/v2/resize:fill:200:134/1*fnVDgjAxFQItu10X3CfwBw.png",
    comments: 175,
    tags: ["AI", "Startup", "Business"],
    isMemberOnly: true,
  },
  {
    id: "14",
    title: "Designing Products for Human Emotion",
    subtitle: "The overlooked layer of product-market fit",
    content: "Metrics tell you what users do. Emotion tells you why...",
    author: authors[2],
    publishedAt: "2026-01-26",
    readTime: 7,
    claps: 2760,
    image: "https://miro.medium.com/v2/resize:fill:200:134/1*K-0ugH8-LolZT1ucrIWDvQ.png",
    comments: 83,
    tags: ["Design", "Product", "Psychology"],
  },
  {
    id: "15",
    title: "The Minimalist's Guide to Digital Life",
    subtitle: "Less apps. Fewer notifications. More clarity.",
    content: "Digital minimalism isn't about rejecting technology...",
    author: authors[1],
    publishedAt: "2026-01-25",
    readTime: 5,
    claps: 1540,
    image: "https://miro.medium.com/v2/resize:fill:200:134/1*7seiGDAW_yeQLR__Yt3vPA.png",
    comments: 59,
    tags: ["Productivity", "Mindfulness", "Technology"],
  },
  {
    id: "16",
    title: "Climate Tech Is the New Frontier",
    subtitle: "Why the next wave of unicorns will be green",
    content: "For decades, climate change was framed as a constraint...",
    author: authors[4],
    publishedAt: "2026-01-24",
    readTime: 9,
    claps: 4680,
    image: "https://miro.medium.com/v2/resize:fill:200:134/1*6uDWVT-FbO9YIXAa1xjoVg.png",
    comments: 142,
    tags: ["Climate", "Innovation", "Startup"],
    isMemberOnly: true,
  },
  {
    id: "17",
    title: "The Quiet Power of Consistency",
    subtitle: "Small daily actions compound into extraordinary outcomes",
    content: "We tend to overestimate what we can achieve in a week...",
    author: authors[14],
    publishedAt: "2026-01-23",
    readTime: 6,
    claps: 3120,
    image: "https://miro.medium.com/v2/resize:fill:200:134/1*0K97PqU0afCpYJA5zAEhFw.png",
    comments: 77,
    tags: ["Self Improvement", "Habits", "Mindset"],
  },
  {
    id: "18",
    title: "Rethinking Education for the AI Era",
    subtitle: "Memorization is out. Adaptability is in.",
    content: "The education system was designed for the industrial age...",
    author: authors[8],
    publishedAt: "2026-01-22",
    readTime: 8,
    claps: 3570,
    image: "https://miro.medium.com/v2/resize:fill:200:134/1*mKQ2oebpb6a9X3X6pNkXEA.png",
    comments: 110,
    tags: ["Education", "AI", "Future"],
  },
];

export const topics: Topic[] = [
  { id: "1", name: "Technology",image:"", slug: "technology", description: "The latest in tech, software, and innovation", followers: 3200000, stories: 89000 },
  { id: "2", name: "Design",image:"", slug: "design", description: "Visual design, UX, and creative thinking", followers: 1800000, stories: 45000 },
  { id: "3", name: "Programming",image:"", slug: "programming", description: "Code, architecture, and software engineering", followers: 2500000, stories: 67000 },
  { id: "4", name: "Writing",image:"", slug: "writing", description: "The craft of writing and storytelling", followers: 1200000, stories: 34000 },
  { id: "5", name: "AI",image:"", slug: "ai", description: "Artificial intelligence and machine learning", followers: 4100000, stories: 112000 },
  { id: "6", name: "Climate",image:"", slug: "climate", description: "Climate science, sustainability, and the environment", followers: 980000, stories: 23000 },
  { id: "7", name: "Culture",image:"", slug: "culture", description: "Society, trends, and cultural commentary", followers: 2100000, stories: 56000 },
  { id: "8", name: "Psychology",image:"", slug: "psychology", description: "Understanding the human mind", followers: 1500000, stories: 41000 },
];

export const trendingTags = ["AI", "Design", "React", "Climate", "Startups", "UX", "Python", "Leadership"];

export function formatNumber(n: number): string {
  if (n >= 1000000) return (n / 1000000).toFixed(1) + "M";
  if (n >= 1000) return (n / 1000).toFixed(1) + "K";
  return n.toString();
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}
