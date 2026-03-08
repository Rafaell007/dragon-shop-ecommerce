import "./Hero.css";
import heroBanner from "../../assets/images/hero/hero-banner.webp";

export function Hero() {
    return(
        <>
        <div className='hero-banner-container'>
            <img src={heroBanner} alt="" />
            <div className="hero-banner-content">
                <div className="hero-banner-content-text">
                <h1>FEEL THE SPRING!</h1>
                <p>Discover the latest trends in Okinawa Shop now.</p>
                </div>
               
                    <button className="call-to-action-button" >Shop Now</button>
                
            </div> 
        </div>
        </>
    )
}