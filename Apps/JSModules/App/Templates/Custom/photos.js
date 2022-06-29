define(['ember', 'text!htmlTemplates/Custom/Photos.html'], function (ember, photosTemplate) {
    ember.TEMPLATES['photos'] = ember.Handlebars.compile(photosTemplate);
});