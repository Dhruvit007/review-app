import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {index: 0}

  onLeftArrow = () => {
    const {index} = this.state
    if (index !== 0) {
      this.setState(prevState => ({index: prevState.index - 1}))
    }
  }

  onRightArrow = () => {
    const {index} = this.state
    if (index !== 3) {
      this.setState(prevState => ({index: prevState.index + 1}))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {index} = this.state
    console.log(index)
    const selectedItem = reviewsList[index]
    const {imgUrl, username, companyName, description} = selectedItem
    return (
      <div className="container">
        <div className="contain-container">
          <h1 className="heading">Reviews</h1>
          <img src={imgUrl} alt={username} />
          <div className="arrow-container">
            <button type="button" className="btn" onClick={this.onLeftArrow}>
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png "
                alt="left arrow"
                className="arrow"
              />
            </button>
            <p className="username">{username}</p>
            <button type="button" className="btn" onClick={this.onRightArrow}>
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
                className="arrow"
              />
            </button>
          </div>
          <p className="company-name">{companyName}</p>
          <p className="description">{description}</p>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
