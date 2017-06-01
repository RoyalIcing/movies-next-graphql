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
        },
        {
            title: 'Taxi Driver',
            yearReleased: 1976,
            genres: ['drama', 'crime'],
            directors: ['Martin Scorsese'],
            writers: ['Paul Schrader'],
            cast: ['Robert De Niro', 'Jodie Foster', 'Cybill Shepherd'],
            imdbURL: 'http://www.imdb.com/title/tt0075314'
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
	},

    Person: {
        name(obj) {
            return obj
        }
    }
}

module.exports = resolvers