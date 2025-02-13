import React from 'react';
import { useKonamiCode } from '../hooks/useKonamiCode';
import { Sparkles, Percent } from 'lucide-react';

export default function EasterEgg() {
  const konamiActivated = useKonamiCode();

  if (!konamiActivated) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 animate-fade-in">
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-8 rounded-xl shadow-2xl text-white text-center transform animate-bounce-in">
        <Sparkles className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
        <h3 className="text-2xl font-bold mb-4">Ewa dikke strijder hoezo weet ge deze ah neef??</h3>
        <div className="flex items-center justify-center gap-2 text-lg mb-4">
          <Percent className="w-6 h-6 text-yellow-300" />
          <p className="font-bold">Allez dan 10% korting</p>
        </div>
        <p className="text-sm text-blue-200">
          Gebruik code: KONAMI10 bij uw volgende aankoop
        </p>
      </div>
    </div>
  );
}