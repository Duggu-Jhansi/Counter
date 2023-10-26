import {Component} from 'react'
import './index.css'

class Counter extends Component {
  state = {count: 0}

  IncrementBtn = () => {
    this.setState(prevState => {
      console.log(`previous state value ${prevState.count}`)
      return {count: prevState.count + 1}
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">
          The Button has been clicked
          <span className="count">{count}</span> clicked times
        </h1>
        <p className="counter">Click the button to increase the count</p>
        <div>
          <button className="button" type="button" onClick={this.IncrementBtn}>
            Click Me!
          </button>
        </div>
      </div>
    )
  }
}
export default Counter
