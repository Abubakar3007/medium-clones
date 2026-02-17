"use client";
import { useParams } from "next/navigation";
import { Layout } from "@/components/Layout";
import { stories, formatDate, formatNumber } from "@/app/lib/mock-data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bookmark, MessageCircle, Share, ThumbsUp, MoreHorizontal, CirclePlay } from "lucide-react";
import { useState } from "react";
import { ResponsesSection } from "@/components/ResponsesSection";
import { ResponsesPanel } from "@/components/ResponsesPanel";
import { MoreFromAuthor } from "@/components/MoreFromAuthor";
import { LeftSidebar } from "@/components/LeftSidebar";
import Link from 'next/link';

const StoryPage = () => {
  const { id } = useParams();
  const story = stories.find((s) => s.id === id) || stories[0];
  const [claps, setClaps] = useState(story.claps);
  const [bookmarked, setBookmarked] = useState(false);
  const [panelOpen, setPanelOpen] = useState(false);

  return (
    <Layout>
      <div className="flex items-start">
        <LeftSidebar />

        {/* article */}
        <div className="flex-1">
          <article className="mx-auto max-w-[680px] py-10">
            <h1 className="text-[32px] sm:text-[42px] font-bold font-serif leading-[1.15] mb-4 animate-fade-in">
              {story.title}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 animate-fade-in" style={{ animationDelay: "0.05s" }}>
              {story.subtitle}
            </p>

            {/* Author info */}
            <div className="flex items-center gap-4 mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              {/* Avatar */}
              <Avatar className="h-11 w-11">
                <AvatarImage src={story.author.avatar} />
                <AvatarFallback>{story.author.name[0]}</AvatarFallback>
              </Avatar>
              {/* Author name and follow button */}
              <Link href={`/profile/${story.author.id}`} className="text-sm font-medium hover:underline">
                {story.author.name}
              </Link>
              {/* Follow button */}
              <button className="text-sm font-semibold border border-foreground/20 rounded-3xl py-1.5 px-3">Follow</button>
              {/* Read time */}
              <span className="text-sm text-muted-foreground">{story.readTime} min read</span>
              {/* Published date */}
              <span className="text-sm text-muted-foreground">{formatDate(story.publishedAt)}</span>
            </div>

            {/* Action bar */}
            <ActionBar claps={claps} setClaps={setClaps} bookmarked={bookmarked} setBookmarked={setBookmarked} comments={story.comments} />

            {/* Content */}
            <div className="prose-custom animate-fade-in" style={{ animationDelay: "0.15s" }}>
              {story.content.split("\n\n").map((para, i) => {
                if (para.startsWith("## ")) {
                  return <h2 key={i} className="text-2xl font-bold font-serif mt-10 mb-4">{para.replace("## ", "")}</h2>;
                }
                if (para.startsWith("> ")) {
                  return (
                    <blockquote key={i} className="border-l-[3px] border-foreground pl-5 my-8 italic text-lg leading-relaxed font-serif text-muted-foreground">
                      {para.replace("> ", "").replace(/"/g, "")}
                    </blockquote>
                  );
                }
                if (para.startsWith("1. ")) {
                  const items = para.split("\n").map((line) => line.replace(/^\d+\.\s/, ""));
                  return (
                    <ol key={i} className="list-decimal pl-6 space-y-2 my-6">
                      {items.map((item, j) => (
                        <li key={j} className="text-lg leading-relaxed font-serif" dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }} />
                      ))}
                    </ol>
                  );
                }
                return <p key={i} className="text-lg leading-[1.8] font-serif mb-6" dangerouslySetInnerHTML={{ __html: para.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }} />;
              })}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-12 mb-8">
              {story.tags.map((tag) => (
                <Link key={tag} href={`/tag/${tag.toLowerCase()}`} className="rounded-full bg-tag px-4 py-2 text-sm text-tag-foreground hover:bg-secondary transition-colors">
                  {tag}
                </Link>
              ))}
            </div>

            {/* Bottom action bar */}
            <ActionBar claps={claps} setClaps={setClaps} bookmarked={bookmarked} setBookmarked={setBookmarked} comments={story.comments} border="top" />

            {/* Author card */}
            <div className="border-t border-divider mt-10 pt-10">
              <div className="flex items-start gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={story.author.avatar} />
                  <AvatarFallback>{story.author.name[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-semibold">
                        <Link href={`/profile/${story.author.id}`} className="hover:underline">{story.author.name}</Link>
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">{formatNumber(story.author.followers)} Followers</p>
                    </div>
                    <button className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">Follow</button>
                  </div>
                  <p className="text-muted-foreground mt-3">{story.author.bio}</p>
                </div>
              </div>
            </div>
          </article>

          <div className="pt-16 pb-20 border-t border-gray-200">
            <div className="max-w-[680px] mx-auto">
              {/* Responses section */}
              <ResponsesSection commentCount={story.comments} onOpenPanel={() => setPanelOpen(true)} />
            </div>
          </div>

          <div className="bg-[#f7f7f7cc] py-20">
            {/* More from author + recommended */}
            <MoreFromAuthor author={story.author} currentStoryId={story.id} />
          </div>
        </div>
      </div>
      {/* Full-page responses panel */}
      <ResponsesPanel open={panelOpen} onClose={() => setPanelOpen(false)} commentCount={story.comments} />
    </Layout>
  );
};

function ActionBar({ claps, setClaps, bookmarked, setBookmarked, comments, border = "both" }: {
  claps: number; setClaps: (fn: (c: number) => number) => void;
  bookmarked: boolean; setBookmarked: (b: boolean) => void;
  comments: number; border?: "both" | "top";
}) {
  return (
    <div className={`flex items-center justify-between py-4 px-2 mb-10 ${border === "both" ? "border-y" : "border-t"} border-divider`}>
      {/* left side */}
      <div className="flex items-center gap-4">
        {/* like */}
        <button onClick={() => setClaps((c) => c + 1)} className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors">
          <ThumbsUp className="h-5 w-5" />
          <span className="text-sm">{formatNumber(claps)}</span>
        </button>

        {/* comments */}
        <button className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors">
          <MessageCircle className="h-5 w-5" />
          <span className="text-sm">{comments}</span>
        </button>
      </div>
      {/* right side */}
      <div className="flex items-center gap-7">
        {/* bookmark */}
        <button onClick={() => setBookmarked(!bookmarked)}>
          <Bookmark className={`h-5 w-5 ${bookmarked ? "fill-foreground text-foreground" : "text-muted-foreground"}`} />
        </button>
        {/* play */}
        <button>
          <CirclePlay className="h-5 w-5 text-muted-foreground hover:text-foreground" />
        </button>
        {/* share */}
        <button>
          <Share className="h-5 w-5 hover:text-foreground" />
        </button>
        {/* more */}
        <button>
          <MoreHorizontal className="h-5 w-5 text-muted-foreground hover:text-foreground" />
        </button>
      </div>
    </div>
  );
}

export default StoryPage;