"use client"
import { useParams } from "next/navigation";
import { EditProfileDialog } from "@/components/EditProfileDialog";
import { authors, stories,formatNumber} from "@/app/lib/mock-data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MoreHorizontal, Lock } from "lucide-react";
import { useState, useRef } from "react";
import Link from 'next/link';
import MoreDropdown from "@/components/MoreDropdown";
import ProfileLayout from "@/components/ProfileLayout";

const tabs = ["Lists", "About"];
// reading list demo data
const readingLists = [{
  id: "1",
  name: "Reading list",
  count: 3,
  isPrivate: true,
  thumbnails: ["https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=200&h=200&fit=crop", "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=200&h=200&fit=crop", "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=200&h=200&fit=crop"]
},
{
  id: "2",
  name: "My list",
  count: 2,
  isPrivate: false,
  thumbnails: ["https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=200&h=200&fit=crop", "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=200&h=200&fit=crop"]
}];

const ProfilePage = () => {
  const { id } = useParams();

  // author dummy data
  const author = authors.find(a => a.id === id) || authors[0];
  const authorStories = stories.filter(s => s.author.id === author.id);
  const [activeTab, setActiveTab] = useState("Lists");
  const [isFollowing, setIsFollowing] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const followingUsers = authors.slice(0, 2);
  const [about, setAbout] = useState('');
  const [moreProfile, setMoreProfile] = useState(false);

  const [dropdown, setDropdown] = useState<number | null>(null);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const toggleDropdown = (index: number) => {
    setDropdown((prev) => (prev === index ? null : index));
  };
  return (
    <ProfileLayout>
        <div className="space-y-10 animate-fade-in">
          {readingLists.map((list, index) =>
          (
            <div key={index} className="flex sm:items-center sm:flex-row flex-col justify-between rounded-sm border border-neutral-200/50 bg-neutral-100/30 hover:bg-secondary/30 transition-colors">
              <div className="flex-1 p-5">
                <Link href="">
                  <div className="flex items-center gap-2 mb-3">
                    {/* user name and profile */}
                    <Avatar className="h-5 w-5">
                      <AvatarImage src={author.avatar} />
                      <AvatarFallback className="text-[8px]">{author.name[0]}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm line-clamp-1 text-ellipsis text-muted-foreground">{author.name}</span>
                  </div>

                  {/* list name */}
                  <h3 className="font-bold text-xl">{list.name}</h3>
                </Link>

                <div className="flex items-center gap-2 mt-3 text-sm text-muted-foreground justify-between">
                  <div className="flex items-center gap-2">
                    {/* total story */}
                    <span className="text-neutral-500">{list.count} stories</span>
                    {/* private */}
                    {list.isPrivate && <Lock className="h-3.5 w-3.5 text-neutral-500" />}
                  </div>
                  {/* more action */}
                  <div className="relative">
                    <button
                      ref={(el) => {
                        buttonRefs.current[index] = el;
                      }}
                      onClick={() => toggleDropdown(index)}
                    >
                      <MoreHorizontal className="h-4 w-4" />
                    </button>

                    {dropdown === index && buttonRefs.current[index] && (
                      <MoreDropdown
                        setShowDropdown={() => setDropdown(null)}
                        buttonRef={buttonRefs.current[index]!}
                      />
                    )}
                  </div>
                </div>
              </div>

              <Link href="" className="flex gap-[2px] sm:ml-4 h-full md:w-[294px] sm:w-[160px]">
                {list.thumbnails.map((thumb, i) => {
                  const imageWidth = Math.floor(100 / (i + 1))
                  return (
                    <img key={i} src={thumb} alt="Reading imagge" className="md:h-36 h-[105px] object-cover" style={{ width: `${imageWidth}%` }} />
                  )
                })}
              </Link>
            </div>
          )
          )}
        </div>

      <EditProfileDialog open={editOpen} onOpenChange={setEditOpen} profile={{
        name: author.name,
        avatar: author.avatar,
        bio: author.bio
      }} />
    </ProfileLayout>
  );
};
export default ProfilePage;