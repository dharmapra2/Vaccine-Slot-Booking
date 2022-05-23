"use strict";
let submit = document.getElementById("submit");
let alert_msg = document.getElementById("alert");
let form = document.querySelector("form");

// initialy hide alert messag
alert_msg.style.display = 'none';

//handling form data
submit.addEventListener("click", function (event) {
  //here we take all input fields
  var req = document.querySelectorAll("input");
  //generating a array of input fields length with fill 0 value initialy
  let error = Array.from({ length: req.length - 1 }, () => 0);

  for (var i = 0; i < req.length; i++) {
    if (req[i].value.trim() !== "") {
      error[i] = 1;
    }
  }
  //here we check if all inputs are filled then check will true else false
  let check = error.every((item) => item > 0);
  if (check) {
    // Prevent Form Submit
    event.preventDefault();
    console.log("All attributes are filled");
    let data = Array.from(form)
      .slice(0, -1)
      .reduce(
        (acc, val) => ({
          ...acc,
          [val.name]: val.value.trim(),
        }),
        {}
      );
    // console.log(data);
    loadIntoLocalStorage(data);
  } else {
    console.log("All attributes requied to be filled");
  }
});

//loading form data into local storage
function loadIntoLocalStorage(data) {
  let Bookings = JSON.parse(localStorage.getItem("Bookings") || "[]");
  // console.log(`length ${Bookings.length}`);
  // here we checking duplicates value through addhar number
  let duplicate = Bookings.every((ele) => ele.adhaar !== data.adhaar);
  if (duplicate) {
    Bookings.push(data);
    localStorage.setItem("Bookings", JSON.stringify(Bookings));
    submit.disabled = true;
    alert_msg.style.display = 'inline';
    setTimeout(() => {
      // to reload the page after sucessfully added data into local storage
      location.reload();
    }, 1000);
  } else {
    alert(`Data is already presente..\n Try with new data.`);
  }
}
