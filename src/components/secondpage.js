import React, { Component } from 'react';
import { connect } from 'react-redux';


import { fetchMovie, setLoading } from '../actions/searchActions';

import Loader from './Loader';

export class secondpage extends Component {

    componentDidMount() {
        this.props.fetchMovie(this.props.match.params.id);
        this.props.setLoading();
    }

    render() {
        const { loading, movie, movie_details} = this.props;
        console.log(this.props)
        let Information = (
            <div className="container">
                <div className="row">
                <h2 className="title">Movie Name :- " {movie.title} "</h2>
                <iframe width="70%" height="400px" margine-right ="30px" title="Trailer" src={`https://www.youtube.com/embed/${movie.youtube_trailer_key }`}></iframe>
                    {/* <div className="col-md-4 card card-body">
                        <img src={movie.Poster} className="thumbnail" alt="Poster" />
                    </div> */}
                    <div className="col-md-8">
                        <br/>
                        <br/>
                        <ul className="list-group">
                            <li className="list-group-item">
                                <strong>Genre:</strong> {movie.genres}
                            </li>
                            <li className="list-group-item">
                                <strong>Released:</strong> {movie.release_date}
                            </li>
                            <li className="list-group-item">
                                <strong>IMDB Rating:</strong> {movie.imdb_rating}
                            </li>
                            <li className="list-group-item">
                                <strong>Director:</strong> {movie.directors}
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="card card-body bg-dark my-5 text-light">
                        <div className="col-md-12">
                            <h3>Description </h3>
                            {movie.description}
                            <hr />
                            <a
                                href={'https://www.imdb.com/title/' + movie.imdb_id}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-warning"
                            >
                                View More Info
                            </a> 
                        </div>
                    </div>
                </div>
            </div>
            
        );

        let content = loading ? <Loader /> : Information;
        return <div>{content}</div>;
    }
}

const mapStateToProps = state => ({
    loading: state.movies.loading,
    movie: state.movies.movie,
    movie_details: state.movie_details
});

export default connect(mapStateToProps, { fetchMovie, setLoading })(secondpage);