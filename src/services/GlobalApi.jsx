import axios from "axios"

const movieBaseUrl ="https://api.themoviedb.org/3"
const api_key = 'f3db44d14753eb7ff2e34a88f96e7781'

const movieByGenreBaseUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=f3db44d14753eb7ff2e34a88f96e7781'

const getTrendingVideos = axios.get(movieBaseUrl+"/trending/all/day?api_key="+api_key)

const getMovieByGenreId=(id)=>axios.get(movieByGenreBaseUrl+"&with_genres="+id)


export default{ 
    getTrendingVideos,
    getMovieByGenreId 
}