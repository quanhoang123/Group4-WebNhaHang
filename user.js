var x = document.getElementById("login-form");
var y = document.getElementById("register-form");
var z = document.getElementById("pointer-btn");
var l = document.getElementById("login");
var r = document.getElementById("register");
var ac = document.getElementById("action_title");

function register1(){
    x.style.left = "-450px";
    y.style.left = "25px";
    z.style.left = "215px";
    l.style.color = "#848484";
    r.style.color = "#00ffc3";
    ac.textContent = "Register";
}

function login1(){
    x.style.left = "25px";
    y.style.left = "450px";
    z.style.left = "30px";
    l.style.color = "#00ffc3";
    r.style.color = "#848484";
    ac.textContent = "Login";       
}		   
var user = [{
        id:"User1",
        name:"HoangTrungQuan",
        phone:"035573986",
        email:"quanhuhoq111@gmail.com",
        password:"123456789",
        role:"admin",
    },
    {
        id:"User2",
        name:"Nguyễn Thị Diễm",
        phone:"035573986",
        email:"diemhuhoq111@gmail.com",
        password:"123136789",
        role:"user",
    },
]


function saveUser(){
    localStorage.setItem('listUser', JSON.stringify(user))
}
function loadUser(){
    user = JSON.parse(localStorage.getItem('listUser'));
}
if(localStorage.getItem('listUser')!=null){
    loadUser();
}
else
saveUser();

//Function Signup
function signup() {
    var User = {
        id: "User" + parseInt(user.length + 1),
        name: document.getElementById("fullname").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phoned").value,
        role: "",
        password: document.getElementById("passworded").value,
        confirmpassword: document.getElementById("passwordedd").value,
    }
    var find = 0;
    for (var i in user) {

        if (User.email == user[i].email) {
            alert("Tên tài khoản đã tồn tại ! Vui lòng đổi tên khác.")
            break;
        } else {
            if (user.password != user.confirmpassword || user.fullname == '' || user.nameaccount == '') {
                find++; 
                             
                break;
            } else {
                find = 0;
                break;
            }
        }
    }
    if (find != 0) {
        alert("Đăng kí không thành công! Xin vui lòng kiểm tra lại.")
    } else if (find == 0) {
        alert("Đăng kí thành công");
        User.role="user"; 
        user.push(User);
        localStorage.setItem('listUser', JSON.stringify(user));     
        // window.location.assign("amthucvungmien.html");
    }
    login1();
}


function Signin() {
    var nhanbiet = 0;
    var username = document.getElementById("named").value;
    var password = document.getElementById("password").value;
    user=JSON.parse(localStorage.getItem('listUser'))
    var b=false;
    for (var i in user) {
        var newuser = JSON.parse(JSON.stringify(user[i]))
        if (username == newuser.email && password == newuser.password ) {
            nhanbiet ++;
            alert("Đăng nhập thành công");
            document.getElementById("account").style.display="none";
            document.getElementById("userAccount").innerHTML=newuser.name;
            b=true;
            // window.location.assign("product.html");
            break;      
        }
       
       //  if(username != newuser.email && password != newuser.password ){
        //     break;        
        // }
    }
    if(!b)
    alert("Đăng nhập thất bại xin vui lòng đăng kí tài khoản"); 

}
//Hiện Ẩn mật khẩu trong đăng kí đăng nhập
let showPassword = false
const ipnElement = document.querySelector('#password')
const btnElement = document.querySelector('#btnPassword')

btnElement.addEventListener('click', togglePassword)

function togglePassword() {
  if (showPassword) {
    // Đang hiện password
    // Chuyển sang ẩn password
    ipnElement.setAttribute('type', 'password')
    showPassword = false
  } else {
    // Đang ẩn password
    // Chuyển sang hiện password
    ipnElement.setAttribute('type', 'text')
    showPassword = true
  }
}