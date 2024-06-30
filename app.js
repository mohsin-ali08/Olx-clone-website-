const list = document.getElementById("list");

function getSingleProduct(productId) {
  fetch(`https://dummyjson.com/products/${productId}`)
    .then(function (res) {
      console.log(res);
      return res.json();
    })
    .then(function (data) {
      console.log(data);
      appendToDOM(data.products);
    })
    .catch(function (err) {
      //   alert(err); // execute when API promise rejected
    });
}

window.addEventListener("load", function (evt) {
  fetch("https://dummyjson.com/products")
    .then(function (res) {
      console.log(res);
      return res.json();
    })
    .then(function (data) {
      console.log(data);
      appendToDOM(data.products);
    })
    .catch(function (err) {
      //   alert(err); // execute when API promise rejected
    });
});

function appendToDOM(products) {
  for (let product of products) {
    console.log(product);
    let card = `<div class="card">
       <img src="${product.thumbnail}">
          <p><span>Product Name : ${product.title}</span></p>
          <p><span>brand : ${product.brand}</span></p>
          <p><span>Price : ${product.price}</span></p>
          <p><span>description : ${product.description}</span></p>
          <button onclick="getSingleProduct(${product.id})">see details</button>
     
      </div>`

      
    list.innerHTML += card;
  }
};









//POST REQUEST

// fetch("https://dummyjson.com/products",{
//     method: "POST",
//     body: {
//         // data to be sent to server
//     }

// })

// fetch(`https://dummyjson.com/products/${id}`,{
//     method: "PATCH",
//     body:{
//         //data to be updated
//     }
// })

// DELETE REQUEST
// fetch(`https://dummyjson.com/products/:id`,{
// fetch(`https://dummyjson.com/products/${id}`,{
//     method: "DELETE",
// })