const SET_MOVIES = 'movies/SET_MOVIES'
const SET_SINGLE_MOVIE = 'movies/SET_SINGLE_MOVIE'
const START_FETCHING_MOVIES = 'movies/START_FETCHING_MOVIES'
const STOP_FETCHING_MOVIES = 'movies/STOP_FETCHING_MOVIES'

export const getMovies = searchInput => (dispatch, getState) => {
    dispatch({type: START_FETCHING_MOVIES})
    setTimeout(() => {
        fetch(
            `http://www.omdbapi.com/?apikey=e007e3f6&s=${searchInput}`
        )
            .then(response => response.json())
            .then(data => {
                dispatch(setMovies(data.Search))
                dispatch({type: STOP_FETCHING_MOVIES})
            })
    }, 1000)
}

const setMovies = (moviesData) => ({
    type: SET_MOVIES,
    moviesData
})

export const getSingleMovie = movieId => (dispatch, getState) => {
    fetch(
        `http://www.omdbapi.com/?apikey=e007e3f6&i=${movieId}`
    )
        .then(response => response.json())
        .then(data => {
            dispatch(setSingleMovie(data))
        })
}

const setSingleMovie = (singleMovieData) => ({
    type: SET_SINGLE_MOVIE,
    singleMovieData
})

const initialState = {
    moviesData: [],
    singleMovieData: {},
    isMoviesFetching: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case START_FETCHING_MOVIES:
            return {
                ...state,
                isMoviesFetching: true
            }
        case STOP_FETCHING_MOVIES:
            return {
                ...state,
                isMoviesFetching: false
            }
        case SET_MOVIES:
            return {
                ...state,
                moviesData: action.moviesData
            }
        case SET_SINGLE_MOVIE:
            return {
                ...state,
                singleMovieData: action.singleMovieData
            }
        default:
            return state
    }
}

