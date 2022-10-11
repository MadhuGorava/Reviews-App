// Write your code here
import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {
    activeReviewIndex: 0,
  }

  onRightGo = () => {
    const {activeReviewIndex} = this.state
    const {reviewsData} = this.props

    if (activeReviewIndex < reviewsData.length - 1) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex + 1,
      }))
    }
  }

  renderActiveReview = review => {
    const {imgUrl, username, companyName, description} = review

    return (
      <div className="review-container">
        <img src={imgUrl} alt={username} />
        <p className="username">{username}</p>
        <p className="company">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }

  onLeftGo = () => {
    const {activeReviewIndex} = this.state

    if (activeReviewIndex > 0) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex - 1,
      }))
    }
  }

  render() {
    const {reviewsData} = this.props
    const {activeReviewIndex} = this.state
    const currentReviewData = reviewsData[activeReviewIndex]
    return (
      <div className="app-container">
        <h1 className="heading">Reviews</h1>
        <div className="arrow-container">
          <div>
            <button
              type="button"
              onClick={this.onLeftGo}
              testid="leftArrow"
              className="arrow-btn"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
              />
            </button>
          </div>
          {this.renderActiveReview(currentReviewData)}
          <div>
            <button
              type="button"
              onClick={this.onRightGo}
              testid="rightArrow"
              className="arrow-btn"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
              />
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
