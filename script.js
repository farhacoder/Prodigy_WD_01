
document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('a ,.icons');

    menuItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            item.style.backgroundColor = '#27ae60';
            item.style.color = '#fff';
        });

        item.addEventListener('mouseout', function() {
            item.style.backgroundColor = '';
            item.style.color = '';
        });
    });
});


let menu=document.querySelector("#menu-bars");
let navbar=document.querySelector(".navbar");
menu.onclick=()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active')
}


window.onscroll = function() {
    const navbar = document.querySelector('header');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
};


document.addEventListener("DOMContentLoaded", function() {
    fetch('index.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('navbar').innerHTML = data;
      })
      .catch(error => console.error('Error loading navbar:', error));
  });

  document.addEventListener('DOMContentLoaded', () => {
    const dishes = [
        { name: 'Spaghetti Carbonara', price: 12.99, image: 'https://via.placeholder.com/200x150' },
        { name: 'Margherita Pizza', price: 10.99, image: 'https://via.placeholder.com/200x150' },
        { name: 'Caesar Salad', price: 8.99, image: 'https://via.placeholder.com/200x150' },
        { name: 'Grilled Salmon', price: 15.99, image: 'https://via.placeholder.com/200x150' },
    ];

    const dishesContainer = document.getElementById('dishes-container');

    dishes.forEach(dish => {
        const dishElement = document.createElement('div');
        dishElement.classList.add('dish');

        dishElement.innerHTML = `
            <img src="${dish.image}" alt="${dish.name}">
            <div class="dish-name">${dish.name}</div>
            <div class="dish-price">$${dish.price.toFixed(2)}</div>
            <button class="btn">Add to Cart</button>
        `;

        dishesContainer.appendChild(dishElement);
    });
});