// Home work 1: 
 
// NORMAL 
// Task 1. 
    let x = 20; 
    let y = 58; 
    let z = 42; 
    console.log(x+y+z); 
 
// Task 2. 
    const sec = 60; 
    const min = 60; 
    const hour = 24; 
    const year = 365; 
    let MyAge = 24; 
    MyAgeInSecond=MyAge*year*hour*min*sec; 
    console.log(MyAgeInSecond); 
 
// Task 3.
    let count = 42; 
    count=String(count); 
    let userName = '42'; 
    userName=Number(userName); 
    console.log(count, userName);

// Task 4.
    let a = 1;
    a=String(a);
    let b = 2;
    b=String(b);
    let c = "белых медведей";
    console.log(a+b+" "+c);

// Task 5. 
    let a= 'доступ'; 
    let b= 'морпех'; 
    let c= 'наледь'; 
    let d= 'попрек'; 
    let e= 'рубило'; 
    let lengthWords=a+b+c+d+e;
    console.log(lengthWords.length);

// Task 6. 
    let a = {"nameCar" : "BMW", "isCar": true, "engineVolume": 5.0}; 
    let listOfKeys = Object.keys(a);  
    console.log(`Variable: ${listOfKeys[0]} have type: ${typeof(a[(listOfKeys[0])])}`); 
    console.log(`Variable: ${listOfKeys[1]} have type: ${typeof(a[(listOfKeys[1])])}`); 
    console.log(`Variable: ${listOfKeys[2]} have type: ${typeof(a[(listOfKeys[2])])}`); 


// Task 7.
    let name = prompt(`Как тебя зовут?`);
    let age =prompt('Сколько тебе лет?');
    console.log(name,age);

// ADVANCED

// Task 1.  

    let a = 3, b = 4; 
    [a, b] = [b, a]; 
    console.log(a, b);

// Task 2. 
    let codeWord1 = "обернись"; 
    let codeWord2 = "неужели"; 
    let codeWord3 = "огурцы"; 
    let codeWord4 = "липкие"; 
    let codeWord5 = "?!"; 
    console.log(codeWord1[1]+codeWord2[1]+codeWord3[1]+codeWord4[1]+codeWord5[1]);
    