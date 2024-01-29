import { takeLatest, put, call } from 'redux-saga/effects';
import axios from 'axios';
import { fetchProductsStart, fetchProductsSuccess, fetchProductsFailure } from '../Slices/productSlice';

function* fetchProductsSaga() {
  try {
    const response = yield call(axios.get, 'http://localhost:3000/recommend/');
    yield put(fetchProductsSuccess(response.data.data));
  } catch (error) {
    yield put(fetchProductsFailure(error.message));
  }
}

export function* watchFetchProducts() {
  yield takeLatest(fetchProductsStart.type, fetchProductsSaga);
}
