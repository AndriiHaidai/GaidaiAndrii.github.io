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
    e.target.blur();
    showResults();
  }
}


function showResults(e) {

  if (e !== undefined) {
    e.target.blur();
  }

  var searchText = input.value;
  // Midify here to make available several words search
  var userRequest = new XMLHttpRequest();


  var totalImagesNeeded = 7;
  var API_KEY = '5116679-27723e47bc3390bc786097a34';
  var perPage = totalImagesNeeded + Math.floor( (totalImagesNeeded + 1) * Math.random() );
  var page = 1 + Math.floor( Math.floor(500/perPage) * Math.random() );
  var URL = 'https://pixabay.com/api/?key=' + API_KEY +
            '&image_type=photo' +
            '&min_width=320' + '&min_height=120' +
            '&orientation=horizontal' + // Accepted values: "all", "horizontal", "vertical". Default: "all".
            // '&order=latest' + // Accepted values: "popular", "latest". Default: "popular".
            // '&safesearch=true' + // A flag indicating that only images suitable for all ages should be returned. Accepted values: "true", "false". Default: "false".
            '&per_page=' + perPage + 
            '&page=' + page +
            '&q=' + searchText;

  userRequest.onreadystatechange = function() {
    
    if (userRequest.readyState == 4 && userRequest.status == 200) {
      var data = JSON.parse(userRequest.responseText);
      var html, imgTitle;

      if (data.total === 0) {
        html = '<p class="warning">[ No images for your request ! ]</p>';
      } else {
        html = '<li class="msnry__sizer"></li><li class="msnry__gutter-sizer"></li>';
        var widerImageIndex1, widerImageIndex2;
        console.log('data: ', data);

        widerImageIndex1 = Math.floor( totalImagesNeeded * Math.random() );
        do {
          widerImageIndex2 = Math.floor( totalImagesNeeded * Math.random() );
        } while ( 
          widerImageIndex1 === widerImageIndex2 || 
          /* It's OK to have 2 last items not fit all row by Masonry's philosophy. 
          But for further beatifiyng I forbid having such case.
          Next row maintains this:*/
          (widerImageIndex1 + widerImageIndex2 === ((totalImagesNeeded - 1) * 2 - 1)) 
        );

        for ( i = 0 ; i < Math.min(totalImagesNeeded, data.hits.length); i++) {
          imgTitle = data.hits[i].tags;
          imgTitle = imgTitle.substring(0, imgTitle.indexOf(",",imgTitle.indexOf(",",0)+1)); // Now limit text to 2 first phrases.
          // webformatHeight
          // webformatWidth 

          htmlItemClass = '"ideas__item msnry__item"';
          if ( i === widerImageIndex1 || i === widerImageIndex2 ) {
            htmlItemClass = '"ideas__item msnry__item msnry__item-width2"';
          }

          html += '<li class=' + htmlItemClass + ' style="background: url(' + data.hits[i].webformatURL + ') no-repeat center; background-size: cover;" alt="image">';
          html +=   '<h3 class="ideas__title">' + imgTitle + '</h3>';
          html += '</li>';
        }
      }
    
      // Masonry initialize:
      msnryContainer.innerHTML = html;
      imagesLoaded( '.ideas__img', function() {
        var msnry = new Masonry( msnryContainer, {
          itemSelector: '.msnry__item',
          columnWidth: '.msnry__sizer',
          //   // - If columnWidth is not set, Masonry will use the outer width of the first item.
          gutter: '.msnry__gutter-sizer',
          // gutter: 18,
          percentPosition: true
        });

        body.scrollTop = ideas.offsetTop;
      });
    }
  };
  
  userRequest.open('GET', URL);
  userRequest.send();
}
