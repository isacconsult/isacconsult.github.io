import { Component } from 'react';
import Navbar from '../../component/Navbar/NavbarTwo';
import PBanner from '../../component/Banner/ParticlesBanner';
import Footer from '../../component/Footer';
import BlogItems from '../Blog/BlogItems';
import articleData from './ArticleData';
import isacData from '../isacData';

const bannerData = {
  title: 'Articole'
};

class Blog extends Component {
  state = {
    searchTerm: '',
  };

  handleSearchChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  render() {
    const { searchTerm } = this.state;

    // Filter articles – case insensitive, by title
    const filteredArticles = articleData.filter(item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <div className="body_wrapper">
        <Navbar
          mContainer="custome_container"
          mainlogo="logo2.png"
          stickylogo="logo.png"
          showArticles={false}
        />

        <PBanner articleData={bannerData} />

        <section className="blog_area">
          <div className="container">
            {/* Search bar */}
            <div className="blog-search-wrapper">
              <div className="search-container">
                <input
                  type="text"
                  placeholder="Caută articole..."
                  value={searchTerm}
                  onChange={this.handleSearchChange}
                  className="blog-search-input"
                />
                <span className="search-icon">🔍</span>
              </div>

              {/* Optional result count */}
              {searchTerm && (
                <p className="search-results-info">
                  {filteredArticles.length} rezultat
                  {filteredArticles.length !== 1 ? 'e' : ''} găsit
                  {filteredArticles.length !== 1 ? 'e' : ''}
                  {searchTerm && ` pentru „${searchTerm}”`}
                </p>
              )}
            </div>

            <div className="row">
              {filteredArticles.length > 0 ? (
                filteredArticles.map((el) => (
                  <BlogItems
                    key={el.slug}
                    bTitle={el.title}
                    bDetails={el.desc}
                    btnText="Citește"
                    image={el.image}
                    Pdata={el.date}
                    slug={el.slug}
                  />
                ))
              ) : (
                <div className="no-results">
                  <p>Niciun articol nu corespunde căutării tale.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        <Footer isacData={isacData} />
      </div>
    );
  }
}

export default Blog;