import "./ProductDetailsPage.css";
import { Header } from "../../header/Header";


export function ProductDetailsPage() {
    return( 
        <>
        <Header />
        <div className="page-wrapper">
            <div className="description-container">
                <div className="product-image-container"></div>
                <div className="product-details-container">
                    <div className="product-name-container"></div>
                    <div className="product-price-container"></div>
                    <div className="product-quantity-container"></div>
                    <div className="add-to-cart-button"></div>
                    <div className="payment-methods-container"></div>
                </div>
            </div>
            <div className="also-like-container"></div>
            <Footer />

        </div>

        </>
    )
}