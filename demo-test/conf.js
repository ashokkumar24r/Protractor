// conf.js
exports.config = {
    framework: 'jasmine',
    directConnect: true,
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec.js'],

    // Options to be passed to Jasmine.
   jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    }
};