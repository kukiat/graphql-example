const reviews = [
  {
    id: 0,
    title: 'Harray Potter',
    author: 'JK Rolling',
    created: '1532907934111',
    comments: [
      { id: 0, name: 'messi', description: 'good book so good so good.', created: '1532907934790' },
      { id: 3, name: 'messiwdw', description: 'I like it.', created: '1532908005505' },
      { id: 4, name: 'CR7', description: 'nice so good.', created: '1532908005123' },
    ]
  },
  {
    id: 1,
    title: 'One Piece',
    author: 'Oda',
    created: '1532907934100',
    comments: [
      { id: 1, name: 'kuroky', description: 'I like it so much.', created: '1532908093140' },
      { id: 2, name: 'puppey', description: 'I hate this book..', created: '1532908093149' },
    ]
  }
]

const resolvers = {
  Query: {
    reviews: () => {
      return reviews
    },
    review: (parent, args) => {
      return reviews[args.id]
    }
  },
  Mutation: {
    addReview: (parent, args) => {
      const newReview = {
        id: reviews.length,
        title: args.title,
        author: args.author
      }
      reviews.push(newReview)
      return newReview
    }
  }
}

module.exports = resolvers