import axios from "axios";
import React, { useEffect, useState } from "react";
import PortfolioCard from "../../components/PortfolioCard";
import { useParams } from "react-router-dom";

const DetailsPortfolio = () => {
  const [data, setData] = useState([]);
  const { idd } = useParams();
  const getData = () => {
    axios(`https://fakestoreapi.com/products/${idd}`).then((res) =>
      setData(res.data)
    );
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div id="detailsPortfolio">
      <div className="container">
        <div className="detailsPortfolio py-10">
          {<PortfolioCard el={data} />}
        </div>
      </div>
    </div>
  );
};

export default DetailsPortfolio;
