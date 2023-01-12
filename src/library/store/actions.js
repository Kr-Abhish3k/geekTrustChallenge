import { FETCH_DATA, STORE_DATA } from "./actionTypes";

export const fetchData = () => ({
  type: FETCH_DATA,
});

export const storeData = (payload) => ({
  type: STORE_DATA,
  data: payload,
});
