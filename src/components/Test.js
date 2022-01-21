import { connect } from "react-redux"

function Test({arr}) {
  return (
    <div className="arrows">
      {arr.map((item, idx) => {
        return (
          <div key={idx}>{item}</div>
        )
      })}
    </div>
  )
}

const mapStateToProps = state => ({
  arr: state.arr
})

export default connect(mapStateToProps, null)(Test)