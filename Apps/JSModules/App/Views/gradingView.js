define([
    'api',
    'eventoWidgets',
    'ember',
    'framework',
    'guiHelpers',
    'translate',
    'icons',
    'settings'
], function (api, eventoWidgets, ember, framework, guiHelpers, translate, icons, settings) {

    //////// run configuration children
    ClxApp.GradingView = framework.WidgetView.extend({
        loadWidgetsRepeat: function () {
            $('.dialogAccordionTable').fixedHeaderTable({
                calculateHeight: false,
                includeElementsAfterParentForCalculation: '.' + guiHelpers.classes.dialog.dialogBlockFixed,
                sort: false
            });
            $('.freeGradingInput').numberTextbox();
            this._super();
        },
        loadWidgets: function () {
            this._super();
            var that = this;
            var id = this.get('controller.model.Id');

            var excelButton = $('#btnExcelGradingList');
            var downloadLink = guiHelpers.getLinkNewWindow(
                api.getExcelGradingListUrl(id, settings.grading.adColumns),
                translate.getString('downloadExcelGradingList')).click(function () {
                    excelButton.click();
                });

            guiHelpers.addContextMenuToButton(excelButton, function (contextMenu) {
                contextMenu.append(downloadLink);
                contextMenu.append(guiHelpers.getDiv(null, translate.getString('uploadExcelGradingList'))
                    .append($('<br/>'))
                    .append(guiHelpers.getFileInput(null, 'fluExcelGradingList', true, null))
                    .append(guiHelpers.getButton(icons.continue, 'btnUploadExcelGradingList').click(function() {
                        var selectedFile = $('#fluExcelGradingList')[0].files[0];
                        api.updateExcelGradingList(selectedFile, that.get('controller.model.Id'), settings.grading.adColumns, function () {
                            location.reload();
                        });
                        excelButton.click();
                    })));
            }, true, 'Ctrl+E', null, true);
        }
    });
});


