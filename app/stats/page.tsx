"use client";
import { Layout } from "@/components/Layout";
import { useState } from "react";
import { stories, formatDate } from "@/app/lib/mock-data";
import { LeftSidebar } from "@/components/LeftSidebar";
import { Info } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
const months = ["January 2026", "February 2026", "December 2025", "November 2025"];
import Link from 'next/link'
// Mock chart data
const chartData = Array.from(
  {
    length: 10,
  },
  (_, i) => ({
    name: `Feb ${i + 1}`,
    Views: 0,
    Reads: 0,
  }),
);
const mainTabs = ["Stories", "Audience"];
const StatsPage = () => {
  const [activeTab, setActiveTab] = useState("Stories");
  const [selectedMonth, setSelectedMonth] = useState("February 2026");
  const publishedStories = stories.slice(0, 2);
  return (
    <Layout>
      <div className="flex">
        <LeftSidebar />

        <div className="flex-1">
          <div className="px-16 py-12 mx-auto">
            <h1 className="text-[42px] font-bold mb-10 animate-fade-in">Stats</h1>

            {/* Main tabs */}
            <div className="flex gap-6 border-b border-divider mb-8">
              {mainTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-3 text-sm transition-colors relative ${activeTab === tab ? "text-black font-medium" : "text-neutral-500 hover:text-black"}`}
                >
                  {tab}
                  {activeTab === tab && <span className="absolute bottom-0 left-0 right-0 h-px bg-black" />}
                </button>
              ))}
            </div>

            {activeTab === "Stories" && (
              <>
                {/* Monthly section */}
                <div className="mb-10">
                  <div className="flex items-center justify-between mb-3">
                    <h2 className="text-2xl font-bold">Monthly</h2>
                    <select
                      value={selectedMonth}
                      onChange={(e) => setSelectedMonth(e.target.value)}
                      className="border border-divider rounded-3xl max-w-44 w-full px-5 h-[38px] appearance-none py-1.5 text-sm bg-background cursor-pointer"
                    >
                      {months.map((m) => (
                        <option key={m} value={m}>
                          {m}
                        </option>
                      ))}
                    </select>
                  </div>
                  <p className="text-xs text-neutral-500 mb-14">February 1, 2026 – Today (UTC) · Updated hourly</p>

                  {/* Summary stats */}
                  <div className="flex gap-10 mb-16">
                    {[
                      {
                        label: "Presentations",
                        value: 0,
                        hasInfo: true,
                      },
                      {
                        label: "Views",
                        value: 0,
                      },
                      {
                        label: "Reads",
                        value: 0,
                      },
                      {
                        label: "Followers",
                        value: 0,
                      },
                      {
                        label: "Subscribers",
                        value: 0,
                      },
                    ].map((stat) => (
                      <div key={stat.label} className="text-center">
                        <p className="text-[42px] font-black">{stat.value}</p>
                        <p className="text-base flex items-center justify-center gap-1 mt-1">
                          {stat.label}
                          {stat.hasInfo && <Info className="h-3 w-3" />}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Chart */}
                  <div className="h-[320px] mb-4">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={chartData}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis
                          dataKey="name"
                          tick={{
                            fontSize: 12,
                          }}
                          axisLine={false}
                          tickLine={false}
                        />
                        <YAxis
                          tick={{
                            fontSize: 12,
                          }}
                          axisLine={false}
                          tickLine={false}
                          domain={[0, 1]}
                        />
                        <Tooltip />
                        <Legend />
                        <Area
                          type="monotone"
                          dataKey="Views"
                          stroke="hsl(var(--muted-foreground))"
                          fill="transparent"
                          strokeWidth={2}
                          dot={false}
                        />
                        <Area
                          type="monotone"
                          dataKey="Reads"
                          stroke="hsl(var(--primary))"
                          fill="transparent"
                          strokeWidth={2}
                          dot={false}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Separator */}
                <div className="border-t border-divider my-16" />

                {/* Lifetime section */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h2 className="text-2xl font-bold">Lifetime</h2>
                    <select className="border border-divider rounded-3xl px-5 py-1.5 h-9 max-w-40 w-full cursor-pointer text-sm bg-background appearance-none">
                      <option>Latest</option>
                      <option>Oldest</option>
                    </select>
                  </div>
                  <p className="text-xs font-light text-muted-foreground mb-16">February 6, 2026 – Today (UTC) · Updated daily</p>

                  {/* Table */}
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="w-full">
                        <th className="text-left pt-3 pb-14 font-medium text-neutral-500 min-w-full">Story</th>
                        <th className="text-right pt-3 pb-14 font-medium text-neutral-500 flex items-center justify-center gap-1 min-w-[152px]">
                          Presentations <Info className="h-3 w-3" />
                        </th>
                        <th className="text-center pt-3 pb-14 font-medium text-neutral-500 min-w-[104px]">Views</th>
                        <th className="text-right pt-3 pb-14 font-medium text-neutral-500 min-w-[104px]">Reads</th>
                      </tr>
                    </thead>
                    <tbody>
                      {publishedStories.map((story) => (
                        <tr key={story.id}>
                          <td className="py-6">
                            <Link href={`/story/${story.id}`} className="font-bold text-base block">
                              {story.title}
                            </Link>
                            <p className="text-xs text-muted-foreground mt-3">
                              {story.readTime} min read · {formatDate(story.publishedAt)} ·{" "}
                              <Link href={`/story/${story.id}`} className="underline">
                                View story
                              </Link>
                            </p>
                          </td>
                          <td className="py-4 text-center">0</td>
                          <td className="text-center py-4">0</td>
                          <td className="text-right py-4">0</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            )}

            {activeTab === "Audience" && (
              <div>
                <h2 className="text-2xl font-bold mb-3">Lifetime</h2>
                <p className="text-xs font-light text-neutral-500 mb-16">February 6, 2026 – Today (UTC) · Updated daily</p>

                {/* total audience in number */}
                <div className="flex gap-16 my-12">
                  <div>
                    <h3 className="font-black text-[42px] mb-3">0</h3>
                    <div>
                      <p className="text-base leading-6">Followers <Info className="h-3 w-3 inline-block ml-1" /></p>
                      <p className="text-base leading-6"><span>0</span> {" "} from last month</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-black text-[42px] mb-3">0</h3>
                    <div>
                      <p className="text-base leading-6">Email Subscribers <Info className="h-3 w-3 inline-block ml-1" /></p>
                      <p className="text-base leading-6"><span>0</span> {" "} from last month</p>
                    </div>
                  </div>
                </div>
                {/* <p className="text-sm">Audience stats will appear here once you have followers.</p> */}
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default StatsPage;