let iconSun=document.getElementById("iconSun")
let iconMoon=document.getElementById("iconMoon")
let mode=document.getElementById("mode")
let result=document.getElementById('result')
let main=document.getElementById("calculator")
let noteh1=document.getElementById("noteh1")
let notep=document.getElementById("notep1")
let noteh2=document.getElementById("noteh2")
let notep2=document.getElementById("notep2")
let error=document.getElementById('error')
function sunMode(){
    document.body.style.backgroundColor="white"
    iconSun.style.color="#7B7E86"
    iconMoon.style.color="#DEDEDE;"
    mode.style.background="#F9F9F9"
    result.style.background="#5D6063"
    main.style.background="#2A2D37"
    result.style.color="white"
    noteh1.style.color="black"
    notep1.style.color="black"
    noteh2.style.color="black"
    notep2.style.color="black"
}

function moonMode(){
    document.body.style.backgroundColor="#22252D"
    iconSun.style.color="#DEDEDE;"
    iconMoon.style.color="white"
    mode.style.background="#2A2D37"
    result.style.background="#FFFFFF"
    main.style.background="#484C54"
    result.style.color="black"
    noteh1.style.color="white"
    notep1.style.color="white"
    noteh2.style.color="white"
    notep2.style.color="white"
}

function isNumber(number){
    var char=String.fromCharCode(number.which);
    if(!(/[0-9]/.test(char))){
        number.preventDefault();
    }
}
window.onload = () => {
    
    result.onpaste = e => e.preventDefault();
 }


function calculate(){
    if(result.value===''){
        return false;
    }
    var p=result.value;
    var q='0'+p
    var z=eval(q)
    result.value='';

    if (z===Infinity){
        error.style.display="block"
        
    }else{
        result.placeholder=z
        error.style.display="none"
    }


}

function display(value){
    result.value+=value;
    
}

function clearValue(){
    result.value=""
    result.placeholder=''
}

