import React, { useEffect, useState } from "react";
import "./teachers.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import axios from "axios";

const Teachers = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://selfschool.uz/api/teachers/")
      .then((res) => {
        setData(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div id="Ustozlar" className="teachers">
      <div className="container">
        <h1>Bizning super jamoamiz</h1>
        <div className="cards">
          {data?.map((el) => {
            return (
              <div className="card col-lg-3 col-md-4 col-sm-6">
                <img src={el.image} alt="Teacher_img" />
                <div className="info">
                  <h2>{el.full_name}</h2>
                  <p className="t__about">{el.about}</p>
                  <p>
                    <span>IELTS:</span> {el.teachers_bio}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Teachers;
