exports.config={

    directConnect: true,

    capabilities:{
           'browserName': 'chrome'
           // 'browserName': 'firefox'
    },

    framework:'jasmine2',

    specs:[
            // 'specs1.js',
            //'addingTwovalues.js',
            // 'multiSpecs1.js',
            'validateSymbols.js',
          ],

    jasmineNodeOpts: {
    defaultTimeoutInterval:30000
    }
}
