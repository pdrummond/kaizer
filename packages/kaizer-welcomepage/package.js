Package.describe({
  name: 'kaizer:welcomepage',
  version: '0.0.1',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use(['standard-app-packages', 'kaizer:core']);
  api.addFiles([
    'kaizer-welcomepage.html', 
    'kaizer-welcomepage.js'
  ]);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('kaizer:welcomepage');
  api.addFiles('kaizer-welcomepage.js');
});
