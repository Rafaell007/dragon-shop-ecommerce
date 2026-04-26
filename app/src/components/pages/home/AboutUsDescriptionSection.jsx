import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/all";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

export function AboutUsDescriptionSection() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const paragraph = sectionRef.current.querySelector(
        ".about-us-description__text",
      );
      if (!paragraph) return;

      const split = SplitText.create(paragraph, {
        type: "words",
        wordsClass: "about-us-description__word",
      });

      gsap.set(split.words, { opacity: 0.05 });

      const wordsTween = gsap.to(split.words, {
        opacity: 1,
        ease: "none",
        duration: 1,
        stagger: { each: 1, from: "start" },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          pin: sectionRef.current,
          pinSpacing: true,
          pinReparent: true,
          scrub: 2.5,
          anticipatePin: 1,
          fastScrollEnd: true,
          invalidateOnRefresh: true,
          onLeave: (self) => self.animation && self.animation.progress(1),
          onLeaveBack: (self) =>
            self.animation && self.animation.progress(0),
        },
      });

      return () => {
        wordsTween.scrollTrigger?.kill();
        wordsTween.kill();
        split.revert();
      };
    },
    { scope: sectionRef },
  );

  return (
    <div ref={sectionRef} className="about-us-wrapper">
      <div className="about-us-description">
      <span className="about-us-description__eyebrow">— Our Story —</span>
      <p className="about-us-description__text">
        Asian dragon eccomerce shop focused on providing the best possible
        experience for our customers. We are a team of{" "}
        <em className="about-us-description__highlight">passionate</em>
        individuals who are dedicated to providing the best possible experience
        for our customers.
      </p>
      <button className="about-us-description__cta">
        <span className="about-us-description__cta-label">View More</span>
        <span className="about-us-description__cta-arrow" aria-hidden="true">
          &rarr;
        </span>
      </button>
      </div>
    </div>
  );
}
