const LANGUAGE_KEY = 'uiCulture';
const ACCESS_TOKEN_KEY = 'CLX.LoginToken';
const REFRESH_TOKEN_KEY = 'CLX.RefreshToken';
const TOKEN_EXPIRE_KEY = 'CLX.TokenExpire';
const MODULREDIRECT = 'moduleRedirectUrl';
const SCOPE = 'scope'
const ScopePUBLIC = 'Public';
const ScopeTUTORING = 'Tutoring';
const INSTANCE = 'instance';
const LOGINFRAME = 'LoginFrame'

var start = Date.now();

var appsettings = window.schoolApp.appsettings.AppConfiguration;
var urlBevorLoginScopeChange = window.location.href;

function oAuthLogin(){
    console.log(appsettings);
    var instance = instance === undefined ? getInstance() || appsettings.Instance : instance;
    var login = appsettings.OAuthUrl +'/Authorization/' + instance + '/Login?clientId=' + appsettings.ClientId + '&redirectUrl=' + encodeURIComponent(appsettings.RedirectUrl) + '&culture_info=' + getLanguage() + '&application_scope=' + appsettings.Scope;
    
    //popupwindow(test,"Login",400,600)
    window.location.href = login; 
}
  
function getAccessToken() {
    const token = getValue(ACCESS_TOKEN_KEY);
    return token ? token.replace(/^\"+|\"+$/g, '') : null;
}
  
function getRefreshToken() {
    return getValue(REFRESH_TOKEN_KEY);
}
  
function getTokenExpire() {
    return getValue(TOKEN_EXPIRE_KEY);
}

function getScope() {
    return getValue(SCOPE);
}

function getInstance() {
    return getValue(INSTANCE);
}

function getRoles() {
    var payload = getPayload();
    return payload.hasOwnProperty('holder_roles') ? payload.holder_roles.split(';') : payload.roles.split(';');
}

function disableUserAccess() {
    var navList = $('.nav-item, .dropdown-item'); 

    for (let item of navList) {
        if(item.getAttribute('user-access') !== null) {
            var match = getRoles().filter(role => item.getAttribute('user-access').split(';').indexOf(role) >= 0);
            if(match.length === 0 && item.getAttribute('user-access').length > 0) {
                item.classList.add('d-none');
            }
        }
      
    }
        
}

  
function getPayload() {
    const token = getAccessToken();
    const base64Url = token ? token.split('.')[1] : null;
    const base64 = base64Url
    ? base64Url.replace('-', '+').replace('_', '/')
    : null;
    return JSON.parse(window.atob(base64 ? base64 : ''));
}
  
function getValue(key) {
    try {
        return JSON.parse(sessionStorage.getItem(key)) || JSON.parse(localStorage.getItem(key));
    } catch (error) {
        return sessionStorage.getItem(key) || localStorage.getItem(key);
    }
    
}

function setValue(key,value, JSONstringify ) {
    var JSONstringify = JSONstringify === undefined || JSONstringify === null ? true : false;
    if(JSONstringify) {
        sessionStorage.setItem(key,JSON.stringify(value));
        localStorage.setItem(key,JSON.stringify(value));
    } else {
        sessionStorage.setItem(key,value);
        localStorage.setItem(key,value);
    }   
    
}

function setToken(accessToken,refreshToken,language){
    setValue(ACCESS_TOKEN_KEY,accessToken);
    setValue(REFRESH_TOKEN_KEY,refreshToken);
    setValue(LANGUAGE_KEY,language, false);
    setValue(INSTANCE,getPayload().instance_id);
}

function isLoggedIn() {
    
    if (getAccessToken() === null) {
      return false;
    }

    
    var payload = getPayload();
    var tokenExpire = payload.exp * 1000;
    setValue(TOKEN_EXPIRE_KEY,tokenExpire);

    if (tokenExpire !== null && Date.now() >= tokenExpire) {
        return false;
    }
  
    // only return true if instanceId and culture are correct
    return payload.culture_info === getLanguage();
  }

function getInstanceObject() {
    var instanceToken = getInstance();
    return window.schoolApp.appsettings.Instances.filter(instance => instance.id === instanceToken)[0]; 
}

function changeInstance() {
    var newInstance = document.getElementById('instances').value;

    if(newInstance !== getInstance()) {
        setValue(INSTANCE,newInstance);
        logout();
        loginFirst();
    }

}

function changeLanguage(language){
    setValue(LANGUAGE_KEY,language);
    refreshToken();
}

function getLanguage() {
    // first priority: html lang attribute
    let htmlLang = getValue(LANGUAGE_KEY) || navigator.language || navigator.userLanguage; 
    document.documentElement.setAttribute('lang', htmlLang.indexOf('fr') >= 0 ? 'fr' : 'de');
    if (htmlLang.split('-')[0] === 'fr') {
        return 'fr-CH';
    } else {
        return 'de-CH';
    }
}


/**
 * get an URL-parameter
 * taken from https://stackoverflow.com/q/901115#answer-901144
 * @param {string} name the name of the parameter
 * @param {string} url the URL (defaults to current URL)
 */
 function getParameterByName(name, url) {

    if (typeof url !== 'string') {
      url = window.location.href;
    }
  
    name = name.replace(/[[\]]/g, '\\$&');
  
    let regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
    let results = regex.exec(url);
  
    if (!results) {
      return null;
    }
  
    if (!results[2]) {
      return '';
    }
  
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}


function checkToken() {

    let accessToken = getParameterByName('access_token');
    let refreshToken = getParameterByName('refresh_token');
  
    if (accessToken !== null) {

      setToken(accessToken,refreshToken,getLanguage());
      setValue(SCOPE,getPayload().scope)

      history.replaceState(null, null, getParameterByName(MODULREDIRECT));

    }
}


function logout() {
    var instance = getInstance();
    window.localStorage.clear();
    window.sessionStorage.clear();
    setValue(INSTANCE,instance);
    window.location.reload();

} 

function refreshToken(){

    if(getPayload().scope !== getScope() || getPayload().culture_info !== getValue(LANGUAGE_KEY)) {
        url = appsettings.OAuthUrl + '/Authorization/RefreshPublic?redirectUrl=' + encodeURIComponent(appsettings.RedirectUrl) + '&refresh_token=' + getValue(REFRESH_TOKEN_KEY) + '&culture_info=' + getValue(LANGUAGE_KEY) +'&application_scope=' + getValue(SCOPE);
        window.location.href = url;
    }
}

function renderinstances() {
    if(window.location.pathname.indexOf('instance.html') === -1) {
        //$('#logo').attr('src','./logo/'+ getInstanceObject().logo);
        document.getElementById('schoolName').innerText =  getInstanceObject().displayName;
        document.getElementById('headerSchoolChange').innerText = getInstanceObject().displayName;
    } else {
        document.getElementById('schoolChange').classList.add('d-block');
        document.getElementById('schoolChange').style.opacity = 1;
    }

    window.schoolApp.appsettings.Instances.forEach(function(item) {
        var select = document.getElementById('instances');
        var option = document.createElement("option");
        option.innerHTML = item.displayName;
        option.value = item.id;
        select.add(option);
    } 
    
    )

}

function renderApps(appElementId) {
    var app = window.schoolApp.appsettings.Apps.filter(app => app.id === appElementId)[0];
    
    var scripts = app.addRootScripts === false ? '' :  window.schoolApp.appsettings.RootScripts;
    $('#rootScripts').append(scripts) 

    if(getScope() !== app.scope) {
        setValue(SCOPE, app.scope);
        setValue(MODULREDIRECT,location.href);
        refreshToken();
    }
    
    window.schoolApp.appsettings.Apps.forEach(app => {
        var toRemove = document.getElementById(app); 
        if(toRemove !== null && toRemove !== appElementId) {
            toRemove.remove();
        } 
    });

    if (document.getElementById(appElementId) === null) {
        $('#main').append(app.html);
    }
    
}

function popupwindow(url, title, w, h) {
    var left = (screen.width/2)-(w/2);
    var top = (screen.height/2)-(h/2);
    return window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);
  } 

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('../serviceWorker.js').then(function(registration) {
        // Registration was successful
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function(err) {
        // registration failed :(
        console.log('ServiceWorker registration failed: ', err);
        });
    });
    }