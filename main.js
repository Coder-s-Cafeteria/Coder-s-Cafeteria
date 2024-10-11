const companyData = {
  name: "Coders Cafe",
  primaryColor: "azure",
  backgroundColor: "green",
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
updateCompanyDOM()