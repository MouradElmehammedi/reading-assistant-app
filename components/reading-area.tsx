"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useTheme } from "next-themes";
import { Moon, Sun, Sunset } from "lucide-react";

export default function ReadingArea() {
  const [content, setContent] = useState("");
  const { setTheme } = useTheme();

  return (
    <>
      <div className="flex justify-end space-x-2 mb-4">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setTheme("light")}
          title="Light mode"
        >
          <Sun className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => setTheme("dark")}
          title="Dark mode"
        >
          <Moon className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => setTheme("system")}
          title="System theme"
        >
          <Sunset className="h-4 w-4" />
        </Button>
      </div>
      
      <Textarea
        placeholder="Paste or type your text here..."
        className="min-h-[300px] resize-none"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
    </>
  );
}