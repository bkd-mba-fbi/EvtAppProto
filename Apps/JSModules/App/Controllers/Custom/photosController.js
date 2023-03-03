define([
    'ember'
], function (ember) {
    ClxApp.PhotosController = ember.Controller.extend({
        // These properties are set by the view
        studentHeight: null,
        studentWidth: null,
        columns: null,
        updateDetailsHeight: null,
        detailsHeight: null,

        // This is set by the router
        currentIdPerson: null,
        loading: null,

        // These are only used by the template and the controller
        activeIndex: ember.computed('indexLookup', 'currentIdPerson', function () {
            var indexLookup = this.get('indexLookup');
            var currentIdPerson = this.get('currentIdPerson');

            if (currentIdPerson === null || indexLookup === null) {
                return null;
            }

            var activeIndex = indexLookup[currentIdPerson];
            if (activeIndex === undefined) {
                return null;
            }

            return activeIndex;
        }),

        _previousIndex: null,

        activeIndexChanged: ember.observer('loading', 'activeIndex', 'model.students', function () {
            var previousIndex = this.get('_previousIndex');
            var student;

            if (previousIndex !== null) {
                student = this.get('model.students').objectAt(previousIndex);

                if (student !== undefined) {
                    ember.set(student, 'active', false);
                }
            }

            var index = this.get('activeIndex');

            if (index === null) {
                return;
            }

            if (this.get('loading') !== false) {
                return;
            }

            student = this.get('model.students').objectAt(index);
            ember.set(student, 'active', true);

            this.set('_previousIndex', index);
        }),

        indexLookup: ember.computed('model.students', function () {
            var obj = {};
            var students = this.get('model.students');

            if (students === null) {
                return null;
            }

            students.forEach(function (value, index) {
                obj[value.idPerson] = index;
            });

            return obj;
        }),

        length: ember.computed('model.students', function () {
            var students = this.get('model.students');

            if (students === undefined) {
                return null;
            }

            return this.get('model.students.length');
        }),

        // Accordion properties
        // example:
        // if we want to view the details from the person (3|2) and there are 6
        // columns and 4 rows, we have to expand the 17th placeholder
        // (counting from 0).
        // 17 = (2 + 1) * 6 - 1
        // activePlaceholderIndex = (activeRow + 1) * columns - 1
        //
        //    0   1   2   3   4   5
        // 0 [☺] [☺] [☺] [☺] [☺] [☺]
        // 1 [☺] [☺] [☺] [☺] [☺] [☺]
        // 2 [☺] [☺] [☺] [X] [☺] [☺]
        // 3 [☺] [☺] [☺] [☺] [☺] [☺]
        detailsCSS: ember.computed('studentHeight', 'activeRow', function () {
            var top;

            if (this.get('activeRow') === null) {
                top = 0;
            } else {
                top = (this.get('activeRow') + 1) * this.get('studentHeight');
            }

            return Ember.String.htmlSafe(
                'top:' + top + 'px'
            );
        }),

        placeholderCSS: ember.computed('detailsHeight', function () {
            var height = this.get('detailsHeight');

            return Ember.String.htmlSafe(
                'height:' + height + 'px'
            );
        }),

        pointerCSS: ember.computed('studentWidth', 'activeColumn', function () {
            var left;

            if (this.get('activeColumn') === null) {
                left = 0;
            } else {
                left = (this.get('activeColumn') + 0.5) * this.get('studentWidth');
            }

            return Ember.String.htmlSafe(
                'left:' + left + 'px'
            );
        }),

        detailsVisible: ember.computed('activeIndex', function() {
            return this.get('activeIndex') !== null;
        }),

        activeColumn: ember.computed('activeIndex', 'columns', function() {
            if (this.get('activeIndex') === null) {
                return null;
            }

            return this.get('activeIndex') % this.get('columns');
        }),

        activeRow: ember.computed('activeIndex', 'columns', function() {
            if (this.get('activeIndex') === null || this.get('columns') === null) {
                return null;
            }

            return Math.floor(this.get('activeIndex') / this.get('columns'));
        }),

        activePlaceholderIndex: ember.computed('activeRow', 'length', 'columns', function () {
            if (this.get('activeRow') === null || this.get('columns') === null) {
                return null;
            }

            var index = (this.get('activeRow') + 1) * this.get('columns') - 1;

            if (index >= this.get('length')) {
                return this.get('length') - 1;
            }

            return index;
        }),

        _previousPlaceholderIndex: null,

        activePlaceholderIndexChanged: ember.observer('activePlaceholderIndex', 'model.students', function () {
            var previousIndex = this.get('_previousPlaceholderIndex');
            var student;

            if (previousIndex !== null) {
                student = this.get('model.students').objectAt(previousIndex);

                if (student !== undefined) {
                    ember.set(student, 'placeholder', false);
                }
            }

            var index = this.get('activePlaceholderIndex');

            if (index === null) {
                return;
            }

            student = this.get('model.students').objectAt(index);

            if (student === undefined) {
                return;
            }

            ember.set(student, 'placeholder', true);

            this.set('_previousPlaceholderIndex', index);
        }),

        init: function() {
            // https://guides.emberjs.com/v1.11.0/object-model/observers/#toc_unconsumed-computed-properties-do-not-trigger-observers
            this.get('activeIndex');
            this.get('activePlaceholderIndex');
        }
    });
});