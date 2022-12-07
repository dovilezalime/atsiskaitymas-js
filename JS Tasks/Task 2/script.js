/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
const btn = document.querySelector("#btn");
const clicks = document.querySelector("#btn_element");
const container = document.querySelector("#btn_state");
let a = 0;
btn.addEventListener("click", Counter);
function Counter() {
    a += 1;
    container.innerHTML = a;
}