import "./AboutUsSection.css";
import dragonShopLogo from "../../../assets/images/logo/Dragon-Shop-Logo.png"
import aboutUsBottomImage from "../../../assets/images/home/about-us/moutain.png"
export function AboutUsSection() {
  return (
    <>
      <div className="about-us-wrapper">
        <div className="about-us-container">
          <img className="about-us__brand-logo" src={dragonShopLogo} alt="Brand logo" />
          <h2 className="about-us__title">Comfort Meets Culture</h2>
          <p className="about-us__desciption">
            Asian dragon
            eccomerce shop focused on providing the best possible experience for
            our customers. We are a team of passionate individuals who are
            dedicated to providing the best possible experience for our
            customers. Asian eccomerce shop focused on providing the best
            possible experience for our customers.
          </p>
          <button className="about-us__cta-button">View More &gt;&gt; </button>
        </div>
      </div>
      <div className="about-us__bottom-image-container">
          <img src={aboutUsBottomImage} alt="" />
     </div>
    </>
  );
}
