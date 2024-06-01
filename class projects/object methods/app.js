





var object = {
    id: 1,
    title: `Fjallraven `,
    // Foldsack No. 1 Backpack, Fits 15 Laptops`,
    price: 109.95,
    description:
    "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg&quot",
    rating: [2,4,,1,0,5,3],
    };
const details =document.getElementById("details")


details.innerHTML= `<h2>${object.title}</h2>
<h3>${object.price}</h3>
<p>${object.description}</p>
<h3>${object.rating}</h3>`






