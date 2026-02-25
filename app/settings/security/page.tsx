import SettingLayout from '@/components/SettingLayout'
import SettingsRow from '@/components/SettingsRow'
import SocialRow from '@/components/SocialRow'
import { Separator } from '@/components/ui/separator'
import { ExternalLink } from 'lucide-react'
import React from 'react'

const page = () => {
  return (
    <SettingLayout>
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
    </SettingLayout>
  )
}

export default page