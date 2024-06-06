import React from 'react';

function CommunityHighlights() {
  return (
    <section className="community-highlights">
      <h2>Community Highlights</h2>
      <div className="community-container">
        <div className="community-post">
          <h3>Community Topic 1</h3>
          <p>Discussion summary...</p>
          <a href="#">Join Discussion</a>
        </div>
        {/* Repeat for more posts */}
      </div>
    </section>
  );
}

export default CommunityHighlights;
