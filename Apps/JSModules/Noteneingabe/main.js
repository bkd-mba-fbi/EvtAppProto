(function (root) {
    require(['../config', '../customConfig'], function (mainConfig, customConfig) {
        requirejs.config(mainConfig);
        requirejs.config(customConfig);
        require([
            'application',
            'ember',
            'framework',
            'applicationHelpers',
            'App/router',
            'App/Templates/application',
            'App/Templates/index',
            'App/Templates/loading',
            'controllers/gradingController',
            'controllers/statisticController'
        ], function (app, ember, framework, applicationHelpers) {

            // Noteneingabe stuff
            app.IndexController = ember.Controller.extend({
                actions: {
                    click: function() {
                        this.transitionToRoute('grading', this.get('idEvent_save'));
                    }
                },

                idEvent: ember.computed({
                    get: function() {
                        return this.get('idEvent_save');
                    },
                    set: function(_, value) {
                        this.set('idEvent_save', value);
                    }
                })
            });

            // start application
            applicationHelpers.initializeApplication(function () {
                framework.Helpers.loadCss('/CSS/jquery-ui.custom.css');
                var appName = 'ClxApp';
                var application = ember.Application.create(app);
                root[appName] = application;
                applicationHelpers.afterStartApplication();
            });
        });
    });
// ReSharper disable once ThisInGlobalContext
})(this);