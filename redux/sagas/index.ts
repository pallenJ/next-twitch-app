import { all } from 'redux-saga/effects'
import exampleSaga from './example'
export default function * rootSaga (): Generator {
  yield all([
    exampleSaga()
  ])
}
