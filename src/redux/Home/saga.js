import { put, takeLatest, call } from 'redux-saga/effects';

import {
  GET_ANIME_LIST_PROCESS,
  GET_ANIME_DETAILS_PROCESS,
  GET_ANIME_SEARCH_PROCESS,
} from '../constants';

import {
  getAnimeListData,
  getAnimeDetails,
  getAnimeSearch,
} from '../../services/api';

import {
  getAnimeListResult,
  getAnimeDetailsResult,
  getAnimeSearchResult,
} from './actions';

export function* getAnimeList(params) {
  try {
    const { data } = yield call(getAnimeListData, params);
    yield put(getAnimeListResult(data));
  } catch (err) {
    yield put(getAnimeListResult([]));
  }
}

export function* getAnimeDetail(params) {
  try {
    const { data } = yield call(getAnimeDetails, params);
    yield put(getAnimeDetailsResult(data));
  } catch (err) {
    yield put(getAnimeDetailsResult([]));
  }
}

export function* getAnimeSearchs(params) {
  try {
    const { data } = yield call(getAnimeSearch, params);
    yield put(getAnimeSearchResult(data?.data));
  } catch (err) {
    yield put(getAnimeSearchResult([]));
  }
}

export default function* homeSaga() {
  yield takeLatest(GET_ANIME_LIST_PROCESS, getAnimeList);
  yield takeLatest(GET_ANIME_DETAILS_PROCESS, getAnimeDetail);
  yield takeLatest(GET_ANIME_SEARCH_PROCESS, getAnimeSearchs);
  //   yield takeLatest(GET_ARTIST_LIST_PROCESS, getArtistList);
  //   yield takeLatest(GET_SEARCH_TRACK_LIST_PROCESS, getSearchTrackList);
  //   yield takeLatest(GET_SEARCH_ARTIST_LIST_PROCESS, getSearchArtistList);
}
