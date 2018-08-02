import React, { Component } from 'react'
import styled from 'styled-components';
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

const ReviewDetailBlock = styled.div`
  padding: 20px 25px;
  width: 300px;
  background-color: #FFF;
  .name-section {
    display: flex;
    margin-top: 20px;
  }
`

const HeaderText = styled.div`
  text-align: center;
  font-size: 30px;
  font-weight: 500;
  color: #03a9f4;
`
const DetailText = styled.div`
  font-size: 20px;
  font-weight: 300;
  margin-top: 20px;
`
const NameText = styled.div`
  margin-left: 10px;
  font-size: 15px;
  font-weight: 400;

`

const findIdFromUrl = (val) => {
  if(!val.location.pathname.state) {
    const review = val.data.reviews.find(
      review => `/review/${review.title.replace(/ /g, '-')}` === val.location.pathname
    )
    return review.id
  }else {
    return val.location.state.id
  }
}

const ReviewDetail = (props) => {
  const id = findIdFromUrl(props)
  return (
    <Query query={reviewDetailMutation} variables={{ id }} pollInterval={6000}>
      { (props) => (
        props.loading ? null :
        <ShowReviewDetail review={props.data.review}/>
      )}
    </Query>
  )
}

const ShowReviewDetail = (props) => {
  const { title, detail, comments, name } = props.review
  return (
    <ReviewDetailBlock>
      <HeaderText>{ title } </HeaderText>
      <div style={{ height:'2px', backgroundColor: '#e0e0e0', marginTop: '10px' }}/>
      <DetailText>{ detail } </DetailText>
      <div className="name-section">
        <img src="https://www.glurr.com/images/hidden_profile.png?v=1001" width="20" height="20" style={{ borderRadius: '50%' }}/>
        <NameText>{ name } </NameText>
      </div>
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