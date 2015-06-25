Package.describe({
  name: 'kaizer:hubpage-cardlister',
  version: '0.0.1',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use(['standard-app-packages', 'kaizer:core']);  
  api.addFiles([
    'src/hubpage-cardlister.html', 
    'src/hubpage-cardlister.js'
    ]);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('kaizer:hubpage-cardlister');
  api.addFiles('test/hubpage-cardlister-tests.js');
});
