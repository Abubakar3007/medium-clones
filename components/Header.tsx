"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Bell, Edit, Menu, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { UserDropdown } from "@/components/UserDropdown";
import { useState } from "react";
import { useAuth } from "@/app/context/authContext";
import AuthDialog from "./AuthDialog";

interface HeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onPublish?: () => void;
}

export function Header({ sidebarOpen, setSidebarOpen, onPublish, }: HeaderProps) {
  const pathname = usePathname();
  const isWritePage = pathname === "/write";
  const { user, loading } = useAuth();
  const [isStarted, setIsStarted] = useState(false);

  return (
    <header className={`[@media(min-width:900px)]:sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 ${isWritePage ? 'border-none' : 'border-divider '}`}>
      <div className={`mx-auto flex items-center justify-between pl-4 pr-6 ${isWritePage ? 'px-5 max-w-[1032px] h-16' : 'h-14'}`}>
        <div className="flex items-center gap-2">
          {/* menu button */}
          {user && !isWritePage && (
            <button
              className="w-10 h-10 grid place-items-center"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <Menu className="stroke-1" />
            </button>
          )}

          {/* logo */}
          <Link href="/" className='text-3xl font-bold'>
            <img src="../logo/black-logo.png" alt="logo" className='w-14' />
          </Link>

          {
            isWritePage && (
              <div className="flex items-center gap-4">
                <Link href="/drafts">Drafts</Link>
                <span className="text-neutral-500">Saved</span>
              </div>
            )}

          {!isWritePage && (
            <div className="relative ml-6 hidden sm:block bg-neutral-100/70 rounded-full w-60">
              <Search className="absolute left-4 top-1/2 h-6 w-6 text-neutral-500 stroke-1 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search"
                className="h-10 w-full rounded-full bg-secondary pl-[50px] pr-4 text-sm outline-none transition-all placeholder:text-neutral-500"
              />
            </div>
          )}
        </div>

        <div className="flex items-center md:gap-6 gap-3">
          {!isWritePage && (
            <Link href="/write" className="sm:flex hidden items-center text-neutral-500">
              <Edit className="stroke-1 inline-block mr-2" />
              <span className="hidden sm:inline">Write</span>
            </Link>
          )}

          {isWritePage && (
            <>
              <Button
                size="sm"
                className="rounded-full bg-green-700 px-3 h-7 text-sm text-white hover:bg-green-800"
                onClick={onPublish}
              >
                Publish
              </Button>
              <button><MoreHorizontal /></button>
            </>
          )}

          {/* notification */}
          {
            user && (
              <Link href="/notifications" title="Notification" className="sm:block hidden">
                <Bell className="stroke-1 text-neutral-500" />
              </Link>
            )
          }

          {
            !user && (
              <div className="sm:flex hidden gap-4 mr-6">
                <Button
                  variant="secondary"
                  className="h-8 text-xs"
                  onClick={() => setIsStarted(true)}
                >
                  Sign in
                </Button>
                <Button
                  variant="outline"
                  className="h-8 text-sm border-none text-muted-foreground px-0 bg-transparent hover:bg-transparent"
                  onClick={() => setIsStarted(true)}
                >
                  Sign up</Button>
              </div>
            )
          }


          {/* Search */}
          <Link href="" className="md:hidden">
            <Search className="w-5 h-5 stroke-1.5 text-muted-foreground" />
          </Link>

          {/* dropdown profile */}
          <UserDropdown />
        </div>
      </div>

      {
        isStarted && (
          <AuthDialog isStarted={isStarted} setIsStarted={setIsStarted} />
        )
      }
    </header>
  );
}