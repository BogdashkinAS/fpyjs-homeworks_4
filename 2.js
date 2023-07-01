const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const rl = readline.createInterface({ input, output });
let counter = 0;

function Number(num) {
    rl.question('Ведите число: ', (input) => {
        let answer = +input;

        counter++;

        if(isNaN(answer)) {
            console.log(`Вы ввели не число! Попытка: ${+counter}\n`);
            Number(num);
        }
    
        else if(answer === num) {
            console.log(`Вы угадали число: ${num}. Попытка: ${+counter}\n`);
            rl.close();
            return;
        }
    
        else if(answer > num) {
            console.log(`Загаданное число меньше: ${answer}. Попытка: ${counter}\n`);
        } else {
            console.log(`Загаданное число больше: ${answer}. Попытка: ${counter}\n`);
        }
    
        rl.pause();
        Number(156);
    });
}


Number(156);