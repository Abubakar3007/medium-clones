"use client";
import { Bookmark, MoreHorizontal, MessageCircle, ThumbsDown } from "lucide-react";
import { Story, formatDate } from "@/app/lib/mock-data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";
import { MoreAboutAuthorModel } from "./MoreAboutAuthorModel";
import Link from 'next/link';

interface StoryCardProps {
  story: Story;
  featured?: boolean;
}

export function StoryCard({ story, featured }: StoryCardProps) {
  const [bookmarked, setBookmarked] = useState(false);
  const [showMore, setShowMore] = useState(false);

  if (featured) {
    return (
      <article className="animate-fade-in border-b border-divider pb-8 mb-8">
        <div className="flex items-center justify-between gap-2 mb-4">
          {/* user name and profile */}
          <div className="flex items-center gap-2">
            <Avatar className="h-5 w-5">
              <AvatarImage src={story.author.avatar} />
              <AvatarFallback>{story.author.name[0]}</AvatarFallback>
            </Avatar>
            <Link href={`/profile/${story.author.id}`} className="font-medium hover:underline">
              {story.author.name}
            </Link>
          </div>

          {/* actions */}
          <div className="flex gap-4 items-center">
            <p className="text-xs text-gray-600">Member only</p>
            <button onClick={() => setShowMore(true)}>
              <MoreHorizontal className="h-4 w-4 text-muted-foreground transition-colors hover:stroke-black" />
            </button>
          </div>
        </div>

        {
          showMore && <MoreAboutAuthorModel />
        }

        <div className="flex gap-9">
          {/* story content */}
          <div className="flex-1 min-w-0">
            {/* title and subtitle */}
            <Link href={`/story/${story.id}`}>
              {/* title */}
              <h2 className="text-2xl font-bold mb-2 decoration-1">
                {story.title}
              </h2>
              {/* subtitle */}
              <p className="text-neutral-500 line-clamp-2 font-light text-base">
                {story.subtitle}
              </p>
            </Link>

            {/* action */}
            <div className="mt-6 flex items-center justify-between">
              {/* buttons */}
              <div className="flex gap-2">
                {/*bookmarked  */}
                <button className="border group w-9 h-9 grid place-items-center border-gray-300/60 rounded-full" title="Save" onClick={() => setBookmarked(!bookmarked)}>
                  <Bookmark className={`h-4 text-[#6b6b6b] group-hover:text-black w-4 ${bookmarked ? "fill-foreground" : ""}`} />
                </button>
                {/* comment */}
                <button className="border group w-9 h-9 grid place-items-center border-gray-300/60 rounded-full" title="Dislike">
                  <ThumbsDown className="h-4 w-4 inline-block text-[#6b6b6b] group-hover:text-black" />
                </button>
              </div>

              {/* more action */}
              <div className="flex items-center gap-4 text-[13px] text-muted-foreground">
                {/* publish time */}
                <span className="text-neutral-500">{formatDate(story.publishedAt)}</span>

                {/* total clap */}
                <button className="text-neutral-500 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" aria-labelledby="clap-filled-static-desc" viewBox="0 0 16 16" className="inline-block mr-1">
                    <desc id="clap-filled-static-desc">A clap icon</desc><path fill="#6B6B6B" fillRule="evenodd" d="m3.672 10.167 2.138 2.14h-.002c1.726 1.722 4.337 2.436 5.96.81 1.472-1.45 1.806-3.68.76-5.388l-1.815-3.484c-.353-.524-.849-1.22-1.337-.958-.49.261 0 1.56 0 1.56l.78 1.932L6.43 2.866c-.837-.958-1.467-1.108-1.928-.647-.33.33-.266.856.477 1.598.501.503 1.888 1.957 1.888 1.957.17.174.083.485-.093.655a.56.56 0 0 1-.34.163.43.43 0 0 1-.317-.135s-2.4-2.469-2.803-2.87c-.344-.346-.803-.54-1.194-.15-.408.406-.273 1.065.11 1.447.345.346 2.31 2.297 2.685 2.67l.062.06c.17.175.269.628.093.8-.193.188-.453.33-.678.273a.9.9 0 0 1-.446-.273S2.501 6.84 1.892 6.23c-.407-.406-.899-.333-1.229 0-.525.524.263 1.28 1.73 2.691.384.368.814.781 1.279 1.246m8.472-7.219c.372-.29.95-.28 1.303.244V3.19l1.563 3.006.036.074c.885 1.87.346 4.093-.512 5.159l-.035.044c-.211.264-.344.43-.74.61 1.382-1.855.963-3.478-.248-5.456L11.943 3.88l-.002-.037c-.017-.3-.039-.71.203-.895" clipRule="evenodd"></path></svg>
                  {story.claps}
                </button>

                {/* total comment */}
                <button className="text-neutral-500 flex items-center">
                  <MessageCircle className="w-4 h-4 inline-block mr-1 fill-neutral-500" />
                  {story.comments}
                </button>
              </div>
            </div>
          </div>

          {/* story image */}
          {story.image && (
            <Link href={`/story/${story.id}`} className="hidden sm:block flex-shrink-0">
              <img src={story.image} alt="" className="h-[107px] w-[160px] object-cover" />
            </Link>
          )}
        </div>
      </article>
    );
  }

  return (
    <article className="animate-fade-in border-b border-divider pb-8 mb-8">
      <div className="flex items-center justify-between gap-2 mb-4">
        {/* user name and profile */}
        <div className="flex items-center gap-2">
          <Avatar className="h-5 w-5">
            <AvatarImage src={story.author.avatar} />
            <AvatarFallback>{story.author.name[0]}</AvatarFallback>
          </Avatar>
          <Link href={`/profile/${story.author.id}`} className="font-medium hover:underline">
            {story.author.name}
          </Link>
        </div>

        {/* actions */}
        <div className="flex gap-4 items-center">
          <p className="text-xs text-gray-600">
            Member only
          </p>
          <button onClick={() => setShowMore(true)}>
            <MoreHorizontal className="h-4 w-4 text-muted-foreground transition-colors hover:stroke-black" />
          </button>
        </div>
      </div>

      {
        showMore && <MoreAboutAuthorModel />
      }

      <div className="flex gap-9">
        {/* story content */}
        <div className="flex-1 min-w-0">
          {/* title and subtitle */}
          <Link href={`/story/${story.id}`}>
            {/* title */}
            <h2 className="text-2xl font-bold mb-2 decoration-1">
              {story.title}
            </h2>
            {/* subtitle */}
            <p className="text-neutral-500 line-clamp-2 font-light text-base">
              {story.subtitle}
            </p>
          </Link>

          {/* action */}
          <div className="mt-6 flex items-center justify-between">
            {/* buttons */}
            <div className="flex gap-2">
              {/*bookmarked  */}
              <button className="border group w-9 h-9 grid place-items-center border-gray-300/60 rounded-full" title="Save" onClick={() => setBookmarked(!bookmarked)}>
                <Bookmark className={`h-4 text-[#6b6b6b] group-hover:text-black w-4 ${bookmarked ? "fill-foreground" : ""}`} />
              </button>
              {/* comment */}
              <button className="border group w-9 h-9 grid place-items-center border-gray-300/60 rounded-full" title="Dislike">
                <ThumbsDown className="h-4 w-4 inline-block text-[#6b6b6b] group-hover:text-black" />
              </button>
            </div>

            {/* more action */}
            <div className="flex items-center gap-4 text-[13px] text-[#6b6b6b]">
              {/* publish time */}
              <span>{formatDate(story.publishedAt)}</span>

              {/* total clap */}
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" aria-labelledby="clap-filled-static-desc" viewBox="0 0 16 16" className="inline-block mr-1"><desc id="clap-filled-static-desc">A clap icon</desc><path fill="#6B6B6B" fillRule="evenodd" d="m3.672 10.167 2.138 2.14h-.002c1.726 1.722 4.337 2.436 5.96.81 1.472-1.45 1.806-3.68.76-5.388l-1.815-3.484c-.353-.524-.849-1.22-1.337-.958-.49.261 0 1.56 0 1.56l.78 1.932L6.43 2.866c-.837-.958-1.467-1.108-1.928-.647-.33.33-.266.856.477 1.598.501.503 1.888 1.957 1.888 1.957.17.174.083.485-.093.655a.56.56 0 0 1-.34.163.43.43 0 0 1-.317-.135s-2.4-2.469-2.803-2.87c-.344-.346-.803-.54-1.194-.15-.408.406-.273 1.065.11 1.447.345.346 2.31 2.297 2.685 2.67l.062.06c.17.175.269.628.093.8-.193.188-.453.33-.678.273a.9.9 0 0 1-.446-.273S2.501 6.84 1.892 6.23c-.407-.406-.899-.333-1.229 0-.525.524.263 1.28 1.73 2.691.384.368.814.781 1.279 1.246m8.472-7.219c.372-.29.95-.28 1.303.244V3.19l1.563 3.006.036.074c.885 1.87.346 4.093-.512 5.159l-.035.044c-.211.264-.344.43-.74.61 1.382-1.855.963-3.478-.248-5.456L11.943 3.88l-.002-.037c-.017-.3-.039-.71.203-.895" clipRule="evenodd"></path></svg>
                {story.claps}
              </button>

              {/* total comment */}
              <button>
                <MessageCircle className="w-4 h-4 inline-block mr-1 fill-[#6b6b6b]" />
                {story.comments}
              </button>
            </div>
          </div>
        </div>

        {/* story image */}
        {story.image && (
          <Link href={`/story/${story.id}`} className="hidden sm:block flex-shrink-0">
            <img src={story.image} alt="" className="h-[107px] w-[160px] object-cover" />
          </Link>
        )}
      </div>
    </article>
  );
}
