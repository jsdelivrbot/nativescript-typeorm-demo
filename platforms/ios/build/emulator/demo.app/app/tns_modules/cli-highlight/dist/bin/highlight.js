"use strict";
var path = require('path-browserify');
var index_1 = require('../index');
var fs = require('mz/fs');
var theme_1 = require('../theme');
var yargs = require('yargs');
yargs
    .usage([
    '',
    'Usage: highlight [options] [file]',
    '',
    'Outputs a file or STDIN input with syntax highlighting'
].join('\n'))
    .option('theme', {
    alias: 't',
    nargs: 1,
    description: 'Use a theme defined in a JSON file'
})
    .option('language', {
    alias: 'l',
    nargs: 1,
    description: 'Set the langugage explicitely. If omitted will try to auto-detect'
})
    .version(function () { return require('../../package.json').version; })
    .help('help')
    .alias('help', 'h')
    .alias('version', 'v');
var argv = yargs.argv;
var file = argv._[0];
var codePromise;
if (!file && !process.stdin.isTTY) {
    // Input from STDIN
    process.stdin.setEncoding('utf8');
    var code_1 = '';
    process.stdin.on('readable', function () {
        var chunk = process.stdin.read();
        if (chunk !== null) {
            code_1 += chunk;
        }
    });
    codePromise = new Promise(function (resolve) {
        process.stdin.on('end', function () {
            resolve(code_1);
        });
    });
}
else if (file) {
    // Read file
    codePromise = fs.readFile(file, 'utf-8');
}
else {
    yargs.showHelp();
    process.exit(1);
}
Promise.all([
    codePromise,
    argv.theme ? fs.readFile(argv.theme, 'utf8') : Promise.resolve()
]).then(function (_a) {
    var code = _a[0], theme = _a[1];
    var options = {
        ignoreIllegals: true,
        theme: theme && theme_1.parse(theme)
    };
    if (file) {
        var ext = path.extname(file).substr(1);
        if (ext && index_1.supportsLanguage(ext)) {
            options.language = ext;
        }
    }
    options.language = argv.language;
    process.stdout.write(index_1.highlight(code, options));
}).then(function () {
    process.exit(0);
}).catch(function (err) {
    console.error(err);
    process.exit(1);
});
//# sourceMappingURL=highlight.js.map