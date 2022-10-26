//  TODO: grab the form and the main tag
const form = document.querySelector("form");
const main = document.querySelector("main");

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
