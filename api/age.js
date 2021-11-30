import Person from './person.json'

export default (req, res, next) => {
  
  res.end("age")


  next()
}