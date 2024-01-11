const numbr = [12,11,10,13,8,39,40]
const maxNumbr = arr=> {
    return Math.max.apply(null, arr);
}
const minNumbr = arr=> {
    return Math.min.apply(null, arr);
}
console.log(maxNumbr(numbr))
console.log(minNumbr(numbr))
