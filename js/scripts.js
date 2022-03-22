// We want to see some non-trivial Javascript code
// At a minimum, you should demonstrate a few simple uses of event-driven JavaScript for DOM manipulation
// You should use ES6 syntax throughout: e.g. don't use "var", use the modern tools (template literals, arrow functions).
// There should be no JavaScript errors in the browser console

// For more marks, we like to see a bit more complex use of JavaScript, perhaps some looping and/or more complex DOM manipulation.
// Accessing APIs is a great option if it fits with your project, or you can work with your own, local data.
// Your code should be DRY, if you have repeated code, consider refactoring as a function with arguments for example.
// We like to see what you can do. Be creative.

console.log("Obviously, you should replace this with some event handlers.")



//JS dropdown

document.addEventListener('click', ev => {
  const isDropdownButton = ev.target.matches("[data-dropdown-button]")
  if (!isDropdownButton && ev.target.closest('[data-dropdown]') != null) return

let currentDropdown
  if(isDropdownButton){
    currentDropdown = ev.target.closest('[data-dropdown]')
    currentDropdown.classList.toggle('active')
  }

  document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {

    if(dropdown === currentDropdown) return
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
