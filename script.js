window.onload = function () {
    showGreetingAlert();
};

function showGreetingAlert() {

    let hour = new Date().getHours();
    let msg = "";

    if(hour < 12){
        msg = "Good Morning ☀️";
    }
    else if(hour < 17){
        msg = "Good Afternoon 🌤️";
    }
    else if(hour < 21){
        msg = "Good Evening 🌇";
    }
    else{
        msg = "Good Night 🌙";
    }

    alert(msg + " Welcome!");
}

function updateClock(){

    const now = new Date();

    document.getElementById("clock").innerHTML =
        now.toLocaleTimeString();

    const hr = now.getHours();

    let greet = "";

    if(hr < 12){
        greet = "Good Morning ☀️";
    }
    else if(hr < 17){
        greet = "Good Afternoon 🌤️";
    }
    else if(hr < 21){
        greet = "Good Evening 🌇";
    }
    else{
        greet = "Good Night 🌙";
    }

    document.getElementById("greeting").innerHTML = greet;
}

setInterval(updateClock,1000);
updateClock();

let clicks = 0;

function changeColor(){

    const colors = [
    "#FF6B6B",
    "#4ECDC4",
    "#45B7D1",
    "#96CEB4",
    "#FFEAA7",
    "#D980FA",
    "#FD79A8",
    "#00CEC9",
    "#0984E3",
    "#6C5CE7",
    "#00B894",
    "#E17055",
    "#FDCB6E",
    "#74B9FF",
    "#A29BFE"
    ];

    const color =
        colors[Math.floor(Math.random()*colors.length)];

    document.getElementById("colorBtn")
        .style.backgroundColor = color;

    document.getElementById("colorCode")
        .innerText = color;

    clicks++;

    document.getElementById("clickCount")
        .innerText = clicks;
}

function calculate(operator){

const num1 =
    parseFloat(document.getElementById("num1").value);

const num2 =
    parseFloat(document.getElementById("num2").value);

if(isNaN(num1) || isNaN(num2)){
    alert("Please enter valid numbers");
    return;
}

let result;

switch(operator){

    case "+":
        result = num1 + num2;
        break;

    case "-":
        result = num1 - num2;
        break;

    case "*":
        result = num1 * num2;
        break;

    case "/":

        if(num2 === 0){
            alert("Cannot divide by zero");
            return;
        }

        result = num1 / num2;
        break;
}

const formattedResult =
    parseFloat(result.toFixed(5));

document.getElementById("result")
    .innerHTML = `Result: ${formattedResult}`;

const li =
    document.createElement("li");

li.innerText =
    `${num1} ${operator} ${num2} = ${formattedResult}`;

document.getElementById("history")
    .prepend(li);

}
