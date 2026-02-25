import { User, Settings, HelpCircle, Star, LogOut } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from 'next/link';
import { useAuth } from "@/app/context/authContext";
import { Button } from "./ui/button";


export function UserDropdown() {
  const { user } = useAuth();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="ml-1 outline-none">
          <Avatar className="h-8 w-8 cursor-pointer border border-input/10">
            <AvatarImage src={user ? 'https://i.pravatar.cc/150?img=12' : './images/default-user.png'} />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-60 mt-[6px]">

        {/* if user not login */}
        {
          !user && (
            <>
            <div className="pt-3 pb-6 px-6">
              <h3 className="mb-4 text-base text-center">Get started on Prismio</h3>

              <div className="space-y-4">
                <Button variant="secondary" className="w-full block">Sign up</Button>
                <Button variant="outline" className="w-full block">Sign in</Button>
              </div>
            </div>

            <DropdownMenuSeparator />
            </>
          )
        }

        {/* User info */}
        {
          user && (
            <div className="flex items-center gap-4 px-6 py-2">
              <Avatar className="h-12 w-12">
                <AvatarImage src={user ? 'https://i.pravatar.cc/150?img=12' : './images/default-user.png'} />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium text-neutral-500 line-clamp-1 text-ellipsis">Abubakarshaikh</p>
                <Link href="/profile" className="text-xs text-neutral-500">
                  View profile
                </Link>
              </div>
            </div>
          )
        }

        <div className="pt-2 pb-4">
          {
            user && (
              <DropdownMenuItem asChild>
                <Link href="/settings" className="flex items-center gap-3 py-2 px-6 text-neutral-500 cursor-pointer">
                  <Settings className="h-6 w-6 stroke-1 text-neutral-500" />
                  Settings
                </Link>
              </DropdownMenuItem>
            )
          }

          <DropdownMenuItem asChild>
            <Link href="/help" className="flex items-center gap-3 py-2 px-6 text-neutral-500 cursor-pointer">
              <HelpCircle className="h-6 w-6 stroke-1 text-neutral-500" />
              Help
            </Link>
          </DropdownMenuItem>
        </div>

        <DropdownMenuSeparator />

        <div className={`${user ? 'py-[18px]' : 'pt-[18px]'} text-neutral-500`}>
          <DropdownMenuItem className="flex items-center gap-3 px-6">
            Become a member ✨
          </DropdownMenuItem>
          <DropdownMenuItem className="px-6 py-2 text-sm">
            Apply to the Partner Program
          </DropdownMenuItem>
        </div>
        {
          user && (
            <>
              <DropdownMenuSeparator />
              <div className="py-[18px] text-neutral-500">
                <DropdownMenuItem asChild>
                  <Link href="/auth" className="flex items-center gap-3 px-6">
                    <LogOut className="h-4 w-4" /> Sign out
                  </Link>
                </DropdownMenuItem>
                <p className="px-6 text-xs text-neutral-500">yo●●●●●●●●●@gmail.com</p>
              </div>

              <DropdownMenuSeparator />
              <div className="flex flex-wrap gap-x-3 gap-y-1 px-6 py-4 text-xs text-neutral-500">
                <a href="#" className="hover:text-foreground">About</a>
                <a href="#" className="hover:text-foreground">Blog</a>
                <a href="#" className="hover:text-foreground">Careers</a>
                <a href="#" className="hover:text-foreground">Privacy</a>
                <a href="#" className="hover:text-foreground">Terms</a>
              </div>
            </>
          )
        }

      </DropdownMenuContent>
    </DropdownMenu>
  );
}
