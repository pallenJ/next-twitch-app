import { type CounterActionTypes, INCREMENT, DECREMENT } from '../actions/example'
export interface CounterState {
  count: number
}

const initialState: CounterState = {
  count: 0
}

export const counterExampleReducer = (
  state = initialState,
  action: CounterActionTypes
): CounterState => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + action.payload
      }
    case DECREMENT:
      return {
        ...state,
        count: state.count - action.payload
      }
    default:
      return state
  }
}
