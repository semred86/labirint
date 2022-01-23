export const xArr = ['A', 'B', 'C']
export const yArr = [1, 2, 3]

export const arrows = {
  // up: '▲',
  up: '↑',
  // down: '▼',
  down: '↓',
  // left: '◄',
  left: '←',
  // right: '►'
  right: '→'
}

export function fieldInit() {
  const items = []
  yArr.forEach(y => {
    xArr.forEach(x => {
      items.push('')
    })
  })
  return items
}

export function move(state, direction) {
  const check = (c, arr) => c >= 0 && c < arr.length
  const set = (c, n, arr) => check(c + n, arr) ? c + n : c
  switch (direction) {
    case arrows.up:
      return { y: set(state.y, -1, yArr) }
    case arrows.down:
      return { y: set(state.y, 1, yArr) }
    case arrows.left:
      return { x: set(state.x, -1, xArr) }
    case arrows.right:
      return { x: set(state.x, 1, xArr) }
    default:
      return;
  }
}

export function randomDirection(state) {
  let directions = [];

  state.y !== 0 && directions.push(arrows.up)
  state.x !== 0 && directions.push(arrows.left)
  state.y !== yArr.length - 1 && directions.push(arrows.down)
  state.x !== xArr.length - 1 && directions.push(arrows.right)

  return directions[random(0, directions.length - 1)];
};

function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
  //Максимум и минимум включаются
}



const target = 'ST@RT';


const coordObj = {
  x: random(0, xArr.length - 1),
  y: random(0, yArr.length - 1)
}

export const getKey = (x, y) => y * xArr.length + x;
const key = getKey(coordObj.x, coordObj.y);


const defaultItems = fieldInit()
defaultItems[key] = target;

export function arrowsInit() {
  const arrowsArray = [];
  for (let i = 0; i < 10; i++) {
    arrowsArray.push('')
  }
  return arrowsArray
}

export const defaultState = {
  ...coordObj,
  items: defaultItems,
  interval: 0,
  count: 0,
  isComplete: false,
  arrowsArray: arrowsInit()
};