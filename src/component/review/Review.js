import React from 'react'
import '../../style/review.css'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import ReviewList from './ReviewItem'

class Review extends React.Component {
  render() {
    return (
      this.props.data.loading ? 
        <div>Loading...</div> :
        this.props.data.reviews.map(review => (
          <ReviewList key={review.id} review={review}/>
      ))
    )
  }
}

const query = gql`
  {
    reviews {
      title
      id
    }
  }
`
export default graphql(query)(Review)