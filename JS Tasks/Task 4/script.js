/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json failą ir 
atvaizduos visus automobilių gamintojus bei pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.

Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';
fetch(ENDPOINT)
    .then(x => x.json())
    .then(data => {
        let card = document.getElementById("output");
        card.style = "align-text: center "
        for (let i=0; i < data.length; i++) {
            let cardBody = document.createElement('div');
            cardBody.innerText = '\n' + data[i].brand + '\n' + data[i].models;
            cardBody.style = 'margin: 3px 2px; border: 3px solid black; background-color: grey; text-align: center; padding-bottom: 15px';

            card.appendChild(cardBody)
        }
    })
