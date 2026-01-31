import { Component } from 'react';
import Navbar from '../../component/Navbar/NavbarTwo';
import PBanner from '../../component/Banner/ParticlesBanner';
import Footer from '../../component/Footer';
import BlogItems from '../Blog/BlogItems';
import articleData from './ArticleData';
import isacData from '../isacData';

const bannerData = {
    title: 'Articole'
}

class Blog extends Component {
    render() {
        return (
            <div className="body_wrapper">
                <Navbar mContainer="custome_container" mainlogo="logo2.png" stickylogo="logo.png" showArticles={false} />
                <PBanner articleData={bannerData} />
                <section className="blog_area" id="blog">
                    <div className="container">
                        <div className="row">
                            {articleData.map(el =>
                                <BlogItems key={el.slug} bTitle={el.title} bDetails={el.desc} btnText="Citește" image={el.image} Pdata={el.date} slug={el.slug} />
                            )}
                        </div>
                    </div>
                </section>
                <Footer isacData={isacData} />
            </div>
        )
    }
}
export default Blog;