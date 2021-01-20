var product=[
    {
    id: "sp1",
    name : "Cua Hoàng Đế",
    img : "imgs/cuahoangde.jpg",
    note : "Size :1.7kg - 4kg/con (Bán chạy nhất từ 2kg - 3kg/con)", 
    price : 1400000
    },
    {
        id: "sp2",
        name : "Tôm Sú Bằm Tỏi",
        img : "imgs/tomsu.png", 
        note : "Size :1kg - 2kg/con (Bán nhiều nhất từ 2kg - 3kg/con)",
        price : 300000
        },
        {
            id: "sp3",
            name : "Gà Chọi 1/2",
            img : "imgs/gachoi.jpg",
            note : "Size :2kg - 4kg/con (Bán nhiều nhất từ 2kg - 3kg/nữa con)",
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
                    note : "Size :2kg - 4kg thịt /dĩa ",
                    price : 122000+"/ong"
                    },
                    {
                        id: "sp6",
                        name : "Mực Sốt Xả Ớt",
                        img : "imgs/múcot.jpg",
                        note : "Size :2kg - 4kg thịt /dĩa ",
                        price : 34000
                        },
                        {
                            id: "sp7",
                            name : "Tôm Hùm",
                            img : "imgs/tomhumhaisan.jpg",
                            note : "Size :2kg - 4kg /con ",
                            price : 150000
                            },
                            {
                                id: "sp8",
                                name : "Cá Mú Hấp",
                                img : "imgs/camuhap.jpg",
                                note : "Size :8kg - 10kg /con ",
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
                                            note : "Size :4kg - 8kg /dĩa ",
                                            price : 350000
                                            },
                                            {
                                                id: "sp12",
                                                name : "Mực Luộc",
                                                img : "imgs/mucluoc.jpg",
                                                note : "Size :0.5kg - 1kg /con ",
                                                price : 12000 +"/1c"
                                                },
                                                {
                                                    id: "sp13",
                                                    name : "Tôm Nướng",
                                                    img : "imgs/tomnuong.jpg",
                                                    note : "Size :0.5kg - 1kg /con ",
                                                    price : 122000
                                                    },
                                                    {
                                                        id: "sp14",
                                                        name : "Gà Nhà Nguyên co",
                                                        img : "imgs/ganuong.jpg",
                                                        note : "Size :1.5kg - 2kg /con ",
                                                        price : 150000
                                                        },
                                                        {
                                                            id: "sp15",
                                                            name : "Rắn xào xả ớt",
                                                            img : "imgs/ranxao.jpg",
                                                            note : "Size :2kg - 2.5kg /dĩa ",
                                                            price : 120000
                                                            },
                                                            {
                                                                id: "sp16",
                                                                name : "Ba Ba Xầm Chuối",
                                                                img : "imgs/baba.jpg",
                                                                note : "Size :0.5kg - 1kg /nồi ",
                                                                price : 145000
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
            `<div class="col-12 col-sm-6 col-md-4 col-lg-3 p-4">										
        <div class="produre_box bg-white shadow-sm ">										
            <div class="image_box imgs">										
                <img src="` + data.img + `" style="width:260px; height:200px;">										
            </div>										
                <div class="info_box p-3 bg-white text-center">										
                    <p class="float-left font-weight-bold mb-0" style="font-size: 115%">` + data.name + `</p><p class="float-left font-weight-bold mb-2" style="font-size: 115%">` + data.price + `đ</p>									
                        <div style="clear: both;"></div>										
                            <div class="star_box float-left pt-2">										
                                <button type="button" class="btn btn-primary " data-toggle="modal" data-target="#exampleModalLong" onclick="getProduct(${i})">Chi Tiết</button>	                            
                                    <div class="order_box float-right" style=" float:right" >																			
                                    </div>	
                                <div  class="modal fade mt-5" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true" >										
                                    <div class="modal-dialog" role="diolog" style="width:30%; >										
                                        <div class="modal-content">										
                                            <div class="modal-body" style="background:rgb(199,226,78); ">										
                                                <div id="printf_watch" >	
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
var getProduct = function(id) {
    let html = "";
    let allWatch = JSON.parse(localStorage.getItem('listproduct'))

    let aa = allWatch[id];
    document.getElementById("printf_watch").innerHTML = `${html}         
    <div class="boxProduct" >
        <div class="box"> <img src="${aa.img}" alt="" style="max-width:100% ;">
            <div class="box-heading">
                <h3 class="title">${aa.name}</h3><span class="post"> ${aa.price}đ</span>
            </div>
            <div class="boxContent">
                <p class="description">${aa.note}</p>
                <div> <p> <label for="quantity">So Luong </lable>
                    <input min="1" type="number" id="quantity" name="quantity" value="1" class="form-control input-small">
                </p>
                
                
                <a href="cart.html" class="cart"><i class="fa fa-shopping-cart"></i> Đặt hàng</a>
            </div>
        </div>
    </div>           
    `;
}

function IcoinFunction() {
    var x = document.getElementById("navbarCollapse");
    if (x.className === "topNarbar") {
        x.className += " responsive";
    } else {
        x.className = "topNarbar";
    }
}