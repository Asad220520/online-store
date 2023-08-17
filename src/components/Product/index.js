import React, { useEffect } from "react";
import { data } from "../../Data/index";
import ProductCart from "../ProductCard";
import { getProduct } from "../../redux/Actions";
import { useDispatch, useSelector } from "react-redux";
const Product = () => {
  const { product } = useSelector((r) => r);
  const dispath = useDispatch();
  useEffect(() => {
    dispath(getProduct(data));
  }, []);

  return (
    <div id="product">
      <div className="container">
        <div className="product flex flex-wrap py-40 justify-center items-center gap-6">
          {product.map((el) => (
            <div key={el.id}>
              <ProductCart el={el} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
