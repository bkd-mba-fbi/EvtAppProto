define([
    'jquery',
    'ember',
    'framework',
    'api',
    'constants'
], function ($, ember, framework, api, constants) {
    ClxApp.SubscriptionDetailController = framework.AutoSaveController.extend({
        init: function () {
            if (this.get('model.Required') || this.get('model.VssTypEx') === constants.vssType.Yes)
                this.registerMustFields('AdWert');
            else
                this.set('isValid', true);
        },

        Required: function() {
            return this.get('model.Required') || this.get('model.VssTypEx') === constants.vssType.Yes;
        }.property('model.Required'),

        hide: function () {
            var hiddenDetails = this.get('parentController.hiddenSubscriptionDetails');
            return hiddenDetails && $.inArray(this.get('model.IdAnmeldeVSS'), hiddenDetails) > -1;
        }.property('parentController.hiddenSubscriptionDetails'),

        hiddenChanged: function () {
            if (this.get('hide')) {
                this.set('model.AdWert', null);
                api.updateSubscriptionDetail(this.get('model'));
            }
        }.observes('hide'),

        sdValue: function (key, value) {
            if (this.get('model.VssTypEx') === constants.vssType.Yes && value === false)
                value = '';
            return this.autoSaveProperty('AdWert', value);
        }.property('sdValue', 'model.AdWert'),

        IdObject: function() {
            return this.get('model.IdObject');
        }.property('model.IdObject'),

        VssBezeichnung: function() {
            return this.get('model.VssBezeichnung');
        }.property('model.VssBezeichnung'),

        subscriptionDetail: function() {
            return this.get('model');
        }.property('model'),

        saveInternal: function () {
            api.updateSubscriptionDetail(this.get('model'));
        }
    });
});