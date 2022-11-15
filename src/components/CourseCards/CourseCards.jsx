import React, { useEffect, useState } from "react";
import "./courseCards.scss";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import dataCourse from "./dataCourse";
import { Link } from "react-router-dom";
import axios from "axios"

const CourseCards = () => {

  const [dataArab, setDataArab] = useState([])

  useEffect(() => {
    axios
      .get("https://selfschool.uz/admin/projects/course/1/change/")
      .then((res) => {
        setDataArab(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div id="Kurslar" className="courseCards">
      <div className="container">
        <div className="kurslar-div">
          <h2 className="kurslar">Kurslarimiz</h2>
        </div>
        <div className="cards">
          {dataCourse.map((el) => {
            return (
              <div className="course">
                <img src={el.image} alt="" />
                <div className="course-body">
                  <h2>{el.title}</h2>
                  <p>{el.desc}</p>
                  <div className="bottom">
                    <h3>{el.price}</h3>
                    <Link to={`/${el.id}`}>
                      <button className="button btn-outline-secondary">
                        <ArrowForwardIcon />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CourseCards;
