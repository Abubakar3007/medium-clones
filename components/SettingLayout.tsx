"use client";

import { ReactNode } from "react";
import { Layout } from "./Layout";
import { usePathname } from "next/navigation";
import Link from "next/link";

const tabs = [
  { text: "Account", link: "/settings" },
  { text: "Publishing", link: "/settings/publishing" },
  { text: "Notifications", link: "/settings/notifications" },
  { text: "Membership and payment", link: "/settings/payment" },
  { text: "Security and apps", link: "/settings/security" },
];

interface SettingLayoutProps {
  children: ReactNode;
}

const SettingLayout = ({ children }: SettingLayoutProps) => {
  const pathname = usePathname();

const isActive = (link: string) => {
  if (link === "/settings") {
    return pathname === "/settings";
  }

  return pathname.startsWith(link);
};

  return (
    <Layout>
      <div className="max-w-[680px] pt-10 pb-14 mx-auto px-4">
        <h1 className="text-[42px] font-bold mb-14 animate-fade-in">
          Settings
        </h1>

        {/* Tabs */}
        <nav className="flex gap-8 border-b border-divider mb-4 overflow-x-auto">
          {tabs.map((tab) => (
            <Link
              key={tab.link}
              href={tab.link}
              className={`pb-4 text-sm whitespace-nowrap transition-colors relative ${
                isActive(tab.link)
                  ? "text-foreground font-medium"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.text}
              {isActive(tab.link) && (
                <span className="absolute bottom-0 left-0 right-0 h-px bg-black" />
              )}
            </Link>
          ))}
        </nav>

        {children}
      </div>
    </Layout>
  );
};

export default SettingLayout;