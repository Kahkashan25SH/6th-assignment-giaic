import Contact from "./component/Header/Contact";
import Navbar from "./component/Header/Navbar";
import Placeholder from "./component/Placeholder";
import Logo from "./component/CompaniesLogo";
import Category from "./component/Category";
import Page1 from "./component/Achivements/Page1";
import Page2 from "./component/Achivements/Page2";
import Courses from "./component/Courses";
import Team from "./component/Team";
import Testimonial from "./component/Testimonial";
import Footer from "./component/Footer";



// Home.js
import React from 'react'

const Home = () => {
  return (
  <div>
    {/* <Header> */}
      <Contact />
      <Navbar /> 

      <Placeholder />     {/* First Page */}

      <Logo />            {/* Companies logo */}
    
      <Category />        {/* Explore category */}

    {/* Archivements */}
      <Page1 />
      <Page2 />
      
    <Courses />
    <Team />
    <Testimonial />  
    <Footer />

    
     
    

      
      </div>
  )
}

export default Home

