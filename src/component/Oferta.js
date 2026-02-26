import { Component } from 'react';
import Reveal from 'react-reveal';
import { Link } from 'react-scroll';

class Oferta extends Component{
    render(){
        var {wClass} = this.props
        return(
            <section className={`${wClass}`} id="service">
                <div className="container">
                  <div className="section_title text-center">
                    <Reveal  effect="fadeInUp"><h2 className="mb_0 title_h2 t_color">OFERTA (SIMPLU, MONETIZABIL)</h2></Reveal>
                    <Reveal  effect="fadeInUp" duration={1500}><p className="mb_0 title_p" 
                      style={{ fontSize: "18px", fontWeight: 'bold' }}>ISAC Rapid </p></Reveal>
                    <Reveal  effect="fadeInUp" duration={1500}><p className="mb_0 title_p">10 minute | 100 RON</p></Reveal>
                    <Reveal  effect="fadeInUp" duration={1500}><p className="mb_0 title_p">Instrucțiuni clare, aplicabile imediat.</p></Reveal>
                    <p className="mb_0 title_p">✻ ✻ ✻</p>
                    <Reveal  effect="fadeInUp" duration={1500}><p className="mb_0 title_p"
                      style={{ fontSize: "18px", fontWeight: 'bold' }}>ISAC Strategy</p></Reveal>
                    <Reveal  effect="fadeInUp" duration={1500}><p className="mb_0 title_p">50 minute | 500 RON</p></Reveal>
                    <Reveal  effect="fadeInUp" duration={1500}><p className="mb_0 title_p">Claritate + reguli reutilizabile.</p></Reveal>
                    <Reveal  effect="fadeInLeft" duration={2000}><span className="bottom_line"></span></Reveal> 
                  </div>
                </div>
                <div className="text-center" style={{ marginTop: "20px"}}>
                  <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-86}
                  duration={500}
                  className="theme_btn active nav-link">👉 ISAC Rapid — 10 minute
                </Link>
                </div>
            </section>
        )
    }
}

export default Oferta;