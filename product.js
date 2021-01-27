

var product=[
    {
        id: "sp1",
        name : "Cua Hoàng Đế",
        img : "imgs/cuahoangde.jpg",
        note : "Size :1.7kg - 4kg/con (Bán chạy nhất từ 2kg - 3kg/con)Đây cũng là món ăn được đánh giá cao về giá trị ẩm thực bởi những chiếc chân dài, vỏ mềm, thớ thịt chắc nịch và ngọt lịm",
        price : 1400000
        },
        {
            id: "sp2",
            name : "Tôm Sú Bằm Tỏi",
            img : "imgs/tomsu.png", 
            note : "Size :1kg - 2kg/con (Bán nhiều nhất từ 2kg - 3kg/con) Tôm là một loại rất giàu protein, nó chiếm ít nhất từ 20 đến 25% giá trị dinh dưỡng trong một con tôm sú",
            price : 300000
            },
            {
                id: "sp3",
                name : "Gà Chọi 1/2 ",
                img : "imgs/gachoi.jpg",
                note : "Size :2kg - 4kg/con (Bán nhiều nhất từ 2kg - 3kg/nữa con) Gà chọi xào sả ớt là một món ăn ngon, lạ miệng, khiến ai cũng thích mê, đặc biệt là trong những ngày thời tiết đang chuyển mùa",
                price : 400000
                },
                {
                    id: "sp4",
                    name : "Hải Sản Hỗn Hợp",
                    img : "imgs/honhop.jpg",
                    note : "Size :2kg - 4kg/dĩa ",
                    price : 200000
                    },
                    {
                        id: "sp5",
                        name : "Heo Nướng Ống Tre",
                        img : "imgs/lonnuongongtre.jpg",
                        note : "Size :2kg - 4kg thịt /dĩa Thịt lợn nướng ống tre ẩm thực nổi tiếng của đồng bào Tây Nguyên.",
                        price : 122000+"/ong"
                        },
                        {
                            id: "sp6",
                            name : "Mực Sốt Xả Ớt",
                            img : "imgs/múcot.jpg",
                            note : "Size :2kg - 4kg thịt /dĩa Mực xào sả ớt là món ngon được nhiều người ưa chuộng, giàu dinh dưỡng và phù hợp với mọi lứa tuổi.",
                            price : 34000
                            },
                            {
                                id: "sp7",
                                name : "Tôm Hùm",
                                img : "imgs/tomhumhaisan.jpg",
                                note : "Size :2kg - 4kg /con Món tôm hùm sốt chua ngọt hấp dẫn vị giác của thực khách cùng với hương vị thơm ngon, hấp dẫn. Tôm hùm sốt chua ngọt đặc biệt có lợi cho sức khỏe nên được nhiều người yêu thích và lựa chọn.",
                                price : 150000
                                },
                                {
                                    id: "sp8",
                                    name : "Cá Mú Hấp",
                                    img : "imgs/camuhap.jpg",
                                    note : "Size :8kg - 10kg /con Tất cả các món hấp luôn giữ được độ tươi ngon, chất dinh dưỡng và hương vị của món ăn nhất là các món cá hấp ",
                                    price : 9000000
                                    },
                                    {
                                        id: "sp9",
                                        name : "Gà Hấp Xôi",
                                        img : "imgs/gahapxoi.jpg",
                                        note : "Size :2kg - 4kg /dĩa ",
                                        price : 100000
                                        },
                                        {
                                            id: "sp10",
                                            name : "Gà Luộc Nguyên Con",
                                            img : "imgs/galuoc.png",
                                            note : "Size :2kg - 4kg /dĩa ",
                                            price : 100000
                                            },
                                            {
                                                id: "sp11",
                                                name : "Heo Rừng",
                                                img : "imgs/lonrung.jpg",
                                                note : "Size :4kg - 8kg /dĩa Thịt lợn rừng có vị giòn giòn, thơm ngon nên nó được chế biến thành nhiều món ăn ngon như thịt lợn rừng hấp, thịt lợn rừng nấu giả cầy, thịt lợn rừng nướng muối ớt",
                                                price : 350000
                                                },
                                                {
                                                    id: "sp12",
                                                    name : "Mực Luộc",
                                                    img : "imgs/mucluoc.jpg",
                                                    note : "Size :0.5kg - 1kg /con ",
                                                    price : 12000 +"/1c"
                                                    },                                                                                                          
]





function save() {
    localStorage.setItem('listproduct', JSON.stringify(product))
}

function load() {
    product = JSON.parse(localStorage.getItem('listproduct'));
}
if (localStorage.getItem('listproduct') != null) {
    load();
} else
    save();













