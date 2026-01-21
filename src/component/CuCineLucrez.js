import React, {Component} from 'react';
import Sectiontitle from '../component/Banner/Sectiontitle';
import Fade from 'react-reveal/Fade';

class CuCineLucrez extends Component{
    render(){
        let isacData = this.props.isacData;
        var {wClass} = this.props
        return(
            <section className={`${wClass}`} id="service">
                <div className="container">
                    <Sectiontitle Title="CU CINE LUCREZ (MINI-CAZURI)" TitleP="exemple clare"/>
                        
                     <Fade bottom cascade duration={1000}>
                        <div className="row">
                            {
                                isacData.service && isacData.service.map(item =>{
                                return(
                                        <div className="col-lg-4 col-sm-6" key={item.id}>
                                            <div className="work_item wow fadeInUp" data-wow-delay="0.1s">
                                                <img src={item.iconName} alt={item.serviceTitle}  style={{
                                                        width: "80px",
                                                        height: "80px",
                                                        borderRadius: "50%",
                                                        border: "2px solid black",
                                                        objectFit: "cover",
                                                        display: "block",
                                                        margin: "0 auto",
                                                    }}/>
                                                <a href=".#"><h2 className="t_color" style={{ marginTop: '10px'}}>{item.serviceTitle}</h2></a>
                                                <p>{item.sDetails}</p>
                                                <p>{item.sDetails1}</p>
                                                <p>{item.sDetails2}</p>
                                            </div>
                                        </div>
                                        )
                                    }
                                )
                            }
                        </div>
                    </Fade> 
                </div>
            </section>
        )
    }
}

export default CuCineLucrez;