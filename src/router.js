import { Route, Switch } from 'react-router-dom'
import React from 'react'
import NotFoundPage from './component/NotFoundPage'
import Review from './component/review/Review';
import ReviewDetail from './component/review/ReviewDetail'

export default () => {
  return (
    <Switch>
      <Route exac path="/" component={Review}/>
      {/* <Route component={NotFoundPage}/> */}
    </Switch>
  )
}