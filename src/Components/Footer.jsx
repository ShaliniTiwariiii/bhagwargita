import { SiLinkedin } from "react-icons/si"
import { BsGithub} from "react-icons/bs"
import {FiTwitter} from "react-icons/fi"
export default function Footer() {
    return (
        <footer className="footer ">
            <div className="footercontainer">
               
                    
                    
                        <h3 className="heading">Connect with me on</h3>
                        <div className="linkDiv">
                          
                            <a href="https://www.linkedin.com/in/shalini-tiwari-7b8932189/"  target="_blank" className="me-3" rel="noreferrer noopener">
                              < SiLinkedin style={{fontSize:'30px',color:'white'}}/>
                            </a>
                         
                                <i className="fab fa-instagram fa-2x text-light"></i>

                            <a href="https://github.com/ShaliniTiwariiii" title="GitHub/ShaliniTiwariiii" target="_blank" className="me-3" rel="noreferrer noopener"> 
                           < BsGithub style={{fontSize:'30px',color:'white'}}/>
                            </a>
                            <a href="https://twitter.com/TiwariSalini" title="Twitter/TiwariSalini" target="_blank" className="" rel="noreferrer noopener">
                           < FiTwitter style={{fontSize:'30px',color:'white'}}/>
                            </a>
                        </div>
               

                    
            </div>
        </footer>
    );
}