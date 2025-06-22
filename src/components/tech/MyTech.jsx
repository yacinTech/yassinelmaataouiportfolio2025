import './myTech.css'


function MyTech(){
    return(
        <div className='container5'>
            <h2>Technologies I use.</h2>
            <p>Over the years, I have worked with a variety of technologies. Here are some of the technologies I have experience with:</p>
            <div className='techUse'>
                <a href=""><i class="fa-brands fa-html5"></i>HTML</a>
                <a href=""><i class="fa-brands fa-css3-alt"></i> CSS</a>
                <a href=""><i class="fa-brands fa-js"></i> JavaScript</a>
                <a href=""><i class="fa-brands fa-react"></i>REACT</a>
                <a href=""><i class="fa-solid fa-database"></i> mongodb </a>
                <a href=""><i class="fa-brands fa-node"></i> nodeJs </a>
                <a href=""><i class="bi bi-bootstrap-fill"></i> Bootstrap</a>
                <a href=""><i class="bi bi-github"></i> Github</a>
                <a href=""><i class="bi bi-git"></i>Git</a>
                <a href=""><i class="bi bi-typescript"></i>Typescript</a>
                <a href=""><i class="bi bi-cloud-upload-fill"></i>Cloudinary</a>
                
                
            </div>
            <h3>...and many more!</h3>
        </div>
    )
}

export default MyTech;