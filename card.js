var cart=[];


if (localStorage.getItem('listCart') != null) {
    load();
} else
    save();

displayCart();







function save() {
    
    localStorage.setItem('listCart', JSON.stringify(cart));
}
document.getElementById("quality").innerHTML=cart.length;
function load() {
    cart = JSON.parse(localStorage.getItem('listCart'));
}

function displayCart(){
    for(let i in cart){
    var data = JSON.parse(JSON.stringify(cart[i]))  
    var print = `<div class="cart-item cart-column">
        <img class="cart-item-image" src="${data.img}" width="100" height="100">
        <span class="cart-item-title">${data.name}</span>
    </div>
    <span class="cart-price cart-column">${data.price}</span>
    <div class="cart-quantity cart-column">
        <input class="cart-quantity-input" type="number" value="1">
        <button class="btn btn-danger" type="button" onclick="deleteItem(${i})" >REMOVE</button>
    </div>`;
    document.getElementById("carts").innerHTML += print;
    }
}


var deleteItem= function(i){
    cart.splice(i,1);
    save();
    location.reload();


}
var listProductCart= function(){
   
}
