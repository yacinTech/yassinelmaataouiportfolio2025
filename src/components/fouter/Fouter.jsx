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
                    <a href="">home</a>
                    <a href="">My Work</a>
                    <a href="">Blog</a>
                </div>
                <div className='social2'>
                    <h3>Social</h3>
                    <a href="">Github</a>
                    <a href="">Instagram</a>
                    <a href="">Whatssap</a>
                </div>
                <div className='other'>
                    <h3>Other</h3>
                    <a href="">What i use</a>
                    <a href="">Contact</a>
                    <a href="">Photography</a>
                </div>
            </div>
        </div>
    )
}
export default Fouter;