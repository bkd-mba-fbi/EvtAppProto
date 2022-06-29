window.schoolApp = window.schoolApp || {};
window.schoolApp.appsettings = {

  "AppConfiguration": {
    "OAuthUrl": "https://eventoapp-test.erz.be.ch/OAuth",
    "ClientId": "schoolWeb",
    "RedirectUrl": "https://evtapp.netlify.app",
    "RestUrl": "https://eventoapp-test.erz.be.ch/restApi",
    "Scope": 'Tutoring',
    "Instance": 'BsSCHE'
  },

  "Instances": [
    {
      "id": "BsBivo",
      "displayName": "Berufsfachschule Bivo",
      "logo": "bs_test.jpg"
    },
    {
      "id": "BsFBI",
      "displayName": "FBI Mandant",
      "logo": "gym_master.jpg"
    },
    {
      "id": "BsTest",
      "displayName": "Berufsfachschule Testmandant",
      "logo": "bs_test.jpg"
    }
  ],
  "RootScripts": `<script src="./Apps/webapp-schulverwaltung/runtime.js" type="module"></script>
  <script src="./Apps/webapp-schulverwaltung/polyfills.js" type="module"></script>
  <script src="./Apps/webapp-schulverwaltung/main.js" type="module"></script>`,

  "Apps": [
    {
      "id": "webapp-schulverwaltung",
      "scope": "Tutoring",
      "html": "<div id='webapp-schulverwaltung'><erz-app></erz-app></div>"
    },
    {
      "id": "kursausschreibung",
      "scope": "Public",
      "html": `<div id="kursausschreibung">
      <meta name="kursausschreibung/config/environment"
      content="%7B%22modulePrefix%22%3A%22kursausschreibung%22%2C%22environment%22%3A%22production%22%2C%22rootURL%22%3A%22%22%2C%22locationType%22%3A%22hash%22%2C%22EmberENV%22%3A%7B%22FEATURES%22%3A%7B%7D%2C%22EXTEND_PROTOTYPES%22%3A%7B%22Date%22%3Afalse%7D%7D%2C%22APP%22%3A%7B%22rootElement%22%3A%22%23kursausschreibung-root%22%2C%22name%22%3A%22kursausschreibung%22%2C%22version%22%3A%220.0.0+00520930%22%7D%2C%22exportApplicationGlobal%22%3Afalse%7D" />
    <link rel="stylesheet" href="./Apps/Kursausschreibung/assets/app.css">
    <script src="./Apps/Kursausschreibung/settings.js"></script>
    <script src="./Apps/Kursausschreibung/appConfig.js"></script>
    <script src="./Apps/Kursausschreibung/locale/de-CH.js"></script>
    <script src="./Apps/Kursausschreibung/locale/fr-CH.js"></script>
    <script>
    var i; 
    var niveau = []; 
    for (i = 1; i < 2000; i++) {
        niveau.push(i);
    } 
    window.kursausschreibung.settings.initialListFilters.eventLevelIds = niveau;
    </script>
    <script src="./Apps/Kursausschreibung/assets/app.js"></script>

    <div class="uk-container uk-width-1-1">
      <div class="uk-scope">
        <div id="kursausschreibung-root" class="uk-container uk-width-1-1">
        </div>
      </div>
    </div>
    </div>`
    },
    {
      "id": "kursausschreibung-Intern",
      "scope": "Public",
      "html": `<div id="kursausschreibung">
      <meta name="kursausschreibung/config/environment"
      content="%7B%22modulePrefix%22%3A%22kursausschreibung%22%2C%22environment%22%3A%22production%22%2C%22rootURL%22%3A%22%22%2C%22locationType%22%3A%22hash%22%2C%22EmberENV%22%3A%7B%22FEATURES%22%3A%7B%7D%2C%22EXTEND_PROTOTYPES%22%3A%7B%22Date%22%3Afalse%7D%7D%2C%22APP%22%3A%7B%22rootElement%22%3A%22%23kursausschreibung-root%22%2C%22name%22%3A%22kursausschreibung%22%2C%22version%22%3A%220.0.0+00520930%22%7D%2C%22exportApplicationGlobal%22%3Afalse%7D" />
    <link rel="stylesheet" href="./Apps/Kursausschreibung/assets/app.css">
    <script src="./Apps/Kursausschreibung/settings.js"></script>
    <script src="./Apps/Kursausschreibung/appConfig.js"></script>
    <script src="./Apps/Kursausschreibung/locale/de-CH.js"></script>
    <script src="./Apps/Kursausschreibung/locale/fr-CH.js"></script>
    <script>
    window.kursausschreibung.settings.initialListFilters.eventLevelIds = [2000,2001];
    </script>
    <script src="./Apps/Kursausschreibung/assets/app.js"></script>

    <div class="uk-container uk-width-1-1">
      <div class="uk-scope">
        <div id="kursausschreibung-root" class="uk-container uk-width-1-1">
        </div>
      </div>
    </div>
    </div>`
    },
    {
      "id": "stellvertertung",
      "scope": "Tutoring",
      "html": `<div id="stellvertertung">
      <link rel="stylesheet" href="./Apps/Stellvertretung/styles.css">
      <script src="./Apps/Stellvertretung/settings.js"></script>
      <body class="standalone">
        <erz-app></erz-app>
        <script src="./Apps/Stellvertretung/runtime.js" type="module"></script>
        <script src="./Apps/Stellvertretung/polyfills.js" type="module"></script>
        <script src="./Apps/Stellvertretung/scripts.js" defer></script>
        <script src="./Apps/Stellvertretung/vendor.js" type="module"></script>
        <script src="./Apps/Stellvertretung/main.js" type="module"></script>
    </div>`,
      "addRootScripts": false
    },
    {
      "id": "fotoliste",
      "scope": "Tutoring",
      "html": `<div id="CLX_Root"></div>
      <script data-main="./Apps/JSModules/Fotoliste/main.js" src="./Apps/JSModules/Lib/require.js"></script>`
    },
    {
      "id": "noteneingabe",
      "scope": "Tutoring",
      "html": `<link rel="stylesheet" href="./Apps/JSModules/CSS/main.min.css">
      <link rel="stylesheet" href="./Apps/JSModules/CSS/responsive.min.css">
      <link rel="stylesheet" href="./Apps/JSModules/CSS/jquery-ui.custom.min.css">
      <div id="CLX_Root"></div>
      <script data-main="./Apps/JSModules/Noteneingabe/main.js" src="./Apps/JSModules/Lib/require.js"></script>`
    },
    {
      "id": "schulleiter",
      "scope": "NG",
      "html": `<link rel="stylesheet" href="./Apps/JSModules/CSS/main.min.css">
      <link rel="stylesheet" href="./Apps/JSModules/CSS/responsive.min.css">
      <link rel="stylesheet" href="./Apps/JSModules/CSS/jquery-ui.custom.min.css">
      <div id="CLX_Root" class="p-3"></div>
      <script data-main="./Apps/JSModules/SchulleiterPersonen/main.js" src="./Apps/JSModules/Lib/require.js"></script>`
    },
    {
      "id": "anmeldedetails-einlesen",
      "scope": "Tutoring",
      "html": `<link rel="stylesheet" href="./Apps/JSModules/CSS/main.min.css">
      <link rel="stylesheet" href="./Apps/JSModules//CSS/Custom/anmeldedetails-einlesen.css">
      <div id="CLX_Root" class="p-3"></div>
      <script data-main="./Apps/JSModules/AnmeldedetailsEinlesen/main.js" src="./Apps/JSModules/Lib/require.js"></script>`
    },
    {
      "id": "reservationen",
      "scope": "NG",
      "html": ` <div id="fbi-root"></div>
      <script>
      window._RoomReservationConfig = {
      "tokenType": "urn:ietf:params:oauth:token-type:jwt-bearer",
      "webBaseUrl": "",
      "apiUrl": "https://eventoapp-test.erz.be.ch/restApi",
      "oauthUrl": "https://eventoapp-test.erz.be.ch/OAuth",
      "clientId": "Roomreservation",
      "instanceId": 0,
      "appScope": "NG",
      "useAutoLogin": true,
      "useLanguageDetection": true,
      "debug": false,
      "availableLanguages": [
      "de-CH",
      "fr-CH"
      ],
      "copyright": "EFHG Evento Fachhochschulgremium",
      "qrCodeBaseUrl": "",
      "showRoomReservation": true,
      "showDeviceReservation": true,
      "language": "de-CH",
      "initialPath": location.href.search('ressourceidra=3') > 0 ? 'devices' : ''
      };
      
      </script>
      <script src="./Apps/Raumreservation/embed.js"></script>
      <script>
      var root = document.getElementById('fbi-root');
      var appRoot = document.getElementsByTagName('app-root')[0];
      root.insertBefore(appRoot, null);  

      setInterval(function(){
        document.getElementsByTagName('nav')[1].className = 'navbar navbar-expand-md'
      },500);
      </script>`
    },
    {
      "id": "kalenderAbos",
      "scope": "Tutoring",
      "html": `<div id="kalenderAbos" class="erz-container erz-container-limited erz-container-padding-y erz-container-padding-x-responsive">
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link active" href="#/stundenplan">Stundenplan</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#/raumplan">Raumplan</a>
        </li>
      </ul>
      <div id="stundenplan" class="p-3">
      <p>Sie können via QR-Code Scan den Stundenplan auf ihrem Smartphone abonnieren. Oder Sie klicken auf den Link <a href="webcal://domain.app/245435-234-245-2-43-4.ical">Stundenplan abonnieren </a> wenn Sie den Stundenplan direkt auf dem aktuellen Client in ihrem bevorzugten Kalender Programm abonnieren möchtet.</p>
    </div>  
    <script type="text/javascript" src="./lib/davidshimjs-qrcodejs/qrcode.min.js"></script>
    <script type="text/javascript">
    new QRCode(document.getElementById("stundenplan"), "https://mba-fbi.zubler.ch/modultest/ics/B0859F74-00D7-433F-8331-FA2C1B90AAAD.ics");
    </script>
    </div>`
    },
    

  ]

}

