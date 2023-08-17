import axios from "axios";
import React, { useEffect, useState } from "react";
import PortfolioCard from "../PortfolioCard";

const Portfolio = () => {
  const [data, setData] = useState([]);
  const getData = () => {
    axios(`https://fakestoreapi.com/products`).then((res) => setData(res.data));
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div id="portfolio">
      <div className="container">
        <div className="portfolio flex flex-wrap justify-center items-center gap-10 py-10">
          {data.map((el) => (
            <div key={el.id}>
              <PortfolioCard el={el} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
