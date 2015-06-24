Package.describe({
  name: 'kaizer:lib',
  summary: 'Kaizer libraries.',
  version: '0.0.1'  
});

Package.onUse(function (api) {

  api.versionsFrom(['METEOR@1.0']);
  
  var packages = [
    'standard-app-packages',
    'accounts-ui',
    'accounts-base',
    'accounts-password',
    'accounts-twitter',
    'accounts-facebook',
    'reactive-var',
    'aldeed:simple-schema@1.3.3',
    'aldeed:collection2@2.3.3',
    'sacha:autoform@5.1.2',
    'iron:router@1.0.9',
    'chuangbo:marked@0.3.5',
    'momentjs:moment@2.10.3',
    'fortawesome:fontawesome@4.3.0',
    'jparker:gravatar@0.3.1'
  ];

  api.use(packages);

  api.imply(packages);

  api.addFiles([
    'lib/core.js',
    //'lib/collections.js',
  ], ['client', 'server']);  

  api.export([
    'Kaizer',
    '_',
    'getTemplate',
    'templates'
  ]);

});