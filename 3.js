const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const rl = readline.createInterface({ input, output });
let counter = 0;

async function setNumber() {
    let promise = new Promise(function(resolve, reject) {
        rl.question("Введите число: ", (input) => {
            let number = input;
            rl.pause();
            return resolve(number); 
            
        });  
    });
    return await promise;
}

async function Number(num) {
    while(true) {
        let input = await setNumber();
        let answer = +input;

        counter++;

        if(isNaN(answer)) {
            console.log(`Вы ввели не число! Попытка: ${+counter}\n`);
            continue;
            // Number(num);
        }

        if(answer === num) {
            console.log(`Вы угадали число: ${num}. Попытка: ${+counter}\n`);
            return;
        }
    
        if(answer > num) {
            console.log(`Загаданное число меньше: ${answer}. Попытка: ${counter}\n`);
        } else {
            console.log(`Загаданное число больше: ${answer}. Попытка: ${counter}\n`);
        }
    }

    rl.close();
}

Number(156);