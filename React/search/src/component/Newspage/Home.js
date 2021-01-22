import React,{Fragment,Component} from 'react';
import Search from './SearchBar';
import JSON from './db.json';
import NewsList from './Newslist';

class Home extends Component{
    constructor(){
        super()

        this.state={
            news:JSON,
            filtered:JSON
        }
    }

    /*var a = [34,45,36,25,64,12,28]
    a.filter((data) =>  {return data>25})*/
    filterNews = (keyword) => {
        const output = this.state.news.filter((data) => {
            return data.title.toLowerCase().indexOf(keyword.toLowerCase())>-1
        });
        this.setState({filtered:output})
    }

    render(){
        return(
            <Fragment>
                <Search userText={(userinput) => {this.filterNews(userinput)}}/>
                <NewsList newsdata={this.state.filtered}/>
            </Fragment>
        )
    }
}

export default Home;

