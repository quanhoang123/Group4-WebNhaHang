var room=[
    {
    id: "room1",
    address : "Tầng 1",
    img : "imgsRoom/room1.jpg",
    status : "Rỗng còn phòng Tọa lạc tại tầng 1 của khách sạn, gần ngay Cafe Gallery và khu vực hành lang, Lounge Bar là nơi thích hợp cùng một lúc tổ chức hội họp và ăn uống.",
    price : 1400000
    },
    {
        id: "room1",
        address : "Tầng 2 ",
        img : "imgsRoom/room2.jpg", 
        status : "Còn phòng Rỗng còn phòng Tọa lạc tại tầng 1 của khách sạn, gần ngay Cafe Gallery và khu vực hành lang, Lounge Bar là nơi thích hợp cùng một lúc tổ chức hội họp và ăn uống",
        price : 200000,
        },
        {
            id: "room1",
            address : "Tầng 2 ",
            img : "imgsRoom/room4.jpg",
            status : "còn phòng Rỗng còn phòng Tọa lạc tại tầng 1 của khách sạn, gần ngay Cafe Gallery và khu vực hành lang, Lounge Bar là nơi thích hợp cùng một lúc tổ chức hội họp và ăn uống",
            price:350000,
            },
            {
                id: "room1",
                address : "Tầng 2 ",
                img : "imgsRoom/room4.jpg",
                status : "còn phòng Rỗng còn phòng Tọa lạc tại tầng 1 của khách sạn, gần ngay Cafe Gallery và khu vực hành lang, Lounge Bar là nơi thích hợp cùng một lúc tổ chức hội họp và ăn uống",
                price : 150000,
                },
                {
                    id: "room1",
                    address : "Tầng 2 ",
                    img : "imgsRoom/room5.jpg",
                    status : "còn phòng Rỗng còn phòng Tọa lạc tại tầng 1 của khách sạn, gần ngay Cafe Gallery và khu vực hành lang, Lounge Bar là nơi thích hợp cùng một lúc tổ chức hội họp và ăn uống",
                    price : 99000 ,
                    },
                    {
                        id: "room1",
                        address : "Tầng 2 ",
                        img : "imgsRoom/room6.jpg",
                        status : "còn phòng Rỗng còn phòng Tọa lạc tại tầng 1 của khách sạn, gần ngay Cafe Gallery và khu vực hành lang, Lounge Bar là nơi thích hợp cùng một lúc tổ chức hội họp và ăn uống",      
                        price : 30000,
                        },
                        {
                            id: "room1",
                            address : "Tầng 2 ",
                            img : "imgsRoom/room1.jpg",
                            status : "còn phòng Rỗng còn phòng Tọa lạc tại tầng 1 của khách sạn, gần ngay Cafe Gallery và khu vực hành lang, Lounge Bar là nơi thích hợp cùng một lúc tổ chức hội họp và ăn uống",
                          
                            price : 100000,
                            },
                            {
                                id: "room1",
                                address : "Tầng 2 ",
                                img : "imgsRoom/room1.jpg",
                                status : "còn phòng Rỗng còn phòng Tọa lạc tại tầng 1 của khách sạn, gần ngay Cafe Gallery và khu vực hành lang, Lounge Bar là nơi thích hợp cùng một lúc tổ chức hội họp và ăn uống    ",
                                price: 7500000,
                                },                                                                                                        
]
function saveRoom() {
    localStorage.setItem('listRoom', JSON.stringify(room))
}

function loadRoom() {
    room = JSON.parse(localStorage.getItem('listRoom'));
}
if (localStorage.getItem('listRoom') != null) {
    loadRoom();
} else
saveRoom();

function displayRoom() {
    for (let i in room) {
        var data = JSON.parse(JSON.stringify(room[i]))
        var prinf =
            ` <div class="col-12 col-sm-6 col-md-4 col-lg-3 p-4">										
            <div class="produre_box bg-white shadow-sm ">										
                <div class="image_box imgs">										
                    <img src="` + data.img + `" style="width:260px; height:200px;  border-radius:10px;">										
                </div>										
                    <div class="info_box p-3 bg-white ">										
                        <p class="float-left font-weight-bold mb-0 text-center" style="font-size: 70%">` + data.address + `</p>
                        <p class=" font-weight-bold mb-2" style="font-size: 70%;float:right">` + data.price + `đ</p>									
                            <div style="clear: both;"></div>										
                                <div class="star_box float-left pt-2 btndetail">										
                                    <button type="button" class="btn btn-primary " data-toggle="modal" data-target="#exampleModalLong2" onclick="getRoomVip(${i})">Detail</button>                                
                                        <div class="order_box float-right" style=" float:right" >
                                        <button type="button" class="btn btn-primary " data-toggle="modal"  onclick="addProduct1234(${i})">Add Cart</button>	 
                                        </div>	
                                    <div  class="modal fade mt-5" id="exampleModalLong2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true" >										
                                        <div class="modal-dialog" role="diolog" style="width:30%; >										
                                            <div class="modal-content">										
                                                <div class="modal-body" style="background:rgb(199,226,78); ">										
                                                    <div id="printf_watch1234" >	
                                                    </div>										
                                                </div>										
                                            </div>										
                                        </div>										
                                    </div>										
                                </div>	                          														
                                <div style="clear: both;"></div>																				
                    </div>
            </div>										
        </div>`;
        document.getElementById("roomvip").innerHTML += prinf;

    }

}

displayRoom();
var getRoomVip = function(id) {
    let html = "";
    let allRoom = JSON.parse(localStorage.getItem('listRoom'))

    let a = allRoom[id];
    document.getElementById("printf_watch1234").innerHTML = `${html}         
    <div class="boxProduct" >
        <div class="box"> <img src="${a.img}" alt="" style="max-width:100% ;">
            <div class="box-heading">
                <h3 class="title">${a.address}</h3><span class="post"> ${a.price}đ</span>
            </div>
            <div class="boxContent">
                <p class="description text-center">${a.status}</p>
            </div>
        </div>
    </div>           
    `;
}
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
function addProduct1234(i){

        let sanpham=JSON.parse(JSON.stringify(product[i]));
    cart.push(sanpham);
    alert("themHangThanhCong");
    document.getElementById("count11").innerHTML =++count;
    saveCart();
 
}
