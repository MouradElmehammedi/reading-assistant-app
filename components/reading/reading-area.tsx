"use client";

import { useState, useRef, useEffect } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { X, Play, Pause, Power } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Language {
  code: string;
  name: string;
}

const languages: Language[] = [
  { code: "fr-FR", name: "French" },
];

export default function ReadingArea() {
  const [content, setContent] = useState("");
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedLang, setSelectedLang] = useState("fr-FR");
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoice, setSelectedVoice] = useState<string>("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [prevContent, setPrevContent] = useState("");
  const [synth, setSynth] = useState<SpeechSynthesis | null>(null);
  let utterance: SpeechSynthesisUtterance | null = null;

  useEffect(() => {
    setSynth(window.speechSynthesis);
    const loadVoices = () => {
      const availableVoices = synth.getVoices();
      setVoices(availableVoices);
      
      // Set default voice for the selected language
      const langVoices = availableVoices.filter(voice => voice.lang.startsWith(selectedLang));
      if (langVoices.length > 0) {
        setSelectedVoice(langVoices[0].name);
      }
    };

    if (synth) {
      loadVoices();
      if (synth.onvoiceschanged !== undefined) {
        synth.onvoiceschanged = loadVoices;
      }
    }
  }, [synth, selectedLang]);
 

  const adjustHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  useEffect(() => {
    adjustHeight();
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
    if (synth) {
      synth.cancel();
      setIsSpeaking(false);
      setIsPaused(false);
    }
    setContent("");
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  };

  const handleSpeak = () => {
    if (!synth) return;
    if (isSpeaking) return;

    utterance = new SpeechSynthesisUtterance(content);
    utterance.lang = selectedLang;
    
    // Set the selected voice if available
    const voice = voices.find(v => v.name === selectedVoice);
    if (voice) {
      utterance.voice = voice;
    }

    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = (event) => {
      console.error('Speech synthesis error:', event);
      setIsSpeaking(false);
    };

    synth.speak(utterance);
    setIsSpeaking(true);
    setIsPaused(false);
  };

  const handlePause = () => {
    if (synth && synth.speaking && !synth.paused) {
      synth.pause();
      setIsPaused(true);
    }
  };

  const handleResume = () => {
    if (synth && synth.paused) {
      synth.resume();
      setIsPaused(false);
    }
  };

  const handleStop = () => {
    if (synth) {
      synth.cancel();
      setIsSpeaking(false);
      setIsPaused(false);
    }
  };

  // Get available voices for the selected language
  const availableVoices = voices.filter(voice => voice.lang.startsWith(selectedLang));

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-center gap-2 mt-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 p-2 rounded-lg shadow-sm">
        <div className="flex items-center gap-2">
          <Select
            value={selectedLang}
            onValueChange={(value) => {
              setSelectedLang(value);
              const langVoices = voices.filter(voice => voice.lang.startsWith(value));
              if (langVoices.length > 0) {
                setSelectedVoice(langVoices[0].name);
              }
            }}
          >
            <SelectTrigger className="w-[120px] h-8 text-xs">
              <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent>
              {languages.map((lang) => (
                <SelectItem key={lang.code} value={lang.code} className="text-xs">
                  {lang.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {availableVoices.length > 0 && (
            <Select
              value={selectedVoice}
              onValueChange={setSelectedVoice}
            >
              <SelectTrigger className="w-[140px] h-8 text-xs">
                <SelectValue placeholder="Voice" />
              </SelectTrigger>
              <SelectContent>
                {availableVoices.map((voice) => (
                  <SelectItem key={voice.name} value={voice.name} className="text-xs">
                    {voice.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        </div>

        <div className="flex items-center gap-1">
          <Button
            size="sm"
            variant="ghost"
            onClick={handleSpeak}
            disabled={isSpeaking || !content}
            title="Read Aloud"
            className="h-8 px-2"
          >
            <Play className="h-4 w-4" />
          </Button>
          <Button
            size="sm"
            variant="ghost"
            onClick={isPaused ? handleResume : handlePause}
            disabled={!isSpeaking || !content}
            title={isPaused ? "Resume" : "Pause"}
            className="h-8 px-2"
          >
            <Pause className="h-4 w-4" />
          </Button>
          <Button
            size="sm"
            variant="ghost"
            onClick={handleStop}
            disabled={!isSpeaking || !content}
            title="Stop Reading"
            className="h-8 px-2"
          >
            <Power className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="relative mt-4">
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
            if (isSpeaking) {
              handleStop();
            }
            setContent(e.target.value);
          }}
        />
      </div>
    </div>
  );
}
