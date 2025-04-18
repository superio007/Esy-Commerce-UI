import React from "react";
import styles from "../css/ContactPage.module.scss";
import Map from "../components/ContactUsPage/Map";
import CustomerSlider from "../components/HomePage/CustomerSlider";
import Contact from "../components/ContactUsPage/Contact";
import Locations from "../components/ContactUsPage/Locations";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import ContactPageData from "../Data/ContactData.json";

const fetchContactContent = async () => {
  const { data } = await axios.get(
    "http://uw0gkswco04wsogkccggkk0s.82.25.90.229.sslip.io/api/contact-page?populate[contact_section][populate]=*&populate[customer_slider][populate]=*"
  );
  return data.data;
};
const ContactPage = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["Contactpage-content"],
    queryFn: fetchContactContent,
    initialData: ContactPageData.data,
    initialDataUpdatedAt: 0, // 👈 Forces background API call
    staleTime: 1000 * 60 * 60, // 1 hour
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchInterval: false,
  });
  // Use API data if available; fallback to static data on error
  const apiResponse = error ? ContactPageData.data || [] : data || [];
  if (isLoading) return <p>Loading...</p>;
  return (
    <>
      <Map />
      <Contact
        sectionPoints={apiResponse.contact_section.contact_section_points}
      />
      <div className="text-center">
        <h3 className={`${styles.ContactH3} capitalize`}>
          {apiResponse.contact_section.CustomerSliderHeading ||
            "Trusted by industry leaders worldwide."}
        </h3>
        <CustomerSlider CustomerSlider={apiResponse.customer_slider} />
      </div>
      <Locations
        heading={apiResponse.contact_section.OurOfficesHeading}
        Locations={apiResponse.contact_section.offices_points}
      />
    </>
  );
};
export default ContactPage;
