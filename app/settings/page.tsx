"use client";

import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "next-themes";
import { useState } from "react";

export default function Settings() {
  const { theme, setTheme } = useTheme();
  const [fontSize, setFontSize] = useState(16);
  const [autoRead, setAutoRead] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Settings</h1>
        
        <div className="space-y-6">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Theme</h2>
            <RadioGroup
              value={theme}
              onValueChange={setTheme}
              className="grid grid-cols-3 gap-4"
            >
              {["light", "dark", "system"].map((mode) => (
                <div key={mode}>
                  <RadioGroupItem value={mode} id={mode} className="peer sr-only" />
                  <Label
                    htmlFor={mode}
                    className="flex justify-center rounded-md border-2 border-muted p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary"
                  >
                    {mode.charAt(0).toUpperCase() + mode.slice(1)}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Reading</h2>
            <div className="space-y-6">
              <div>
                <Label className="mb-2 block">Font Size ({fontSize}px)</Label>
                <Slider
                  min={12}
                  max={24}
                  step={1}
                  value={[fontSize]}
                  onValueChange={([value]) => setFontSize(value)}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="auto-read">Auto-read new text</Label>
                <Switch
                  id="auto-read"
                  checked={autoRead}
                  onCheckedChange={setAutoRead}
                />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}