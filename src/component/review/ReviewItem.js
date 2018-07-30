import React from 'react'
import styled from 'styled-components';

const ReviewItem = styled.div`
  background-color: #FFF;
  border: 1px solid #FFF;
  margin-top: 9px;
  height: 40px;
  border-radius: 5px;
  cursor: pointer;
  padding-top: 10px;
  .review-title {
    font-size: 15px;
  }
  &:hover {
    background-color: #F2F2F2;
  }
`;

export default ({review}) => {
  return (
    <ReviewItem className="col-md-12">
      <div className="review-title">{review.title}</div>
    </ReviewItem>  
  )
}