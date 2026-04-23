import "./ProductDetailsPage.css";
import { Header } from "../../../header/Header";
import { useParams } from "react-router";
import axios from "axios";
import { useState, useEffect } from "react";
import freeShippingBanner from "../../../../assets/images/product-details/free-shipping.webp";
import { ProductImage } from "./ProductImage";
import { QuantitySection } from "./QuantitySection";
import { MemberBenefitsSection } from "./MemberBenefitsSection";
import { PaymentMethods } from "./PaymentMethods";
import { CommentsSection } from "./CommentsSection";
import { AlsoLikeSection } from "./AlsoLikeSection";
import { Footer } from "../../../footer/Footer";
import { LoadingIndicator } from "../../../loading-indicator/LoadingIndicator";


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
          setError("can't load product");
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
      {loading && <LoadingIndicator label="Loading product…" />}
      {!loading && error && <p role="alert">{error}</p>}
      {!loading && !error && product && (
        <>
        <div className="product-detail">
          <div className="product-detail__main">
            <ProductImage key={product.id} product={product} />
            <div className="product-detail__info">
              <h2 className="product-detail__title">{product.title}</h2>
              <p className="product-detail__price">{product.price} $ USD</p>
              <QuantitySection quantity={quantity} onQuantityChange={setQuantity} />
              <MemberBenefitsSection />
              <PaymentMethods product={product} quantity={quantity} />
              <img
                className="product-detail__shipping-banner"
                src={freeShippingBanner}
                alt="free shipping banner"
              />
             
              
            </div>
         
          </div>
        
          <div className="product-detail__description">
                <p className="product-detail__description-label">Description:</p>
                <p className="product-detail__description-text">{product.description}</p>
              </div>
          <CommentsSection key={product.id} reviews={reviews} productId={product.id} />
          <AlsoLikeSection product={product} />
        </div>
        <Footer footerType="footer" />
        </>
      )}
     
     
    </>
  );
}
