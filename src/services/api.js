import axios from 'axios';

const BASE_URL = 'https://api.jikan.moe/v4/anime';

const getAnimeList = (params) => `${BASE_URL}?page=${params.pages}`;

const getAnimeDetailsApi = (params) => `${BASE_URL}/${params}/full`;

const getAnimeSearchApi = (params) => `${BASE_URL}?q=${params}`;

export const getAnimeListData = async (params) => {
  try {
    return await axios.get(getAnimeList(params?.params));
  } catch (err) {
    throw new Error(err.message);
  }
};

export const getAnimeDetails = async (params) => {
  try {
    const { id } = params.params;
    return await axios.get(getAnimeDetailsApi(id));
  } catch (err) {
    throw new Error(err.message);
  }
};

export const getAnimeSearch = async (params) => {
  try {
    return await axios.get(getAnimeSearchApi(params?.params));
  } catch (err) {
    throw new Error(err.message);
  }
};
