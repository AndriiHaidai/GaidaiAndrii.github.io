window.onload = function(){
  var inp_email = document.querySelector('input[name=email]');
  var inp_phone = document.querySelector('input[name=phone]');
  var inp_name = document.querySelector('input[name=name]');

  document.querySelector('#send').onclick = function(){
    var params = 'email=' + inp_email.value + '&' + 
                 'phone=' + inp_phone.value + '&' + 
                 'name=' + inp_name.value;
    ajaxPost('a=b');
  };
};

// window.onload = function () {
//   document.querySelector('#show_ip').onclick = function() {
//     ajaxGet('ip.php', function(data){
//       console.log(data);
//     });

//     ajaxGet('ip.php?id=12&a=b&hz=nz', function (data) {
//       document.querySelector('#myip').innerHTML = data;
//     });
//   };
// };

// function ajaxGet(url, callback){
//   var f = callback || function(data){};

//   var request = new XMLHttpRequest();

  // request.readyState // 0 - new
  // request.readyState // 1 - open
  // request.readyState // 2 - send
  // request.readyState // 3 - частично пришел ответ
  // request.readyState // 4 - ответ пришел полнотсью


//   request.onreadystatechange = function() {
//     if (request.readyState == 4 && request.status == 200) {
//       f(request.responseText);
//     }
//   };

//   request.open('GET', url);
//   request.send();
// }


function ajaxPost(params){
  var request = new XMLHttpRequest();

  request.onreadystatechange = function() {
    if (request.readyState == 4 && request.status == 200) {
      if (request.responseText == '1') {
        document.querySelector('#result').innerHTML = 'Ура! Все хорошо!';
        document.querySelector('form').style.display = 'none';
      } else{
        document.querySelector('#result').innerHTML = request.responseText;
      }
    }
  };

  request.open('POST', 'app.php');
  request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  // request.send(params);
}

function getXmlHttp(){
  var xmlhttp;
  try {
    xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
  } catch (e) {
    try {
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    } catch (E) {
      xmlhttp = false;
    }
  }
  if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
    xmlhttp = new XMLHttpRequest();
  }
  return xmlhttp;
}


