// Bài 1 VD
let space_3 = `   `;
let row1 = `a${space_3}  Math.sqrt(a)`;
let row2 = `\n---${space_3}------------`;
let this_is_result = ``;
function mySqrt(){
    console.log(row1,row2);
    for(let i = 1; i<3; i++){
        let result =  Math.sqrt(i);
        let i_parse = `${i}.0`;
        console.log(`\n${i_parse}${space_3}${result}`);
        this_is_result += `${row1}${row2}\n${i_parse}${space_3}${result}`;
    }
    return this_is_result;
}

// Bài 2