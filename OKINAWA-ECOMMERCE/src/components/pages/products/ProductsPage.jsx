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
      <div className="products-page-container">
      <p className="products-page-items-count">{displayedProducts.length} / {products.length} items</p>
        <div className="products-page-header">
          <h1>{pageTitle}</h1>
        </div>
        <ProductsGrid products={displayedProducts} />
        {hasMore && (
          <div className="load-more-wrapper">
            <button
            onClick={ ()=> setVisibleCount(prev => prev + 12) }
            className="load-more-button"

            >
              LOAD MORE
            </button>
          </div>
        )}
      </div>
    </>
  );
}
