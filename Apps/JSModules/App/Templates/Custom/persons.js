define(['ember', 'text!htmlTemplates/Custom/Persons.html'], function (ember, competenceTemplate) {
    ember.TEMPLATES['persons'] = ember.Handlebars.compile(competenceTemplate);
});