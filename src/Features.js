import React from 'react';

function Features() {
  return (
    <section className="features">
      <h2>Better Ingredients</h2>
      <div className="features__list">
        <div className="feature">
          <img src="/images1" alt="Feature 1" loading="lazy" />
          <p>Magnesium</p>
        </div>
        <div className="feature">
          <img src="/images2" alt="Feature 2" loading="lazy" />
          <p>Hyaluronic Acid</p>
        </div>
        <div className="feature">
          <img src="/4" alt="Feature 3" loading="lazy" />
          <p>Leucine</p>
        </div>
      </div>
    </section>
  );
}

export default Features;
