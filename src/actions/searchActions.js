import { SEARCH_MOVIE, FETCH_MOVIES, FETCH_MOVIE, LOADING, MOVIE_DETAILS} from './action';
import axios from 'axios';


export const searchMovie = text => dispatch => {
  dispatch({
    type: SEARCH_MOVIE,
    payload: text
  });
};

export const fetchMovies = text => dispatch => {
  axios
    .get(`https://www.omdbapi.com/?apikey=e8ec3e81&s=${text}`)
    .then(response =>
      dispatch({
        type: FETCH_MOVIES,
        payload: response.data
      })
    )
    .catch(err => console.log(err));
};

export const fetchMovie = id => dispatch => {
  const baseURLIMDb = "https://movies-tvshows-data-imdb.p.rapidapi.com/"
        const paramsIMDb = { type: 'get-movie-details', imdb:id}
        const headersIMDb = {
            'x-rapidapi-key': '35185625ffmshae485834fdadb9ap1948bajsn1bbdee7db0ae',
            'x-rapidapi-host': 'movies-tvshows-data-imdb.p.rapidapi.com'
        }

        axios.get(baseURLIMDb, {
            params: paramsIMDb,
            headers: headersIMDb
        })
            .then((response) => {
                console.log(response.data);
                dispatch({
                        type: FETCH_MOVIE,
                        payload: response.data
                      })
            }).catch((error) => {
                console.error(error);
            });

};

export const setLoading = () => {
  return {
    type: LOADING
  };
};

export const movie_details = text => dispatch => {
  console.log("errrrrrrr", text)
  dispatch({
    type: MOVIE_DETAILS,
    payload: text
  });
};

