/* переконвертити це все з html  */

// let Celsies = Number(prompt(`enter degrees in celsius`));
// let Fahrenheit = (Celsies * 1.8) + 32;

// console.log(`${Celsies} in fahrenheit : ${Fahrenheit}`);

///

/* додати можливітсь 30-31 день
 */

// let daysInMonth = 30;

// let hours = daysInMonth * 24;
// let minutes = hours * 60;

// console.log(`quantity of ${hours} in 30 days, quantity of ${minutes} in 30 days`);

///
/* залежно від натискання кнопок по бокам від числа воно або + або - */

///
/* дати можливість ввести суму та додати можливість порахувати зі знижкою  */

///
/* обьєднати задачі з 5 по 9 в поля з кнопочками і можливістю операцій над числами як міні калькулятор */



function temperature() {
    let userCelcies = document.getElementById("temperature-input-first");
    let value = document.getElementById("temperature-select").value;
        
        switch (value) {
            case `kelvins`:
                let convertToKelvin = Number(userCelcies.value) + 273;
                document.getElementById("temperature-input-sec").value = convertToKelvin;
                break;
            default:
                let convertToFarenheight = (Number(userCelcies.value) * 1.8) + 32;
                document.getElementById("temperature-input-sec").value = convertToFarenheight;
            break;
        }
}

let tempBtn = document.getElementById("temperature-btn");
tempBtn.addEventListener("click", temperature);


///


function time() {
    let userCelcies = document.getElementById("time-input-first");
    let value = document.getElementById("time-select").value;
        
        switch (value) {
            case `Minutes`:
                let convertMinutes = Number(userCelcies.value) * 24 * 60;
                document.getElementById("time-input-sec").value = convertMinutes;
            break;
            case `Seconds`:
                let convertSeconds = Number(userCelcies.value) * 24 * 60 * 60;
                document.getElementById("time-input-sec").value = convertSeconds;
            break;
            default:
                let convertHours = Number(userCelcies.value) * 24;
                document.getElementById("time-input-sec").value = convertHours;
            break;
        }
}

let timeBtn = document.getElementById("time-btn");
timeBtn.addEventListener("click", time);


///


let resizeableElemenFirst = document.getElementById("game-div-first");
let resizeableElementSec = document.getElementById("game-div-sec");

function decrementSizeFirst() {
    let currentWidth = resizeableElemenFirst.offsetWidth;
    let newWidth = currentWidth - 30;
    resizeableElemenFirst.style.width = newWidth + `px`;
}

function incrementSizeFirst() {
    let currentWidth = resizeableElemenFirst.offsetWidth;
    if (currentWidth <= 386) {
        let newWidth = currentWidth + 30;
        resizeableElemenFirst.style.width = newWidth + `px`;
    }
}

function decrementSizeSec() {
    let currentWidth = resizeableElementSec.offsetWidth;
    let newWidth = currentWidth - 30;
    resizeableElementSec.style.width = newWidth + `px`;
}

function incrementSizeSec() {
    let currentWidth = resizeableElementSec.offsetWidth;
    if (currentWidth <= 386) {
        let newWidth = currentWidth + 30;
        resizeableElementSec.style.width = newWidth + `px`;
    }
}

let btnFirst = document.getElementById("game-btn-first");
let btnSec = document.getElementById("game-btn-sec");
let btnThird = document.getElementById("game-btn-third");
let btnFourth = document.getElementById("game-btn-fourth");
btnThird.addEventListener("click", decrementSizeSec);
btnFourth.addEventListener("click", incrementSizeSec);
btnFirst.addEventListener("click", decrementSizeFirst);
btnSec.addEventListener("click", incrementSizeFirst);


///


let btnChiken = document.getElementById("shop-btn-first");
let btnBread = document.getElementById("shop-btn-sec");
let btnLemon = document.getElementById("shop-btn-third");
let btnCoockie = document.getElementById("shop-btn-fourth");
let btnBeer = document.getElementById("shop-btn-fifth");
let btnAvocado = document.getElementById("shop-btn-sixth");
let btnPizza = document.getElementById("shop-btn-seventh");
let btnBanana = document.getElementById("shop-btn-eighth");
let btnCount = document.getElementById("shop-btn-count");
let Sale = document.getElementById("shop-desc");

let chekBox = document.getElementById("shop-input");

let total = 0;

let ChikenPrice = 30;
let BreadPrice = 20;
let LemonPrice = 10;
let CoockiePrice = 25;
let BeerPrice = 50;
let AvocadoPrice = 45;
let PizzaPrice = 35;
let BananaPrice = 20;

function TotalPrice(price) {
    total += price;
    document.getElementById("shop-price").textContent = total;

    if (total <= 100) {
        Sale.textContent = `Sale 10%`;
    } else if (total <= 200) {
        Sale.textContent = `Sale 20%`;
    } else if (total >= 200) {
        Sale.textContent = `Sale 30%`;
    }
}

function CountSell() {
    document.getElementById("shop-price").textContent = total;
    if (chekBox.checked && total <= 100) {
        total *= 0.1;
    } else if (chekBox.checked && total >= 150) {
        total *= 0.2;
    } else if (chekBox.checked && total >= 200) {
        total *= 0.3;
    }

    document.getElementById("shop-price").textContent = total;
}

