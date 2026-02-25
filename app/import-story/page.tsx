"use client";
import { useState, useRef, useEffect } from "react";
import { Header } from "@/components/Header";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { Bookmark, Bell, Search } from 'lucide-react';

const ImportStoryPage = () => {
  const [url, setUrl] = useState("");
  const [input, setInput] = useState(false);
  const inputRef = useRef<HTMLLabelElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setInput(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="shadow-[0_4px_12px_0_rgba(0,0,0,0.05)] w-full block">
        <div className="max-w-[1032px] w-full mx-auto px-5 min-h-16 flex justify-between items-center">
          <Link href="/" className='text-white text-3xl font-bold'>
            <img src="./logo/black-logo.png" alt="" className='w-14' />
          </Link>

          <div className="flex items-center">
            {/* search */}
            <label
              className="mr-2 relative text-base transition-colors duration-100 md:flex hidden"
              title="Search Prismio"
              ref={inputRef}
            >
              <div className="relative top-px grid place-items-center cursor-pointer" onClick={() => setInput(!input)}>
                <Search className="text-muted-foreground stroke-1 w-5" />
              </div>
              <input className={`inline-block align-middle ${input ? 'w-[200px]' : 'w-px'} h-[37px] outline-none font-medium border-0 transition-[width,padding] duration-200 pl-2 text-[13px] pr-0`} type="search" placeholder="Search Prismio" required />
            </label>

            <Link href="" className="md:hidden mr-4">
              <Search className="w-5 stroke-1 text-muted-foreground" />
            </Link>

            <Link className="mr-4 md:block hidden" href="https://medium.com/search" title="Search">
              <Bookmark className="stroke-1 text-muted-foreground w-5" />
            </Link>

            <button title="Notifications" className="mr-4">
              <Bell className="stroke-1 text-muted-foreground w-5" />
            </button>

            <Link href="" className="mr-4 md:block hidden">
              <Button variant="outline" className="h-8 text-xs">Upgrade</Button>
            </Link>

            <button>
              <img src="https://cdn-images-1.medium.com/fit/c/40/40/0*2jHwd3Q4XZ3ZxGwN" className="h-8 w-8 rounded-full" alt="bakar status_4" />
            </button>
          </div>
        </div>
      </div>

      <div className="min-h-screen">
        <div className="max-w-[728px] mx-auto px-6 md:py-16 py-8 text-center">
          <h1 className="md:text-[46px] text-4xl font-bold mb-2">See your story on Prismio</h1>
          <p className="text-black text-lg mb-16">
            Import a story from anywhere on the internet to publish on your Prismio account.
          </p>

          <p className="md:text-base text-muted-foreground mb-3">
            Enter a link to your blog post/article/story/manifesto to import and share it on Prismio.
          </p>

          <Input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="http://www.yoursite.org/your-post"
            className="mb-2 max-w-[500px] mx-auto h-10 rounded-[4px] text-left text-lg placeholder-muted-foreground/50"
          />
          <p className="md:text-base text-muted-foreground mb-14">
            You will have a chance to edit it before making it public.
          </p>

          <Button variant="outline" className="rounded-full border border-primary text-primary px-4 mb-12 hover:text-primary">
            Import
          </Button>

          <p className="text-sm text-muted-foreground">
            Please only import <span className="underline cursor-pointer">content that you own</span>.
          </p>
        </div>
      </div>
    </>
  );
};

export default ImportStoryPage;