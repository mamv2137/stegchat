import { useState, useEffect } from 'react'

export default function useKeyCode(keyCode) {
  const [isKeyPressed, setKeyPressed] = useState();
  // Only allow fetching each keypress event once to prevent infinite loops
  if (isKeyPressed) {
    setKeyPressed(false);
  }

  useEffect(() => {
    function downHandler(event) {
      if (event.keyCode === keyCode) {
        setKeyPressed(true);
      }
    }
    window.addEventListener('keydown', downHandler);
    return () => window.removeEventListener('keydown', downHandler);
  }, [keyCode]);

  return isKeyPressed;
}