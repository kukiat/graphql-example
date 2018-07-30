import React, { Component } from 'react'
import styled from 'styled-components';
import gql from 'graphql-tag'
import { graphql, Query, Redirect } from 'react-apollo'

const ReviewDetailBlock = styled.div`
  padding: 10px;
  width: 300px;
  background-color: #FFF;
  
`
const findIdFromUrl = (data) => {
  if(!data.location.pathname.state) {
    const review = data.data.reviews.find(
      review => `/review/${review.title.replace(/ /g, '-')}` === data.location.pathname
    )
    return review.id
  }else {
    return data.location.state.id
  }
}

class ReviewDetail extends Component {
  render() {
    const id = findIdFromUrl(this.props)
    return (
      <Query query={reviewDetailMutation} variables={{ id }} pollInterval={6000}>
        { (props) => (
          props.loading ? null :
           <ShowReviewDetail review={props.data.review}/>
        )}
      </Query>
    )
  }
}

const ShowReviewDetail = (props) => {
  const { title, detail, comments, name } = props.review
  return (
    <ReviewDetailBlock>
      <h3>{ title } </h3>
      <h2>{ detail } </h2>
      <label>{ name } </label>
    </ReviewDetailBlock>
  )
}

const reviewDetailMutation = gql`
  query GetReview($id: ID!) {
    review(id: $id) {
      id
      title
      detail
      name
      comments {
        name
        description
      }
    }
  }
`

export default ReviewDetail