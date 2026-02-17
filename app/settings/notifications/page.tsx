import { Layout } from "@/components/Layout";
import { Bell, Heart, MessageCircle, UserPlus, Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { authors } from "@/app/lib/mock-data";

const notifications = [
  { id: "1", type: "clap", author: authors[0], message: 'clapped on your story "Why Every Developer Should Write"', time: "2h ago" },
  { id: "2", type: "follow", author: authors[2], message: "started following you", time: "5h ago" },
  { id: "3", type: "comment", author: authors[3], message: 'commented on "The Invisible Design Decisions That Shape Your Day"', time: "1d ago" },
  { id: "4", type: "highlight", author: authors[4], message: 'highlighted a passage in "Building a Second Brain with Plain Text Files"', time: "2d ago" },
  { id: "5", type: "follow", author: authors[1], message: "started following you", time: "3d ago" },
];

const iconMap = {
  clap: Heart,
  follow: UserPlus,
  comment: MessageCircle,
  highlight: Star,
};

const NotificationsPage = () => {
  return (
    <Layout>
      <div className="mx-auto max-w-[728px] px-6 py-10">
        <h1 className="text-3xl font-bold font-serif mb-8 animate-fade-in">Notifications</h1>

        <div className="space-y-1">
          {notifications.map((notif) => {
            const Icon = iconMap[notif.type as keyof typeof iconMap] || Bell;
            return (
              <div
                key={notif.id}
                className="flex items-start gap-4 p-4 rounded-lg hover:bg-surface-hover transition-colors animate-fade-in"
              >
                <Avatar className="h-10 w-10 flex-shrink-0">
                  <AvatarImage src={notif.author.avatar} />
                  <AvatarFallback>{notif.author.name[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="text-sm">
                    <span className="font-medium">{notif.author.name}</span>{" "}
                    <span className="text-muted-foreground">{notif.message}</span>
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">{notif.time}</p>
                </div>
                <Icon className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-1" />
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default NotificationsPage;