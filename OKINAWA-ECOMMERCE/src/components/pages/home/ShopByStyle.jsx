import "./ShopByStyle.css";
import shopMen from '../../../assets/images/home/shop-men.webp';
import shopWomen from '../../../assets/images/home/shop-women.webp';
import shopKids from '../../../assets/images/home/shop-kids.webp';
import {BsArrowRight} from 'react-icons/bs';




export function ShopByStyle() {
    return (
        <>
        <div className="wrapper">

     
        <div className="shop-by-style-header">
            <h2>Shop By Style</h2>
        </div>
         <div className="shop-by-style-container">
            <div className="style-item">
                <img src={shopMen} alt="shop men" />
                <div className="style-item-label">
                    <p>Men</p>
                    <BsArrowRight />
                </div>

            </div>
            <div className="style-item">
                <img src={shopWomen} alt="shop women" />
                <div className="style-item-label">
                    <p>Women</p>
                    <BsArrowRight />
                </div>
            </div>
            <div className="style-item">
                <img src={shopKids} alt="shop kids" />
                <div className="style-item-label">
                    <p>Kids</p>
                    <BsArrowRight />
                </div>
            </div>
        </div>
        </div>
        </>
    )
}