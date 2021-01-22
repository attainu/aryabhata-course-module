import React,{Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {latestNews,articleNews,galleryNews} from '../actions/actionfile';
import ArticleDisplay  from '../component/Home/articleDisplay';
import LatestDisplay from '../component/Home/latestDisplay';
import GalleryDisplay from '../component/Home/GalleryDisplay';

class Home extends Component{
    componentDidMount(){
        this.props.dispatch(latestNews())
        this.props.dispatch(articleNews())
        this.props.dispatch(galleryNews())
    }

    render(){
        return(
            <div>
                <LatestDisplay ldata={this.props.datalist.latestNews}/>
                <ArticleDisplay adata={this.props.datalist.articleNews}/>
                <GalleryDisplay gdata={this.props.gallist.galleryNews}/>
            </div>
        )

    }
}

function mapStateToProps(state){
    return{
        datalist:state.article,
        gallist:state.gallery
    }
}

export default connect(mapStateToProps)(Home)