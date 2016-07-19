exports.config = {
  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
  multiCapabilities: [{
    browserName: 'chrome'
  },
  {
    browserName: 'firefox'
  }],
  specs: ['build/test/e2e/**/*.spec.js'],
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  },
  useAllAngular2AppRoots: true
}
