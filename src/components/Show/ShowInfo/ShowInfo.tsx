import Show from "../../../models/Show";
import style from "./ShowInfo.module.css";


type ComponentProps = {
  show: Show;
};

export default function ShowInfo(props: ComponentProps) {
  let show_data = props.show;
  console.log(show_data)
  let genres = show_data?.genres;
  let days_showing = show_data.schedule.days;
  

  return (
    <div className={style.content_column}>
      <h2>Show Info</h2>
      <div className={style.column_item}>
        <p className={style.item_key}>Streaming on</p>
        <p className={style.item_value}>{show_data.network.name}</p>
      </div>

      <div className={style.column_item}>
        <p className={style.item_key}>Schedule</p>
        <p className={style.item_value}>
          {days_showing.map((day: string, id:number) => {
            return <span key={id}>{day}</span>;
          })}
        </p>
      </div>

      <div className={style.column_item}>
        <p className={style.item_key}>Status</p>
        <p className={style.item_value}>{show_data.status}</p>
      </div>

      <div className={style.column_item}>
        <p className={style.item_key}>Genres</p>
        <p className={style.item_value}>
          {genres
            ? genres.map((genre: string, i: number) => {
                return <span key={i}>{genre}</span>;
              })
            : "No genre"}
        </p>
      </div>
    </div>
  );
}
