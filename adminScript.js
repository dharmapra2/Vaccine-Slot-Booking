"use strict";
(function () {
  let tbody = document.querySelector("tbody");
  let Bookings = JSON.parse(localStorage.getItem("Bookings")) || [];
  if (Bookings.length > 0) {
    Bookings.forEach((element, index) => {
      let html = `<tr>
          <td class="align-middle text-center">
            <span class="text-secondary text-xs font-weight-bold">${
              index + 1
            }</span>
          </td>
          <td class="align-middle text-center">
            <span class="text-secondary text-xs font-weight-bold">${
              element.name
            }</span>
          </td>
          <td class="align-middle text-center">
            <span class="text-secondary text-xs font-weight-bold">${
              element.age
            }</span>
          </td>
          <td class="align-middle text-center">
            <span class="text-secondary text-xs font-weight-bold">${
              element.phone
            }</span>
          </td>
          <td class="align-middle text-center">
            <span class="text-secondary text-xs font-weight-bold">${
              element.adhaar
            }</span>
          </td>
          <td class="align-middle text-center">
            <span class="text-secondary text-xs font-weight-bold">${
              element.email
            }
            </span>
          </td>
          <td class="align-middle text-center">
            <span class="text-secondary text-xs font-weight-bold">${
              element.date
            }</span>
          </td>
        </tr>`;
      tbody.insertAdjacentHTML("beforeend", html);
    });
  } else {
    let html = `<p class="m-2 align-right text-center text-secondary text-md font-weight-bold">
              No Data Found please add some data...
          </p>`;
    document.querySelector("table").insertAdjacentHTML('afterend', html);
  }
})();
