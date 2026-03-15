import { mockProducts } from "../../../data/mockProducts";
import { Product } from "./Product";
import "./ProductsGrid.css";

export function ProductsGrid() {
  return (
    <div className="products-grid-container">
      {mockProducts.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}
