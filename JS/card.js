var cart = [];


if (localStorage.getItem('listCart') != null) {
    load();
} else
    save();

displayCart();







function save() {

    localStorage.setItem('listCart', JSON.stringify(cart));
}
// var sumItem=0;
//     for(let i in cart){
//         sum= sum +cart[i].quantity;
//     }
//     console.log(sum);
// document.getElementById("quality").innerHTML=sumItem;
function load() {
    cart = JSON.parse(localStorage.getItem('listCart'));
}

function displayCart() {
    if (cart.length != []) {
        var sumItem = 0;

        for (let i in cart) {
            sumItem = sumItem + cart[i].quantity;
        }

        
        document.getElementById("count11").innerHTML =sumItem;
    }



    for (let i in cart) {
        var data = JSON.parse(JSON.stringify(cart[i]))
        var print = `
    <div class="cart-item">
        <div class="card-img">
            <img class="cart-item-image" src="${data.img}" width="100px" height="100px">
            
        </div>

        <div class="card-name">
        <span class="cart-item-title">${data.name}</span>
        </div>

        <div class="card-price">
        <span class="cart-price cart-column">${data.price}</span>
        </div>

        <div class="card-quantity">
            <input class="cart-quantity-input" type="number" value="${data.quantity}">
            
        </div>
        
        <button class="btn btn-danger" id="removeBtn" type="button" onclick="deleteItem(${i})" >REMOVE</button>
    </div>`;
        document.getElementById("carts").innerHTML += print;
    }
}

//Xóa sản phẩm trong giỏ hàng
var deleteItem = function(i) {
    //nếu có nhiều sản phẩm thì trừ đi 1
    if (cart[i].quantity != 1 )  {
        cart[i].quantity = cart[i].quantity - 1;

    } else {
        //nếu không thì xóa ra khỏi mảng
        cart.splice(i, 1);

    }
    save();
    location.reload();


}
// var listProductCart = function() {

// }



//Hàm tính tổng hóa đơn
var order = function() {
    if (cart.length != 0) {
        let sum = 0;
        for (let i in cart) {
            sum = sum + (cart[i].price * cart[i].quantity);
        }

        alert("Thank you for you order, your bill is:" + sum + " VND");
        cart = [];
        save();
        location.reload();
    } else {
        alert("Don't have any product in your cart");
    }

}