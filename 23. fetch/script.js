

const buttonSearch = document.querySelector('.button-search-movie');
const inputSearch = document.querySelector('.input-search-movie');
buttonSearch.addEventListener('click', function () {
    fetch('http://www.omdbapi.com/?apikey=31ffb5af&s=' + inputSearch.value)
        .then(response => response.json())
        .then(response => {
            const movies = response.Search;
            let cards = '';
            movies.forEach(m => cards += showCard(m));
            const movieContainer = document.querySelector('.movie-container');
            movieContainer.innerHTML = cards;

            // Ketika tombol diklik
            const buttonDetail = document.querySelectorAll('.modal-detail-button');
            buttonDetail.forEach(btn => {
                btn.addEventListener('click', function () {
                    const imdbid = this.dataset.imdbid;
                    fetch('http://www.omdbapi.com/?apikey=31ffb5af&i=' + imdbid)
                        .then(m => m.json())
                        .then(m => {

                            const modalDetail = document.querySelector('.modal-body');
                            modalDetail.innerHTML = showDetailMovie(m);
                        });
                });

            });

        });
});


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


