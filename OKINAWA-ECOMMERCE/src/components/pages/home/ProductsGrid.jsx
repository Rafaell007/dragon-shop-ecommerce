
import { Product } from "./Product";
import "./ProductsGrid.css";

export function ProductsGrid({products}) {
  return (
    <div className="products-grid-container">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}
