import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function GsapTextAnimation({ containerRef, productsLength }) {
  useGSAP(
    () => {
      const section = containerRef.current;
      if (!section) return;

      gsap.from(".trending__title", {
        opacity: 0,
        x: -100,
        immediateRender: false,
        duration: 0.7,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          once: true,
        },
      });
    },
    { scope: containerRef, dependencies: [productsLength] },
  );

  return null;
}
