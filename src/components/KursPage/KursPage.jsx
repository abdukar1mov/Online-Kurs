import React from "react";
import "./kursPage.scss";
import Navbar from "../Navbar/Navbar";
import ReactPlayer from "react-player";
import Video from "../../images/video.mp4";

const KursPage = () => {
  return (
    <div className="KursPage">
      <Navbar />
      <div className="container">
        <div className="down">
          <div className="video">
            <ReactPlayer type="video" className="player" controls url={Video} />
          </div>
          <div className="tasks">
            <div class="accordion accordion-flush" id="accordionFlushExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingOne">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    Accordion Item #1
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    Lorem ipsum dolor sit amet.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingTwo">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    Accordion Item #2
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingTwo"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    Lorem ipsum dolor sit amet.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingThree">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    Accordion Item #3
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingThree"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    Lorem ipsum dolor sit amet.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="homeworks">
          <div className="mb-3">
          <label for="formFile" class="form-label">For upload homeworks</label>
            <input class="form-control" type="file" id="formFile" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default KursPage;
