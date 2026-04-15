import { useState, useEffect } from "react";
import { Carousel } from "../../carousel/Carousel.jsx";
import { Product } from "../home/Product";
import axios from "axios";


export function AlsoLikeSection({ product }) {

    const [relatedProducts, setRelatedProducts] = useState([]);

    useEffect(() => {
        if (!product?.category) {
          setRelatedProducts([]);
          return;
        }
        let cancelled = false;
        (async () => {
          try {
            const { data } = await axios.get(
              `https://dummyjson.com/products/category/${encodeURIComponent(product.category)}`,
            );
            const list = Array.isArray(data.products) ? data.products : [];
            const filtered = list.filter((p) => p.id !== product.id).slice(0, 10);
            if (!cancelled) setRelatedProducts(filtered);
          } catch {
            if (!cancelled) setRelatedProducts([]);
          }
        })();
        return () => {
          cancelled = true;
        };
      }, [product?.id, product?.category]);

    return(
        <>
           
          {relatedProducts.length > 0 && (
            <section className="product-detail__related" aria-labelledby="also-like-heading">
              <h2 id="also-like-heading" className="product-detail__related-title">
                You may also like
              </h2>
              <Carousel
                items={relatedProducts}
                motionKey={product.id}
                renderSlide={(p) => <Product product={p} />}
                className="product-detail__carousel"
              />
            </section>
          )}
        </>
    )
}
