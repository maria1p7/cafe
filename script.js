
let coffeeB = document.querySelector(".coffee-first")
let teaB = document.querySelector(".tea-first")
let dessertB = document.querySelector(".dessert-first")
let coffee = document.querySelector(".coffee-all")
let tea = document.querySelector(".tea-all")
let dessert = document.querySelector(".dessert-all")
let cards = document.querySelectorAll(".border-cards")
let modulWrapper = document.querySelector(".module-wrapper")

let closeButton = document.querySelector(".btn-close")
let s = document.querySelector(".s")
let m = document.querySelector(".m")
let l = document.querySelector(".l")
let additionSum = document.querySelectorAll(".add")






let moduleHeading = document.querySelector(".name")
let moduleDesc = document.querySelector(".description")
let moduleImg = document.querySelector(".picture")
let moduleResultSum = document.querySelector(".result-sum")
let moduleS = document.querySelector(".s")
let moduleM = document.querySelector(".m")
let moduleL = document.querySelector(".l")





function getCardInfo(index) {
    return function () {
        let text = cards[index].querySelector("h3").innerText;
        let pathToImg = cards[index].querySelector("img").src;
        let desc = cards[index].querySelector("p").innerText;
        let resultSum = cards[index].querySelector(".price").innerHTML;


        moduleHeading.innerText = text;
        moduleDesc.innerText = desc;
        moduleImg.src = pathToImg;
        moduleResultSum.innerHTML = resultSum;


    }
}





function toggleModule() {
    modulWrapper.classList.toggle("hide")
}


for (let i = 0; i < cards.length; i += 1) {
    cards[i].addEventListener("click", toggleModule)
    cards[i].addEventListener("click", getCardInfo(i))

}


function ToggleClassMain(element) {
    return function () {
        element.classList.toggle("active")
    }
}
let one = document.querySelector(".one")
let two = document.querySelector(".two")
let three = document.querySelector(".three")


function toggleClass2(element) {
    return function () {
        let counter = 0;


        if (element.classList.contains("active")) {

            counter += 1
            moduleResultSum.innerHTML = Number(moduleResultSum.innerHTML) - 0.5 * counter;
        } else {
            counter += 1
            moduleResultSum.innerHTML = Number(moduleResultSum.innerHTML) + 0.5 * counter;
        }


    }


}


additionSum.forEach((element) => {

    additionSum.forEach((element) => {
        element.addEventListener("click", toggleClass2(element))
        element.addEventListener("click", ToggleClassMain(element))
    })
})

s.addEventListener("click", calculator1)
m.addEventListener("click", calculator2)
l.addEventListener("click", calculator3)

function toggleClass5() {
    s.classList.toggle("active")
}
function toggleClass() {
    m.classList.toggle("active")
}
function toggleClass1() {
    l.classList.toggle("active")
}

s.addEventListener("click", toggleClass5)
m.addEventListener("click", toggleClass)
l.addEventListener("click", toggleClass1)

function calculator1() {
    moduleResultSum.innerHTML = Number(moduleResultSum.innerHTML)

}

function calculator2() {
    if (m.classList.contains("active")) {
        moduleResultSum.innerHTML = Number(moduleResultSum.innerHTML) - 0.5;
    } else {
        moduleResultSum.innerHTML = Number(moduleResultSum.innerHTML) + 0.5
    }
}

function calculator3() {

    if (l.classList.contains("active")) {
        moduleResultSum.innerHTML = Number(moduleResultSum.innerHTML) - 1;
    } else {
        moduleResultSum.innerHTML = Number(moduleResultSum.innerHTML) + 1
    }
}
/*
function anotherNaim() {
    if (dessert.classList.contains("hide")) {
        two.innerHTML = "Lemon"
    }
    else {
        s.innerHTML = "50g"
        m.innerHTML = "100g"
        l.innerHTML = "200g"
        one.innerHTML = "Berries"
        two.innerHTML = "Nuts"
        three.innerHTML = "Jam"
    }
}
*/
closeButton.addEventListener("click", toggleModule)

function cardCoffee() {
    coffee.classList.remove("hide");
    tea.classList.add("hide");
    dessert.classList.add("hide");
    two.innerHTML = "Cinnamon"
    s.innerHTML = "200ml"
    m.innerHTML = "300ml"
    l.innerHTML = "400ml"
    one.innerHTML = "Sugar"

    three.innerHTML = "Syrup"
}


coffeeB.addEventListener("click", cardCoffee)

function cardTea() {
    coffee.classList.add("hide");
    tea.classList.remove("hide");
    dessert.classList.add("hide");
    two.innerHTML = "Lemon"
    s.innerHTML = "200ml"
    m.innerHTML = "300ml"
    l.innerHTML = "400ml"
    one.innerHTML = "Sugar"

    three.innerHTML = "Syrup"
}

teaB.addEventListener("click", cardTea)

function cardDessert() {
    coffee.classList.add("hide");
    tea.classList.add("hide");
    dessert.classList.remove("hide");
    s.innerHTML = "50g"
    m.innerHTML = "100g"
    l.innerHTML = "200g"
    one.innerHTML = "Berries"
    two.innerHTML = "Nuts"
    three.innerHTML = "Jam"
}
dessertB.addEventListener("click", cardDessert)
