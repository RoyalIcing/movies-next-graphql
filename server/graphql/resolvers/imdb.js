const resolvers = {
	Query: {
		movies(obj, args, context, info) {
			
			let movies = obj.movies
			console.log('movies args', JSON.stringify(args))
			if (args.yearReleased != null) {
				movies = movies.filter(movie => movie.yearReleased == args.yearReleased)
			}
			return movies
		}
	}
}

module.exports = resolvers