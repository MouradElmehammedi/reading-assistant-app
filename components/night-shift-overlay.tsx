"use client";

import { create } from 'zustand';

interface NightShiftState {
  isEnabled: boolean;
  opacity: number;
  setEnabled: (enabled: boolean) => void;
  setOpacity: (opacity: number) => void;
}

export const useNightShift = create<NightShiftState>((set) => ({
  isEnabled: false,
  opacity: 50,
  setEnabled: (enabled) => set({ isEnabled: enabled }),
  setOpacity: (opacity) => set({ opacity: opacity }),
}));

export default function NightShiftOverlay() {
  const { isEnabled, opacity } = useNightShift();

  if (!isEnabled) return null;

  return (
    <div 
      className="fixed inset-0 bg-yellow-100 pointer-events-none z-[999] transition-opacity duration-300"
      style={{ mixBlendMode: 'multiply', opacity: opacity / 100 }}
    />
  );
}
