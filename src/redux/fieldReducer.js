import { defaultState } from "./fieldState"
import { MOVE } from "./types"



const fieldReducer = (state = defaultState, action) => {
  switch (action.type) {
    case MOVE:
      return { ...state, ...action.payload }
    default: return state
  }
}

export default fieldReducer
