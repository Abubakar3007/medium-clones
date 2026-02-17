"use client";
import { useState } from "react";
import { X, Settings, ThumbsUp, MoreHorizontal, ChevronDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { formatDate } from "@/app/lib/mock-data";
import { Button } from "@/components/ui/button";

interface Comment {
  id: string;
  author: { name: string; avatar: string };
  date: string;
  content: string;
  claps: number;
}

const allComments: Comment[] = [
  { id: "c1", author: { name: "Usha Dhar", avatar: "https://i.pravatar.cc/150?img=20" }, date: "2026-02-08", content: "What a brilliant, simple, impactful idea! Really enjoyed this - thank you.", claps: 4 },
  { id: "c2", author: { name: "Kay Schec", avatar: "https://i.pravatar.cc/150?img=25" }, date: "2026-02-10", content: "It's wild how our brain treats every tiny comment like a survival threat. I used to take everything personally until I realized most reactions weren't about the situation at all — they were old instincts firing. The blue-hair analogy is perfect... it...", claps: 2 },
  { id: "c3", author: { name: "Ted Jones", avatar: "https://i.pravatar.cc/150?img=30" }, date: "2026-02-10", content: "A problem with this is that literature is not math. There isn't a single correct way to do something. A piece of writing could be perfect for one -- let's say venue -- but horrible for another. Negative feedback could just be informing you that...", claps: 1 },
  { id: "c4", author: { name: "Maria Santos", avatar: "https://i.pravatar.cc/150?img=32" }, date: "2026-02-09", content: "This resonates deeply. The way we process criticism has so many evolutionary roots that we rarely acknowledge.", claps: 5 },
  { id: "c5", author: { name: "Leo Park", avatar: "https://i.pravatar.cc/150?img=35" }, date: "2026-02-09", content: "Beautifully written. I've been thinking about this topic for years and you've articulated it perfectly.", claps: 3 },
];

interface ResponsesPanelProps {
  open: boolean;
  onClose: () => void;
  commentCount: number;
}

export function ResponsesPanel({ open, onClose, commentCount }: ResponsesPanelProps) {
  const [responseText, setResponseText] = useState("");
  const [replyingTo, setReplyingTo] = useState<string | null>(null);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div className="absolute inset-0 bg-background/60" onClick={onClose} />
      <div className="relative w-full max-w-[420px] bg-background border-l border-divider shadow-xl overflow-y-auto animate-slide-in-right">
        {/* Header */}
        <div className="sticky top-0 bg-background z-10 flex items-center justify-between px-6 py-4 border-b border-divider">
          <h2 className="text-xl font-bold font-serif">Responses ({commentCount})</h2>
          <div className="flex items-center gap-2">
            <button className="text-muted-foreground hover:text-foreground p-1">
              <Settings className="h-5 w-5" />
            </button>
            <button onClick={onClose} className="text-muted-foreground hover:text-foreground p-1">
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Write response */}
        <div className="px-6 py-4 border-b border-divider">
          <div className="flex items-center gap-3 mb-3">
            <Avatar className="h-8 w-8">
              <AvatarImage src="https://i.pravatar.cc/150?img=12" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <span className="text-sm font-medium">You</span>
          </div>
          <textarea
            value={responseText}
            onChange={(e) => setResponseText(e.target.value)}
            placeholder="What are your thoughts?"
            className="w-full bg-secondary/30 rounded-lg p-3 text-sm min-h-[80px] resize-none outline-none placeholder:text-muted-foreground/60"
          />
          {responseText && (
            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center gap-3 text-muted-foreground">
                <button className="text-sm font-bold">B</button>
                <button className="text-sm italic">i</button>
              </div>
              <div className="flex items-center gap-2">
                <button className="text-sm text-muted-foreground" onClick={() => setResponseText("")}>Cancel</button>
                <button className="text-sm bg-primary text-primary-foreground rounded-full px-4 py-1.5">Respond</button>
              </div>
            </div>
          )}
        </div>

        {/* Sort */}
        <div className="px-6 py-3 border-b border-divider">
          <button className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground">
            MOST RELEVANT <ChevronDown className="h-3 w-3" />
          </button>
        </div>

        {/* Comments */}
        <div className="divide-y divide-divider">
          {allComments.map((comment) => (
            <div key={comment.id} className="px-6 py-5">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src={comment.author.avatar} />
                    <AvatarFallback>{comment.author.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">{comment.author.name}</p>
                    <p className="text-xs text-muted-foreground">{formatDate(comment.date)}</p>
                  </div>
                </div>
                <button className="text-muted-foreground hover:text-foreground p-1">
                  <MoreHorizontal className="h-4 w-4" />
                </button>
              </div>
              <p className="text-[15px] leading-relaxed mb-3">{comment.content}</p>
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-1 text-muted-foreground hover:text-foreground text-sm">
                  <ThumbsUp className="h-4 w-4" />
                  <span>{comment.claps}</span>
                </button>
                <button
                  className="text-sm font-medium underline text-muted-foreground hover:text-foreground"
                  onClick={() => setReplyingTo(replyingTo === comment.id ? null : comment.id)}
                >
                  Reply
                </button>
              </div>
              {replyingTo === comment.id && (
                <div className="mt-4 border-l-2 border-divider pl-4">
                  <p className="text-xs text-muted-foreground mb-2">Replying to {comment.author.name}</p>
                  <textarea className="w-full bg-secondary/30 rounded p-3 text-sm min-h-[60px] resize-none outline-none" placeholder="Write a reply..." />
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <button className="text-sm font-bold">B</button>
                      <button className="text-sm italic">i</button>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="text-sm text-muted-foreground" onClick={() => setReplyingTo(null)}>Cancel</button>
                      <button className="text-sm bg-primary/10 text-foreground rounded-full px-4 py-1.5">Respond</button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
