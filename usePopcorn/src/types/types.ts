export type MovieData = {
  imdbID: string
  Title: string
  Year: string
  Poster: string
}

export type WatchedData = {
  imdbID: string
  Title: string
  Year: string
  Poster: string
  runtime: number
  imdbRating: number
  userRating: number
}

type Rating = {
  Source: string
  Value: string
}

export type ExtendedMovieData = MovieData & {
  Rated: string
  Released: string
  Runtime: string
  Genre: string
  Director: string
  Writer: string
  Actors: string
  Plot: string
  Language: string
  Country: string
  Awards: string
  Ratings: Rating[]
  Metascore: string
  imdbRating: string
  imdbVotes: string
  Type: string
  DVD: string
  BoxOffice: string
  Production: string
  Website: string
  Response: string
}
