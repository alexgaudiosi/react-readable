import React from "react";

export default function ListCategories({ categories }) {
  if (!categories) {
    return <div> no data </div>;
  }

  return (
    <div className="categories">
      {categories.length > 1 &&
        categories.map(category => (
          <div key={category.path} className="category">
            <h5>{category.name}</h5>
          </div>
        ))}
    </div>
  );
}
