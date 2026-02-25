"use client";

import {
  Bookmark,
  MoreHorizontal,
  MessageCircle,
  ThumbsDown,
} from "lucide-react";
import { Story, formatDate } from "@/app/lib/mock-data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState, useRef } from "react";
import Link from "next/link";
import MoreDropdown from "./MoreDropdown";

interface StoryCardProps {
  story: Story;
  featured?: boolean;
}

export function StoryCard({ story }: StoryCardProps) {
  const [bookmarked, setBookmarked] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // ✅ Single ref (no array, no index)
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  return (
    <article className="animate-fade-in border-b border-divider pb-8 mb-8">
      {/* Author */}
      <div className="flex items-center gap-2 mb-4">
        <Avatar className="h-5 w-5">
          <AvatarImage src={story.author.avatar} />
          <AvatarFallback>
            {story.author.name[0]}
          </AvatarFallback>
        </Avatar>

        <Link
          href={`/profile/${story.author.id}`}
          className="font-medium hover:underline"
        >
          {story.author.name}
        </Link>
      </div>

      <div className="flex md:gap-9 gap-6">
        {/* Content */}
        <div className="md:flex-1 md:min-w-0">
          <div className="md:block flex gap-6">
            {/* Title + Subtitle */}
            <Link href={`/stories/${story.id}`}>
              <h2 className="md:text-2xl text-lg font-bold mb-2">
                {story.title}
              </h2>

              <p className="text-neutral-500 line-clamp-2 font-light sm:text-base">
                {story.subtitle}
              </p>
            </Link>

            {/* Mobile Image */}
            {story.image && (
              <Link
                href={`/stories/${story.id}`}
                className="flex-shrink-0 md:hidden"
              >
                <img
                  src={story.image}
                  alt={story.title}
                  className="h-14 w-20 object-cover"
                />
              </Link>
            )}
          </div>

          {/* Actions */}
          <div className="mt-6 flex items-center justify-between">
            {/* Left Side */}
            <div className="flex items-center gap-4 text-[13px] text-muted-foreground">
              <span className="text-neutral-500">
                {formatDate(story.publishedAt)}
              </span>

              <button className="text-neutral-500 md:flex hidden items-center">
                <span className="mr-1">👏</span>
                {story.claps}
              </button>

              <button className="text-neutral-500 md:flex hidden items-center">
                <MessageCircle className="w-4 h-4 inline-block mr-1 fill-muted-foreground" />
                {story.comments}
              </button>
            </div>

            {/* Right Side Buttons */}
            <div className="flex gap-6 items-center">
              <button className="group" title="Dislike">
                <ThumbsDown className="stroke-1 text-muted-foreground group-hover:text-black" />
              </button>

              <button
                className="group"
                title="Save"
                onClick={() => setBookmarked((prev) => !prev)}
              >
                <Bookmark
                  className={`stroke-1 group-hover:text-black ${bookmarked ? "fill-black" : "text-muted-foreground"
                    }`}
                />
              </button>

              {/* ✅ Dropdown */}
              <div className="relative">
                <button
                  className="group"
                  ref={buttonRef}
                  onClick={() =>
                    setDropdownOpen((prev) => !prev)
                  }
                >
                  <MoreHorizontal className="text-muted-foreground group-hover:text-black" />
                </button>

                {dropdownOpen && buttonRef.current && (
                  <MoreDropdown
                    setShowDropdown={() =>
                      setDropdownOpen(false)
                    }
                    buttonRef={buttonRef.current}
                  />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Image */}
        {story.image && (
          <Link
            href={`/stories/${story.id}`}
            className="flex-shrink-0 md:block hidden"
          >
            <img
              src={story.image}
              alt={story.title}
              className="h-[107px] w-[160px] object-cover"
            />
          </Link>
        )}
      </div>
    </article>
  );
}