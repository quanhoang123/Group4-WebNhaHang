


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
    if(login()==true){
        alert("Đăng Nhập Thành công");
    }
    
    var user = [{
            id:"User1",
            username:"admin",
            name:"HoangTrungQuan",
            sdt:"035573986",
            email:"quanhuhoq111@gmail.com",
            password:"123456789",
            role:"admin",
        },
        {
            id:"User2",
            username:"admin",
            name:"Nguyễn Thị Diễm",
            sdt:"035573986",
            email:"diemhuhoq111@gmail.com",
            password:"123136789",
            role:"user",
        },
]


    var singupArr=[];

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

    var signUp=function(){
        var User={
            id: "User"+ parseInt(user.length+1),
            signup: y.value,
            role: "user",
        }
        alert("Đăng Kí Thành Công");
        user.push(User);
        localStorage.setItem('listUser',JSON.stringify(user));

        window.location.reload;
    }
    
    var signUpArr=[];
    var saveLogin=function(){
        localStorage.setItem('signup',JSON.stringify(signUpArr))
    }
    var loadLogin=function(){
        signUpArr=JSON.parse(localStorage.getItem('signup'));
    }
    if(localStorage.getItem('signup')!=null){
        loadLogin();
    }
    saveLogin();

