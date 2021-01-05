import React,{Component} from 'react';

class PlayList extends Component{
    constructor(){
        super()

        this.state={
            playList:'',
            privacyStatus:'',
            title:'',
            description:''
        }
    }

    renderPlayList = (data) => {
        if(data){
            return data.items.map((pdata) => {
                console.log(pdata)
                return(
                    <div>
                        <img src={pdata.snippet.thumbnails.default.url}/>
                        <p>{pdata.snippet.title}</p>
                        <p>{pdata.snippet.description}</p>
                        
                        <hr/>
                    </div>
                )
            })
        }
        
    }

    handleChange = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    handleSubmit=()=>{
        console.log(this.state)
        var playlist = 
        {status: 
            {privacyStatus: this.state.privacyStatus}, 
            snippet: {
                description: this.state.description, 
                title: this.state.title
            }
        } 
        var url = `https://www.googleapis.com/youtube/v3/playlists?part=snippet,status&key=AIzaSyCCjjQ3hJdSDrqgX6CHLoK4R6TndJAxok4`
        fetch(url,{
                    method:'POST',
                    headers:{
                        Authorization:`Bearer ${this.props.match.params.id}`,
                        Accept: "application/json"
                    },
                    body:JSON.stringify(playlist)
                })
                .then((res) => res.json())
                .then((data) => {
                    this.props.history.push(`/playlist/${this.props.match.params.id}`)
        })
    }
    render(){
        return(
            <React.Fragment>
            <div className="row">
            <input
                type="text"
                name="title"
                placeholder="Enter your playlist title"
                value={this.state.title}
                onChange={this.handleChange}
            />
            <input
                type="text"
                name="description"
                placeholder="Enter your playlist description"
                value={this.state.description}
                onChange={this.handleChange}
            />
            <select
                name="privacyStatus"
                onChange={this.handleChange}
                value={this.state.privacyStatus}
             >
                <option value="" disabled>
                Choose a status
                </option>
                <option value="public">Public</option>
                <option value="unlisted">Unlisted</option>
                <option value="private">Private</option>
            </select>
            <button className="btn btn-success" onClick={this.handleSubmit}>Create</button>

            </div>
            <div className="row">
                <h1>PlayList</h1>
                {this.renderPlayList(this.state.playList)}

            </div>
            </React.Fragment>
        )
    }
    

    componentDidMount(){
        console.log('Component Did Mount')
        var url="https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&maxResults=25&mine=true&key=AIzaSyCCjjQ3hJdSDrqgX6CHLoK4R6TndJAxok4"
       fetch(url,{
           method:'GET',
           headers:{
               Authorization:`Bearer ${this.props.match.params.id}`,
               Accept: "application/json"
           }
       })
       .then((res) => res.json())
       .then((data) => {
           this.setState({playList:data})
       })
    }
}

export default PlayList