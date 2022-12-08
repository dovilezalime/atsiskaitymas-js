/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizduojama <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

const showUsersButton = document.querySelector("#btn");

function showUsers(users) {
  const finalOutput = document.querySelector("#output");
  finalOutput.innerHTML = "";

  users.forEach(person => {
    const photo = document.createElement("img");
    photo.src = person.avatar_url;
    const personsPhoto = document.createElement("div");
    personsPhoto.append(photo);

    const personLogin = document.createElement("p");
    personLogin.style.cssText = "text-align: center; color: darkblue; font-weight: bolder; padding: 0.8rem";
    personLogin.innerText = `${person.login}`;

    const personProfileCard = document.createElement("div");
    personProfileCard.setAttribute("class", "profile");
    personProfileCard.append(personsPhoto, personLogin);

    finalOutput.append(personProfileCard);
  })
};

async function getUsers() {
  try {
    const response = await fetch(ENDPOINT);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      return data;
    }
  } catch (error) {
    console.log(`message: `, error.message);
  }
};

async function init() {
  const data = await getUsers();
  showUsers(data);
};

showUsersButton.addEventListener("click", (event) => {
  event.preventDefault();
  init();
})