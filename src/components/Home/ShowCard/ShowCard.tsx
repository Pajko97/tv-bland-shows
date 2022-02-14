import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import API from '../../../api/shows-api'
import Schedule from '../../../models/Schedule'
import Show from '../../../models/Show'
import style from './ShowCard.module.css'
type Props = {
  data : Show
}

export default function ShowCard(props: Props) {

  return (
    <div>
       <div className={style.show_card}>
        <Link to={`/shows/${props.data.id}`}>
          <img src={props.data.image?.medium} alt={props.data.name} />
        </Link>
        <p>{props.data.name}</p>
      </div>
    </div>
  )
}
