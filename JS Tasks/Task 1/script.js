/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: rezultatas turi būti matomas pateikus formą ir atvaizduojamas
<div id="output"></div> viduje. Gautus atsakymus stilizuokite naudojant CSS;
------------------------------------------------------------------- */
document.getElementById('submit-btn').addEventListener ('click',(e)=> {
    e.preventDefault();
    const value = document.getElementById('search').value;
    document.getElementById('output').innerText ='Svarai(lb)'+ value * 2.2046 +
     '\n' +'Gramai(g)' + value / 0.001000 + '\n' +'Uncijos(oz)'+ value * 35.274;
     
})
document.getElementById("output").style = "padding: 8px 8px; margin: 0px 50px; color: red; border: 2px solid black"