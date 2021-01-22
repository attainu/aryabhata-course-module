export default function(state={},action){
    switch(action.type){
        case 'TRENDING_VIDEOS':
            return{...state, trendingVideo:action.payload}
        case 'SEARCH_VIDEOS':
            return{...state, searchVideo:action.payload}
        case 'VIDEO_BYID':
            return{...state, Videobyid:action.payload}
        case 'Comment_BYID':
            return{...state, Commentbyid:action.payload}
        default:
            return state;
    }
}