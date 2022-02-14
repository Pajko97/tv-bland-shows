import Rating from "react-rating";
import { Link } from "react-router-dom";
import Show from "../../../models/Show";
import style from "./ShowCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
type Props = {
  data: Show;
};

const calcRating = (rating: number) =>
  rating > 5 ? Math.round((rating / 2) * 10) / 10 : rating;

export default function ShowCard(props: Props) {
  return (
    <div className={style.show_card}>
      <Link to={`/shows/${props.data.id}`}>
        <img
          src={
            props.data.image
              ? props.data.image.medium
              : "https://via.placeholder.com/250x350"
          }
          alt={props.data.name}
        />
      </Link>
      <div className={style.rating}>
        <Rating
          emptySymbol={<FontAwesomeIcon icon={faStarHalfAlt} />}
          readonly
          initialRating={calcRating(props.data.rating.average)}
          fullSymbol={<FontAwesomeIcon icon={faStar} />}
        />
      </div>
      <p>{props.data.name}</p>
    </div>
  );
}
