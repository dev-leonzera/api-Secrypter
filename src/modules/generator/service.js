const { stringFactory } = require("./utils");

module.exports = {
    create() {
        const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'z','à', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'X', 'Y', 'Z'];
        const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        const symbols = ['!', '@', '#', '$', '%', '&', '+', ';', '>', '<', '?', '=', '/', '|', ',', '.', '[', ']', '{', '}', '*', '_', '-'];
        var i = 0;
        var size = 20;
        var bag = [];

        for (; i <= size * 100; i++) {
            var randLetters = Math.floor(Math.random() * letters.length)
            var randNumbers = Math.floor(Math.random() * numbers.length)
            var randSymbols = Math.floor(Math.random() * symbols.length)
            var switchType = Math.floor(Math.random() * 3)

            switch (switchType) {
                case 0:
                    bag.push(letters[randLetters])
                    break;
                case 1:
                    bag.push(numbers[randNumbers]);
                    break;
                case 2:
                    bag.push(symbols[randSymbols]);
                    break;

                default:
                    break;
            }
        }

        var password = stringFactory(bag, size);

        return password;

    },
    // create(size) {
    //     const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'z','à', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'X', 'Y', 'Z'];
    //     const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    //     const symbols = ['!', '@', '#', '$', '%', '&', '+', ';', '>', '<', '?', '=', '/', '|', ',', '.', '[', ']', '{', '}', '*', '_', '-'];
    //     var i = 0;
    //     var bag = [];

    //     for (; i <= size * 100; i++) {
    //         var randLetters = Math.floor(Math.random() * letters.length)
    //         var randNumbers = Math.floor(Math.random() * numbers.length)
    //         var randSymbols = Math.floor(Math.random() * symbols.length)
    //         var switchType = Math.floor(Math.random() * 3)

    //         switch (switchType) {
    //             case 0:
    //                 bag.push(letters[randLetters])
    //                 break;
    //             case 1:
    //                 bag.push(numbers[randNumbers]);
    //                 break;
    //             case 2:
    //                 bag.push(symbols[randSymbols]);
    //                 break;

    //             default:
    //                 break;
    //         }
    //     }

    //     console.log(bag.length)

    //     var password = stringFactory(bag, size);

    //     return password;

    // },
    createReminder() { },
    listReminder() { },
    viewReminder() { }
}