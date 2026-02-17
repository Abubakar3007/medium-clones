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
  return <Layout>
    <div className="flex">
      <LeftSidebar />
      <div className="flex-1 max-w-[728px] px-6 py-10 mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-[42px] font-bold animate-fade-in">Your library</h1>
          {activeTab === "Your lists" && <Button onClick={() => setShowNewListDialog(true)} className="rounded-full bg-primary text-primary-foreground text-sm px-5">
            New list
          </Button>}
        </div>

        {/* Tabs */}
        <div className="flex gap-6 border-b border-divider mb-8">
          {tabs.map(tab => <button key={tab} onClick={() => setActiveTab(tab)} className={`pb-3 text-sm transition-colors relative ${activeTab === tab ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"}`}>
            {tab}
            {activeTab === tab && <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-foreground" />}
          </button>)}
        </div>

        {/* Tab content */}
        {activeTab === "Your lists" && <YourListsTab />}
        {activeTab === "Saved lists" && <EmptyTab message="You haven't saved any lists yet." />}
        {activeTab === "Highlights" && <HighlightsTab />}
        {activeTab === "Reading history" && <ReadingHistoryTab />}
        {activeTab === "Responses" && <EmptyTab message="You haven't written any responses yet." />}
      </div>
    </div>

    <NewListDialog open={showNewListDialog} onOpenChange={setShowNewListDialog} />
  </Layout>;
};

