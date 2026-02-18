"use client";
import { Layout } from "@/components/Layout";
import { LeftSidebar } from "@/components/LeftSidebar";
import { SettingsEditDialog } from "@/components/SettingsEditDialog";
import { EditProfileDialog } from "@/components/EditProfileDialog";
import { authors } from "@/app/lib/mock-data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { ExternalLink, ChevronDown } from "lucide-react";
import { useState } from "react";

const tabs = ["Account", "Publishing", "Notifications", "Membership and payment", "Security and apps"];

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState("Account");
  const [editDialog, setEditDialog] = useState<{ open: boolean; title: string; value: string; description?: string; type?: string }>({
    open: false, title: "", value: "",
  });
  const [profileDialogOpen, setProfileDialogOpen] = useState(false);
  const author = authors[0];

  const openEdit = (title: string, value: string, description?: string, type?: string) => {
    setEditDialog({ open: true, title, value, description, type });
  };

  return (
    <Layout>
      <div className="flex">
        <LeftSidebar />
        <div className="flex-1">
          <div className="max-w-[680px] pt-10 pb-14 mx-auto">
            <h1 className="text-[42px] font-bold mb-14 animate-fade-in">Settings</h1>

            {/* Tabs */}
            <nav className="flex items-center gap-8 border-b border-divider mb-4 overflow-x-auto scrollbar-none">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-4 text-sm whitespace-nowrap transition-colors relative ${activeTab === tab
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                  {tab}
                  {activeTab === tab && (
                    <span className="absolute bottom-0 left-0 right-0 h-px bg-black" />
                  )}
                </button>
              ))}
            </nav>

            {/* Account Tab */}
            {activeTab === "Account" && (
              <div className="animate-fade-in space-y-0">
                {/* email */}
                <SettingsRow
                  label="Email address"
                  value="bakarazmi@gmail.com"
                  onClick={() => openEdit("Email address", "abubakarshaikh@gmail.com", "You can sign into Medium with this email address.")}
                />

                {/* username */}
                <SettingsRow
                  label="Username and subdomain"
                  value="@abubakarshaikh"
                  onClick={() => openEdit("Username and subdomain", "@abubakarshaikh")}
                />

                {/* profile information */}
                <SettingsRow
                  label="Profile information"
                  description="Edit your photo, name, pronouns, short bio, etc."
                  onClick={() => setProfileDialogOpen(true)}
                  rightContent={
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">John Doe</span>
                      <Avatar className="h-6 w-6">
                        <AvatarImage src={author.avatar} />
                        <AvatarFallback>J</AvatarFallback>
                      </Avatar>
                    </div>
                  }
                />

                {/* profile design */}
                <SettingsRow
                  label="Profile design"
                  description="Customize the appearance of your profile."
                  type
                  rightContent={<ExternalLink className="h-4 w-4 text-muted-foreground stroke-2" />}
                />

                {/* custom domain */}
                <SettingsRow
                  label="Custom domain"
                  description="Upgrade to a Medium Membership to redirect your profile URL to a domain like yourdomain.com."
                  rightContent={
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">None</span>
                      <ExternalLink className="h-4 w-4 text-muted-foreground stroke-2" />
                    </div>
                  }
                />

                {/* partner program */}
                <SettingsRow
                  label="Partner Program"
                  description="You are not enrolled in the Partner Program."
                  rightContent={<ExternalLink className="h-4 w-4 text-muted-foreground stroke-2" />}
                />

                {/* digest frequency */}
                <SettingsRow
                  label="Your Medium Digest frequency"
                  description="Adjust how often you see a new Digest."
                  rightContent={
                    <div className="flex items-center gap-1 text-primary text-sm cursor-pointer">
                      <span>Daily</span>
                      <ChevronDown className="h-4 w-4 ml-2" />
                    </div>
                  }
                />

                {/* provide feedback */}
                <SettingsRow
                  label="Provide Feedback"
                  description="Receive occasional invitations to share your feedback with Medium."
                  rightContent={<Checkbox />}
                />

                <Separator className="my-6" />

                {/* refine recommendations */}
                <SettingsRow
                  label="Refine recommendations"
                  description="Adjust recommendations by updating what you're following and more."
                  rightContent={<ExternalLink className="h-4 w-4 text-muted-foreground stroke-2" />}
                />

                {/* muted writers and publications */}
                <SettingsRow
                  label="Muted writers and publications"
                  rightContent={<ExternalLink className="h-4 w-4 text-muted-foreground stroke-2" />}
                />

                {/* blocked users */}
                <SettingsRow label="Blocked users" />

                <Separator className="my-6" />

                <div className="py-4">
                  <button className="text-sm font-medium text-destructive hover:underline">Deactivate account</button>
                  <p className="text-xs text-muted-foreground mt-1">Deactivating will suspend your account until you sign back in.</p>
                </div>

                <div className="py-4">
                  <button className="text-sm font-medium text-destructive hover:underline">Delete account</button>
                  <p className="text-xs text-muted-foreground mt-1">Permanently delete your account and all of your content.</p>
                </div>
              </div>
            )}

            {/* Publishing Tab */}
            {activeTab === "Publishing" && (
              <div className="animate-fade-in space-y-0">
                <SettingsRow
                  label="Manage publications"
                  isLink
                />

                <SettingsRow
                  label="Allow readers to leave private notes on your stories"
                  description="Private notes are visible to you and (if left in a publication) all Editors of the publication."
                  rightContent={<Checkbox defaultChecked />}
                />

                <SettingsRow
                  label="Manage tipping on your stories"
                  description="Readers can send you tips through the third-party platform of your choice."
                  rightContent={<span className="text-sm text-muted-foreground">Disabled</span>}
                />

                <Separator className="my-6" />

                <SettingsRow
                  label="Allow email replies"
                  description="Let readers reply to your stories directly from their email."
                  rightContent={<Checkbox />}
                />

                <SettingsRow
                  label="'Reply To' email address"
                  description="Shown to your subscribers when they reply."
                  rightContent={<span className="text-sm text-muted-foreground">abubakarshaikh@gmail.com</span>}
                  onClick={() => openEdit("Reply To email address", "abubakarshaikh@gmail.com")}
                />

                <SettingsRow
                  label="Import email subscribers"
                  description="Upload a CSV or TXT file containing up to 25,000 email addresses."
                  isLink
                  rightContent={<ExternalLink className="h-4 w-4 text-muted-foreground stroke-2" />}
                />
              </div>
            )}

            {/* Notifications Tab */}
            {activeTab === "Notifications" && (
              <div className="animate-fade-in mt-8">
                <h2 className="text-[32px] font-light mb-8">Email notifications</h2>

                <SectionTitle>Story recommendations</SectionTitle>

                <SettingsRow
                  label="New Medium Digest"
                  description="The best stories on Medium personalized based on your interests, as well as outstanding stories selected by our editors."
                  rightContent={<Checkbox defaultChecked />}
                />

                <SettingsRow
                  label="Recommended reading"
                  description="Featured stories, columns, and collections that we think you'll enjoy based on your reading history."
                  rightContent={<Checkbox defaultChecked />}
                />

                <Separator className="my-6" />

                <SectionTitle>From writers and publications</SectionTitle>

                <SettingsRow
                  label="New stories added to lists you've saved"
                  rightContent={<Checkbox defaultChecked />}
                />

                <SettingsRow
                  label="Manage email notifications"
                  rightContent={
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">Emilina Lomas, Jason McBride</span>
                      <div className="flex -space-x-1">
                        <Avatar className="h-6 w-6 border border-background relative z-20">
                          <AvatarImage src={authors[2].avatar} />
                          <AvatarFallback className="text-[8px]">E</AvatarFallback>
                        </Avatar>
                        <Avatar className="h-6 w-6 border border-background relative z-10">
                          <AvatarImage src={authors[3].avatar} />
                          <AvatarFallback className="text-[8px]">J</AvatarFallback>
                        </Avatar>
                      </div>
                    </div>
                  }
                />

                <Separator className="my-6" />

                <SectionTitle>Social activity</SectionTitle>

                <SettingsRow label="Follows and matching highlights" rightContent={<Checkbox defaultChecked />} />

                <SettingsRow label="Replies to your responses" rightContent={<Checkbox defaultChecked />} />

                <SettingsRow
                  label="Story mentions"
                  rightContent={
                    <div className="flex items-center gap-1 text-primary text-sm cursor-pointer">
                      <span>In network</span>
                      <ChevronDown className="h-4 w-4 ml-1" />
                    </div>
                  }
                />

                <Separator className="my-6" />

                <SectionTitle>For writers</SectionTitle>

                <SettingsRow label="Activity on your published stories" rightContent={<Checkbox defaultChecked />} />

                <SettingsRow label="Activity on your lists" rightContent={<Checkbox defaultChecked />} />

                <SettingsRow label="From editors about featuring your stories" rightContent={<Checkbox defaultChecked />} />

                <Separator className="my-6" />

                <SectionTitle>For publications</SectionTitle>

                <SettingsRow label="New submissions" rightContent={<Checkbox defaultChecked />} />

                <Separator className="my-6" />

                <SectionTitle>For Submission</SectionTitle>

                <SettingsRow label="Submission status changes" rightContent={<Checkbox defaultChecked />} />

                <Separator className="my-6" />

                <SectionTitle>Others from medium</SectionTitle>

                <SettingsRow label="New product features from Medium" rightContent={<Checkbox defaultChecked />} />

                <SettingsRow label="Infromation about mediu memberhip" rightContent={<Checkbox defaultChecked />} />

                <SettingsRow label="Writing updates and announcements" rightContent={<Checkbox defaultChecked />} />

                <Separator className="my-6" />

                <SectionTitle>Allow email notifications</SectionTitle>

                <SettingsRow label="You will stil recieve administrative emails even if this settings is off" rightContent={<Checkbox defaultChecked />} />

                <h2 className="text-[32px] font-bold mt-16">Push notifications</h2>

                <p className="text-muted-foreground text-sm mt-8">Open the Medium app from your mobile device to make changes to push notifications.</p>
              </div>
            )}

            {/* Membership Tab */}
            {activeTab === "Membership and payment" && (
              <div className="animate-fade-in">
                <SettingsRow
                  label="Upgrade to a Medium Membership"
                  description="Subscribe for unlimited access to the smartest writers and biggest ideas on Medium."
                  isLink
                  rightContent={<ExternalLink className="h-4 w-4 text-muted-foreground stroke-2" />}
                />
              </div>
            )}

            {/* Security Tab */}
            {activeTab === "Security and apps" && (
              <div className="animate-fade-in space-y-0">
                <div className="py-4">
                  <button className="text-sm font-medium text-destructive hover:underline">Sign out of all other sessions</button>
                  <p className="text-xs text-muted-foreground mt-1">Sign out of sessions in other browsers or on other computers.</p>
                </div>

                <SettingsRow
                  label="Download your information"
                  description="Download a copy of the information you've shared on Medium to a .zip file."
                  labelBold
                />

                <Separator className="my-6" />

                <SocialRow
                  icon={<span className="text-2xl w-6 grid place-i">Ⓜ</span>}
                  label="Create Mastodon account on @me.dm"
                  description="Join our premium instance exclusively for Medium members at me.dm."
                  rightContent={<ExternalLink className="h-4 w-4 text-muted-foreground stroke-2" />}
                />

                <SocialRow
                  icon={<span className="text-2xl w-6 grid place-items-center">Ⓜ</span>}
                  label="Connect Mastodon"
                  description="Add an existing Mastodon account from another instance."
                />

                <SocialRow
                  icon={<span className="text-2xl w-6 grid place-items-center font-bold text-[hsl(var(--primary))]">f</span>}
                  label="Connect Facebook"
                  description="We will never post to Facebook or message your friends without your permission."
                  rightContent={<ExternalLink className="h-4 w-4 text-muted-foreground stroke-2" />}
                />

                <SocialRow
                  icon={<span className="text-2xl w-6 grid place-items-center font-bold">𝕏</span>}
                  label="Connect X"
                  description="We will never post to X or message your followers without your permission."
                  rightContent={<ExternalLink className="h-4 w-4 text-muted-foreground stroke-2" />}
                />

                <SocialRow
                  icon={<span className="text-2xl w-6 grid place-items-center">G</span>}
                  label="Disconnect Google"
                  labelColor="text-primary"
                  description="You can now sign in to Medium using your Google account."
                  rightContent={<span className="text-sm text-muted-foreground">john@example.com</span>}
                />
              </div>
            )}
          </div>
        </div>

        {/* Right Sidebar - Suggested help articles */}
        <aside className="hidden lg:block w-[368px] shrink-0 pl-10 border-l border-divider">
          <div className="sticky top-20 pt-10">
            <h4 className="font-bold text-base mb-8">Suggested help articles</h4>

            <div className="space-y-4">
              <a href="#" className="block text-sm">Sign in or sign up to Medium</a>
              <a href="#" className="block text-sm">Your profile page</a>
              <a href="#" className="block text-sm">Writing and publishing your first story</a>
              <a href="#" className="block text-sm">About Medium's distribution system</a>
              <a href="#" className="block text-sm">Get started with the Partner Program</a>
            </div>
          </div>
        </aside>
      </div>

      <SettingsEditDialog
        open={editDialog.open}
        onOpenChange={(open) => setEditDialog((prev) => ({ ...prev, open }))}
        title={editDialog.title}
        value={editDialog.value}
        description={editDialog.description}
        type={editDialog.type}
      />

      <EditProfileDialog
        open={profileDialogOpen}
        onOpenChange={setProfileDialogOpen}
        profile={{ name: author.name, avatar: author.avatar, bio: author.bio }}
      />
    </Layout>
  );
};

