import ReadingArea from "@/components/reading/reading-area";
import { Card } from "@/components/ui/card";
import { BookOpen, Moon, Sun } from "lucide-react";

const features = [
  {
    title: "Customizable Theme",
    description: "Switch between light and dark modes for comfortable reading in any environment.",
    icon: Sun
  },
  {
    title: "Night Shift Mode",
    description: "Reduce eye strain with adjustable screen warmth for late-night reading sessions.",
    icon: Moon
  },
  {
    title: "Distraction-Free Reading",
    description: "Clean, minimalist interface that helps you focus on what matters - the content.",
    icon: BookOpen
  }
];

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          Enhance Your Reading Experience
        </h1>
        <p className="text-lg text-muted-foreground">
          A modern reading assistant that helps you focus and comprehend better.
        </p>
      </div>

      <ReadingArea />

      <div className="mt-16">
        <h2 className="text-2xl font-semibold text-center mb-8">Features</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature) => (
            <Card key={feature.title} className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-primary/10 mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}