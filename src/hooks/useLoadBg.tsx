import { useEffect, useState } from "react";

export const useLoadBg = (bgUrl: string) => {
  const [isBgLoaded, setIsBgLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = bgUrl;
    img.onload = () => {
      setIsBgLoaded(true);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { isBgLoaded };
};
