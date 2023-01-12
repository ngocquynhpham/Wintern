//ex1
let user = {
    firstName: "Tài",
    lastName: "Cao Thành",
    age: 22,
    email: "caothtai2001@gmail.com",
    hobbies: ["play video", "listen to mucsic"],
    address: {
        city: "Long An",
        district: "Thủ Thừa",
        ward: "Nhị Thành",
        street: "123443"
    },
    getBrithYear: function () {
        let currentYear = new Date().getFullYear();
        let brithYear = currentYear - this.age;
        return brithYear;

    },

    getAddress: function () {
        let address = `${this.address.street}, Xã ${this.address.ward}, Huyện ${this.address.district}, Tỉnh ${this.address.city}`
        return address;
    }

}


function inverse_object(object1) {
    let inverse = {}
    keys = Object.keys(object1);
    values = Object.values(object1);
    for (let i = 0; i < keys.length; i++) {
        inverse[values[i]] = keys[i]

    }
    return inverse;
}

function histogram(string1) {
    let tempt = {};

    let count = 0;
    for (let i = 0; i < string1.length; i++) {

        for (let j = 0; j < string1.length; j++) {

            if (string1[i] === string1[j]) {
                count++;
            }
        }
        tempt[string1[i]] = count;
        count = 0;
    }
    return tempt;
}

let vector1={
    x:1,
    y:2,
    plus: function(ob1){
        let sx=this.x+ob1.x
        let sy=this.y+ob1.y
        let sum1={
            x:sx,
            y:sy
        }
        return sum1;
    },

    minus: function(ob1){
        let sx=this.x-ob1.x
        let sy=this.y-ob1.y
        let minus1={
            x:sx,
            y:sy
        }
        return minus1;
    }
}

let vector2 ={
    x:12,
    y:-3
}