function NewListDialog({
  open,
  onOpenChange
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
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
      <DialogContent className="sm:max-w-[900px] min-h-[550px]">
        <div className="max-w-[680px] w-full py-11 px-14 flex-col flex-1 justify-center items-center flex mx-auto">
          <DialogHeader className="w-full">
            <DialogTitle className="text-[32px] text-left font-bold">Create new list</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 pt-2 mt-14 w-full">
            <div>
              <Input placeholder="Give it a name" value={name} onChange={e => setName(e.target.value.slice(0, 60))} className="border-border rounded-[4px] w-full" />
              <p className="text-xs text-muted-foreground text-right mt-1">{name.length}/60</p>
            </div>

            {!showDescription ? <button onClick={() => setShowDescription(true)} className="text-sm text-primary hover:underline">
              Add a description
            </button> : <textarea placeholder="Add a description..." value={description} onChange={e => setDescription(e.target.value.slice(0, 280))} className="w-full border border-border rounded-md px-3 py-2 text-sm resize-none h-20 focus:outline-none focus:ring-2 focus:ring-ring bg-background" />}

            <div className="flex items-center gap-2">
              <Checkbox id="private" checked={isPrivate} onCheckedChange={v => setIsPrivate(!!v)} />
              <label htmlFor="private" className="text-sm cursor-pointer">Make it private</label>
            </div>
          </div>
          <div className="flex justify-end gap-3 pt-20">
            <Button variant="outline" className="rounded-full" onClick={() => onOpenChange(false)}>Cancel</Button>
            <Button className="rounded-full" onClick={handleCreate} disabled={!name.trim()}>Create</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

// your lists
function YourListsTab() {
  return <div className="space-y-4">
    {mockLists.map(list =>
    (
      <Link
        href={`/list/${list.id}`}
        key={list.id}
        className="border border-divider rounded flex items-center gap-6 bg-secondary/30 hover:bg-secondary/50 transition-colors justify-between overflow-hidden"
      >
        {/* content */}
        <div className="flex-1 min-w-0 p-5">
          <div className="flex items-center gap-2 mb-3">
            <Avatar className="h-5 w-5">
              <AvatarImage src={list.author.avatar} />
              <AvatarFallback>{list.author.name[0]}</AvatarFallback>
            </Avatar>
            <span className="text-xs font-medium">{list.author.name}</span>
          </div>

          <h3 className="font-black text-xl mb-3">{list.name}</h3>

          <div className="flex justify-between gap-2 items-center">
            <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
              <span className="text-primary">{list.count} stories</span>
              {list.isPrivate && <Lock className="h-3 w-3" />}
            </div>

            <button><MoreHorizontal className="text-muted-foreground w-4" /></button>
          </div>
        </div>
        {/* images */}
        <div className="gap-0.5 w-[294px] flex items-end justify-end relative h-[140px]">
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
        </div>
      </Link>))}
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
  return <div className="space-y-4">
    {highlights.map(highlight => (
      <div key={highlight.id} className="border border-divider rounded p-6">
        <p className="text-sm text-[#6b6b6b] mb-3">
          From {highlight.source} by {highlight.author}
        </p>

        <p className="text-lg font-light">{highlight.text} <mark className="bg-primary/20">letter.</mark></p>
        <div className="flex justify-end mt-4">
          <Popover>
            <PopoverTrigger asChild>
              <button className="text-muted-foreground hover:text-foreground">
                <ChevronDown className="h-5 w-5" />
              </button>
            </PopoverTrigger>
            <PopoverContent align="end" className="w-36 p-1">
              <button onClick={() => handleUnhighlight(highlight.id)} className="w-full text-left px-4 py-2 text-sm hover:bg-accent rounded-sm">
                Unhighlight
              </button>
            </PopoverContent>
          </Popover>
        </div>
      </div>))}
  </div>;
}

// reading history
function ReadingHistoryTab() {
  const historyStories = stories.slice(0, 5);
  return <div>
    <div className="bg-secondary/50 rounded px-5 py-3 flex items-center justify-between mb-8">
      <span className="text-sm">You can clear your reading history for a fresh start.</span>
      <Button className="rounded-full border-destructive bg-red-700/80 text-white hover:bg-red-700 text-sm">
        Clear history
      </Button>
    </div>

    <div className="divide-y divide-divider">
      {historyStories.map(story => <div key={story.id} className="py-6 first:pt-0">
        <div className="flex items-center gap-2 mb-2 text-xs text-muted-foreground">
          {story.tags[0] && <>
            <span>☕</span>
            <span>In <strong className="text-foreground">{story.tags[0]}</strong></span>
            <span>by</span>
          </>}
          <Avatar className="h-4 w-4">
            <AvatarImage src={story.author.avatar} />
            <AvatarFallback>{story.author.name[0]}</AvatarFallback>
          </Avatar>
          <span className="font-medium text-foreground">{story.author.name}</span>
        </div>

        <div className="flex gap-6">
          <div className="flex-1 min-w-0">
            <Link href={`/story/${story.id}`} className="block">
              <h3 className="font-bold text-lg leading-snug hover:underline">{story.title}</h3>
              <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{story.subtitle}</p>
            </Link>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 mt-3 text-xs text-muted-foreground">
                {story.isMemberOnly && <Star className="h-3 w-3 fill-current text-primary" />}
                <span>{formatDate(story.publishedAt)}</span>
                <span>👏 {formatNumber(story.claps)}</span>
                <span>💬 {story.comments}</span>
              </div>
              <div className="flex items-center gap-3 mt-3">
                <button className="text-muted-foreground hover:text-foreground"><Trash2 className="h-4 w-4" /></button>
                <button className="text-muted-foreground hover:text-foreground"><Bookmark className="h-4 w-4" /></button>
                <button className="text-muted-foreground hover:text-foreground"><MoreHorizontal className="h-4 w-4" /></button>
              </div>
            </div>
          </div>
          <img src={story.coverImage || `https://picsum.photos/seed/${story.id}/200/134`} alt="" className="w-[120px] h-[80px] object-cover rounded flex-shrink-0" />
        </div>
      </div>)}
    </div>
  </div>;
}

function EmptyTab({
  message
}: {
  message: string;
}) {
  return <div className="text-center py-20 text-muted-foreground">
    <p>{message}</p>
  </div>;
}
export default ReadingListPage;