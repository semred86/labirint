import { move, randomDirection, getKey, arrowsInit, fieldInit, yArr, xArr, random, arrows, arrowBlocksAmount } from './fieldState';
import { ARROW, INCREMENT, HORIZONTAL, MOVE, VERTICAL, COMPLETE, UNCOMPLETE, INTERVAL, COUNT_ZERO, ITEMS } from './types'


export function up() {
  return (dispatch, getState) => {
    const { field: { y } } = getState();
    dispatch({
      type: VERTICAL,
      payload: y - 1 >= 0 ? y - 1 : y
    })
  }
}

export function down() {
  return (dispatch, getState) => {
    const { field: { y } } = getState();
    dispatch({
      type: VERTICAL,
      payload: y + 1 < yArr.length ? y + 1 : y
    })
  }
}

export function left() {
  return (dispatch, getState) => {
    const { field: { x } } = getState();
    dispatch({
      type: HORIZONTAL,
      payload: x - 1 >= 0 ? x - 1 : x
    })
  }
}

export function right() {
  return (dispatch, getState) => {
    const { field: { x } } = getState();
    dispatch({
      type: HORIZONTAL,
      payload: x + 1 < xArr.length ? x + 1 : x
    })
  }
}

export function addArrow(direction) {
  return (dispatch, getState) => {
    const { field: { arrowsArray, count } } = getState();
    arrowsArray[count] = direction
    dispatch({
      type: ARROW,
      payload: [...arrowsArray]
    })
  }
}

export function initArrows() {
  const arrowsArray = [];
  for (let i = 0; i < 10; i++) {
    arrowsArray.push('')
  }
  return {
    type: ARROW,
    payload: arrowsArray
  }
}

export function randomMove() {
  return (dispatch, getState) => {
    const { field: { x, y } } = getState();
    let directions = [];
    y !== 0 && directions.push([up, arrows.up])
    x !== 0 && directions.push([left, arrows.left])
    y !== yArr.length - 1 && directions.push([down, arrows.down])
    x !== xArr.length - 1 && directions.push([right, arrows.right])
    const [action, direction] = directions[random(0, directions.length - 1)];
    dispatch(action())
    dispatch(addArrow(direction))
    dispatch({ type: INCREMENT })
  }
}

export function play() {
  return (dispatch, getState) => {
    const { field: { count } } = getState();
    if (count < arrowBlocksAmount) {
      dispatch(randomMove())
    } else {
      dispatch(stop())
      dispatch({ type: COUNT_ZERO })
    }
  }
}

export function start() {
  return (dispatch, getState) => {
    const { field: { count } } = getState();
    if (count === 0) {
      dispatch({ type: UNCOMPLETE })
      dispatch({ type: COUNT_ZERO })
      dispatch(initArrows())
    }
    const interval = setInterval(() => {
      dispatch(play())
    }, 1000)
    dispatch({
      type: INTERVAL,
      payload: interval
    })
  }
}

export function stop() {
  return (dispatch, getState) => {
    const { field: { interval } } = getState();
    clearInterval(interval)
    dispatch({ type: COMPLETE })
  }
}

export function state() {
  return (dispatch, getState) => {
    const { field } = getState();
    console.log(field);
  }
}

export function check(k) {
  return (dispatch, getState) => {
    const { field: { x, y, isComplete } } = getState();
    if (isComplete) {
      const items = fieldInit();

      items[getKey(x, y)] = 'F!N!SH'

      if (k !== getKey(x, y)) {
        items[k] = 'X'
      }
      dispatch({ type: ITEMS, payload: items })
      dispatch({ type: UNCOMPLETE })
    }
  }
}

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
    const { field: { interval } } = getState();
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

      items[getKey(field.x, field.y)] = 'F!N!SH'

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