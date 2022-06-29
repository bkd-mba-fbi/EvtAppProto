define(['ember', 'text!htmlTemplates/Custom/PhotoDetail-loading.html'], function (ember, photoDetailLoadingTemplate) {
    ember.TEMPLATES['photos/loading'] = ember.Handlebars.compile(photoDetailLoadingTemplate);
});