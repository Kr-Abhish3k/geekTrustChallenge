import { FETCH_DATA } from "../store/actionTypes";
import { takeLatest } from "redux-saga/effects";

function fetchUser(action) {
  console.log("fetchUserCalled", action);
}

export default function* watchSaga() {
  yield takeLatest(FETCH_DATA, fetchUser);
}
