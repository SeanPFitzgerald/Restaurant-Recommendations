import React from 'react'

const ReviewForm = (props) => {
  return (
    <div>
      <form id="submit-review-form" onSubmit={props.handleSubmit}>
        <label htmlFor="reviewerName">Name:
          <input
            type="text"
            id="reviewerName"
            name="reviewerName"
            value={props.name}
            onChange={props.changeHandler} />
        </label>
        <label htmlFor="reviewRating">Rating:
          <select
            id="reviewRating"
            name="reviewRating"
            value={props.rating}
            onChange={props.changeHandler}>
            <option value=""></option>
            <option value={0}>0</option>
            <option value={20}>20</option>
            <option value={40}>40</option>
            <option value={60}>60</option>
            <option value={80}>80</option>
            <option value={100}>100</option>
          </select>
        </label>
        <label htmlFor="reviewText">Review:
          <input
            type="text"
            id="reviewText"
            name="reviewText"
            value={props.reviewText}
            onChange={props.changeHandler} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default ReviewForm
