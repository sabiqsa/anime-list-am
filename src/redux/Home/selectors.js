import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHomeReducer = (state) => state.homeReducers || initialState;

const makeSelectAnimeList = () =>
  createSelector(selectHomeReducer, (homeState) => homeState.dataAnimeList);

const makeSelectAnimeDetails = () =>
  createSelector(selectHomeReducer, (homeState) => homeState.dataAnimeDetails);

const makeSelectSearchAnime = () =>
  createSelector(selectHomeReducer, (homeState) => homeState.dataAnimeSearch);

export { makeSelectAnimeList, makeSelectAnimeDetails, makeSelectSearchAnime };
