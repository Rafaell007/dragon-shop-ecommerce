import "./AccessoriesSection.css";
import accessoriesHeroImage from "../../../assets/images/home/accesories/accesories-hero-image.webp";
import blackDragonCapImage from "../../../assets/images/home/accesories/black-dragon-cap.png";
import catRamenPillowImage from "../../../assets/images/home/accesories/cat-ramen-pillow.webp";
import roosterMugImage from "../../../assets/images/home/accesories/rooster-cup.webp";
import dragonToteBagImage from "../../../assets/images/home/accesories/dragon-tote-bag.webp";
import { BsArrowRight } from "react-icons/bs";

export function AccesoriesSection() {
  return (
    <>
      <div className="accesories-section-wrapper">
        <div className="accesories-section__grid-container">
          <div className="grid-container__item">
            <img id="accesories-section__hero-image" src={accessoriesHeroImage} alt="Accessories hero image" />
            <p className="item_label-text"> shop accessories</p>
          </div>
          <div className="grid-container__item">
            <img src={catRamenPillowImage} alt="Cat ramen pillow" />
            <div className="grid-container__item-label">
              <p className="grid-container__item-label-text">Pillow</p>
              <BsArrowRight className="grid-container__item-label-icon" />
            </div>
           
          </div>
          <div className="grid-container__item">
            <img src={blackDragonCapImage} alt="Black dragon cap" />
            <div className="grid-container__item-label">
              <p className="grid-container__item-label-text">Cap</p>
              <BsArrowRight className="grid-container__item-label-icon" />
            </div>
          </div>
          <div className="grid-container__item">
          <img src={roosterMugImage} alt="Rooster mug" />
          <div className="grid-container__item-label">
            <p className="grid-container__item-label-text">Cup</p>
            <BsArrowRight className="grid-container__item-label-icon" />
          </div>
          </div>
          <div className="grid-container__item">
            <img src={dragonToteBagImage} alt="Dragon tote bag" />
            <div className="grid-container__item-label">
              <p className="grid-container__item-label-text">Tote bag</p>
              <BsArrowRight className="grid-container__item-label-icon" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}