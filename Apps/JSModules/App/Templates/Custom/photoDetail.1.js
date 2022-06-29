define(['ember', 'text!htmlTemplates/Custom/PhotoDetail-loading.html'], function (ember, photoDetailLoadingTemplate) {
    ember.TEMPLATES['photoDetail-loading'] = ember.Handlebars.compile(photoDetailLoadingTemplate);
});