import React, { useEffect, useState } from "react";
import {
  Dialog,
  Button,
  TextField,
  InputAdornment,
  Grid,
  DialogActions,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
import { AiFillMail, AiFillUnlock } from "react-icons/ai";
import { BiDollar } from "react-icons/bi";
import { styled } from "@mui/material/styles";
import axios from "axios";
import SingleCustomAutoComplete from "../../components/SingleCustomAutoComplete";
import InLineCustomCheckbox from "../../components/CustomCheckbox";

function AddUpdateService(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [locationsList, setLocationsList] = useState([]);
  const [formData, setFormData] = useState({
    id: -1,
    name: "",
    category_id: null,
    location: null,
    short_description: "",
    full_description: "",
    comment: "",
    comment: "",
    comment: "",
  });

  const resetForm = () => {
    setFormData({
      id: -1,
      name: "",
      category_id: null,
      location: null,
      short_description: "",
      full_description: "",
      price: "",
    });
  };

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
    if (locationsList.length == 0) {
      getData();
    }
    resetForm();
  }, []);

  const handleChangeInput = (e) => {
    const { id, name, value, checked, type } = e.target;
    if (type == "checkbox") {
      setFormData({
        ...formData,
        [id]: checked,
      });
    } else {
      setFormData({
        ...formData,
        [id]: value,
      });
    }
  }

  const customOnChange = (newValueId, fieldName, newValueName) => {
    setFormData({
      ...formData,
      [fieldName]: newValueId,
    });
  };
  const handleSave = () => {
    setIsLoading(true);
    axios
      // .post("http://localhost/SeniorBackend/create.php", formData)
      .post("http://localhost/senior/create.php", formData)
      .then(function (response) {
        setIsLoading(false);
        const data = response.data;
        if (data.status === "error") {
          alert(data.message);
        } else {
          alert("Created Successfully");
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
        maxWidth={"md"}
        fullWidth
        open={props.open}
        onClose={props.onClose}
      >
        <div style={{ padding: "30px" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <TextField
                id={"name"}
                variant="outlined"
                placeholder="name"
                value={formData.name}
                onChange={handleChangeInput}
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
            </Grid>

            {/* <Grid item xs={12} md={4}>
              <TextField
                id={"comment"}
                variant="outlined"
                placeholder="comment"
                value={formData.comment}
                onChange={handleChangeInput}
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
            </Grid> */}
            <Grid item xs={4}>
              <SingleCustomAutoComplete
                filedName="category_id"
                label="Category"
                list={[
                  {
                    id: 1,
                    name: "Food",
                  },
                  {
                    id: 2,
                    name: "Activity",
                  },
                  {
                    id: 3,
                    name: "Places",
                  },
                ]}
                value={formData.category_id}
                listKey="id"
                description="name"
                customOnChange={customOnChange}
              />
            </Grid>

            <Grid item xs={4}>
              <SingleCustomAutoComplete
                filedName="location"
                label="Location"
                list={locationsList}
                value={formData.location}
                listKey="id"
                description="name"
                customOnChange={customOnChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                id={"short_description"}
                variant="outlined"
                placeholder="short description...."
                value={formData.short_description}
                multiline
                minRows={3}
                onChange={handleChangeInput}
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
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                id={"full_description"}
                variant="outlined"
                placeholder="Full description...."
                value={formData.full_description}
                multiline
                minRows={3}
                onChange={handleChangeInput}
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
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                id={"price"}
                variant="outlined"
                placeholder="Price"
                value={formData.price}
                onChange={handleChangeInput}
                style={{ width: "100%" }}
                type="number"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <BiDollar />
                    </InputAdornment>
                  ),
                }}
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
            </Grid>
            <Grid item xs={12}>
              <div style={{ width: '15%' }}>
                <InLineCustomCheckbox
                  label={"Is Booked"}
                  checked={formData.is_booked}
                  id={"is_booked"}
                  onClick={handleChangeInput}
                />
              </div>
            </Grid>
          </Grid>
        </div>
        <DialogActions>
          <Button
            style={{
              border: "1px solid #ff5531",
              width: "150px",
              backgroundColor: "#ffffff",
              color: "#ff5531",
            }}
            variant="filled"
            onClick={props.onClose}
          >
            cancel
          </Button>
          <Button
            style={{
              border: "1px solid #ff5531",
              width: "150px",
              backgroundColor: "#ff5531",
              color: "white",
            }}
            variant="filled"
            onClick={handleSave}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default AddUpdateService;
