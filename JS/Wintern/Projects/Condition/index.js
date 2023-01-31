function bt1(){
    for (i=1;i<101;i++){
        if(i%3==0){
            console.log("Fizz")
        }
        else if(i%5==0){
            console.log("Buzz")
        }
        else if(i%3==0 && i%5==0){
            console.log("FizzBuzz")
        }
        else{
            console.log(i)
        }
    }
}
 

function check_fermat(a,b,c,n){
    if(Number.isInteger(a,b,c,n) && (a>0) &&b>0 && c>0 && n>0){
        if(a**n+b**n==c**n){
            console.log('Fermat sai')

        }
        else{
            console.log('Fermat đúng')
        }

    }else{console.log(" a,b,c,n không là số nguyên hoặc <0")}

}

function is_triangle(a,b,c){
    if(a+b>c && a+c>b && b+c>a ){
        console.log('Yes')
    }else{
        console.log('No')
    }
}

function bt3(){
    let a,b,c
    a=prompt("nhập cạnh thứ nhất")
    b=prompt("nhập cạnh thứ hai")
    c=prompt("nhập cạnh thứ ba")
    a= parseInt(a,10)
    b= parseInt(b,10)
    c= parseInt(c,10)
    is_triangle(a,b,c);

}