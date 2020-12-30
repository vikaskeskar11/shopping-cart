// Transform package.json such that only dependencies remains
const fs = require('fs')
const packageJson = JSON.parse(fs.readFileSync('package.json'))
const keepAttributes = ['name', 'dependencies', 'devDependencies']
for (let attribute in packageJson) {
  if (keepAttributes.indexOf(attribute) < 0) {
    delete packageJson[attribute]
  }
}
var jsonFileContent = JSON.stringify(packageJson, null, 2)
fs.writeFileSync('package-docker.json', jsonFileContent)
