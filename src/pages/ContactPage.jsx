import React from "react";
import styles from "../css/ContactPage.module.css";
import Map from "../components/ContactUsPage/Map";
import CustomerSlider from "../components/HomePage/CustomerSlider";
import Contact from "../components/ContactUsPage/Contact";
import Locations from "../components/ContactUsPage/Locations";
const ContactPage = () => {
  return (
    <>
      <Map />
      <Contact />
      <div className="text-center">
        <h2 className="text-2xl font-medium capitalize">
          Trusted by industry leaders worldwide.
        </h2>
        <CustomerSlider/>
      </div>
      <Locations />
    </>
  );
};
export default ContactPage;
