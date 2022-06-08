const UserCollection = require('../models/UserCollection.js')
const ObjectId = require('mongodb').ObjectId

const CreateUser = async (req, res) => {
    const data = req.body
  
    try {
      const user =  new UserCollection({name: data.name, phone: data.phone, age: data.age, email: data.email, city: data.city, country: data.country})
      user.save()
      res.send({success: 'success'})
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong' })
      console.log(error)
    }
  }

const GetUsers = async (req, res) => {

  try {
    const users = await UserCollection.find({})
    res.send(users)
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' })
    console.log(error)
  }
}

const GetSingleUser = async (req, res) => {

    try {
      const user = await UserCollection.findOne({_id: ObjectId(req.params.id)})
      res.send(user)
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong' })
      console.log(error)
    }
}

const EditUser = async (req, res) => {
  console.log('hitted', req.body);
  const data = req.body;
  const query = {_id: ObjectId(data._id)}

    try {
      const user = await UserCollection.findOneAndUpdate(query, {
        $set: {
          name: data.name,
          age: data.age,
          phone: data.phone,
          email: data.email,
          city: data.city,
          country: data.country
        }
      })
      res.send(user)
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong' })
      console.log(error)
    }
}

const DeleteUser = async (req, res) => {

  try {
    const user = await UserCollection.deleteOne({_id: ObjectId(req.params.id)})
    res.send({success: 'Deleted'})
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' })
    console.log(error)
  }
}

module.exports = {
    CreateUser,
    GetUsers,
    GetSingleUser,
    EditUser,
    DeleteUser
};