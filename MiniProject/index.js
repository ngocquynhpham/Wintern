var list_account = [
    {
        username: "taict@1wt.vn",
        password: "Wintech.company",
        fullname: "Cao Thành Tài"
    },
    {
        username: "quynhpnt@1wt.vn",
        password: "Wintech.company",
        fullname: "Phạm Thị Ngọc Quỳnh"
    },
    {
        username: "admin@1wt.vn",
        password: "Wintech.company",
        fullname: "Admin"
    },
    {
        username: "caothanhtai",
        password: "caothanhtai",
        fullname: "Admin"
    }
]

var INFOR;


let value_pwd = document.getElementById('password')
let value_user = document.getElementById("user")
let lbPwd = document.getElementById("labelPassword")
let lbUser = document.getElementById("labelUser")
let form = document.getElementById("formLogin")
let hello = document.getElementById("hello")

// lbPwd.style.display = "block"
// value_pwd.style.borderColor = "red"
// lbUser.style.display = "block"
// value_user.style.borderColor = "red"

function Login() {
    checkValidation(value_user.value, value_pwd.value);
}

function checkValidation(value_user, value_pwd) {
    // check null
    if (value_user === "" || value_pwd === "" ) {
        lbPwd.innerHTML = "Vui lòng không để trống Tên đăng nhập và Mật khẩu";
        lbPwd.style.display = "block";
    }
    else if (value_user !== "" && value_pwd !== "" ) {
        lbPwd.style.display = "none";
    }

    // Check username & password
    for (let i = 0; i < list_account.length; i++) {
        username = list_account[i].username;
        password = list_account[i].password;
        fullname = list_account[i].fullname;

        if (value_user === username && value_pwd === password) {
            localStorage.setItem('if_username',username)
            localStorage.setItem('if_password',password)
            localStorage.setItem('if_fullname',fullname)
           
            form.action="./welcome.html"
            console.log("Đăng nhập thành công", fullname);
            console.log("Thong tin user",fullname, INFOR);
            lbPwd.style.display = "none";
            
            return INFOR;

        } else {
            lbPwd.innerHTML = "Tài khoản hoặc mật khẩu không chính xác"
            lbPwd.style.display = "block"
        }
    }
}

hello.innerHTML="Chào Mừng "+localStorage.getItem('if_fullname')




function showpwd(e, id) {

    let element = document.getElementById(id);
    let icon = e.target.classList;

    if (element.type === "text") {
        element.type = "password";
        icon.add("fa-eye-slash");
        icon.remove("fa-eye");
    }
    else {
        element.type = "text";
        icon.remove("fa-eye-slash");
        icon.add("fa-eye");
    }
}

