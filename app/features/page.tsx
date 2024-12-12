import FeatureCard from "@/components/features/feature-card";
import { BookOpen, Highlighter, Volume2, Palette } from "lucide-react";

const features = [
  {
    icon: Highlighter,
    title: "Smart Highlighting",
    description: "Highlight and organize important passages for better recall.",
  },
  {
    icon: Volume2,
    title: "Text-to-Speech",
    description: "Listen to your text with natural-sounding voices.",
  },
  {
    icon: BookOpen,
    title: "Reading Tools",
    description: "Adjust text size, line spacing, and track reading progress.",
  },
  {
    icon: Palette,
    title: "Customization",
    description: "Personalize your reading environment with themes and fonts.",
  },
];

export default function Features() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-12">Features</h1>
      <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </div>
  );
}