var fs = require('fs');

var Generator = module.exports = function() {
  var package = require(this.sourceRoot() + '/package.json');
  var prompts = [];
  var files   = this.expandFiles('**/*', { cwd: this.sourceRoot(), dot: true });
  var ignores = [
    '.git',
    'LICENSE',
    'README.md',
  ];

  this.log.writeln('Generating from ' + 'Genesis Skeleton'.cyan + ' v' + package.version.cyan + '...');

  files.forEach(function(file) {
    if (ignores.indexOf(file) !== -1) {
      return;
    }

    this.copy(file, file);
  }, this);
};

Generator.name = "Genesis Skeleton";
