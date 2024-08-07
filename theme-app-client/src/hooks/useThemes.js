import { useState, useEffect } from "react";

import themesAPI from "../api/themes-api";

export function useGetAllThemes() {
  const [themes, setThemes] = useState([]);
  useEffect(() => {
    (async () => {
      const result = await themesAPI.getAll();

      setThemes(result);
    })();
  }, []);

  return [themes, setThemes];
}

export function useGetOneThemes(themeId) {
  const [theme, setTheme] = useState([]);
  useEffect(() => {
    (async () => {
      const result = await themesAPI.getOne(themeId);

      setTheme(result);
    })();
  }, []);

  return [theme, setTheme];
}
