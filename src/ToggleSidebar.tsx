import { useState } from "react";
import { MdArrowBackIos } from "react-icons/md";
import "./ToggleSidebar.css";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import React from "react";
import { Button, TextField } from "@mui/material";

const ToggleSidebar = () => {
  const [isOpen, setIsopen] = useState(false);

  const [select, setSelect] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setSelect(event.target.value);
  };

  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };
  return (
    <>
      <div className="container-fluid mt-3">
        <div style={{ textAlign: "center" }} className="container-fluid mt-3">
          <Button
            className="btn btn-primary"
            onClick={ToggleSidebar}
            variant="contained"
          >
            Save Segment
          </Button>
        </div>

        <div className={`sidebar ${isOpen == true ? "active" : ""}`}>
          <div className="sd-header">
            <MdArrowBackIos
              className="sd-header-button"
              onClick={ToggleSidebar}
            />

            <h4 className="mb-0">Saving Segment</h4>
          </div>
          <div className="sd-body">
            <div className="form-group">
              <label style={{ color: "black" }}>
                Enter the Name of the Segment
              </label>

              <TextField
                style={{ opacity: "0.5", marginTop: "10px" }}
                name="name"
                type="name"
                className="form-control"
                id="outlined-basic"
                label="Name of the segment"
                variant="outlined"
              />
              <p
                style={{
                  color: "black",
                  marginTop: "20px",
                  fontSize: "15px",
                }}
              >
                To save your segment, you need to add the achemas to build the
                query
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "end",
                  fontSize: "13px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "end",
                    fontSize: "13px",
                    marginRight: "10px",
                  }}
                >
                  <span className="dot1"></span>
                  <p>- User Traits</p>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "end",
                    fontSize: "13px",
                  }}
                >
                  <span className="dot2"></span>
                  <p>- Group Traits</p>
                </div>
              </div>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Add schema to segment
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={select}
                    label="Add schema to segment"
                    onChange={handleChange}
                  >
                    <MenuItem value="first_name">First Name</MenuItem>
                    <MenuItem value="last_name">Last Name</MenuItem>
                    <MenuItem value="gender">Gender</MenuItem>
                    <MenuItem value="age">Age</MenuItem>
                    <MenuItem value="account_name">Account Name</MenuItem>
                    <MenuItem value="city">City</MenuItem>
                    <MenuItem value="state">State</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <p
                style={{
                  fontSize: "13px",
                  marginTop: "20px",
                  cursor: "pointer",
                  textDecoration: "underline",
                  textUnderlineOffset: "5px",
                  color: "#41b494",
                }}
              >
                + Add new schema
              </p>
            </div>
            <div className="footer">
              <Button className="btn btn-primary" variant="contained">
                Save the Segment
              </Button>

              <Button
                style={{
                  color: "red",
                  borderColor: "transparent",
                  marginLeft: "20px",
                }}
                className="btn btn-secondary"
                variant="text"
                onClick={ToggleSidebar}
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>

        <div
          className={`sidebar-overlay ${isOpen == true ? "active" : ""}`}
          onClick={ToggleSidebar}
        ></div>
      </div>
    </>
  );
};

export default ToggleSidebar;
