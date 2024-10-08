import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Dynamically require all images from the folder
const importAll = (r) => {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
};

const images = importAll(require.context('../assets/images/frisures', false, /\.(png|jpe?g|svg)$/));

const Friseur = () => {

  return (
    <div>
      <div className="inner-page-banner" id="home">
        <img src="assets/images/ban2.jpg" alt="Banner" className="img-responsive banner-img" />
      </div>

      <div className="breadcrumb-agile">
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item">
            <Link to="/">Nyitólap</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">Frizurák</li>
        </ol>
      </div>

      <section className="gallery py-1" id="gallery">
        <div className="container py-md-5">
          <h3 className="heading text-center mb-3 mb-sm-5">Frizurák</h3>
          <div className="gallery-content">
            <div className="row">
              {/* Dynamically render images */}
              {Object.keys(images).map((image, index) => (
                <div className="col-md-4 col-sm-6 mb-4" key={index}>
                  <div className="image-container">
                    <img
                      src={images[image]}
                      alt={`Frizura ${index + 1}`}
                      className="img-fluid gallery-image"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Friseur;
