import { takeEvery, put } from 'redux-saga/effects'
import { MOVE } from './types'
import { move } from './actions'

export function* sagaWatcher() {
  yield takeEvery(MOVE, sagaWorker)
}

function* sagaWorker() {
  yield put(move())
}

