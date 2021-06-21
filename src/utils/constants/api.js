export const API_URL = 'https://api.themoviedb.org/3';
export const API_KEY = '?api_key=1320b50a2f35c84b1f417cf27c46026d';

export const API_TRENDING_MOVIES = `${API_URL}/trending/movie/week${API_KEY}`;
export const API_POPULAR_MOVIES = `${API_URL}/movie/popular${API_KEY}`;
export const API_TOP_RATED_MOVIES = `${API_URL}/movie/top_rated${API_KEY}`;
export const API_UPCOMING_MOVIES = `${API_URL}/movie/upcoming${API_KEY}`;
export const API_NOW_PLAYING_MOVIES = `${API_URL}/movie/now_playing${API_KEY}`;

export const API_TRENDING_TV = `${API_URL}/trending/tv/week${API_KEY}`;
export const API_POPULAR_TV = `${API_URL}/tv/popular${API_KEY}`;
export const API_TOP_RATED_TV = `${API_URL}/tv/top_rated${API_KEY}`;
export const API_CURRENTLY_AIRING_TV = `${API_URL}/tv/on_the_air${API_KEY}`;
export const API_AIRING_TODAY_TV = `${API_URL}/tv/airing_today${API_KEY}`;

export const API_SEARCH = `${API_URL}/search/multi${API_KEY}&language=en-US&query=`
