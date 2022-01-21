import { connect } from "react-redux";
import { moveAction, startAction, stopAction, test } from "../redux/actions";
import { arrows } from "../redux/fieldState";


function Controls(props) {

  const go = (direction) => props.moveAction(direction)

  return (
    <div style={{ textAlign: 'center' }}>
      <div>key={props.keyy}x={props.x}y={props.y}</div>
      <div>
        <button onClick={() => props.startAction()}>startInterval</button>
        <button onClick={() => props.stopAction()}>stopInterval</button>
      </div>
      <button onClick={() => go(arrows.up)}>{arrows.up}</button>
      <div style={{ dispaly: 'flex' }}>
        <button onClick={() => go(arrows.left)}>{arrows.left}</button>
        <button onClick={() => go(arrows.down)}>{arrows.down}</button>
        <button onClick={() => go(arrows.right)}>{arrows.right}</button>
        <button onClick={() => props.test(123)}>123</button>
      </div>
    </div>
  )
}

const mapDispatchToProps = {
  moveAction, startAction, stopAction, test
}

const mapStateToProps = state => ({
  keyy: state.key,
  x: state.x,
  y: state.y,
})

export default connect(mapStateToProps, mapDispatchToProps)(Controls)
