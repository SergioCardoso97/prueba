import React from "react";
import './MadeBy.css';
import foto from '../images/yo.jpg'
import cv from '../images/cv.pdf'
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaFileDownload } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { SiGmail } from "react-icons/si";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
function MadeByComponent(){
    return(
        <div>
            
            <div className="subtitle">
                <h1>Hello world, I'm Sergio Cardoso and I developed this Web App</h1>
            </div>
            <div className="subtitle">
            <Card sx={{ maxWidth: 600 }}>
                    <CardMedia
                        component="img"
                        height="auto"
                        image={foto}
                    />
                    <CardContent >
                        <Typography gutterBottom variant="h5" component="div" className="texto">
                            Who I am?
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            I am a software developer, who lives in Mexico (Metropolitan Area). I am a graduate and in the process of graduating from a career in Communications and Electronics Engineering with a specialty in computing.
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div" className="texto">
                            What is this application?
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            I developed this application to show my knowledge in developing web applications using different implementation technologies. It is mainly done in HTML5, CSS3 and JavaScript, using the React Framework.
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div" className="texto">
                            My knowledge and skills
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            I have experience working with different programming languages, such as: C#, Python, JavaScript, TypeScript and SQL. I know web development well with the 3 technologies of the web standard, as well as its React and Angular frameworks. I also have knowledge in cloud like AWS and Azure. I am Microsoft Azure AZ-900 certified. I am very self-taught and I really like to solve problems, I know how to work under pressure and focused on solutions, I know how to work in a team, although I don't mind working alone.
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div" className="texto">
                            Contact
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <h4 className="texto"><FaWhatsapp style={{fontSize: '30px'}}/> 55 2985 7695</h4>
                            <h4 className="texto"><SiGmail style={{fontSize: '30px'}}/> sergio.cardhdez97@gmail.com</h4>
                            <h4 className="texto">CV: <a href={cv}><FaFileDownload style={{fontSize: '30px'}}/></a></h4>
                            <h4 className="texto"><a href="https://github.com/SergioCardoso97"><FaGithub style={{fontSize: '30px'}}/></a></h4>
                            <h4 className="texto"><a href="https://www.linkedin.com/in/sergio-cardoso-hern%C3%A1ndez-453548219/"><FaLinkedin style={{fontSize: '30px'}}/></a></h4>
                        </Typography>
                    </CardContent>
            </Card>
            </div>
        </div>
    );
}
export default MadeByComponent;