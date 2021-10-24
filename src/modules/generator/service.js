module.exports = {
    create(size){
        
        const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'z'];
        const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        const symbols = ['!', '@', '#', '$', '%', '&'];
        const password = [];

        for(i=0; i < 20; i++){
            const randLetters = Math.floor(Math.random() * letters.length)
            const randNumbers = Math.floor(Math.random() * numbers.length)
            const randSymbols = Math.floor(Math.random() * symbols.length)
            //
            const switchType = Math.floor(Math.random() * 3)
            
            if(switchType === 0){
                let found = password.includes(letters[randLetters]);
                if(!found){
                    password.push(letters[randLetters]);
                }
            } else if (switchType === 1) {
                let found = password.includes(numbers[randNumbers]);
                if(!found){
                    password.push(numbers[randNumbers]);
                }
            } else if (switchType === 2){
                let found = password.includes(symbols[randSymbols]);
                if(!found){
                    password.push(symbols[randSymbols]);
                }
            }
        }
        const temp = password.toString();
        const finalPass = temp.split(',').join("");
        return finalPass;
    }
}