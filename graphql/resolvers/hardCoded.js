const data = {
    movies: [
        {
            title: "Pirates of the Caribbean: Salazar's Revenge ",
            yearReleased: 2017,
            genres: ['action', 'adventure', 'fantasy'],
            directors: ['Joachim Rønning', 'Espen Sandberg'],
            writers: ['Jeff Nathanson', 'Jeff Nathanson'],
            cast: ['Johnny Depp', 'Geoffrey Rush', 'Javier Bardem'],
            imdbURL: 'http://www.imdb.com/title/tt1790809/?ref_=inth_ov_tt'
        }
    ]
}

const resolvers = {
	Query: {
		movies(obj, args, context, info) {
			let movies = data.movies
			if (args.yearReleased != null) {
				movies = movies.filter(movie => movie.yearReleased == args.yearReleased)
			}
			return movies
		}
	}
}

module.exports = resolvers