/**
 * Nawigacja sklepu dopasowana do kategorii DummyJSON (product.category).
 * @see https://dummyjson.com/docs/products
 */

export const NAV_CATEGORY_GROUPS = [
  {
    slug: "electronics",
    label: "Electronics",
    subcategories: [
      { slug: "smartphones", label: "Smartphones" },
      { slug: "laptops", label: "Laptops" },
      { slug: "tablets", label: "Tablets" },
      { slug: "mobile-accessories", label: "Mobile Accessories" },
    ],
  },
  {
    slug: "men",
    label: "Men",
    subcategories: [
      { slug: "tops", label: "Tops" },
      { slug: "mens-shirts", label: "Shirts" },
      { slug: "mens-shoes", label: "Shoes" },
      { slug: "mens-watches", label: "Watches" },
    ],
  },
  {
    slug: "women",
    label: "Women",
    subcategories: [
      { slug: "womens-dresses", label: "Dresses" },
      { slug: "womens-shoes", label: "Shoes" },
      { slug: "womens-bags", label: "Bags" },
      { slug: "womens-jewellery", label: "Jewellery" },
      { slug: "womens-watches", label: "Watches" },
      { slug: "sunglasses", label: "Sunglasses" },
    ],
  },
  {
    slug: "furniture",
    label: "Furniture",
    subcategories: [
      { slug: "furniture", label: "Furniture" },
      { slug: "home-decoration", label: "Home Decoration" },
      { slug: "kitchen-accessories", label: "Kitchen Accessories" },
    ],
  },
  {
    slug: "miscellaneous",
    label: "Miscellaneous",
    subcategories: [
      { slug: "beauty", label: "Beauty" },
      { slug: "fragrances", label: "Fragrances" },
      { slug: "groceries", label: "Groceries" },
      { slug: "skin-care", label: "Skin Care" },
      { slug: "motorcycle", label: "Motorcycle" },
      { slug: "vehicle", label: "Vehicle" },
      { slug: "sports-accessories", label: "Sports Accessories" },
    ],
  },
];

/** Kompatybilność wsteczna — użyj `NAV_CATEGORY_GROUPS`. */
export const PLATZI_CATEGORIES = NAV_CATEGORY_GROUPS.map(
  ({ slug, label }) => ({ slug, label }),
);

export function getCategoryPageTitle(routeSlug) {
  if (!routeSlug) return "Products";
  const group = NAV_CATEGORY_GROUPS.find((g) => g.slug === routeSlug);
  if (group) return group.label;
  for (const g of NAV_CATEGORY_GROUPS) {
    const sub = g.subcategories.find((s) => s.slug === routeSlug);
    if (sub) return sub.label;
  }
  return routeSlug.replace(/-/g, " ");
}


export function getPlatziCategoryLabel(slug) {
  return getCategoryPageTitle(slug);
}

/**
 * Slugi DummyJSON (`product.category`) do filtrowania listy.
 * `routeSlug` = grupa (np. electronics) albo podkategoria (np. smartphones).
 */
export function getAllowedDummyCategorySlugs(routeSlug) {
  if (!routeSlug) return null;
  const group = NAV_CATEGORY_GROUPS.find((g) => g.slug === routeSlug);
  if (group) return group.subcategories.map((s) => s.slug);
  for (const g of NAV_CATEGORY_GROUPS) {
    if (g.subcategories.some((s) => s.slug === routeSlug)) {
      return [routeSlug];
    }
  }
  return null;
}
