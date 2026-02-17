import { Layout } from "@/components/Layout";
import { StoryCard } from "@/components/StoryCard";
import { stories, authors, topics } from "@/app/lib/mock-data";
import { useState } from "react";
import { Search as SearchIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from 'next/link'
const searchTabs = ["Stories", "People", "Topics"];

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [activeTab, setActiveTab] = useState("Stories");

  const filteredStories = stories.filter((s) =>
    s.title.toLowerCase().includes(query.toLowerCase()) || s.subtitle.toLowerCase().includes(query.toLowerCase())
  );
  const filteredAuthors = authors.filter((a) =>
    a.name.toLowerCase().includes(query.toLowerCase())
  );
  const filteredTopics = topics.filter((t) =>
    t.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Layout>
      <div className="mx-auto max-w-[728px] px-6 py-10">
        {/* Search input */}
        <div className="relative mb-8 animate-fade-in">
          <SearchIcon className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Medium"
            autoFocus
            className="w-full h-12 rounded-full bg-secondary pl-12 pr-6 text-base outline-none placeholder:text-muted-foreground focus:ring-1 focus:ring-foreground/20"
          />
        </div>

        {/* Tabs */}
        <nav className="flex items-center gap-6 border-b border-divider mb-8">
          {searchTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 text-sm transition-colors relative ${
                activeTab === tab ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab}
              {activeTab === tab && <span className="absolute bottom-0 left-0 right-0 h-px bg-foreground" />}
            </button>
          ))}
        </nav>

        {/* Results */}
        {activeTab === "Stories" && (
          <div>
            {filteredStories.map((story) => (
              <StoryCard key={story.id} story={story} />
            ))}
            {filteredStories.length === 0 && (
              <p className="text-center text-muted-foreground py-10">No stories found.</p>
            )}
          </div>
        )}

        {activeTab === "People" && (
          <div className="space-y-6">
            {filteredAuthors.map((author) => (
              <div key={author.id} className="flex items-center gap-4 animate-fade-in">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={author.avatar} />
                  <AvatarFallback>{author.name[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <Link href={`/profile/${author.id}`} className="font-medium hover:underline">{author.name}</Link>
                  <p className="text-sm text-muted-foreground line-clamp-2">{author.bio}</p>
                </div>
                <button className="rounded-full border border-foreground px-4 py-1.5 text-sm font-medium hover:bg-foreground hover:text-background transition-colors">
                  Follow
                </button>
              </div>
            ))}
          </div>
        )}

        {activeTab === "Topics" && (
          <div className="flex flex-wrap gap-3">
            {filteredTopics.map((topic) => (
              <Link
                key={topic.id}
                href={`/topic/${topic.slug}`}
                className="rounded-full bg-tag px-5 py-2.5 text-sm text-tag-foreground hover:bg-secondary transition-colors"
              >
                {topic.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default SearchPage;
