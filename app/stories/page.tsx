"use client";
import { Layout } from "@/components/Layout";
import { useState } from "react";
import { stories, formatDate } from "@/app/lib/mock-data";
import { LeftSidebar } from "@/components/LeftSidebar";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, MessageCircle, ThumbsUp } from "lucide-react";
import Link from 'next/link';

const draftsDataSet = [
  {
    id: 1,
    image: "https://miro.medium.com/v2/resize:fit:800/format:webp/1*EZck_FywC5Y88rxXc9gtlw.png",
    title: "Why Simplicity Wins in Product Design",
    readTime: "6 min read",
    totalWords: 1240,
    updatedTime: "June 02, 2025",
    publications: "Tech Daily",
    status: "draft"
  },
  {
    id: 2,
    image: "https://miro.medium.com/v2/resize:fit:800/format:webp/1*K7iqsUkW4oSnGfTd0TL_8A.png",
    title: "AI Tools Are Changing How We Learn",
    readTime: "8 min read",
    totalWords: 1890,
    updatedTime: "June 10, 2025",
    publications: "Future Stack",
    status: "pending"
  },
  {
    id: 3,
    image: "https://miro.medium.com/v2/resize:fit:0/1*nQapfd5q0TTaMjfZsjIosg.jpeg",
    title: "Building My Second Brain with Notion",
    readTime: "5 min read",
    totalWords: 980,
    updatedTime: "June 18, 2025",
    publications: "Abubakar",
    status: "draft"
  },
  {
    id: 4,
    image: "https://miro.medium.com/v2/resize:fit:800/format:webp/1*rh62wX0tjOvDmB_taswsPA.png",
    title: "The Future of Climate Startups",
    readTime: "9 min read",
    totalWords: 2210,
    updatedTime: "July 01, 2025",
    publications: "Green World",
    status: "review"
  },
  {
    id: 5,
    image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*iHJVByWi4JzcTD-SwKUc3Q.png",
    title: "Consistency Beats Motivation",
    readTime: "4 min read",
    totalWords: 760,
    updatedTime: "July 05, 2025",
    publications: "Self Growth",
    status: "draft"
  },
  {
    id: 6,
    image: "https://miro.medium.com/v2/resize:fit:800/format:webp/1*nH6A-l2IdTX0Mh7HZxRBCg.png",
    title: "Why Developers Should Write More",
    readTime: "7 min read",
    totalWords: 1500,
    updatedTime: "July 12, 2025",
    publications: "Dev Journal",
    status: "pending"
  }
];

const tabs = [
  { label: "Drafts", count: draftsDataSet.length },
  { label: "Scheduled", count: 0 },
  { label: "Published", count: 2 },
  { label: "Unlisted", count: 0 },
  { label: "Submissions", count: 0 },
];


