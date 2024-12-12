"use client";

import { useState, useRef, useEffect } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export default function ReadingArea() {
  const [content, setContent] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [prevContent, setPrevContent] = useState("");

  const adjustHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  useEffect(() => {
    adjustHeight();
    // If content length changed significantly (paste operation)
    if (Math.abs(content.length - prevContent.length) > 1) {
      const textarea = textareaRef.current;
      if (textarea) {
        textarea.setSelectionRange(0, 0);
        textarea.focus();
      }
    }
    setPrevContent(content);
  }, [content, prevContent]);

  const handleClear = () => {
    setContent("");
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="relative">
        {content && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-2 text-muted-foreground hover:text-foreground"
            onClick={handleClear}
            title="Clear text"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
        <Textarea 
          ref={textareaRef}
          placeholder="Paste or type your text here..."
          className="min-h-[500px] p-8 overflow-hidden"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
      </div>
    </div>
  );
}