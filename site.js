

checkToken();

if(urlBevorLoginScopeChange.indexOf('access_token') === -1) {
    setValue(MODULREDIRECT, urlBevorLoginScopeChange);
}

if(!isLoggedIn()) {

    oAuthLogin();

}  else {
    refreshToken();
} 


if(window.location.href !== getValue(MODULREDIRECT)) {
    window.location.href = getValue(MODULREDIRECT);
}

window.addEventListener('hashchange', function(){
    //console.log('onhashchange event occurred!');
    //console.log(getParameterByName('app'))

    renderApps(getParameterByName('app'));

})

$(document).ready(function() {

    if(getValue(LOGINFRAME)){
        window.close();
    }

    renderApps(getParameterByName('app'));
    renderinstances();
    disableUserAccess();

    if (window.location.href.indexOf('?') > 0){
        document.getElementById('dashboard').classList.add('d-none');
    } else {
        document.getElementById('dashboard').classList.remove('d-none');
    }

});