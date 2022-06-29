define([
    'ember',
    'api',
    'settings'
], function (ember, api, settings) {

    ClxApp.PersonDetailController = ember.Controller.extend({

        //

        name: function () {
            return this.get('model.Fields')[7].Value;
        }.property('model.Fields.@each'),
        vorname: function () {
            return this.get('model.Fields')[8].Value;
        }.property('model.Fields.@each'),
        email: function () {
            return this.get('model.Fields')[21].Value;
        }.property('model.Fields.@each')
    });
});