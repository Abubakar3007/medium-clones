"use client";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ImportStoryPage = () => {
  const [url, setUrl] = useState("");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="max-w-[728px] mx-auto px-6 py-16 text-center">
        <h1 className="text-[46px] font-bold">See your story on Medium</h1>
        <p className="text-black text-lg mb-16">
          Import a story from anywhere on the internet to publish on your Medium account.
        </p>

        <p className="text-base text-gray-600 mb-3">
          Enter a link to your blog post/article/story/manifesto to import and share it on Medium.
        </p>

        <Input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="http://www.yoursite.org/your-post"
          className="mb-2 max-w-[500px] mx-auto h-10 rounded-[4px] text-left text-xl"
        />
        <p className="text-base text-muted-foreground mb-14">
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
  );
};

export default ImportStoryPage;