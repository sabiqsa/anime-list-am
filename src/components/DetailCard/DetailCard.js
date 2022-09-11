import React from 'react';

import './DetailCard.css';

export default function DetailCard(props) {
  const { dataDetails } = props;
  return (
    <div className="detailCard">
      <div className="detailCard__container">
        <div
          className="img1"
          style={{
            backgroundImage: `url(${dataDetails?.images?.jpg?.image_url})`,
          }}
        ></div>
        <div className="detailCard__wrapper">
          <div className="detailCard__title">
            <div>title</div>
            <div>tgl release</div>
          </div>
          <div className="detailCard__synopsis">
            <div>Synopsis</div>
            <div>detail synopsis</div>
          </div>
          <div className="detailCard__genre">
            <div>detail genre</div>
          </div>
        </div>
      </div>
    </div>
  );
}
