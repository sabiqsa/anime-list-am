import React from 'react';
import { format } from 'date-fns';

import './Card.css';

export default function Card(props) {
  const { handleGoToDetail, anime } = props;

  const formatTime = (date) => {
    return format(new Date(date), 'MMMM dd, yyyy');
  };
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
          Start date: {formatTime(anime?.aired?.from)}
          <br />
          End date: {formatTime(anime?.aired?.to)}
        </div>
        <div className="score">{anime?.score}</div>
        <div className="rank">{anime?.rank}</div>
        <div className="catagory">{anime?.type}</div>
        <div className="views">{anime?.members}</div>
      </div>
    </div>
  );
}
