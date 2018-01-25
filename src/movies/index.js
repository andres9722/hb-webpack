import { Header } from './components/header/header.js'
import { Movies } from './components/movies/movies.js'
import { Grid } from './components/grid/grid.js'
import Data from './components/data/movies-data.js'
/* eslint-disable */
import css from '../index.scss'

const URL = 'https://api.myjson.com/bins/13nux1'

Data.get(URL, dataMovies => {
  const movies = dataMovies.map(movie => new Movies(movie))
  const grid = new Grid('.movies-container', movies, dataMovies)
  const header = new Header('.main-header', 
                            grid.filterByCategory.bind(grid),
                            grid.reset.bind(grid),
                            dataMovies)
})
/* eslint-enable */
