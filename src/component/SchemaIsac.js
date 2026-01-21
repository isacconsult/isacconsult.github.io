import React, {Component} from 'react';
import Reveal from 'react-reveal';

class SchemaIsac extends Component{
    render(){
        var {wClass} = this.props
        return(
            <section className={`${wClass}`} id="service">
                <div className="container">
                  <div className="section_title text-center">
                    <Reveal  effect="fadeInUp"><h2 className="mb_0 title_h2 t_color">SCHEMA ISAC (LOGICĂ VIZUALĂ)</h2></Reveal>
                    <Reveal  effect="fadeInUp" duration={1500}><p className="mb_0 title_p">Tipologia lui</p></Reveal>
                    <Reveal  effect="fadeInUp" duration={1500}><p className="mb_0 title_p" style={{ color: "#797979" }}>⬇️</p></Reveal>
                    <Reveal  effect="fadeInUp" duration={1500}><p className="mb_0 title_p">Comportament</p></Reveal>
                    <Reveal  effect="fadeInUp" duration={1500}><p className="mb_0 title_p">⬇️</p></Reveal>
                    <Reveal  effect="fadeInUp" duration={1500}><p className="mb_0 title_p">Context</p></Reveal>
                    <Reveal  effect="fadeInUp" duration={1500}><p className="mb_0 title_p">⬇️</p></Reveal>
                    <Reveal  effect="fadeInUp" duration={1500}><p className="mb_0 title_p">Acțiunea ta</p></Reveal>
                    <Reveal  effect="fadeInUp" duration={1500}><p className="mb_0 title_p">⬇️</p></Reveal>
                    <Reveal  effect="fadeInUp" duration={1500}><p className="mb_0 title_p">Rezultat</p></Reveal>
                    <Reveal  effect="fadeInUp" duration={1500}><p className="mb_0 title_p">*</p></Reveal>
                    <Reveal  effect="fadeInUp" duration={1500}><p className="mb_0 title_p">Regulă:</p></Reveal>
                    <Reveal  effect="fadeInUp" duration={1500}><p className="mb_0 title_p">Nu schimbi omul. Schimbi reacția ta.</p></Reveal>
                    <Reveal  effect="fadeInLeft" duration={2000}><span className="bottom_line"></span></Reveal>
                  </div>
                </div>
            </section>
        )
    }
}

export default SchemaIsac;