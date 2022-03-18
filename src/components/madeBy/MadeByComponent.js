import React from "react";
import './MadeBy.css';
import foto from '../images/yo.jpg'
import cv from '../images/cv.pdf'
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaFileDownload } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { SiGmail } from "react-icons/si";
function MadeByComponent(){
    return(
        <div>
            <div className="subtitle">
                <h1>Hello world, I'm Sergio Cardoso and I developed this Web App</h1>
            </div>
            <div className="subtitle">
                <img className="yoImage" src={foto}></img>
            </div>
            <div className="subtitle">
                <h3>Who I am?</h3> 
            </div>
            <div className="subtitle">
                <h4 className="texto">I am a software developer, who lives in Mexico (Metropolitan Area). I am a graduate and in the process of graduating from a career in Communications and Electronics Engineering with a specialty in computing.</h4>
            </div>
            <div className="subtitle">
                <h3>What is this application?</h3> 
            </div>
            <div className="subtitle">
                <h4 className="texto">I developed this application to show my knowledge in developing web applications using different implementation technologies. It is mainly done in HTML5, CSS3 and JavaScript, using the React Framework.</h4>
            </div>
            <div className="subtitle">
                <h3>My knowledge and skills</h3> 
            </div>
            <div className="subtitle">
                <h4 className="texto">I have experience working with different programming languages, such as: C#, Python, JavaScript, TypeScript and SQL. I know web development well with the 3 technologies of the web standard, as well as its React and Angular frameworks. I also have knowledge in cloud like AWS and Azure. I am Microsoft Azure AZ-900 certified. I am very self-taught and I really like to solve problems, I know how to work under pressure and focused on solutions, I know how to work in a team, although I don't mind working alone.</h4>
            </div>
            <div className="subtitle">
                <h3>Contact</h3> 
            </div>
            <div>
                <h4 className="texto"><FaWhatsapp style={{fontSize: '30px'}}/> 55 2985 7695</h4>
                <h4 className="texto"><SiGmail style={{fontSize: '30px'}}/> sergio.cardhdez97@gmail.com</h4>
                <h4 className="texto">CV: <a href={cv}><FaFileDownload style={{fontSize: '30px'}}/></a></h4>
                <h4 className="texto"><a href="https://github.com/SergioCardoso97"><FaGithub style={{fontSize: '30px'}}/></a></h4>
                <h4 className="texto"><a href="https://www.linkedin.com/in/sergio-cardoso-hern%C3%A1ndez-453548219/"><FaLinkedin style={{fontSize: '30px'}}/></a></h4>
                
            </div>

        </div>
    );
}
export default MadeByComponent;