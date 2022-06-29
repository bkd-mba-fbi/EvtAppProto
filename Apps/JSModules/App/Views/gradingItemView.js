define([
    'ember',
    'framework',
    'guiHelpers',
    'translate',
    'uiSettings'
], function (ember, framework, guiHelpers, translate, uiSettings) {
    ClxApp.GradingItemView = framework.WidgetView.extend({
        tagName: '',

        loadWidgets: function () {
            this.addShowError();
        },

        expanding: function () {
            var that = this;
            var expanded = this.get('controller.isExpanded');
            var selector = '#' + this.get('controller.model.IdObject');

            if (expanded === true) {
                this.get('controller').toggleProperty('after_isExpanded');
                ember.run.scheduleOnce('afterRender', this, function () {
                    var row = $(selector);

                    guiHelpers.applySpanAllColumns(row.next());

                    row.css('font-weight', 'bold');
                    row.next().find('.dropdownRow').slideDown(uiSettings.defaultAnimationSpeed);
                });
            }
            else if (expanded === false) {
                var row = $(selector);
                row.next().find('.dropdownRow').slideUp(uiSettings.defaultAnimationSpeed, function () {
                    row.css('font-weight', 'normal');
                    that.get('controller').toggleProperty('.after_isExpanded');
                });
            }
        }.observes('controller.isExpanded'),

        addShowError: function () {
            var that = this;
            var selector = '#' + that.get('controller.model.IdObject');
            var row = $(selector);
            var showSwitch = row.find('td.validationColumn')
                .attr('title', translate.getString('validationRequiredError'));

            if (!this.get('controller.allValid')) {
                guiHelpers.addShowError(showSwitch, row, row.next('tr'), function () {
                    that.set('controller.isExpanded', true);
                });
            } else {
                guiHelpers.removeShowError(row.find('td.validationColumn'));
            }
        }.observes('controller.allValid')
    });
});


