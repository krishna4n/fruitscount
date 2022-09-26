import {Component} from 'react'
import './index.css'

class Fruits extends Component {
  state = {mango: 0, banana: 0}

  eatMango = () => {
    this.setState(prevState => ({
      mango: prevState.mango + 1,
    }))
  }

  eatBanana = () => {
    this.setState(prevState => ({
      banana: prevState.banana + 1,
    }))
  }

  render() {
    const {mango, banana} = this.state
    console.log(mango, banana)
    return (
      <div className="container">
        <div className="card-container">
          <h1 className="heading">
            Bob ate <span className="count">{mango}</span> mangoes
            <span className="count"> {banana}</span> bananas
          </h1>
          <div className="img-container">
            <div className="fruit-box">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="img"
              />
              <div>
                <button
                  type="button"
                  className="button"
                  onClick={this.eatMango}
                >
                  Eat Mango
                </button>
              </div>
            </div>
            <div className="fruit-box">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="img"
              />
              <div>
                <button
                  type="button"
                  className="button"
                  onClick={this.eatBanana}
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Fruits
