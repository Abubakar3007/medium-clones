"use client";
import { Layout } from "@/components/Layout";
import { useState } from "react";
import { Search as SearchIcon } from "lucide-react";
import Link from 'next/link'
import Footer from "@/components/Footer";
const SearchPage = () => {
  const [query, setQuery] = useState("");
  function slugify(text: string) {
    return text.toLowerCase().replace(/\s+/g, "-");
  }

  const topicsLinks = ["Work", "Life", "Society", "Culture", "Self Improvement", "Self Development", "World", "Technology", "Programming", "Data Science"];

  const categoriesArray = [
    {
      title: "Life",
      sections: [
        {
          title: "Family",
          items: ["Adoption", "Children", "Elder Care", "Fatherhood", "Motherhood", "More"],
        },
        {
          title: "Health",
          items: ["Aging", "Coronavirus", "Covid-19", "Death And Dying", "Disease", "More"],
        },
        {
          title: "Relationships",
          items: ["Dating", "Divorce", "Friendship", "Love"],
        },
      ],
    },
    {
      title: "Self Improvement",
      sections: [
        {
          title: "Mental Health",
          items: ["Anxiety", "Counseling", "Grief", "Life Lessons", "Self-awareness", "More"],
        },
        {
          title: "Productivity",
          items: ["Career Advice", "Coaching", "Goal Setting", "Morning Routines", "Pomodoro Technique", "More"],
        },
        {
          title: "Mindfulness",
          items: ["Guided Meditation", "Journaling", "Meditation", "Transcendental Meditation"],
        },
      ],
    },
    {
      title: "Work",
      sections: [
        {
          title: "Business",
          items: ["Entrepreneurship", "Freelancing", "Small Business", "Startups", "Venture Capital"],
        },
        {
          title: "Marketing",
          items: ["Advertising", "Branding", "Content Marketing", "Content Strategy", "Digital Marketing", "More"],
        },
        {
          title: "Leadership",
          items: ["Employee Engagement", "Leadership Coaching", "Leadership Development", "Management"],
        },
      ],
    },
  ];

  const categoriesArray2 = [
    {
      title: "Technology",
      sections: [
        {
          title: "Artificial Intelligence",
          items: [
            "ChatGPT",
            "Conversational AI",
            "Deep Learning",
            "Large Language Models",
            "Machine Learning",
            "More",
          ],
        },
        {
          title: "Blockchain",
          items: [
            "Bitcoin",
            "Cryptocurrency",
            "Decentralized Finance",
            "Ethereum",
            "NFT",
            "More",
          ],
        },
        {
          title: "Data Science",
          items: [
            "Analytics",
            "Data Engineering",
            "Data Visualization",
            "Database Design",
            "SQL",
          ],
        },
      ],
    },
    {
      title: "Software Development",
      sections: [
        {
          title: "Programming",
          items: [
            "Android Development",
            "Coding",
            "Flutter",
            "Frontend Engineering",
            "iOS Development",
            "More",
          ],
        },
        {
          title: "Programming Languages",
          items: [
            "Angular",
            "CSS",
            "HTML",
            "Java",
            "JavaScript",
            "More",
          ],
        },
        {
          title: "Dev Ops",
          items: [
            "AWS",
            "Databricks",
            "Docker",
            "Kubernetes",
            "Terraform",
          ],
        },
      ],
    },
    {
      title: "Media",
      sections: [
        {
          title: "Writing",
          items: [
            "30 Day Challenge",
            "Book Reviews",
            "Books",
            "Creative Nonfiction",
            "Diary",
            "More",
          ],
        },
        {
          title: "Art",
          items: [
            "Comics",
            "Contemporary Art",
            "Drawing",
            "Fine Art",
            "Generative Art",
            "More",
          ],
        },
        {
          title: "Gaming",
          items: [
            "Game Design",
            "Game Development",
            "Indie Game",
            "Metaverse",
            "Nintendo",
            "More",
          ],
        },
      ],
    },
  ];

  const categoriesArray3 = [
    {
      title: "Society",
      sections: [
        {
          title: "Economics",
          items: [
            "Basic Income",
            "Debt",
            "Economy",
            "Inflation",
            "Stock Market",
          ],
        },
        {
          title: "Education",
          items: [
            "Charter Schools",
            "Education Reform",
            "Higher Education",
            "PhD",
            "Public Schools",
            "More",
          ],
        },
        {
          title: "Equality",
          items: [
            "Disability",
            "Discrimination",
            "Diversity In Tech",
            "Feminism",
            "Inclusion",
            "More",
          ],
        },
      ],
    },
    {
      title: "Culture",
      sections: [
        {
          title: "Philosophy",
          items: [
            "Atheism",
            "Epistemology",
            "Ethics",
            "Existentialism",
            "Metaphysics",
            "More",
          ],
        },
        {
          title: "Religion",
          items: [
            "Buddhism",
            "Christianity",
            "Hinduism",
            "Islam",
            "Judaism",
            "More",
          ],
        },
        {
          title: "Spirituality",
          items: [
            "Astrology",
            "Energy Healing",
            "Horoscopes",
            "Mysticism",
            "Reiki",
          ],
        },
      ],
    },
    {
      title: "World",
      sections: [
        {
          title: "Cities",
          items: [
            "Abu Dhabi",
            "Amsterdam",
            "Athens",
            "Bangkok",
            "Barcelona",
            "More",
          ],
        },
        {
          title: "Nature",
          items: [
            "Birding",
            "Camping",
            "Climate Change",
            "Conservation",
            "Hiking",
            "More",
          ],
        },
        {
          title: "Travel",
          items: [
            "Tourism",
            "Travel Tips",
            "Travel Writing",
            "Vacation",
            "Vanlife",
          ],
        },
      ],
    },
  ];

  return (
    <Layout>
      <div className="mx-auto max-w-[1192px] xl:px-0 px-6 py-6 mb-10">
        {/* topics tabs */}
        <div className="flex overflow-hidden mb-8">
          <div className="overflow-x-auto pb-4 scrollbar-none">
            <nav>
              <ul className="flex gap-3 whitespace-nowrap">
                <li>
                  <Link href="/explore-topics" className="p-[6px] pr-4 border border-input flex gap-2 items-center rounded-full bg-[#F2F2F2]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24" width="24">
                      <circle cx="12" cy="12" r="10" stroke="currentColor"></circle>
                      <path fill="currentColor" fillRule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.478 2 12s4.477 10 10 10m3.936-14.844.147-.99-.88.477-5.898 3.194-.22.12-.037.246-.984 6.636-.146.99.879-.477 5.899-3.194.22-.119.036-.247zM9.2 15.996l.719-4.846 3.59 2.514zm1.292-5.665 3.59 2.514.718-4.846z" clipRule="evenodd"></path>
                    </svg>
                    <span>Explore topics</span>
                  </Link>
                </li>
                {
                  topicsLinks.map(data => (
                    <li>
                      <Link href="" className="py-2 px-4 rounded-full border border-[#F2F2F2] bg-[#F2F2F2] block">
                        {data}
                      </Link>
                    </li>
                  ))
                }
              </ul>
            </nav>
          </div>
        </div>
        {/* Search input */}
        <div className="pb-16 border-b border-input/10 mb-20">
          <h1 className="text-[42px] tracking-tight text-center">Explore topics</h1>

          <div className="relative my-6 animate-fade-in max-w-[680px] px-6 mx-auto w-full">
            <SearchIcon className="absolute left-12 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search all topics"
              autoFocus
              className="w-full h-16 rounded-full bg-[#f2f2f2]/50 pl-16 pr-6 outline-none placeholder:text-muted-foreground"
            />
          </div>

          <div className="flex justify-center gap-3 sm:flex-row flex-col items-center">
            <p className="text-muted-foreground">Recommended:</p>
            <ul className="flex gap-2 items-center flex-wrap">
              <li><Link href="" className="hover:underline">Programming</Link></li>
              <li><Link href="" className="hover:underline">Self Improvement</Link></li>
              <li><Link href="" className="hover:underline">Data Science</Link></li>
            </ul>
          </div>
        </div>
        <div className="mb-14 pb-8 border-b border-input/10">
          <div className="grid md:grid-cols-3 gap-10">
            {categoriesArray.map((category) => (
              <div key={category.title}>
                {/* Main Category */}
                <h2 className="text-2xl leading-8 font-semibold mb-4">
                  <Link href={`/${slugify(category.title)}`}>
                    {category.title}
                  </Link>
                </h2>

                {/* Sections */}
                {category.sections.map((section) => (
                  <div key={section.title} className="mb-6 mt-8 pl-6">
                    <h3 className="font-medium mb-2 text-base">
                      <Link
                        href={`/${slugify(category.title)}/${slugify(
                          section.title
                        )}`}
                      >
                        {section.title}
                      </Link>
                    </h3>

                    <ul className="space-y-3 pl-4 mt-3">
                      {section.items.map((item) => (
                        <li key={item}>
                          <Link
                            href={`/${slugify(category.title)}/${slugify(
                              section.title
                            )}/${slugify(item)}`}
                            className="text-neutral-500 hover:text-black"
                          >
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="mb-14 pb-8 border-b border-input/10">
          <div className="grid md:grid-cols-3 gap-10">
            {categoriesArray2.map((category) => (
              <div key={category.title}>
                {/* Main Category */}
                <h2 className="text-2xl leading-8 font-semibold mb-4">
                  <Link href={`/${slugify(category.title)}`}>
                    {category.title}
                  </Link>
                </h2>

                {/* Sections */}
                {category.sections.map((section) => (
                  <div key={section.title} className="mb-6 mt-8 pl-6">
                    <h3 className="font-medium mb-2 text-base">
                      <Link
                        href={`/${slugify(category.title)}/${slugify(
                          section.title
                        )}`}
                      >
                        {section.title}
                      </Link>
                    </h3>

                    <ul className="space-y-3 pl-4 mt-3">
                      {section.items.map((item) => (
                        <li key={item}>
                          <Link
                            href={`/${slugify(category.title)}/${slugify(
                              section.title
                            )}/${slugify(item)}`}
                            className="text-neutral-500 hover:text-black"
                          >
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="mb-14 pb-8 border-b border-input/10">
          <div className="grid md:grid-cols-3 gap-10">
            {categoriesArray3.map((category) => (
              <div key={category.title}>
                {/* Main Category */}
                <h2 className="text-2xl leading-8 font-semibold mb-4">
                  <Link href={`/${slugify(category.title)}`}>
                    {category.title}
                  </Link>
                </h2>

                {/* Sections */}
                {category.sections.map((section) => (
                  <div key={section.title} className="mb-6 mt-8 pl-6">
                    <h3 className="font-medium mb-2 text-base">
                      <Link
                        href={`/${slugify(category.title)}/${slugify(
                          section.title
                        )}`}
                      >
                        {section.title}
                      </Link>
                    </h3>

                    <ul className="space-y-3 pl-4 mt-3">
                      {section.items.map((item) => (
                        <li key={item}>
                          <Link
                            href={`/${slugify(category.title)}/${slugify(
                              section.title
                            )}/${slugify(item)}`}
                            className="text-neutral-500 hover:text-black"
                          >
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 rounded-sm bg-[#f2f2f2] text-center">
          <p>
            See a topic you think should be added or removed here?
            <a href="" className="underline">Suggest an edit</a>
          </p>
        </div>
      </div>

      <Footer/>
    </Layout>
  )
};

export default SearchPage;
