const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Appium: {
      platform: 'Android',
      app: 'C:\\Users\\n.camara.silva\\Documents\\GitHub\\Mobile-Test-Automation-CodeceptJS-Appium\\app-release.apk',
      desiredCapabilities:{
        appPackage:"com.qazandoapp",
        appActivity:"MainActivity",
        deviceName:"pixel",
        plataformVersion:"9"
      }
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
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