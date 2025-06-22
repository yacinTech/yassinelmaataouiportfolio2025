import React from "react";
import './section.css'

function Section1(){
    return(
        <div className="container1">
            <div className="abt-msn">
                <div className="abtm"> 
                    <h1>about me</h1>
                    <h2>hey, I'm Yassine👋</h2>
                    <p>Passionate FullStack Web Developer <strong>from Moroco</strong>, pushing the boundaries of web technology to create immersive digital experiences.</p>
                </div>
                <div className="mission">
                    <h1>My Mission</h1>
                    <p>Bridging the Gap Between Design and Development: Where creativity meets functionality, and innovation drives progress. Keep moving, don't settle. 🚀</p>
                </div>
            </div>
            <div className="listgit"> 
                <ul>
                    <li><i class="bi bi-star"></i>stars</li>
                    <li><i class="bi bi-git"></i> commits</li>
                    <li><i class="bi bi-sourceforge"></i> repositories forks</li>
                    <li><i class="bi bi-github"></i> Github followers</li>
                </ul>
            </div>
        </div>
        
    )
}

export default Section1;