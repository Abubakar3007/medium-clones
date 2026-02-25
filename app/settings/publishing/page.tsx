"use client"
import SettingLayout from '@/components/SettingLayout'
import SettingsRow from '@/components/SettingsRow'
import { Checkbox } from '@/components/ui/checkbox'
import { Separator } from '@/components/ui/separator'
import { ExternalLink } from 'lucide-react'
import { useState } from "react";

const page = () => {
  const [editDialog, setEditDialog] = useState<{ open: boolean; title: string; value: string; description?: string; type?: string }>({
    open: false, title: "", value: "",
  });
  const openEdit = (title: string, value: string, description?: string, type?: string) => {
    setEditDialog({ open: true, title, value, description, type });
  };

  return (
    <SettingLayout>
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
    </SettingLayout>
  )
}

export default page