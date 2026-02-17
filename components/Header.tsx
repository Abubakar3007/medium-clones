"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Bell, Edit, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { UserDropdown } from "@/components/UserDropdown";
import { useState } from "react";

interface HeaderProps {
  onPublish?: () => void;
}

export function Header({ onPublish }: HeaderProps) {
  const pathname = usePathname();
  const isWritePage = pathname === "/write";

  const [sidebarToggle, setSidebarToggle] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-divider bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-14 items-center justify-between pl-4 pr-6">
        <div className="flex items-center gap-2">
          {/* menu button */}
          <button className="w-10 h-10 grid place-items-center" onClick={() => setSidebarToggle(true)}>
            <Menu className="stroke-1" />
          </button>

          {/* logo */}
          <Link href="/" className="flex items-center gap-1">
            <span className="text-[28px] font-bold tracking-tighter text-foreground">
              Prismio
            </span>
          </Link>

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

        <div className="flex items-center gap-6">
          {!isWritePage && (
            <Link href="/write" className="flex items-center text-neutral-500">
              <Edit className="stroke-1 inline-block mr-2" />
              <span className="hidden sm:inline">Write</span>
            </Link>
          )}

          {isWritePage && (
            <Button
              size="sm"
              className="rounded-full bg-primary px-4 text-sm text-primary-foreground hover:bg-primary/90"
              onClick={onPublish}
            >
              Publish
            </Button>
          )}

          {/* notification */}
          <Link href="/notifications" title="Notification">
            <Bell className="stroke-1 text-neutral-500" />
          </Link>

          {/* dropdown profile */}
          <UserDropdown />
        </div>
      </div>
    </header>
  );
}