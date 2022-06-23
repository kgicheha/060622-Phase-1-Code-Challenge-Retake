// Your code here


//GET DOM ELEMENTS
const filmTitles = document.querySelector('#films')
const moviePoster = document.querySelector('#poster')
const title = document.querySelector('#title')
const filmInfo = document.querySelector('#film-info')
const runTime = document.querySelector('#runtime')
const showTime = document.querySelector('#showtime')
const availableTickets = document.querySelector('#ticket-num')
const buyTicketButton = document.querySelector('#buy-ticket')

//removes the default data
filmTitles.textContent= ''




//fetch the data from json data base
fetch('http://localhost:3000/films')
.then(response => response.json())
.then(data => data.forEach(renderData))

//function to render data
function renderData(object) {
    //create DOM Elements
    const movieList = document.createElement('li')
    //attach data to DOM element
    movieList.textContent = object.title
    //append to
    filmTitles.append(movieList)


    //CREATE EVENT LISTENER FOR EACH MOVIE TITLE
    //Displays its poster, title, runtime, showtime, and available ticket
    movieList.addEventListener('click', ()=> {
        //removes the default data
        moviePoster.src = ''
        title.textContent = ''
        runTime.textContent = ''
        showTime.textContent = ''

        filmInfo.textContent = ''

        //create DOM elements

        const movieImage = document.createElement('img')
        let movieName = document.createElement('h3')
        let description = document.createElement('p')
        let duration = document.createElement('h3')
        const time = document.createElement('p')


        //attach data to DOM element
        movieImage.src = object.poster
        movieName.textContent = object.title
        description.textContent = object.description
        duration.textContent = object.runtime + ' minutes'
        time.textContent = object.showtime


        //append to DOM
        moviePoster.append(movieImage)
        title.append(movieName)
        filmInfo.append(description)
        runTime.append(duration)
        showTime.append(time)
    })

    const openTick = object.capacity
    let ticketSold = object.tickets_sold
    let remainingTicket = openTick - ticketSold

    //CREATE EVENT LISTENER FOR REMAINING MOVIES
    //reduces the number of ticket when buy-ticket button is clicked
    buyTicketButton.addEventListener('click', ()=> {
        availableTickets.textContent = ''
        //take the tickets sold, increase by 1
        ticketSold ++

        result = remainingTicket + ' remaining tickets'
        if (ticketSold => object.capacity) {
            availableTickets.append(result)
        }
        else {
            availableTickets.textContent = 'SOLD OUT'
        }

    })
}

