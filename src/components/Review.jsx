import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './reviewStyle.css'; // Assuming you have a CSS file for styling

// Sample data for demonstration
const reviews = [
  {
    name: "Babu Bhai",
    rating: 5,
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Pankaj Yeda",
    rating: 5,
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Aish Goosekhor",
    rating: 4,
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "King er",
    rating: 5,
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Daya Behn",
    rating: 4,
    review: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "https://via.placeholder.com/150",
  },
  // Add more reviews as needed
];

const Review = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Adjust the speed of automatic sliding
  };

  return (
    <div className="rating-slider">
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <div key={index}>
            <div className="review-card">
              <img src={review.image} alt={review.name} className="avatar" />
              <h3>{review.name}</h3>
              <div className="rating">
                {Array.from({ length: review.rating }, (_, i) => (
                  <span key={i} className="star">&#9733;</span>
                ))}
              </div>
              <p>{review.review}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Review;
