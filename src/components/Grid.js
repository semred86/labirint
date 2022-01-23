import { useSelector } from "react-redux";
import { xArr, yArr } from "../redux/fieldState";
import Item from "./Item";

function Grid() {
  const items = useSelector(state => state.field.items);
  // const x = useSelector(state => state.x);
  // const y = useSelector(state => state.y);
  // console.log('Grid', x, y);
  return (
    <div className="field">

      <div className="xArr">
        {xArr.map((item, idx) => {
          return (
            <div className="cell" key={idx}>{item}</div>
          )
        })}
      </div>
      <div className="yArr">
        {yArr.map((item, idx) => {
          return (
            <div className="cell" key={idx}>{item}</div>
          )
        })}
      </div>
      <div className="field__play">
        {items.map((item, idx) => {
          return (
            <Item title={item} k={idx} key={idx} />
          )
        })}
      </div>
    </div>
  )
}
export default Grid