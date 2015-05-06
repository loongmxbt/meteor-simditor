Package.describe({
  name: 'loongmxbt:simditor',
  version: '0.0.1',
  summary: 'Simditor package for Meteor',
  git: 'https://github.com/loongmxbt/meteor-simditor.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use(['templating', 'jquery']);

  api.addFiles('styles/simditor.css', 'client');

  api.addFiles(['scripts/module.js', 
                'scripts/hotkeys.js', 
                'scripts/uploader.js', 
                'scripts/simditor.js'
                ], 'client');

  api.addFiles(['simditor.html',
                'simditor.js'
                ], 'client');

});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('loongmxbt:simditor');
  api.addFiles('simditor-tests.js');
});
