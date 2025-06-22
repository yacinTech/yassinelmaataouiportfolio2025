import './projects.css'

function Projects({showُElement = true}){
    return(

        <div  className="container3">
            <div className="text">
                {showُElement && <h4>Recent Projects.</h4>}
                {showُElement && <p>Explore some of my recent projects below. For more, visit my GitHub profile.</p>}
                <h4>Majalat Al Maarifa</h4>
                <p><strong>Majalat Al Maarifa</strong> offers diverse articles on many topics, tailored for Arabic readers seeking knowledge and insight.</p>
            </div>
            <div className="almajala">
                <img src="/images/majalat.png" alt="" />
                <div className='outils'>
                    <p><i class="fa-brands fa-react"></i> React <i class="fa-brands fa-js"></i> JavaScript <i class="fa-solid fa-database"></i> mongodb <i class="fa-brands fa-node"></i> node js <i class="fa-brands fa-css3-alt"></i> CSS</p>
                </div>
                <a href="https://almaarifamagazine.vercel.app/"><button> <i class="fa-solid fa-link"></i>     View Website    <i className="bi bi-arrow-right arrow-icon"></i></button></a>
            </div>

        </div>
        
    )
}
export default Projects