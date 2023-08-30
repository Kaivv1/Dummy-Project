/* eslint-disable react/prop-types */
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../style/carousel.css';
export function CarouselDefault({ images }) {
  console.log(images);
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      autoPlay={true}
      interval={2000}
      className=" w-2/4 sm:m-auto"
    >
      {images &&
        images.map((image, i) => (
          <div key={i}>
            <img src={image} alt={`image ${i}`} />
          </div>
        ))}
    </Carousel>
  );
}

export default CarouselDefault;
