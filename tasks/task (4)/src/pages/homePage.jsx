import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";

const categories = [
  "smartphones",
  "laptops",
  "fragrances",
  "skincare",
  "groceries",
  "home-decoration",
];

function HomePage() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortOption, setSortOption] = useState("default");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    getData();
  }, [
    setProducts,
    setFilteredProducts,
    setSortOption,
    setCategoryFilter,
    setSearchQuery,
  ]);

  useEffect(() => {
    filterAndSortProducts();
  }, [
    products,
    sortOption,
    categoryFilter,
    searchQuery,
    filterAndSortProducts,
  ]);

  async function getData() {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      setProducts(response.data.products);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  function handleSortChange(event) {
    setSortOption(event.target.value);
  }

  function handleCategoryChange(event) {
    setCategoryFilter(event.target.value);
  }

  function handleSearchChange(event) {
    setSearchQuery(event.target.value);
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function filterAndSortProducts() {
    let filtered = [...products];

    if (categoryFilter !== "all") {
      filtered = filtered.filter(
        (product) => product.category === categoryFilter
      );
    }

    if (searchQuery) {
      filtered = filtered.filter(
        (product) =>
          product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    switch (sortOption) {
      case "priceLowToHigh":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "priceHighToLow":
        filtered.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    setFilteredProducts(filtered);
  }

  return (
    <div>
      <section>
            <label>Search:</label>
            <input
              type="search"
              placeholder="Search by title or description"
              aria-label="Search"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          <label>Sort by Price:</label>
          <select onChange={handleSortChange}>
            <option value="default">Default</option>
            <option value="priceLowToHigh">Price Low to High</option>
            <option value="priceHighToLow">Price High to Low</option>
          </select>
        <div>
          <label>Filter by Category:</label>
          <select onChange={handleCategoryChange}>
            <option value="all">All</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </section>
      <div className="products">
        {filteredProducts.map((item, index) => (
          <Card key={index} data={item}/>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
