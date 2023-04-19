import boxen from 'boxen';
import chalk from 'chalk';
import inquirer from 'inquirer';
//license: MIT, Made by: Justice.
class ConsoleAlert {
    constructor(text, title) {
        this.text = text
        this.title = title
    }

    show() {
        console.log(boxen('\n'+this.text+'\n', { title: chalk.green(this.title), titleAlignment: 'center' }))
    }
}

export default ConsoleAlert