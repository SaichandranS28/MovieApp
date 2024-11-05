let api = 'https://www.omdbapi.com/?apikey=61e576a4&t='

// API link was converting to JSON format to show needed value and consoling the output.
// fetch(api).then((data)=>{
//     return data.json()
// }).then((data)=>{
//     console.log(data)
// })
// fetch(api).then(data => data.json()).then((data)=>{
//     console.log(data)
// })

let movieName = document.querySelector('#movieName')
let search = document.querySelector('#search')
let content = document.querySelector('#content')
let error = document.querySelector('#error')

let must = document.querySelector('#must-watch')
let recommended = document.querySelector('#recommended')
let worth = document.querySelector('#worth')
let average = document.querySelector('#average')
let bad = document.querySelector('#bad')

must.classList.add('hidden')
recommended.classList.add('hidden')
worth.classList.add('hidden')
average.classList.add('hidden')
bad.classList.add('hidden')



search.addEventListener('click', ()=>{
    let movieFetch = api + movieName.value
    fetch(movieFetch).then((data)=>{
        return data.json()
    }).then(data =>{
        if(data.Error == 'Movie not found!'){
            error.innerText = 'Sorry 😔... Movie Not Found!!!'
        }
        
        else{
            content.classList.remove('hidden')

            let title = document.querySelector('#title')
            let plot = document.querySelector('#plot')
            let actors = document.querySelector('#actors')
            let directors = document.querySelector('#directors')
            let language = document.querySelector('#language')
            let genre = document.querySelector('#genre')
            let collection = document.querySelector('#collection')
            let awards = document.querySelector('#awards')
            let ratings = document.querySelector('#ratings')
            let poster = document.querySelector('#poster')

            title.innerText = data.Title
            plot.innerText = data.Plot
            actors.innerText = data.Actors
            directors.innerText = data.Director
            language.innerText = data.Language
            genre.innerText = data.Genre
            collection.innerText = data.BoxOffice
            awards.innerText = data.Awards
            poster.src = data.Poster
            ratings.innerText = data.imdbRating

            must.classList.add('hidden')
            recommended.classList.add('hidden')
            worth.classList.add('hidden')
            average.classList.add('hidden')
            bad.classList.add('hidden')
            
            if(data.imdbRating >= 9.0){
                must.classList.remove('hidden')
            }
            else if(data.imdbRating >= 7.5 & data.imdbRating <=8.9){
                recommended.classList.remove('hidden')
            }
            else if(data.imdbRating >= 6.0 & data.imdbRating <=7.4){
                worth.classList.remove('hidden')
            } 
            else if(data.imdbRating >= 4.5 & data.imdbRating <=5.9){
                average.classList.remove('hidden')
            } 
            else if(data.imdbRating < 4.5){
                bad.classList.remove('hidden')
            }      
        }
    })
})