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

export function getAnimeListProcess(params) {
  return {
    type: GET_ANIME_LIST_PROCESS,
    params,
  };
}

export function getAnimeListResult(response) {
  return {
    type: GET_ANIME_LIST_RESULT,
    response,
  };
}

// export function getArtistListProcess() {
//   return {
//     type: GET_ARTIST_LIST_PROCESS,
//   };
// }

// export function getArtistListResult(response) {
//   return {
//     type: GET_ARTIST_LIST_RESULT,
//     response,
//   };
// }

// export function getSearchTrackListProcess(params) {
//   return {
//     type: GET_SEARCH_TRACK_LIST_PROCESS,
//     params,
//   };
// }

// export function getSearchTrackListResult(response) {
//   return {
//     type: GET_SEARCH_TRACK_LIST_RESULT,
//     response,
//   };
// }

// export function getSearchArtistListProcess(params) {
//   return {
//     type: GET_SEARCH_ARTIST_LIST_PROCESS,
//     params,
//   };
// }

// export function getSearchArtistListResult(response) {
//   return {
//     type: GET_SEARCH_ARTIST_LIST_RESULT,
//     response,
//   };
// }
