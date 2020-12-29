const latesturl = "https://www.googleapis.com/youtube/v3/videos?part=snippet&key=AIzaSyCCjjQ3hJdSDrqgX6CHLoK4R6TndJAxok4&chart=mostPopular&maxResults=30";


export function LatestVideo(){
    const output = fetch(`${latesturl}`,{method:'GET'})
    .then((data) =>  data.json())

    return {
        type:'TRENDING_VIDEOS',
        payload:output
    }
}