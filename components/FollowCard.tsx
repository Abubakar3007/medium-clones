import { Button } from "./ui/button"
import Link from 'next/link';
import { Author } from "@/app/lib/mock-data";

interface FollowCardProps {
  author: Author;
}

const FollowCard = ({ author }: FollowCardProps) => {
    return (
        <div className="border border-input/10 p-6 rounded-[4px] max-w-[220px] shrink-0">
            <div className="m">
                <Link href={`/author/${author.id ?? ""}`}>
                    <img alt="Nov Tech" className="w-16 h-16 rounded-full" loading="lazy" src={author.avatar} />
                </Link>

                <h2 className="text-base line-clamp-2 text-ellipsis mt-3 mb-1">
                    <Link href={`/author/${author.id ?? ""}`}>{author.name}</Link>
                </h2>
                <p className="text-sm text-muted-foreground">{author.followers} followers</p>

                <p className="mt-3 mb-6 text-[13px] text-muted-foreground">{author.bio}</p>
            </div>
            <Button variant="outline" className="w-full">Follow</Button>
        </div>
    )
}

export default FollowCard