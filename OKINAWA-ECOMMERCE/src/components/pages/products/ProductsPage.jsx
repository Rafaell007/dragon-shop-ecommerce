import { useMemo } from "react";
import { useParams, useSearchParams } from "react-router";
import { mockProducts } from "../../../data/mockProducts";
import { Header } from "../../header/Header";
import { ProductsGrid } from "../home/ProductsGrid";

const PRESET_TAGS = {
  "new-in": ["new"],
  "flash-sale": ["sale"],
  "best-sellers": ["best-seller"],
  "men": ["men"],
  "women": ["women"],
  "kids": ["kids"],
  "themes": ["theme"],
};

export function ProductsPage() {
  const { preset } = useParams();
  const [searchParams] = useSearchParams();

  const presetTags = useMemo(()=>{
    if (!preset) return [];
    return PRESET_TAGS[preset] || []
  }, [preset])






  const tags = useMemo(() => {
  const rawTags = searchParams.get("tags") || "";

    return rawTags
      .split(",")
      .map((tag) => tag.trim().toLowerCase())
      .filter(Boolean);
  }, [searchParams]);

  const activeTags = useMemo(()=>{
    return [... new Set ([...presetTags, ...tags])];
  }, [presetTags, tags])

  const filteredProducts = useMemo(() => {
    if (activeTags.length === 0) return mockProducts;

    return mockProducts.filter((product) => {
      const productTags = (product.keywords || []).map((tag) =>
        tag.toLowerCase(),
      );
      return activeTags.every((tag) => productTags.includes(tag));
    });
  }, [activeTags]);

  return (
    <>
      <Header />
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

