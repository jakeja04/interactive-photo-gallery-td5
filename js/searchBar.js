/* jshint esversion: 6 */

let searchBox = document.querySelector('#searchbar');
let pictures = document.querySelectorAll('a');

searchBox.addEventListener("keyup", (event) => {
  for(let i = 0; i < pictures.length; i++) {
    if(pictures[i].dataset.caption.includes(searchBox.value.toLowerCase()) || searchBox.value.length == 0) {
      pictures[i].style.display = "inline";
    } else {
      pictures[i].style.display = 'none';
    }
  }
});
