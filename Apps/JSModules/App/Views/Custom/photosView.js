define([
    'ember',
    'icons'
], function (ember, icons) {
    ClxApp.PhotosView = ember.View.extend({
        didInsertElement: function () {
            var that = this;
            var students =  this.$('.photolist__student');

            // i should consider switching to send
            this.set('container', this.$('.photolist__container'));

            var updateDetailsHeight = function () {
                ember.run.scheduleOnce('afterRender', function () {
                    var detailsHeight;
                    try {
                        detailsHeight = that.$('.photolist__details').outerHeight(true);
                    } catch(e) {
                        detailsHeight = 0;
                    }
                    that.set('controller.detailsHeight', detailsHeight);
                });
            };

            updateDetailsHeight();
            this.set('controller.updateDetailsHeight', updateDetailsHeight);

            // the resizehandler calculates how many columns there are
            // when the document gets resized
            var resizeHandler = function () {
                that.get('controller.updateDetailsHeight')();
                that.set('controller.studentHeight', students.first().outerHeight(true));
                that.set('controller.studentWidth', students.first().outerWidth(true));
                var containerWidth = that.get('container').outerWidth();
                var studentWidth = that.get('controller.studentWidth');

                // when there is not enough space for one photo there is one photo per row
                var columns = Math.floor(containerWidth / studentWidth) || 1;

                that.set('controller.columns', columns);
            };

            this.set('resizeHandler', resizeHandler);
            resizeHandler();
            $(window).on('resize', resizeHandler);

            this.$('img').on('error', function (event) {
                $(event.target).attr('src', require.toUrl('../images/Custom/placeholder.svg'));
            });
        },
        willDestroyElement: function () {
            $(window).off('resize', this.get('resizeHandler'));
            this.$('img').off('error');
        }
    });
});


