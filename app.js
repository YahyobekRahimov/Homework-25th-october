// ! 1 - masala
function copyObject(obj, method) {
    let copiedObj;
    if (method == 1) {
        copiedObj = Object.assign({}, obj);
    }
    if (method == 2) {
        copiedObj = JSON.parse(JSON.stringify(obj))
    }
    if (method == 3) {
        copiedObj = {...obj};
    }
    if (method == 4) {
        copiedObj = deepCopy(obj)
    }
    if (method == 5) {
        const _ = require('lodash');
        copiedObj = _.cloneDeep(obj)
    }
    return copiedObj;
}
function deepCopy(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }
    if (Array.isArray(obj)) {
        obj.map(deepCopy);
    }
    const copied = {};
    for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            copied[key] = deepCopy(obj[key]);
        }
    }
    return copied;
}
// const obj = {
//     name: "Carl",
//     age: 18,
//     isMale: true,
//     family: {
//         father: "David",
//         mother: "Sarah"
//     },
//     about() {
//         console.log(`My name is ${this.name}`);
//         console.log(`I am ${this.age}`);
//     }
// }
// let copiedObj = copyObject(obj, 5);
// copiedObj.family.father = "Garfield";
// console.log(copiedObj);
// console.log(obj);


// ! 2-masala 
function getEvenElements(arr) {
    let newArr = [];
    arr.forEach(function(element, index) {
        if (index % 2 == 1) {
            newArr.push(element);
        }
    });
    return newArr;
}

// let arr = [1, 2, 3, 4, 5, 6, 7, 'great', "to", "salam", 11, 12, 'cool', 14, 15, 'great', 17, 18, 19, 'nomandic', 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
// console.log(getEvenElements(arr));

// ! 3-masala 
function createArrayPowerOfThree(arr) {
    let arr2 = arr.map(function(value) {
        return value ** 3;
    })
    return arr2;
}

// let arr = [1, 2, 3, 5, 4, 5, 6, 8];
// console.log(createArrayPowerOfThree(arr));

// ! 4-masala
function FindDivisibleBy5(arr) {
    let hasDivisibleBy5 = arr.some((element) => element % 5 == 0);
    return hasDivisibleBy5;
}
// arr = [1, 2, 3, 4, 6, 7, 8];
// console.log(FindDivisibleBy5(arr));

// ! 5-masala
function findSumDivisibleThree() {
    let sum = 0;
    arr.forEach((element) => {
        if (element % 3 == 0) {
            sum += element;
        }
    })
    return sum;
}
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(findSumDivisibleThree(arr))

// ! 6-masala
function findDivisibleFive(arr) {
    let result = arr.findIndex(element => {
        return (element % 5 == 0);
    })
    return result;
}
// let arr = [1, 2, 3, 4, 5, 6,7, 8, 8, 9, 10, 11, 12];
// console.log(findDivisibleFive(arr));

// ! 7-masala
function isAvailable(arr, element) {
    return arr.includes(element);
}
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "Cool!"];
// console.log(isAvailable(arr, "Cool!"));

// ! 8-masala
function objectKeys(obj) {
    let arr = [];
    for (const key in obj) {
        arr.push(key);
    }
    return arr;
}
// let obj = {
//     citizen: "Yahyobek",
//     surname: "Rahimov",
//     SerialNumber: 12312524
// }
// console.log(objectKeys(obj))

// ! 9-masala
function findSumEvenNumbers(arr) {
    let sum = 0;
    for (const element of arr) {
        sum += element**2;
    }
    return sum;
}
// let arr = [1, 2, 3, 4, 5];
// console.log(findSumEvenNumbers(arr));

// ! 10-masala
function findSumNumbers(obj) {
    let arr = Object.values(obj);
    let sum = 0;
    for (const element of arr) {
        if (!isNaN(element)) {
            sum += Number(element);
        }
    }
    return sum;
}
let obj = {
    age: 123,
    name: "David",
    ID: 343,
    surname: '123'
}
console.log(findSumNumbers(obj))


