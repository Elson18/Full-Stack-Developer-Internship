function bmical(w,h){
    let d=w/(h*h)
    return Math.round(d)
}

var bmi=bmical(65,1.8)
console.log(bmi)