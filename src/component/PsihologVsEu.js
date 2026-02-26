import { Component } from 'react';
import Reveal from 'react-reveal';
import { Link } from 'react-router-dom'

class PsihologVsEu extends Component{
    render(){
        var {wClass} = this.props
        return(
            <section className={`${wClass}`}>
                <div className="container">
                  <div className="section_title text-center">
                    <Reveal  effect="fadeInUp"><h2 className="mb_0 title_h2 t_color">CE FACE PSIHOLOGUL ŞI CE FAC EU (PE ROMÂNEŞTE)</h2></Reveal>
                    <Reveal  effect="fadeInUp" duration={1500}>
                      <p className="mb_0 title_p">Psihologul: te ajută să te înțelegi.</p>
                    </Reveal>
                    <Reveal  effect="fadeInUp" duration={1500}>
                      <p className="mb_0 bold_text">Eu: te ajut să nu mai pățesti acelasi lucru.</p>
                    </Reveal>
                    <Reveal  effect="fadeInUp" duration={1500}>
                      <p className="mb_0 title_p">Psihologul lucrează cu ce este în capul tău.</p>
                    </Reveal>
                    <Reveal  effect="fadeInUp" duration={1500}>
                      <p className="mb_0 bold_text">Eu lucrez cu ce se întâmplã între tine si ceilalți.</p>
                    </Reveal>
                    <Reveal  effect="fadeInUp" duration={1500}>
                      <p className="mb_0 title_p">Psihologul reduce suferința prin explicație.</p>
                    </Reveal>
                    <Reveal  effect="fadeInUp" duration={1500}>
                      <p className="mb_0 bold_text">Eu o reduc schimbând situația concretă.</p>
                    </Reveal>
                    <Reveal  effect="fadeInUp" duration={1500}>
                      <p className="mb_0 title_p">Psihologia explică omul.</p>
                    </Reveal>
                    <Reveal  effect="fadeInUp" duration={1500}>
                      <p className="mb_0 bold_text">Eu schimb jocul în care omul trăiește.</p>
                    </Reveal>
                     <Reveal  effect="fadeInUp" duration={1500}>
                      <Link className="theme_btn nav-link" to="/articole/treizeciunu">👉 Citește</Link>
                     </Reveal>
                  </div>
                </div>
            </section>
        )
    }
}

export default PsihologVsEu;