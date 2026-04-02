import "./ThemeCarousel.css";
import animalTheme from '../../../../../assets/images/home/animal-theme.webp';
import sportTheme from '../../../../../assets/images/home/sport-theme.webp';
import foodTheme from '../../../../../assets/images/home/food-theme.webp';
import okiyoeTheme from '../../../../../assets/images/home/okiyoe-theme.webp';
import cultureTheme from '../../../../../assets/images/home/culture-theme.webp';

const themes = [
  { src: animalTheme, alt: "animal theme" },
  { src: sportTheme, alt: "sport theme" },
  { src: foodTheme, alt: "food theme" },
  { src: okiyoeTheme, alt: "okiyoe theme" },
  { src: cultureTheme, alt: "culture theme" },
];

const slides = [...themes, ...themes, ...themes]; // I duplicate the slides to make the carousel infinite, witout big gaps

export function ThemeCarousel() {
  return (
    <section className="theme-carousel">
        <div className="theme-carousel__viewport">
          <div className="theme-carousel__track">
            {slides.map((theme, index) => (
              <div className="theme-carousel__slide" key={index}>
                <div className="theme-carousel__thumb">
                  <img className="theme-carousel__image" src={theme.src} alt={theme.alt} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  );
}
