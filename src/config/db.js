const mongoose = require('mongoose')

const mongoDburl = 'mongodb+srv://admin:admin@backend-fcijd.mongodb.net/test?retryWrites=true&w=majority'


const connectDb = async () => {
  try {
    await mongoose.connect(mongoDburl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })
    console.log('DataBase connected successfully')
  } catch (err) {
    console.log('err')
  }
}

module.exports = connectDb

