"use client";
import { Header } from "@/components/Header";
import { useParams } from "next/navigation";
import { LeftSidebar } from "./LeftSidebar";
import { useState } from "react";
import { FeedSidebar } from "./FeedSidebar";
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { authors, stories, formatNumber } from "@/app/lib/mock-data";
import Link from "next/link";
import { MoreHorizontal } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
  hideHeader?: boolean;
  onPublish?: () => void;
}

export function Layout({ children, hideHeader, onPublish }: LayoutProps) {
  const { id } = useParams();

  // reading list demo data
const readingLists = [{
  id: "1",
  name: "Reading list",
  count: 3,
  isPrivate: true,
  thumbnails: ["https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=200&h=200&fit=crop", "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=200&h=200&fit=crop", "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=200&h=200&fit=crop"]
},
{
  id: "2",
  name: "My list",
  count: 2,
  isPrivate: false,
  thumbnails: ["https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=200&h=200&fit=crop", "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=200&h=200&fit=crop"]
}];

  const [sidebarOpen, setSidebarOpen] = useState(true);
  const pathname = usePathname();
  const isWritePage = pathname === "/profile";
  // author dummy data
  const author = authors.find(a => a.id === id) || authors[0];
  const authorStories = stories.filter(s => s.author.id === author.id);
  const [editOpen, setEditOpen] = useState(false);

  const followingUsers = authors.slice(0, 2);

  return (
    <div className="min-h-screen bg-background">
      {!hideHeader && (
        <Header
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          onPublish={onPublish}
        />
      )}

      <div className="flex min-h-[calc(100vh-56px)]">
        <LeftSidebar sidebarOpen={sidebarOpen} />

        <main className={`flex-1 transition-all duration-300 ease-in-out ${sidebarOpen ? 'pl-[240px]':'0'}`}>
          {children}
        </main>

        {
          isWritePage ? (
            <aside className={`hidden lg:block transition-all ease-in-out duration-300 ${sidebarOpen ? 'w-[368px]':'w-[468px]'} shrink-0 pl-10 pr-6 border-l border-divider pb-10 overflow-auto`}>
              <div className="sticky top-2 pt-10 space-y-6 flex flex-col justify-between h-full">
                <div>

                  {/* User info */}
                  <div className="flex flex-col items-start mb-12">
                    {/* User image */}
                    <Avatar className="h-22 w-22 mb-4">
                      <AvatarImage src={author.avatar} />
                      <AvatarFallback className="text-2xl">{author.name[0]}</AvatarFallback>
                    </Avatar>
                    {/* user name */}
                    <h3 className="font-bold text-base">{author.name}</h3>
                    {/* user bio */}
                    <p className="text-sm my-3 text-neutral-500 leading-6">{author.bio}</p>
                    {/* followers */}
                    <div className="mt-2 text-base text-neutral-500 leading-6">
                      <span>{formatNumber(author.followers)} Followers</span>
                    </div>
                    {/* Edit profile button */}
                    <button onClick={() => setEditOpen(true)} className="text-green-700 mt-8">Edit profile</button>
                  </div>

                  {/* Following section */}
                  <div>
                    <h3 className="mb-4 text-base text-black">Following</h3>
                    <div className="space-y-2 mb-6">
                      {followingUsers.map((author) => (
                        <Link
                          key={author.id}
                          href={`/profile/${author.id}`}
                          className="flex items-center gap-3 leading-6 text-muted-foreground hover:text-black transition-colors"
                        >
                          <Avatar className="h-5 w-5">
                            <AvatarImage src={author.avatar} />
                            <AvatarFallback>{author.name[0]}</AvatarFallback>
                          </Avatar>
                          <span className="truncate text-neutral-500">{author.name}</span>

                          {/* more button */}
                          <button className="ml-auto"><MoreHorizontal className="w-5 h-5 text-neutral-500" /></button>
                        </Link>
                      ))}
                    </div>

                    <Link href="/search" className="text-neutral-500">See all</Link>
                  </div>

                  {/* Lists section */}
                  <div className="mt-10">
                    <h4 className="font-bold text-base mb-3">Lists</h4>
                    <div className="space-y-4 mb-6">
                      {readingLists.slice(0, 2).map(list => <Link key={list.id} href="/me/lists" className="block group">
                        <div className="flex items-start gap-5">
                          <div className="flex gap-0.5 w-[93px]">
                            {list.thumbnails.map((thumb, i) => {
                              const imageWidth = Math.ceil(48 / (i + 1))
                              return (<img key={i} src={thumb} alt="" style={{ width: `${imageWidth}%` }} className="h-12 object-cover" />)
                            })}
                          </div>
                          <div>
                            <p className="text-base font-bold line-clamp-2 text-ellipsis group-hover:underline">{list.name}</p>
                            <p className="text-xs text-neutral-500">{list.count} stories</p>
                          </div>
                        </div>
                      </Link>)}
                    </div>
                    <Link href="/me/lists" className="text-neutral-500 hover:text-black">
                      View All
                    </Link>
                  </div>
                </div>
                {/* Footer */}
                <div className="pt-6 border-t border-divider">
                  <div className="flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-neutral-500">
                    <a href="#" className="hover:text-foreground">
                      Help
                    </a>
                    <a href="#" className="hover:text-foreground">
                      Status
                    </a>
                    <a href="#" className="hover:text-foreground">
                      About
                    </a>
                    <a href="#" className="hover:text-foreground">
                      Careers
                    </a>
                    <a href="#" className="hover:text-foreground">
                      Press
                    </a>
                    <a href="#" className="hover:text-foreground">
                      Blog
                    </a>
                    <a href="#" className="hover:text-foreground">
                      Privacy
                    </a>
                    <a href="#" className="hover:text-foreground">
                      Rules
                    </a>
                    <a href="#" className="hover:text-foreground">
                      Terms
                    </a>
                    <a href="#" className="hover:text-foreground">
                      Text to Speech
                    </a>
                  </div>
                </div>
              </div>
            </aside>
          ) : (<FeedSidebar sidebarOpen={sidebarOpen}/>)
        }
      </div>
    </div>
  );
}
