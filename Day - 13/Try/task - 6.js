function bmical(w,h){
    let d=w/(h*h)
    if (d<18.50){
        return "Your BMI is "+d+" so you have under weight"
    }
    else if(d>=18.50 && d<=24.90){
         return "Your BMI is "+d+" so you have normal weight"
    }
    else{
        return "Your BMI is "+d+" so you have over weight"
    }
}

var bmi=bmical(65,1.8)
console.log(bmi)