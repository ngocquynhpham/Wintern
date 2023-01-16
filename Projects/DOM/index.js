let pwd = document.getElementById("pwd");
let expwd = document.getElementById("expwd");
let lbexpwd = document.getElementById("lbexpwd");
let lbpwd = document.getElementById("lbpwd");
let minpwd = document.getElementById("minpwd")
let upcasepwd = document.getElementById("upcasepwd")
let upcharacterspecial = document.getElementById("upcharacterspecial")
let btnlogin=document.getElementById("btnlogin")
let modalbox=document.getElementById("myModal")

// hàm kiểm tra in hoa
function checkUpcase() {
    let value = pwd.value;
    let isUperCase
    for (let i = 0; i < value.length; i++) {
        if (value[i] === value[i].toUpperCase()) {
            return isUperCase = true;
        } else { return isUperCase = false }
    }

}


// hàm kiểm tra kí tự đặt biệt
function checkCharacterSpecial() {
    let value = pwd.value;
    var format = /[~`¿¡!#$%\^&*€£@+÷=\-\[\]\\';,/{}\(\)|\\":<>\?\.\_]/;
    return format.test(value);


}
function checkValidation() {
   
    if (expwd.value === "" && pwd.value === "") {
      
        lbexpwd.style.display = "inline"
        lbpwd.style.display = "inline"
        pwd.style.borderColor = "red";
        expwd.style.borderColor = "red";
        upcharacterspecial.style.color = "red"
        upcasepwd.style.color = "red"
        minpwd.style.color = "red"  
       
    } else if (pwd.value === "") {
        pwd.style.borderColor = "red";
        lbexpwd.style.display = "none";
        lbpwd.style.display = "inline";
        upcharacterspecial.style.color = "red";
        upcasepwd.style.color = "red";
        minpwd.style.color = "red";
        
    } else if (expwd.value === "") {
        expwd.style.borderColor = "red";
        lbpwd.style.display = "none"
        lbexpwd.style.display = "inline"
        pwd.style.borderColor = "#CCCCCC";
        upcharacterspecial.style.color = "red"
        upcasepwd.style.color = "red"
        minpwd.style.color = "red"
        
    } else if (expwd.value !== pwd.value) {
        lbpwd.style.display = "none"
        lbexpwd.innerHTML = 'Xác nhận mật khẩu không trùng khớp, vui lòng kiểm tra lại'
        lbexpwd.style.display = "inline"
        pwd.style.borderColor = "red";
        expwd.style.borderColor = "red";
        upcharacterspecial.style.color = "red"
        upcasepwd.style.color = "red"
        minpwd.style.color = "red"
       
    } else {
        lbexpwd.style.display = "none"
        lbpwd.style.display = "none"
        

        if (pwd.value.length < 8) {
            minpwd.style.color = "red"
            pwd.style.borderColor = "red";
            expwd.style.borderColor = "red";
            
        } else {
            minpwd.style.color = "green"
        }
        if (!checkUpcase()) {
            upcasepwd.style.color = "red"
            pwd.style.borderColor = "red";
            expwd.style.borderColor = "red";
           
        } else {
            upcasepwd.style.color = "green"
        }
        if (!checkCharacterSpecial()) {
            upcharacterspecial.style.color="red"
            pwd.style.borderColor = "red";
            expwd.style.borderColor = "red";
        }
        else {
            upcharacterspecial.style.color = "green"
            pwd.style.borderColor = "#CCCCCC";
            expwd.style.borderColor = "#CCCCCC";
            btnlogin.dataset.target="#myModal"
            
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



