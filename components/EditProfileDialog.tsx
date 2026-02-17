import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ExternalLink } from "lucide-react";
import Link from 'next/link';

interface EditProfileDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  profile: {
    name: string;
    avatar: string;
    bio: string;
  };
}

export function EditProfileDialog({ open, onOpenChange, profile }: EditProfileDialogProps) {
  const [name, setName] = useState(profile.name);
  const [pronouns, setPronouns] = useState("");
  const [bio, setBio] = useState(profile.bio || "");

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[520px] p-0 rounded-lg">
        <DialogHeader className="px-8 pt-8 pb-0">
          <DialogTitle className="text-xl font-semibold text-center">Profile information</DialogTitle>
        </DialogHeader>

        <div className="px-8 pb-8 mt-8">
          {/* Photo */}
          <div className="mb-8">
            <label className="text-muted-foreground mb-3 block">Photo</label>
            <div className="flex items-center gap-6">
              <Avatar className="h-20 w-20">
                <AvatarImage src={profile.avatar} />
                <AvatarFallback className="text-xl">{profile.name[0]}</AvatarFallback>
              </Avatar>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <button className="font-medium text-primary hover:underline">Update</button>
                  <button className="font-medium text-destructive hover:underline">Remove</button>
                </div>
                <p className="text-sm text-muted-foreground">
                  Recommended: Square JPG, PNG, or GIF, at least 1,000 pixels per side.
                </p>
              </div>
            </div>
          </div>

          {/* Name */}
          <div className="mb-4">
            <label className="text-sm font-medium mb-2 block">Name*</label>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value.slice(0, 50))}
              className="rounded-[4px] bg-gray-100"
              maxLength={50}
            />
            <p className="text-xs text-muted-foreground text-right mt-2">{name.length}/50</p>
          </div>

          {/* Pronouns */}
          <div className="mb-4">
            <label className="text-sm font-medium mb-2 block">Pronouns</label>
            <Input
              value={pronouns}
              onChange={(e) => setPronouns(e.target.value.slice(0, 4))}
              placeholder="Add..."
              className="rounded-[4px] bg-gray-100"
              maxLength={4}
            />
            <p className="text-xs text-muted-foreground text-right mt-2">{pronouns.length}/4</p>
          </div>

          {/* Short bio */}
          <div>
            <label className="text-sm font-medium mb-2 block">Short bio</label>
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value.slice(0, 160))}
              className="w-full rounded-[4px] bg-gray-100 border border-input px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-ring resize-none"
              rows={3}
              maxLength={160}
            />
            <p className="text-xs text-muted-foreground text-right mt-2">{bio.length}/160</p>
          </div>

          <Separator />

          {/* About Page */}
          <Link href="" className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium">About Page</p>
              <p className="text-xs text-muted-foreground mt-2">
                Personalize with images and more to paint more of a vivid portrait of yourself than your 'Short bio.'
              </p>
            </div>
            <ExternalLink className="h-4 w-4 text-muted-foreground flex-shrink-0" />
          </Link>

          {/* Actions */}
          <div className="flex items-center justify-end gap-3 mt-8">
            <Button variant="outline" className="rounded-full" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button className="rounded-full bg-primary text-primary-foreground" onClick={() => onOpenChange(false)}>
              Save
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
