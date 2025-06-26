Package.describe({
  name    : "sylido:reactive-field",
  summary : "Reactive field for Meteor",
  version : "0.7.0",
  git     : "https://github.com/sylido/meteor-reactive-field.git"
});

Package.onUse(function (api) {
  api.versionsFrom("METEOR@3.2.2");

  // Core dependencies.
  api.use([
    "ecmascript@0.16.10",
    "tracker@1.3.4",
    "reactive-var@1.0.13",
    "underscore@1.6.4"
  ]);

  api.export("ReactiveField");

  api.mainModule("lib.js");
});

Package.onTest(function (api) {
  api.versionsFrom("METEOR@3.2.2");

  // Core dependencies.
  api.use([
    "coffeescript@2.4.1",
    "ecmascript",
    "tracker@1.3.4",
    "templating@1.3.2",
    "blaze@3.0.2",
    "spacebars@1.0.15",
    "underscore@1.6.4"
  ]);

  // Internal dependencies.
  api.use([
    "sylido:reactive-field"
  ]);

  // 3rd party dependencies.
  api.use([
    "sylido:classy-test@0.4.0"
  ]);

  api.addFiles([
    "tests.coffee"
  ]);

  api.addFiles([
    "tests_client.html",
    "tests_client.coffee"
  ], "client");
});
