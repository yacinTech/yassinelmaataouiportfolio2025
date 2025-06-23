import Projects from '../components/Projects/Projeects'
import Projects2 from '../components/projects2/Projects2'
import Header from '../components/Header/Header'
import Fouter from '../components/fouter/Fouter'
import './app.css'
import Projects3 from '../components/Project3/Projects3'




function Works(){
    return(
        <div>
           
            <Header/>
            <div className='presentation'>
                <h1>My Work.</h1>
                <p>I have been programming for 3 years and have worked on numerous projects. Below are some of my latest projects; you can find more on my GitHub profile.</p>
            </div>
            <Projects showُElement={false}/>
            <Projects3/>
            <Projects2 showُElement={false}/>
             <div className='more'>
                <p>Want to see more? Check out my GitHub profile for more projects and contributions.</p>
                <a href="#">View My Github  <i className="bi bi-arrow-right arrow-icon"></i></a>
            </div>
            <Fouter/>
           

        </div>
    )
}
export default Works;