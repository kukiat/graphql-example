const ReviewModel = require('../model/review')

const getAllReview = () => {
  return new Promise ((resolve, reject) => {
    ReviewModel.find({})
      .then(reviews => {
        const allReviews = reviews.map(review => ({
          id: review.id,
          title: review.title,
          author: review.author,
          name: review.name,
          comments: review.comments,
          created: "4545"
        }))
        resolve(allReviews)
      })
      .catch(err => reject(err))
  })
}


const getReviewById = (id) => {
  return new Promise((resolve, reject) => {
    ReviewModel.findById(id)
      .then(review => resolve({
        id: review.id,
        title: review.title,
        author: review.author,
        name: review.name,
        comments: review.comments,
        created: "4545"
      }))
      .catch(err => reject(err))
  })
}

const addReview = ({ title, author, name }) => {
  return new Promise((resolve, reject) => {
    const newReview = new ReviewModel({
      title,
      author,
      name,
      created: Date.now(),
      comments: []
    })
    newReview.save()
      .then(review => resolve({
        id: review.id,
        title: review.title,
        author: review.author,
        name: review.name,
        comments: review.comments,
        created: "4545"
      }))
      .catch(err => reject(err))
  })
}

module.exports = {
  getAllReview,
  getReviewById,
  addReview
}