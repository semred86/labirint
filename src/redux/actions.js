import { move, randomDirection, getKey, arrowsInit, fieldInit } from './fieldState';
import { MOVE } from './types'



export function moveAction(direction) {
  return (dispatch, getState) => {
    const { field } = getState();
    dispatch({
      type: MOVE,
      payload: move(field, direction)
    })
  }
}

export function startAction() {
  return dispatch => {
    dispatch({
      type: MOVE,
      payload: { isComplete: false, arrowsArray: arrowsInit() }
    })
    const interval = setInterval(() => {
      dispatch(startMove(interval))
    }, 1000)
  }
}

export function startMove(interval) {
  return (dispatch, getState) => {
    const { field } = getState();
    if (field.count < 10) {
      const direction = randomDirection(field);
      field.arrowsArray[field.count] = direction
      const newState = move(field, direction);
      dispatch({
        type: MOVE,
        payload: {
          ...newState,
          count: field.count + 1,
          interval,
          arrowsArray: [...field.arrowsArray]
        }
      })
    } else {
      dispatch(stopAction())
    }
  }
}

export function stopAction() {
  return (dispatch, getState) => {
    const { interval } = getState().field;
    clearInterval(interval)
    dispatch({
      type: MOVE,
      payload: { count: 0, interval: 0, isComplete: true }
    })
  }
}

export function checkAction(k) {
  return (dispatch, getState) => {
    const { field } = getState();
    if (field.isComplete) {
      const items = fieldInit();

      items[getKey(field.x, field.y)] = '@'

      if (k !== getKey(field.x, field.y)) {
        items[k] = 'X'
      }
      dispatch({
        type: MOVE,
        payload: { items: items, isComplete: false }
      })
    }
  }
}