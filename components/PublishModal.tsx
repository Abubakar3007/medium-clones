import { useState } from "react";
import { X, Facebook, Linkedin, Link as LinkIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { topics } from "@/app/lib/mock-data";

interface PublishModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  content: string;
  coverImage?: string;
}

export function PublishModal({ open, onClose, title, content, coverImage }: PublishModalProps) {
  const router = useRouter();
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [topicInput, setTopicInput] = useState("");
  const [published, setPublished] = useState(false);
  const [copied, setCopied] = useState(false);

  const toggleTopic = (topic: string) => {
    if (selectedTopics.includes(topic)) {
      setSelectedTopics(selectedTopics.filter((t) => t !== topic));
    } else if (selectedTopics.length < 5) {
      setSelectedTopics([...selectedTopics, topic]);
    }
  };

  const handlePublish = () => {
    setPublished(true);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.origin + "/story/1");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-background flex items-start justify-center overflow-y-auto">
      <button onClick={onClose} className="absolute top-6 right-6 text-muted-foreground hover:text-foreground">
        <X className="h-6 w-6" />
      </button>

      {!published ? (
        <div className="w-full max-w-[900px] mx-auto px-6 py-20 flex flex-col md:flex-row gap-12">
          {/* Left - Preview */}
          <div className="flex-1">
            <h3 className="text-lg font-bold mb-4">Story Preview</h3>
            <div className="bg-secondary/40 rounded aspect-[16/9] flex items-center justify-center mb-4 overflow-hidden">
              {coverImage ? (
                <img src={coverImage} alt="" className="w-full h-full object-cover" />
              ) : (
                <p className="text-sm text-muted-foreground text-center px-8">
                  Include a high-quality image in your story to make it more inviting to readers.
                </p>
              )}
            </div>
            <h4 className="font-bold font-serif text-lg mb-2 border-b border-divider pb-2">
              {title || "Untitled story"}
            </h4>
            <p className="text-sm text-muted-foreground line-clamp-3">{content.slice(0, 140)}...</p>
            <p className="text-xs text-muted-foreground mt-2">{content.length}/140</p>
            <p className="text-xs text-muted-foreground mt-4">
              <strong>Note:</strong> Changes here will affect how your story appears in public places like Medium's
              homepage and in subscribers' inboxes — not the contents of the story itself.
            </p>
          </div>

          {/* Right - Publishing options */}
          <div className="flex-1 max-w-[360px]">
            <p className="text-sm mb-1">
              Publishing to: <strong>You</strong>
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              Add or change topics (up to 5) so readers know what your story is about
            </p>
            <input
              type="text"
              value={topicInput}
              onChange={(e) => setTopicInput(e.target.value)}
              placeholder="Add a topic..."
              className="w-full border border-input rounded-lg px-4 py-2.5 text-sm outline-none mb-2 bg-background focus:ring-1 focus:ring-foreground/10"
            />
            {topicInput && (
              <div className="flex flex-wrap gap-1 mb-3">
                {topics
                  .filter((t) => t.name.toLowerCase().includes(topicInput.toLowerCase()))
                  .slice(0, 5)
                  .map((t) => (
                    <button
                      key={t.id}
                      onClick={() => {
                        toggleTopic(t.name);
                        setTopicInput("");
                      }}
                      className="rounded-full bg-secondary px-3 py-1 text-xs hover:bg-secondary/80"
                    >
                      {t.name}
                    </button>
                  ))}
              </div>
            )}
            {selectedTopics.length > 0 && (
              <div className="flex flex-wrap gap-1 mb-4">
                {selectedTopics.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-tag px-3 py-1 text-xs text-tag-foreground flex items-center gap-1"
                  >
                    {t}
                    <button onClick={() => toggleTopic(t)} className="ml-1">
                      ×
                    </button>
                  </span>
                ))}
              </div>
            )}
            <div className="flex items-center gap-3 mt-6">
              <button
                onClick={handlePublish}
                className="rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Publish now
              </button>
              <button className="text-sm text-muted-foreground hover:text-foreground">Schedule for later</button>
            </div>
          </div>
        </div>
      ) : (
        /* Published success */
        <div className="w-full max-w-[600px] mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl font-bold font-serif mb-4">Your story is published!</h2>
          <p className="text-muted-foreground mb-8">Share your story with the world.</p>

          <div className="space-y-3 max-w-[320px] mx-auto">
            <button className="w-full flex items-center justify-center gap-3 rounded-full border border-input py-3 text-sm font-medium hover:bg-secondary transition-colors">
              <Facebook className="h-5 w-5 text-[hsl(220,80%,50%)]" />
              Share on Facebook
            </button>
            <button className="w-full flex items-center justify-center gap-3 rounded-full border border-input py-3 text-sm font-medium hover:bg-secondary transition-colors">
              <Linkedin className="h-5 w-5 text-[hsl(210,80%,45%)]" />
              Share on LinkedIn
            </button>
            <button className="w-full flex items-center justify-center gap-3 rounded-full border border-input py-3 text-sm font-medium hover:bg-secondary transition-colors">
              <span className="text-base font-bold">𝕏</span>
              Share on X
            </button>
            <button
              onClick={handleCopyLink}
              className="w-full flex items-center justify-center gap-3 rounded-full border border-input py-3 text-sm font-medium hover:bg-secondary transition-colors"
            >
              <LinkIcon className="h-5 w-5" />
              {copied ? "Link copied!" : "Copy link"}
            </button>
          </div>

          <button onClick={() => router.push("/story/1")} className="mt-8 text-sm text-primary hover:underline">
            View your story →
          </button>
        </div>
      )}
    </div>
  );
}
