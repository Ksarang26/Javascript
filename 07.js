function checkYearIsLeapYear(num){
    if(num%4 == 0 && num % 100 !== 0 || num % 400 ===0){
        return "It is a leap";

    }
    else{
        return "Not a leap year";
    }
}
console.log(checkYearIsLeapYear(1500))