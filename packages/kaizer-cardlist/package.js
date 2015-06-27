Package.describe({
  name: 'kaizer:cardlist',
  version: '0.0.1',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use(['standard-app-packages', 'kaizer:core']);  
  api.addFiles([
    'src/cardlist.html', 
    'src/cardlist.js'
    ]);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('kaizer:cardlist');
  api.addFiles('test/cardlist-tests.js');
});
