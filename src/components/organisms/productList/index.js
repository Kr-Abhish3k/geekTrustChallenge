import React from "react";
import ProductCard from "../card";
import data from "./mockData";

const ProductList = () => {
  return (
    <div className="productsListWrapper">
      <div className="productsList dFlexRow justify-content-spaceBetween">
        {data.map((product) => {
          return (
            <div className="productCardWrapper" key={product.id}>
              <ProductCard data={product} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
