import Person from './person.json'

export default (req, res, next) => {
  
  res.end("name")

  next()
}