import * as request from "./requester";
import { environment } from "../enviroment/enviroment";

const THEMES_URL = environment.themesUrl;

export const getAll = async () => {
  const result = await request.get(THEMES_URL);
  const themes = Object.values(result);
  return themes;
};

export const searchThemes = async (query) => {
  const result = await request.get(`${THEMES_URL}/search?q=${query}`);
  const themes = Object.values(result);
  return themes;
};

export const getOne = (themeId) =>
  request.get(`${THEMES_URL}/${themeId}/details`);

const themesAPI = {
  getAll,
  getOne,
  searchThemes,
};

export default themesAPI;
