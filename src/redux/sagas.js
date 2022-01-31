import { takeEvery, put, call } from 'redux-saga/effects'
import { HORIZONTAL, VERTICAL } from './types'
// import { move } from './actions'

export function* sagaWatcher() {
  yield takeEvery(VERTICAL, sagaWorker)
  yield takeEvery(HORIZONTAL, sagaWorker)
}

function* sagaWorker() {
  // yield call(move)
}

// function move() {
//   console.log(11111111111);
// }

