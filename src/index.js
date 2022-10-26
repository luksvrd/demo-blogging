//  TODO: grab the form and the main tag
const form = document.querySelector("form");
const main = document.querySelector("main");

// lines 2-3 and 15-25 very inmportant **

// TODO: create elements that will end up inside the main tag
const h1 = document.createElement("h1");
const h2 = document.createElement("h2");
const small = document.createElement("small");
const p = document.createElement("p");

//  TODO: add event listener for the form submition event
// whenever dealing w a submittion event you gotta have the .preventDefault in there
form.addEventListener("submit", function (event) {
  event.preventDefault();

  //  TODO: use formdata to log out hte values that the user put in with the namese of inputs
  // event.target is whatever element caused the event. this case what was submitted? the form itself

  const formData = new FormData(event.target);
  const values = Object.fromEntries(formData.entries());

  // Object Destructuring
  const { title, subtitile, author, content } = values;

  h1.textContent = title;
  h2.textContent = subtitle;
  small.textContent = author;
  p.textContent = content;

  main.append(h1, h2, small, p);
});

const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");
const increase = document.querySelector("#increase");
const decrease = document.querySelector("#decrease");
const h2FontSize = Number.parseFloat(
  getComputedStyle("h2").getPropertyValue("font-size")
);

increase.addEvent("click", function (event) {
  h2.style.setProperty("font-size", `${h2FontSize + 0.5}em`);
});

decrease.addEvent("click", function (event) {
  h2.style.setProperty("font-size", `${h2FontSize - 0.5}em`);
});

// qs = querySelector
// Not necessary, but good shorthand
// Returns an HTMLElement
function qs(query) {
  return document.querySelector(query);
}

// qsa = querySelectorAll
// Returns a NodeList
function qsa(query) {
  return document.querySelectorAll(query);
}

// getCPV = getComputedPropertyValue
function getCPV(element, property) {
  return getComputedStyle(element).getPropertyValue(property);
}

// setCPV = setComputedPropertyValue
// Though there is no "setComputedPropertyValue", this is mnemonic.
function setCPV(element, property, value, unit = "") {
  element.style.setProperty(property, `${value}${unit}`);
  // There's nothing to return
}
