import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import thumbs from './api/DesignsData';

const Gallery = ()=>{
  
   const renderThumbnails = () => {
    return thumbs.map((thumb) => (
      <div
        id="animated-thumbnails"
        key={thumb.id}
        data-lg-size={thumb.size}
        data-src={thumb.src}
      >
        <img
          alt={'images' + thumb.id}
          src={thumb.src}
          className="shadow-xl rounded-xl"
          data-lg-size={thumb.size}
        />
      </div>
    ));
  };
  return(
     <LightGallery
          speed={250}
          addClass="lg-custom-thumbnails"
          appendThumbnailsTo=".lg-outer"
          animateThumb={true}
          thumbnailLazyLoad={true}
          licenseKey=""
          elementClassNames="grid md:grid-cols-6 grid-cols-3 grid-rows-auto"
          responsive={{
            768: {
              mode: 'lg-slide',
              speed: 500,
              enableSwipe: true,
              enableDrag: true,
            },
            1024: {
              mode: 'lg-fade',
              speed: 700,
              enableSwipe: true,
              enableDrag: true,
            },
          }}
          allowMediaOverlap={false}
          thumbnailSize="contain"
          thumbnailWidth="200"
          thumbnailHeight="200"
          thumbnailAnimate={true}
          thumbnailActiveBorderColor="blue"
          thumbnailActiveScale={1.2}
        >
          {renderThumbnails()}
        </LightGallery>
  );
}
export default Gallery;