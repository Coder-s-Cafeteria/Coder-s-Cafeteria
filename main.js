const companyData = {
  name: "Coders Cafe",
  primaryColor: "#2c5545",
  backgroundColor: "#e3e3e3",
  claim: "We make the best widgets",
  text: "We are the best company in the world, except for the other companies that are better than us.",
  imageUrl:
    "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
};

console.log(companyData);

// LOGO Y NOMBRE DE NAVEGADOR

   // Seleccionamos el elemento DOM el que tiene el id = "companyName" 
   // Substituir el objeto textContent por CompanyData.name

const nameDOM = document.getElementById("companyName")
nameDOM.textContent = companyData.name

// Epica 1
  const companyName =  {
    name: "companyData.name"
  };

  function capitalizeFirstLetter(companyData){
    

  }

  // Historia 1.1
  const companyData0 = capitalizeFirstLetter("companyName")

  document.querySelector('#companyName').innerHTML = "Coders Cafe"

  const cafe1 = document.getElementById("cafe1")

  companyImageDOM = document.getElementById("companyImage");
  companyImageDOM.setAttribute("src", companyData.imageUrl);

  let companyClaimDOM = document.getElementById("companyClaim")
    companyClaimDOM.textContent = companyData.claim

let rootVariablesDOM = document.documentElement
rootVariablesDOM.style.setProperty ("--back-color", companyData.backgroundColor);
rootVariablesDOM.style.setProperty ("--primary-color", companyData.primaryColor);

document.addEventListener('click', function(){
  const editCompanyBtn = boton;
  boton = document.getElementById ('fas fa-edit')
})

const boton = document.getElementById 

  
/*  // Historia 1.2
  const heroElement = document.getElementById("hero");
  const heroImage = document.createElement("img");
  heroImage.src = companyData.imageUrl;
  heroElement.appendChild (heroImage);

  // Historia 1.3
    companyData = {
    claim: "Energia a tu alcance",
    text: "Nos dedicamos a darte la energia para empezar tu dia.",
    backgroundColor: "gray",
    primaryColor: "gray"
};

const claimElement = document.getElementById('claim');
const textElement = document.getElementById('text');

claimElement.textContent = companyData.claim;
textElement.textContent = companyData.text;

//-------------- 
//Manipular el DOM de companyImage

 companyImageDOM = document.getElementById("companyImage");
 companyImageDOM.setAttribute("src", companyData.imageUrl);*/