import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../../Data";
import ProductCart from "../../components/ProductCard";
const DetailsWomen = () => {
  const {id} = useParams()
  const res = data.find((el) => el.id === +id)
  return (
    <div id="detailsWomen">
      <div className="container">
        <div className="detailsWomen py-10">
          {
            <ProductCart el={res}/>
          }
        </div>
      </div>
    </div>
  );
};

export default DetailsWomen;
