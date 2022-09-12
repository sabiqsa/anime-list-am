import {
  GET_ANIME_LIST_PROCESS,
  GET_ANIME_LIST_RESULT,
  GET_ANIME_DETAILS_PROCESS,
  GET_ANIME_DETAILS_RESULT,
  GET_ANIME_SEARCH_PROCESS,
  GET_ANIME_SEARCH_RESULT,
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

export function getAnimeDetailsProcess(params) {
  return {
    type: GET_ANIME_DETAILS_PROCESS,
    params,
  };
}

export function getAnimeDetailsResult(response) {
  return {
    type: GET_ANIME_DETAILS_RESULT,
    response,
  };
}

export function getAnimeSearchProcess(params) {
  return {
    type: GET_ANIME_SEARCH_PROCESS,
    params,
  };
}

export function getAnimeSearchResult(response) {
  return {
    type: GET_ANIME_SEARCH_RESULT,
    response,
  };
}
