"use client";
import { Layout } from "@/components/Layout";
import { useState } from "react";
import { stories, authors, formatDate, formatNumber } from "@/app/lib/mock-data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Lock, MoreHorizontal, Trash2, Bookmark, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LeftSidebar } from "@/components/LeftSidebar";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useRouter } from "next/navigation";
import Link from "next/link";
import MoreDropdown from "@/components/MoreDropdown";
import { StoryCard } from "@/components/StoryCard";

const tabs = ["Your lists", "Saved lists", "Highlights", "Reading history", "Responses"];

const mockLists = [{
  id: "1",
  name: "Reading list",
  count: 3,
  isPrivate: true,
  author: authors[0],
  stories: stories.slice(0, 3)
}, {
  id: "2",
  name: "My list",
  count: 2,
  isPrivate: false,
  author: authors[0],
  stories: stories.slice(1, 3)
}];

const mockHighlights = [{
  id: "1",
  text: "What do I plan to do with my one wild and precious life?",
  source: "Your One Precious Life",
  author: "Jason McBride"
}, {
  id: "2",
  text: "The cost of a thing is the amount of what I will call life which is required to be exchanged for it.",
  source: "The Architecture of Attention in the Age of Infinite Scroll",
  author: "Sarah Chen"
}];

const ReadingListPage = () => {
  const [activeTab, setActiveTab] = useState("Your lists");
  const [showNewListDialog, setShowNewListDialog] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <Layout>
      <div className="flex">
        {/* sidebar */}
        <LeftSidebar />

        {/* main content */}
        <div className="flex-1 max-w-[680px] py-12 mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h1 className="text-[42px] font-bold animate-fade-in">Your library</h1>

            {/* tab list */}
            {activeTab === "Your lists" && (
              <Button
                onClick={() => setShowNewListDialog(true)}
                className="rounded-full bg-green-700 text-white text-base px-5"
              >
                New list
              </Button>
            )}
          </div>

          {/* Tabs */}
          <div className="flex gap-8 border-b border-divider mb-8">
            {tabs.map(tab => <button key={tab} onClick={() => setActiveTab(tab)} className={`pb-4 text-sm transition-colors relative ${activeTab === tab ? "text-black font-medium" : "text-neutral-500 hover:text-foreground"}`}>
              {tab}
              {activeTab === tab && <span className="absolute bottom-0 left-0 right-0 h-px bg-black" />}
            </button>)}
          </div>

          {/* Tab content */}
          {activeTab === "Your lists" && <YourListsTab showDropdown={showDropdown} setShowDropdown={setShowDropdown} />}
          {activeTab === "Saved lists" && <EmptyTab message="You haven't saved any lists yet." />}
          {activeTab === "Highlights" && <HighlightsTab />}
          {activeTab === "Reading history" && <ReadingHistoryTab />}
          {activeTab === "Responses" && <Response />}
        </div>
      </div>

      {
        showDropdown && <MoreDropdown left="834" top="133" setShowDropdown={setShowDropdown} />
      }
      <NewListDialog open={showNewListDialog} onOpenChange={setShowNewListDialog} />
    </Layout>);
};

function NewListDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void; }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [showDescription, setShowDescription] = useState(false);
  const [isPrivate, setIsPrivate] = useState(false);
  const router = useRouter();
  const handleCreate = () => {
    if (!name.trim()) return;
    const id = `custom-${Date.now()}`;
    localStorage.setItem(`list_${id}_name`, name);
    localStorage.setItem(`list_${id}_private`, String(isPrivate));
    if (description) localStorage.setItem(`list_${id}_desc`, description);
    onOpenChange(false);
    setName("");
    setDescription("");
    setShowDescription(false);
    setIsPrivate(false);
    router.push(`/list/${id}`);
  };
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[900px] min-h-[550px] bg-white">
        <div className="max-w-[500px] w-full py-6 px-14 flex-col flex-1 justify-center items-center flex mx-auto">
          <DialogHeader className="w-full">
            <DialogTitle className="text-[32px] text-left font-bold">Create new list</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 pt-2 mt-14 w-full">
            <div>
              <Input placeholder="Give it a name" value={name} onChange={e => setName(e.target.value.slice(0, 60))} className="border-border rounded-[4px] w-full" />
              <p className="text-sm text-neutral-500 text-right mt-1">{name.length}/60</p>
            </div>

            {!showDescription ? <button onClick={() => setShowDescription(true)} className="text-base text-green-700 hover:underline">
              Add a description
            </button> : <textarea placeholder="Add a description..." value={description} onChange={e => setDescription(e.target.value.slice(0, 280))} className="w-full border border-border rounded-md px-3 py-2 text-sm resize-none h-20 focus:outline-none focus:ring-2 focus:ring-ring bg-background" />}

            <div className="flex items-center gap-2">
              <Checkbox id="private" checked={isPrivate} onCheckedChange={v => setIsPrivate(!!v)} />
              <label htmlFor="private" className="text-sm cursor-pointer">Make it private</label>
            </div>
          </div>
          <div className="flex justify-end gap-3 pt-20">
            <Button variant="outline" className="rounded-full" onClick={() => onOpenChange(false)}>Cancel</Button>
            <Button className="rounded-full border-black" onClick={handleCreate} disabled={!name.trim()}>Create</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

// your lists
function YourListsTab({ showDropdown, setShowDropdown }: { showDropdown: boolean, setShowDropdown: (show: boolean) => void }) {
  return <div className="space-y-10">
    {mockLists.map(list =>
    (
      <div
        key={list.id}
        className="border border-divider rounded flex items-center bg-neutral-100/50 hover:bg-neutral-100/80 transition-colors justify-between overflow-hidden"
      >
        {/* content */}
        <div className="flex-1 min-w-0 p-5">
          <Link href={`/list/${list.id}`} className="flex items-center gap-2 mb-3">
            <Avatar className="h-5 w-5">
              <AvatarImage src={list.author.avatar} />
              <AvatarFallback>{list.author.name[0]}</AvatarFallback>
            </Avatar>
            <span className="text-sm font-medium">{list.author.name}</span>
          </Link>

          <Link href={`/list/${list.id}`}>
            <h3 className="font-black text-xl mb-3">{list.name}</h3>
          </Link>

          <div className="flex justify-between gap-2 items-center">
            <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
              <span className="text-neutral-500">{list.count} stories</span>
              {list.isPrivate && <Lock className="h-3 w-3" />}
            </div>

            <button onClick={() => setShowDropdown(true)}>
              <MoreHorizontal className="text-neutral-500 w-5 h-5" />
            </button>
          </div>
        </div>
        {/* images */}
        <Link href={`/list/${list.id}`} className="gap-0.5 w-[294px] flex items-end justify-end relative h-[140px]">
          {
            list.stories.slice(0, 3).map((story, index) => {
              const imageWidth = Math.floor(100 / (index + 1));
              return (
                <div key={story.id} style={{ width: `${imageWidth}%` }}>
                  <img src={story.coverImage || `https://picsum.photos/seed/${story.id}/120/120`} alt="" className={`w-full h-[140px] object-cover`} />
                </div>
              )
            }
            )}
        </Link>
      </div>))}
  </div>;
}

// Highlights 
function HighlightsTab() {
  const [highlights, setHighlights] = useState(mockHighlights);
  const handleUnhighlight = (id: string) => {
    setHighlights(prev => prev.filter(h => h.id !== id));
  };

  if (highlights.length === 0) {
    return <EmptyTab message="You haven't made any highlights yet." />;
  }

  return (
    <div className="space-y-4">
      {highlights.map(highlight => (
        <div key={highlight.id} className="border border-divider rounded p-6">
          <p className="text-sm text-[#6b6b6b] mb-3">From {highlight.source} by {highlight.author}</p>
          <p className="text-lg font-light">{highlight.text} <mark className="bg-primary/20">letter.</mark></p>

          <div className="flex justify-end mt-4">
            <Popover>
              <PopoverTrigger asChild>
                <button className="text-muted-foreground hover:text-foreground">
                  <ChevronDown className="h-5 w-5 text-neutral-500" />
                </button>
              </PopoverTrigger>

              <PopoverContent align="end" className="w-36 p-1">
                <button
                  onClick={() => handleUnhighlight(highlight.id)}
                  className="w-full text-left px-4 py-2 text-sm text-neutral-500 hover:bg-accent rounded-sm bg-white"
                >
                  Unhighlight
                </button>
              </PopoverContent>
            </Popover>
          </div>
        </div>))}
    </div>
  );
}

