export default `
type Movie {
  title: String!
  description: String!
  yearReleased: Int!
  directors: [Person]!
  writers: [Person]!
  cast: [Person]!
  imdbURL: String
}
`