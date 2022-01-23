import { useSelector } from "react-redux";


function Arrows() {
  const arrows = useSelector(state => state.field.arrowsArray);
  return (
    <div className="arrows">
      {arrows.map((item, idx) => {
        return (
          <div className="cell" key={idx}>{item}</div>
        )
      })}
    </div>
  )
}
export default Arrows