
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
import { Helmet } from "react-helmet";


function Home() {
  return (

    <div className="App">
      <Helmet>
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Yassine Maataoui",
            "url": "https://yourdomain.com",
            "sameAs": [
              "https://github.com/yourprofile",
              "https://www.linkedin.com/in/yourprofile"
            ],
            "jobTitle": "Web Developer",
            "worksFor": {
              "@type": "Organization",
              "name": "Freelance"
            }
          }
          `}
        </script>
      </Helmet>
      
      
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