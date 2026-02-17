import { stories, formatDate } from "@/app/lib/mock-data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import Link from 'next/link'


export function ReadingListSidebar() {
  const readingList = stories.slice(0, 3);

  return (
    <section>
      <h4 className="text-base font-bold mb-6">Your Reading list</h4>
      <div className="space-y-5">
        {readingList.map((story) => (
          <div key={story.id}>
            <div className="flex items-center gap-2 mb-3">
              <Avatar className="h-5 w-5">
                <AvatarImage src={story.author.avatar} />
                <AvatarFallback>{story.author.name[0]}</AvatarFallback>
              </Avatar>
              <span className="text-xs font-medium">{story.author.name}</span>
            </div>
            <Link
              href={`/story/${story.id}`}
              className="text-base font-semibold hover:underline decoration-1 block"
            >
              {story.title}
            </Link>
            <div className="flex items-center gap-2 mt-3 text-xs text-neutral-500">
              {story.isMemberOnly && <Star className="h-3 w-3 fill-current text-neutral-500" />}
              <span>{formatDate(story.publishedAt)}</span>
            </div>
          </div>
        ))}
      </div>
      <Link href="/me/lists" className="text-sm text-gray-500 hover:underline mt-4 inline-block">
        See all ({readingList.length})
      </Link>
    </section>
  );
}
