import React from 'react';
import { useSelector } from 'react-redux';
import DetailCard from '../../components/DetailCard/DetailCard';
import { makeSelectAnimeDetails } from '../../redux/Home/selectors';

export default function DetailsAnime() {
  const dataDetails = useSelector(makeSelectAnimeDetails());

  return (
    <div>
      <DetailCard dataDetails={dataDetails?.data} />
    </div>
  );
}
