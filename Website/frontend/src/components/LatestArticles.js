import React from 'react';

function LatestArticles() {
  return (
    <section className="latest-articles">
      <h2>Latest Articles</h2>
      <div className="articles-container">
        <article>
          <img src="article1.jpg" alt="Article 1" />
          <h3>Article Title 1</h3>
          <p>Article summary goes here...</p>
          <a href="#">Read More</a>
        </article>
        {/* Repeat for more articles */}
      </div>
    </section>
  );
}

export default LatestArticles;
