import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  getCategoryPageTitle,
  getAllowedDummyCategorySlugs,
} from "../../../constants/platziCategories";
import { Header } from "../../header/Header";
import { ProductsGrid } from "../home/ProductsGrid";
import "./ProductsPage.css";


const DUMMYJSON_PRODUCTS = "https://dummyjson.com/products";


export function ProductsPage() {
  const { categorySlug } = useParams();
  const [products, setProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(12);

  useEffect(() => {
    let cancelled = false;

    const loadProducts = async () => {
      const response = await axios.get(DUMMYJSON_PRODUCTS, {
        params: { limit: 200 },
      });
      const list = Array.isArray(response.data.products)
        ? response.data.products
        : [];

      const allowed = getAllowedDummyCategorySlugs(categorySlug);
      const filtered = list.filter((p) =>
        allowed ? allowed.includes(p.category) : true,
      );

      if (!cancelled) {
        setProducts(filtered);
      }
    };

    loadProducts();

    return () => {
      cancelled = true;
    };
  }, [categorySlug]);

  const displayedProducts = products.slice(0, visibleCount );
  const hasMore = visibleCount < products.length;

  const pageTitle = getCategoryPageTitle(categorySlug);

  return (
    <>
      <Header />
      <div className="products-page">
      <p className="products-page__counter">{displayedProducts.length} / {products.length} items</p>
        <div className="products-page__head">
          <h1 className="products-page__title">{pageTitle}</h1>
        </div>
        <ProductsGrid products={displayedProducts} />
        {hasMore && (
          <div className="products-page__load-more">
            <button
            type="button"
            onClick={ ()=> setVisibleCount(prev => prev + 12) }
            className="products-page__load-more-btn"

            >
              LOAD MORE
            </button>
          </div>
        )}
      </div>
    </>
  );
}
