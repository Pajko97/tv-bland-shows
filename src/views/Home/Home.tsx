import React, { useEffect, useState } from "react";
import API from "../../api/shows-api";
import ShowCard from "../../components/Home/ShowCard/ShowCard";
import Schedule from "../../models/Schedule";
import style from "./Home.module.css";
function Home() {
  const [shows, setShows] = useState<Array<Schedule>>([]);

  useEffect(() => {
    let api = new API();
    api.getLatestShows().then((res) => setShows(res.data));
  }, []);

  return (
    <div className={style.home_wrapper}>
      <div className={style.offset}>
        <p>
          TV Show and web series database. Create personalized schedules.
          Episode guide, cast, crew and character information.
        </p>
      </div>
      <div className={style.content}>
        <h1 className={style.headline}>Last added shows</h1>
        <div className={style.show_list}>
          {shows &&
            shows.map((item: Schedule, i) => {
              return <ShowCard key={i} data={item.show} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default Home;
