import React from 'react'
import '../../style/review.css'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import ReviewList from './ReviewItem'
import ReviewDetail from './ReviewDetail'
import ReviewCreate from './ReviewCreate'
import { Link, Route, Redirect } from 'react-router-dom'

class Review extends React.Component {
  render() {
    if(this.props.data.error) {
      return(
        <h1>Please Load Again</h1>
      )
    }else {
      return (
        this.props.data.loading ? null :
        <div className="row"> 
          <div className="col-md-3">
            <ReviewCreate/>
          </div>
          <div className="col-md-4">
              { this.props.data.reviews.map(review => (
                <Link 
                  key={review.id} 
                  to={{ 
                    pathname: `/review/${review.title.replace(/ /g, '-')}`, 
                    state: { id: review.id} 
                  }}
                >
                  <ReviewList key={review.id} review={review}/>
                </Link>
              ))}
          </div>
          <div className="col-md-5">
            <Route path="/review/:id" render={(props) => (
              <ReviewDetail {...props} {...this.props}/>
            )}/>
          </div>
        </div>
      )
    }
  }
}

export const reviewsMutation = gql`
  query ReviewList {
    reviews {
      title
      id
    }
  }
`

export default graphql(reviewsMutation)(Review)