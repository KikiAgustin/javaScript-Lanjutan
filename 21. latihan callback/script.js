$.ajax({
    url: 'http://www.omdbapi.com/?apikey=31ffb5af&s=avengers',
    success: result => {
        const movies = result.Search;
        let cards = '';
        movies.forEach(m => {
            cards += `
                <div class="col-md-4 my-3">
                <div class="card">
                    <img src="${m.Poster}" class="card-img-top" alt="${m.Title}">
                    <div class="card-body">
                        <h5 class="card-title">${m.Title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                        <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#movieDetailModal" data-imdbid="${m.imdbID}" >Show Detail</a>
                    </div>
                </div>
                </div>
            `;
        });
        $('.movie-container').html(cards);
    },
    erroe: (e) => {
        console.log(e.responseText);
    }
});