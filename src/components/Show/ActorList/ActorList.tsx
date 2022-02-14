import React, { useEffect, useState } from 'react';
import API from '../../../api/shows-api';
import Actor from '../../../models/Actor';
import style from './ActorList.module.css';

type ComponentProps = {
  showId: number
}


export default function ActorList(props: ComponentProps) {
  const [showCast, setShowCast] = useState<Array<Actor>>([])

  useEffect(() => {
    let api = new API();
    api.getShowCast(props.showId)
      .then(res => setShowCast(res.data))
  }, [])

  return (
    <div className={style.content_column}>
      <h2 className={style.item_headline}>Actors</h2>
      {showCast && showCast.map((actor, i) =>
        <div key={i} className={style.column_item}>
          <p className={style.item_key}><img src={actor.person.image.medium ? actor.person.image.medium : 'https://via.placeholder.com/30x30'} /></p>
          <div className={style.item_text}>
            <p className={style.item_key}>{actor.person.name}</p>
            <p className={style.item_value}>{actor.character.name}</p>
          </div>
        </div>
      )}
    </div>
  );
}
