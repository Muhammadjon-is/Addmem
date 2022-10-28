let decrease = document.getElementById("decrease");
let increase = document.getElementById("increase");

let number = document.getElementById("son");

decrease.addEventListener("click", () => {
  let numberCustomer = parseInt(number.textContent);
  if (numberCustomer > 0) {
    let changeNumber = uzSon - 1;
    number.textContent = changeNumber;
  } else {
    alert(" something went wrong just check again ");
  }
});

increase.addEventListener("click", () => {
  let changeNumber = parseInt(number.textContent) + 1;
  number.textContent = changeNumber;
});

let add = document.getElementById("add");
let members = document.getElementById("members");

let paragraf = document.createElement("p");
paragraf.className = "data";

add.addEventListener("click", () => {
  let name = document.getElementById("name").value;

  let insidePar = paragraf.cloneNode(true);
  insidePar.textContent = name;

  console.log(insidePar);

  document.getElementById("members").appendChild(insidePar);
});

let assign = document.getElementById("assign");

assign.addEventListener("click", () => {
  let data_list = document.querySelectorAll("#members .data");
  let tableU = data_list.length;

  let uzSon = parseInt(number.textContent);

  for (let index = 0; index < uzSon; index++) {
    let h1 = document.createElement("h1").cloneNode(true);
    h1.textContent = `Team ${index + 1}`;

    let team = document.createElement("div").cloneNode(true);
    team.className = "team";
    team.appendChild(h1);
    let card = document.createElement("div").cloneNode(true);
    card.className = "card";

    for (let index = 0; index < tableU; index++) {
      const element = data_list[index].cloneNode(true);
      console.log(element);
      card.appendChild(element);
    }
    team.appendChild(card);

    document.getElementById("teams").appendChild(team);
  }
});

document.getElementById("reset").addEventListener("click", () => {
  number.textContent = 1;
  document.getElementById("name").value = "";
  document.getElementById("members").innerHTML = "";
});
