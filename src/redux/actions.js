import { move, setTarget, start } from './fieldState';
import { MOVE, TEST } from './types'

export function test(item) {
  // return {
  //   type: TEST,
  //   payload: item
  // }
  return (dispatch, getState) => {
    dispatch({
      type: TEST,
      payload: item
    })
  }
}

export function moveAction(direction) {
  return (dispatch, getState) => {
    const state = getState();
    dispatch({
      type: MOVE,
      payload: move(state, direction)
    })
  }
}
export function startMove(interval) {
  return (dispatch, getState) => {
    const state = getState();
    if (state.count < 10) {
      const direction = start(state);
      state.arrowsArray[state.count] = direction
      const newState = move(state, direction);
      dispatch({
        type: MOVE,
        payload: {
          ...newState,
          count: state.count + 1,
          interval,
          arrowsArray: state.arrowsArray
        }
      })
    } else {
      dispatch(stopAction())
    }
  }
}

export function startAction() {
  return dispatch => {
    const arrowsArray = [];
    for (let i = 0; i < 10; i++) {
      arrowsArray.push('')
    }
    dispatch({
      type: MOVE,
      payload: { isComplete: false, arrowsArray }
    })
    const interval = setInterval(() => {
      dispatch(startMove(interval))
    }, 1000)
  }
}

export function stopAction() {
  return (dispatch, getState) => {
    const { interval } = getState();
    clearInterval(interval)
    dispatch({
      type: MOVE,
      payload: { count: 0, interval: 0, isComplete: true }
    })
  }
}

export function checkAction(k) {
  return (dispatch, getState) => {
    const state = getState();
    console.log(state);
    if (state.isComplete) {
      setTarget(state)
      if (k !== state.key) {
        state.items[k].title = 'X'
      }
      dispatch({
        type: MOVE,
        payload: { items: state.items, isComplete: false }
      })
    }
  }
}