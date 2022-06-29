define([
    'jquery',
    'ember',
    'api',
    'framework',
    'settings',
    'guiHelpers',
    'flotHelpers',
    'translate',
    'flot',
    'flot.symbol',
    'eventoWidgets',
    'jquery-ui'
], function ($, ember, api, framework, settings, guiHelpers, flotHelpers, translate) {
    ClxApp.StatisticView = framework.WidgetView.extend({
        showValidationMessageChanged: function () {
            ember.run.scheduleOnce('afterRender', this, function () {
                $('.footerValidation').show('slide', { direction: 'down' }, settings.defaultAnimationSpeed);
            });
        }.observes('controller.showValidationMessage'),

        loadWidgets: function() {
            //PDF-Report
            // if there are reports add them to the report button
            var keys = this.get('controller.model.Id');
            var reportInfo;
            var buttonContainer = $('.' + guiHelpers.classes.dialog.buttonContainer);
            var pdfButton = $('#btnPdfReport');
            if (settings.reports !== undefined) {
                var reports = settings.reports.anlass;
                if (reports) {
                    api.getAvailableCrystalReports(framework.constants.reportContext.anlass, reports, keys, function (result) {
                        reportInfo = result;
                    });
                }
            }
            // append pdf button
            pdfButton.appendTo(buttonContainer);

            guiHelpers.addContextMenuToButton(pdfButton, function (contextMenu) {
                if (reportInfo === undefined)
                    return;
                $.each(reportInfo, function () {
                    var link = guiHelpers.getLinkNewWindow(
                        api.getCrystalReportUrl(framework.constants.reportContext.anlass, this.Id, keys),
                        this.Title);
                    contextMenu.append(link);
                });
            }, true, 'Ctrl+Shift+P', translate.getString('noReports'));
        },
        loadWidgetsRepeat: function () {
            $('.gradeTable').fixedHeaderTable({
                calculateHeight: false,
                includeElementsAfterParentForCalculation: '.' + guiHelpers.classes.dialog.dialogBlockFixed,
                sort: false
            });

            this._super();

            var controller = this.get('controller');
            var flotDataUnSufficient = controller.flotData(false);
            var flotDataSufficient = controller.flotData(true);

            //fill data
            var ticks = [];
            var data = [];

            if (controller.risingGrades()) {
                data = [
                    controller.getSerie(1, flotDataUnSufficient, ticks, false),
                    controller.getSerie(2, flotDataSufficient, ticks, true)
                ];

            } else {
                data = [
                    controller.getSerie(1, flotDataSufficient, ticks, true),
                    controller.getSerie(2, flotDataUnSufficient, ticks, false)
                ];
            }

            flotHelpers.createPlot($('#flot-placeholder'), data, ticks, $('#flot-legend'), translate.getString('grade'), translate.getString('count'), false);
        }
    });
});


