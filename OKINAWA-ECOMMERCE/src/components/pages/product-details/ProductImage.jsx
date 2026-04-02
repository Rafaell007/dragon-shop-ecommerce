import { useState } from "react";

export function ProductImage({ product }) {
    const [selectedImage, setSelectedImage] = useState(null);
    const displayedImage = selectedImage ?? product?.images?.[0] ?? product?.thumbnail;

    return (
        <>
        <div className="product-detail__gallery">
              <img
                className="product-detail__image"
                src={displayedImage}
                alt=""
              />
              
                <div className="product-detail__thumbs">
                {product.images.map((image)=>{
                  return (
                    <img src={image}
                    key={image}
                    className={`product-detail__thumb${selectedImage === image ? " product-detail__thumb--selected" : ""}`}
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
