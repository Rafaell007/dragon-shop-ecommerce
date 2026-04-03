import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./Hero.css";
import heroBanner from "../../assets/images/hero/hero_background-image.webp";

gsap.registerPlugin(useGSAP);

export function Hero() {
  const heroRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".hero__image", {
        opacity: 0,
        scale: 1.04,
        duration: 1.1,
        ease: "power2.out",
      });

      gsap.from(".hero__cta-wrap", {
        opacity: 0,
        y: 24,
        duration: 0.7,
        ease: "power2.out",
        delay: 0.35,
      });
    },
    { scope: heroRef },
  );

  
  useGSAP(() => {
    const container = document.querySelector("#hero");
    if (!container) return undefined;

    const half = 25;

    const xTo = gsap.quickTo("#cursor", "x", { duration: 0.4, ease: "power3" });
    const yTo = gsap.quickTo("#cursor", "y", { duration: 0.4, ease: "power3" });

    const onMove = (e) => {
      const rect = container.getBoundingClientRect();
      let x = e.clientX - rect.left - half;
      let y = e.clientY - rect.top - half;
      x = gsap.utils.clamp(0, Math.max(0, rect.width - half * 2), x);
      y = gsap.utils.clamp(0, Math.max(0, rect.height - half * 2), y);
      xTo(x);
      yTo(y);
    };

    container.addEventListener("mousemove", onMove);

    return () => {
      container.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <>
      <div ref={heroRef} id="hero" className="hero">
        <img className="hero__image" src={heroBanner} alt="" />
        <div className="hero__cta-wrap">
          <button type="button" className="hero__cta-button">
            shop now
          </button>
        </div>
        <div id="cursor" className="hero__cursor" aria-hidden />
      </div>
      
    </>
  );
}
