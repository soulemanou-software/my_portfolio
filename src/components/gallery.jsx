import { useState } from 'react';
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import allThumbs from './Api/DesignsData.new';
import { HiPhotograph } from 'react-icons/hi';

const Gallery = ({ data = null }) => {
  const [imageErrors, setImageErrors] = useState({});
  const [loadedImages, setLoadedImages] = useState({});

  const thumbs = data || allThumbs;

  const handleImageError = (id) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  };

  const handleImageLoad = (id) => {
    setLoadedImages(prev => ({ ...prev, [id]: true }));
  };

  const renderThumbnails = () => {
    return thumbs.map((thumb) => (
      <div
        id="animated-thumbnails"
        key={thumb.id}
        data-lg-size={thumb.size}
        data-src={thumb.src}
        className="group cursor-pointer"
      >
        <div className="relative overflow-hidden rounded-xl bg-night-700/50 border border-earth-700/30 group-hover:border-savanna-400/50 transition-all duration-300 aspect-square">
          {/* Loading spinner */}
          {!loadedImages[thumb.id] && !imageErrors[thumb.id] && (
            <div className="absolute inset-0 flex items-center justify-center bg-night-700/50 z-10">
              <div className="w-6 h-6 border-2 border-savanna-400/30 border-t-savanna-400 rounded-full animate-spin" />
            </div>
          )}
          
          {/* Error placeholder */}
          {imageErrors[thumb.id] ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-night-700/80 text-earth-400">
              <HiPhotograph className="w-8 h-8 mb-2 opacity-50" />
              <span className="text-xs font-accent">#{thumb.id}</span>
            </div>
          ) : (
            <img
              alt={`Design work ${thumb.id}`}
              src={thumb.src}
              onError={() => handleImageError(thumb.id)}
              onLoad={() => handleImageLoad(thumb.id)}
              className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${
                loadedImages[thumb.id] ? 'opacity-100' : 'opacity-0'
              }`}
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          )}
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