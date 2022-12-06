import { GiRoundStar } from "react-icons/gi";
import PropTypes from "prop-types";
import { useMemo, useState } from "react";
import { hover } from "@testing-library/user-event/dist/hover";

const StarRating = ({ count, rating, color, onRating }) => {
  const [hoverRating, setHoverRating] = useState(0);
  const getColor = (index) => {
    if (hoverRating >= index) {
      return color.filled;
    } else if (!hoverRating && rating >= index) {
      return color.filled;
    }

    return color.unfilled;
  };

  const rateGame = useMemo(() => {
    return Array(count)
      .fill(0)
      .map((_, i) => i + 1)
      .map((idx) => (
        <GiRoundStar
          key={idx}
          className="cursor-pointer"
          style={{ color: getColor(idx) }}
          onClick={() => onRating(idx)}
          onMouseEnter={() => setHoverRating(idx)}
          onMouseLeave={() => setHoverRating(0)}
        />
      ));
  }, [count, rating, hoverRating]);

  return (
    <div className="flex">
      {rateGame}
      <p className="pl-6">{rating}/5 stars</p>
    </div>
  );
};

StarRating.propTypes = {
  count: PropTypes.number,
  rating: PropTypes.number,
  onChange: PropTypes.func,
  color: {
    filled: PropTypes.string,
    unfilled: PropTypes.string,
  },
};
StarRating.defaultProps = {
  count: 5,
  rating: 0,
  color: {
    filled: "#f5eb3b",
    unfilled: "#dcdcdc",
  },
};

export default StarRating;
