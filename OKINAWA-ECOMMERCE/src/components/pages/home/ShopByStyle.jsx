import "./ShopByStyle.css";
import shopMen from '../../../assets/images/home/shop-men.webp';
import shopWomen from '../../../assets/images/home/shop-women.webp';
import shopKids from '../../../assets/images/home/shop-kids.webp';
import {BsArrowRight} from 'react-icons/bs';




export function ShopByStyle() {
    return (
        <>
        <div className="shop-style">

     
        <div className="shop-style__header">
            <h2 className="shop-style__title">Shop By Style</h2>
        </div>
         <div className="shop-style__grid">
            <div className="shop-style__card">
                <img className="shop-style__image" src={shopMen} alt="shop men" />
                <div className="shop-style__label">
                    <p className="shop-style__label-text">Men</p>
                    <BsArrowRight className="shop-style__label-icon" />
                </div>

            </div>
            <div className="shop-style__card">
                <img className="shop-style__image" src={shopWomen} alt="shop women" />
                <div className="shop-style__label">
                    <p className="shop-style__label-text">Women</p>
                    <BsArrowRight className="shop-style__label-icon" />
                </div>
            </div>
            <div className="shop-style__card">
                <img className="shop-style__image" src={shopKids} alt="shop kids" />
                <div className="shop-style__label">
                    <p className="shop-style__label-text">Kids</p>
                    <BsArrowRight className="shop-style__label-icon" />
                </div>
            </div>
        </div>
        </div>
        </>
    )
}
