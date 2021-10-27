module.exports = {
    create(size) {
        const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'X', 'Y', 'Z'];
        const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        const symbols = ['!', '@', '#', '$', '%', '&'];        
        const password = [];
        var i = 0;
        var found = false;

        while (i <= size) {
            const randLetters = Math.floor(Math.random() * letters.length)
            const randNumbers = Math.floor(Math.random() * numbers.length)
            const randSymbols = Math.floor(Math.random() * symbols.length)
            //
            const switchType = Math.floor(Math.random() * 3)

            switch (switchType) {
                case 0:
                    found = password.includes(letters[randLetters]);
                    if (!found) {
                        password.push(letters[randLetters]);
                    }
                    break;
                case 1:
                    found = password.includes(numbers[randNumbers]);
                    if (!found) {
                        password.push(numbers[randNumbers]);
                    }
                    break;
                case 2:
                    found = password.includes(symbols[randSymbols]);
                    if (!found) {
                        password.push(symbols[randSymbols]);
                    }
                    break;

                default:
                    break;
            }
            i++;
        }
        const temp = password.toString();
        const finalPass = temp.split(',').join("");
        return finalPass;
    },
    createReminder() { },
    listReminder() { },
    viewReminder() { }
}