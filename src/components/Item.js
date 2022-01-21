import { useDispatch } from "react-redux"
import { checkAction } from "../redux/actions";

function Item({ title, k }) {
  const dispatch = useDispatch();
  return (
    <div
      className="cell clickable"
      onClick={() => dispatch(checkAction(k))}
    >
      {title}
    </div>
  )
}

export default Item