export const NETFLIX_LOGO = 'https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-24/consent/87b6a5c0-0104-4e96-a291-092c11350111/019808e2-d1e7-7c0f-ad43-c485b7d9a221/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png';
export const BODY_BACKGROUND = 'https://occ-0-2042-3663.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABeuqjuQsRgqEDlibtJTI5BMf8IxhLlLOeIT6xI4TL57mqv7XHja43gx02S8pZVe8JNGRQXjnrUk1VcsTXqi83tFKPI6OR3k.png?r=bd7';
export const API_KEY = '85c612918678994b2f12920ea6a836f8';
export const API_ACCESS_TOKEN ='eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NWM2MTI5MTg2Nzg5OTRiMmYxMjkyMGVhNmE4MzZmOCIsIm5iZiI6MTc1NTcwNDYyMi4yMTI5OTk4LCJzdWIiOiI2OGE1ZWQyZWMyOTdkNTE1NmI2OTczNjQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.630gjsffXbi3nRR7m_3m8dhOFZinStULMBFybvo5dDQ';

export const API_HEADERS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NWM2MTI5MTg2Nzg5OTRiMmYxMjkyMGVhNmE4MzZmOCIsIm5iZiI6MTc1NTcwNDYyMi4yMTI5OTk4LCJzdWIiOiI2OGE1ZWQyZWMyOTdkNTE1NmI2OTczNjQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.630gjsffXbi3nRR7m_3m8dhOFZinStULMBFybvo5dDQ'
  }
};

export const serviceEndPoints = {
    movies:'https://api.themoviedb.org/3/movie/now_playing',
    trMovies:'https://api.themoviedb.org/3/movie/top_rated',
    upcomingMovies:'https://api.themoviedb.org/3/movie/upcoming',
    popularMovies:'https://api.themoviedb.org/3/movie/popular',
    videos:'https://api.themoviedb.org/3/movie/'
}