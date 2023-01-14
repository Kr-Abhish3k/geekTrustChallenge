import { FETCH_DATA } from 'library/store/actionTypes';
import { call, takeLatest } from 'redux-saga/effects';
import serviceRequest from 'library/store/servicerequest';

function* fetchUser() {
	try {
		console.log('fetchUser saga call start');
		const response = yield call(serviceRequest);
		console.log('fetchUser saga call end');
		console.log(response);
	} catch (error) {
		console.log('Error in fetch request', error);
	}
}

export default function* watchSaga() {
	yield takeLatest(FETCH_DATA, fetchUser);
}
