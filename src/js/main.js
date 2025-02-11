// import '../scss/style.scss'

// ИМПОРТ ШАПКИ И ПОДВАЛА
async function loadComponent(id, url) {
    const container = document.getElementById(id);
    if (container) {
        const response = await fetch(url);
        container.innerHTML = await response.text();
    }
}

loadComponent("header", "/src/templates/header.html");
loadComponent("footer", "/src/templates/footer.html");


// ВСПЛЫВАШКА 
const modal = document.querySelector('#modal');
const btn = document.querySelector('#openModal');
const close = document.querySelector('.close');

btn.onclick = function () {
  modal.style.display = 'block';
};

close.onclick = function () {
  modal.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};