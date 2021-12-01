import Person from './person.json'

export default (req, res, next) => {

  res.write(JSON.stringify(Person))
  res.end()
  next()
}
