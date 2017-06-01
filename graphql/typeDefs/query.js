module.exports = `
type Query {
  movies(yearReleased: Int): [Movie]!
}
`