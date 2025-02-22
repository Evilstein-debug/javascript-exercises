const removeFromArray = function(arr,...args) {
    let test = 1
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<args.length; j++){
            if(arr[i] == args[j] && (typeof(arr[i]) == typeof(args[j]))){
                arr.splice(i,1)
                i--
                break
            }
        }
    }
    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
// let arr = [0,1,2]
// let n = 0