"use client";
import { useParams } from "next/navigation";
import { Layout } from "@/components/Layout";
import { StoryCard } from "@/components/StoryCard";
import { topics, stories, formatNumber } from "@/app/lib/mock-data";
import { useState } from "react";
import Link from "next/link";

const TopicPage = () => {
  const { slug } = useParams();
  const topic = topics.find((t) => t.slug === slug) || topics[0];
  const topicStories = stories.filter((s) => s.tags.some((t) => t.toLowerCase() === topic.slug));
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <Layout>
      <div className="mx-auto max-w-[728px] px-6 py-10">
        <div className="text-center mb-10 animate-fade-in">
          <h1 className="text-[42px] font-bold font-serif">{topic.name}</h1>
          <p className="text-muted-foreground mt-2 max-w-md mx-auto">{topic.description}</p>
          <div className="flex items-center justify-center gap-4 mt-4 text-sm text-muted-foreground">
            <span>{formatNumber(topic.followers)} Followers</span>
            <span>·</span>
            <span>{formatNumber(topic.stories)} Stories</span>
          </div>
          <button
            onClick={() => setIsFollowing(!isFollowing)}
            className={`mt-6 rounded-full px-6 py-2 text-sm font-medium transition-colors ${
              isFollowing
                ? "border border-primary text-primary hover:bg-primary/5"
                : "bg-primary text-primary-foreground hover:bg-primary/90"
            }`}
          >
            {isFollowing ? "Following" : "Follow"}
          </button>
        </div>

        <div className="border-t border-divider pt-8">
          {topicStories.length > 0 ? (
            topicStories.map((story) => (
              <StoryCard key={story.id} story={story} />
            ))
          ) : (
            <p className="text-center text-muted-foreground py-10">No stories found for this topic.</p>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default TopicPage;
