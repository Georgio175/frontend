import React, { useEffect, useState } from "react";
import CardItem from "./CardItem";
import Image1 from "../../images/akoura.jpg";
import Image2 from "../../images/balou balaa.jpg";
import Image3 from "../../images/chabrouh.jpg";
import Image4 from "../../images/jezzin.jpg";
import Image5 from "../../images/kfarhelda.jpg";
import Image6 from "../../images/mazraat el toufah.jpg";
import Image7 from "../../images/oyoun samak.jpg";
import Image8 from "../../images/serjbel.jpg";

import "./Cards.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Cards() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const getData = () => {
    axios
      // .get("http://localhost/SeniorBackend/getServcies.php")
      .get("http://localhost/senior/getServcies.php")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="cards">
      <h1>Check out these epic destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            {data?.slice(0, 2).map((e) => (
              <CardItem
                key={e.id}
                src={Image1}
                text={e.short_description}
                id={e.id}
                label={e.name}
                onClick={() => navigate(`/Services/${e.id}`)}
              />
            ))}
          </ul>
          <ul className="cards__items">
            {data?.slice(2).map((e) => (
              <CardItem
                key={e.id}
                src={Image2}
                text={e.full_description}
                id={e.id}
                label={e.name}
                onClick={() => navigate(`/Services/${e.id}`)}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
