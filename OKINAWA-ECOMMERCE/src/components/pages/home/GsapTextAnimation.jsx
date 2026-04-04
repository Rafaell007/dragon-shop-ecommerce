import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const TITLE_ANIMATION_ID = "title-animation";


export function playScrollRevealTitle(section, title, options = {}) {
  const {
    from = { opacity: 0, x: -100, immediateRender: false },
    to = {
      opacity: 1,
      x: 0,
      duration: 0.7,
      ease: "power2.inOut",
    },
    scrollTrigger = {
      start: "top bottom",
      once: true,
    },
  } = options;

  return gsap.fromTo(title, from, {
    ...to,
    scrollTrigger: {
      trigger: section,
      ...scrollTrigger,
    },
  });
}


export function GsapTextAnimation({ sectionRef, titleRef, dependencies = [] }) {
  useGSAP(
    () => {
      const section = sectionRef.current;
      const title = titleRef.current;
      if (!section || !title) return;
      playScrollRevealTitle(section, title);
    },
    { dependencies },
  );

  return null;
}
