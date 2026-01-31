import React, { Component } from "react";
import Particles from "./Particles";
import Reveal from "react-reveal";
import Typer from "./Typer";
import isacData from "../isacData";

class ParticlesBanner extends Component {
  render() {
    let articleData = this.props.articleData;
    
    return (
      <section id="home">
        <div className="banner_area_two">
          <div
            className="one_img"
            data-parallax='{"x": 0, "y": 100, "rotateZ":0}'
          >
            <img
              className="animated"
              src={require("../../image/circle-2.png")}
              alt=""
            />
          </div>
          <Particles />
          <div className="container">
            <div className="banner_content">
              <Reveal effect="fadeInUp">
                <h2 className="wow fadeInLeft animated">
                  {articleData.title}
                </h2>
              </Reveal>
              <Typer
                heading={"Isac știe:"}
                dataText={[
                  "Stimuli.",
                  "Comportamente.",
                  "Acțiuni.",
                  "Decizii.",
                ]}
              />
              <ul className="list_style social_icon">
                {isacData.socialLinks &&
                  isacData.socialLinks.map((item) => {
                    return (
                      <li key={item.name}>
                        <a href={item.url}>
                          <i className={item.className}></i>
                        </a>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ParticlesBanner;
