"use client";
import { Home, BookOpen, User, FileText, BarChart3, Users, ChevronDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { authors } from "@/app/lib/mock-data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { label: "Home", icon: Home, path: "feed" },
  { label: "Library", icon: BookOpen, path: "library" },
  { label: "Profile", icon: User, path: "profile" },
  { label: "Stories", icon: FileText, path: "stories" },
  { label: "Stats", icon: BarChart3, path: "stats" },
];

interface LeftSidebarProps {
  sidebarOpen: boolean;
}

const followingUsers = authors;

export function LeftSidebar({ sidebarOpen }: LeftSidebarProps) {
  const pathname = usePathname();

  const [visibleCount, setVisibleCount] = useState(10);
  const [loading, setLoading] = useState(false);

  const totalFollowers = authors.length;
  const hasMore = visibleCount < totalFollowers;

  const moreFollowers = () => {
    setLoading(true);

    setTimeout(() => {
      setVisibleCount((prev) => prev + 10);
      setLoading(false);
    }, 500);
  };

  return (
    <aside
      className={`hidden xl:block border-r border-divider top-14 h-screen overflow-y-auto pb-12 pt-10 fixed transition-all duration-300 ease-in-out w-[240px] ${sidebarOpen ? "left-0" : "-left-[240px]"
        }`}
    >
      <div className="pb-10">
        <nav className="space-y-5">
          {navItems.map((item) => {
            const active = pathname === `/${item.path}` || pathname.startsWith(`/${item.path}/`);

            return (
              <Link
                key={item.label}
                href={item.path}
                className={`flex items-center gap-4 pl-7 pr-6 leading-6 text-base transition-colors relative ${active ? "text-black font-medium" : "text-neutral-500 hover:text-black"}`}
              >
                {active && <div className="absolute left-[2px] w-px h-6 top-0 bg-black"></div>}
                <item.icon className={`h-6 w-6 stroke-1 ${active ? "fill-black text-black" : ""}`} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* divider */}
        <div className="mx-6 block bg-gray-100 h-px my-8"></div>

        {/* following */}
        <div>
          <Link
            href="/following"
            className="flex items-center gap-4 pl-7 pr-6 mb-3 text-neutral-500 hover:text-black"
          >
            <Users className="h-5 w-5" />
            <span className="text-base font-medium">Following</span>
          </Link>

          <div className="space-y-2">
            {authors.slice(0, visibleCount).map((author) => (
              <Link
                key={author.id}
                href={`/profile/${author.id}`}
                className="flex items-center gap-5 pl-7 pr-6 leading-6 text-sm text-neutral-500 hover:text-black transition-colors"
              >
                <Avatar className="h-4 w-4">
                  <AvatarImage src={author.avatar} />
                  <AvatarFallback>{author.name[0]}</AvatarFallback>
                </Avatar>

                <span className="truncate">{author.name}</span>

                <span className="ml-auto h-1 w-1 rounded-full bg-green-700 flex-shrink-0" />
              </Link>
            ))}
          </div>

          {/* more following users show button */}
          {/* MORE BUTTON */}
          {hasMore && (
            <button
              onClick={moreFollowers}
              disabled={loading}
              className="flex items-center gap-5 pl-7 pr-6 mt-3 mb-4 text-sm text-neutral-500 hover:text-black"
            >
              <ChevronDown className="w-4" />
              {loading ? "Loading..." : "More"}
            </button>
          )}

          <Link
            href="/search"
            className="flex items-center gap-6 pl-7 pr-6 mt-4 mb-4 text-sm text-muted-foreground hover:text-foreground"
          >
            <span className="text-lg leading-none">+</span>
            <span>Find writers and publications to follow.</span>
          </Link>

          <Link
            href="/search"
            className="pl-7 pr-6 text-sm underline text-muted-foreground hover:text-foreground"
          >
            See suggestions
          </Link>
        </div>
      </div>
    </aside>
  );
}