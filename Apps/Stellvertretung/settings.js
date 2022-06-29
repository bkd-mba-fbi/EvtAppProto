// Rename this file to settings.js and adjust the settings

window.stellvertretung = window.stellvertretung || {};

window.stellvertretung.settings = {
  /**
   * General settings
   */
  // API base URL (without trailing slash)
  apiUrl: window.schoolApp.appsettings.AppConfiguration.RestUrl,
  oAuthUrl: window.schoolApp.appsettings.AppConfiguration.OAuthUrl,
  oAuthRedirectUrl: window.schoolApp.appsettings.AppConfiguration.RedirectUrl,
  clientId: window.schoolApp.appsettings.AppConfiguration.ClientId,
  appScope: 'Tutoring',
  instanceId: getInstance(),

  // Path (without trailing slash, relative to the index.html) to the
  // JavaScript bundles and the assets directory containing image and
  // locale files
  scriptsAndAssetsPath: './Apps/Stellvertretung',
};
