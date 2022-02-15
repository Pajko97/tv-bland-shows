import { useTranslation } from "react-i18next";
import Show from "../../../models/Show";
import style from "./ShowInfo.module.css";


type ComponentProps = {
  show: Show;
};


export default function ShowInfo(props: ComponentProps) {
  let show_data = props.show;
  let genres = show_data?.genres;
  let days_showing = show_data.schedule.days;
  
	const { t } = useTranslation('common');

  return (
    <div className={style.content_column}>
      <h2>{t('showInfo')}</h2>
      <div className={style.column_item}>
        <p className={style.item_key}>{t('streamedOn')}</p>
        <p className={style.item_value}>{show_data.network ? show_data.network.name : ''}</p>
      </div>

      <div className={style.column_item}>
        <p className={style.item_key}>{t('schedule')}</p>
        <p className={style.item_value}>
          {days_showing.map((day: string, id:number) => {
            return <span key={id}>{day} </span>;
          })}
        </p>
      </div>

      <div className={style.column_item}>
        <p className={style.item_key}>{t('status')}</p>
        <p className={style.item_value}>{show_data.status}</p>
      </div>

      <div className={style.column_item}>
        <p className={style.item_key}>{t('genres')}</p>
        <p className={style.item_value}>
          {genres
            ? genres.map((genre: string, i: number) => {
                return <span key={i}>{genre}, </span>;
              })
            : "No genre"}
        </p>
      </div>
    </div>
  );
}
