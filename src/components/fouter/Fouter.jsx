import './fouter.css'


function Fouter(){
    return(
        <div className='footer'>
            <div className='hr-p'>
                <hr />
                <p>Copyright © 2021 - 2025 Yassine El Maataoui</p>
            </div>
            <div className='contact3'>
                <div className='links'>
                    <h3>Important Links</h3>
                    <a href="/">home</a>
                    <a href="/works">My Work</a>
                    <a href="">Blog</a>
                </div>
                <div className='social2'>
                    <h3>Social</h3>
                    <a href="https://github.com/yacinTech">Github</a>
                    <a href="https://www.linkedin.com/in/yassine-el-maataoui-7b029536a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">LinkedIn</a>
                    <a href="http://wa.me/212646342598">Whatssap</a>
                </div>
                <div className='other'>
                    <h3>Other</h3>
                    <a href="/">What i use</a>
                    <a href="/ccontact">Contact</a>
                    <a href="/">Photography</a>
                </div>
            </div>
        </div>
    )
}
export default Fouter;