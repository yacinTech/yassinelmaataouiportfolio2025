import './projects2.css'

function Projects2({ showُElement = true }){
    return(

        <div className="container4">
            <div className="text1">
                
                
                <h4>Elynor-Store</h4>
                <p>
                    <strong>Elynor</strong> Store is a personal project I developed to showcase a modern, user-friendly e-commerce platform focused on stylish and practical home organization products.
                </p>
            </div>
            <div className="almajala1">
                <img src="/images/elynor.png" alt="" />
                <div className='outils'>
                    <p><i class="fa-brands fa-html5"></i> HTML <i class="fa-brands fa-js"></i> JavaScript <i class="fa-solid fa-database"></i> mongodb <i class="fa-brands fa-node"></i> node js <i class="fa-brands fa-css3-alt"></i> CSS</p>
                </div>
                <a href="https://github.com/yacinTech/elynor-sotore"><button> <i class="fa-solid fa-link"></i>     View Website    <i className="bi bi-arrow-right arrow-icon"></i></button></a>
            </div>
            {showُElement && <div className='more' >
                <p>Want to see more?</p>
                <a href="/works">View All Projects  <i className="bi bi-arrow-right arrow-icon"></i></a>

            </div>}

        </div>
        
    )
}
export default Projects2;