import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';


const client = new ApolloClient({
    uri:'http://localhost:8600/graphql'
})

const GET_MOVIES = gql`
    query Movies($id:Int){
        Movies(id:$id){
            name,
            language,
            imageUrl
        }
    }
`

const MoviePage = () => {
    return(
        <div>
            <Query query={GET_MOVIES} client={client} variables={{id:3}}>
                {({loading,error,data}) => {
                    if(loading) return <p>Loading....</p>
                    if(error) return <p>Error....</p>
                    return(
                        <div>
                            <h2>{data.Movies.name}</h2>
                            <h2>{data.Movies.language}</h2>
                            <h2>{data.Movies.imageUrl}</h2>
                        </div>
                    )
                }}
            </Query>
        </div>
    )
}

ReactDOM.render(<MoviePage/>,document.getElementById('root'))