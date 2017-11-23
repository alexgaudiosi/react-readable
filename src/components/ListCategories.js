import React from "react";
import uuid from "uuid";

export default function ListCategories({ categories }) {
  if (!categories) {
    return <div> no data </div>;
  }

  return (
    <div className="categories box-shadow">
      {categories.length &&
        categories.map(category => (
          <div key={uuid.v4()} className="category">
            <h5>{category.name}</h5>
          </div>
        ))}
    </div>
  );
}
