$('.button-search-movie').on('click', function(){

    let datasearch = $('.input-search-movie').val();

    $.ajax({
        url: 'http://www.omdbapi.com/?apikey=31ffb5af&s=' + datasearch,
        success: result => {
            const movies = result.Search;
            let cards = '';
            movies.forEach(m => {
                cards += showCard(m);
            });
            $('.movie-container').html(cards);
    
            // ketika tombol detail di klik
            $('.modal-detail-button').on('click', function(){
                $.ajax({
                    url: 'http://www.omdbapi.com/?apikey=31ffb5af&i=' + $(this).data('imdbid'),
                    success: m => {
                        const dataDetail = showDetailMovie(m) ;
                        $('.modal-body').html(dataDetail);
                    },
                    error: (e) => {
                        console.log(e.responseText);
                    }
                });
                
            });
        },
        error: (e) => {
            console.log(e.responseText);
        }
    });

});


function showCard(m){
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


function showDetailMovie(m){
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


