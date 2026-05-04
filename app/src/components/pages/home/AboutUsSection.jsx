import "./AboutUsSection.css";
import { AboutUsLogoSection } from "./AboutUsLogoSection.jsx";
import { AboutUsDescriptionSection } from "./AboutUsDescriptionSection.jsx";
import { AboutUsCardsSection } from "./AboutUsCardsSection.jsx";

export function AboutUsSection() {
  return (
    <>
      <AboutUsLogoSection />
      <AboutUsDescriptionSection />
      <AboutUsCardsSection />
    </>
  );
}
