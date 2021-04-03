require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const Person = require('./models/person')
const person = require('./models/person')
const app = express()

app.use(express.json())

app.use(express.static('build'))

app.use(cors())

// let persons = [
//   {
//     "name": "Arto Hellas",
//     "number": "040-123456",
//     "id": 1
//   },
//   {
//     "name": "Ada Lovelace",
//     "number": "39-44-5323523",
//     "id": 2
//   },
//   {
//     "name": "Dan Abramov",
//     "number": "12-43-234345",
//     "id": 3
//   },
//   {
//     "name": "Mary Poppendieck",
//     "number": "39-23-6423122",
//     "id": 4
//   }
// ]

morgan.token('body',function (req, res){ 
  return req.method === 'POST'? JSON.stringify(req.body) : undefined})

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))
 
app.get('/',(request,response)=>{
  response.send('<h1>Hello</h1>')
})

app.get('/api/persons',(request,response) =>{
  Person.find({}).then(persons =>{
    response.json(persons)
  })
})

app.get('/api/persons/:id',(request,response,next) =>{
  Person.findById(request.params.id).then(person =>{
    if(person){
      response.json(person)
    }else {
      response.status(404).end()
    }
  })
    .catch(error => {
      console.log(error)
      next(error)
    })
})

app.delete('/api/persons/:id',(request,response) =>{
  person.findByIdAndRemove(request.params.id) .then(result => {
    response.status(204).end()
  })
    .catch(error => next(error))
})

app.post('/api/persons',(request,response,next)=>{
  const body = request.body
  
  // if(!body.name || !body.number){
  //  return  response.status(400).json({ error : 'relevant data missing'})
  // }

  const person = new Person({
    name : body.name,
    number : body.number
  })

  // persons = persons.concat(person)
  person.save().then(savedPerson =>{
    response.json(savedPerson)
  }).catch(error => next(error))
  // response.json(person)
})

app.put('/api/persons/:id', (request, response, next) => {
  const body = request.body
  const person = {
    name: body.name,
    number : body.number,
  }

  Person.findByIdAndUpdate(request.params.id, person, { new: true })
    .then(updatedPerson => {
      response.json(updatedPerson)
    })
    .catch(error => next(error))
})

app.get('/info',(request,response) =>{
  var date =  new Date()
  Person.find({}).then(persons =>{
    response.send(`
      <p> Phonebook has info of ${persons.length} people </p>
      <p> ${date}</p>
  `)
  })
})

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } else if(error.name == 'ValidationError'){
    return response.status(400).json({ error: error.message })
  }

  next(error)
}

app.use(errorHandler)


const PORT = process.env.PORT 
app.listen(PORT,() =>{
  console.log("Hello")
})