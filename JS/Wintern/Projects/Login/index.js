let pwd=document.getElementById('password')
let user=document.getElementById("user")
let lbPwd=document.getElementById("labelPassword")
let lbUser=document.getElementById("labelUser")
let form=document.getElementById("formLogin")
localStorage.setItem('username','caothanhtai')
localStorage.setItem('password','caothanhtai')
function checkValidation(){
    lbPwd.style.display="block"
    pwd.style.borderColor="red"
    lbUser.style.display="block"
    user.style.borderColor="red"
    console.log(localStorage.getItem('password'))
    checkInput()

}


var    list_account = [
        {
        username:" taict@1wt.vn",
        password:" Wintech.company"
        },
        {
        username: "quynhpnt@1wt.vn",
        password:"Wintech.company"
        },
        {
        username:"admin@1wt.vn",
        password:"Wintech.company"
        }
        ]

        for (let i=0 ;i<list_account.length;i++){
            console.log(list_account[i].username)
        }


function checkInput(){
    if(user.value==="")
    {
        return false;
       
    }else{
        lbUser.style.display="none"
    }
    if (pwd.value===""){
        return false;
        
    }else{
        lbPwd.style.display="none"
    } 

    if(user.value===localStorage.getItem('username')&&pwd.value===localStorage.getItem('password')){
        form.action="./welcome.html"
       
    }else{
        lbPwd.style.display="block"
        lbPwd.innerHTML="Tài khoản hoặc mật khẩu không chính xác"
        return false;
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

