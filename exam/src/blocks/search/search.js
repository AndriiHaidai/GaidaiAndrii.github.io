/* jshint node: true */
'use strict()';

var input = document.getElementById('search__text');
var btn = document.getElementById('search__button');
var body = document.getElementById('body');
var ideas = document.getElementById('ideas');
var msnryContainer = document.getElementById('search__result');

input.addEventListener('keydown', waitForEnterKey);
btn.addEventListener('click', showResults);
document.addEventListener('DOMContentLoaded', ready);

function ready() {
  showResults();
}

function waitForEnterKey(e){
  if (e.target.id == 'search__text' && (e.type == 'keydown' || e.type == 'keypress') && e.keyCode == 13) {
    // e.target.blur();
    showResults();
    e.preventDefault();
  }
}

function showResults(e) {

  var searchString = input.value;
  var searchText = encodeURIComponent(searchString.trim().replace(/(\s+)/g,'+'));
  var userRequest = new XMLHttpRequest();


  var totalImagesNeeded = 7;
  var API_KEY = '5116679-27723e47bc3390bc786097a34';
  var perPage = totalImagesNeeded + Math.floor( (totalImagesNeeded + 1) * Math.random() );
  var page = 1 + Math.floor( Math.floor(500/perPage) * Math.random() );
  var xhrURL = 'https://pixabay.com/api/?key=' + API_KEY +
            '&image_type=photo' +
            '&min_width=320' + '&min_height=120' +
            '&orientation=horizontal' + // Accepted values: "all", "horizontal", "vertical". Default: "all".
            // '&order=latest' + // Accepted values: "popular", "latest". Default: "popular".
            // '&safesearch=true' + // A flag indicating that only images suitable for all ages should be returned. Accepted values: "true", "false". Default: "false".
            '&per_page=' + perPage + 
            '&page=' + page +
            '&q=' + searchText;

  userRequest.onreadystatechange = function() {
    
    if ( userRequest.readyState == 4 ) {
      if ( userRequest.status == 200 ) {
        var data = JSON.parse(userRequest.responseText);
        var html, imgTitle;

        if (data.total === 0) {
          // Server reply is empty:
          html = '<p class="warning">[ No images for your request ! ]</p>';
        } else {
          html = '<li class="msnry__sizer"></li><li class="msnry__gutter-sizer"></li>';
          var widerImageIndex1, widerImageIndex2;

          widerImageIndex1 = Math.floor( totalImagesNeeded * Math.random() );
          do {
            widerImageIndex2 = Math.floor( totalImagesNeeded * Math.random() );
          } while ( 
            widerImageIndex1 === widerImageIndex2 || 
            /* It's OK to have 2 last items not fit all row by Masonry's philosophy. 
            But for further beatifiyng I forbid having such case. Next row maintains this:*/
            (widerImageIndex1 + widerImageIndex2 === ((totalImagesNeeded - 1) * 2 - 1)) 
          );

          for ( i = 0 ; i < Math.min(totalImagesNeeded, data.hits.length); i++) {
            imgTitle = data.hits[i].tags;
            /*Uncomment next line to limit text to 2 first phrases:*/
            /*imgTitle = imgTitle.substring(0, imgTitle.indexOf(",",imgTitle.indexOf(",",0)+1)); */

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
            gutter: '.msnry__gutter-sizer',
            percentPosition: true
          });

        }); // END Masonry initialize
      }     // END if ( userRequest.status == 200 )
    }       // END if ( userRequest.readyState == 4 )
  };        // END userRequest.onreadystatechange
  
  userRequest.open('POST', xhrURL, true);
  userRequest.send();

  if (e !== undefined) {
    e.target.blur();
    e.preventDefault();
    scrollPageAnimated(body, 'scrollTop', '', body.scrollTop, ideas.offsetTop, 200, true);
  }

}

function scrollPageAnimated(elem, style, unit, from, to, time, prop) {
  if (!elem) {
    return;
  }

  var start = new Date().getTime();
  var timer = setInterval(function () {
    var step = Math.min(1, (new Date().getTime() - start) / time);
    if (prop) {
      elem[style] = (from + step * (to - from))+unit;
    } else {
      elem.style[style] = (from + step * (to - from))+unit;
    }
    if (step === 1) {
      clearInterval(timer);
    }
  }, 25);
  if (prop) {
    elem[style] = from+unit;
  } else {
    elem.style[style] = from+unit;
  }
}