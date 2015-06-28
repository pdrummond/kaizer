Package.describe({
  name: 'kaizer:hublist',
  version: '0.0.1',  
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use(['meteor-platform', 'kaizer:core']);
  api.addFiles(['kaizer-hublist.html', 'kaizer-hublist.js'], 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('kaizer:hublist');
  api.addFiles('kaizer-hublist-tests.js');
});
