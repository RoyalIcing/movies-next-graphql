export default `
type Query {
  movies(yearReleased: Int): [Movie]!
}
`