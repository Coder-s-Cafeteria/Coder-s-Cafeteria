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

const closeBoton = document.getElementById("closeCompanyFormBtn");
closeBoton.addEventListener("click", function () {
  companyFormContainer.classList.add("hidden");
});

//Historia 2.2: Cargar los datos actuales de la empresa en el formulario

const companyNameInputDOM = document.getElementById("companyNameInput");
companyNameInputDOM.value = companyData.name;

const companyImgInputDOM = document.getElementById("companyImageURLInput");
companyImgInputDOM.value = companyData.imageUrl;

const companyPrimInputDOM = document.getElementById("primaryColorInput");
companyPrimInputDOM.value = companyData.primaryColor;

const companyBackInputDOM = document.getElementById("backgroundColorInput");
companyBackInputDOM.value = companyData.backgroundColor;

const companyClaimInputDOM = document.getElementById("companyClaimInput");
companyClaimInputDOM.value = companyData.claim;

const companyTextInputDOM = document.getElementById("companyTextInput");
companyTextInputDOM.value = companyData.text;

//historia 2.3 :identificar de donde esta saliendo el nombre (company name imputDOM )
//añadir valores en el objeto
//utilizar funcion updatecompany DOM

const companyForm = document.getElementById("#companyForm");
companyForm.addEventListener("submit", function (e) {
  e.preventDefault();
  companyData.name = companyNameInputDOM.value;
  companyData.primaryColor = companyPrimInputDOM.value;
  companyData.backgroundColor = companyBackInputDOM.value;
  companyData.claim = companyClaimInputDOM.value;
  companyData.text = companyTextInputDOM.value;
  companyData.imageUrl = companyImgInputDOM.value;
  updateCompanyDOM();
  companyFormContainer.classList.add("hidden");
});

// Épica: Personalización de la sección "Novedades y Ofertas"
/*Crear el array de productos.
Imprimir los productos en el HTML.
Implementar el formulario de personalización.
Actualizar el array y la interfaz de la página al hacer clic en "Guardar".*/

const offers = [
  {
    product11: "Green Vegetables",
    image1:
      "https://c8.alamy.com/comp/2CH190N/photo-of-green-wet-vegetable-set-with-water-drops-2CH190N.jpg",
    precio1: 9.99,
  },
  {
    product22: "Fruit Pack",
    image2: "https://www.fruitypack.com/assets/files/w-star-mix-1.960x640.jpg",
    precio2: 14.99,
  },
  {
    product33: "Lemons and Oranges",
    image3:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEX1cf3cY-2yQOnyP2eWFnqUy9G5B5gbyP2Q&s",
    precio3: 7.99,
  },
];
console.log(offers);

function updateProductDOM() {
  const offersProduct1DOM = document.getElementById("product1");
  offersProduct1DOM.textContent = offers.product11;

  const offersPrecio1DOM = document.getElementById("precio1");
  offersPrecio1DOM.textContent = offers.precio1;

  const offersImg1DOM = document.getElementById("imgproduct1");
  offersImg1DOM.setAttribute("src", offers.image1);

  const offersProduct2DOM = document.getElementById("product2");
  offersProduct2DOM.textContent = offers.product22;

  const offersPrecio2DOM = document.getElementById("precio2");
  offersPrecio2DOM.textContent = offers.precio2;

  const offersImg2DOM = document.getElementById("imgproduct2");
  offersImg2DOM.setAttribute("src", offers.image2);

  const offersProduct3DOM = document.getElementById("product3");
  offersProduct3DOM.textContent = offers.product33;

  const offersPrecio3DOM = document.getElementById("precio3");
  offersPrecio3DOM.textContent = offers.precio3;

  const offersImg3DOM = document.getElementById("imgproduct3");
  offersImg3DOM.setAttribute("src", offers.image3);
}
updateProductDOM();

const companyOffersContainer = document.getElementById("offersForm");

openBoton = document.getElementById("editOffersBtn");
openBoton.addEventListener("click", function () {
  companyOffersContainer.classList.remove("hidden");
});

closeBoton = document.getElementById("closeCompanyFormBtn");
closeBoton.addEventListener("click", function () {
  companyOffersContainer.classList.add("hidden");
});
