const SocialRow =({ icon, label, description, rightContent, labelColor, }: { icon: React.ReactNode; label: string; description: string; rightContent?: React.ReactNode; labelColor?: string; }) =>{
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

export default SocialRow