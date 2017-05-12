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

  const jsonSummary = [
    {
      "plainItems":[
        "Have examples in Frontend and experience in Scrum, 8+ years of VBA + Excel + SQL Server programming.",
        "Like to create tools which will work reliably and require minimal or no maintenance subsequently. Ready to path a test task."
      ]
    },
    {
      "label":"Frontend portfolio",
      "link":"https://gaidaiandrii.github.io/",
      "icon":"link"
    },
    {
      "label":"This Resume online",
      "link":"https://gaidaiandrii.github.io/resume/dest/",
      "icon":"link"
    },
  ];
  
  const jsonWorkExperience = [
    {
      "cite":"Mondelez Ukraine",
      "citeLink":"http://ua.mondelezinternational.com/",
      "startYear":"2015",
      "startMonth":"Oct",
      "endYear":"2016",
      "endMonth":"May",
      "position":"Sales IS Support Specialist.",
      "department":"Sales.",
      "specialistField":"",
      "achievements":[
        'SQL Server + Analysis Services Cubes + VBA + Excel + PowerPivot + pivottable : Developed \"100-Denka\" - an aggregat report from different data storages.',
        'Smaller user automation tools developed and implemented.'
      ]
    },
    {
      "cite":"Unilever",
      "citeLink":"https://www.unilever.com/",
      "startYear":"2012",
      "startMonth":"Jan",
      "endYear":"2015",
      "endMonth":"Oct",
      "position":"jr.Demand Planning Manager.",
      "department":"Supply&nbsp;Chain.",
      "specialistField":"",
      "achievements":[
        'Added more automation to the forecasting model that includes baselines + demand drivers.',
        'Cross-functional Communication: communicated to Departments of KA, Mkt, TM, Sales during monthly demand data preparing.',
        'Prepared monthly demand reports with explanations.'
      ]
    },
    {
      "cite":"Unilever",
      "citeLink":"https://www.unilever.com/",
      "startYear":"2008",
      "startMonth":"May",
      "endYear":"2012",
      "endMonth":"Jan",
      "position":"Analyst,",
      "department":"Supply&nbsp;Chain.",
      "specialistField":"",
      "achievements":[
        'VBA + Excel + SQL Server: Developed and Created reliable automated tool \"Novator\" for certain documents complete management process.',
        'VBA + Outlook: Created smart automated Outlook mailing process based on SQL Server data analyze results.',
        'SQL Server administrating: created new tables, views; edited stored procedures, triggers, set up maintenance plan.',
        'VBA + SQL Server: created / modified number of small end-user tools.',
        'Set up Multy-Technolodgy environment Coordination: SAP, SQL Server, Access, Excel, VBA, Desktop Intelligence (BO).'
        // 'Daily tasks: SAP to SQL upload; BusinessObjects reports creation & edition including VBA for BO use, uploading to SQL'
      ]
    },
    {
      "cite":"Oschadbank",
      "citeLink":"https://www.oschadbank.ua/ua/",
      "startYear":"2005",
      "startMonth":"Dec",
      "endYear":"2007",
      "endMonth":"Oct",
      "position":"Chief Engineer.",
      "department":"Department of Information Management Systems Development.",
      "specialistField":"",
      "achievements":[
        'SQL Server (tbl, idx, vw, sp): developed part of a bank Rates database structure.',
        'VBA: developed imports from SQL Server to Excel.'
        ]
    }
  ];
  
  const jsonHigherEducation = [
    {
      "cite":"Taras&nbsp;Shevchenko National University of&nbsp;Kyiv",
      "citeLink":"http://www.univ.kiev.ua/",
      "startYear":"2000",
      "startMonth":"",
      "endYear":"2005",
      "endMonth":"",
      "position":"Specialist.",
      "department":"Faculty of Computer Science and Cybernetics.",
      "specialistField":"Dept.&nbsp;of&nbsp;Applied Mathematics.",
      "achievements":[]
    }
  ];
  
  const jsonCourses = [
    {
      "cite":"GoIT",
      "citeLink":"http://fe.goit.ua/",
      "position":"Frontend Developer.",
      "startYear":"2016",
      "startMonth":"Oct",
      "endYear":"2017",
      "endMonth":"Mar",
      "achievements":[]
    },
    {
      "cite":"Prometheus",
      "citeLink":"https://courses.prometheus.org.ua:18090/downloads/232760875ce241f6a6a9e39db4b33ed4/Certificate.pdf",
      "position":"Основи Web UI розробки",
      "startYear":"", // 2016
      "startMonth":"", // Apr
      "endYear":"2016",
      "endMonth":"May",
      "achievements":[]
    }
  ];
  
  const jsonSkills = [
    {
      "itemName":"HTML / CSS",
      "itemValueOf10":"7"
    },
    {
      "itemName":"JavaScript",
      "itemValueOf10":"6"
    },
    {
      "itemName":"jQuery",
      "itemValueOf10":"6"
    },
    {
      "itemName":"Gulp",
      "itemValueOf10":"4"
    },
    {
      "itemName":"scss / Sass",
      "itemValueOf10":"6"
    },
    {
      "itemName":"Git / GitHub",
      "itemValueOf10":"4"
    },
    {
      "itemName":"Bootstrap",
      "itemValueOf10":"6"
    },
    {
      "itemName":"grid Susy",
      "itemValueOf10":"6"
    },
    {
      "itemName":"BEM",
      "itemValueOf10":"5"
    },
    {
      "itemName":"Responsive",
      "itemValueOf10":"6"
    },
    {
      "itemName":"Mobile First",
      "itemValueOf10":"6"
    },
    {
      "itemName":"Pixel Perfect",
      "itemValueOf10":"7"
    },
    {
      "itemName":"Command-line interface",
      "itemValueOf10":"6"
    },
    {
      "itemName":"Photoshop for Frontend",
      "itemValueOf10":"7"
    },
    {
      "itemName":"SQL Server Database",
      "itemValueOf10":"7"
    },
  ]; 

  const jsonLanguages = [
    {
      "itemName":"English (CEFR:B2)",
      "itemValueOf10":"7"
    },
    {
      "itemName":"Русский",
      "itemValueOf10":"10"
    },
    {
      "itemName":"Українська",
      "itemValueOf10":"10"
    }
  ];

  const jsonLearningFrom = [
    {
      "cite":"freeCodeCamp",
      "citeLink":"https://www.freecodecamp.com/gaidaiandrii",
      "faIconName":"free-code-camp"
    },
    {
      "cite":"freeCodeCamp",
      "citeLink":"https://www.youtube.com/channel/UC8butISFwT-Wl7EV0hUK0BQ",
      "faIconName":"youtube-play"
    },
    {
      "cite":"JavaScript.ru",
      "citeLink":"http://learn.javascript.ru/",
      "faIconName":""
    },
    {
      "cite":"WebDesign Master",
      "citeLink":"https://www.youtube.com/channel/UC7enHM_oJRYJOnyJrcRzwbg",
      "faIconName":"youtube-play"
    },
    {
      "cite":"DOU",
      "citeLink":"https://dou.ua/",
      "faIconName":""
    },
    {
      "cite":"ITVDN",
      "citeLink":"https://www.youtube.com/channel/UCzxRv9BtqrM946JmaMLtv_w",
      "faIconName":"youtube-play"
    },
    {
      "cite":"Front-end Magazine",
      "citeLink":"https://www.facebook.com/groups/frontend.magazine/",
      "faIconName":"facebook"
    },
    {
      "cite":"JavaScript. Шаблоны - Стоян Стефанов.",
      "citeLink":"http://www.ozon.ru/context/detail/id/6287517/",
      "faIconName":"no-icon"
    },
    {
      "cite":"Разработка одностраничных веб-приложений - Майкл С. Миковски, Джош К. Пауэлл.",
      "citeLink":"https://www.ozon.ru/context/detail/id/25457206/",
      "faIconName":"no-icon"
    },
  ];

  // const jsonMore = [
  //   {
  //     "dateOfBirth":["01.12.1981"],
  //     "age":["35"]
  //   }
  // ];

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
                <i class="article__item-icon fa fa-mobile"></i>
                <p class="article__item-text">${obj2.mobile}</p>
              </li>
              <li>
                <a class="article__item-link" href="mailto:${obj2.email}">
                  <i class="article__item-icon fa fa-envelope"></i>
                  <p class="article__item-text">${obj2.email}</p>
                </a>
              </li>
            </ul>
            <ul class="article__contacts">
              <li>
                <a class="article__item-link" href="${obj2.LinkedInLink}">
                  <i class="article__item-icon fa fa-linkedin"></i>
                  <p class="article__item-text">${obj2.LinkedInLabel}</p>
                </a>
              </li>
              <li>
                <a class="article__item-link" href="${obj2.facebookLink}">
                  <i class="article__item-icon fa fa-facebook"></i>
                  <p class="article__item-text">${obj2.facebookLabel}</p>
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
    createSidebarPlainMarkup(jsonSummary, 'Summary', 'star') +
    createSublevelsMarkup(jsonWorkExperience, 'Work Experience', 'briefcase')
  ;

  let sidebar = document.getElementById('sidebar');
  sidebar.innerHTML = 
    createSublevelsMarkup(jsonHigherEducation, 'Education', 'graduation-cap') +
    createSublevelsMarkup(jsonCourses, 'Courses', 'certificate') +
    createSidebarScaledMarkup(jsonSkills, 'Skills', 'circle') +
    createSidebarScaledMarkup(jsonLanguages, 'Languages', 'comments') +
    createSidebarBulletsMarkup(jsonLearningFrom, 'Learning from', 'book')// +
    // createSidebarPlainMarkup(jsonMore, 'More', 'info')
  ;

  function createSublevelsMarkup(arrOfObjects, sectionName, faIconName) {
    // - ‒ // Длинное тире.
    return(
      `<section class="section">` +

        `<div class="section__header">` +
          `<i class="section__icon fa fa-${faIconName}"></i>` +
          `<h3 class="section__name">${sectionName}</h3>` +
        `</div>` +

        `${arrOfObjects.map(obj => 
          `<div class="article${arrOfObjects.length > 1 ? ' article_bullets': ' article_small-indent'}">` +

            `<h4 class="article__header">` +
              `<a href="${obj.citeLink}" target="_blank">${obj.cite}` +
                `<span class="article__years"> /&nbsp;${obj.startYear === undefined ? '': obj.startYear.length === 0 ? '': obj.startYear + '&nbsp;-&nbsp;'}${obj.endYear}</span>` +
              `</a>` +
            `</h4>` +
            `<h5 class="article__subheader">${obj.position} ${obj.department === undefined ? '': obj.department} ${obj.specialistField === undefined ? '': obj.specialistField}</h5>` +
            `${obj.achievements === undefined ? '': obj.achievements.length === 0 ? '':
              `<ul class="article__pointsList">` +
                `${obj.achievements.map(achieveItem => 
                  `<li class="article__point">` +
                    `<b class="article__point-bullet">-</b>` +
                    `<div class="article__point-text">${achieveItem}</div>` +
                  `</li>`
                ).join('')}` +
              `</ul>`
            }` +

          `</div>`
        ).join('')}` +

      `</section>`
      
    );
  }

  function createSidebarBulletsMarkup(arrOfObjects, sectionName, faIconName) {
    // Учесть вариант для Learning from - без деталей.
    return(
      `<section class="section">` +
        `<div class="section__header">` +
          `<i class="section__icon fa fa-${faIconName}"></i>` +
          `<h3 class="section__name">${sectionName}</h3>` +
        `</div>` +
        `<div class="article article_plain">` +
          `${arrOfObjects.map(obj => 
            `<span class="article__item_inline">` +
              `<a class="article__item-link" href="${obj.citeLink}">` +
                
                `${obj.faIconName === 'no-icon' ? '' :
                  `<i class="article__item-icon fa fa-${obj.faIconName === '' ? 'link' : obj.faIconName}"></i>`
                }` +

                `<span class="article__item-text">${obj.cite}</span>` +
              `</a>` +
            `</span>`
          ).join('')}` +
        `</div>` +
      `</section>`
    );
  }

  function createSidebarPlainMarkup(arrOfObjects, sectionName, faIconName) {
    return(
      `<section class="section">` +
        `<div class="section__header">` +
          `<i class="section__icon fa fa-${faIconName}"></i>` +
          `<h3 class="section__name">${sectionName}</h3>` +
        `</div>` +

        // JSON structure includes 'plainItems' field:
        `${arrOfObjects.map(obj => 
          `${obj.plainItems === undefined ? '': obj.plainItems.length === 0 ? '':
            `${obj.plainItems.map(plainItem =>
              `<div class="article article_plain">${plainItem}</div>`
            ).join('')}`
          }`
        ).join('')}` +
        
        // JSON structure includes 'label' field:
        `<div class="article article_space-around">` +
          `${arrOfObjects.map(obj => 
            `${obj.label === undefined ? '': obj.label.length === 0 ? '':
              
              `<a class="article__item-link" href="${obj.link}">` +
                `<i class="article__item-icon fa fa-${obj.icon === '' ? 'link' : obj.icon}"></i>` +
                `<span class="article__item-text">${obj.label}: ${obj.link}</span>` +
              `</a>`

            }`
          ).join('')}` +
        `</div>` +

      `</section>`
    );
  }

  function createSidebarScaledMarkup(arrOfObjects, sectionName, faIconName) {
    return(
      `
        <section class="section">
          <div class="section__header">
            <i class="section__icon fa fa-${faIconName}"></i>
            <h3 class="section__name">${sectionName}</h3>
          </div>
        ${arrOfObjects.map(obj => 
          `
          <div class="article article_scaled">
            ${obj.itemName === undefined ? '': obj.itemName.length === 0 ? '':
              `<div class="item_scaled">` +
                `<span class="item_scaled__text">${obj.itemName}</span>` +
                `<span class="item_scaled__scale">` +
                  `${'<i class="full"></i>'.repeat(obj.itemValueOf10)}` + 
                  `${'<i class="empty"></i>'.repeat(10 - obj.itemValueOf10)}` +
                `</span>
              </div>`
            }
          </div>
          `).join('')
        }
        </section>
      `
    );
  }

})();