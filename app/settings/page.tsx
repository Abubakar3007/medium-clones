"use client";
import { SettingsEditDialog } from "@/components/SettingsEditDialog";
import { EditProfileDialog } from "@/components/EditProfileDialog";
import { authors } from "@/app/lib/mock-data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { ExternalLink, ChevronDown } from "lucide-react";
import { useState } from "react";
import SettingLayout from "@/components/SettingLayout";
import SettingsRow from "@/components/SettingsRow";

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
    <SettingLayout>
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
    </SettingLayout>
  );
};

export default SettingsPage;