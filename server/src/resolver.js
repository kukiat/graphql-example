const ReviewModel = require('../model/review')
const { getAllReview, getReviewById, addReview } = require('../controller/reviewController')

const resolvers = {
  Query: {
    reviews: async () => {
      try {
        const reviews = await getAllReview()
        return reviews
      }catch(err) {
        console.log(error)
      }
    },
    review: async (root, { id }) => {
      try {
        const review = await getReviewById(id)
        return review
      }catch(err) {
        console.log(err)
      }
    }
  },
  Mutation: {
    addReview: async (root, { title, name, author }) => {
      try {
        const review = await addReview({ title, name, author })
        return review
      }catch(err) {
        console.log(err)
      }
    }
  }
}

module.exports = resolvers