// document.addEventListener("DOMContentLoaded", function () {
//   const searchInput = document.getElementById("searchInput");
//   const sortSelect = document.getElementById("sortSelect");
//   const container = document.querySelector(".team-container");

//   function getNameFromCard(card) {
//     const h3 = card.querySelector("h3");
//     return h3 ? h3.textContent.trim() : "";
//   }

//   function filterCards() {
//     const query = searchInput.value.trim().toLowerCase();
//     const cards = container.querySelectorAll(".card");
//     cards.forEach((card) => {
//       const name = getNameFromCard(card).toLowerCase();
//       if (!query || name.includes(query)) {
//         card.style.display = "";
//       } else {
//         card.style.display = "none";
//       }
//     });
//   }

//   function sortCards(order) {
//     const cards = Array.from(container.querySelectorAll(".card"));
//     cards.sort((a, b) => {
//       const nameA = getNameFromCard(a).toLowerCase();
//       const nameB = getNameFromCard(b).toLowerCase();
//       if (nameA < nameB) return -1;
//       if (nameA > nameB) return 1;
//       return 0;
//     });
//     if (order === "desc") cards.reverse();

    
//     cards.forEach((card) => container.appendChild(card));
//   }

  
//   searchInput.addEventListener("input", function () {
//     filterCards();
//   });

//   sortSelect.addEventListener("change", function () {
//     const val = sortSelect.value;
//     if (val === "asc") sortCards("asc");
//     else if (val === "desc") sortCards("desc");


//     filterCards();
//   });

//   sortCards("asc");
// });
