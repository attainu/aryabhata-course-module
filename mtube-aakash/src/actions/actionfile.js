const base_url = "https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyCCjjQ3hJdSDrqgX6CHLoK4R6TndJAx"


export function LatestVideo(){
    const output = fetch(`${base_url}&chart=mostPopular&maxResults=30`,{method:'GET'})
    .then((data) =>  data.json())

    return {
        type:'TRENDING_VIDEOS',
        payload:output
    }
}

export function SearchVideo(userInput){
    let usersearch = userInput?userInput:'IndiaTrending';
    const output = fetch(`${base_url}&maxResults=10&q=${usersearch}`,{method:'GET'})
    .then((data) =>  data.json())

    return {
        type:'SEARCH_VIDEOS',
        payload:output
    }
}