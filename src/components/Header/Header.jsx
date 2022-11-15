import React from "react";
import "./header.scss";
import Img from "../../images/Header.png";

const Header = () => {
  return (
    <div id="Home" className="header">
      <div className="container">
        <div className="display">
          <div className="left">
            <div className="texts">
              <h1>Tasavvur qiling</h1>
              <p>
                Siz <span>dubay</span> oligohida grant bo’yicha o’qiyapsiz.{" "}
                <br /> Balkim <span>Koreyaga</span> ketishingiz mumkindir?{" "}
                <br /> Qanday qilib deysizmi? Albatta! shunchaki <br />{" "}
                <span>IELTSni</span> qo’lga kiritib!
              </p>
            </div>
            <div className="buttons">
              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                className="btn"
              >
                Kursga yozilish
              </button>
              <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Kursga Yozilish
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <div className="inputs">
                        <h6 className="name">Ism</h6>
                        <input placeholder="(Abdulboriy)" type="name" className="name-input" />
                      </div>
                      <div className="inputs s">
                        <h6 className="name">Tel raqami</h6>
                        <input placeholder="+998 (93) 509-83-38" type="name" className="name-input" />
                      </div>
                      <div className="inputs">
                        <h6 className="name">Kurs</h6>
                        <select className="select" name="select">
                          <option value="English Basic">English Basic</option>
                          <option value="English General">English General</option>
                          <option value="IELTS Intensive" selected>IELTS Intensive</option>
                          <option value="IELTS Full">IELTS Full</option>
                        </select>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-primary">
                        Yuborish
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <img src={Img} alt="Header_Img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
