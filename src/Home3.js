import React from 'react';
import Navbar from './component/Navbar/Navbar';
import ParticlesBanner from './component/Banner/ParticlesBanner';
import About from './component/About';
import Service from './component/Service';
import Portfolio from './component/Portfolio/Portfolio';
import Testimonial from './component/Testimonial/Testimonial';
import Clientslogo from './component/Clientslogo';
import Blog from './component/Blog/Blog';
import MapContainer from './component/Map';
import Contact from './component/Contact';
import Skill from './component/Skill/Skill';
import Footer from './component/Footer';
import isacData from './component/isacData';


export const Home3 = () => (
  <div className="body_wrapper">
      <Navbar mClass="dark_menu" mContainer="custome_container" mainlogo="logo2.png" stickylogo="logo.png"/>
      <ParticlesBanner isacData={isacData}/>
      <About aClass='about_area bg_color' isacData={isacData}/>
      <Service wClass="work_area_two" isacData={isacData}/>
      <Portfolio pClass="bg_color"/>
      <Skill cClass="bg_w"/>
      <Testimonial/>
      <Clientslogo/>
      <Blog/>
      <MapContainer/>
      <Contact isacData={isacData}/>
      <Footer isacData={isacData}/>
  </div>
)


