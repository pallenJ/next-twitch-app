import { put, takeLatest } from 'redux-saga/effects'
import exampleActions, { DECREMENT_SUCCESS, INCREMENT_SUCCESS } from '@/redux/actions/example'

export default function * (): Generator {
  yield takeLatest(INCREMENT_SUCCESS, incrementAsync)
  yield takeLatest(DECREMENT_SUCCESS, decrementAsync)
}

function * incrementAsync (action: ReturnType<typeof exampleActions.increment>): Generator {
  yield put(exampleActions.increment(action.payload))
}

function * decrementAsync (action: ReturnType<typeof exampleActions.decrement>): Generator {
  yield put(exampleActions.decrement(action.payload))
}
