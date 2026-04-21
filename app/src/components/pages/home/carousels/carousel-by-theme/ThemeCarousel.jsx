import "./ThemeCarousel.css";
import { Link } from "react-router";
import animalTheme from '../../../../../assets/images/home/animal-theme.webp';
import sportTheme from '../../../../../assets/images/home/sport-theme.webp';
import foodTheme from '../../../../../assets/images/home/food-theme.webp';
import okiyoeTheme from '../../../../../assets/images/home/electronics-theme.webp';
import cultureTheme from '../../../../../assets/images/home/jewelery-theme.webp';

const themes = [
  { src: animalTheme, alt: "animal theme", path: "/products/category/groceries" },
  { src: sportTheme, alt: "sport theme", path: "/products/category/sports-accessories" },
  { src: foodTheme, alt: "food theme", path: "/products/category/groceries" },
  { src: okiyoeTheme, alt: "electronics theme", path: "/products/category/electronics" },
  { src: cultureTheme, alt: "jewelery theme", path: "/products/category/womens-jewellery" },
];

const slides = [...themes, ...themes, ...themes, ...themes]; // I duplicate the slides to make the carousel infinite, witout gaps

export function ThemeCarousel() {
  return (
    <section className="theme-carousel">
        <div className="theme-carousel__viewport">
          <div className="theme-carousel__track">
            {slides.map((theme, index) => (
              <div className="theme-carousel__slide" key={index}>
                <div className="theme-carousel__thumb">
                 <Link to={theme.path}> <img className="theme-carousel__image" src={theme.src} alt={theme.alt} /> </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
