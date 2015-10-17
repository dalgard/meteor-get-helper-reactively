Package.describe({
  name: "nordlys:get-helper-reactively",
  version: "0.1.0",
  summary: "Blaze extension for getting and setting template helpers reactively",
  git: "https://github.com/nordlys/meteor-get-helper-reactively",
  documentation: "README.md"
});

Package.onUse(function (api) {
  api.versionsFrom("METEOR@1.2.0.2");

  api.use([
    "ecmascript",
    "blaze",
    "tracker",
    "stevezhu:lodash@3.10.1"
  ], "client");

  api.addFiles("lib/get-helper-reactively.js", "client");
});

// Package.onTest(function (api) {
//   api.versionsFrom("METEOR@1.2.0.2");

//   api.use([
//     "blaze-html-templates",
//     "tinytest"
//   ]);

//   api.use([
//     "blaze",
//     "nordlys:get-helper-reactively@0.1.0"
//   ], "client");

//   api.addFiles([
//     "tests/test.html",
//     "tests/test.js"
//   ], "client");
// });
