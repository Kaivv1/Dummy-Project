/* eslint-disable react/prop-types */
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../style/carousel.css';
function CarouselDefault({ images }) {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      autoPlay={true}
      interval={2000}
      className="w-60 sm:m-auto md:w-2/4"
    >
      {images &&
        images.map((image, i) => (
          <div key={i} className="h-72">
            <img
              src={image}
              alt={`image ${i}`}
              className="h-72 object-contain"
            />
          </div>
        ))}
    </Carousel>
  );
}

export default CarouselDefault;
