import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import dataCourse from "./dataCourse";
import "./courses.scss";
import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Courses = () => {
  const [state, setState] = useState(false);

  const toogle = () => {
    setState(!state);
  };

  const params = useParams();
  console.log(params);

  const currentData = dataCourse.find((el) => {
    return el.id !== params.id;
  });

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="flexi">
          <h1 className="kurslar">{currentData.title} Kursi</h1>
          <div className="flexi-mini">
            <h2>{currentData.price}</h2>
            <button
              onClick={toogle}
              className={"toogle--button" + (state ? "toogle--close" : "")}
            >
              {state ? "ENROLL COURSE" : "ENROLLED COURSE"}
            </button>
          </div>
        </div>
        <div className="kurs__tarkibi">
          <div className="image">
            <img src={currentData.image} alt="" />
          </div>
          <div className="display__class">
            <div className="accordions">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Accordion 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>Accordion 2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>Accordion 3</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
