import React, { Component, useEffect, useState } from "react";
import { useParams } from "react-router";
import API from "../../api/shows-api";
import SingleShow from "../../models/Show";
import striptags from "../../helpers/striptags";
import Rating from "react-rating";
import ActorList from "../../components/Show/ActorList/ActorList";
import style from "./Show.module.css";
import ShowInfo from "../../components/Show/ShowInfo/ShowInfo";

type ComponentProps = {
  id: number | undefined
};

export default function Show(props: ComponentProps) {
  const [show, setShow] = useState<SingleShow>();
  let params = useParams();
  let IdFromURL = params.id
  let id: any = props.id ? props.id : IdFromURL
  let showId = parseInt(id);

  useEffect(() => {
    let api = new API();
    api.getShow(showId).then((res) => setShow(res.data));
  }, []);

  const calcRating = (rating: number) =>
    rating > 5 ? Math.round((rating / 2) * 10) / 10 : rating;

  return (
    <div>
      {show && (
        <div className={style.show_wrapper}>
          <div>
            <div className={style.show_header}>
              <img src={show.image.original ? show.image.original : "https://via.placeholder.com/200x400"} alt="show cover"></img>
              <div className={style.show_basic_info}>
                <Rating
                  emptySymbol={'fa fa-star-o medium'}
                  readonly
                  initialRating={calcRating(show.rating.average)}
                  fullSymbol={'fa fa-star medium'}
                />
                <span className={style.rate}>
                  {show.rating.average
                    ? `${Math.round(show.rating.average/2 * 10) / 10}/5`
                    : "Not provided"}
                </span>
                <h1>{show.name}</h1>
                <p>{striptags(show.summary)}</p>
              </div>
            </div>

            <div className={style.show_details}>
              <ShowInfo show={show} />
              <ActorList showId={showId} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
