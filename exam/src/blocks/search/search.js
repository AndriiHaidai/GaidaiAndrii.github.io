var input = document.getElementById('search__text');
var btn = document.getElementById('search__button');
var body = document.getElementById('body');
var ideas = document.getElementById('ideas');
var tile = document.getElementById('search__result');

// input.onkeydown = waitForEnterKey;
input.addEventListener('keydown', waitForEnterKey);
btn.addEventListener('click', showResults);

function waitForEnterKey(e){
  if (e.target.id == 'search__text' && (e.type == 'keydown' || e.type == 'keypress') && e.keyCode == 13) {
    e.preventDefault();
    showResults();
  }
}



function showResults() {

  // var searchText = document.getElementById('search__text').value;
  var searchText = input.value;
  var userRequest = new XMLHttpRequest();

  userRequest.onreadystatechange = function() {
    
    if (userRequest.readyState == 4 && userRequest.status == 200) {
      var data = JSON.parse(userRequest.responseText);
      var imgUrl;
      var html = '';
      console.log('data: ', data);
      // var html = '<div class="search__result-container">';
        for ( i = 0 ; i < Math.min(data.hits.length, 7);) {
          imgUrl = data.hits[i].webformatURL;
          imgTitle = data.hits[i].tags;
          // webformatHeight
          // webformatWidth

          html += '<li class="ideas__item">';
          html +=   '<img class="ideas__img" src="' + imgUrl + '" alt="image ' + (++i) + ' of ' + searchText + '">';
          html +=   '<h3 class="ideas__title">' + imgTitle + '</h3>';
          html += '</li>';
        }
      // html += '</div>';
    
      // tile.innerHTML = html;
      
      // imagesLoaded( 'ideas__item', function() {
        tile.innerHTML = html;
        // body.scrollTop = ideas.offsetTop;
      // });

    }
  };

  var API_KEY = '5116679-27723e47bc3390bc786097a34';
  var URL = 'https://pixabay.com/api/?key=' + API_KEY + '&q=' + searchText + '&image_type=photo';
  // userRequest.open('GET', 'https://api.tenor.co/v1/search?tag=' + searchText + '&key=LIVDSRZULELA');
  userRequest.open('GET', URL);
  userRequest.send();

  // imagesLoaded( '.ideas__img', function() {
  
    // var msnry = new Masonry( tile, {
    //   // options
    //   itemSelector: '.ideas__img'
    //   ,columnWidth: 300 
    //   // - If columnWidth is not set, Masonry will use the outer width of the first item.
    //   // - Как его к сетке Susy привязать?
    //   ,gutter: 10
    // });

  body.scrollTop = ideas.offsetTop;

  // });

}
