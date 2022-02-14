import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import API from '../../api/shows-api';
import SingleShow from '../../models/Show'
import striptags from '../../helpers/striptags'
import Rating from 'react-rating'
import ActorList from "../../components/Show/ActorList/ActorList"
import style from './Show.module.css'
import ShowInfo from '../../components/Show/ShowInfo/ShowInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons'

type Props = Object

function Show(props: Props) {
  const [show, setShow] = useState<SingleShow>()

  let { id }: any = useParams();
  let showId = parseInt(id)

  useEffect(() => {
    let api = new API();
    api.getShow(showId)
      .then(res => setShow(res.data))
  }, [])

  const calcRating = (rating: number) =>
	rating > 5 ? Math.round((rating / 2) * 10) / 10 : rating

  return (
    <React.Fragment>
      {show && <div className={style.show_wrapper}>
        <div>
          <div className={style.show_header}>
            <img src={show.image.medium} alt="show cover"></img>
            <div className={style.show_basic_info}>
            <Rating
              emptySymbol={<FontAwesomeIcon icon={faStarHalfStroke} />}
              readonly
              initialRating={calcRating(show.rating.average)}
              fullSymbol={<FontAwesomeIcon icon={faStar}/>}

            />
            <span className={style.rate}>{show.rating.average ? `${show.rating.average}/5` : 'Not provided'}</span>
            <h1>{show.name}</h1>
            <p>{striptags(show.summary)}</p>
            </div>
          </div>

          <div className={style.show_details}>
            <ShowInfo show={show} />
            <ActorList showId={showId} />
          </div>
        </div>
      </div>}
    </React.Fragment>
  );
}

export default Show

