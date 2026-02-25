"use client";
import { stories, topics, trendingTags, authors } from "@/app/lib/mock-data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TrendingUp } from "lucide-react";
import { ReadingListSidebar } from "@/components/ReadingListSidebar";
import Link from "next/link";

interface FeedSidebarProps {
  sidebarOpen: boolean;
}

export function FeedSidebar({ sidebarOpen }: FeedSidebarProps) {
  const staffPicks = stories.slice(0, 3);
  const recommendedTopics = topics.slice(0, 7);
  const suggestedAuthors = authors.slice(0, 3);

  return (
    <aside className={`hidden [@media(min-width:900px)]:block transition-all ease-in-out duration-300 w-[368px] shrink-0 pl-10 pr-6 border-l border-divider pt-10`}>
      <div className="sticky top-0 gap-10 pb-10 flex flex-col justify-between">
        <div className="space-y-10">

          {/* Staff Picks */}
          <section>
            <h4 className="text-base font-semibold mb-6">
              <Link href="/staff">Staff Picks</Link>
            </h4>
            <div className="space-y-5 mb-4">
              {staffPicks.map((story) => (
                <Link href={`/story/${story.id}`} key={story.id} className="block">
                  <div className="flex items-center gap-2 mb-3">
                    <Avatar className="h-5 w-5">
                      <AvatarImage src={story.author.avatar} />
                      <AvatarFallback>{story.author.name[0]}</AvatarFallback>
                    </Avatar>
                    <span className="text-xs font-medium">{story.author.name}</span>
                  </div>
                  <h3 className="text-base font-bold">
                    {story.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-3">{story.readTime} min read</p>
                </Link>
              ))}
            </div>

            <Link href="/stories" className="text-muted-foreground text-sm hover:underline">See the full list</Link>
          </section>

          {/* Recommended Topics */}
          <section>
            <h4 className="text-base font-semibold mb-6">Recommended topics</h4>
            <div className="flex flex-wrap gap-2 mb-4">
              {recommendedTopics.map((topic) => (
                <Link
                  key={topic.id}
                  href={`/topic/${topic.slug}`}
                  className="rounded-full bg-neutral-100 px-4 py-2 text-sm hover:bg-secondary transition-colors"
                >
                  {topic.name}
                </Link>
              ))}
            </div>

            <Link href="/topic" className="text-muted-foreground text-sm hover:underline">See more topics</Link>
          </section>

          {/* Who to follow */}
          <section>
            <h4 className="text-sm font-semibold mb-6">Who to follow</h4>
            <div className="space-y-4 mb-4">
              {suggestedAuthors.map((author) => (
                <div key={author.id} className="flex items-start gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={author.avatar} />
                    <AvatarFallback>{author.name[0]}</AvatarFallback>
                  </Avatar>

                  <div className="flex-1 min-w-0">
                    <Link href={`/profile/${author.id}`} className="text-sm font-medium hover:underline">
                      <h3 className="text-base font-bold">{author.name}</h3>
                    </Link>

                    <p className="text-xs text-muted-foreground line-clamp-2 mt-1 w-[80%]">{author.bio}</p>
                  </div>
                  <button className="flex-shrink-0 rounded-full border border-black px-4 py-2 text-sm font-medium hover:bg-foreground hover:text-background transition-colors">
                    Follow
                  </button>
                </div>
              ))}
            </div>
            <Link href="/following" className="text-muted-foreground text-sm hover:underline">See more suggestions</Link>
          </section>

          {/* Reading List */}
          <ReadingListSidebar />

          {/* Trending */}
          <section>
            <h4 className="text-base font-semibold mb-6 flex items-center gap-1.5">
              <TrendingUp className="h-4 w-4" /> Trending
            </h4>
            <div className="flex flex-wrap gap-2">
              {trendingTags.map((tag) => (
                <Link key={tag} href={`/tag/${tag.toLowerCase()}`} className="rounded-full bg-neutral-100 px-3 py-1.5 text-xs text-muted-foreground hover:bg-secondary transition-colors">
                  {tag}
                </Link>
              ))}
            </div>
          </section>
        </div>

        {/* Footer links */}
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground pt-4">
          <a href="#" className="hover:text-foreground">Help</a>
          <a href="#" className="hover:text-foreground">Status</a>
          <a href="#" className="hover:text-foreground">About</a>
          <a href="#" className="hover:text-foreground">Careers</a>
          <a href="#" className="hover:text-foreground">Privacy</a>
          <a href="#" className="hover:text-foreground">Terms</a>
        </div>
      </div>
    </aside>
  );
}
