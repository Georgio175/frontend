import React, { useEffect, useState } from "react";
import { Dialog, Button, TextField, InputAdornment } from "@mui/material";
import { AiFillMail, AiFillUnlock, AiFillSmile } from "react-icons/ai";
import { styled } from "@mui/material/styles";
import axios from "axios";

function Signup(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    lastName: "",
  });

  const resetForm = () => {
    setFormData({
      email: "",
      password: "",
      name: "",
    });
  };

  useEffect(() => {
    resetForm();
  }, [props.open]);

  const handleChangeInput = (event) => {
    const { id, type, value } = event.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSave = () => {
    setIsLoading(true);
    axios
      // .post("http://localhost/SeniorBackend/signup.php", formData)
      .post("http://localhost/senior/signup.php", formData)
      .then(function (response) {
        setIsLoading(false);
        const data = response.data;
        if (data.status === "error") {
          alert(data.message);
        } else {
          alert("created succefully");
          props.onClose();
        }
      })
      .catch(function (err) {
        console.log(err);
        setIsLoading(false);
      });
  };
  return (
    <>
      <Dialog
        maxWidth={"xs"}
        fullWidth
        open={props.open}
        onClose={props.onClose}
      >
        <div style={{ height: "450px", padding: "30px" }}>
          <div
            style={{
              height: "100%",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div style={{ width: "100%" }}>
              <p
                style={{
                  fontWeight: "700",
                  marginBottom: "10px",
                  marginTop: "50px",
                }}
              >
                Name
              </p>
              <TextField
                id={"name"}
                variant="outlined"
                placeholder="name"
                value={formData.name}
                onChange={handleChangeInput}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AiFillSmile style={{ color: "#ff5531" }} />
                    </InputAdornment>
                  ),
                }}
                style={{ width: "100%" }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#ff5531",
                    },
                    "&:hover fieldset": {
                      borderColor: "#ff5531",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#ff5531",
                    },
                  },
                }}
              />
            </div>

            {/* <div style={{ width: "100%" }}>
              <p
                style={{
                  fontWeight: "700",
                  marginBottom: "10px",
                  marginTop: "10px",
                }}
              >
                last Name
              </p>
              <TextField
                id={"lastName"}
                variant="outlined"
                placeholder="lastName"
                value={formData.name}
                onChange={handleChangeInput}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AiFillSmile style={{ color: "#ff5531" }} />
                    </InputAdornment>
                  ),
                }}
                style={{ width: "100%" }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#ff5531",
                    },
                    "&:hover fieldset": {
                      borderColor: "#ff5531",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#ff5531",
                    },
                  },
                }}
              />
            </div> */}
            {/* <div style={{ width: "100%", marginTop: "30px" }}>
              <p style={{ fontWeight: "700", marginBottom: "10px" }}>
                Last Name
              </p>
              <TextField
                id={"lastName"}
                variant="outlined"
                placeholder="7985175"
                value={formData.lastName}
                onChange={handleChangeInput}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AiFillMail style={{ color: "#ff5531" }} />
                    </InputAdornment>
                  ),
                }}
                style={{ width: "100%" }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#ff5531",
                    },
                    "&:hover fieldset": {
                      borderColor: "#ff5531",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#ff5531",
                    },
                  },
                }}
              />
            </div> */}

            <div style={{ width: "100%", marginTop: "30px" }}>
              <p style={{ fontWeight: "700", marginBottom: "10px" }}>
                Your Email
              </p>
              <TextField
                id={"email"}
                variant="outlined"
                placeholder="e.g@gmail.com"
                value={formData.email}
                onChange={handleChangeInput}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AiFillMail style={{ color: "#ff5531" }} />
                    </InputAdornment>
                  ),
                }}
                style={{ width: "100%" }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#ff5531",
                    },
                    "&:hover fieldset": {
                      borderColor: "#ff5531",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#ff5531",
                    },
                  },
                }}
              />
            </div>

            <div style={{ marginTop: "30px", width: "100%" }}>
              <p style={{ fontWeight: "700", marginBottom: "10px" }}>
                Your Password
              </p>
              <TextField
                id={"password"}
                variant="outlined"
                placeholder="********"
                type="password"
                value={formData.password}
                onChange={handleChangeInput}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AiFillUnlock style={{ color: "#ff5531" }} />
                    </InputAdornment>
                  ),
                }}
                style={{ width: "100%" }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#ff5531",
                    },
                    "&:hover fieldset": {
                      borderColor: "#ff5531",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#ff5531",
                    },
                  },
                }}
              />
            </div>
            <div style={{ marginTop: "30px" }}>
              <Button
                style={{
                  border: "1px solid #ff5531",
                  width: "250px",
                  backgroundColor: "#ff5531",
                  color: "white",
                }}
                variant="filled"
                onClick={handleSave}
              >
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
}

export default Signup;
