import { put, takeLatest, call, takeEvery } from 'redux-saga/effects';

import { GET_ANIME_LIST_PROCESS } from '../constants';

import { getAnimeListData } from '../../services/api';

import { getAnimeListResult } from './actions';

export function* getAnimeList(params) {
  try {
    const { data } = yield call(getAnimeListData, params);
    console.log('datanya', data);
    yield put(getAnimeListResult(data));
  } catch (err) {
    yield put(getAnimeListResult([]));
  }
}

export default function* homeSaga() {
  yield takeLatest(GET_ANIME_LIST_PROCESS, getAnimeList);
  //   yield takeLatest(GET_ARTIST_LIST_PROCESS, getArtistList);
  //   yield takeLatest(GET_SEARCH_TRACK_LIST_PROCESS, getSearchTrackList);
  //   yield takeLatest(GET_SEARCH_ARTIST_LIST_PROCESS, getSearchArtistList);
}
