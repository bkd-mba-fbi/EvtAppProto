define(['ember', 'text!htmlTemplates/competence.html'], function (ember, competenceTemplate) {
    ember.TEMPLATES['competence'] = ember.Handlebars.compile(competenceTemplate);
});