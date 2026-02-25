import LibraryLayout from "@/components/LibraryLayout"
import { stories} from "@/app/lib/mock-data";
import { Button } from "@/components/ui/button";
import { StoryCard } from "@/components/StoryCard";

const page = () => {
      const historyStories = stories.slice(0, 5);
    return (
        <LibraryLayout>
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
        </LibraryLayout>
    )
}

export default page