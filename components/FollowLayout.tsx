"use client";

import { ReactNode } from "react";
import { Layout } from "./Layout";
import { usePathname } from "next/navigation";
import Link from "next/link";

const tabs = [
    { text: "Following", link: "/following" },
    { text: "Reading history", link: "/following/reading" },
    { text: "Muted", link: "/following/muted" },
    { text: "Suggestions", link: "/following/suggestions" },
];

interface FollowLayoutProps {
    children: ReactNode;
}

const FollowLayout = ({ children }: FollowLayoutProps) => {
    const pathname = usePathname();

    const isActive = (link: string) => {
        if (link === "/following") {
            return pathname === "/following";
        }
        return pathname.startsWith(link);
    };

    return (
        <Layout>
            <div className="max-w-[680px] py-10 mx-auto px-6 xl:px-0">
                <h1 className="md:text-[42px] text-2xl font-bold mb-4">
                    Refine recommendations
                </h1>

                <p className="text-neutral-500 mb-16">
                    Adjust recommendations by updating what you’re following, your
                    reading history, and who you’ve muted.
                </p>

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
    );
};

export default FollowLayout;