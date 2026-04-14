import "./AboutUsSection.css";
import dragonShopLogo from "../../../assets/images/logo/Dragon-Shop-Logo.png";
import aboutUsBottomImage from "../../../assets/images/home/about-us/moutain.png";
import { useRef, useEffect } from "react";
import { motion, useInView } from "motion/react";
import gsap from "gsap";

export function AboutUsSection() {
  const sectionRef = useRef(null);
  const hasPlayed = useRef(false);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!isInView || hasPlayed.current) return;
    const animationElement = sectionRef.current;
    if (!animationElement) return;
    hasPlayed.current = true;

    gsap.fromTo(
      animationElement,
      { opacity: 0,  },
      { opacity: 1,  ease: "power2.inOut", duration: 1.2 },
    );
  }, [isInView]);

  return (
    <>
      <div className="about-us-wrapper">
        <div className="about-us-container">
          <img
            className="about-us__brand-logo"
            src={dragonShopLogo}
            alt="Brand logo"
          />
          <h2 className="about-us__title">Comfort Meets Culture</h2>
          <p className="about-us__desciption">
            Asian dragon eccomerce shop focused on providing the best possible
            experience for our customers. We are a team of passionate
            individuals who are dedicated to providing the best possible
            experience for our customers. Asian eccomerce shop focused on
            providing the best possible experience for our customers.
          </p>
          <button className="about-us__cta-button">View More &gt;&gt; </button>
        </div>
      </div>
      <motion.div ref={sectionRef} initial={false} className="about-us__bottom-image-container">
        <img src={aboutUsBottomImage} alt="" />
      </motion.div>
    </>
  );
}
