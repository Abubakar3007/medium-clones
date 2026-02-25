"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { authors } from "@/app/lib/mock-data";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import FollowLayout from "@/components/FollowLayout";
const suggestedAuthors = authors.slice(0, 3);

const page = () => {
    return (
        <FollowLayout>
            {/* following tab */}
            <section className="mb-12 pb-10 border-b-2 border-gray-200/60">
                <h2 className="text-base mb-8"><span>55</span> Writers</h2>
                <div className="space-y-6 mb-6">
                    {suggestedAuthors.map((author) => (
                        <div key={author.id} className="flex items-start gap-6">
                            <Avatar className="h-12 w-12 relative top-[2px]">
                                <AvatarImage src={author.avatar} />
                                <AvatarFallback>{author.name[0]}</AvatarFallback>
                            </Avatar>

                            <div className="flex-1 min-w-0">
                                <Link href={`/profile/${author.id}`} className="text-sm font-medium hover:underline">
                                    <h3 className="text-base font-bold">{author.name}</h3>
                                </Link>
                                <p className="text-sm text-neutral-500 line-clamp-2 mt-1 w-[80%]">{author.bio}</p>
                            </div>
                            <Button variant="outline" className="rounded-full py-1.5 px-3 h-9 border-muted-foreground/20">
                                Following
                                <ChevronDown className="w-4 h-4 text-neutral-500" />
                            </Button>
                        </div>
                    ))}
                </div>
                <Link href="/following/suggestions" className="text-sm font-medium hover:underline text-neutral-500">See more writers</Link>
            </section>

            <section className="pb-12 border-b border-gray-200/60 mb-12">
                <h3 className="text-base mb-10">Publications</h3>
                <p className="text-muted-foreground text-sm text-center">You haven’t followed any publications yet.</p>
                <p className="text-center mt-6">
                    <Link href="" className="text-muted-foreground text-sm text-center underline">See suggestions</Link>
                </p>
            </section>

            <section className="pb-12 border-b border-gray-200/60">
                <h3 className="text-base mb-10">Topics</h3>
                <p className="text-muted-foreground text-sm text-center">You haven’t followed any topics yet.</p>
                <p className="text-center mt-6">
                    <Link href="" className="text-muted-foreground text-sm text-center underline">See suggestions</Link>
                </p>
            </section>
        </FollowLayout>
    )
}

export default page