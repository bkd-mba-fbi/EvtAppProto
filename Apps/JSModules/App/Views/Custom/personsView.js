define([
    'eventoWidgets',
    'ember',
    'framework',
    'urlHelpers',
    'settings'
], function (eventoWidgets, ember, framework, urlHelpers, settings) {

    ClxApp.PersonsView = framework.WidgetView.extend({
        loadWidgets: function() {
            var hasOverlay = location.href.indexOf('persons/') > -1;
            var designation = settings.searchDesignation;

            //TODO HACK: retry until it works because of widget not beeing initialized on time in IE (at least sometimes)
            this.trySetEventoSearch(hasOverlay, false, designation);
        },

        trySetEventoSearch: function (hasOverlay, isPrintMode, designation) {
            var that = this;
            try {
                this.setEventoSearch(hasOverlay, isPrintMode, designation);
            } catch (ex) {
                setTimeout(function() {
                    that.trySetEventoSearch(hasOverlay, isPrintMode, designation);
                }, 1000);
            }
        },

        setEventoSearch: function(hasOverlay, isPrintMode, designation) {
            var that = this;
            if (!(isPrintMode && hasOverlay)) {
                $('#divSearch').eventosearch({
                    dataClassId: 'person',
                    calculateHeight: true,
                    designation: designation,
                    isPrintMode: isPrintMode,
                    usePrintButton: false,
                    rowChosen: function(id) {
                        that.get('controller').send('rowChosen', id);
                    },
                    printModeCalled: function() {
                        var win = window.open(urlHelpers.addUrlParam('Print', 'true'), '_blank');
                        win.focus();
                    }
                });
            } else { // hide the loading text when the search is not displayed
                $('#divSearch').text('');
            }
        }
    });
});


