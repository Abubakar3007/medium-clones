"use client";
import { Home, BookOpen, User, FileText, BarChart3, Users, ChevronDown, Menu, HomeIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { authors } from "@/app/lib/mock-data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dispatch, useState } from "react";

const navItems = [
  { label: "Home", icon: Home, path: "feed" },
  { label: "Library", icon: BookOpen, path: "library" },
  { label: "Profile", icon: User, path: "profile" },
  { label: "Stories", icon: FileText, path: "stories" },
  { label: "Stats", icon: BarChart3, path: "stats" },
];

interface LeftSidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const followingUsers = authors;

export function LeftSidebar({ sidebarOpen, setSidebarOpen }: LeftSidebarProps) {
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
    <>
      <div
        className="bg-white transition-all ease-in duration-200 lg:block hidden"
        style={{
          width: sidebarOpen ? "240px" : "0px",
        }}
      >
        {
          sidebarOpen && (
            <aside
              style={{
                transform: sidebarOpen ? "translateX(0px)" : "translateX(240px)",
                transition: "transform 300ms ease-in-out"
              }}
              className="sticky top-[57px] h-[calc(100vh-57px)] w-full flex flex-col bg-white border-r border-r-[#f2f2f2] z-20">
              <div className="overflow-hidden pb-8 pt-11">


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
          )
        }
      </div>

      <div className={`fixed top-0 left-0 right-0 bottom-0 z-[800] flex items-center justify-center overflow-y-auto overflow-x-hidden bg-transparent ${sidebarOpen ? 'opacity-0 invisible' : 'opacity-100 visible'} scroll-smooth lg:hidden`}>
        <div
          onClick={() => setSidebarOpen(true)}
          className={`absolute top-0 left-0 w-full h-full bg-[rgba(36,36,36,0.08)] ${sidebarOpen ? 'opacity-0' : 'opacity-100'}`}></div>

        <div className="absolute top-0 left-0">
          <div
            onClick={(e) => e.stopPropagation()}
            className={`fixed pt-[41px] h-full transition-all ease duration-300 w-[240px] flex flex-col bg-white z-[500] shadow-[0px_0px_4px_rgba(0,0,0,0.05),0px_2px_8px_rgba(0,0,0,0.15)] ${sidebarOpen ? 'translate-x-[-240px]' : '-translate-x-0'}`}>

            <div className="py-2 px-4 flex gap-3 items-center mb-8">
              <button className="w-10 h-10 grid place-items-center" onClick={() => setSidebarOpen(!sidebarOpen)}>
                <Menu className="stroke-1 text-muted-foreground" />
              </button>
              <Link href="/" className="text-3xl">Medium</Link>
            </div>

            <div className="space-y-8 pb-5 overflow-y-auto">
              <div className="space-y-5">
                <a className="text-base leading-6 pl-6 pr-7 flex gap-4" href="">
                  <HomeIcon />
                  <span>Home</span>
                </a>
                <a className="text-base leading-6 pl-6 pr-7 flex gap-4" href="">
                  <BookOpen />
                  <span>Library</span>
                </a>
                <a className="text-base leading-6 pl-6 pr-7 flex gap-4" href="">
                  <User />
                  <span>Profile</span>
                </a>
                <a className="text-base leading-6 pl-6 pr-7 flex gap-4" href="">
                  <FileText />
                  <span>Stories</span>
                </a>
                <a className="text-base leading-6 pl-6 pr-7 flex gap-4" href="">
                  <BarChart3 />
                  <span>Stats</span>
                </a>
              </div>

              <div className="border-b border-input/10 mx-6 my-10"></div>

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
          </div>
        </div>
      </div>
    </>
  );
}