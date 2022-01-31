import { useDispatch, useSelector } from "react-redux";
import { down, left, randomMove, right, start, startAction, state, stop, stopAction, up } from "../redux/actions";
import { arrows } from "../redux/fieldState";


function Controls() {

  const dispatch = useDispatch();
  const { x, y } = useSelector(state => state.field);

  return (
    <div style={{ textAlign: 'center' }}>
      <div>x={x}y={y}</div>
      <div>
        <button onClick={() => dispatch(start())}>start</button>
        <button onClick={() => dispatch(stop())}>stop</button>
        <button onClick={() => dispatch(state())}>state</button>
        <button onClick={() => dispatch(randomMove())}>randomMove</button>
        <br/>
        <button onClick={() => dispatch(startAction())}>startInterval</button>
        <button onClick={() => dispatch(stopAction())}>stopInterval</button>
      </div>
      <button onClick={() => dispatch(up())}>{arrows.up}</button>
      <div style={{ dispaly: 'flex' }}>
        <button onClick={() => dispatch(left())}>{arrows.left}</button>
        <button onClick={() => dispatch(down())}>{arrows.down}</button>
        <button onClick={() => dispatch(right())}>{arrows.right}</button>
      </div>
    </div>
  )
}

export default Controls
