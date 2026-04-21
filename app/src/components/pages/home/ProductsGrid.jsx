
import { Product } from "../products/Product";
import "./ProductsGrid.css";

export function ProductsGrid({products}) {
  return (
    <div className="products-grid">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}
