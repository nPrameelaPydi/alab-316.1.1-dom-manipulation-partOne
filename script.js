//import "./styles.css";

//*********Part 1*********/
const mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.innerHTML = '<h1>DOM Manipulation</h1>';
mainEl.classList.add("flex-ctr");

//*********Part 2*********/
const navEl = document.getElementById('top-menu');
navEl.style.height = '100%';
navEl.style.backgroundColor = 'var(--top-menu-bg)';
navEl.classList.add("flex-around");




