import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface SettingsEditDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  value: string;
  description?: string;
  type?: string;
}

export function SettingsEditDialog({ open, onOpenChange, title, value, description, type = "text" }: SettingsEditDialogProps) {
  const [fieldValue, setFieldValue] = useState(value);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[440px] p-0 rounded-lg">
        <DialogHeader className="px-6 pt-6 pb-0">
          <DialogTitle className="text-base font-semibold text-center">{title}</DialogTitle>
        </DialogHeader>
        <div className="px-6 pb-6 pt-4 space-y-4">
          <Input
            type={type}
            value={fieldValue}
            onChange={(e) => setFieldValue(e.target.value)}
            className="rounded-md"
          />
          {description && (
            <p className="text-xs text-muted-foreground">{description}</p>
          )}
          <div className="flex items-center justify-end gap-3 pt-2">
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
