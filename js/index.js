const numbr = [12,11,10,13,8,39,40]
const maxNumbr = arr=> {
    return Math.max.apply(null, arr);
}
const minNumbr = arr=> {
    return Math.min.apply(null, arr);
}
document.getElementById('minNumber').innerHTML = `Minmum Number is ${minNumbr(numbr)}`
document.getElementById('maxNumber').innerHTML = `Minmum Number is ${maxNumbr(numbr)}`

