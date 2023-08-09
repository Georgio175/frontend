import { CircularProgress } from "@mui/material";
import MUIDataTable from "mui-datatables";
import Navbar from "../components/Navbar/Navbar";

import React, { useState } from "react";

const History = () => {
  const [isLoading, setIsLoading] = useState([]);
  const [data, setData] = useState([]);
  const columns = [
    {
      name: "id",
      label: "ID",
    },
    {
      name: "name",
      label: "Name",
    },
    {
      name: "cluster_name",
      label: "Cluster Name",
    },
    {
      name: "station_name",
      label: "Station",
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
      <h1 style={{ marginTop: "50px" }}>Your History</h1>
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
