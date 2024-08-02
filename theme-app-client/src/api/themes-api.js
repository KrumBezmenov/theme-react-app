import * as request from "./requester";
import { environment } from "../enviroment/enviroment";

const THEMES_URL = environment.themesUrl;

export const getAll = async () => {
  await request.get(THEMES_URL);
};
