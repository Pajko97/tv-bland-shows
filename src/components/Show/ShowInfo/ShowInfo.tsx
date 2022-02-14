import React, { useEffect, useState } from 'react';
import API from '../../../api/shows-api';
import Actor from '../../../models/Actor';
import Show from '../../../models/Show';
import style from './ShowInfo.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckToSlot } from '@fortawesome/free-solid-svg-icons'

type ComponentProps = {
  show: Show
}

export default function ShowInfo(props: ComponentProps) {
  let show_data = props.show
  let days_showing = show_data?.schedule?.days
  let { genres } = show_data
  return (
      <div className={style.content_column}>
        <h2>Show Info</h2>
        <div className={style.column_item}>
            <p className={style.item_key}>Streaming on</p>
            <p className={style.item_value}>{show_data.network.name}</p>
        </div>

        <div className={style.column_item}>
            <p className={style.item_key}>Schedule</p>
            <p className={style.item_value}>{days_showing.map((day: string) => {
              return(
                <span>{day}</span>
            )})}</p>
        </div>

        <div className={style.column_item}>
            <p className={style.item_key}>Status</p>
            <p className={style.item_value}>{show_data.status}</p>
        </div>

        <div className={style.column_item}>
            <p className={style.item_key}>Genres</p>
            <p className={style.item_value}>{genres.length > 1 ? genres.map((genre: string) => {
              return(
                <span>{genre}</span>
            )}) : 'No genre'}</p>
        </div>
      </div>
  );
}
