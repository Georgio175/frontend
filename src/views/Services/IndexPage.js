import {
  Autocomplete,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import SingleCustomAutoComplete from "../../components/SingleCustomAutoComplete";
import AddUpdateService from "./AddUpdateService";
import ServiceCard from "./ServiceCard";
import axios from "axios";

const pricesList = [
  {
    id:"0_50",name:"0-50"
  },
  {
    id:"50_100",name:"50-100"
  },
  {
    id:"100_200",name:"100-200"
  },
  {
    id:"200",name:"200+"
  },
];

function IndexPage() {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);
  const [locationsList, setLocationsList] = useState([]);
  const is_admin = localStorage.getItem("is_admin");
  const [filterForm, setFilterForm] = useState({
    age: "",
    location: null,
    price: null,
    rate: null,
    comment: null,
  });

  const getData = () => {
    axios
      // .get("http://localhost/SeniorBackend/getServcies.php")
      .get("http://localhost/senior/getLocations.php")
      .then((res) => {
        setLocationsList(res.data);
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  };
  useEffect(() => {
    if(locationsList.length == 0){
      getData();
    }
  }, []);
  
  const customOnChange = (newValueId, fieldName, newValueName) => {
    setFilterForm({
      ...filterForm,
      [fieldName]: newValueId,
    });
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div style={{ minHeight: "100vh" }}>
        <Grid container>
          <Grid item xs={2} height={"50px"} style={{ marginTop: "30px" }}>
            {is_admin == 1 ? (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Button
                  style={{
                    border: "1px solid #ff5531",
                    width: "150px",
                    backgroundColor: "#ffffff",
                    color: "#ff5531",
                  }}
                  variant="filled"
                  onClick={handleOpen}
                >
                  New Service
                </Button>
              </div>
            ) : null}
          </Grid>
          <Grid item xs={10} style={{ height: "50px", marginTop: "30px" }}>
            <div style={{ display: "flex" }}>
              <div style={{ width: "30%" }}>
                <FormControl style={{ width: "100%" }}>
                  <TextField
                    id="search"
                    label=""
                    placeholder="Search..."
                    variant="standard"
                    style={{ width: "100%" }}
                  />
                </FormControl>
              </div>
              <div
                style={{
                  width: "15%",
                  marginRight: "20px",
                  marginLeft: "20px",
                }}
              >
                <SingleCustomAutoComplete
                  filedName="location"
                  label="Location"
                  list={locationsList}
                  value={filterForm.location}
                  listKey="id"
                  description="name"
                  customOnChange={customOnChange}
                />
              </div>
              <div style={{ width: "15%", marginRight: "20px" }}>
                <SingleCustomAutoComplete
                  filedName="price"
                  label="Price"
                  list={pricesList}
                  value={filterForm.price}
                  listKey="id"
                  description="name"
                  customOnChange={customOnChange}
                />
              </div>
              <div style={{ width: "15%" }}>
                <SingleCustomAutoComplete
                  filedName="rate"
                  label="Rate"
                  list={[
                    {
                      id: 1,
                      name: "1",
                    },
                    {
                      id: 2,
                      name: "2",
                    },
                    {
                      id: 3,
                      name: "3",
                    },
                  ]}
                  value={filterForm.rate}
                  listKey="id"
                  description="name"
                  customOnChange={customOnChange}
                />
              </div>
            </div>
          </Grid>
          <Grid item xs={2}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "90%",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <div
                style={{
                  marginTop: "10px",
                  marginBottom: "10px",
                  marginLeft: "-15px",
                  fontSize: "20px",
                  fontWeight: "700",
                  color: "grey",
                }}
              >
                Category
              </div>
              <FormGroup
                style={{
                  display: "flex",
                  justifyContent: "left",
                }}
              >
                <FormControlLabel control={<Checkbox />} label="Food" />
                <FormControlLabel control={<Checkbox />} label="Activity" />
                <FormControlLabel control={<Checkbox />} label="Places" />
              </FormGroup>
            </div>
          </Grid>
          <Grid item xs={9.5} style={{ marginTop: '50px' }}>
            <Grid container spacing={3}>
              <Grid item xs={3}>
                <ServiceCard />
              </Grid>
              <Grid item xs={3}>
                <ServiceCard />
              </Grid>
              <Grid item xs={3}>
                <ServiceCard />
              </Grid>
              <Grid item xs={3}>
                <ServiceCard />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <AddUpdateService open={open} onClose={handleClose} />
    </>
  );
}

export default IndexPage;
