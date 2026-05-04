import "./AboutUsCardsSection.css";
import card1 from "../../../assets/images/about-us/1.png";
import card2 from "../../../assets/images/about-us/2.png";
import card3 from "../../../assets/images/about-us/3.png";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function AboutUsCardsSection() {
  const sectionRef = useRef(null);
  const cardContainer = useRef(null);
  const stickyHeader = useRef(null);
  const isGapAnimationCompleted = useRef(false);
  const isFlipAnimationCompleted = useRef(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(max-width: 1099px)", () => {
        gsap.set(
          [
            cardContainer.current,
            stickyHeader.current,
            ".card-container__element",
          ],
          { clearProps: "all" }
        );
      });

      mm.add("(min-width: 1100px)", () => {
        ScrollTrigger.create({
          trigger: ".card-sticky",
          start: "top top",
          end: "+=200%",
          pin: true,
          pinSpacing: true,
          pinType: "transform",
          anticipatePin: 1,
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress;

            // 1. Nagłówek (10% - 25%)
            if (progress >= 0.1 && progress <= 0.25) {
              const headerProgress = gsap.utils.mapRange(0.1, 0.25, 0, 1, progress);
              const y = gsap.utils.mapRange(0, 1, 50, 0, headerProgress);
              gsap.set(stickyHeader.current, { opacity: headerProgress, y });
            } else if (progress < 0.1) {
              gsap.set(stickyHeader.current, { opacity: 0, y: 50 });
            } else if (progress > 0.25) {
              gsap.set(stickyHeader.current, { opacity: 1, y: 0 });
            }

            // 2. Skalowanie szerokości kontenera (0% - 25%)
            const startWidth = window.innerWidth * 0.5;
            const endWidth = window.innerWidth * 0.72;
            if (progress <= 0.25) {
              const containerWidth = gsap.utils.mapRange(0, 0.25, startWidth, endWidth, progress);
              gsap.set(cardContainer.current, { width: containerWidth });
            } else {
              gsap.set(cardContainer.current, { width: endWidth });
            }

            // 3. Gap + border-radius (~35%)
            if (progress >= 0.35 && !isGapAnimationCompleted.current) {
              gsap.to(cardContainer.current, { gap: "20px", duration: 0.3 });
              gsap.to(".card-container__element", { borderRadius: "15px", duration: 0.3 });
              isGapAnimationCompleted.current = true;
            } else if (progress < 0.35 && isGapAnimationCompleted.current) {
              gsap.to(cardContainer.current, { gap: "0px", duration: 0.3 });
              gsap.to("#card-1", { borderRadius: "15px 0 0 15px", duration: 0.3 });
              gsap.to("#card-2", { borderRadius: "0px", duration: 0.3 });
              gsap.to("#card-3", { borderRadius: "0 15px 15px 0", duration: 0.3 });
              isGapAnimationCompleted.current = false;
            }

            // 4. Flip 180° (~70%)
            if (progress >= 0.7 && !isFlipAnimationCompleted.current) {
              gsap.to(".card-container__element", {
                rotationY: 180,
                stagger: 0.1,
                duration: 0.5,
              });
              gsap.to("#card-1", { y: 20, rotationZ: -5, duration: 0.5 });
              gsap.to("#card-3", { y: 20, rotationZ: 5, duration: 0.5 });
              isFlipAnimationCompleted.current = true;
            } else if (progress < 0.7 && isFlipAnimationCompleted.current) {
              gsap.to(".card-container__element", {
                rotationY: 0,
                stagger: -0.1,
                duration: 0.5,
              });
              gsap.to(["#card-1", "#card-3"], { y: 0, rotationZ: 0, duration: 0.5 });
              isFlipAnimationCompleted.current = false;
            }
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="cards-section">
      <div className="card-intro">
        <span className="card-intro__eyebrow">— The Dragon Shop way</span>
        <h2 className="card-intro__title">
          A signature approach,<br />
          <em>built on three pillars.</em>
        </h2>
        <p className="card-intro__lead">
          Every choice we make — from the catalog to your doorstep — is shaped by three principles that define how we shop, and how you receive.
        </p>
      </div>

      <div className="card-sticky card-section">
        <div className="card-sticky__header" ref={stickyHeader}>
          <h3>Three pillars with one purpose</h3>
        </div>
        <div className="card-sticky__card-container" ref={cardContainer}>

          <div className="card-container__element" id="card-1">
            <div className="element-front">
              <img src={card1} alt="" />
            </div>
            <div className="element-back">
              <span className="element-back__num">( 01 )</span>
              <span className="element-back__tag">— pillar one</span>
              <h4>Curated <em>Selection</em></h4>
              <span className="element-back__divider"></span>
              <p>Every product handpicked across electronics, fashion, and home — only what's worth your space and your time.</p>
              <span className="element-back__cta">Quality, first.</span>
            </div>
          </div>
          <div className="card-container__element" id="card-2">
            <div className="element-front">
              <img src={card2} alt="" />
            </div>
            <div className="element-back">
              <span className="element-back__num">( 02 )</span>
              <span className="element-back__tag">— pillar two</span>
              <h4>Effortless <em>Discovery</em></h4>
              <span className="element-back__divider"></span>
              <p>Smart search, themed collections, and a wishlist that remembers — find exactly what fits, faster than ever.</p>
              <span className="element-back__cta">Speed meets ease.</span>
            </div>
          </div>
          <div className="card-container__element" id="card-3">
            <div className="element-front">
              <img src={card3} alt="" />
            </div>
            <div className="element-back">
              <span className="element-back__num">( 03 )</span>
              <span className="element-back__tag">— pillar three</span>
              <h4>Trusted <em>Delivery</em></h4>
              <span className="element-back__divider"></span>
              <p>Secure checkout, fast shipping, and hassle-free returns on every order — shop with zero friction.</p>
              <span className="element-back__cta">From cart to door.</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
