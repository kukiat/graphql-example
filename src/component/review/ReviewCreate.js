import React from 'react'
import styled from 'styled-components';
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { reviewsMutation } from './Review'

const InputText = styled.input`
  margin-top: 10px;
  width: 300px !important;
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
    author: ''
  }

  onSubmit = (e) => {
    const { name, title, author } = this.state
    e.preventDefault()
    this.props.mutate({
      variables: { name, title, author },
      refetchQueries: [{ query: reviewsMutation }]
    })
    this.setState({ name: '', title: '', author: '' })
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
          <InputText className="form-control" onChange={this.onInputChange} name="author" value={this.state.author} type="text" placeholder="author"/>
          <InputText className="form-control" onChange={this.onInputChange} name="name" value={this.state.name} type="text" placeholder="name"/>
          <ButtonSubmit type="submit" className="btn">Submit</ButtonSubmit>
        </form>
      </div>
    )
  }
}

const addReviewMutation = gql`
  mutation AddReview($name: String!, $title: String!, $author: String) {
    addReview(name: $name, title: $title, author: $author) {
      title
    }
  }
`

export default graphql(addReviewMutation)(ReviewCreate)