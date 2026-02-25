const SettingsRow = ({ label, description, value, onClick, rightContent, isLink, type, labelBold, }: { label: string; description?: string; value?: string; onClick?: () => void; rightContent?: React.ReactNode; isLink?: boolean; type?: boolean; labelBold?: boolean; }) => {
    return (
        <div
            className={`flex items-start justify-between py-4 ${onClick ? "cursor-pointer" : ""}`}
            onClick={onClick}
        >
            <div className="flex-1 min-w-0 pr-4">
                <p className={`text-sm ${labelBold || isLink ? "font-medium" : "font-light"} ${isLink ? "hover:underline cursor-pointer" : ""}`}>
                    {label}
                </p>
                {description && (
                    <p className="text-xs text-muted-foreground mt-1">{description}</p>
                )}
            </div>
            <div className="flex items-center gap-2 shrink-0">
                {value && <span className="text-sm text-muted-foreground font-light">{value}</span>}
                {rightContent}
            </div>
        </div>
    )
}

export default SettingsRow