import { useDispatch } from "react-redux"
import { check } from "../redux/actions";

function Item({ title, k }) {
  const dispatch = useDispatch();
  return (
    <div
      className="cell clickable"
      onClick={() => dispatch(check(k))}
    >
      {title}
    </div>
  )
}

export default Item