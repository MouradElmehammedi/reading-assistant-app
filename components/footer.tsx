"use client";

import { Github, Twitter } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const footerLinks = [
  {
    title: "Product",
    links: [
      { name: "Features", href: "#features" },
      { name: "Feedback", href: "#feedback" },
      { name: "Changelog", href: "#changelog" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Documentation", href: "#docs" },
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Service", href: "#terms" },
    ],
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
 
        {/* <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
   
          <div className="col-span-2">
            <h2 className="text-lg font-semibold mb-4">Reading Assistant</h2>
            <p className="text-sm text-muted-foreground mb-4 max-w-xs">
              Enhance your reading experience with our modern, customizable reading assistant.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
 
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold mb-3">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div> */}

        {/* Bottom Section */}
        <div className="flex items-center justify-center space-y-4 p-6">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Reading Assistant. All rights reserved.
          </p>
          {/* <div className="flex items-center space-x-4 mt-0">
            <Link 
              href="#privacy" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy
            </Link>
            <div className="w-1 h-1 rounded-full bg-muted-foreground/50" />
            <Link 
              href="#terms" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms
            </Link>
          </div> */}
        </div>
 
    </footer>
  );
}
