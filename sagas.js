import { delay } from 'redux-saga'
import { put, takeEvery, all, call } from 'redux-saga/effects'

function* helloSaga() {
  console.log('Hello Sagas!')
}

// our worker Saga: will perform the async increment task
export function* incrementAsync() {
  // use the call Effect
  yield call(delay, 1000)
  yield put({ type: 'INCREMENT' })
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once

export default function* rootSaga() {
  yield all([
    incrementAsync(),
    watchIncrementAsync()
  ])
}
