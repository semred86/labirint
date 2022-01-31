import { arrowsInit, coordObj, defaultItems } from "./fieldState"
import { ARROW, INCREMENT, HORIZONTAL, MOVE, VERTICAL, COMPLETE, UNCOMPLETE, INTERVAL, COUNT_ZERO, ITEMS } from "./types"

const defaultState = {
  ...coordObj,
  items: defaultItems,
  interval: 0,
  count: 0,
  isComplete: false,
  arrowsArray: arrowsInit()
};


const fieldReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case VERTICAL:
      return { ...state, y: payload }
    case HORIZONTAL:
      return { ...state, x: payload }
    case ARROW:
      return { ...state, arrowsArray: payload }
    case INCREMENT:
      return { ...state, count: state.count + 1 }
    case COUNT_ZERO:
      return { ...state, count: 0 }
    case COMPLETE:
      return { ...state, isComplete: true }
    case UNCOMPLETE:
      return { ...state, isComplete: false }
    case INTERVAL:
      return { ...state, interval: payload }
    case ITEMS:
      return { ...state, items: payload }
    case MOVE:
      return { ...state, ...payload }
    default: return state
  }
}

export default fieldReducer
