import React, {Component} from 'react';
import Reveal from 'react-reveal/Reveal/';

class Oferta extends Component{
    render(){
        var {wClass} = this.props
        return(
            <section className={`${wClass}`} id="service">
                <div className="container">
                  <div className="section_title text-center mb_60">
                    <Reveal  effect="fadeInUp"><h2 className="mb_0 title_h2 t_color">OFERTA (SIMPLU, MONETIZABIL)</h2></Reveal>
                    <Reveal  effect="fadeInUp" duration={1500}><p className="mb_0 title_p">ISAC Rapid </p></Reveal>
                    <Reveal  effect="fadeInUp" duration={1500}><p className="mb_0 title_p">10 minute | 100 RON</p></Reveal>
                    <Reveal  effect="fadeInUp" duration={1500}><p className="mb_0 title_p">Instrucțiuni clare, aplicabile imediat.</p></Reveal>
                    <p className="mb_0 title_p">|</p>
                    <Reveal  effect="fadeInUp" duration={1500}><p className="mb_0 title_p">ISAC Strategy</p></Reveal>
                    <Reveal  effect="fadeInUp" duration={1500}><p className="mb_0 title_p">50 minute | 500 RON</p></Reveal>
                    <Reveal  effect="fadeInUp" duration={1500}><p className="mb_0 title_p">Claritate + reguli reutilizabile.</p></Reveal>
                  </div>
                </div>
            </section>
        )
    }
}

export default Oferta;