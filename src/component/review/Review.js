import React from 'react'
import '../../style/review.css'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import ReviewList from './ReviewItem'

class Review extends React.Component {
  render() {
    console.log(this.props.data)
    return (
      this.props.data.loading ? 
        <div>Loading...</div> :
        this.props.data.reviews.map(review => (
          <ReviewList key={review.id} review={review}/>
      ))
    )
  }
}

export const queryReviews = gql`
  {
    reviews {
      title
      id
    }
  }
`

export default graphql(queryReviews)(Review)