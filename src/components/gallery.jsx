import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import thumbs from './Api/DesignsData';

const Gallery = () => {
  const renderThumbnails = () => {
    return thumbs.map((thumb) => (
      <div
        id="animated-thumbnails"
        key={thumb.id}
        data-lg-size={thumb.size}
        data-src={thumb.src}
        className="group cursor-pointer"
      >
        <div className="relative overflow-hidden rounded-xl bg-night-700/50 border border-earth-700/30 group-hover:border-savanna-400/50 transition-all duration-300">
          <img
            alt={`Design work ${thumb.id}`}
            src={thumb.src}
            className="w-full h-auto aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-night-600/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>
    ));
  };

  return (
    <LightGallery
      speed={300}
      addClass="lg-custom-thumbnails"
      animateThumb={true}
      licenseKey=""
      elementClassNames="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4"
      mode="lg-fade"
      download={false}
      counter={true}
    >
      {renderThumbnails()}
    </LightGallery>
  );
};

export default Gallery;