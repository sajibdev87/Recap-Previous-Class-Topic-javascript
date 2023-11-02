const wevsite = "eShikon.com";
wevsite="pant";
console.log(wevsite);

let numbers = ['sajib','shakib',433,'kobir'];
numbers.push("salam")
numbers.pop("salam")
numbers.unshift("sadek")
numbers.shift("sarop")
console.log(numbers.indexOf('salam'));

var number = '34.8 ';
numbers=parseInt(numbers)
console.log(numbers);




let student = {
    name:'sajib',
    adderss:'dhaka',
    id:13,
    dress:'red',
}
student['sajib']='salam'
student.adderss = 'cumilla'
console.log(student);

var change = 0;
while(change < 5) {
    console.log('change hoica');
    change++
}

var oilGiven = 0;
while (oilGiven < 7){
    console.log('oil paic');
    oilGiven ++ 
}

for (let i = 0; i <= 10; i++){
    i++
    console.log('i');
}

function addToNumber(one,tow){
    const total = one + tow;
    return total
}
const result1=addToNumber(34,554)
console.log(result);

function inchToFeet(inch){
    const feetResult = inch /12
    return feetResult
}
 var result=inchToFeet(120)
 console.log(result);


function isLeepYear(year){
    if (year % 4 ==0) {
        console.log('this year is leep year');
    }
    else{
        console.log('this year is not leep year');
    }
}

isLeepYear(2024)

    function isLeepYear(year){
     year % 4 ==0 
        console.log('this year is leep year');
    
    }
    isLeepYear(2024)

    function milesToKilometer(miles){
        const kilometers = miles*1.60934
        return parseInt(kilometers);
    }
    var result =milesToKilometer(50)
    console.log(result);

    function milesToKilometer(miles){
        const kilometers = miles*1.60934
        return kilometers
    }
    var result =milesToKilometer(50)
    console.log (parseInt(result));


    function isEven(num) {
        if(num == 0) {
            return 'please provide more then 0'

        }
        else if(num % 2 == 0){
            return 'this is Even numver'
        }
    
        else{
            return 'this is not even number'
        }
    }
    var result3 = isEven(0)
    console.log (result);


    function isOdd(num) {
        if(num == 0) {
            return 'please provide more then 0'

        }
        else if(num % 2 == 1){
            return 'this is Even numver'
        }
    
        else{
            return 'this is not even number'
        }
    }
    var result = isEven(1)
    console.log (result);

function parshoMonkotoKg (mon) {
    var monResult = 40*mon
    return monResult
}
let result4 = parshoMonkotoKg(500)
console.log (result4);


function celsiusToFarhenhite (celsius){
    let celsiusResult = celsius*1.8;
    let celsiusi =celsiusResult+32;
    return celsiusi
}
 const result = celsiusToFarhenhite(33)
 console.log(result);
