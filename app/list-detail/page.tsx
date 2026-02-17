"use client";

import { Layout } from "@/components/Layout";
import { useParams, useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { authors } from "@/app/lib/mock-data";
import { MessageCircle, Share, MoreHorizontal, Bookmark } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useState, useEffect } from "react";
import { useToast } from "@/app/hooks/use-toast";

const ListDetailPage = () => {
  const { id } = useParams();
  const router = useRouter();
  const { toast } = useToast();
  const author = authors[0];

  const [listName, setListName] = useState("Reading list");
  const [isPrivate, setIsPrivate] = useState(false);

  // ✅ Safe localStorage access (client only)
  useEffect(() => {
    if (!id) return;

    const storedName = localStorage.getItem(`list_${id}_name`);
    const storedPrivate = localStorage.getItem(`list_${id}_private`);

    if (storedName) setListName(storedName);
    if (storedPrivate) setIsPrivate(storedPrivate === "true");
  }, [id]);

  const handleDelete = () => {
    toast({ title: "List deleted" });
    router.push("/me/lists");
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({ title: "Link copied to clipboard" });
  };

  const handleTogglePrivate = () => {
    const newValue = !isPrivate;
    setIsPrivate(newValue);
    localStorage.setItem(`list_${id}_private`, String(newValue));
    toast({ title: newValue ? "List is now private" : "List is now public" });
  };

  return (
    <Layout>
      <div className="max-w-[728px] mx-auto px-6 py-10">
        {/* Author info */}
        <div className="flex items-center gap-3 mb-6">
          <Avatar className="h-12 w-12">
            <AvatarImage src={author.avatar} />
            <AvatarFallback>{author.name[0]}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium text-sm">{author.name}</p>
            <p className="text-xs text-muted-foreground">
              {new Date().toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </p>
          </div>
        </div>

        {/* List title */}
        <h1 className="text-[32px] font-bold font-serif mb-4">{listName}</h1>

        {/* Action bar */}
        <div className="flex items-center justify-between border-t border-b border-divider py-3 mb-8">
          <div className="flex items-center gap-4">
            <button className="text-muted-foreground hover:text-foreground flex items-center gap-1">
              <span className="text-lg">👏</span>
            </button>
            <button className="text-muted-foreground hover:text-foreground">
              <MessageCircle className="h-5 w-5" />
            </button>
          </div>

          <div className="flex items-center gap-4">
            <button className="text-muted-foreground hover:text-foreground">
              <Share className="h-5 w-5" />
            </button>

            <Popover>
              <PopoverTrigger asChild>
                <button className="text-muted-foreground hover:text-foreground">
                  <MoreHorizontal className="h-5 w-5" />
                </button>
              </PopoverTrigger>

              <PopoverContent align="end" className="w-48 p-1">
                <button
                  onClick={handleCopyLink}
                  className="w-full text-left px-4 py-2.5 text-sm hover:bg-accent rounded-sm"
                >
                  Copy link
                </button>

                <button className="w-full text-left px-4 py-2.5 text-sm hover:bg-accent rounded-sm">
                  Edit list info
                </button>

                <button
                  onClick={handleTogglePrivate}
                  className="w-full text-left px-4 py-2.5 text-sm hover:bg-accent rounded-sm"
                >
                  {isPrivate ? "Make list public" : "Make list private"}
                </button>

                <button className="w-full text-left px-4 py-2.5 text-sm hover:bg-accent rounded-sm">
                  Hide responses
                </button>

                <button
                  onClick={handleDelete}
                  className="w-full text-left px-4 py-2.5 text-sm text-destructive hover:bg-accent rounded-sm"
                >
                  Delete list
                </button>
              </PopoverContent>
            </Popover>
          </div>
        </div>

        {/* Empty state */}
        <div className="border border-dashed border-divider rounded-lg py-16 px-8 text-center">
          <p className="text-muted-foreground">
            Add your favorite stories to your list. Simply click the{" "}
            <Bookmark className="h-4 w-4 inline-block mx-1" /> on any story to get
            started.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default ListDetailPage;