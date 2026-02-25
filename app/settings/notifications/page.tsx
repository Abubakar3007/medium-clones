import SectionTitle from '@/components/SectionTitle'
import SettingLayout from '@/components/SettingLayout'
import SettingsRow from '@/components/SettingsRow'
import { Checkbox } from '@/components/ui/checkbox'
import { Separator } from '@/components/ui/separator'
import { authors } from "@/app/lib/mock-data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronDown } from 'lucide-react'

const page = () => {
  return (
    <SettingLayout>
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
    </SettingLayout>
  )
}

export default page