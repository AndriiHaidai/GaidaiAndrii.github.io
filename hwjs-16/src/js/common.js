
var btn = document.getElementById('search__button');
btn.addEventListener('click', showResults);

var input = document.getElementById('search__text');
input.onkeydown = waitForEnterKey;

function waitForEnterKey(e){
  if (e.target.id == 'search__text' && (e.type == 'keydown' || e.type == 'keypress') && e.keyCode == 13) {
    e.preventDefault();
    showResults();
  }
}


function showResults() {

  var searchText = document.getElementById('search__text').value;
  var userRequest = new XMLHttpRequest();

  userRequest.onreadystatechange = function() {
    
    if (userRequest.readyState == 4 && userRequest.status == 200) {
      var data = JSON.parse(userRequest.responseText);
      var html = '<div class="search__result-block">';
        for ( i = 0 ; i < data.results.length; i++ ) {
          html += 
            '<img ' +
              'style="width: ' + data.results[i].media[0].gif.dims[0] + '; ' + 
                     'height: ' + data.results[i].media[0].gif.dims[1] + ';" ' +
              'src="' + data.results[i].media[0].gif.url + '"' +
            '>';
        }
      html += '</div>';
    
      document.getElementById('search__result').innerHTML = html;
    }
  };

  userRequest.open('GET', 'https://api.tenor.co/v1/search?tag=' + searchText + '&key=LIVDSRZULELA');
  userRequest.send();
}
