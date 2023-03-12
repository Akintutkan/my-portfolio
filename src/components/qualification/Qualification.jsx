import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personel Journey</span>
      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__content-active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
            Education
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__content-active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>
        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            {/* Experience */}
            <div className="qualification__data">
              <div></div>
              {/* div is space */}
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">İntern-Junior Frontend Developer</h3>
                <span className="qualification__subtitle">
                  Kartega Innovative
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2022.09-2023.02
                </div>
              </div>
            </div>
            {/* Education */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">FrontEnd Development</h3>
                <span className="qualification__subtitle">
                  BilgeAdam Academy
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2022.04-2023.01
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* Experience */}
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">QA/QC Engineer</h3>
                <span className="qualification__subtitle">
                Basaksehir City Hospital
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2018.05-2021.10
                </div>
              </div>

            </div>
            {/* Education */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Geopyhsical Engineering
                </h3>
                <span className="qualification__subtitle">
                  Istanbul University
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2012-2017
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
