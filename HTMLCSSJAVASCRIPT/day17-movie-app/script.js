const API_KEY = 'a8917691c1e73fa663f848a0e1f2e239'
const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?&api_key=${API_KEY}&query="`


const doc = document
const form = doc.getElementById('form')
const search - doc.getElementById('search')


getMovies(API_URL)

async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()
    
    console.log(data.results)
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const searchTerm = search.value

    if (searchTerm && searchTerm !== '') {
        getMovies(SEARCH_API + searchTerm + '"')

        searchTerm.value = ''
    } else { 
        window.location.reload()
    }
})