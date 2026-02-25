"use client";
import Link from "next/link";
import { Layout } from "./Layout";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

const tabs = [
    {
        text: "Your lists",
        link: "/library"
    }, {
        text: "Saved lists",
        link: "/library/saved"
    },
    {
        text: "Highlights",
        link: "/library/highlights"
    },
    {
        text: "Reading history",
        link: "/library/reading-history"
    },
    {
        text: "Responses",
        link: "/library/response"
    }
];

const LibraryLayout = ({ children }: { children: React.ReactNode }) => {
    const [showNewListDialog, setShowNewListDialog] = useState(false);
    const pathname = usePathname();
    const isActive = (link: string) => {
        if (link === "/library") {
            return pathname === "/library";
        }
        return pathname.startsWith(link);
    };

    return (
        <Layout>
            <div className="flex-1 max-w-[680px] md:py-12 py-8 mx-auto md:px-0 px-6">
                <div className="flex items-center justify-between mb-12">
                    <h1 className="md:text-[42px] text-2xl font-bold animate-fade-in">Your library</h1>
                    {
                        pathname === "/library" && (
                            <Button
                                onClick={() => setShowNewListDialog(true)}
                                className="rounded-full bg-green-700 text-white text-base px-5"
                            >
                                New list
                            </Button>
                        )
                    }
                </div>
                {/* Tabs */}
                <nav className="flex gap-8 border-b border-divider mb-8 mt-6 overflow-x-auto">
                    {tabs.map((tab) => (
                        <Link
                            href={tab.link}
                            key={tab.link}
                            className={`pb-4 text-sm whitespace-nowrap transition-colors relative ${isActive(tab.link)
                                ? "text-black font-medium"
                                : "text-muted-foreground hover:text-black"
                                }`}
                        >
                            {tab.text}

                            {isActive(tab.link) && (
                                <span className="absolute bottom-0 left-0 right-0 h-px bg-black" />
                            )}
                        </Link>
                    ))}
                </nav>

                {children}
            </div>
            <NewListDialog open={showNewListDialog} onOpenChange={setShowNewListDialog} />
        </Layout>
    )
}

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
                <div className="max-w-[500px] w-full py-6 sm:px-14 flex-col flex-1 justify-center items-center flex mx-auto">
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

export default LibraryLayout