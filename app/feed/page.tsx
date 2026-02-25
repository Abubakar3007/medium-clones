"use client";
import { useState } from "react";
import { Layout } from "@/components/Layout";
import { StoryCard } from "@/components/StoryCard";
import { stories } from "@/app/lib/mock-data";

const tabs = ["For you", "Featured"];

const Index = () => {
  const [activeTab, setActiveTab] = useState("For you");

  return (
    <Layout>
      <div className="max-w-[680px] md:pt-12 pt-6 mx-auto xl:px-0">
        <nav className="flex items-center gap-8 border-b border-divider mb-10 overflow-x-scroll w-full md:px-0 px-6 md:pt-0 pt-4 bg-white sticky top-0 z-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`whitespace-nowrap md:pb-5 pb-3 text-sm transition-colors relative ${activeTab === tab ? "text-black" : "text-neutral-500"
                }`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute bottom-0 left-0 right-0 h-px bg-black" />
              )}
            </button>
          ))}
        </nav>

        <div className="md:px-0 px-6">
          {stories.map((story, i) => (
            <StoryCard key={story.id} story={story} featured={i === 0} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Index;
