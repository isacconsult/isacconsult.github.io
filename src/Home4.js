import React from 'react';
import Navbar from './component/Navbar/Navbar';
import RBanner from './component/Banner/RippleBanner';
import About from './component/About';
import Service from './component/Service';
import SchemaIsac from './component/SchemaIsac'
import CuCineLucrez from './component/CuCineLucrez'
import Oferta from './component/Oferta'
import Contact from './component/Contact';
import CtaFinal from './component/CtaFinal'
import Skill from './component/Skill/Skill';
import Footer from './component/Footer';
import isacData from './component/isacData';
// import Portfolio from './component/Portfolio/Portfolio';
// import Testimonial from './component/Testimonial/Testimonial';
// import Clientslogo from './component/Clientslogo';
// require('../../image/Sail-Away.jpg') 

export const Home4 = () => (
  <div className="body_wrapper">
      <Navbar mContainer="custome_container" mainlogo="logo2.png" stickylogo="logo.png"/>  
      <RBanner isacData={isacData} imag="Sail-Away.jpg"/>
      <About aClass="about_area" isacData={isacData}/> 
      <Service wClass="work_area" isacData={isacData}/>
      <SchemaIsac wClass="work_area_two" isacData={isacData}/>
      <CuCineLucrez wClass="work_area" isacData={isacData}/>
      <Oferta wClass="work_area_two" isacData={isacData}/>
      <CtaFinal wClass="work_area"/>
      <Skill/>
      <Contact isacData={isacData}/>
      <Footer isacData={isacData}/>

       {/* 
        <Portfolio/>
        <Testimonial/>
        <Clientslogo/>
         <Blog/>
         */}
  </div>
)

