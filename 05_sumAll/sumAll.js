const sumAll = function(num1, num2) {
    if(num1 > 0 && num2 > 0 && (typeof(num1) === typeof(num2)) && Number.isInteger(num1) && Number.isInteger(num2)){
        if(num1>num2){
            let sum2 = num1
            for(let i=num1-1; i>=num2; i--){
                sum2 += i
            }
            return sum2
        }
        else{
            let sum = num1
            for(let i=num1+1; i<=num2; i++){
                sum += i
            }
            return sum
        }
    }
    else return 'ERROR'


};

// Do not edit below this line
module.exports = sumAll;
