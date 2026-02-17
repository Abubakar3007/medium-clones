"use client";
import { Header } from "@/components/Header";

interface LayoutProps {
  children: React.ReactNode;
  hideHeader?: boolean;
  onPublish?: () => void;
}

export function Layout({ children, hideHeader, onPublish }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      {!hideHeader && <Header onPublish={onPublish} />}
      <main>{children}</main>
    </div>
  );
}