function listWatch() {
    for (let i in product) {
        var data = JSON.parse(JSON.stringify(product[i]))
        var prinf =
            ` <div class="col-12 col-sm-6 col-md-4 col-lg-3 p-4">										
        <div class="produre_box bg-white shadow-sm ">										
            <div class="image_box imgs" >										
                <img src="` + data.img + `" style="width:260px; height:200px;  border-radius:10px;">										
            </div>										
                <div class="info_box p-3 bg-white ">										
                    <p class="float-left font-weight-bold mb-0 text-center" style="font-size: 70%; ">` + data.name + `</p><p class="float-left font-weight-bold mb-2 text-center" style="font-size: 70%;">` + data.price + `đ</p>									
                        <div style="clear: both;"></div>										
                            <div class="star_box  pt-2" >										                                                             
                                        <div class="order_box btndetail" >
                                    <button type="button" class="btn btn-primary col-sm-6" data-toggle="modal" data-target="#exampleModalLong" onclick="getProduct(${i})" >Detail</button>
                                    <button type="button" class="btn btn-primary col-sm-6"  data-toggle="modal"  onclick="addProduct123(${i})">Add Cart</button>	 
                                        </div>	
                                <div  class="modal fade mt-5" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true" >										
                                    <div class="modal-dialog" role="diolog" style="width:30%; >										
                                        <div class="modal-content">										
                                            <div class="modal-body" style="background:rgb(199,226,78); ">										
                                                <div id="printf_food" >	
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
        document.getElementById("trending").innerHTML += prinf;

    }

}

listWatch();
var getProduct = function (id) {
    let html = "";
    let allWatch = JSON.parse(localStorage.getItem('listproduct'))
    let aa = allWatch[id];
    document.getElementById("printf_food").innerHTML = `${html}         
    <div class="boxProduct" >
        <div class="box"> <img src="${aa.img}" alt="" style="max-width:100% ;">
            <div class="box-heading">
                <h3 class="title">${aa.name}</h3><span class="post"> ${aa.price}đ</span>
            </div>
            <div class="boxContent">
                <p class="description" style="color:black;">${aa.note}</p>

            </div>
        </div>
    </div>           
    `;
}






var discount = [
    {
        id: "sp1",
        name: "Tôm Nướng",
        img: "imgs/tomnuong.jpg",
        note: "Size :0.5kg - 1kg /con ",
        old_price: 100000,
        price: 80000
    },
    {
        id: "sp2",
        name: "Gà Nhà Nguyên co",
        img: "imgs/ganuong.jpg",
        note: "Size :1.5kg - 2kg /con ",
        old_price: 200000,
        price: 150000
    },
    {
        id: "sp3",
        name: "Rắn xào xả ớt",
        img: "imgs/ranxao.jpg",
        note: "Size :2kg - 2.5kg /dĩa ",
        old_price: 120000,
        price: 100000
    },
    {
        id: "sp4",
        name: "Ba Ba Xầm Chuối",
        img: "imgs/baba.jpg",
        note: "Size :0.5kg - 1kg /nồi ",
        old_price: 122000 + "/ong ",
        price: 145000
    },
    {
        id: "sp5",
        name: "Heo Nướng Ống Tre",
        img: "imgs/lonnuongongtre.jpg",
        note: "Size :2kg - 4kg thịt /dĩa ",
        old_price: 122000 + "/ong ",
        price: 99000 + "/ong",
    },
    {
        id: "sp6",
        name: "Mực Sốt Xả Ớt",
        img: "imgs/múcot.jpg",
        note: "Size :2kg - 4kg thịt /dĩa ",
        old_price: 34000,
        price: 30000,
    },
    {
        id: "sp7",
        name: "Tôm Hùm",
        img: "imgs/tomhumhaisan.jpg",
        note: "Size :2kg - 4kg /con ",
        old_price: 150000,
        price: 100000,
    },
    {
        id: "sp8",
        name: "Cá Mú Hấp",
        img: "imgs/camuhap.jpg",
        note: "Size :8kg - 10kg /con ",
        old_pricece: 9000000,
        price: 7500000,
    },
]
function saveProductDiscount() {
    localStorage.setItem('listproductdiscount', JSON.stringify(discount))
}

function loadProductDiscount() {
    discount = JSON.parse(localStorage.getItem('listproductdiscount'));
}
if (localStorage.getItem('listproductdiscount') != null) {
    loadProductDiscount();
} else
    saveProductDiscount();


function ProdcutDiscount() {
    for (let i in discount) {
        var data = JSON.parse(JSON.stringify(discount[i]))
        var prinf =
            ` <div class="col-12 col-sm-6 col-md-4 col-lg-3 p-4">										
            <div class="produre_box bg-white shadow-sm ">										
                <div class="image_box imgs">										
                    <img src="` + data.img + `" style="width:260px; height:200px;  border-radius:10px;">										
                </div>										
                    <div class="info_box p-3 bg-white ">										
                        <p class="float-left font-weight-bold mb-0 text-center" style="font-size: 70%">` + data.name + `</p>
                        <span style="float:left; font-size: 70%"><strike> `+ data.old_price + `đ</strike> </span>
                        <p class=" font-weight-bold mb-2" style="font-size: 70%;float:right">` + data.price + `đ</p>									
                            <div style="clear: both;"></div>										
                                <div class="star_box float-left pt-2 btndetail" >
                                    <div class="order_box btndetail" >
                                        <button type="button" class="btn btn-primary col-sm-6" data-toggle="modal" data-target="#exampleModalLong1" onclick="getProductDiscount(${i})" >Detail</button>
                                        <button type="button" class="btn btn-primary col-sm-6"  data-toggle="modal"  onclick="addProduct123(${i})">Add Cart</button>	 
                                    </div>	                   	
                                    <div  class="modal fade mt-5" id="exampleModalLong1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true" >										
                                        <div class="modal-dialog" role="diolog" style="width:30%; >										
                                            <div class="modal-content">										
                                                <div class="modal-body" style="background:rgb(199,226,78); ">										
                                                    <div id="printf_watch123" >	
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
        document.getElementById("discount").innerHTML += prinf;

    }

}

ProdcutDiscount();
var getProductDiscount = function (id) {
    let html = "";
    let allDiscount = JSON.parse(localStorage.getItem('listproductdiscount'))

    let aa = allDiscount[id];
    document.getElementById("printf_watch123").innerHTML = `${html}         
    <div class="boxProduct" >
        <div class="box"> <img src="${aa.img}" alt="" style="max-width:100% ;">
            <div class="box-heading">
                <h3 class="title">${aa.name}</h3><span class="post"> ${aa.price}đ</span>
            </div>
            <div class="boxContent">
                <p class="description text-center">${aa.note}</p>
            </div>
        </div>
    </div>           
    `;
}



