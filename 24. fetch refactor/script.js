

// const buttonSearch = document.querySelector('.button-search-movie');
// const inputSearch = document.querySelector('.input-search-movie');
// buttonSearch.addEventListener('click', function () {
//     fetch('http://www.omdbapi.com/?apikey=31ffb5af&s=' + inputSearch.value)
//         .then(response => response.json())
//         .then(response => {
//             const movies = response.Search;
//             let cards = '';
//             movies.forEach(m => cards += showCard(m));
//             const movieContainer = document.querySelector('.movie-container');
//             movieContainer.innerHTML = cards;

//             // Ketika tombol diklik
//             const buttonDetail = document.querySelectorAll('.modal-detail-button');
//             buttonDetail.forEach(btn => {
//                 btn.addEventListener('click', function () {
//                     const imdbid = this.dataset.imdbid;
//                     fetch('http://www.omdbapi.com/?apikey=31ffb5af&i=' + imdbid)
//                         .then(m => m.json())
//                         .then(m => {

//                             const modalDetail = document.querySelector('.modal-body');
//                             modalDetail.innerHTML = showDetailMovie(m);
//                         });
//                 });

//             });

//         });
// });


const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', async function () {
    const inputKeyword = document.querySelector('.input-keyword');
    const movies = await getMovies(inputKeyword.value);
    updateUI(movies);
});


// Even Binding
document.addEventListener('click', async function (e) {

    if (e.target.classList.contains('modal-detail-button')) {
        const imdbid = e.target.dataset.imdbid;
        const movieDetail = await getMovieDetail(imdbid);
        updateMovieDetail(movieDetail);
    }
});

function getMovieDetail(imdbid) {
    return fetch('http://www.omdbapi.com/?apikey=31ffb5af&i=' + imdbid)
        .then(m => m.json())
        .then(m => m);
}

function updateMovieDetail(m) {
    const modalBody = document.querySelector('.modal-body');
    modalBody.innerHTML = showDetailMovie(m);
}



function getMovies(keyword) {
    return fetch('http://www.omdbapi.com/?apikey=31ffb5af&s=' + keyword)
        .then(response => response.json())
        .then(response => response.Search);
}

function updateUI(movies) {

    let card = '';
    movies.forEach(m => card += showCard(m));
    const cardMovie = document.querySelector('.movie-container');
    cardMovie.innerHTML = card;
}




function showCard(m) {
    return `<div class="col-md-4 my-3">
            <div class="card">
                <img src="${m.Poster}" class="card-img-top" alt="${m.Title}">
                <div class="card-body">
                    <h5 class="card-title">${m.Title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                    <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#movieDetailModal" data-imdbid="${m.imdbID}" >Show Detail</a>
                </div>
            </div>
            </div>`;
}


function showDetailMovie(m) {
    return `<div class="container-fluid">
            <div class="row">
                <div class="col-md-4">
                    <img src="${m.Poster}" class="img-fluid" alt="">
                </div>
                <div class="col-md-6">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <h4>${m.Title} (${m.Year})</h4>
                        </li>
                        <li class="list-group-item"><strong>Director :</strong> ${m.Director}</li>
                        <li class="list-group-item"><strong>Actors :</strong>${m.Actors}</li>
                        <li class="list-group-item"><strong>Writers :</strong> ${m.Writer}</li>
                        <li class="list-group-item"><strong>Plot :</strong> ${m.Plot}</li>
                    </ul>
                </div>
            </div>
        </div>`;
}


