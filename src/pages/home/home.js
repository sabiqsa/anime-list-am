import React, { useEffect, useMemo, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/Card/Card';
import Search from '../../components/Search/Search';

import {
  getAnimeDetailsProcess,
  getAnimeListProcess,
  getAnimeSearchProcess,
} from '../../redux/Home/actions';
import {
  makeSelectAnimeList,
  makeSelectSearchAnime,
} from '../../redux/Home/selectors';

import './home.css';

export default function Home() {
  const history = useNavigate();
  const dispatch = useDispatch();

  const dataAnime = useSelector(makeSelectAnimeList());
  const searchData = useSelector(makeSelectSearchAnime());

  const totalData = dataAnime?.pagination?.items?.total ?? 10000;

  const [currentAnime, setCurrentAnime] = useState([]);
  const [pageCount, setPageCount] = useState(totalData);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState('');

  useEffect(() => {
    setCurrentAnime(searchData);
  }, [searchData]);

  useEffect(() => {
    dispatch(getAnimeListProcess({ pages: currentPage }));
  }, [currentPage]);

  useEffect(() => {
    if (search === '') {
      dispatch(getAnimeListProcess({ pages: currentPage }));
    }
  }, [search]);

  useEffect(() => {
    if (dataAnime.data && dataAnime.data.length > 0) {
      setCurrentAnime(dataAnime?.data);
      setPageCount(totalData / 25);
    }
  }, [dataAnime.data]);

  const handleOnDetail = (id) => {
    dispatch(getAnimeDetailsProcess({ id }));
    history('/details');
  };

  const handlePageClick = (event) => {
    setCurrentPage(event.selected + 1);
  };

  const handleOnChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleOnClickSearch = () => {
    dispatch(getAnimeSearchProcess(search));
  };

  return (
    <div className="home">
      <Search
        handleOnChange={handleOnChangeSearch}
        handleOnClick={handleOnClickSearch}
      />
      <div className="home-card">
        {currentAnime?.map((card) => {
          return <Card anime={card} handleGoToDetail={handleOnDetail} />;
        })}
      </div>

      {search === '' && (
        <div className="paginate__container">
          <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={1}
            activeClassName="paginate__container--active"
          />
        </div>
      )}

      {search !== '' && searchData?.length === 0 && (
        <div>Data Not Available</div>
      )}
    </div>
  );
}
