import "./Carousel.css";
export { ScrollBar, useScrollBar } from './ScrollBar'

export function Carousel({ emblaRef, slides }) {
  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">{index + 1}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}