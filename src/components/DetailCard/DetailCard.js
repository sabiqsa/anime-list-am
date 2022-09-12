import React from 'react';

import Star from '../../assets/star.png';

import './DetailCard.css';

export default function DetailCard(props) {
  const { dataDetails } = props;

  return dataDetails ? (
    <div className="detailCard">
      <div className="detailCard__container">
        <div
          className="img1"
          style={{
            backgroundImage: `url(${dataDetails?.images?.jpg?.image_url})`,
          }}
        />
        <div className="detailCard__wrapper">
          <div className="detailCard__title">
            <h1>{dataDetails?.title}</h1>
            <div className="detailCard__title--year">
              {dataDetails?.year ?? '2022'}
            </div>
          </div>
          <div className="detailCard__rating">
            <div>{dataDetails?.rating}</div>
          </div>
          <div className="detailCard__score">
            <img src={Star} alt="" />
            <div>{dataDetails?.score ?? '-'}</div>
          </div>
          <div className="detailCard__synopsis">
            <p>Synopsis</p>
            <div>{dataDetails?.synopsis}</div>
          </div>
          <div className="detailCard__genre">
            {dataDetails?.genres?.map((item) => {
              return <div className="detailCard__genre--item">{item.name}</div>;
            })}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}
