const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}

const password = process.argv[2]
const url =
  `mongodb://fullstack:${password}@cluster0-shard-00-00.tngae.mongodb.net:27017,cluster0-shard-00-01.tngae.mongodb.net:27017,cluster0-shard-00-02.tngae.mongodb.net:27017/phonebook?ssl=true&replicaSet=atlas-syzbo0-shard-0&authSource=admin&retryWrites=true&w=majority`
  
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

const personSchema = new mongoose.Schema({
  name : String,
  number : String
})

const Person = mongoose.model('Person', personSchema)

const person = new Person({
  name : process.argv[3],
  number : process.argv[4]
})

if (process.argv.length == 5) {
  person.save().then(result => {
    console.log(`added ${person.name} number ${person.number} to phonebook` )
    mongoose.connection.close()
  })
}

if (process.argv.length == 3) {
  Person.find({}).then(result =>{
    console.log('Phonebook:')
    result.forEach(person => {console.log(`${person.name} ${person.number}`)})
    mongoose.connection.close()
  })
}