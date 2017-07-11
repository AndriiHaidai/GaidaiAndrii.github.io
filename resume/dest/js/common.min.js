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
      "itemName":"JavaScript, jQuery",
      "itemValueOf10":"6"
    },
    {
      "itemName":"Emmet, Valid markup",
      "itemValueOf10":"8"
    },
    {
      "itemName":"Gulp",
      "itemValueOf10":"5"
    },
    {
      "itemName":"scss / Sass",
      "itemValueOf10":"6"
    },
    {
      "itemName":"PHP + MySQL",
      "itemValueOf10":"4"
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
      "itemName":"Responsive, Mobile First",
      "itemValueOf10":"6"
    },
    {
      "itemName":"BEM",
      "itemValueOf10":"5"
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
      "itemName":"Українська, Русский",
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
      "cite":"w3cschools",
      "citeLink":"https://www.w3schools.com/",
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
      `<section>
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
                <a class="article__item-link" href="mailto:${obj2.email}" target="_blank">
                  <i class="article__item-icon fa fa-envelope"></i>
                  <p class="article__item-text">${obj2.email}</p>
                </a>
              </li>
            </ul>
            <ul class="article__contacts">
              <li>
                <a class="article__item-link" href="${obj2.LinkedInLink}" target="_blank">
                  <i class="article__item-icon fa fa-linkedin"></i>
                  <p class="article__item-text">${obj2.LinkedInLabel}</p>
                </a>
              </li>
              <li>
                <a class="article__item-link" href="${obj2.facebookLink}" target="_blank">
                  <i class="article__item-icon fa fa-facebook"></i>
                  <p class="article__item-text">${obj2.facebookLabel}</p>
                </a>
              </li>
            </ul>
          </div>

          <!-- QR Code: -->
          <svg width="102.5" height="102.5">
            <rect style="fill:#fff;fill-opacity:1" x="0" y="0" width="102.5" height="102.5" />
            <g id="elements" transform="scale(0.41,0.41)">
              <path style="fill:#000" d="M 0,0 l 10,0 0,10 -10,0 z M 10,0 l 10,0 0,10 -10,0 z M 20,0 l 10,0 0,10 -10,0 z M 30,0 l 10,0 0,10 -10,0 z M 40,0 l 10,0 0,10 -10,0 z M 50,0 l 10,0 0,10 -10,0 z M 60,0 l 10,0 0,10 -10,0 z M 100,0 l 10,0 0,10 -10,0 z M 120,0 l 10,0 0,10 -10,0 z M 150,0 l 10,0 0,10 -10,0 z M 160,0 l 10,0 0,10 -10,0 z M 180,0 l 10,0 0,10 -10,0 z M 190,0 l 10,0 0,10 -10,0 z M 200,0 l 10,0 0,10 -10,0 z M 210,0 l 10,0 0,10 -10,0 z M 220,0 l 10,0 0,10 -10,0 z M 230,0 l 10,0 0,10 -10,0 z M 240,0 l 10,0 0,10 -10,0 z M 0,10 l 10,0 0,10 -10,0 z M 60,10 l 10,0 0,10 -10,0 z M 80,10 l 10,0 0,10 -10,0 z M 100,10 l 10,0 0,10 -10,0 z M 140,10 l 10,0 0,10 -10,0 z M 150,10 l 10,0 0,10 -10,0 z M 180,10 l 10,0 0,10 -10,0 z M 240,10 l 10,0 0,10 -10,0 z M 0,20 l 10,0 0,10 -10,0 z M 20,20 l 10,0 0,10 -10,0 z M 30,20 l 10,0 0,10 -10,0 z M 40,20 l 10,0 0,10 -10,0 z M 60,20 l 10,0 0,10 -10,0 z M 120,20 l 10,0 0,10 -10,0 z M 180,20 l 10,0 0,10 -10,0 z M 200,20 l 10,0 0,10 -10,0 z M 210,20 l 10,0 0,10 -10,0 z M 220,20 l 10,0 0,10 -10,0 z M 240,20 l 10,0 0,10 -10,0 z M 0,30 l 10,0 0,10 -10,0 z M 20,30 l 10,0 0,10 -10,0 z M 30,30 l 10,0 0,10 -10,0 z M 40,30 l 10,0 0,10 -10,0 z M 60,30 l 10,0 0,10 -10,0 z M 80,30 l 10,0 0,10 -10,0 z M 90,30 l 10,0 0,10 -10,0 z M 100,30 l 10,0 0,10 -10,0 z M 120,30 l 10,0 0,10 -10,0 z M 140,30 l 10,0 0,10 -10,0 z M 150,30 l 10,0 0,10 -10,0 z M 180,30 l 10,0 0,10 -10,0 z M 200,30 l 10,0 0,10 -10,0 z M 210,30 l 10,0 0,10 -10,0 z M 220,30 l 10,0 0,10 -10,0 z M 240,30 l 10,0 0,10 -10,0 z M 0,40 l 10,0 0,10 -10,0 z M 20,40 l 10,0 0,10 -10,0 z M 30,40 l 10,0 0,10 -10,0 z M 40,40 l 10,0 0,10 -10,0 z M 60,40 l 10,0 0,10 -10,0 z M 90,40 l 10,0 0,10 -10,0 z M 150,40 l 10,0 0,10 -10,0 z M 160,40 l 10,0 0,10 -10,0 z M 180,40 l 10,0 0,10 -10,0 z M 200,40 l 10,0 0,10 -10,0 z M 210,40 l 10,0 0,10 -10,0 z M 220,40 l 10,0 0,10 -10,0 z M 240,40 l 10,0 0,10 -10,0 z M 0,50 l 10,0 0,10 -10,0 z M 60,50 l 10,0 0,10 -10,0 z M 80,50 l 10,0 0,10 -10,0 z M 90,50 l 10,0 0,10 -10,0 z M 110,50 l 10,0 0,10 -10,0 z M 120,50 l 10,0 0,10 -10,0 z M 130,50 l 10,0 0,10 -10,0 z M 140,50 l 10,0 0,10 -10,0 z M 150,50 l 10,0 0,10 -10,0 z M 180,50 l 10,0 0,10 -10,0 z M 240,50 l 10,0 0,10 -10,0 z M 0,60 l 10,0 0,10 -10,0 z M 10,60 l 10,0 0,10 -10,0 z M 20,60 l 10,0 0,10 -10,0 z M 30,60 l 10,0 0,10 -10,0 z M 40,60 l 10,0 0,10 -10,0 z M 50,60 l 10,0 0,10 -10,0 z M 60,60 l 10,0 0,10 -10,0 z M 80,60 l 10,0 0,10 -10,0 z M 100,60 l 10,0 0,10 -10,0 z M 120,60 l 10,0 0,10 -10,0 z M 140,60 l 10,0 0,10 -10,0 z M 160,60 l 10,0 0,10 -10,0 z M 180,60 l 10,0 0,10 -10,0 z M 190,60 l 10,0 0,10 -10,0 z M 200,60 l 10,0 0,10 -10,0 z M 210,60 l 10,0 0,10 -10,0 z M 220,60 l 10,0 0,10 -10,0 z M 230,60 l 10,0 0,10 -10,0 z M 240,60 l 10,0 0,10 -10,0 z M 90,70 l 10,0 0,10 -10,0 z M 100,70 l 10,0 0,10 -10,0 z M 110,70 l 10,0 0,10 -10,0 z M 140,70 l 10,0 0,10 -10,0 z M 150,70 l 10,0 0,10 -10,0 z M 160,70 l 10,0 0,10 -10,0 z M 0,80 l 10,0 0,10 -10,0 z M 10,80 l 10,0 0,10 -10,0 z M 20,80 l 10,0 0,10 -10,0 z M 30,80 l 10,0 0,10 -10,0 z M 40,80 l 10,0 0,10 -10,0 z M 60,80 l 10,0 0,10 -10,0 z M 70,80 l 10,0 0,10 -10,0 z M 80,80 l 10,0 0,10 -10,0 z M 90,80 l 10,0 0,10 -10,0 z M 110,80 l 10,0 0,10 -10,0 z M 140,80 l 10,0 0,10 -10,0 z M 170,80 l 10,0 0,10 -10,0 z M 190,80 l 10,0 0,10 -10,0 z M 210,80 l 10,0 0,10 -10,0 z M 230,80 l 10,0 0,10 -10,0 z M 0,90 l 10,0 0,10 -10,0 z M 10,90 l 10,0 0,10 -10,0 z M 20,90 l 10,0 0,10 -10,0 z M 30,90 l 10,0 0,10 -10,0 z M 50,90 l 10,0 0,10 -10,0 z M 70,90 l 10,0 0,10 -10,0 z M 100,90 l 10,0 0,10 -10,0 z M 120,90 l 10,0 0,10 -10,0 z M 150,90 l 10,0 0,10 -10,0 z M 160,90 l 10,0 0,10 -10,0 z M 190,90 l 10,0 0,10 -10,0 z M 230,90 l 10,0 0,10 -10,0 z M 40,100 l 10,0 0,10 -10,0 z M 60,100 l 10,0 0,10 -10,0 z M 80,100 l 10,0 0,10 -10,0 z M 100,100 l 10,0 0,10 -10,0 z M 150,100 l 10,0 0,10 -10,0 z M 160,100 l 10,0 0,10 -10,0 z M 170,100 l 10,0 0,10 -10,0 z M 190,100 l 10,0 0,10 -10,0 z M 200,100 l 10,0 0,10 -10,0 z M 210,100 l 10,0 0,10 -10,0 z M 230,100 l 10,0 0,10 -10,0 z M 240,100 l 10,0 0,10 -10,0 z M 0,110 l 10,0 0,10 -10,0 z M 10,110 l 10,0 0,10 -10,0 z M 20,110 l 10,0 0,10 -10,0 z M 30,110 l 10,0 0,10 -10,0 z M 120,110 l 10,0 0,10 -10,0 z M 140,110 l 10,0 0,10 -10,0 z M 160,110 l 10,0 0,10 -10,0 z M 170,110 l 10,0 0,10 -10,0 z M 190,110 l 10,0 0,10 -10,0 z M 240,110 l 10,0 0,10 -10,0 z M 20,120 l 10,0 0,10 -10,0 z M 30,120 l 10,0 0,10 -10,0 z M 40,120 l 10,0 0,10 -10,0 z M 50,120 l 10,0 0,10 -10,0 z M 60,120 l 10,0 0,10 -10,0 z M 80,120 l 10,0 0,10 -10,0 z M 90,120 l 10,0 0,10 -10,0 z M 100,120 l 10,0 0,10 -10,0 z M 120,120 l 10,0 0,10 -10,0 z M 140,120 l 10,0 0,10 -10,0 z M 170,120 l 10,0 0,10 -10,0 z M 180,120 l 10,0 0,10 -10,0 z M 200,120 l 10,0 0,10 -10,0 z M 220,120 l 10,0 0,10 -10,0 z M 230,120 l 10,0 0,10 -10,0 z M 240,120 l 10,0 0,10 -10,0 z M 0,130 l 10,0 0,10 -10,0 z M 10,130 l 10,0 0,10 -10,0 z M 30,130 l 10,0 0,10 -10,0 z M 40,130 l 10,0 0,10 -10,0 z M 80,130 l 10,0 0,10 -10,0 z M 130,130 l 10,0 0,10 -10,0 z M 190,130 l 10,0 0,10 -10,0 z M 210,130 l 10,0 0,10 -10,0 z M 230,130 l 10,0 0,10 -10,0 z M 0,140 l 10,0 0,10 -10,0 z M 30,140 l 10,0 0,10 -10,0 z M 60,140 l 10,0 0,10 -10,0 z M 80,140 l 10,0 0,10 -10,0 z M 90,140 l 10,0 0,10 -10,0 z M 110,140 l 10,0 0,10 -10,0 z M 120,140 l 10,0 0,10 -10,0 z M 130,140 l 10,0 0,10 -10,0 z M 150,140 l 10,0 0,10 -10,0 z M 170,140 l 10,0 0,10 -10,0 z M 190,140 l 10,0 0,10 -10,0 z M 200,140 l 10,0 0,10 -10,0 z M 210,140 l 10,0 0,10 -10,0 z M 230,140 l 10,0 0,10 -10,0 z M 240,140 l 10,0 0,10 -10,0 z M 0,150 l 10,0 0,10 -10,0 z M 50,150 l 10,0 0,10 -10,0 z M 110,150 l 10,0 0,10 -10,0 z M 150,150 l 10,0 0,10 -10,0 z M 160,150 l 10,0 0,10 -10,0 z M 170,150 l 10,0 0,10 -10,0 z M 190,150 l 10,0 0,10 -10,0 z M 200,150 l 10,0 0,10 -10,0 z M 240,150 l 10,0 0,10 -10,0 z M 0,160 l 10,0 0,10 -10,0 z M 30,160 l 10,0 0,10 -10,0 z M 40,160 l 10,0 0,10 -10,0 z M 60,160 l 10,0 0,10 -10,0 z M 70,160 l 10,0 0,10 -10,0 z M 110,160 l 10,0 0,10 -10,0 z M 160,160 l 10,0 0,10 -10,0 z M 170,160 l 10,0 0,10 -10,0 z M 180,160 l 10,0 0,10 -10,0 z M 190,160 l 10,0 0,10 -10,0 z M 200,160 l 10,0 0,10 -10,0 z M 220,160 l 10,0 0,10 -10,0 z M 80,170 l 10,0 0,10 -10,0 z M 120,170 l 10,0 0,10 -10,0 z M 130,170 l 10,0 0,10 -10,0 z M 150,170 l 10,0 0,10 -10,0 z M 160,170 l 10,0 0,10 -10,0 z M 200,170 l 10,0 0,10 -10,0 z M 210,170 l 10,0 0,10 -10,0 z M 0,180 l 10,0 0,10 -10,0 z M 10,180 l 10,0 0,10 -10,0 z M 20,180 l 10,0 0,10 -10,0 z M 30,180 l 10,0 0,10 -10,0 z M 40,180 l 10,0 0,10 -10,0 z M 50,180 l 10,0 0,10 -10,0 z M 60,180 l 10,0 0,10 -10,0 z M 80,180 l 10,0 0,10 -10,0 z M 90,180 l 10,0 0,10 -10,0 z M 130,180 l 10,0 0,10 -10,0 z M 140,180 l 10,0 0,10 -10,0 z M 160,180 l 10,0 0,10 -10,0 z M 180,180 l 10,0 0,10 -10,0 z M 200,180 l 10,0 0,10 -10,0 z M 220,180 l 10,0 0,10 -10,0 z M 230,180 l 10,0 0,10 -10,0 z M 240,180 l 10,0 0,10 -10,0 z M 0,190 l 10,0 0,10 -10,0 z M 60,190 l 10,0 0,10 -10,0 z M 120,190 l 10,0 0,10 -10,0 z M 130,190 l 10,0 0,10 -10,0 z M 160,190 l 10,0 0,10 -10,0 z M 200,190 l 10,0 0,10 -10,0 z M 210,190 l 10,0 0,10 -10,0 z M 230,190 l 10,0 0,10 -10,0 z M 240,190 l 10,0 0,10 -10,0 z M 0,200 l 10,0 0,10 -10,0 z M 20,200 l 10,0 0,10 -10,0 z M 30,200 l 10,0 0,10 -10,0 z M 40,200 l 10,0 0,10 -10,0 z M 60,200 l 10,0 0,10 -10,0 z M 80,200 l 10,0 0,10 -10,0 z M 90,200 l 10,0 0,10 -10,0 z M 100,200 l 10,0 0,10 -10,0 z M 120,200 l 10,0 0,10 -10,0 z M 140,200 l 10,0 0,10 -10,0 z M 150,200 l 10,0 0,10 -10,0 z M 160,200 l 10,0 0,10 -10,0 z M 170,200 l 10,0 0,10 -10,0 z M 180,200 l 10,0 0,10 -10,0 z M 190,200 l 10,0 0,10 -10,0 z M 200,200 l 10,0 0,10 -10,0 z M 220,200 l 10,0 0,10 -10,0 z M 230,200 l 10,0 0,10 -10,0 z M 240,200 l 10,0 0,10 -10,0 z M 0,210 l 10,0 0,10 -10,0 z M 20,210 l 10,0 0,10 -10,0 z M 30,210 l 10,0 0,10 -10,0 z M 40,210 l 10,0 0,10 -10,0 z M 60,210 l 10,0 0,10 -10,0 z M 80,210 l 10,0 0,10 -10,0 z M 90,210 l 10,0 0,10 -10,0 z M 100,210 l 10,0 0,10 -10,0 z M 160,210 l 10,0 0,10 -10,0 z M 180,210 l 10,0 0,10 -10,0 z M 200,210 l 10,0 0,10 -10,0 z M 210,210 l 10,0 0,10 -10,0 z M 220,210 l 10,0 0,10 -10,0 z M 230,210 l 10,0 0,10 -10,0 z M 240,210 l 10,0 0,10 -10,0 z M 0,220 l 10,0 0,10 -10,0 z M 20,220 l 10,0 0,10 -10,0 z M 30,220 l 10,0 0,10 -10,0 z M 40,220 l 10,0 0,10 -10,0 z M 60,220 l 10,0 0,10 -10,0 z M 80,220 l 10,0 0,10 -10,0 z M 90,220 l 10,0 0,10 -10,0 z M 100,220 l 10,0 0,10 -10,0 z M 110,220 l 10,0 0,10 -10,0 z M 120,220 l 10,0 0,10 -10,0 z M 210,220 l 10,0 0,10 -10,0 z M 220,220 l 10,0 0,10 -10,0 z M 240,220 l 10,0 0,10 -10,0 z M 0,230 l 10,0 0,10 -10,0 z M 60,230 l 10,0 0,10 -10,0 z M 80,230 l 10,0 0,10 -10,0 z M 90,230 l 10,0 0,10 -10,0 z M 100,230 l 10,0 0,10 -10,0 z M 110,230 l 10,0 0,10 -10,0 z M 140,230 l 10,0 0,10 -10,0 z M 150,230 l 10,0 0,10 -10,0 z M 160,230 l 10,0 0,10 -10,0 z M 170,230 l 10,0 0,10 -10,0 z M 190,230 l 10,0 0,10 -10,0 z M 200,230 l 10,0 0,10 -10,0 z M 210,230 l 10,0 0,10 -10,0 z M 240,230 l 10,0 0,10 -10,0 z M 0,240 l 10,0 0,10 -10,0 z M 10,240 l 10,0 0,10 -10,0 z M 20,240 l 10,0 0,10 -10,0 z M 30,240 l 10,0 0,10 -10,0 z M 40,240 l 10,0 0,10 -10,0 z M 50,240 l 10,0 0,10 -10,0 z M 60,240 l 10,0 0,10 -10,0 z M 80,240 l 10,0 0,10 -10,0 z M 100,240 l 10,0 0,10 -10,0 z M 110,240 l 10,0 0,10 -10,0 z M 190,240 l 10,0 0,10 -10,0 z M 200,240 l 10,0 0,10 -10,0 z M 210,240 l 10,0 0,10 -10,0 z M 220,240 l 10,0 0,10 -10,0 z M 230,240 l 10,0 0,10 -10,0 z M 240,240 l 10,0 0,10 -10,0 z " />
            </g>
          </svg>

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
              `<a class="article__item-link" href="${obj.citeLink}" target="_blank">` +
                
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
              
              `<a class="article__item-link" href="${obj.link}" target="_blank">` +
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