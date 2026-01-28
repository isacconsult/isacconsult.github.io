import React, {Component} from 'react';
class BlogItems extends Component{
    render(){
        let {bTitle, bDetails, btnText, image, Pdata, slug} = this.props;
    
        return(
            <div className="col-lg-4 col-sm-6">
                <div className="blog_post">
                    <div className="blog_img">
                        <img className="img-fluid" src={require ("../../image/" + image)} alt=""/>
                        <div className="post_date">
                            {Pdata}
                        </div>
                    </div>
                    <div className="post_content">
                        <div className="blog-meta">
                            <span>
                                <i className="icon_tags_alt"></i>
                                BY : Isac
                            </span>
                        </div>
                        <a href={`/articole/${slug}`}><h2>{bTitle}</h2></a>
                        <p>{bDetails}</p>
                        <a href={`/articole/${slug}`} className="read_btn">{btnText}<i className="arrow_right"></i> </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default BlogItems;