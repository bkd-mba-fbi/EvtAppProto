define([
    'jquery',
    'ember',
    'framework',
    'App/application',
    'api',
    'arrayHelpers',
    'settings',
    'storage'
], function ($, ember, framework, app, api, arrayHelpers, settings, storage) {
    ClxApp.GradingItemController = framework.AutoSaveController.extend({
        init: function () {
            if (this.get('model.Scale.FreeGrading'))
                this.registerMustFields('GradeValue');
            else
                this.registerMustFields('IdGrade');

            var validatedChildren = new Object();
            var subscriptionDetails = this.get('model.SubscriptionDetails');
            var allDetails = subscriptionDetails.concat(this.get('model.ColumnDetails'));
            var settingRequired = settings.grading ? settings.grading.adRequired : [];
            if (!settingRequired)
                settingRequired = [];

            $.each(allDetails, function () {
                this.Required = this.Required || $.inArray(this.IdAnmeldeVSS, settingRequired) !== -1 || this.VssTypEx === 292;
                if (this.AdWert)
                    validatedChildren[this.IdObject] = true;
                else
                    validatedChildren[this.IdObject] = !this.Required;
            });
            this.set('validatedChildren', validatedChildren);
        },

        hiddenSubscriptionDetails: function () {
            return this.get('gradeSufficient') !== false ? settings.grading.adColumnsOnlyShowWhenGradeFail : undefined;
        }.property('GradeValue', 'IdGrade'),

        gradeSufficient: function () {
            var parentController = this.get('parentController');
            var isFreeGrading = parentController.get('model.Scale.FreeGrading');
            var lowestSufficient = parentController.get('model.Scale.LowestSufficientGrade');
            var rising = parentController.get('model.Scale.RisingGrades');
            var gradeValue = undefined;

            if (isFreeGrading) {
                gradeValue = this.get('GradeValue');
            } else {
                var grades = parentController.get('model.Scale.Grades');
                var idGrade = this.get('IdGrade');

                $.each(grades,
                    function() {
                        if (this.Id === idGrade) {
                            gradeValue = this.Value;
                            return false;
                        }
                    });
            }

            if (!gradeValue)
                return undefined;
            
            if ((rising && gradeValue >= lowestSufficient) || (!rising && gradeValue <= lowestSufficient))
                return true;
            return false;
        }.property('GradeValue', 'IdGrade'),

        childValidated: function (childModel, isValid) {
            var validatedChildren = this.get('validatedChildren');
            validatedChildren[childModel.IdObject] = isValid;
            this.set('validatedChildren', validatedChildren);
            // unfortunately ember doesn't seem to notice the changing of the property "validateChildren". Maybe because it is an Object
            // therefor introduce property "validatedChild". That one works as expected when observing in "allValid"
            this.toggleProperty('validatedChild');
        },

        allValid: function () {
            var valid = this.get('isValid');
            if (!valid)
                return false;
            var validatedChildren = this.get('validatedChildren');
            arrayHelpers.eachKeyValue(validatedChildren, function(key, value) {
                if (value === false) {
                    valid = false;
                    return false;
                }
                return true;
            });

            this.storeAllValid(valid);
            return valid;
        }.property('isValid', 'validatedChild'),

        storeAllValid: function(allValid) {
            var id = this.get('model.IdObject');
            var valResult = storage.validationResults();
            valResult[id] = allValid;
            storage.validationResults(valResult);
        },

        actions: {
            toggleRow: function () {
                this.toggleProperty('isExpanded');
            }
        },

        toggleClassName: function () {
            if (this.get('isExpanded'))
                return 'collapseTriangle triangleExpanded';
             else 
                return 'collapseTriangle triangleCollapsed';
        }.property('isExpanded'),

        IdObject: function () {
            return this.get('model.IdObject');
        }.property('model.IdObject'),

        PersonFullname: function () {
            return this.get('model.PersonFullname');
        }.property('model.PersonFullname'),

        PersonNameTooltip: function () {
            var tooltip = this.get('model.PersonNameTooltip');
            if (tooltip)
                return tooltip;
            return this.get('model.PersonFullname');
        }.property('model.PersonNameTooltip,model.PersonFullname'),

        MatriculationNumber: function () {
            return this.get('model.MatriculationNumber');
        }.property('model.MatriculationNumber'),

        IdGrade: function (key, value) {
            if (value !== undefined && value != this.get('model.IdGrade'))  {
                this.get('parentController').set('isSaving', true);
			}
            return this.autoSaveProperty(key, value, false, false, true);
        }.property('model.IdGrade'),

        GradeValue: function (key, value) {
            return this.autoSaveProperty(key, value, false, false, true);
        }.property('model.GradeValue'),
        
        Comment: function (key, value) {
            return this.autoSaveProperty(key, value);
        }.property('model.Comment'),

        ColumnDetails: function () {
            return this.get('model.ColumnDetails');
        }.property('model.ColumnDetails'),

        SubscriptionDetails: function () {
            return this.get('model.SubscriptionDetails');
        }.property('model.SubscriptionDetails'),

        saveInternal: function () {
            var that = this;
            var gradingItem = this.get('model');
            api.updateGradingItem(gradingItem, function () {
                that.get('parentController').set('isSaving', false);
            });
        }
    });
});