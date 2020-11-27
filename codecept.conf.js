const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './steps/*_test.js',
  output: './output',
  helpers: {
    Appium: {
      platform: 'Android',
      app: 'C:\\Users\\Fusion\\Documents\\Qazando\\App\\app-release.apk',
      desiredCapabilities:{
        appPackage:"com.qazandoapp",
        appActivity:"MainActivity",
        deviceName:"pixel",
        plataformVersion:"9"
      }
    }
  },
  include: {
    I: './steps_file.js',
    login_page: './pages/login_page.js',
    home_page: './pages/home_page.js'
  },
  bootstrap: './server.js',
  teardown:'./server.js',
  mocha: {},
  name: 'Mobile-Test-Automation-CodeceptJS-Appium',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}