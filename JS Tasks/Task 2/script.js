/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
let clickeroo = document.getElementById("btn__element")
let counteroo = document.getElementById("btn__state")
// let clickCount = counteroo.innerText

// console.log(counteroo.innerText);

clickeroo.addEventListener("click", function(){
    let result = Number(counteroo.innerText) + 1;

        counteroo.innerText = result
})
