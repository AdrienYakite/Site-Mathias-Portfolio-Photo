//gestion du form de contact
let sectionForm = document.querySelector(".formContact");
let formulaireContact= document.getElementById("formContact");
let inputNom = document.querySelector("#nom");

formulaireContact.addEventListener("submit", (event)=>{
    event.preventDefault();

    console.log("bouton cliqué !");

    let nomUser = inputNom.value;
    sectionForm.innerHTML=``;
    sectionForm.innerHTML=`Merci pour votre message ${nomUser} ! Je vous recontacterai au plus vite:)`;
    sectionForm.classList.add("classeTemporaireForm")
})