btnChiken.addEventListener("click", function() {
    TotalPrice(ChikenPrice);
});

btnBread.addEventListener("click", function() {
    TotalPrice(BreadPrice);
});

btnLemon.addEventListener("click", function() {
    TotalPrice(LemonPrice);
});

btnCoockie.addEventListener("click", function() {
    TotalPrice(CoockiePrice);
});

btnBeer.addEventListener("click", function() {
    TotalPrice(BeerPrice);
});

btnAvocado.addEventListener("click", function() {
    TotalPrice(AvocadoPrice);
});

btnPizza.addEventListener("click", function() {
    TotalPrice(PizzaPrice);
});

btnBanana.addEventListener("click", function () {
    TotalPrice(BananaPrice)
});

document.getElementById("shop-btn-count").addEventListener("click", function() {
    CountSell();
});


///


let btnOne = document.getElementById("calc-btn-first");
let btnTwo = document.getElementById("calc-btn-sec");
let btnThree = document.getElementById("calc-btn-third");
let btnFour = document.getElementById("calc-btn-fourth");
let btnFive = document.getElementById("calc-btn-fifth");
let btnSix = document.getElementById("calc-btn-sixth");
let btnSeven = document.getElementById("calc-btn-seventh");
let btnEight = document.getElementById("calc-btn-eighth");
let btnNine = document.getElementById("calc-btn-nineth");
let btnPlus = document.getElementById("calc-btn-plus");
let btnMinus = document.getElementById("calc-btn-minus");
let btnSqr = document.getElementById("calc-btn-sqr");
let btnDiving = document.getElementById("calc-btn-diving");
let btnMultiply = document.getElementById("calc-btn-multyply");
let btnDecrimal = document.getElementById("calc-btn-decrimal");
let btnEnter = document.getElementById("calc-btn-enter");
let btnRound = document.getElementById("calc-btn-round");
let btnString = document.getElementById("calc-btn-string");
let btnC = document.getElementById("calc-btn-C");

let sqr = "√"


function Calculate(value) {
    let desc = document.getElementById("calc-desc");
    desc.textContent += value;
}


function CalculateSqrt(value) {
    document.getElementById("calc-desc").textContent += value;

}

function CalculateRound() {
    let desc = document.getElementById("calc-desc").textContent;
    let res;

    res = parseInt(desc);
    document.getElementById("calc-desc").textContent = res;
}

function CalculateDecrimal() {
    let desc = document.getElementById("calc-desc").textContent;
    let res;

    res = Number(desc).toFixed(1);
    document.getElementById("calc-desc").textContent = res;
}

function ConverToString() {
    let desc = document.getElementById("calc-desc").textContent;
    alert("Open the console to see.")

    console.log("It's actually a string, but I'm converting it");
    console.log("First things first, convert to Number");
    console.log(Number(desc));
    console.log("There is no point in converting it further because it is already a string, but I can convert it to a Boolean value");
    console.log(Boolean(desc));
}


function cleanString() {
    document.getElementById("calc-desc").textContent = " ";
}


function Calculation(){
    let desc = document.getElementById("calc-desc").textContent;
    let res;

    if (desc.includes("√")) {
        let desc = document.getElementById("calc-desc").textContent;

        res = Math.sqrt(desc.slice(1));
        document.getElementById("calc-desc").textContent = res;
    } else {
        res = eval(desc);
        document.getElementById("calc-desc").textContent = res;
    }

}


btnOne.addEventListener("click", function(){
    Calculate(btnOne.textContent)
});
btnTwo.addEventListener("click", function(){
    Calculate(btnTwo.textContent)
});
btnThree.addEventListener("click", function(){
    Calculate(btnThree.textContent)
});
btnFour.addEventListener("click", function(){
    Calculate(btnFour.textContent)
});
btnFive.addEventListener("click", function(){
    Calculate(btnFive.textContent)
});
btnSix.addEventListener("click", function(){
    Calculate(btnSix.textContent)
});
btnSeven.addEventListener("click", function(){
    Calculate(btnSeven.textContent)
});
btnEight.addEventListener("click", function(){
    Calculate(btnEight.textContent)
});
btnNine.addEventListener("click", function(){
    Calculate(btnNine.textContent)
});
btnPlus .addEventListener("click", function(){
    Calculate(btnPlus.textContent)
});
btnMinus.addEventListener("click", function(){
    Calculate(btnMinus.textContent)
});
btnSqr.addEventListener("click", function(){
    CalculateSqrt(sqr)
});
btnDiving.addEventListener("click", function(){
    Calculate(btnDiving.textContent)
});
btnMultiply.addEventListener("click", function(){
    Calculate(btnMultiply.textContent)
});
btnDecrimal.addEventListener("click", function(){
    CalculateDecrimal()
});
btnEnter.addEventListener("click", function(){
    Calculation()
});
btnRound.addEventListener("click", function(){
    CalculateRound()
});
btnString.addEventListener("click", function(){
    ConverToString()
});
btnC.addEventListener("click", function () {
   cleanString() 
});