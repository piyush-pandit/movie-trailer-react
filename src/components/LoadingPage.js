import React, { Component } from 'react'
import {connect} from 'react-redux'
import MainPage from './MainPage'
import Loader from './Loader'
import MoviesBlock from './MoviesBlock'
export class LoadingPage extends Component {
    render() {
        const {loading} =this.props;
        return (
            <div className="container">
                <MainPage /> 
                {loading ? <Loader /> : <MoviesBlock />} 
            </div>
        )
    }
}

const mapStatesToProps = state => ({
    loading: state.movies.loading
})
export default connect(mapStatesToProps)(LoadingPage)
