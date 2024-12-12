"use client";

import Link from "next/link";
import { BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";
import ThemeToggle from "@/components/reading/theme-toggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container px-4 mx-auto">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link 
              href="/" 
              className="flex items-center space-x-2 transition-transform hover:scale-105"
            >
              <div className="p-1.5 rounded-xl bg-gradient-to-br from-primary/50 to-primary/30">
                <BookOpen className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="font-bold text-lg tracking-tight">
                Reading Assistant
              </span>
            </Link>
          </div>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}