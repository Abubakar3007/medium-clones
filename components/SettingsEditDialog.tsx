"use client";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { X } from 'lucide-react';

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
      <DialogContent className="max-w-[540px] p-0 rounded-lg">
        <DialogHeader className="px-6 pt-10 pb-0">
          <DialogTitle className="text-xl text-center font-medium">{title}</DialogTitle>
        </DialogHeader>

        <div className="px-8 pb-8 pt-4 space-y-3">
          <Label htmlFor="name" className="mb-2 block">Username</Label>
          <Input
            type={type}
            value={value || fieldValue}
            onChange={(e) => setFieldValue(e.target.value)}
          />
          {description && (
            <p className="text-xs text-muted-foreground">{description}</p>
          )}
          <div className="flex items-center justify-end gap-3 pt-2">
            {/* Cancel button */}
            <Button
              variant="ghost"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
            {/* Save button */}
            <Button
              variant="secondary"
              onClick={() => onOpenChange(false)}
            >
              Save
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
