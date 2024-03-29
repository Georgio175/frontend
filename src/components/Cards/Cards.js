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
import { CircularProgress } from "@mui/material";

function Cards() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState([]);
  const navigate = useNavigate();
  const getData = () => {
    setIsLoading(true);
    axios
      // .get("http://localhost/SeniorBackend/getServcies.php")
      .get("http://localhost/senior/getServcies.php")
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        alert(err);
        setIsLoading(false);
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
            {isLoading ? (
              <CircularProgress />
            ) : (
              data
                ?.slice(0, 2)
                .map((e) => (
                  <CardItem
                    key={e.id}
                    src={e.profile_image_link}
                    text={e.short_description}
                    id={e.id}
                    label={e.name}
                    onClick={() => navigate(`/Services/${e.id}`)}
                  />
                ))
            )}
          </ul>
          <ul className="cards__items">
            {isLoading ? (
              <CircularProgress />
            ) : (
              data
                ?.slice(2)
                .map((e) => (
                  <CardItem
                    key={e.id}
                    src={e.profile_image_link}
                    text={e.short_description}
                    id={e.id}
                    label={e.name}
                    onClick={() => navigate(`/Services/${e.id}`)}
                  />
                ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
