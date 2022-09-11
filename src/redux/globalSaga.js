import { all } from 'redux-saga/effects';

import homeSaga from './Home/saga';

export default function* saga() {
  yield all([homeSaga()]);
}
