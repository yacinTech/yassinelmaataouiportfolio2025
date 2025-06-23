
import React from "react";
import './app.css';

import Header from '../components/Header/Header'
import Section1 from '../components/section/Section'
import Section2 from '../components/section2/Section2'
import Projects from '../components/Projects/Projeects'
import Projects2 from '../components/projects2/Projects2'
import MyTech from '../components/tech/MyTech'
import Contact from '../components/contact/Contact'
import Fouter from '../components/fouter/Fouter'



function Home() {
  return (

    <div className="App">
   
      
      
      <Header/>
      <Section1/>
      <Section2/>
      <Projects/>
      <Projects2/>
      <MyTech/>
      <Contact/>
      <Fouter/>
      

    </div>
  );
}

export default Home;