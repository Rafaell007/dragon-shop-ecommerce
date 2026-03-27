import { useState } from "react";
import "./ProductImage.css";

export function ProductImage({ product }) {
    const [selectedImage, setSelectedImage] = useState(null);
    const displayedImage = selectedImage ?? product?.images?.[0] ?? product?.thumbnail;

    return (
        <>
        <div className="product-details__summary-image">
              <img
                className="product-details__image"
                src={displayedImage}
                alt=""
              />
              
                <div className="product-details_images-grid">
                {product.images.map((image)=>{
                  return (
                    <img src={image}
                    className={`product-details__image-grid-element ${selectedImage === image ? 'selected' : ''}`}
                    onClick={()=>{
                      setSelectedImage(image);
                    }}
                    alt="" />
                  )
                })}
              </div>
            </div>
        </>
    )
}