import { lazy, Suspense } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Navbar from '../../component/Navbar/NavbarTwo';
import PBanner from '../../component/Banner/ParticlesBanner';
import Footer from '../../component/Footer';
import isacData from '../isacData';
import articleData from '../../component/Blog/ArticleData';

export const Article = () => {
  const { slug } = useParams(); // gets :slug from URL
  const history = useHistory();
  const article = articleData.find(el => el.slug === slug)
  const articleNumber = articleData.length;
  const currPage = article.index

  const Art = lazy(() =>
    import(`./Articles/${slug}`)
      .catch(() => ({
        default: () => <div>Articolul "{slug}" nu a fost gasit</div>
      }))
  );
  const onPageChange = (i) => {
    const nextArticle = articleData.find(el => el.index === i)
    const nextArticleSlug = nextArticle.slug
    history.push(`/articole/${nextArticleSlug}`);
  }
  function PaginationButtons(currentPage, totalPages) {
    const prevDisabled = currentPage <= 1;
    const nextDisabled = currentPage >= totalPages;

    return (
      <div style={{
        display: 'flex',
        gap: '12px',
        justifyContent: 'center',
        margin: '2rem 0',
        fontFamily: 'system-ui, sans-serif'
      }}>
        <button
          onClick={() => !prevDisabled && onPageChange(currentPage - 1)}
          disabled={prevDisabled}
          style={{
            padding: '10px 20px',
            fontSize: '15px',
            fontWeight: '500',
            color: prevDisabled ? '#aaa' : '#333',
            backgroundColor: prevDisabled ? '#f5f5f5' : 'white',
            border: '1px solid',
            borderColor: prevDisabled ? '#e0e0e0' : '#d1d5db',
            borderRadius: '8px',
            cursor: prevDisabled ? 'not-allowed' : 'pointer',
            transition: 'all 0.18s ease',
            boxShadow: prevDisabled ? 'none' : '0 1px 3px rgba(0,0,0,0.08)',
          }}
          onMouseEnter={e => {
            if (!prevDisabled) e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
          }}
          onMouseLeave={e => {
            if (!prevDisabled) e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.08)';
          }}
        >
          ← Anterior
        </button>

        <button
          onClick={() => !nextDisabled && onPageChange(currentPage + 1)}
          disabled={nextDisabled}
          style={{
            padding: '10px 20px',
            fontSize: '15px',
            fontWeight: '500',
            color: nextDisabled ? '#aaa' : '#333',
            backgroundColor: nextDisabled ? '#f5f5f5' : 'white',
            border: '1px solid',
            borderColor: nextDisabled ? '#e0e0e0' : '#d1d5db',
            borderRadius: '8px',
            cursor: nextDisabled ? 'not-allowed' : 'pointer',
            transition: 'all 0.18s ease',
            boxShadow: nextDisabled ? 'none' : '0 1px 3px rgba(0,0,0,0.08)',
          }}
          onMouseEnter={e => {
            if (!nextDisabled) e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
          }}
          onMouseLeave={e => {
            if (!nextDisabled) e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.08)';
          }}
        >
          Următor →
        </button>
      </div>
    );
  }

  return <div className="body_wrapper">
    <Navbar mContainer="custome_container" mainlogo="logo2.png" stickylogo="logo.png" showArticles={true} />
    <PBanner articleData={article} />
    <section className='work_area'>
      <div className="container">
        <div className="section_title text-center">
          <Suspense fallback={<div>Loading...</div>}>
            <Art />
          </Suspense>
          <div className='pagination-arrows'>
            {PaginationButtons(currPage, articleNumber)}
          </div>
        </div>
      </div>
    </section>
    <Footer isacData={isacData} />
  </div>
}




