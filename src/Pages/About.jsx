import Section1 from "../components/section/Section";
import Section2 from "../components/section2/Section2";
import Header from "../components/Header/Header";
import Fouter from "../components/fouter/Fouter";


function About(){
    return(
        <div>
            <Header/>
            
            <Section2/>
            <Section1/>
            <Fouter/>
        </div>
    )
}
export default About;