export const xArr = ['A', 'B', 'C']
export const yArr = [1, 2, 3]
export const arrows = {
  up:     '↑', 
  down:   '↓', 
  left:   '←', 
  right:  '→'
}

const target = '~(@-_-@)~';


const coordObj = {
  x: random(0, xArr.length - 1),
  y: random(0, yArr.length - 1)
}

const getKey = (x, y) => y * xArr.length + x;
const key = getKey(coordObj.x, coordObj.y);

export function fieldInit() {
  const items = []
  yArr.forEach(y => {
    xArr.forEach(x => {
      items.push({
        title: '',
        key: items.length
      })
    })
  })
  // items[key].title = target
  return items
}

const setState = (x, y) => {
  if (x >= 0 && x < xArr.length && y >= 0 && y < yArr.length) {
    const key = getKey(x, y);
    return { key, x, y, items: fieldInit(key) }
  }
  return
}

export function move(state, direction) {
  switch (direction) {
    case arrows.up:
      return setState(state.x, state.y - 1)
    case arrows.down:
      return setState(state.x, state.y + 1)
    case arrows.left:
      return setState(state.x - 1, state.y)
    case arrows.right:
      return setState(state.x + 1, state.y)
    default:
      return state;
  }
};

export function start(state) {
  let dir = [];
  if (state.y !== 0) {
    dir.push(arrows.up)
  }
  if (state.y !== yArr.length - 1) {
    dir.push(arrows.down)
  }
  if (state.x !== 0) {
    dir.push(arrows.left)
  }
  if (state.x !== xArr.length - 1) {
    dir.push(arrows.right)
  }
  return dir[random(0, dir.length - 1)];
};

function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
  //Максимум и минимум включаются
}

export const setTarget = state => {
  state.items[state.key].title = target
};

const defaultItems = fieldInit()
defaultItems[key].title = target;
const arrowsArray = [];
for (let i = 0; i < 10; i++) {
  arrowsArray.push('')
}
export const defaultState = {
  ...coordObj,
  key,
  items: defaultItems,
  interval: 0,
  count: 0,
  isComplete: false,
  arrowsArray,
  arr:[1,2]
};