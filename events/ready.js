const chalk = require("chalk")
const config = require("../config.json")
module.exports = (client) => {
    console.log(chalk.magenta(`Bot by Julioju#1015 | Mon préfix est: ${config.prefix}`));
  }