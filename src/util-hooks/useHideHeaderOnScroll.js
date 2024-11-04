import { useState, useRef, useEffect } from "react";

export const useHideHeaderOnScroll = () => {
  const [showHeader, setShowHeader] = useState(true);
  const lastScroll = useRef(window.scrollY)

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
    
      setShowHeader(currentScroll < lastScroll.current);

      lastScroll.current = currentScroll;
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return showHeader;
}