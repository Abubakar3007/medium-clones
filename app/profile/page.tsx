"use client"
import { useParams} from "next/navigation";
import { Layout } from "@/components/Layout";
import { LeftSidebar } from "@/components/LeftSidebar";
import { StoryCard } from "@/components/StoryCard";
import { EditProfileDialog } from "@/components/EditProfileDialog";
import { authors, stories, formatNumber } from "@/app/lib/mock-data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MoreHorizontal, Lock } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from 'next/link';

const tabs = ["Home", "About"];
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

  const [activeTab, setActiveTab] = useState("Home");
  const [isFollowing, setIsFollowing] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [isGetStarted, setIsGetStarted] = useState(true);

  const followingUsers = authors.slice(0, 2);

  const [about, setAbout] = useState('');
  const [aboutImage, setAboutImage] = useState('');

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const imageUrl = URL.createObjectURL(file);
    setAboutImage(imageUrl);
  };

  // Save about
  const saveAbout = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAbout('');
    setAboutImage('');
  }

  // Cancel about
  const cancelAbout = () => {
    setIsGetStarted(true);
    setAbout('');
  }

  return <Layout>
    <div className="flex">
      {/* Main Content */}
      <div className="flex-1">
        <div className="max-w-[680px] pt-10 mx-auto">
          {/* Profile header */}
          <div className="flex items-center justify-between mb-2 animate-fade-in">
            <h1 className="text-[42px] font-bold">{author.name}</h1>
            <button className="p-2 text-muted-foreground hover:text-foreground">
              <MoreHorizontal className="h-5 w-5" />
            </button>
          </div>

          {/* Tabs */}
          <nav className="flex items-center gap-6 border-b border-divider mb-8 mt-6">
            {tabs.map(tab => <button key={tab} onClick={() => setActiveTab(tab)} className={`pb-3 text-sm transition-colors relative ${activeTab === tab ? "text-black" : "text-neutral-500"}`}>
              {tab}
              {activeTab === tab && <span className="absolute bottom-0 left-0 right-0 h-px bg-black" />}
            </button>)}
          </nav>

          {/* Home tab */}
          {activeTab === "Home" && <div className="space-y-10 animate-fade-in">
            {readingLists.map(list =>
            (
              <div key={list.id} className="flex items-center justify-between rounded-sm overflow-hidden border border-neutral-200/50 bg-neutral-100/30 hover:bg-secondary/30 transition-colors">
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

                  <div className="flex items-center gap-2 mt-3 text-sm text-muted-foreground">
                    {/* total story */}
                    <span className="text-neutral-500">{list.count} stories</span>
                    {/* private */}
                    {list.isPrivate && <Lock className="h-3.5 w-3.5 text-neutral-500" />}
                    {/* more action */}
                    <button className="ml-auto">
                      <MoreHorizontal className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <Link href="" className="flex gap-[2px] ml-4 h-full w-[294px]">
                  {list.thumbnails.map((thumb, i) => {
                    const imageWidth = Math.floor(100 / (i + 1))
                    return (
                      <img key={i} src={thumb} alt="Reading imagge" className="h-36 object-cover" style={{ width: `${imageWidth}%` }} />
                    )
                  })}
                </Link>
              </div>
            )
            )}
          </div>}

          {/* About tab */}
          {activeTab === "About" && <div className="py-6 animate-fade-in">
            {/* if user don't have about us */}
            <div className="mb-12 pb-12 border-b border-gray-200/80">
              {
                isGetStarted ? (
                  <div className="py-16 px-8 bg-neutral-100/50">
                    <div className="w-[70%] mx-auto text-center">
                      <h2 className="text-base mb-5">Tell the world about yourself</h2>
                      <p className="font-normal mb-5 leading-6">Here’s where you can share more about yourself: your history, work experience, accomplishments, interests, dreams, and more. You can even add images and use rich text to personalize your bio.</p>
                      <Button variant="outline" className="rounded-full border-black" onClick={() => setIsGetStarted(false)}>Get started</Button>
                    </div>
                  </div>
                ) : (
                  <div>
                    {/* Add image show here */}
                    {
                      aboutImage && (
                        <div className="mb-6">
                          <picture>
                            <img src={aboutImage} alt="" loading="lazy" className="w-full" />
                          </picture>
                        </div>
                      )
                    }

                    {/* form */}
                    <form onSubmit={saveAbout}>
                      {/* textare */}
                      <textarea
                        className="resize-none w-full border-none outline-none min-h-12 text-3xl"
                        value={about}
                        onChange={(e) => setAbout(e.target.value)}
                      ></textarea>
                      {/* input text field */}
                      <div className="flex justify-between gap-2 items-center pt-10">
                        {/* Select image */}
                        <label className="flex text-sm text-green-700 gap-2 items-center cursor-pointer">
                          <span className="w-8 h-8 border border-green-700 rounded-full grid place-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="24" fill="none" viewBox="0 0 24 24" className="stroke-green-700">
                              <path fill="#242424" fill-rule="evenodd" d="M15.75 13.75a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m0-1.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5" clip-rule="evenodd"></path>
                              <path fill="#242424" fill-rule="evenodd" d="M4.5 5h15A2.5 2.5 0 0 1 22 7.5v10a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 17.5v-10A2.5 2.5 0 0 1 4.5 5m0 1.25c-.69 0-1.25.56-1.25 1.25v5.366l3.308-3.308a.625.625 0 0 1 .884 0l9.192 9.192H19.5c.69 0 1.25-.56 1.25-1.25v-10c0-.69-.56-1.25-1.25-1.25zm10.366 12.5L7 10.884l-3.75 3.75V17.5c0 .69.56 1.25 1.25 1.25z" clip-rule="evenodd"></path>
                            </svg>
                          </span>
                          Insert photo
                          <input
                            className="d"
                            type="file"
                            hidden
                            onChange={handleImage}
                          />
                        </label>
                        {/* Save and Cancel buttons */}
                        <div className="flex gap-2">
                          <Button variant="outline" type="button" className="px-5 border-black rounded-full" onClick={cancelAbout}>Cancel</Button>
                          <Button variant="default" className="px-6 text-base bg-black text-white rounded-full">Save</Button>
                        </div>
                      </div>
                    </form>
                  </div>
                )
              }
            </div>

            <div>
              <p className="text-lg leading-relaxed font-serif">{author.bio}</p>
              <div className="mt-8 flex gap-10">
                <Link href="" className="font-medium text-green-700">{formatNumber(author.followers)} Followers</Link>
                <Link href="" className="font-medium text-green-700">{formatNumber(author.following)} Following</Link>
              </div>
            </div>
          </div>}
        </div>
      </div>
    </div>

    <EditProfileDialog open={editOpen} onOpenChange={setEditOpen} profile={{
      name: author.name,
      avatar: author.avatar,
      bio: author.bio
    }} />
  </Layout>;
};
export default ProfilePage;