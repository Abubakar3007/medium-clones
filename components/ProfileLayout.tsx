"use client";
import { ReactNode, useState } from "react";
import { Layout } from "./Layout";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { authors, stories, formatNumber } from "@/app/lib/mock-data";
import { useParams } from "next/navigation";
import { MoreHorizontal } from "lucide-react";

const tabs = [
    {
        text: "Lists",
        link: "/profile"
    },
    {
        text: "About",
        link: "/profile/about"
    }
];

interface FollowLayoutProps {
    children: ReactNode;
}

const ProfileLayout = ({ children }: FollowLayoutProps) => {

    const { id } = useParams();

    // author dummy data
    const author = authors.find(a => a.id === id) || authors[0];

    const pathname = usePathname();
    const isActive = (link: string) => {
        if (link === "/profile") {
            return pathname === "/profile";
        }
        return pathname.startsWith(link);
    };
     const [moreProfile, setMoreProfile] = useState(false);

    return (
        <Layout>
            {/* Main Content */}
            <div className="max-w-[680px] py-10 mx-auto md:px-0 px-6">
                {/* Profile header */}
                <div className="flex items-center justify-between mb-2 animate-fade-in">
                    <div className="flex items-center gap-6">
                        <div className="md:hidden">
                            <img src={author.avatar} alt="" className="w-12 h-12 rounded-full" />
                        </div>
                        <div>
                            <h1 className="md:text-[42px] text-2xl font-bold mb-2">{author.name}</h1>
                            <Link href="" className="text-muted-foreground text-base md:hidden">
                                <span>{formatNumber(author.followers)} followers</span>
                            </Link>
                        </div>
                    </div>

                    <div className="relative">
                        <button
                            onClick={() => setMoreProfile(!moreProfile)}
                            className="p-2 text-muted-foreground hover:text-foreground">
                            <MoreHorizontal className="h-5 w-5" />
                        </button>
                        {/* dropdown */}
                        <div className={`absolute [@media(min-width:900px)]:left-1/2 [@media(min-width:900px)]:-translate-x-1/2 [@media(min-width:900px)]:right-auto right-0 top-12 w-56 rounded-[4px] bg-white shadow-[0px_0px_4px_rgba(0,0,0,0.05),0px_2px_8px_rgba(0,0,0,0.15)] ${moreProfile ? 'block' : 'hidden'}`}>
                            <div className="rounded-[4px] bg-white relative">
                                <div className="rounded-[3px] bg-white/90 overflow-hidden">
                                    <ul className="py-2 flex flex-col text-sm text-neutral-500">
                                        <li className="py-2 px-5">
                                            <button className="hover:text-black">Copy link to profile</button>
                                        </li>
                                        <li className="py-2 px-5">
                                            <button className="hover:text-black">Design your profile</button>
                                        </li>
                                    </ul>
                                </div>

                                <div className="absolute w-4 h-4 rotate-45 -z-10 [@media(min-width:900px)]:left-1/2 [@media(min-width:900px)]:-translate-x-1/2 [@media(min-width:900px)]:right-auto right-0 -top-2 bg-white shadow-md"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tabs */}
                <nav className="flex gap-8 border-b border-divider mb-8 mt-6 overflow-x-auto whitespace-nowrap">
                    {tabs.map((tab) => (
                        <Link
                            href={tab.link}
                            key={tab.link}
                            className={`pb-4 text-sm whitespace-nowrap transition-colors relative ${isActive(tab.link)
                                ? "text-black font-medium"
                                : "text-muted-foreground hover:text-black"
                                }`}
                        >
                            {tab.text}

                            {isActive(tab.link) && (
                                <span className="absolute bottom-0 left-0 right-0 h-px bg-black" />
                            )}
                        </Link>
                    ))}
                </nav>

                {children}
            </div>
        </Layout>
    )
}

export default ProfileLayout