
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, ThumbsUp, Bookmark, MoreHorizontal } from "lucide-react";
import { formatDate, formatNumber, Story } from "@/app/lib/mock-data";
const ArticleCard = ({ story }: { story: Story }) => {
    return (
        <article className="group pb-14">
            <Link href="to={`/story/${story.id}`}" className="bg-secondary/40 rounded aspect-[20/10] mb-6 flex items-center justify-center overflow-hidden">
                {story.image ? <img src={story.image} alt="" className="w-full h-full object-cover" /> : <div className="text-muted-foreground/30 text-4xl font-serif">{story.title[0]}</div>}
            </Link>

            <div className="flex items-center gap-2 mb-4">
                <Avatar className="h-5 w-5">
                    <AvatarImage src={story.author.avatar} />
                    <AvatarFallback>{story.author.name[0]}</AvatarFallback>
                </Avatar>

                <Link href={`/profile/${story.author.id}`} className="text-xs font-medium hover:underline">
                    {story.author.name}
                </Link>
            </div>

            <Link href={`/story/${story.id}`}>
                <h3 className="font-bold text-xl mb-2 group-hover:underline decoration-1">
                    {story.title}
                </h3>
                <p className="text-base text-muted-foreground line-clamp-2">{story.subtitle}</p>
            </Link>

            <div className="flex items-center justify-between mt-3">
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    {story.isMemberOnly && <Star className="h-3 w-3 fill-current text-banner-foreground" />}
                    <span className="text-[13px]">{formatDate(story.publishedAt)}</span>

                    <button className="flex items-center gap-1 text-[13px]">
                        <ThumbsUp className="h-4 w-4" /> {formatNumber(story.claps)}
                    </button>
                </div>
                <div className="flex items-center">
                    <button className="p-3">
                        <Bookmark className="h-5 w-5 text-muted-foreground hover:stroke-black transition-colors" />
                    </button>

                    <button className="p-3">
                        <MoreHorizontal className="h-5 w-5 text-muted-foreground hover:stroke-black transition-colors" />
                    </button>
                </div>
            </div>
        </article>
    )
}

export default ArticleCard