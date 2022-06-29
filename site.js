

checkToken();

if(urlBevorLoginScopeChange.indexOf('access_token') === -1) {
    setValue(MODULREDIRECT, urlBevorLoginScopeChange);
}

if(!isLoggedIn()) {
    console.log(getInstance());
    if(getInstance() === null) {
        console.log('instance undifind')
        window.location = './instance.html'
        
    } else {
        loginFirst();
    }

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

    renderApps(getParameterByName('app'));
    renderinstances();
    disableUserAccess();

});

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