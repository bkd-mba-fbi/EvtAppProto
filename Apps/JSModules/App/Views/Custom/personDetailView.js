define([
    'eventoWidgets',
    'ember',
    'framework',
    'urlHelpers',
    'settings'
], function (eventoWidgets, ember, framework, urlHelpers, settings) {

    ClxApp.PersonDetailView = framework.OverlayView.extend({
        baseTransition: function () {
            this.get('controller').send('closeRoute');
        },
        usePrintButton: false
    });
});


