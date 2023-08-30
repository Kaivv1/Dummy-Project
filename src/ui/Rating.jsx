/* eslint-disable react/prop-types */
import StarRatings from 'react-star-ratings';
const Rating = ({ rating }) => {
  return (
    <div className="md:text-xl xl:text-2xl">
      <p className="mr-2 inline-block ">Rate:</p>
      <StarRatings
        rating={rating}
        starRatedColor="gold"
        numberOfStars={5}
        starDimension="20px"
        starSpacing="2px"
      />
      <p className="ml-2 inline-block">{rating}</p>
    </div>
  );
};

export default Rating;
