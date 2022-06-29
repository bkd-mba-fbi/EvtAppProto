define([
    'main_settings'
], function(mainSettings) {
    var settings = {
        // module specific settings
        gradingRedirectUrl: '../cst_pages/suchresultat.aspx?tabkey=webtab_meineanlaessedoz&withsearchparameter=true#/events',
        applicationScope: 'Tutoring',
        querystringName: 'idanlass'
    };

    settings.__proto__ = mainSettings;
    return settings;
});