const StoriesPage = () => {
  const [activeTab, setActiveTab] = useState("Drafts");
  const [draftsData, setDraftsData] = useState(false);

  const publishedStories = stories.slice(0, 2);

  return (
    <Layout>
      <div className="flex">
        <div className="flex-1">
          <div className="flex-1 px-16 py-12 mx-auto">
            <div className="flex items-center justify-between mb-10">
              <h1 className="text-[42px] font-bold animate-fade-in">Stories</h1>
              <Link href="/import">
                <Button variant="outline" className="rounded-full text-sm px-5 border-black">Import a story</Button>
              </Link>
            </div>

            {/* Tabs */}
            <div className="flex gap-7 border-b border-divider mb-8">
              {tabs.map((tab) => (
                <button
                  key={tab.label}
                  onClick={() => setActiveTab(tab.label)}
                  className={`pb-4 text-sm cursor-pointer transition-colors relative ${activeTab === tab.label
                    ? "text-black font-medium"
                    : "text-neutral-500 hover:text-black"
                    }`}
                >
                  {tab.label}{tab.count > 0 ? ` ${tab.count}` : ""}
                  {activeTab === tab.label && (
                    <span className="absolute bottom-0 left-0 right-0 h-px bg-black" />
                  )}
                </button>
              ))}
            </div>

            {/* Content */}
            {activeTab === "Drafts" && (
              <div>
                {
                  draftsData ? (
                    <div className="text-center py-20">
                      <p className="font-bold text-sm">No stories in draft.</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Why not <Link href="/write" className="underline">start writing one</Link>?
                      </p>
                    </div>
                  ) : (
                    <div>
                      <table className="w-full block">
                        {/* table head */}
                        <thead className="text-left text-sm font-medium w-full block">
                          <tr className="w-full table">
                            <th className="w-[60%] pr-4 font-light text-neutral-500">Latest</th>
                            <th className="w-[18%] font-light text-neutral-500">Publication</th>
                            <th className="w-[18%] font-light text-neutral-500">Status</th>
                            <th className="w-[10%] font-light text-neutral-500"></th>
                          </tr>
                        </thead>

                        {/* table body */}
                        <tbody className="table w-full">
                          {
                            draftsDataSet.map((data, index) => (
                              <tr key={index}>
                                <td className={`${index === 0 ? "pt-4" : "pt-8"} pb-8 border-b border-divider`}>
                                  <div className="flex gap-4 mr-12 max-w-[643px] w-full">

                                    <Link href="" rel="noopener follow">
                                      <img
                                        alt="hii this"
                                        className="w-20 h-[52px]"
                                        loading="lazy"
                                        src={data.image}
                                      />
                                    </Link>

                                    <div>
                                      <Link href="" rel="noopener follow">
                                        <h2 className="text-base font-bold">{data.title}</h2>
                                      </Link>

                                      <div className="mt-[10px] flex gap-2 text-[#6b6b6b] font-light">
                                        <p>{data.readTime} ({data.totalWords} words)</p>
                                        <span>·</span>
                                        <p>Updated <span>{data.updatedTime}</span></p>
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td className={`pb-8 border-b border-divider ${index === 0 ? "pt-4" : "pt-8"}`}>
                                </td>
                                <td className={`pt-4 pb-8 border-b border-divider ${index === 0 ? "pt-4" : "pt-8"}`}>
                                </td>
                                <td className={`pt-4 pb-8 border-b border-divider ${index === 0 ? "pt-4" : "pt-8"}`}>
                                  <button><MoreHorizontal className="w-5 h-5 text-muted-foreground" /></button>
                                </td>
                              </tr>
                            ))
                          }
                        </tbody>
                      </table>
                      <div>
                      </div>
                    </div>
                  )
                }
              </div>
            )}

            {/* published */}
            {activeTab === "Published" && (
              <div>
                {
                  draftsData ? (
                    <div className="text-center py-20">
                      <p className="font-bold text-sm">No published stories yet.</p>
                      <p className="text-sm text-muted-foreground mt-1">We can't wait to see what you write!</p>
                    </div>
                  ) : (
                    <div>
                      <table className="w-full block">
                        {/* table head */}
                        <thead className="text-left text-sm font-medium w-full block">
                          <tr className="w-full table">
                            <th className="w-[60%] pr-4 font-light text-muted-foreground">Latest</th>
                            <th className="w-[18%] font-light text-muted-foreground">Publication</th>
                            <th className="w-[18%] font-light text-muted-foreground">Status</th>
                            <th className="w-[10%] font-light text-muted-foreground"></th>
                          </tr>
                        </thead>

                        {/* table body */}
                        <tbody className="table w-full">
                          {
                            draftsDataSet.map((data, index) => (
                              <tr key={index}>
                                <td className="pt-4 pb-8">
                                  <div className="flex gap-4 mr-12 max-w-[643px] w-full">

                                    <Link href="" rel="noopener follow">
                                      <img
                                        alt="hii this"
                                        className="w-20 h-[52px]"
                                        loading="lazy"
                                        src={data.image}
                                      />
                                    </Link>

                                    <div>
                                      <Link href="" rel="noopener follow">
                                        <h2 className="text-base font-bold">{data.title}</h2>
                                      </Link>
                                      <div className="mt-[10px] flex gap-2 text-[#6b6b6b] font-light">
                                        <p className="font-light">{data.readTime} ({data.totalWords} words)</p>
                                        <span>·</span>
                                        <p className="font-light">Updated <span>{data.updatedTime}</span></p>
                                      </div>
                                      {/* action button */}
                                      <div className="mt-4 flex items-center gap-4">
                                        {/* like */}
                                        <button className="text-muted-foreground flex items-center text-neutral-500">
                                          <ThumbsUp className="w-4 h-4 inline-block mr-1 fill-neutral-500" />
                                          12
                                        </button>

                                        {/* comment */}
                                        <button className="text-muted-foreground flex items-center text-neutral-500">
                                          <MessageCircle className="w-4 h-4 inline-block mr-1 fill-neutral-500" />
                                          0
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td className="pt-4 pb-8">
                                </td>
                                <td className="pt-4 pb-8">
                                </td>
                                <td className="pt-4 pb-8">
                                  <button><MoreHorizontal className="w-5 h-5 text-muted-foreground" /></button>
                                </td>
                              </tr>
                            ))
                          }
                        </tbody>
                      </table>
                      <div>
                      </div>
                    </div>
                  )
                }
              </div>
            )}

            {/* unlisted */}
            {activeTab !== "Drafts" && activeTab !== "Published" && (
              <div className="text-center py-10">
                <p className="text-base">No {activeTab.toLowerCase()} stories.</p>
              </div>
            )}
          </div>
        </div>

      </div>
    </Layout>
  );
};

export default StoriesPage;
