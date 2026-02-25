
"use client";

import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { stories, authors } from "@/app/lib/mock-data";
import { StoryCard } from "@/components/StoryCard";
import FollowCard from "@/components/FollowCard";
import { RecommendedCard } from "@/components/RecommedCard";

const page = () => {
    const params = useParams<{ id: string }>();
    const id = params?.id;

    const categories = [
        { text: "Programming", link: "/tag/programming" },
        { text: "Software Development", link: "/software-development" },
        { text: "Technology", link: "/technology" },
        { text: "Data Science", link: "/science" },
        { text: "Self Improvement", link: "/self" },
        { text: "Coding", link: "/coding" },
        { text: "Relationships", link: "/relationships" },
        { text: "Python", link: "/python" },
        { text: "Software Engineering", link: "/software-engineering" },
    ];

    const tagName = id ? id.charAt(0).toUpperCase() + id.slice(1) : "Programming";
    const totalFollowers = 1300000;
    const totalStories = 405000;


    return (
        <Layout>
            <div className="px-6 **:">
                {/* tab bar */}
                <div className="mt-6 pb-12">
                    <nav className="overflow-x-scroll w-full whitespace-nowrap">
                        <ul className="flex gap-4">
                            {
                                categories.map((data, index) => (
                                    <li key={index}>
                                        <Link href={data.link} className="py-2 px-4 rounded-full text-sm block bg-[#f4f4f4]">{data.text}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>
                </div>

                {/* header */}
                <div className="mb-14 text-center">
                    {/* tag name */}
                    <h1 className="text-[42px] leading-14">{tagName}</h1>
                    <div className="mt-4 mb-6 text-base text-muted-foreground flex justify-center">
                        <span>Topic</span>
                        <span className="mx-2">.</span>
                        <span>{totalFollowers} Followers</span>
                        <span className="mx-2">.</span>
                        <span>{totalStories}</span>
                    </div>
                    <Button variant="default" className="w-fit mx-auto">Follow</Button>
                </div>

                {/* Recommended */}
                <section>
                    <div>
                        <h2 className="my-10 text-3xl">Recommended stories</h2>
                        {/* cards */}
                        <div className="grid grid-cols-3 gap-x-14 gap-y-16">
                            {
                                stories.map((story, i) => (
                                    <RecommendedCard key={story.id} story={story} featured={i === 0} />
                                ))
                            }
                        </div>

                        <div className="mt-20">
                            <Link href="">
                                <Button variant="outline">See more recommended stories</Button>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Who follow you */}
                <section>
                    <div className="border-b border-input/10 pb-20 pt-10">
                        <h2 className="text-2xl leading-8">Who to follow</h2>
                        <div className="my-10 overflow-hidden">
                            <div className="flex overflow-x-scroll w-full gap-6">
                                {authors.slice(0, 6).map((author) => (
                                    <FollowCard key={author.id} author={author} />
                                ))}
                            </div>
                        </div>

                        <div>
                            <Link href="">
                                <Button variant="outline">See more</Button>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* latest stories */}
                <section>
                    <div className="px-6 flex justify-between pt-20 pb-32">
                        <h2 className="max-w-[360px] w-full text-2xl leading-8">Latest stories</h2>
                        <div>
                            {
                                stories.slice(0, 5).map((story, i) => (
                                    <StoryCard key={story.id} story={story} featured={i === 0} />
                                ))
                            }

                            <Link href="">
                                <Button variant="outline">See more stories</Button>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    )
}

export default page