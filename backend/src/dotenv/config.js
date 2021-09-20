(function () {
  var options = {};
  process.argv.forEach(function (val) {
    var matches = /^dotenv_config_(.+)=(.+)/.exec(val);
    if (matches) {
      options[matches[1]] = matches[2];
    }
  });

  // eslint-disable-next-line @typescript-eslint/no-var-requires
  require('.').default.config(options);
})();
