"use client";
import LibraryLayout from "@/components/LibraryLayout";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

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

const page = () => {
    const [highlights, setHighlights] = useState(mockHighlights);
    const handleUnhighlight = (id: string) => {
        setHighlights(prev => prev.filter(h => h.id !== id));
    };
    return (
        <LibraryLayout>
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
        </LibraryLayout>
    )
}

export default page