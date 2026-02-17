"use client";
import { Layout } from "@/components/Layout";
import { useState, useRef } from "react";
import { Plus, Image, X, Code, Play, Braces, MoreHorizontal, ImagePlus } from "lucide-react";
import { PublishModal } from "@/components/PublishModal";

const WritePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [showToolbar, setShowToolbar] = useState(false);
  const [coverImage, setCoverImage] = useState<string | undefined>();
  const [publishOpen, setPublishOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setCoverImage(reader.result as string);
      reader.readAsDataURL(file);
    }
    setShowToolbar(false);
  };

  return (
    <>
      <Layout onPublish={() => setPublishOpen(true)}>
        <div className="mx-auto max-w-[740px] px-6 py-10">
          {/* Cover image */}
          {coverImage && (
            <div className="relative mb-6 rounded overflow-hidden">
              <img src={coverImage} alt="Cover" className="w-full max-h-[400px] object-cover" />
              <button
                onClick={() => setCoverImage(undefined)}
                className="absolute top-3 right-3 bg-background/80 rounded-full p-1.5 hover:bg-background"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          )}

          <div className="mb-8">
            <textarea
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              className="w-full resize-none border-none bg-transparent text-[42px] font-bold font-serif leading-tight outline-none placeholder:text-muted-foreground/40"
              rows={1}
              onInput={(e) => {
                const target = e.target as HTMLTextAreaElement;
                target.style.height = "auto";
                target.style.height = target.scrollHeight + "px";
              }}
            />
          </div>

          {/* Toolbar */}
          <div className="flex items-center gap-2 mb-6">
            <button
              onClick={() => setShowToolbar(!showToolbar)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-dashed border-muted-foreground/30 text-muted-foreground hover:border-foreground hover:text-foreground transition-colors"
            >
              {showToolbar ? <X className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
            </button>
            {showToolbar && (
              <div className="flex items-center gap-1 animate-fade-in">
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/40 text-primary hover:bg-primary/10 transition-colors"
                >
                  <Image className="h-4 w-4" />
                </button>
                <button className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/40 text-primary hover:bg-primary/10 transition-colors">
                  <ImagePlus className="h-4 w-4" />
                </button>
                <button className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/40 text-primary hover:bg-primary/10 transition-colors">
                  <Play className="h-4 w-4" />
                </button>
                <button className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/40 text-primary hover:bg-primary/10 transition-colors">
                  <Code className="h-4 w-4" />
                </button>
                <button className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/40 text-primary hover:bg-primary/10 transition-colors">
                  <Braces className="h-4 w-4" />
                </button>
                <button className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/40 text-primary hover:bg-primary/10 transition-colors">
                  <MoreHorizontal className="h-4 w-4" />
                </button>
              </div>
            )}
            <input ref={fileInputRef} type="file" accept="image/*" onChange={handleImageSelect} className="hidden" />
          </div>

          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Tell your story..."
            className="w-full min-h-[60vh] resize-none border-none bg-transparent text-lg leading-[1.8] font-serif outline-none placeholder:text-muted-foreground/40"
          />
        </div>
      </Layout>

      <PublishModal
        open={publishOpen}
        onClose={() => setPublishOpen(false)}
        title={title}
        content={content}
        coverImage={coverImage}
      />
    </>
  );
};

export default WritePage;