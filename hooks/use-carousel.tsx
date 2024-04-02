import { useEffect, useState } from "react";
import useEmblaCarousel, { EmblaCarouselType } from "embla-carousel";

type CarouselApi = {
 selectedScrollSnap: () => number;
 canScrollPrev: () => boolean;
 canScrollNext: () => boolean;
 scrollPrev: () => void;
 scrollNext: () => void;
 on: (event: string, callback: () => void) => void;
 off: (event: string, callback: () => void) => void;

};

export function useCarousel(): CarouselApi {
 const [carouselRef, api] = useEmblaCarousel({ loop: true });

 const [canScrollPrev, setCanScrollPrev] = useState(false);
 const [canScrollNext, setCanScrollNext] = useState(false);

 useEffect(() => {
  const onSelect = () => {
   setCanScrollPrev(api.canScrollPrev());
   setCanScrollNext(api.canScrollNext());
  };

  if (api) {
   onSelect();
   api.on("select", onSelect);
   return () => api.off("select", onSelect);
  }
 }, [api]);

 return {
  selectedScrollSnap: () => (api ? api.selectedScrollSnap() : 0),
  canScrollPrev: () => canScrollPrev,
  canScrollNext: () => canScrollNext,
  scrollPrev: () => api && api.scrollPrev(),
  scrollNext: () => api && api.scrollNext(),
  on: (event: string, callback: () => void) => api && api.on(event, callback),
  off: (event: string, callback: () => void) => api && api.off(event, callback),
 };
}
