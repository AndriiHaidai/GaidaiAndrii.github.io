'use strict()';

(function(){

  const jsonHeader = {
    "Section":"Header info",
    "name":"Andrii",
    "surname":"Gaidai",
    "position":"Frontend Developer",
    "city":"Kyiv"
  };

  const jsonContacts = {
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

  const jsonHigherEducation = [
    {
      "cite":"Taras&nbsp;Shevchenko National&nbsp;University of&nbsp;Kyiv",
      "citeLink":"http://www.univ.kiev.ua/",
      "startYear":"2000",
      "endYear":"2005",
      "position":"Specialist.",
      "department":"Faculty&nbsp;of&nbsp;Computer&nbsp;Science&nbsp;and&nbsp;Cybernetics.",
      "specialistField":"Applied&nbsp;Mathematics.",
      "achievements":[]
    }
  ];
  
  const jsonWorkExperience = [
    {
      "cite":"Unilever",
      "citeLink":"https://www.unilever.com/",
      "startYear":"05.2008",
      "endYear":"01.2012",
      "position":"Analyst,",
      "department":"Supply&nbsp;Chain.",
      "specialistField":"",
      "achievements":[
        'Created reliable automated tool for certain documents complete management process. Used VBA-Excel-SQL Server.',
        'Created automated Outlook mailing process based on SQL Server data analyze results. Used VBA-Outlook.',
        'SQL Server administrating: created new tables, views; edited stored procedures, triggers, set up maintenance plan.',
        'Daily tasks: SAP to SQL upload; BusinessObjects reports creation & edition including VBA for BO use, uploading to SQL'
      ]
    },
    {
      "cite":"Job-2",
      "citeLink":"Link-2",
      "startYear":"start-year-2",
      "endYear":"end-year-2",
      "position":"position-2",
      "department":"dep-2",
      "specialistField":"",
      "achievements":[
        'ach-1',
        'ach-2',
        'ach-3',
        'ach-4',
        ]
    }
  ];
  
  const jsonAbout = {
    "chapter":"About",
    "date of birth":"01.12.1981",
    "about":"Have experience in Frontend & teamwork.\n8+yrs experience in Excel + VBA + SQL Server.\nLike to create tools which will work reliably and require minimal or no maintenance subsequently."
  };

  let header = document.getElementById('header');
  header.innerHTML = createHeaderMarkup(jsonHeader, jsonContacts);

  function createHeaderMarkup(obj, obj2) {
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
                <a class="header__item-link" href="mailto:${obj2.email}">
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

  let content = document.getElementById('content');
  content.innerHTML = 
    createContentMarkup(jsonHigherEducation, 'Education', 'graduation-cap') +
    createContentMarkup(jsonWorkExperience, 'Work Experience', 'briefcase')
  ;

  let sidebar = document.getElementById('sidebar');
  sidebar.innerHTML = createSidebarMarkup(jsonHeader, jsonContacts); // Изменить параметры вызова.

  function createContentMarkup(obj, sectionName, faIconName) {
    return(
      `
        <section class="section">
          <div class="section__header">
            <i class="section__icon fa fa-${faIconName}"></i>
            <h3 class="section__name">${sectionName}</h3>
          </div>
          ${obj.map(obj => 
          `
            <div class="article">

              <h4 class="article__header">
                <a href="${obj.citeLink}" target="_blank">${obj.cite}</a>
                <span class="article__years"> /&nbsp;${obj.startYear}&nbsp;-&nbsp;${obj.endYear}</span>
              </h4>
              <h5 class="article__subheader">${obj.position} ${obj.department} ${obj.specialistField}</h5>
              ${obj.achievements.length === 0 ? '':
                `<ul class="article__pointsList">
                  ${obj.achievements.map(achieveItem => `
                    <li class="article__point">
                      <b class="article__point-bullet">‒</b>
                      <div class="article__point-text">${achieveItem}</div>
                    </li>
                  `).join('')}
                </ul>`
              }

            </div>
            `).join('')
          }

        </section>
      `
    );
  }

  function createSidebarMarkup(obj, obj2) {
    return(
      `
        <section class="section">
          <div class="section__header">
            <i class="section__icon fa fa-${obj.faIconName}"></i>
            <h3 class="section__name">About</h3>
          </div>
        </section>
        
        <section class="section">
          <div class="section__header">
            <i class="section__icon fa fa-${obj.faIconName}"></i>
            <h3 class="section__name">Skills</h3>
          </div>
        </section>

        <section class="section">
          <div class="section__header">
            <i class="section__icon fa fa-${obj.faIconName}"></i>
            <h3 class="section__name">Languages</h3>
          </div>
        </section>

        <section class="section">
          <div class="section__header">
            <i class="section__icon fa fa-${obj.faIconName}"></i>
            <h3 class="section__name">Courses</h3>
          </div>
        </section>
      `
    );
  }

})();