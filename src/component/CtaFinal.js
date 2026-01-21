import React, {Component} from 'react';
import Reveal from 'react-reveal';

class CtaFinal extends Component{
    render(){
        var {wClass} = this.props
        return(
            <section className={`${wClass}`} id="service" style={{ borderBottom: "3px solid black" }}>
                <div className="container">
                  <div className="section_title text-center">
                    <Reveal  effect="fadeInUp"><h2 className="mb_0 title_h2 t_color">CONCLUZIE</h2></Reveal>
                    <Reveal effect="fadeInUp"><p className="mb_0 title_p">ISAC nu explică oameni. ISAC îți spune ce să faci cu oamenii.</p></Reveal>
                    <Reveal  effect="fadeInUp"><p className="mb_0 title_p">✻ ✻ ✻</p></Reveal>
                    <Reveal  effect="fadeInUp" duration={1500}><p className="mb_0 title_p">În 10 minute îți spun ce comportament să folosești
și cum să-l aplici.</p></Reveal>
                  </div>
                </div>
            </section>
        )
    }
}

export default CtaFinal;