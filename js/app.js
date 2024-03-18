const arrayTeam = [
  {
    nome: "Wayne Barnett",
    ruolo: "Founder & CEO",
    foto: "wayne-barnett-founder-ceo.jpg",
  },
  {
    nome: "Angela Caroll",
    ruolo: "Chief Editor",
    foto: "angela-caroll-chief-editor.jpg",
  },
  {
    nome: "Walter Gordon",
    ruolo: "Office Manager",
    foto: "walter-gordon-office-manager.jpg",
  },
  {
    nome: "Angela Lopez",
    ruolo: "Social Media Manager",
    foto: "angela-lopez-social-media-manager.jpg",
  },
  {
    nome: "Scott Estrada",
    ruolo: "Developer",
    foto: "scott-estrada-developer.jpg",
  },
  {
    nome: "Barbara Ramos",
    ruolo: "Graphic Designer",
    foto: "barbara-ramos-graphic-designer.jpg",
  },
];

const div = document.getElementById("contenitore");

let arrayObject = [];

for (let i = 0; i < 6; i++) {
  console.log(arrayTeam[i]);
  arrayObject = arrayTeam[i];
  console.log(arrayObject);
  for (let key in arrayObject) {
    div.innerHTML += `<div> ${arrayObject[key]}</div>`;
    console.log(arrayObject[key]);
  }
}
