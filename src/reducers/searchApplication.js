import { SEARCH_MOVIE, FETCH_MOVIES, FETCH_MOVIE, LOADING, MOVIE_DETAILS} from '../actions/action';

const initialState = {
    text: '',
    movies: [],
    loading: false,
    movie: [],
    movie_detail:[]
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SEARCH_MOVIE:
            return {...state, text: action.payload, loading: false};
        case FETCH_MOVIES:
            return {...state, movies: action.payload, loading: false};
        case FETCH_MOVIE:
            return {...state, movie: action.payload, loading: false};
        case LOADING:
            return {...state, loading: true};
        case MOVIE_DETAILS:
            return {...state, movie_detail: action.payload, loading: false }
        default:
            return state;
    }
} 