import { useState, useEffect } from "react";

export function useTheme() {
  const [isLight, setIsLight] = useState(() => document.body.classList.contains("light"));

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsLight(document.body.classList.contains("light"));
    });

    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  return isLight;
}
