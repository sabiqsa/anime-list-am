import React, { useEffect, useMemo, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/Card/Card';

import { getAnimeListProcess } from '../../redux/Home/actions';
import { makeSelectAnimeList } from '../../redux/Home/selectors';

import './home.css';

export default function Home() {
  const history = useNavigate();
  const dispatch = useDispatch();

  const dataAnime = useSelector(makeSelectAnimeList());

  const [currentAnime, setCurrentAnime] = useState([]);
  const [pageCount, setPageCount] = useState(10000);
  const [currentPage, setCurrentPage] = useState(1);

  // const currentAnimeList = useMemo(() => currentAnime, [currentAnime]);
  //   const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage = 12;
  const totalData = dataAnime?.pagination?.items?.total;

  // console.log('data anime bestie', currentAnimeList);
  console.log('data anime bestie', currentAnime);

  useEffect(() => {
    dispatch(getAnimeListProcess({ pages: currentPage }));
  }, [currentPage]);

  useEffect(() => {
    // Fetch items from another resources.
    if (dataAnime.data && dataAnime.data.length > 0) {
      //   const endOffset = itemOffset + itemsPerPage;
      //   console.log(`Loading items from ${itemOffset} to ${endOffset}`);
      setCurrentAnime(dataAnime?.data);
      setPageCount(totalData / 25);
      // setPageCount(Math?.ceil(totalData / currentAnime?.length));
    }
  }, [dataAnime.data]);

  const handleOnDetail = (id) => {
    console.log('kucing', id);
    history('/details');
  };

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % totalData;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`,
    );
    // setItemOffset(newOffset);
    setCurrentPage(event.selected + 1);
  };

  return (
    <div className="home">
      <div>Home Sweet Home</div>

      <div className="home-card">
        {currentAnime?.map((card) => {
          return <Card anime={card} handleGoToDetail={handleOnDetail} />;
        })}
      </div>

      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={1}
      />
    </div>
  );
}
