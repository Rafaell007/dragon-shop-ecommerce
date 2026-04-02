import "./Hero.css";
import heroBanner from "../../assets/images/hero/hero-banner.webp";

export function Hero() {
    return(
        <>
        <div className="hero">
            <img className="hero__image" src={heroBanner} alt="" />
            <div className="hero__content">
                <div className="hero__text">
                <h1 className="hero__title">FEEL THE SPRING!</h1>
                <p className="hero__subtitle">Discover the latest trends in Okinawa Shop now.</p>
                </div>
               
                    <button type="button" className="hero__cta" >Shop Now</button>
                
            </div> 
        </div>
        </>
    )
}
