Package.describe({
  name: 'kaizer:lib',
  summary: 'Kaizer libraries.',
  version: '0.0.1'  
});

Package.onUse(function (api) {

  api.versionsFrom(['METEOR@1.0']);
  
  var packages = [
    'standard-app-packages',
    'underscore',
    'accounts-ui',
    'accounts-base',
    'accounts-password',
    'accounts-twitter',
    'accounts-facebook',
    'reactive-var',
    'aldeed:simple-schema',
    'aldeed:collection2',
    'aldeed:autoform',
    'iron:router',
    'momentjs:moment',
    'fortawesome:fontawesome',
    'jparker:gravatar'
  ];

  api.use(packages);

  api.imply(packages);

  api.addFiles([
    'lib/core.js',
    //'lib/collections.js',
  ], ['client', 'server']);  

  api.export([
    'Kaizer'
  ]);

});