import produce from 'immer';

import {
  GET_ANIME_LIST_PROCESS,
  GET_ANIME_LIST_RESULT,
  //   GET_ARTIST_LIST_PROCESS,
  //   GET_ARTIST_LIST_RESULT,
  //   GET_SEARCH_TRACK_LIST_PROCESS,
  //   GET_SEARCH_TRACK_LIST_RESULT,
  //   GET_SEARCH_ARTIST_LIST_PROCESS,
  //   GET_SEARCH_ARTIST_LIST_RESULT,
} from '../constants.js';

export const initialState = {
  dataAnimeList: [],
  dataArtistList: [],
  dataSearchTrackList: [],
  dataSearchArtistList: [],
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
      //   case GET_ARTIST_LIST_PROCESS:
      //     draft.dataArtistList = [];
      //     break;
      //   case GET_ARTIST_LIST_RESULT:
      //     draft.dataArtistList = action.response;
      //     break;
      //   case GET_SEARCH_TRACK_LIST_PROCESS:
      //     draft.dataSearchTrackList = [];
      //     break;
      //   case GET_SEARCH_TRACK_LIST_RESULT:
      //     draft.dataSearchTrackList = action.response;
      //     break;
      //   case GET_SEARCH_ARTIST_LIST_PROCESS:
      //     draft.dataSearchArtistList = [];
      //     break;
      //   case GET_SEARCH_ARTIST_LIST_RESULT:
      //     draft.dataSearchArtistList = action.response;
      //     break;
      default:
    }
  });

export default homeReducers;
