import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { mockProducts } from "../../../data/mockProducts";
import { ProductsGrid } from "../home/ProductsGrid";

export function ProductsPage() {
  const [searchParams] = useSearchParams();

  const tags = useMemo(() => {
  const rawTags = searchParams.get("tags") || "";

    return rawTags
      .split(",")
      .map((tag) => tag.trim().toLowerCase())
      .filter(Boolean);
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    if (tags.length === 0) return mockProducts;

    return mockProducts.filter((product) => {
      const productTags = (product.keywords || []).map((tag) =>
        tag.toLowerCase(),
      );
      return tags.every((tag) => productTags.includes(tag));
    });
  }, [tags]);

  return (
    <>
      <ProductsGrid products={filteredProducts} />
    </>
  );
}

/* The URL changes (?tags=shoes,sport)
        ↓
useSearchParams detects the change
        ↓
useMemo updates tags = [“shoes”, “sport”]
        ↓
useMemo filters the products (only those with BOTH tags)
        ↓
ProductsGrid displays the filtered products */
