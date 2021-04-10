import React, { Component } from 'react'
import {connect} from 'react-redux'
import CardBlocks from './CardBlocks'

export class MoviesBlock extends Component {
    render() {
        const { movies } = this.props;
        let content = ''
        content =
          movies.Response === 'True'
            ? movies.Search.map((movie, index) => (
                <CardBlocks key={index} movie={movie} />
              ))
            : null;
        return (
            <div>
                <div className="row">{content}</div>;
            </div>
        )
    }
}

const mapStatesToProps = state => ({
    movies: state.movies.movies
})
export default connect(mapStatesToProps)(MoviesBlock)
