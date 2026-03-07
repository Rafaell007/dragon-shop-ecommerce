import { mockProducts } from "../../../data/mockProducts";
import "./ProductsGrid.css";
import { useCart } from "../../../context/CartContext";





export function ProductsGrid() {

  const {addToCart} = useCart();


    return(
        <>
        <div className="products-grid-container">
            {mockProducts.map((product)=>{
                return(
                    <div className="product-container">
                        <div className="product-image-container">
                            <img src={product.image} alt={product.name} />
                        </div>
                        <div className="product-name-container">
                            <p>{product.name}</p>
                        </div>
                        <div className="product-price-container">
                            <p>${(product.priceCents / 100).toFixed(2)}</p>
                        </div>
                        <div className="product-quantity-container">
                            <select name="" id="">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </select>
                        </div>
                        <button onClick={()=>addToCart(product)}className="add-to-cart-button">Add to Cart</button>
                    </div>
                )
            })}

        </div>
        </>
    )
}