// reading history
function ReadingHistoryTab() {
  const historyStories = stories.slice(0, 5);
  return (
    <div>
      <div className="bg-neutral-100/70 rounded p-6 flex items-center justify-between mb-12">
        <span className="text-sm">You can clear your reading history for a fresh start.</span>
        <Button className="rounded-full border-destructive bg-red-700/80 text-white hover:bg-red-700 text-sm h-8">
          Clear history
        </Button>
      </div>

      <div className="space-y-10">
        {historyStories.map((story, i) => (
          <div key={story.id}>
            <StoryCard key={story.id} story={story} featured={i === 0} />
          </div>
        ))}
      </div>
    </div>
  );
}

// response
function Response() {
  return (
    <div>
      <div className="py-5 border-b border-divider">
        <h3 className="text-base leading-6 line-clamp-2 text-ellipsis mb-2">
          <Link href="">Telegram joining link not working</Link>
        </h3>

        <div className="flex items-center gap-3">
          <div className="flex gap-2 text-sm text-neutral-500">
            <span>Published on <span>Jan 8, 2025</span></span>
            <span>·</span>
            <span>1 min read</span>
          </div>
          <div className="flex gap-2">
            <button className="text-neutral-500 hover:text-black">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path fill="currentColor" fill-rule="evenodd" d="M15.218 4.931a.4.4 0 0 1-.118.132l.012.006a.45.45 0 0 1-.292.074.5.5 0 0 1-.3-.13l-2.02-2.02v7.07c0 .28-.23.5-.5.5s-.5-.22-.5-.5v-7.04l-2 2a.45.45 0 0 1-.57.04h-.02a.4.4 0 0 1-.16-.3.4.4 0 0 1 .1-.32l2.8-2.8a.5.5 0 0 1 .7 0l2.8 2.79a.42.42 0 0 1 .068.498m-.106.138.008.004v-.01zM16 7.063h1.5a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-11c-1.1 0-2-.9-2-2v-10a2 2 0 0 1 2-2H8a.5.5 0 0 1 .35.15.5.5 0 0 1 .15.35.5.5 0 0 1-.15.35.5.5 0 0 1-.35.15H6.4c-.5 0-.9.4-.9.9v10.2a.9.9 0 0 0 .9.9h11.2c.5 0 .9-.4.9-.9v-10.2c0-.5-.4-.9-.9-.9H16a.5.5 0 0 1 0-1" clip-rule="evenodd"></path>
              </svg>
            </button>
            <button className="text-neutral-500 hover:text-black">
              <svg width="25" height="25" className="stroke-neutral-500">
                <path fill-rule="evenodd" d="M5 12.5q0 .828.586 1.414.585.585 1.414.586.828 0 1.414-.586.585-.586.586-1.414 0-.828-.586-1.414A1.93 1.93 0 0 0 7 10.5q-.828 0-1.414.586-.585.586-.586 1.414m5.617 0q0 .828.586 1.414.587.585 1.414.586.828 0 1.414-.586t.586-1.414-.586-1.414a1.93 1.93 0 0 0-1.414-.586q-.827 0-1.414.586-.586.586-.586 1.414m5.6 0q0 .828.586 1.414.585.585 1.432.586.827 0 1.413-.586t.587-1.414q0-.828-.587-1.414a1.93 1.93 0 0 0-1.413-.586q-.847 0-1.432.586t-.587 1.414z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function EmptyTab({ message }: { message: string; }) {
  return (
    <div className="text-center py-20 text-muted-foreground">
      <p>{message}</p>
    </div>
  );
}

export default ReadingListPage;