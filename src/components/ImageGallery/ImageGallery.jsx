import ImageGalleryItem from '../ImageGalleryItem';
import './ImageGallery.css';
import PropTypes from 'prop-types';

const  ImageGallery =  ({ items }) => {
  return (
    <>
      <ul className="gallery">
        {items.map(item => (
          <ImageGalleryItem key={item.id} item={item} />
        ))}
      </ul>
    </>
  );
}

export default ImageGallery;

ImageGallery.propTypes = {
  items: PropTypes.array,
};