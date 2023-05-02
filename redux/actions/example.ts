export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const INCREMENT_SUCCESS = 'INCREMENT_ASYNC'
export const DECREMENT_SUCCESS = 'DECREMENT_ASYNC'

export interface IncrementAction {
  type: typeof INCREMENT
  payload: number
}

export interface DecrementAction {
  type: typeof DECREMENT
  payload: number
}
export interface IncrementSuccess {
  type: typeof INCREMENT_SUCCESS
  payload: number
}

export interface DecrementSuccess {
  type: typeof DECREMENT_SUCCESS
  payload: number
}

export type CounterActionTypes = IncrementAction | DecrementAction | IncrementSuccess | DecrementSuccess

export default {
  increment: (count: number): IncrementAction => {
    return {
      type: INCREMENT,
      payload: count
    }
  },
  decrement: (count: number): DecrementAction => {
    return {
      type: DECREMENT,
      payload: count
    }
  },
  incrementSuccess: (count: number): IncrementSuccess => {
    return {
      type: INCREMENT_SUCCESS,
      payload: count
    }
  },
  decrementSuccess: (count: number): DecrementSuccess => {
    return {
      type: DECREMENT_SUCCESS,
      payload: count
    }
  }
}
