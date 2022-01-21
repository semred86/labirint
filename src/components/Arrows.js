import { connect } from "react-redux";


function Arrows({ arrowsArray }) {
  return (
    <div className="arrows">
      {arrowsArray.map((item, idx) => {
        return (
          <div className="cell" key={idx}>{item}</div>
        )
      })}
    </div>
  )
}


const mapStateToProps = state => ({
  arrowsArray: state.arrowsArray
})

export default connect(mapStateToProps, null)(Arrows)