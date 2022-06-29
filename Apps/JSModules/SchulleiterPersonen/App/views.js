define([
    'eventoWidgets',
    'ember',
    'framework',
    'App/application',
    'keyboard',
    'api',
    'icons',
    'guiHelpers',
    'urlHelpers'
], function (eventoWidgets, ember, framework, app, keyboard, api, icons, guiHelpers, urlHelpers) {

    app.PersonsView = framework.WidgetView.extend({
        loadWidgets: function() {
            var isPrintMode = urlHelpers.getUrlParameter('Print') === 'true';
            var hasOverlay = location.href.indexOf('persons/') > -1;
            var designation = $('#CLX_Root').data('search-definition');

            //TODO HACK: retry until it works because of widget not beeing initialized on time in IE (at least sometimes)
            this.trySetEventoSearch(hasOverlay, isPrintMode, designation);
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
                        that.get('controller').transitionToRoute('dialogGroup', 'person', id);
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


    app.DialogGroupView = framework.OverlayView.extend({
        templateName: 'dialogGroup',
        usePrintButton: false,

        baseTransition: function () {
            // not really the correct place to do that but still
            $('#divSearch').eventosearch('refreshAfterDialogClosed');
            // here transition back to person
            this.get('controller').transitionToRoute('persons');
        },

        loadWidgets: function () {
            this._super();
            var that = this;

            // set picture only for person, all other set the icon
            var pictureDiv = $('.dialogIcon');
            var dataClassId = this.get('controller.model.DataClassId').toLowerCase();
            var dataKey = this.get('controller.model.DataKey');
            var icon = $(icons[dataClassId]);
            // add the icon already and remove it when the image can load
            pictureDiv.append(icon);
            if (dataClassId === 'person') {
                // just add an img with the url and replace it with the icon if there is an error on load
                var image = $('<img>');
                image.attr('src', api.getPersonPictureUrl(dataKey));
                // hide image as long as it is not loaded
                image.hide();
                guiHelpers.setContextMenuZIndex(image);
                image.attr('alt', this.get('controller.model.Title'));
                image.error(function() {
                        $(this).remove();
                    })
                    .click(function() {
                        guiHelpers.animatePictureFullsize(image, true);
                    })
                    .load(function() {
                        image.show();
                        icon.remove();
                    });
                image.appendTo(pictureDiv);
                keyboard.registerShortcut('Ctrl+I', image);
            }

            // load detail dialog widget
            $('.overlayDialog').detailDialog({
                context: dataClassId,
                dataKey: dataKey,
                closed: function() {
                    $('#divSearch').eventosearch('refreshAfterDialogClosed');
                },
                backClicked: function(context, dataKey) {
                    that.get('controller').transitionToRoute('dialogGroup', context, dataKey);
                }
            });

            try {
                // button down
                $('.overlayDialog').detailDialog('addButton', $('#divSearch').eventosearch('getButtonUp'));

                // button up
                $('.overlayDialog').detailDialog('addButton', $('#divSearch').eventosearch('getButtonDown'));
            } catch (ex) {
                // only happens when button cannot be added
            }
        },

        destroyWidgets: function() {
            $('.overlayDialog').detailDialog('destroy');
        },

        dialogResize: function (deltaX, deltaY) {
            $('.overlayDialog').detailDialog('resize', deltaX, deltaY);
            var list = $('.dialogList');
            if (list.children().length > 0) {
                $('.dialogList').eventosearch('resize', deltaX, deltaY);
            }
        }
    });

    app.DialogView = framework.WidgetView.extend({
        loadWidgetsRepeat: function () {
            var that = this;
            var definition = this.get('controller.model.ListDefinition');
            if (definition) {
                var list = this.get('controller.model.List');
                var pkColumns = this.get('controller.model.ListPkColumns');
                $('.dialogList').eventosearch({
                    isOfflineMode: true,
                    fixedHeight: $('.dialogBody').height(),
                    showToolbar: false,
                    overlayTabindex: $('tr.dataRow').length + 100,
                    searchDefinition: definition,
                    data: list,
                    dataPkColumns: pkColumns,
                    dataClassId: this.get('controller.model.ListDefinition.DataClassId'),
                    rowChosen: function (id, dataClassId) {
                        that.get('controller').send('openDialog', id, dataClassId);
                    }
                });
            }
            // focus first control, if there is one for input
            $('.dialogBody').find('input, textarea, select').first().focus();
        },

        destroyWidgetsRepeat: function () {
            if ($('.dialogList').children().length > 0) {
                $('.dialogList').eventosearch('destroy');
            }
        }
    });

    app.CommentaryView = framework.WidgetView.extend({
        loadWidgetsRepeat: function () {
            var that = this;
            $('#txtCommentary').focus();
            // make sure that "enter" is not used as a shortcut
            keyboard.unregisterShortcuts('Enter');
            // register keyboard save shortcuts
            keyboard.registerShortcut('Ctrl+S', $('#btnSaveCommentary'));
            keyboard.registerShortcut('Ctrl+Enter', null, function () {
                that.get('controller').send('postCommentary');
            });
        }
    });

    app.PersonView = framework.OverlayView.extend({

        attributeBindings: ['style'],
        isPrintMode: urlHelpers.getUrlParameter('Print') === 'true',

        baseTransition: function() {
            this.get('controller').transitionToRoute('persons');
        },

        loadWidgets: function () {
            var that = this;
            this._super();

            if (this.isPrintMode) {
                $('#txtCommentary').hide();
                $('#divAddCommentaryTitle').hide();
                $('#divCommentaryTitle').show();
            }

            keyboard.registerShortcut('Ctrl+S', $('#btnSaveCommentary'));

            if ($('#divSearch .searchTable').length !== 0) {
                // button down
                var buttonUp = $('#divSearch').eventosearch('getButtonUp');
                buttonUp.appendTo('.dialogTitle');

                // button up
                var buttonDown = $('#divSearch').eventosearch('getButtonDown');
                buttonDown.appendTo('.dialogTitle');
            }

            $(document).on('EnterPressed', function () {
                if (keyboard.ctrl)
                    that.get('controller').send('postCommentary');
            });
        },

        printMode: function () {
            var win = window.open(urlHelpers.addUrlParam('Print', 'true'), '_blank');
            win.focus();
        }
    });

    app.PersonsLoadingView = framework.OverlayView.extend();
});


