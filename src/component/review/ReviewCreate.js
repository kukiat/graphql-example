import React from 'react'
import styled from 'styled-components';
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { reviewsMutation } from './Review'

const InputText = styled.input`
  margin-top: 10px;
  height: 32px !important;
`

const ButtonSubmit = styled.button`
  background-color: #FF672B;
  color: #FFF;
  margin-top: 10px;
  &:hover {
    background-color: #EE672B;
  }
`

class ReviewCreate extends React.Component {
  state = {
    name: '',
    title: '',
    detail: ''
  }

  onSubmit = (e) => {
    const { name, title, detail } = this.state
    e.preventDefault()
    this.props.mutate({
      variables: { name, title, detail },
      refetchQueries: [{ query: reviewsMutation }]
    })
    this.setState({ name: '', title: '', detail: '' })
  }

  onInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <InputText className="form-control" onChange={this.onInputChange} name="title" value={this.state.title} type="text" placeholder="title"/>
          <InputText className="form-control" onChange={this.onInputChange} name="detail" value={this.state.detail} type="text" placeholder="detail"/>
          <InputText className="form-control" onChange={this.onInputChange} name="name" value={this.state.name} type="text" placeholder="name"/>
          <ButtonSubmit type="submit" className="btn">Submit</ButtonSubmit>
        </form>
      </div>
    )
  }
}

const addReviewMutation = gql`
  mutation AddReview($name: String!, $title: String!, $detail: String!) {
    addReview(name: $name, title: $title, detail: $detail) {
      title
    }
  }
`

export default graphql(addReviewMutation)(ReviewCreate)