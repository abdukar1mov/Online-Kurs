import React from "react";
import "./pupils.scss";
import pupilsData from "./pupilsData";

const Pupils = () => {
  return (
    <div className="pupils">
      <div id="Natija" className="container">
        <h1>O’quvchilarimiz natijalari</h1>
        <div className="cardsP">
          {pupilsData.map((el) => {
            return (
              <div className="cardP">
                <img src={el.picture} alt="Pupils_picture" />
                <div className="bottom">
                  <h4>{el.name}</h4>
                  <p className="ielts">
                    <span>IELTS:</span> {el.ielts}
                  </p>
                  <p className="data">
                    <span>Qancha vaqtda erishdi:</span> {el.data}
                  </p>
                  <p className="educ">
                    <span>Xozirda tahsil olmoqda:</span> {el.educ}
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

export default Pupils;
