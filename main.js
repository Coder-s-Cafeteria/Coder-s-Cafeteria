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

const companyNameDOM = document.getElementById("companyName");
companyNameDOM.textContent = companyData.name

const companyName2DOM = document.getElementById("companyName2");
companyName2DOM.textContent = companyData.name

const companyImgDOM = document.getElementById("companyImage");
companyImgDOM.setAttribute("src", companyData.imageUrl)

const companyClaimDOM = document.getElementById("companyClaim")
companyClaimDOM.textContent = companyData.claim

const companyTextDOM = document.getElementById("companyText")
companyTextDOM.textContent = companyData.text

const companyPrimDOM = document.getElementById("primaryColorInput")
companyPrimDOM.setAttribute("primaryColorInput", companyData.primaryColor)

const companyBackDOM = document.getElementById("backgroundColorInput")
companyBackDOM.setAttribute("backgroundColorInput", companyData.backgroundColor)