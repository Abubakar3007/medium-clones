import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { topics, authors,formatNumber } from "@/app/lib/mock-data";
import Link from 'next/link';
import FollowLayout from "@/components/FollowLayout";

const suggestedAuthors = authors.slice(0, 3);
const page = () => {
  return (
    <FollowLayout>
      {/* writers to follow */}
      <section className="mb-12 pb-10 border-b-2 border-gray-200/60">
        <h2 className="text-lg font-bold mb-8">Writers to follow</h2>
        <div className="space-y-6 mb-6">
          {suggestedAuthors.map((author) => (
            <div key={author.id} className="flex items-start gap-6">
              <Avatar className="h-12 w-12">
                <AvatarImage src={author.avatar} />
                <AvatarFallback>{author.name[0]}</AvatarFallback>
              </Avatar>

              <div className="flex-1 min-w-0">
                <Link href={`/profile/${author.id}`} className="text-sm font-medium hover:underline">
                  <h3 className="text-base font-bold">{author.name}</h3>
                </Link>
                <p className="text-sm text-neutral-500 line-clamp-2 mt-1 w-[80%]">{author.bio}</p>
              </div>
              <button className="flex-shrink-0 rounded-full border border-black px-4 py-2 text-sm font-medium hover:bg-foreground hover:text-background transition-colors">
                Follow
              </button>
            </div>
          ))}
        </div>
        <Link href="/following/suggestions" className="text-sm font-medium hover:underline text-neutral-500">See more suggestions</Link>
      </section>

      {/* publications to follow */}
      <section className="mb-12 pb-10 border-b-2 border-gray-200/60">
        <h2 className="text-lg font-bold mb-8">Publications to follow</h2>
        <div className="space-y-6 mb-6">
          {suggestedAuthors.map((author) => (
            <div key={author.id} className="flex items-start gap-6">
              <Avatar className="h-12 w-12 bg-gray-100/80 rounded-[2px] overflow-hidden">
                <AvatarImage src={author.avatar} />
                <AvatarFallback>{author.name[0]}</AvatarFallback>
              </Avatar>

              <div className="flex-1 min-w-0">
                <Link href={`/profile/${author.id}`} className="text-sm font-medium hover:underline">
                  <h3 className="text-base font-bold">{author.name}</h3>
                </Link>
                <p className="text-sm text-neutral-500 line-clamp-2 mt-1 w-[80%]">{author.bio}</p>
              </div>
              <button className="flex-shrink-0 rounded-full border border-black px-4 py-2 text-sm font-medium hover:bg-foreground hover:text-background transition-colors">
                Follow
              </button>
            </div>
          ))}
        </div>
        <Link href="/following/suggestions" className="text-sm font-medium hover:underline text-neutral-500">See more suggestions</Link>
      </section>

      {/* reading history */}
      <section className="mb-12 pb-10 border-b-2 border-gray-200/60">
        <h2 className="text-lg font-bold mb-8">Topics to follow</h2>
        <div className="space-y-6 mb-6">
          {topics.map((topic) => (
            <div key={topic.id} className="flex items-center gap-6 justify-between">
              <div className="flex gap-6">
                <div className="h-12 w-12 rounded-full bg-gray-100/80 grid place-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
                    <path fill="currentColor" fillRule="evenodd" d="M3 14V2h10v12zM2.75 1a.75.75 0 0 0-.75.75v12.5c0 .414.336.75.75.75h10.5a.75.75 0 0 0 .75-.75V1.75a.75.75 0 0 0-.75-.75zM5 10.5a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zM4.5 9a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5m1.25-2.5h4.5a.25.25 0 0 0 .25-.25v-1.5a.25.25 0 0 0-.25-.25h-4.5a.25.25 0 0 0-.25.25v1.5c0 .138.112.25.25.25" clipRule="evenodd"></path>
                  </svg>
                </div>

                <div className="flex-1">
                  <Link href={`/profile/${topic.id}`} className="text-sm font-medium hover:underline">
                    <h3 className="text-base font-bold mb-1">{topic.name}</h3>
                  </Link>
                  <div className="flex flex-wrap md:gap-2 gap-1 text-sm text-neutral-500">
                    <span>{formatNumber(topic.stories)} stories</span>
                    <span className="md:block hidden">.</span>
                    <span>{formatNumber(topic.followers)} followers</span>
                  </div>
                </div>
              </div>
              <button className="flex-shrink-0 rounded-full border border-black px-4 py-2 text-sm font-medium hover:bg-foreground hover:text-background transition-colors">
                Follow
              </button>
            </div>
          ))}
        </div>
        <Link href="/following/suggestions" className="text-sm font-medium hover:underline text-neutral-500">See more suggestions</Link>
      </section>
    </FollowLayout>
  )
}

export default page