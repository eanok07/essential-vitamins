import React from 'react';

function News() {
  return (
    <section className="news">
      <h2>Latest News</h2>
      <div className="news__list">
        <div className="news__item">
          <img 
            src="6" 
            alt="Product News 1" 
            loading="lazy"
          />
          <p>New Vitamin Product Launched</p>
        </div>
        <div className="news__item">
          <img 
            src="/5" 
            alt="Product News 2" 
            loading="lazy"
          />
          <p>Get 30% Off on Your First Purchase</p>
        </div>
      </div>
    </section>
  );
}

export default News;
