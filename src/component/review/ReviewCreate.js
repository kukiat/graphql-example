import React from 'react'

class ReviewCreate extends React.Component {
  state = {
    name: '',
    title: '',
    author: ''
  }
  onSubmit = (e) => {
    e.preventDefault()
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
          <input onChange={this.onInputChange} name="title" value={this.state.title} type="input" placeholder="title"/>
          <input onChange={this.onInputChange} name="author" value={this.state.author} type="input" placeholder="author"/>
          <input onChange={this.onInputChange} name="name" value={this.state.name} type="input" placeholder="name"/>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default ReviewCreate