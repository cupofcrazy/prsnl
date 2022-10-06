import { useEffect, useState } from "react";

interface WindowProps {
  width?: number;
  height?: number;
}

export const useWindowResize = () => {
  const [windowSize, setWindowSize] = useState<WindowProps>({
    width: undefined,
    height: undefined,
  });

  const handleResize = () => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};
