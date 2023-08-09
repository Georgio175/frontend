import React, { useEffect, useState } from "react";
// import Footer from '../Footer';
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Image1 from "../images/akoura.jpg";
import { Height } from "@mui/icons-material";
import { useParams } from "react-router-dom";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { BiMoney } from "react-icons/bi";
import { BiSolidMapPin } from "react-icons/bi";
import axios from "axios";

export default function Destination() {
  const [data, setData] = useState([]);
  let { id } = useParams();
  const getData = () => {
    axios
      // .get("http://localhost/SeniorBackend/getServcies.php?id=" + id)
      .get("http://localhost/senior/getServcies.php?id=" + id)
      .then((res) => {
        setData(res.data[0]);
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
    <>
      <Navbar />
      <div className="destination"></div>

      <div className="destination-container">
        <div className="info-wrapper">
          <h2>{data?.title}</h2>
          <p>{data?.full_description}</p>

          <h3>Experience</h3>
          <h4>Highlights</h4>
          <div>
            <BiSolidCategoryAlt
              size={"40px"}
              style={{ marginBottom: "25px" }}
            />
          </div>
          <div>
            <BiMoney size={"40px"} style={{ marginBottom: "25px" }} />
          </div>
          <div>
            <BiSolidMapPin size={"40px"} style={{ marginBottom: "25px" }} />
          </div>
          <h4>Full description</h4>
          <p>
            Explore the paradise on a full-day tour from Akoura. Swim in a
            stunning waterfall, visit incredible caves, and get in touch with
            nature as you hike through the beautiful Akoura . After pickup at
            7:00 AM/7:30 AM..{" "}
          </p>
          <p>
            Hike through diverse landscapes as you admire the trees, vines, and
            native birds. After approximately 2 kilometers, you'll reach the
            entrance to a giant sandstone cave that is covered by waterfall for
            part of the year. Enter the cave to see markings made by former
            residents, keeping a look out for the local wildlife.{" "}
          </p>
          <p>
            Continue through the cave system, sometimes wading through water, to
            reach the fantastic Cave where you can swim in the waterfall.
            Afterwards, return to the vehicle and drive to Urubuí to see the
            stunning rapids that cut through the city. Stop for bathing, and to
            enjoy a lunch of fish or roast beef with a soft drink.{" "}
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
