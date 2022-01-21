import { defaultState } from "./fieldState"
import { MOVE, TEST } from "./types"



const fieldReducer = (state = defaultState, action) => {
  switch (action.type) {
    case MOVE:
      return { ...state, ...action.payload }
    case TEST:
      return { ...state, arr: state.arr.concat([action.payload]) }
    default: return state
  }
}

export default fieldReducer
