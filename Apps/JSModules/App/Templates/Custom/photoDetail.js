define(['ember', 'text!htmlTemplates/Custom/PhotoDetail.html'], function (ember, photoDetailTemplate) {
    ember.TEMPLATES['photoDetail'] = ember.Handlebars.compile(photoDetailTemplate);
});