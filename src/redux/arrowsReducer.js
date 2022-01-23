import { ARROW } from "./types"

const arrowsArray = []
for (let i = 0; i < 10; i++) {
  arrowsArray.push('')
}
// const defaultState = {
//   arrowsArray
// };


const arrowsReducer = (state = arrowsArray, action) => {
  switch (action.type) {
    case ARROW:
      return [...action.payload]
    default: return state
  }
}

export default arrowsReducer
