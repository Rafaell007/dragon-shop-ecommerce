import { ProductsSearch } from "./ProductsSearch";
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
  const [searchQuery, setSearchQuery] = useState("");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { categorySlug } = useParams();
  const [products, setProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(12);

  useEffect(() => {
    let cancelled = false;

    const loadProducts = async () => {
      setSearchQuery("");
      setVisibleCount(12);

      setLoading(true);
      setError(null);
      try {
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
      } catch {
        if (!cancelled) setError(" Failed to load products, Please try again.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    loadProducts();

    return () => {
      cancelled = true;
    };
  }, [categorySlug]);

  const searched = products.filter((product) => {
    return product.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase().trim());
  });
  const displayedProducts = searched.slice(0, visibleCount);
  const hasMore = visibleCount < searched.length;

  const pageTitle = getCategoryPageTitle(categorySlug);

  return (
    <>
      <Header />

      <div className="products-page">
        <div className="products-page__head">
          <h1 className="products-page__title">{pageTitle}</h1>
          <ProductsSearch
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </div>
        {loading && <p className="products-page__status">Loading...</p>}
        {!loading && error && (
          <p
            className="product-page__status products-page__status--error"
            role="alert"
          >
            {error}
          </p>
        )}
        {!loading && !error && (
          <>
            <ProductsGrid products={displayedProducts} />
            {hasMore && (
              <div className="products-page__load-more">
                <button
                  type="button"
                  onClick={() => setVisibleCount((prev) => prev + 12)}
                  className="products-page__load-more-btn"
                >
                  LOAD MORE
                </button>
              </div>
            )}
          </>
        )}
        <p className="products-page__counter">
          {displayedProducts.length} / {products.length} items
        </p>
      </div>
    </>
  );
}
