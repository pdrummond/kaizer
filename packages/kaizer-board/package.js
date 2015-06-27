Package.describe({
  name: 'kaizer:board',
  version: '0.0.1',  
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use(['standard-app-packages', 'kaizer:core']);  
  api.addFiles(['kaizer-board.html', 'kaizer-board.js']);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('kaizer-board');
  api.addFiles('kaizer-board-tests.js');
});
