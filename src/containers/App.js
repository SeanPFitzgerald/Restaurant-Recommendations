import React, { Component } from 'react'

import Restaurant from '../components/Restaurant'
import Reviews from '../components/Reviews'
import ReviewForm from '../components/ReviewForm'

import restaurants from '../constants/restaurants'
import reviews from '../constants/reviews'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      restaurants,
      reviews,
      selectedId: restaurants[0].id,
      reviewerName: "",
      reviewRating: "",
      reviewText: ""
    }
    this.restaurantClick = this.restaurantClick.bind(this)
    this.handleTextChange = this.handleTextChange.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    // this.handleClearForm = this.handleClearForm.bind(this)
  }

  restaurantClick(event) {
    event.preventDefault()
    this.setState({ selectedId: event.target.id })
  }

  selectedRestaurant() {
    return this.state.restaurants.find((restaurant) =>
      (restaurant.id === this.state.selectedId)
    )
  }

  handleTextChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleFormSubmit(event) {
    event.preventDefault()
    let review = {
      restaurant_id: this.state.selectedId,
      name: this.state.reviewerName,
      rating: this.state.reviewRating,
      content: this.state.reviewText
    }
    let updatedReviews = this.state.reviews.slice()
    updatedReviews.push(review)
    this.setState({
      reviews: updatedReviews,
      reviewerName: "",
      reviewRating: "",
      reviewText: ""
    })
    // this.state.reviews.push(review)
    // this.handleClearForm(event)
  }

  // handleClearForm(event) {
  //   event.preventDefault()
  //   debugger;
  //   this.setState({
  //     reviewerName: "",
  //     reviewRating: "",
  //     reviewText: ""
  //   })
  // }

  render() {
    let restaurantComponents = restaurants.map((restaurant) => {
      return (
        <Restaurant key={restaurant.id}
          data={restaurant}
          isSelected={this.state.selectedId === restaurant.id}
          handleClick={this.restaurantClick}/>
      )
    })

    let relevantReviews = this.state.reviews.filter((review) =>
      (this.state.selectedId === review.restaurant_id)
    )

    return(
      <div>
        <div className="row">
          <div className="small-3 columns">
            <h1>Restaurant</h1>
            {restaurantComponents}
          </div>
          <div className="small-9 columns">
            <h2>Reviews for {this.selectedRestaurant().name}</h2>
            <Reviews data={relevantReviews} />
          </div>
          <div className="small-9 columns">
            <h5>Add a review for {this.selectedRestaurant().name}:</h5>
            <ReviewForm
              name={this.state.reviewerName}
              rating={this.state.reviewRating}
              reviewText={this.state.reviewText}
              changeHandler={this.handleTextChange}
              handleSubmit={this.handleFormSubmit}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App
