// We want to see some non-trivial Javascript code
// At a minimum, you should demonstrate a few simple uses of event-driven JavaScript for DOM manipulation
// You should use ES6 syntax throughout: e.g. don't use "var", use the modern tools (template literals, arrow functions).
// There should be no JavaScript errors in the browser console

// For more marks, we like to see a bit more complex use of JavaScript, perhaps some looping and/or more complex DOM manipulation.
// Accessing APIs is a great option if it fits with your project, or you can work with your own, local data.
// Your code should be DRY, if you have repeated code, consider refactoring as a function with arguments for example.
// We like to see what you can do. Be creative.
"use strict";




//JS dropdown
document.addEventListener('click', ev => {
    const isDropdownButton = ev.target.matches("[data-dropdown-button]")
    if (!isDropdownButton && ev.target.closest('[data-dropdown]') != null) return

    let currentDropdown
    if (isDropdownButton) {
        currentDropdown = ev.target.closest('[data-dropdown]')
        currentDropdown.classList.toggle('active')
    }

    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {

        if (dropdown === currentDropdown) return
        dropdown.classList.remove('active')

    })

})

//MenuToggler
menuToggler.addEventListener('click', ev => {
    menuToggler.classList.toggle('open');
    console.log("Fix")
});

for (const element of document.querySelectorAll('nav a')) {
    element.addEventListener('click', ev => {
        menuToggler.classList.remove('open');
    });
}

//Searchbar
const fightersList = document.getElementById('fightersList');
const searchBar = document.getElementById('searchBar');
let ufcFighters = [];
console.log(searchBar);

searchBar.addEventListener('keyup', (ev) => {
  const searchString = ev.target.value.toLowerCase();
  const filteredFighters = ufcFighters.filter(( fighter) => {
    return (
      fighter.FirstName.toLowerCase().includes(searchString) ||
     fighter.LastName.toLowerCase().includes(searchString)
   );
  });
  console.log(filteredFighters);
});

const loadFighters = async () => {
  try{
  const res = await fetch('https://api.sportsdata.io/v3/mma/scores/json/Fighters?key=26f2a845a9e84ac69d7e7e36755bd98c');
  ufcFighters = await res.json();
  displayFighters(ufcFighters);
  console.log(ufcFighters);
}catch(err) {
  console.error(err);
}
};

const displayFighters = (fighters) => {
  const htmlString = fighters
  .map((fighter) => {
    return `

    <li class="fighter">
    <h2>${fighter.FirstName}</h2>
    <p>LastName: ${fighter.LastName}</p>
    <p>Wins: ${fighter.Wins}</p>
    <p>Losses: ${fighter.Losses}</p>
    </li>

    `;

  })
  .join('');
  fightersList.innerHtml = htmlString;
};

loadFighters();


//
// fetch('https://api.sportsdata.io/v3/mma/scores/json/Fighters?key=26f2a845a9e84ac69d7e7e36755bd98c')
// .then(res => res.json())
//
//
// .then(data => console.log(data))