function SettingsRow({ label, description, value, onClick, rightContent, isLink, type, labelBold, }: { label: string; description?: string; value?: string; onClick?: () => void; rightContent?: React.ReactNode; isLink?: boolean; type?: boolean; labelBold?: boolean; }) {
  return (
    <div
      className={`flex items-start justify-between py-4 ${onClick ? "cursor-pointer" : ""}`}
      onClick={onClick}
    >
      <div className="flex-1 min-w-0 pr-4">
        <p className={`text-sm ${labelBold || isLink ? "font-medium" : "font-light"} ${isLink ? "hover:underline cursor-pointer" : ""}`}>
          {label}
        </p>
        {description && (
          <p className="text-xs text-muted-foreground mt-1">{description}</p>
        )}
      </div>
      <div className="flex items-center gap-2 shrink-0">
        {value && <span className="text-sm text-muted-foreground font-light">{value}</span>}
        {rightContent}
      </div>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h3 className="font-medium text-base mb-2">{children}</h3>;
}

function SocialRow({ icon, label, description, rightContent, labelColor, }: { icon: React.ReactNode; label: string; description: string; rightContent?: React.ReactNode; labelColor?: string; }) {
  return (
    <div className="flex items-start gap-6 py-4">
      <div className="flex-shrink-0">{icon}</div>
      <div className="flex-1 min-w-0">
        <p className={`text-sm font-bold ${labelColor || ""}`}>{label}</p>
        <p className="text-xs text-muted-foreground mt-1">{description}</p>
      </div>
      {rightContent && <div className="flex-shrink-0">{rightContent}</div>}
    </div>
  );
}

export default SettingsPage;