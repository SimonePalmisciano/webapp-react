import { useState } from "react";
import ProductList from "../components/ProductList/ProductList";
import useProduct from "../hooks/useProduct";
import useCategories from "../hooks/useCategories";

function ProductPage() {
  const { products, loading, error } = useProduct();
  const { categories } = useCategories();
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredProducts = selectedCategory
    ? products.filter(
        (product) =>
          Array.isArray(product.categories) &&
          product.categories.some((cat) => cat?.label === selectedCategory)
      )
    : products;

  if (loading) return <div className="container py-4">Caricamento prodotti...</div>;
  if (error) return <div className="container py-4 alert alert-danger">{error}</div>;

  return (
    <div className="container py-4">
      <h1 className="h4 mb-3">Prodotti</h1>

      <div className="mb-4">
        <p className="mb-2 fw-semibold">Filtra per categoria</p>
        <div className="d-flex flex-wrap gap-3">
          <label className="form-check-label">
            <input
              className="form-check-input me-2"
              type="radio"
              name="category"
              value=""
              checked={selectedCategory === ""}
              onChange={() => setSelectedCategory("")}
            />
            Tutte
          </label>

          {categories.map((category) => (
            <label key={category.slug} className="form-check-label">
              <input
                className="form-check-input me-2"
                type="radio"
                name="category"
                value={category.label}
                checked={selectedCategory === category.label}
                onChange={(e) => setSelectedCategory(e.target.value)}
              />
              {category.label.toLowerCase() === "burgers" ? "Panini" : category.label}
            </label>
          ))}
        </div>
      </div>

      <ProductList products={filteredProducts} />
    </div>
  );
}

export default ProductPage;