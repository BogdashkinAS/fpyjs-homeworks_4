function getPasswordChecker(password) {
    return function(answer) {
        if (password === answer) {
            return true;
        }
        return false;
    }
}

const pass = getPasswordChecker('123');

console.log(pass(''));
console.log(pass('1234'));
console.log(pass('55555'));
console.log(pass('abc'));
console.log(pass('123'));