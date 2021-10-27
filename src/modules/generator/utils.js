module.exports = {    
    stringFactory(array, len){
        const stringArray = [];
        var found = false;
        for(i=0;i<len;i++){
            found = stringArray.includes(array[i]);
            if(!found){
                stringArray.push(array[i]);
            }
        }
        const str = stringArray.toString().split(',').join("")
        return str;
    }
}