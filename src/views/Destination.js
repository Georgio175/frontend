import React, { useEffect, useState } from "react";
// import Footer from '../Footer';
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Image1 from "../images/akoura.jpg";
import { Height, PropaneSharp } from "@mui/icons-material";
import { useParams } from "react-router-dom";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { BiMoney } from "react-icons/bi";
import { BiSolidMapPin } from "react-icons/bi";
import axios from "axios";
import { Dialog, Grid } from "@mui/material";
import { CustomButton } from "../components/Button/CustomButton";
import { Button } from "@mui/base";

export default function Destination() {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  let { id } = useParams();
  let user = localStorage.getItem("user");
  user = JSON.parse(user);
  const [formData, setFormData] = useState({
    date: null,
    user_id: user.id,
    service_id: id,
  });
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

  const handleBooking = () => {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  }
  const handleChangeDate = (e) => {
    const newDate = e.target.value;
    setFormData({
      ...formData,
      date:newDate
    });
  }


  const handleSave = () => {
    console.log(formData);
    if (formData.user_id > 0 && formData.date != null) {
      axios
        // .post("http://localhost/SeniorBackend/create.php", formData)
        .post("http://localhost/senior/book.php", formData)
        .then(function (response) {
          const data = response.data;
          if (data.status === "error") {
            alert(data.message);
          } else {
            alert("Booked Successfully");
            handleClose();
          }
        })
        .catch(function (err) {
          console.log(err);
          alert(err);
        });
    } else {
      alert("Please Fill All required Fields");
    }
  };

  return (
    <>
      <Navbar />
      <div className="destination" style={{
        backgroundImage: `url(${data?.cover_image_link})`
      }}></div>
      <Grid container>
        <Grid item xs={10}>
          <div className="destination-container">
            <div className="info-wrapper">
              <h2 style={{ textTransform: 'capitalize' }}>{data?.name}</h2>
              <h4 style={{ textDecoration: 'underline' }}>Highlights</h4>
              <div style={{ display: 'flex', marginBottom: '20px' }}>
                <div style={{ display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center' }}><BiSolidCategoryAlt
                  size={"40px"}
                  style={{ color: '#ff5531' }}
                /></div>
                <div style={{ display: 'flex', marginLeft: '10px', alignItems: 'center', fontSize: '25px', justifyContent: 'center' }}>{data?.category_id}</div>
              </div>
              <div style={{ display: 'flex', marginBottom: '20px' }}>
                <div style={{ display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center' }}><BiMoney size={"40px"} style={{ color: '#ff5531' }} /></div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '25px', marginLeft: '10px' }}>{data?.price}$</div>
              </div>
              <div style={{ display: 'flex', marginBottom: '20px' }}>
                <div style={{ display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center' }}><BiSolidMapPin size={"40px"} style={{ color: '#ff5531' }} /></div>
                <div style={{ display: 'flex', marginLeft: '10px', fontSize: '25px', height: '100%', alignItems: 'center', justifyContent: 'center' }}>{data?.location}</div>
              </div>
              <h4>Full description</h4>
              <p>
                {data?.full_description}
              </p>
            </div>
          </div>
        </Grid>
        <Grid item xs={2} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Button
            style={{
              border: "1px solid #ff5531",
              width: "250px",
              backgroundColor: "#ff5531",
              color: "white",
              height: '50px',
              marginRight: '30px',
              fontSize: '20px',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
            variant="filled"
            onClick={handleBooking}
          >
            Book
          </Button>
        </Grid>
      </Grid>
      <Footer />
      <Dialog
        maxWidth={"xs"}
        // fullWidth
        open={open}
        onClose={handleClose}
      >
        <div style={{ height: "400px", padding: "30px", display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
          <h4>Book Your Service</h4>
          <label style={{ marginTop: '10px' }}>Choose Your Date </label>
          <input id="date" type="date" onChange={handleChangeDate}
            style={{
              width: '100%'
              , border: '2px solid black'
              , height: '50px'
              , fontSize: '20px'
              , borderRadius: '10px'
              , marginTop: '20px'
            }} value={formData.date} />
          <div>
            <Button
              style={{
                border: "1px solid #ff5531",
                width: "260px",
                backgroundColor: "#ff5531",
                color: "white",
                height: '50px',
                fontSize: '20px',
                borderRadius: '5px',
                cursor: 'pointer',
                marginTop: '60px'
              }}
              variant="filled"
              onClick={handleSave}
            >
              Book
            </Button>
          </div>
        </div>
      </Dialog>
    </>
  );
}
