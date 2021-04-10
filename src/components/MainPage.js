import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Carousel, Jumbotron } from 'react-bootstrap'
import {searchMovie, fetchMovies, setLoading} from './../actions/searchActions';
import image1 from './../images/image1.jpg'
import image2 from './../images/image2.jpg'
import image3 from './../images/image3.jpg'
import image4 from './../images/image4.jpg'

export class MainPage extends Component {

    onChange = e => {
        this.props.searchMovie(e.target.value);
    };

    onSubmit = e => {
        e.preventDefault();
        this.props.fetchMovies(this.props.text);
        this.props.setLoading();
    };

    render() {
        return (
            <div>
                <Jumbotron className = "jumbo">
                        <Carousel fade={true} pause={false}>
                            <Carousel.Item interval={2000}>
                                <img
                                    className="d-block w-100"
                                    src={image1}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>Search More Movies Below</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={2000}>
                                <img
                                    className="d-block w-100"
                                    src={image2}
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                    <h3>Search More Movies Below</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={2000}>
                                <img
                                    className="d-block w-100"
                                    src={image3}
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                    <h3>Search More Movies Below</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={2000}>
                                <img
                                    className="d-block w-100"
                                    src={image4}
                                    alt="fourth slide"
                                />
                                <Carousel.Caption>
                                    <h3>Search More Movies Below</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                </Jumbotron>
                <div className="jumbotron jumbotron-fluid mt-5 text-center">
                    <div className="container">
                        <h1 className="display-4 mb-3">
                        <i class="fas fa-eye" /> Search Movie Trailer <i class="fas fa-eye" />
                        </h1>
                        <form id="searchForm" onSubmit={this.onSubmit}>
                            <input
                                type="text"
                                className="form-control"
                                name="searchText"
                                placeholder="Type Movie name here"
                                onChange={this.onChange}
                            />
                            <button type="submit" className="btn btn-warning btn-bg mt-3">
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStatesToProps = state => ({
    text: state.movies.text
})



export default connect(mapStatesToProps,{ searchMovie, fetchMovies, setLoading })(MainPage)



