Npm.depends({
    'googleapis': '0.4.5'
});


Package.describe({
    summary: "Test package to show the demeteorizer bug"
});


Package.on_use(function (api, where) {
  api.add_files('test.js', 'server')

});

