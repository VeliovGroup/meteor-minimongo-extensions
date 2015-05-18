Package.describe({
  name: 'ostrio:minimongo-extensions',
  version: '1.0.0',
  summary: 'Useful mongo extensions for Meteor',
  git: 'https://github.com/VeliovGroup/meteor-minimongo-extensions.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1');
  api.addFiles('minimongo-extensions.js');
});
