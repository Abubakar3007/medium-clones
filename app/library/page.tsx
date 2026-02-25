"use client";
import { useState, useRef } from "react";
import { stories, authors } from "@/app/lib/mock-data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Lock, MoreHorizontal } from "lucide-react";
import Link from "next/link";
import MoreDropdown from "@/components/MoreDropdown";
import LibraryLayout from "@/components/LibraryLayout";

const mockLists = [{
  id: "1",
  name: "Reading list",
  count: 3,
  isPrivate: true,
  author: authors[0],
  stories: stories.slice(0, 3)
}, {
  id: "2",
  name: "My list",
  count: 2,
  isPrivate: false,
  author: authors[0],
  stories: stories.slice(1, 3)
}];

const ReadingListPage = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const [dropdown, setDropdown] = useState<number | null>(null);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const toggleDropdown = (index: number) => {
    setDropdown((prev) => (prev === index ? null : index));
  };

  return (
    <LibraryLayout>
      <div className="space-y-10">
        {mockLists.map((list, index) => (
          <div
            key={list.id}
            className="border border-divider rounded flex sm:items-center sm:flex-row flex-col bg-neutral-100/50 hover:bg-neutral-100/80 transition-colors justify-between"
          >
            {/* Content */}
            <div className="flex-1 min-w-0 p-5">
              <Link href={`/list/${list.id}`} className="flex items-center gap-2 mb-3">
                <Avatar className="h-5 w-5">
                  <AvatarImage src={list.author.avatar} />
                  <AvatarFallback>{list.author.name[0]}</AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium">{list.author.name}</span>
              </Link>

              <Link href={`/list/${list.id}`}>
                <h3 className="font-black text-xl mb-3">{list.name}</h3>
              </Link>

              <div className="flex justify-between gap-2 items-center">
                <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                  <span className="text-neutral-500">{list.count} stories</span>
                  {list.isPrivate && <Lock className="h-3 w-3" />}
                </div>

                {/* Dropdown */}
                <div className="relative">
                  <button
                    ref={(el) => {
                      buttonRefs.current[index] = el;
                    }}
                    onClick={() => toggleDropdown(index)}
                  >
                    <MoreHorizontal className="h-4 w-4" />
                  </button>

                  {dropdown === index && buttonRefs.current[index] && (
                    <MoreDropdown
                      setShowDropdown={() => setDropdown(null)}
                      buttonRef={buttonRefs.current[index]!}
                    />
                  )}
                </div>
              </div>
            </div>

            {/* Images */}
            <Link
              href={`/list/${list.id}`}
              className="gap-0.5 md:w-[294px] sm:w-[166px] w-full flex items-end justify-end relative"
            >
              {list.stories.slice(0, 3).map((story, i) => {
                const imageWidth = Math.floor(100 / (i + 1));
                return (
                  <div key={story.id} style={{ width: `${imageWidth}%` }}>
                    <img
                      src={
                        story.coverImage ||
                        `https://picsum.photos/seed/${story.id}/120/120`
                      }
                      alt=""
                      className="w-full sm:h-[140px] h-[105px] object-cover"
                    />
                  </div>
                );
              })}
            </Link>
          </div>
        ))}
      </div>
    </LibraryLayout>
  );
};

export default ReadingListPage;