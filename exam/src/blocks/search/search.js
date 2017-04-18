/* jshint node: true */
'use strict()';

var input = document.getElementById('search__text');
var btn = document.getElementById('search__button');
var body = document.getElementById('body');
var ideas = document.getElementById('ideas');
var msnryContainer = document.getElementById('search__result');

input.addEventListener('keydown', waitForEnterKey);
btn.addEventListener('click', showResults);

function waitForEnterKey(e){
  if (e.target.id == 'search__text' && (e.type == 'keydown' || e.type == 'keypress') && e.keyCode == 13) {
    e.preventDefault();
    showResults();
  }
}


function showResults() {

  var searchText = input.value;
  var userRequest = new XMLHttpRequest();

  userRequest.onreadystatechange = function() {
    
    if (userRequest.readyState == 4 && userRequest.status == 200) {
      var data = JSON.parse(userRequest.responseText);

      var imgUrl;
      var imgTitle;
      var html = '';
      console.log('data: ', data);

      for ( i = 0 ; i < Math.min(7, data.hits.length); ) {
        imgUrl = data.hits[i].webformatURL;
        imgTitle = data.hits[i].tags;
        imgTitle = imgTitle.substring(0, imgTitle.indexOf(",",imgTitle.indexOf(",",0)+1)); // Now limit text to 2 first phrases.
        // webformatHeight
        // webformatWidth 
/*
        html += '<li class="ideas__item">';
        html +=   '<img class="ideas__img" src="' + imgUrl + '" alt="image ' + (++i) + ' of ' + searchText + '">';
        html +=   '<h3 class="ideas__title">' + imgTitle + '</h3>';
        html += '</li>';
*/
        htmlItemClass = '"ideas__item msnry__item"';
        htmlItemStyle = '"background: url(' + imgUrl + ') no-repeat center; background-size: cover;"';

        html += '<li class=' + htmlItemClass + ' style=' + htmlItemStyle + ' alt="image ' + (++i) + ' of ' + searchText + '">';
        html +=   '<h3 class="ideas__title">' + imgTitle + '</h3>';
        html += '</li>';
      }
    
      msnryContainer.innerHTML = html;
      
      
      imagesLoaded( '.ideas__img', function() {
      
        var msnry = new Masonry( msnryContainer, {
          // options
          itemSelector: '.msnry__item',
          columnWidth: '.msnry__item',
        //   // - If columnWidth is not set, Masonry will use the outer width of the first item.
        //   // - Как его к сетке Susy привязать?
          // gutter: '.msnry__gutter',
          gutter: 20,
          percentPosition: true
        });

        body.scrollTop = ideas.offsetTop;
      });
      msnry.layout();

      // imagesLoaded( 'ideas__item', function() {
        // msnryContainer.innerHTML = html;
        // body.scrollTop = ideas.offsetTop;
      // });

    }
  };

  var API_KEY = '5116679-27723e47bc3390bc786097a34';
  var perPage = 7 + Math.floor( 8 * Math.random() );
  var page = 1 + Math.floor( Math.floor(500/perPage) * Math.random() );
  var URL = 'https://pixabay.com/api/?key=' + API_KEY +
            '&image_type=photo' +
            '&min_width=320' + '&min_height=120' +
            '&orientation=horizontal' + // Accepted values: "all", "horizontal", "vertical". Default: "all".
            // '&order=latest' + // Accepted values: "popular", "latest".
            // '&safesearch=true' + // A flag indicating that only images suitable for all ages should be returned. Accepted values: "true", "false". Default: "false".
            '&per_page=' + perPage + 
            '&page=' + page +
            '&q=' + searchText;
  // userRequest.open('GET', 'https://api.tenor.co/v1/search?tag=' + searchText + '&key=LIVDSRZULELA');
  userRequest.open('GET', URL);
  userRequest.send();
}
