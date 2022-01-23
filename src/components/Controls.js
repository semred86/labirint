import { useDispatch, useSelector } from "react-redux";
import { moveAction, startAction, stopAction } from "../redux/actions";
import { arrows } from "../redux/fieldState";


function Controls() {

  const dispatch = useDispatch();
  const { x, y } = useSelector(state => state.field);

  const go = (direction) => dispatch(moveAction(direction))

  return (
    <div style={{ textAlign: 'center' }}>
      <div>x={x}y={y}</div>
      <div>
        <button onClick={() => dispatch(startAction())}>startInterval</button>
        <button onClick={() => dispatch(stopAction())}>stopInterval</button>
      </div>
      <button onClick={() => go(arrows.up)}>{arrows.up}</button>
      <div style={{ dispaly: 'flex' }}>
        <button onClick={() => go(arrows.left)}>{arrows.left}</button>
        <button onClick={() => go(arrows.down)}>{arrows.down}</button>
        <button onClick={() => go(arrows.right)}>{arrows.right}</button>
      </div>
    </div>
  )
}

export default Controls
