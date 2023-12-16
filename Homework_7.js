function outer(a) {
    let sum = a
    return function inner(b){
        return sum += a + b
    }
}

const zeroPoint = outer(0);
console.log(zeroPoint(3));
console.log(zeroPoint(5));
console.log(zeroPoint(20));