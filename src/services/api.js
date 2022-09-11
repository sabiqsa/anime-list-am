import axios from 'axios';

const getAnimeList = (params) =>
  `https://api.jikan.moe/v4/anime?page=${params.pages}`;

export const getAnimeListData = async (params) => {
  console.log('hmm', params);
  try {
    return await axios.get(getAnimeList(params?.params));
  } catch (err) {
    throw new Error(err.message);
  }
};
