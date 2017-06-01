import gql from 'graphql-tag'
import apollo from '../client/apollo'
import Movie from '../components/Movie'

const Movies = ({ movies }) => (
    <section>
        <h1>Movies</h1>
        {
            movies.map((movie, index) => (
                <Movie key={ index} { ...movie } />
            ))
        }
    </section>
)

Movies.getInitialProps = async () => {
    const { data } = await apollo.query({
        query: gql`
            query Query {
                movies {
                    title
                    yearReleased
                    directors {
                        name
                    }
                }
            }
        `
    })
    return { movies: data.movies }
}

export default Movies