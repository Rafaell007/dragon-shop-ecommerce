import "./ProductDetailsPage.css";
import { Header } from "../../header/Header";
import { useParams } from "react-router";
import axios from "axios";
import { useState, useEffect } from "react";
import freeShippingBanner from "../../../assets/images/product-details/free-shipping.webp";
import { ProductImage } from "./ProductImage";
import { QuantitySection } from "./QuantitySection";
import { MemberBenefitsSection } from "./MemberBenefitsSection";
import { PaymentMethods } from "./PaymentMethods";
import { CommentsSection } from "./CommentsSection";
import { AlsoLikeSection } from "./AlsoLikeSection";


export function ProductDetailsPage() {
 



  const { productId } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    if (!productId) {
      setLoading(false);
      setError(null);
      setProduct(null);
      return;
    }

    let cancelled = false;

    const fetchProduct = async () => {
      setLoading(true);
      setError(null);
      try {
        const { data } = await axios.get(
          `https://dummyjson.com/products/${productId}`,
        );
        if (!cancelled) setProduct(data);
      } catch {
        if (!cancelled) {
          setError(" can't load product ");
          setProduct(null);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchProduct();
    return () => {
      cancelled = true;
    };
  }, [productId]);

  useEffect(() => {
    setQuantity(1);
  }, [product?.id]);

  const reviews = product?.reviews ?? [];
 

  return (
    <>
      <Header />
      {loading && <p>Loading...</p>}
      {!loading && error && <p role="alert">{error}</p>}
      {!loading && !error && product && (
        <div className="page-wrapper">
          <div className="description-container">
            <ProductImage key={product.id} product={product} />
            <div className="product-details__container">
              <h2 className="product-details__title">{product.title}</h2>
              <p className="product-details__price">{product.price} $ USD</p>
              <QuantitySection quantity={quantity} onQuantityChange={setQuantity} />
              <MemberBenefitsSection />
              <PaymentMethods product={product} quantity={quantity} />
              <img
                className="product-details__free-shipping-banner"
                src={freeShippingBanner}
                alt="free shipping banner"
              />
             
              
            </div>
         
          </div>
        
          <div className="product-details__description-section">
                <p className="product-details__description-label">Description:</p>
                <p className="product-details__description-text">{product.description}</p>
              </div>
          <CommentsSection reviews={reviews} productId={product.id} />
          <AlsoLikeSection product={product} />
        </div>
      )}
    </>
  );
}
