

var cart=[];
function saveCart(){
    localStorage.setItem('listCart', JSON.stringify(cart))
}
function loadCart(){
    cart = JSON.parse(localStorage.getItem('listCart'));
}
if(localStorage.getItem('listCart')!=null){
    loadCart();
} else
saveCart();


var count=0;
function addProduct123(i){
    let sanpham=JSON.parse(JSON.stringify(product[i]));
    cart.push(sanpham);
    alert("Thêm vào giỏ hàng thành công");
    document.getElementById("count11").innerHTML =++count;
    saveCart();
}
function addProductCard(){
    alert("Chào mừng bạn đến với Our WEB. Hiện tại chức năng đang được chúng tôi đang nâng cấp ");
}
