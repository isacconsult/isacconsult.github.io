import React, {Component} from 'react';
import {Link} from 'react-scroll';
import {Fade, Reveal} from 'react-reveal';

class About extends Component {
    render(){
        let isacData = this.props.isacData; 
        var {aClass} = this.props;
        return(
            <section className={`${aClass}`} id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 d-flex align-items-center">
                            <Fade bottom cascade duration={1000}>
                                <div className="about_content">
                                    <h2 className="t_color">{isacData.aboutme}</h2>
                                    <p>{isacData.aboutdetails}</p>
                                    <Link
                                     activeClass="active"
                                     to="contact"
                                     spy={true}
                                     smooth={true}
                                     offset={-86}
                                     duration={500}
                                     className="theme_btn active nav-link">ISAC Rapid — 10 minute</Link>
                                </div>
                            </Fade>
                        </div>
                        <div className="col-lg-5">
                            <div className="about_img">
                                <Reveal effect="fadeInRight" duration={1500}><img src={require('../image/isac.webp')} alt=""/></Reveal>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default About;
