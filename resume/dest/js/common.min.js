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
      "startMonth":"",
      "endYear":"2005",
      "endMonth":"",
      "position":"Specialist.",
      "department":"Faculty&nbsp;of&nbsp;Computer&nbsp;Science&nbsp;and&nbsp;Cybernetics.",
      "specialistField":"Applied&nbsp;Mathematics.",
      "achievements":[]
    }
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
  
  const jsonSummary = [
    {
      "plainItems":[
        "Have examples in Frontend and experience in Agile.",
        "8+ years experience in VBA + Excel + SQL Server.",
        "Like to create tools which will work reliably and require minimal or no maintenance subsequently."
        ]
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
    // like in jsonLanguages
  ]; 

  const jsonLanguages = [
    {
      "itemName":"English",
      "ItemValueOf10":"7",
      "ItemScaleName":"CEFR",
      "ItemScaleValue":"B2",
    },
    {
      "itemName":"Russian",
      "ItemValueOf10":"10",
      "ItemScaleName":"",
      "ItemScaleValue":""
    },
    {
      "itemName":"Ukrainian",
      "ItemValueOf10":"10",
      "ItemScaleName":"",
      "ItemScaleValue":""
    }
  ];

  const jsonFurtherLearning = [
    // like in jsonCourses
  ];

  const jsonMore = [
    {
      "dateOfBirth":["01.12.1981"],
      "age":["35"]
    }
  ];

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
    createSublevelsMarkup(jsonHigherEducation, 'Education', 'graduation-cap') +
    createSublevelsMarkup(jsonWorkExperience, 'Work Experience', 'briefcase')
  ;

  let sidebar = document.getElementById('sidebar');
  sidebar.innerHTML = 
    createSidebarPlainMarkup(jsonSummary, 'Summary', 'star') +
    createSublevelsMarkup(jsonCourses, 'Courses', 'certificate') +
    createSidebarScaledMarkup(jsonSkills, 'Skills', 'circle') +
    createSidebarScaledMarkup(jsonLanguages, 'Languages', 'language') +
    createSidebarBulletsMarkup(jsonFurtherLearning, 'Learning from', 'bookmark') +
    createSidebarPlainMarkup(jsonMore, 'More', 'info')
  ;

  function createSublevelsMarkup(arrOfObjects, sectionName, faIconName) {
    // - ‒ // Длинное тире.
    return(
      `
        <section class="section">
          <div class="section__header">
            <i class="section__icon fa fa-${faIconName}"></i>
            <h3 class="section__name">${sectionName}</h3>
          </div>
          ${arrOfObjects.map(obj => 
          `
            <div class="article">

              <h4 class="article__header">
                <a href="${obj.citeLink}" target="_blank">${obj.cite}</a>
                <span class="article__years"> /&nbsp;${obj.startYear === undefined ? '': obj.startYear.length === 0 ? '': obj.startYear + '&nbsp;-&nbsp;'}${obj.endYear}</span>
              </h4>
              <h5 class="article__subheader">${obj.position} ${obj.department === undefined ? '': obj.department} ${obj.specialistField === undefined ? '': obj.specialistField}</h5>
              ${obj.achievements === undefined ? '': obj.achievements.length === 0 ? '':
                `<ul class="article__pointsList">
                  ${obj.achievements.map(achieveItem => `
                    <li class="article__point">
                      <b class="article__point-bullet">-</b>
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

  function createSidebarBulletsMarkup(arrOfObjects, sectionName, faIconName) {
    // Учесть варианты для Courses - с указанием специальности и для Learning from - без деталей.
    return(
      `
        <section class="section">
          <div class="section__header">
            <i class="section__icon fa fa-${faIconName}"></i>
            <h3 class="section__name">${sectionName}</h3>
          </div>
        </section>
      `
    );
  }

  function createSidebarPlainMarkup(arrOfObjects, sectionName, faIconName) {
    return(
      `
        <section class="section">
          <div class="section__header">
            <i class="section__icon fa fa-${faIconName}"></i>
            <h3 class="section__name">${sectionName}</h3>
          </div>
        ${arrOfObjects.map(obj => 
          `
            ${obj.plainItems === undefined ? '': obj.plainItems.length === 0 ? '':
              `
                ${obj.plainItems.map(plainItem => 
                  `<div class="article article_narrow article_plain">${plainItem}</div>`
                ).join('')}
              `
            }
          `).join('')
        }
        </section>
      `
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
        </section>
      `
    );
  }

})();