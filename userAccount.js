var User = [{
        name: "Hung Vuong",
        username: "vuong1",
        password: "123456",
        rpassword: "123456",
        sdt: "0379377162",
        email: "vuong@gmail.com",
        role: "admin"
    },
    {
        name: "Dinh Long",
        username: "long1",
        password: "123456",
        rpassword: "123456",
        sdt: "0379377162",
        email: "long@gmail.com",
        role: "admin"
    },
    {
        name: "Trung Quan",
        username: "quan1",
        password: "123456",
        rpassword: "123456",
        sdt: "0379377162",
        email: "quan@gmail.com",
        role: "admin"
    },
    {
        name: "Ngoc Vi",
        username: "ngocvi1",
        password: "123456",
        rpassword: "123456",
        sdt: "0379377162",
        email: "ngocvi1@gmail.com",
        role: "admin"
    }
]
var signUp = function() {
    var User = {
        id: "User" + parseInt(User.lenght + 1),
        username: document.getElementById(usernamed).value,
        name: document.getElementById(hotend).value,
        password: document.getElementById(passwordd).value,
        rpassword: document.getElementById(rpasswordd).value,
        sdt: document.getElementById(sdtd).value,
        email: document.getElementById(emaild).value,
        address: "",
        role: "User",
    }
    alert("Đăng kí thành công");
    user.push(User);
    localStorage.setItem('listUser', JSON.stringify(user));
    window.location.reload();

}
var signUpArr = [];
var saveLogin = function() {
    localStorage.setItem('signUp', JSON.stringify(signUpArr));
}
var loadLogin = function() {
    signUpArr = JSON.parse(localStorage.getItem('signUp'));
}
if (localStorage.getItem('signUp') != null) {
    loadLogin();
}
// saveLogIn();
//
var login = function() {
    var k = -1;
    for (var i in user) {
        var data = JSON.parse(JSON.stringify(user[i]))
        if (
            ((document.getElementById("name").value == data.username) && (document.getElementById(password).value = data.password) && (data.role == "admin"))
        ) {
            k = i;
            alert("Đăng nhập thành công !");
            // window.location.href = '../user/infor.html';
            var userLogin = {
                username: document.getElementById("usernamed").value,
                password: document.getElementById("passwordd").value
            }
            signUpArr.push(userLogin);
            localStorage.setItem('signUp', JSON.stringify(signUpArr));
            saveLogIn();
        }
        if (k == -1) {
            alert("Đăng nhập không thành công!");
        }
    }
}