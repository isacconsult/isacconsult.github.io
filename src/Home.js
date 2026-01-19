import React from "react";
import Navbar from "./component/Navbar/Navbar";
import Banner from "./component/Banner/Banner";
import About from "./component/About";
import Service from "./component/Service";
import Portfolio from "./component/Portfolio/Portfolio";
import Testimonial from "./component/Testimonial/Testimonial";
import Clientslogo from "./component/Clientslogo";
import Blog from "./component/Blog/Blog";
import MapContainer from "./component/Map";
import Contact from "./component/Contact";
import Skill from "./component/Skill/Skill";
import Footer from "./component/Footer";
import isacData from "./component/isacData";

export const Home = () => (
  <div className="body_wrapper">
    <Navbar
      mContainer="custome_container"
      mainlogo="logo2.png"
      stickylogo="logo.png"
    />
    <Banner isacData={isacData} />
    <About aClass="about_area" isacData={isacData} />
    <Service wClass="work_area" isacData={isacData} />
    <Portfolio />
    <Skill />
    <Testimonial />
    <Clientslogo />
    <Blog />
    <MapContainer />
    <Contact isacData={isacData} />
    <Footer isacData={isacData} />
  </div>
);
