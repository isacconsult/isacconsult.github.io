import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade';
class Footer extends Component{
    render(){
        let isacData = this.props.isacData;
        return(
            <section className="footer-area">
                <div className="container">
                    <div className="footer-content">
                        <h6>Consultanță comportamentală și strategie de relaționare,
                            </h6>
                        <h6>bazată pe comportamente observabile și funcția lor
                            în contexte specifice.</h6>
                        <h6>- - -</h6>
                        <Link to="/" className="logo wow fadeInDown" data-wow-delay="0.4s">
                            <img src={require('../image/logo2.png')} alt=""/>
                        </Link>
                        
                        <Fade top cascade>
                            <ul className="list_style">
                                {
                                    isacData.socialLinks.map(item =>{
                                        return(
                                            <li key={item.name}>
                                                <a  href={item.url}><i className={item.className}></i></a> 
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </Fade>
                        
                        <h6>Made with love by ISACconsult</h6>
                        <p>© 2026 - All Rights Reserved</p>
                    </div>
                </div>
            </section>
        )
    }
}
export default Footer;