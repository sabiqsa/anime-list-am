import React from 'react';

import './Card.css';

export default function Card(props) {
  const { handleGoToDetail, anime } = props;
  return (
    <div onClick={() => handleGoToDetail(anime?.mal_id)} className="card">
      <div>
        <div
          className="img1"
          style={{ backgroundImage: `url(${anime?.images?.jpg?.image_url})` }}
        ></div>
        <div
          className="img2"
          style={{ backgroundImage: `url(${anime?.images?.jpg?.image_url})` }}
        ></div>
        <div className="title">{anime?.title}</div>
        <div className="text-card">
          Start date: {anime?.start_date}
          <br />
          Start date: {anime?.end_date ? anime?.end_date : `Unknown date`}
        </div>
        <div className="score">{anime?.score}</div>
        <div className="rank">{anime?.rank}</div>
        <div className="catagory">{anime?.type}</div>
        <div className="views">{anime?.members}</div>
      </div>
    </div>
  );
}
