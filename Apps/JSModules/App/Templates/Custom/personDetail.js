define(['ember', 'text!htmlTemplates/Custom/PersonDetail.html'], function (ember, competenceTemplate) {
    ember.TEMPLATES['personDetail'] = ember.Handlebars.compile(competenceTemplate);
});