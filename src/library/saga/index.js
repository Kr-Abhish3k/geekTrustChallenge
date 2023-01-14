import { FETCH_DATA } from 'library/store/actionTypes';
import { call, put, takeLatest } from 'redux-saga/effects';
import serviceRequest from 'library/store/servicerequest';
import { storeData } from 'library/store/actions';

function* fetchUser() {
	try {
		console.log('fetchUser saga call start');
		const response = yield call(serviceRequest);
		yield put(storeData(response));
	} catch (error) {
		console.log('Error in fetch request', error);
	}
}

export default function* watchSaga() {
	yield takeLatest(FETCH_DATA, fetchUser);
}
