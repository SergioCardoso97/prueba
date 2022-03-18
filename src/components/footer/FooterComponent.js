import React from "react";
import './Footer.css';
import urlGitHub from '../images/logoGitHub.png'
import urlLinkedin from '../images/logoLinkedin.png'
function FooterComponent(){
    return(
        <div className="padreFooter">
            <div className="hijoFooter">
                <h3>Follow my work</h3> 
            </div>
            <div className="hijoFooter">
                <a href="https://github.com/SergioCardoso97"><img className="logoFooter" src={urlGitHub} alt=""/></a>
            </div>
            <div className="hijoFooter">
                <a href="https://www.linkedin.com/in/sergio-cardoso-hern%C3%A1ndez-453548219/"><img className="logoFooter" src={urlLinkedin} alt=""/></a>
            </div>
        </div>
    );
}
export default FooterComponent;