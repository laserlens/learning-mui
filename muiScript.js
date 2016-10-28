// add button dynamically
function buttonMaker() {
var buttonEl = document.createElement('button');
buttonEl.className = 'mui-btn mui-btn--primary mui-btn--raised';
buttonEl.innerHTML = 'dynamic buttons are so cool';
document.body.appendChild(buttonEl);
};
