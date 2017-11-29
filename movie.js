$(document).ready(function () {
  // run ajax now
  // 2 methods = GET and POST
  var discover_movie_url = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e5dc0f217cb84bdccd69333ad48b2cf4'

  var image_url = 'https://image.tmdb.org/t/p/w500'

  // $.get(discover_movie_url)
  // .done(function (data) {
  //   var movie_json = data.results
  //
  //   for (var i = 0; i < data.results.length; i++) {
  //     // DO the loop
  //     // loop body:
  //     // // create <li>
  //     // // create <img>
  //     // // add src = to the image (src = image_url + poster_path)
  //     // // append img to new <li>
  //     // // append new <li> to .movie-list
  //     var $newLi = $('<li>')
  //     var $newImg = $('<img>')
  //     $newImg.attr('src', image_url + data.results[i].poster_path)
  //     $newLi.append($newImg)
  //     $('ul').append($newLi)
  //   }
  // })

// search for movies according to keywords typed and clicking search button
  var $form = $('form')
  var $button = $('button')

  $button.on('click', function () {

    $('#loadingWheel').css('visibility', 'visible')
    var $searchInput = $('.searchInput')
    console.log($searchInput.val())
    $('.posters').empty()

    // var $userInput = $(this).serializeArray()[0].value
    // console.log($userInput)

    var movie_search_url = 'https://api.themoviedb.org/3/search/movie?api_key=e5dc0f217cb84bdccd69333ad48b2cf4&query='

    $.get(movie_search_url + $searchInput.val())
    .done(function (data) {
      $('#loadingWheel').css('visibility', 'hidden')

      var movie_json = data.results

      for (var j = 0; j < movie_json.length; j++) {
        var $newLi = $('<li>')
        var $newImg = $('<img>')
        $newImg.attr('src', image_url + movie_json[j].poster_path)
        $newImg.attr('height', '400px')
        $newLi.append($newImg)
        $('ul').append($newLi)
      }
    })
  })
})
