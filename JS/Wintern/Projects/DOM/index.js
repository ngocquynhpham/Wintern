let pwd = document.getElementById("pwd");
let expwd = document.getElementById("expwd");
let lbexpwd = document.getElementById("lbexpwd");
let lbpwd = document.getElementById("lbpwd");
let minpwd = document.getElementById("minpwd")
let upcasepwd = document.getElementById("upcasepwd")
let upcharacterspecial = document.getElementById("upcharacterspecial")
let btnlogin = document.getElementById("btnlogin")
let modalbox = document.getElementById("myModal")

// hàm kiểm tra in hoa
function checkUpcase() {
    let value = pwd.value;
    for (let i = 0; i < value.length; i++) {
        if (value[i] === value[i].toUpperCase()) {
            return true;
        } 
       
    }
    return false; 

}


// hàm kiểm tra kí tự đặt biệt
function checkCharacterSpecial() {
    let value = pwd.value;
    var format = /[~`¿¡!#$%\^&*€£@+÷=\-\[\]\\';,/{}\(\)|\\":<>\?\.\_]/;
    return format.test(value);


}

function checkValidation() {
    pwd.style.borderColor = "red"
    expwd.style.borderColor = "red"
    lbpwd.style.display = "block"
    lbexpwd.style.display = "block"
    minpwd.style.color = "red"
    upcasepwd.style.color = "red"
    upcharacterspecial.style.color = "red"
    btnlogin.dataset.target = ""

    if (expwd.value === "" && pwd.value === "") {
    } else if (pwd.value === "") {
        lbexpwd.style.display = "none"

    } else if (expwd.value === "") {
        lbpwd.style.display = "none"

    } else if (expwd.value !== pwd.value) {
        lbpwd.style.display = "none"
        lbexpwd.innerHTML = "Xác nhận mật khẩu không trùng khớp, Vui lòng kiểm tra lại"
    } else {
        lbpwd.style.display = "none"
        lbexpwd.style.display = "none"

        if (pwd.value.length > 8) {
            minpwd.style.color = "green"

        }
        if (checkUpcase()) {
            upcasepwd.style.color = "green"

        }
        if (checkCharacterSpecial()) {
            upcharacterspecial.style.color = "green"
            pwd.style.borderColor = "#CCCCCC";
            expwd.style.borderColor = "#CCCCCC";
            
        }
        if(upcharacterspecial.style.color==="green" &&  upcasepwd.style.color === "green" &&  minpwd.style.color === "green"
        ){
            btnlogin.dataset.target = "#myModal"
        }else{

        }



    }
}





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



