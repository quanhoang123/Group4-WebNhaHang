function switchAuthModal() {
    var modalLogin = $('#logIn');
    var modalSignUp = document.getElementById("signUp");
    $('#logIn').modal("toggle");
    $('#signUp').modal("toggle");
}

var users = [{
        id: "User1",
        name: "Hung Vuong",
        username: "vuong1",
        password: "123456",
        cpassword: "123456",
        sdt: "0379377162",
        email: "vuong@gmail.com",
        role: "admin"
    },
    {
        id: "User2",
        name: "Dinh Long",
        username: "long1",
        password: "123456",
        cpassword: "123456",
        sdt: "0379377162",
        email: "long@gmail.com",
        role: "admin"
    },
    {
        id: "User3",
        name: "Trung Quan",
        username: "quan1",
        password: "123456",
        cpassword: "123456",
        sdt: "0379377162",
        email: "quan@gmail.com",
        role: "admin"
    },
    {
        id: "User4",
        name: "Ngoc Vi",
        username: "ngocvi1",
        password: "123456",
        cpassword: "123456",
        sdt: "0379377162",
        email: "ngocvi1@gmail.com",
        role: "admin"
    }
]

function saveUser() {
    localStorage.setItem('listUser', JSON.stringify(users))
}

function loadUser() {
    users = JSON.parse(localStorage.getItem('listUser'));
}

if (localStorage.getItem('listUser')) {
    loadUser();
} else
    saveUser();

var signUp = function() {
    var user = {
        id: "User" + parseInt(users.length + 1),
        username: document.getElementById("usernamed").value,
        name: document.getElementById("hotend").value,
        password: document.getElementById("passwordd").value,
        cpassword: document.getElementById("cpasswordd").value,
        sdt: document.getElementById("sdtd").value,
        email: document.getElementById("emaild").value,
        address: "",
        role: "User",
    }

    let username = document.getElementById("usernamed").value;
    let email = document.getElementById("emaild").value;
    let password = document.getElementById("passwordd").value;
    let cpassword = document.getElementById("cpasswordd").value;
    var checkPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,10}$/;
    const checkCharacter = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var exist = users.find(u => u.username === user.username)
    if (exist) {
        alert('Tên tài khoản đã tồn tại!');
        return;
    }
    if (username && password && cpassword && email != null) {

        if (!(checkCharacter.test(username))) {
            alert("Tên đăng nhập không hợp lệ.")
            console.log(email + username + password);
            return false;

        }
        if (!checkPass.test(password)) {
            alert('Vui lòng nhập mật khẩu từ 6-10 kí tự và có ít 1 nhất số, chữ thường và chữ hoa.')
            return false;
            //console.log(email + username + password + cpassword);
        }
        var checkEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!checkEmail.test(email)) {
            alert('Hay nhap dia chi email hop le.\nExample@gmail.com');
            // email.focus;
            return false;

        }
    } else
        users.push(user);
    localStorage.setItem('listUser', JSON.stringify(users));
    alert("Đăng kí thành công! Vui lòng đăng nhập lại")
    window.location.reload();

}

var login = function() {
    const username = document.getElementById('login_username').value
    const password = document.getElementById('login_password').value
    const user = users.find(u => u.username === username && u.password === password)
    console.log(username, password);
    if (user) {
        // Save user to localStorage
        localStorage.setItem('loggedInUser', JSON.stringify(user))
        alert('Đăng nhập thành công');
        window.location.reload()
        return;
    }
    alert("Sai tên tài khoản hoặc mật khẩu. Vui lòng kiểm tra lại!");
}

var loadData = function() {
    const arr1 = document.getElementsByClassName('is-logged-in');
    const arr2 = document.getElementsByClassName('is-not-logged-in');
    if (localStorage.getItem('loggedInUser')) {
        const user = JSON.parse(localStorage.getItem('loggedInUser'));
        document.getElementById('logged-in-username').innerHTML = user.username;
        for (const element of arr1) {
            element.setAttribute('style', 'display: none');
        }
        for (const element of arr2) {
            element.setAttribute('style', 'display: block');
        }
    } else {
        for (const element of arr1) {
            element.setAttribute('style', 'display: block');
        }
        for (const element of arr2) {
            element.setAttribute('style', 'display: none');
        }
    }
}

var logOut = function() {
        localStorage.removeItem("loggedInUser");
        const arr1 = document.getElementsByClassName('is-logged-in');
        const arr2 = document.getElementsByClassName('is-not-logged-in');
        if (localStorage.getItem('loggedInUser')) {
            const user = JSON.parse(localStorage.getItem('loggedInUser'));
            document.getElementById('logged-in-username').innerHTML = user.username;
            for (const element of arr1) {
                element.setAttribute('style', 'display: block');
            }
            for (const element of arr2) {
                element.setAttribute('style', 'display: none');
            }
        } else {
            for (const element of arr1) {
                element.setAttribute('style', 'display: none');
            }
            for (const element of arr2) {
                element.setAttribute('style', 'display: block');
            }
        }
        return loadData();
    }
    //over riding loadData function