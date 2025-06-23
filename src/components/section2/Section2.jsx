import './section2.css'


function Section2(){
    return(
        <div className='container2'>
            <div className='abtsec'>
                <h1>About me</h1>
                <p>I'm Yassine El Maataoui.. I have been coding for over 3 years, beginning my journey in 2022. Initially, I learned HTML, CSS, and JavaScript to build websites. <br /> <br />
                    My first project was a simple website built with HTML, CSS, and JavaScript (~mid-2022). <br /> <br />

                    As I progressed, I focused heavily on React.js, Next.js, Expess.js, Node.js, MongoDB and Others . Now, I specialize in building SaaS applications with modern web technologies.
                </p>
                <a href="https://github.com/yacinTech"><button className='btn1'><i className="bi bi-github"></i> View My Github <i className="bi bi-arrow-right arrow-icon"></i></button></a>
                <a href="/contact"><button className='btn2'>Contact me <i className="bi bi-arrow-right arrow-icon2"></i></button></a>


            </div>
            <div className='my-studio'>
                <h1><i class="bi bi-file-code-fill"></i>My Studio</h1>
                <p>Salut!🙏 Yassin.dev is more than a portfolio; it's a window into my world, where passion meets purpose. Discover my work.</p>
                <a href="files/yassin_maataoui1_cv.pdf" download > Download CV</a>
                <div className='todo'>
                    <div className='todo1'>
                        <i class="bi bi-code-slash"></i>
                        <h4>Web Development</h4>
                        <p>Building high-performance websites with clean code and strong SEO fundamentals.</p>
                    </div>
                    <div className='todo2'>
                        <i class="bi bi-brush-fill"></i>
                        <h4>UI/UX Design</h4>
                        <p>Crafting modern, intuitive user interfaces that engage and convert users.</p>
                    </div>
            </div>

            </div>
            

        </div>

    )
}

export default Section2;