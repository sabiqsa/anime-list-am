import produce from 'immer';

import {
  GET_ANIME_LIST_PROCESS,
  GET_ANIME_LIST_RESULT,
  GET_ANIME_DETAILS_PROCESS,
  GET_ANIME_DETAILS_RESULT,
  GET_ANIME_SEARCH_PROCESS,
  GET_ANIME_SEARCH_RESULT,
} from '../constants.js';

export const initialState = {
  dataAnimeList: [],
  dataAnimeDetails: [],
  dataAnimeSearch: [],
};

const homeReducers = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case GET_ANIME_LIST_PROCESS:
        draft.dataAnimeList = [];
        break;
      case GET_ANIME_LIST_RESULT:
        draft.dataAnimeList = action.response;
        break;
      case GET_ANIME_DETAILS_PROCESS:
        draft.dataAnimeDetails = [];
        break;
      case GET_ANIME_DETAILS_RESULT:
        draft.dataAnimeDetails = action.response;
        break;
      case GET_ANIME_SEARCH_PROCESS:
        draft.dataAnimeSearch = [];
        break;
      case GET_ANIME_SEARCH_RESULT:
        draft.dataAnimeSearch = action.response;
        break;
      default:
    }
  });

export default homeReducers;
