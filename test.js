import ConsoleAlert from './index.js'
var pkgs = ["inquirer", "boxen", "chalk"]
var alert = new ConsoleAlert(`Sucessfully Installed NPM modules ${pkgs}`, "alert")

alert.show()