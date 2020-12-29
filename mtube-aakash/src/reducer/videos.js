export default function(state={},action){
    switch(action.type){
        case 'TRENDING_VIDEOS':
            return{...state, trendingVideo:action.payload}
        default:
            return state;
    }
}