import axios from "axios"

const movieBaseUrl ="https://api.themoviedb.org/3"
const api_key = '89c3ab75dcb490307fd168637b7605d9'

const movieByGenreBaseUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=89c3ab75dcb490307fd168637b7605d9'

const getTrendingVideos = axios.get(movieBaseUrl+"/trending/all/day?api_key="+api_key)

const getMovieByGenreId=(id)=>axios.get(movieByGenreBaseUrl+"&with_genres="+id)


export default{ 
    getTrendingVideos,
    getMovieByGenreId 
}