"use client";

import { useState } from "react";
import { Layout } from "@/components/Layout";
import { StoryCard } from "@/components/StoryCard";
import { stories } from "@/app/lib/mock-data";

const tabs = ["For you", "Following", "Trending", "Technology", "Design", "Programming"];

const Index = () => {
  const [activeTab, setActiveTab] = useState("For you");

  return (
    <Layout>
      <div className="mx-auto flex">
        {/* Main Feed */}
        <div className="flex-1">
          <div className="max-w-[680px] pt-12 mx-auto">
            <nav className="flex items-center gap-8 border-b border-divider mb-10 overflow-x-auto sticky top-0 bg-background">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`whitespace-nowrap pb-5 text-sm transition-colors relative ${
                    activeTab === tab ? "text-black" : "text-neutral-500"
                  }`}
                >
                  {tab}
                  {activeTab === tab && (
                    <span className="absolute bottom-0 left-0 right-0 h-px bg-black" />
                  )}
                </button>
              ))}
            </nav>

            <div>
              {stories.map((story, i) => (
                <StoryCard key={story.id} story={story} featured={i === 0} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
