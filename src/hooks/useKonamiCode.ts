import { useEffect, useState } from 'react';

const KONAMI_CODE = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a'
];

export function useKonamiCode() {
  const [konamiActivated, setKonamiActivated] = useState(false);
  const [sequence, setSequence] = useState<string[]>([]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      const newSequence = [...sequence, event.key];
      
      if (newSequence.length > KONAMI_CODE.length) {
        newSequence.shift();
      }
      
      setSequence(newSequence);

      const isKonamiCode = newSequence.length === KONAMI_CODE.length &&
        newSequence.every((key, index) => key === KONAMI_CODE[index]);

      if (isKonamiCode) {
        setKonamiActivated(true);
        setTimeout(() => setKonamiActivated(false), 5000);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [sequence]);

  return konamiActivated;
}