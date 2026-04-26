import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dragonShopLogo from "../../../assets/images/logo/Dragon-Shop-Logo.webp";
import aboutUsBottomImage from "../../../assets/images/home/about-us/moutain.png";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function AboutUsLogoSection() {
  const pinRef = useRef(null);
  const innerRef = useRef(null);

  useGSAP(
    () => {
      if (!pinRef.current || !innerRef.current) return;

      const logoTween = gsap.to(innerRef.current, {
        clipPath: "inset(0% 0% 100% 0%)",
        ease: "none",
        filter: "blur(10px)",
        scale: 0.8,
        opacity: 0,
       
       
        scrollTrigger: {
          trigger: pinRef.current,
          start: "top top",
          end: "bottom top",
          pin: pinRef.current,
          pinSpacing: false,
          pinReparent: true,
          scrub: true,
          anticipatePin: 1,
          fastScrollEnd: true,
          invalidateOnRefresh: true,
          onLeave: (self) => self.animation && self.animation.progress(1),
          onLeaveBack: (self) =>
            self.animation && self.animation.progress(0),
        },
      });

      return () => {
        logoTween.scrollTrigger?.kill();
        logoTween.kill();
      };
    },
    { scope: pinRef },
  );

  return (
    <div ref={pinRef} className="about-us-logo">
      <div ref={innerRef} className="about-us-logo__inner">
        <div className="about-us-logo__container">
          <img
            className="about-us-logo__brand"
            src={dragonShopLogo}
            alt="Brand logo"
          />
        </div>
        <div className="about-us-logo__mountain">
          <img
            className="about-us-logo__mountain-image"
            src={aboutUsBottomImage}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
