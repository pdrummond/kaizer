Package.describe({
  name: 'kaizer:core',
  version: '0.0.1',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');  
  api.use(['meteor-platform']);
  api.addFiles('kaizer-core.js');
  api.addFiles('hub-pages.js');
  
  api.addFiles([
    'collections/hub-collection.js',
    ], ['client', 'server']);

  api.addFiles([
    'client/components/hub-page/hub-page.html',
    'client/components/hub-page/hub-page.js',
    ], 'client');

  api.export(['Kaizer', 'Hubs']);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('kaizer-core');
  api.addFiles('kaizer-core-tests.js');  
});
