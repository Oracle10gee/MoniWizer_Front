import React, { useState } from 'react';
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
import "./index.css";
import Flowchart from "assets/icons/svgs/moniwizr_flowchart.png";
import LinkedIn from "assets/icons/svgs/linkedIn.svg";
import Facebook from "assets/icons/svgs/facebook.svg";
import Instagram from "assets/icons/svgs/instagram.svg";
import NavBar from "./navigation/navbar";
import { ModalForm } from './ModalForm/ModalForm';

const LandingPage = () => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
      setShowModal(true);
    };
  
    const closeModal = () => {
      setShowModal(false);
    };

  return (
    <div>
      <section id="coming-soon-container">
        <NavBar />
        <div className="container">
          <div className="header mt-5">
            <div className="text-center">
              <span className="title">Wave goodbye to money stress.</span>
              <div className="header-text">
                <p className="mt-5">
                  Manage and track all your debts across various lenders,
                  <br className="break" />
                  plan your payments and see your progress, all in one app.
                </p>
              </div>
            </div>
            <div className="d-flex justify-content-center mt-5">
              <button className="waitlist-btn btn" onClick={openModal}>Join Waitlist</button>
            </div>
            <ModalForm showModal={showModal} closeModal={closeModal} />
          </div>
          <div className="banner d-flex justify-content-center">
            <img className="banner-img" src={Flowchart} alt="" />
          </div>
          <div className="row mt-5">
            <div className="col-sm-4">
              <div className="social-icons">
                <a href="">
                  <img src={LinkedIn} alt="linkedIn" />
                </a>
                <a href="">
                  <img src={Instagram} alt="instagram" />
                </a>
                <a href="">
                  <img src={Facebook} alt="facebook" />
                </a>
              </div>
            </div>
            <div className="col-sm-4"></div>
            <div className="col-sm-4"></div>
          </div>
          <div className="divider mt-3">
            <hr />
          </div>
          <div className="row py-3">
            <div className="col-md-3">
              <div>
                <div className="d-flex footer">
                  <p>Terms of Service</p>
                  <p>Privacy Policy</p>
                </div>
              </div>
            </div>
            <div className="col-md-6"></div>
            <div className="col-md-3 footer">
              <p>© 2023 MoniWizr. All rights reserved.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
