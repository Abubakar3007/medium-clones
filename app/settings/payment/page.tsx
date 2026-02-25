import SettingLayout from "@/components/SettingLayout"
import SettingsRow from "@/components/SettingsRow"
import { ExternalLink } from "lucide-react"

const page = () => {
  return (
    <SettingLayout>
      <div className="animate-fade-in">
        <SettingsRow
          label="Upgrade to a Medium Membership"
          description="Subscribe for unlimited access to the smartest writers and biggest ideas on Medium."
          isLink
          rightContent={<ExternalLink className="h-4 w-4 text-muted-foreground stroke-2" />}
        />
      </div>
    </SettingLayout>
  )
}

export default page