import { CircularProgress } from "@mui/material";
import MUIDataTable from "mui-datatables";
import Navbar from "../components/Navbar/Navbar";

import React, { useEffect, useState } from "react";
import axios from "axios";

const History = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  let user = localStorage.getItem("user");
  user = JSON.parse(user);

  const getData = () => {
    setIsLoading(true);
    axios
      // .get("http://localhost/SeniorBackend/getServcies.php")
      .get("http://localhost/senior/getBooking.php", {
        params: {
          user_id:user != null ? user.id : null
        }
      })
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

  const columns = [
    {
      name: "id",
      label: "ID",
    },
    {
      name: "service_name",
      label: "Service Name",
    },
    {
      name: "username",
      label: "User Name",
    },
    {
      name: "from_date",
      label: "Date",
    },
  ];

  const options = {
    filter: true,
    selectableRows: "none",
    textLabels: {
      body: {
        noMatch: isLoading ? (
          <CircularProgress />
        ) : (
          "There is no matching data to display"
        ),
      },
    },
  };

  return (
    <>
      <Navbar />
      <h1 style={{ marginTop: "50px" }}>History</h1>
      <div
        style={{
          marginLeft: "250px",
          marginRight: "250px",
          marginTop: "85px",
        }}
      >
        <MUIDataTable data={data} columns={columns} options={options} />
      </div>
    </>
  );
};
export default History;
