const base_url = "https://www.googleapis.com/youtube/v3";
const Api_key= ""

export function LatestVideo(){
    const output = fetch(`${base_url}/search?part=snippet&key=${Api_key}&chart=mostPopular&maxResults=30`,{method:'GET'})
    .then((data) =>  data.json())

    return {
        type:'TRENDING_VIDEOS',
        payload:output
    }
}

export function SearchVideo(userInput){
    let usersearch = userInput?userInput:'IndiaTrending';
    const output = fetch(`${base_url}/search?part=snippet&key=${Api_key}&maxResults=10&q=${usersearch}`,{method:'GET'})
    .then((data) =>  data.json())

    return {
        type:'SEARCH_VIDEOS',
        payload:output
    }
}

export function CommentById(vid){
    vid = vid?vid:'4sNfipi19go&t';
    const output = fetch(`${base_url}/commentThreads?part=snippet,replies&videoId=${vid}&key=${Api_key}`,{method:'GET'})
    .then((data) =>  data.json())

    return {
        type:'Comment_BYID',
        payload:output
    }
}

export function VideoById(vid){
    vid = vid?vid:'4sNfipi19go&t';
    const output = fetch(`${base_url}/videos?part=snippet&id=${vid}&key=${Api_key}`,{method:'GET'})
    .then((data) =>  data.json())

    return {
        type:'VIDEO_BYID',
        payload:output
    }
}

export const AUTH_ACTION = {
    LOGIN: 'AUTH_LOGIN',
    LOGOUT: 'AUTH_LOGOUT'
}