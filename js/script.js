document.querySelector(".modal-theme").addEventListener("click", () => {
  const modalTheme = document.querySelector(".modal-theme");
  const theme = document.querySelector(".modal-theme .selected-theme");
  const themeClassList = theme.classList;
  const body = document.querySelector("body");
  const headerTxtH1 = document.querySelector("header .logo h1");
  const headerTxtH2 = document.querySelector("header .logo h2");
  const headerButton = document.querySelector("header button.menu");
  const yourStyleTxt = document.querySelector("section.styles .container h2");
  const labelForm = document.querySelectorAll("section.contact .container form label");
  const contactTxt = document.querySelector("section.contact .container h2");


  if (themeClassList.contains("dark-theme")) {
    theme.setAttribute("class", "selected-theme light-theme");
    modalTheme.style.background = "#fff";
    body.style.background = "#fff";
    headerTxtH1.style.color = "#777";
    headerTxtH2.style.color = "#aaa";
    headerButton.style.color = "#aaa";
    yourStyleTxt.style.color = "#888";
    labelForm.forEach(value => {
      value.style.color = "#000"
    })
    contactTxt.style.color = "#888";

  } else {
    theme.setAttribute("class", "selected-theme dark-theme");
    modalTheme.style.background = "#161616";
    body.style.background = "#555";
    headerTxtH1.style.color = "#fff";
    headerTxtH2.style.color = "#fff";
    headerButton.style.color = "#fff";
    yourStyleTxt.style.color = "#fff";
    labelForm.forEach(value => {
      value.style.color = "#fff"
    })
    contactTxt.style.color = "#fff";


  }
});
