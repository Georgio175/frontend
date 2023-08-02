// import React from "react";
// import CardItem from "./CardItem";
// import Image1 from "../../images/akoura.jpg";
// import Image2 from "../../images/balou balaa.jpg";
// import Image3 from "../../images/chabrouh.jpg";
// import Image4 from "../../images/jezzin.jpg";
// import Image5 from "../../images/kfarhelda.jpg";
// import Image6 from "../../images/mazraat el toufah.jpg";
// import Image7 from "../../images/oyoun samak.jpg";
// import Image8 from "../../images/serjbel.jpg";

// import "./Cards.css";

// function Cards() {
//   return (
//     <div className="cards">
//       <h1>Check out these epic destinations!</h1>
//       <div className="cards__container">
//         <div className="cards__wrapper">
//           <ul className="cards__items">
//             <CardItem
//               src={Image1}
//               text="Explore the hidden waterfall "
//               label="Akoura "
//               path="/services/activity"
//             ></CardItem>
//             <CardItem
//               src={Image2}
//               text="Most frequented waterfall"
//               label="Balou Balaa"
//               path="/services/activity"
//             ></CardItem>
//             <CardItem
//               src={Image3}
//               text="The Stunning Landscape"
//               label="Chabrouh"
//               path="/services/activity"
//             ></CardItem>
//           </ul>
//           <ul className="cards__items">
//             <CardItem
//               src={Image4}
//               text="Discover the greatest landmarks "
//               label="Jezzin"
//               path="/services/activity"
//             ></CardItem>
//             <CardItem
//               src={Image5}
//               text="Escape the noise of the city "
//               label="Kfarhelda"
//               path="/services/activity"
//             ></CardItem>
//             <CardItem
//               src={Image6}
//               text="Very rich panorama"
//               label="Mazraat El Toufah"
//               path="/services/activity"
//             ></CardItem>
//             <CardItem
//               src={Image7}
//               text="THe beauty of autumn"
//               label="Oyoun El Samak"
//               path="/services/activity"
//             ></CardItem>
//             <CardItem
//               src={Image8}
//               text="Waterdall cliff jumping and hiking"
//               label="Serjbel"
//               path="/services/activity"
//             ></CardItem>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Cards;
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

// const data = [
//   {
//     id: 1,
//     src: Image1,
//     text: "Explore the hidden waterfall",
//     label: "Akoura",
//   },
//   {
//     id: 2,
//     src: Image2,
//     text: "Most frequented waterfall",
//     label: "Balou Balaa",
//   },
//   {
//     id: 3,
//     src: Image3,
//     text: "The Stunning Landscape",
//     label: "Chabrouh",
//   },
//   {
//     id: 4,
//     src: Image4,
//     text: "Discover the greatest landmarks",
//     label: "Jezzin",
//   },
//   {
//     id: 5,
//     src: Image5,
//     text: "Discover the greatest landmarks",
//     label: "Kfarhelda",
//   },
// ];

function Cards() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const getData = () => {
    axios
      .get("http://localhost/SeniorBackend/getServcies.php")
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
            {data.slice(0, 2).map((e) => (
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
            {data.slice(2).map((e) => (
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
