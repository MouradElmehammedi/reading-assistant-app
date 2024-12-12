import { Newspaper, Moon, Volume2, Languages } from "lucide-react";
import ReadingArea from "@/components/reading/reading-area";

export default function Home() {
  return (
    <main className="container mx-auto px-4">
      <div className="py-6 md:py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-violet-500 text-transparent bg-clip-text">
            Reading Assistant
          </h1>
          <p className="text-lg text-muted-foreground">
            A modern reading companion with text-to-speech and theme customization
          </p>
        </div>

        <ReadingArea />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <div className="flex flex-col items-center text-center p-4 rounded-lg bg-card">
            <Newspaper className="h-8 w-8 mb-2 text-blue-500" />
            <h3 className="font-semibold mb-2">Auto-Resizing Editor</h3>
            <p className="text-sm text-muted-foreground">
              Dynamic text area that grows with your content for comfortable reading and editing
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-4 rounded-lg bg-card">
            <Volume2 className="h-8 w-8 mb-2 text-blue-500" />
            <h3 className="font-semibold mb-2">Text-to-Speech</h3>
            <p className="text-sm text-muted-foreground">
              Listen to your text with French language support and voice selection
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-4 rounded-lg bg-card">
            <Moon className="h-8 w-8 mb-2 text-blue-500" />
            <h3 className="font-semibold mb-2">Theme Customization</h3>
            <p className="text-sm text-muted-foreground">
              Toggle between light and dark modes with night shift overlay for eye comfort
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-4 rounded-lg bg-card">
            <Languages className="h-8 w-8 mb-2 text-blue-500" />
            <h3 className="font-semibold mb-2">Voice Selection</h3>
            <p className="text-sm text-muted-foreground">
              Choose from available system voices for optimal listening experience
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}