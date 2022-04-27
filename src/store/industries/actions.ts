import axios from "axios";

export async function getData() {
  const url =
    "https://api.stg.behavera.com/v1/data_sources/preferences?lang=EN";

  return axios.get(url);
}
