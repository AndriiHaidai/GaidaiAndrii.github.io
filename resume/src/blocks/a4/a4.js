'use strict()';

(function(){

  let jsonHeader = {
    "Section":"Header info",
    "name":"Andrii",
    "surname":"Gaidai",
    "position":"Frontend Developer",
    "city":"Kyiv"
  };

  let jsonContacts = {
    "Section":"Contacts",
    "mobile":"+380 67 130 6906",
    "email":"GaydayAV@gmail.com",
    "LinkedInLabel":"gaidaiandrii",
    "LinkedInLink":"https://www.linkedin.com/in/gaidaiandrii/",
    "facebookLabel":"Andrii.Gaiday",
    "facebookLink":"https://www.facebook.com/Andrii.Gaiday",
    "Skype":"gaidayav",
    "GitHubLabel":"gaidaiandrii",
    "GitHubLink":"https://gaidaiandrii.github.io/"
  };
  
  var header = document.getElementById('header');
  header.innerHTML = createMarkup(jsonHeader, jsonContacts);


  function createMarkup(obj, obj2) {
    return(
      `<section class="header">
        <div class="header__inner">

          <div class="header__avatar">
            <img class="header__userfoto" src="./img/face.jpg" alt="userfoto">
          </div>
          <div class="header__text">
            <h1 class="header__username">${obj.name} ${obj.surname}</h1>
            <h2 class="header__position">${obj.position}, ${obj.city}</h1>
            
            <ul class="article__contacts">
              <li>
                <i class="header__item-icon fa fa-mobile"></i>
                <p class="header__item-text">${obj2.mobile}</p>
              </li>
              <li>
                <a class="header__item-link" href="${obj2.email}">
                  <i class="header__item-icon fa fa-envelope"></i>
                  <p class="header__item-text">${obj2.email}</p>
                </a>
              </li>
            </ul>
            <ul class="article__contacts">
              <li>
                <a class="header__item-link" href="${obj2.LinkedInLink}">
                  <i class="header__item-icon fa fa-linkedin"></i>
                  <p class="header__item-text">${obj2.LinkedInLabel}</p>
                </a>
              </li>
              <li>
                <a class="header__item-link" href="${obj2.facebookLink}">
                  <i class="header__item-icon fa fa-facebook"></i>
                  <p class="header__item-text">${obj2.facebookLabel}</p>
                </a>
              </li>
            </ul>
          </div>

        </div>
      </section>
    `);
  }

})();