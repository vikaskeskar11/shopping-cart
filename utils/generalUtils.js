class GeneralUtils {
  isDevEnv () {
    return process.env.NODE_ENV === 'development'
  }

  isNullOrEmpty (string) {
    return !!(string === '' || string === null || string === undefined)
  }
}

module.exports = new GeneralUtils()
