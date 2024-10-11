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

function updateCompanyDOM() {
  const companyNameDOM = document.getElementById("companyName");
  companyNameDOM.textContent = companyData.name;

  const companyName2DOM = document.getElementById("companyName2");
  companyName2DOM.textContent = companyData.name;

  const companyImgDOM = document.getElementById("companyImage");
  companyImgDOM.setAttribute("src", companyData.imageUrl);

  const companyClaimDOM = document.getElementById("companyClaim");
  companyClaimDOM.textContent = companyData.claim;

  const companyTextDOM = document.getElementById("companyText");
  companyTextDOM.textContent = companyData.text;

  document.documentElement.style.setProperty(
    "--back-color",
    companyData.backgroundColor
  );
  document.documentElement.style.setProperty(
    "--primary-color",
    companyData.primaryColor
  );
}
updateCompanyDOM();

const companyFormContainer = document.getElementById("companyForm");

const openBoton = document.getElementById("editCompanyBtn");
openBoton.addEventListener("click", function () {
  companyFormContainer.classList.remove("hidden");
});

const closeBoton = document.getElementById("closeCompanyFormBtn")
closeBoton.addEventListener ("click", function(){
  companyFormContainer.classList.add ("hidden")
})

//Historia 2.2: Cargar los datos actuales de la empresa en el formulario

const companyNameInputDOM = document.getElementById("companyNameInput")
companyNameInputDOM.value = companyData.name

const companyImgInputDOM = document.getElementById("companyImageURLInput")
companyImgInputDOM.value = companyData.imageUrl

const companyPrimInputDOM = document.getElementById("primaryColorInput")
companyPrimInputDOM.value = companyData.primaryColor

const companyBackInputDOM = document.getElementById("backgroundColorInput")
companyBackInputDOM.value = companyData.backgroundColor

const companyClaimInputDOM = document.getElementById("companyClaimInput")
companyClaimInputDOM.value = companyData.claim

const companyTextInputDOM = document.getElementById("companyTextInput")
companyTextInputDOM.value = companyData.text

//historia 2.3 :identificar de donde esta saliendo el nombre (company name imputDOM ) 
//añadir valores en el objeto
//utilizar funcion updatecompany DOM

const companyForm = document.getElementById ("#companyForm")
companyForm.addEventListener ("submit", function(e){
  e.preventDefault()
  companyData.name = companyNameInputDOM.value
  companyData.primaryColor = companyPrimInputDOM.value
  companyData.backgroundColor = companyBackInputDOM.value
  companyData.claim = companyClaimInputDOM.value
  companyData.text = companyTextInputDOM.value
  companyData.imageUrl = companyImgInputDOM.value
  updateCompanyDOM()
  companyFormContainer.classList.add ("hidden")


  

})