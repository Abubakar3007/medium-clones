import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ThumbsUp, MoreHorizontal, Settings } from "lucide-react";
import { authors, formatDate } from "@/app/lib/mock-data";
import { Button } from "@/components/ui/button";

export interface Comment {
  id: string;
  author: { name: string; avatar: string };
  date: string;
  content: string;
  claps: number;
  replies?: Comment[];
}

const mockComments: Comment[] = [
  {
    id: "c1",
    author: { name: "Usha Dhar", avatar: "https://i.pravatar.cc/150?img=20" },
    date: "2026-02-08",
    content: "What a brilliant, simple, impactful idea! Really enjoyed this - thank you.",
    claps: 4,
  },
  {
    id: "c2",
    author: { name: "Kay Schec", avatar: "https://i.pravatar.cc/150?img=25" },
    date: "2026-02-10",
    content: "It's wild how our brain treats every tiny comment like a survival threat. I used to take everything personally until I realized most reactions weren't about the situation at all — they were old instincts firing. The blue-hair analogy is perfect...",
    claps: 2,
  },
  {
    id: "c3",
    author: { name: "Ted Jones", avatar: "https://i.pravatar.cc/150?img=30" },
    date: "2026-02-10",
    content: "A problem with this is that literature is not math. There isn't a single correct way to do something. A piece of writing could be perfect for one — let's say venue — but horrible for another. Negative feedback could just be informing you that...",
    claps: 1,
  },
];

interface ResponsesSectionProps {
  commentCount: number;
  onOpenPanel?: () => void;
}

export function ResponsesSection({ commentCount, onOpenPanel }: ResponsesSectionProps) {
  const [responseText, setResponseText] = useState("");
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [replyTexts, setReplyTexts] = useState<Record<string, string>>({});

  return (
    <div>
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-2xl font-bold font-serif">Responses ({commentCount})</h2>
        <button onClick={onOpenPanel} className="text-muted-foreground hover:text-foreground">
          <Settings className="h-5 w-5" />
        </button>
      </div>

      {/* Write response */}
      <div className="mb-10">
        <div className="flex items-start gap-3 mb-3">
          <Avatar className="h-8 w-8">
            <AvatarImage src="https://i.pravatar.cc/150?img=12" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium mt-1">You</span>
        </div>

        <div className="bg-secondary/50 rounded-[4px] pb-4 focus:ring-1 focus:ring-foreground/10 border border-secondary/50">
          <textarea
            value={responseText}
            onChange={(e) => setResponseText(e.target.value)}
            placeholder="What are your thoughts?"
            className="w-full border-none p-4 text-sm h-[100px] bg-transparent resize-none outline-none placeholder:text-muted-foreground/60"
          />
          {responseText && (
            <div className="bg-red flex justify-between gap-2 items-center px-4">
              <div>
                <button className="p-2 text-foreground" onClick={() => setResponseText("")}>
                  <svg width="21" height="21">
                    <path fill-rule="evenodd" d="M10.308 17.993h-5.92l.11-.894.783-.12c.56-.11.79-.224.79-.448V5.37c0-.225-.113-.336-.902-.448H4.5l-.114-.894h6.255c4.02 0 5.58 1.23 5.58 3.13 0 1.896-1.78 3.125-3.79 3.463v.11c2.69.34 4.25 1.56 4.25 3.57 0 2.35-2.01 3.69-6.37 3.69l.02.01h-.02zm-.335-12.96H8.967V10.5h1.23c1.788 0 2.79-1.23 2.79-2.683 0-1.685-1.004-2.803-3.006-2.803v.02zm-.223 6.36h-.783v5.588l1.225.23h.22c1.67 0 3.01-1.004 3.01-2.792 0-2.122-1.566-3.016-3.69-3.016h.018z"></path></svg>
                </button>

                <button className="p-2 text-foreground">
                  <svg width="21" height="21"><path fill-rule="evenodd" d="M9.847 18.04c-.533 0-2.027-.64-1.92-.853l2.027-7.68-.64-.214-1.387 1.494-.427-.427c.534-1.173 1.707-2.667 2.774-2.667.533 0 2.24.534 2.133.854l-2.133 7.786.533.214 1.6-1.067.427.427c-.64 1.066-1.92 2.133-2.987 2.133m2.347-11.733c-.96 0-1.387-.64-1.387-1.387 0-1.067.747-1.92 1.493-1.92.854 0 1.387.64 1.387 1.493-.107 1.067-.747 1.814-1.493 1.814"></path></svg>
                </button>
              </div>
              <div className="flex gap-1">
                <Button variant="outline">Cancel</Button>
                <Button variant="default">Respond</Button>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="border-t border-divider pt-10">
        {mockComments.map((comment) => (
          <div key={comment.id} className="pt-6 pb-4 border-b border-gray-200">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">

                <Avatar className="h-8 w-8">
                  <AvatarImage src={comment.author.avatar} />
                  <AvatarFallback>{comment.author.name[0]}</AvatarFallback>
                </Avatar>

                <div>
                  <p className="text-sm font-medium leading-6">{comment.author.name}</p>
                  <p className="text-xs text-muted-foreground">{formatDate(comment.date)}</p>
                </div>
              </div>

              <button className="text-muted-foreground hover:text-foreground p-1">
                <MoreHorizontal className="h-4 w-4" />
              </button>
            </div>

            <p className="text-[15px] leading-relaxed mb-4 mt-3 whitespace-pre-line">{comment.content}</p>

            <div className="flex items-center gap-6">
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

            {/* Reply input */}
            {replyingTo === comment.id && (
              <div className="mt-4 ml-6 border-l-2 border-divider pl-4">
                <p className="text-xs text-muted-foreground mb-2">Replying to {comment.author.name}</p>
                <textarea
                  value={replyTexts[comment.id] || ""}
                  onChange={(e) => setReplyTexts({ ...replyTexts, [comment.id]: e.target.value })}
                  className="w-full bg-secondary/30 rounded p-3 text-sm min-h-[60px] resize-none outline-none"
                  placeholder="Write a reply..."
                />
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <button className="text-sm font-bold">B</button>
                    <button className="text-sm italic">i</button>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="text-sm text-muted-foreground" onClick={() => setReplyingTo(null)}>
                      Cancel
                    </button>
                    <button className="text-sm bg-primary/10 text-foreground rounded-full px-4 py-1.5 hover:bg-primary/20">
                      Respond
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <button
        onClick={onOpenPanel}
        className="mt-8 text-sm font-medium text-primary hover:underline"
      >
        See all responses ({commentCount})
      </button>
    </div>
  );
}
