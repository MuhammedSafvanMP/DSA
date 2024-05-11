// find object same key values 

const input1 = {a:1, b: 2, c:3, d:12, e: 10};
const input2 = {a:3, e: 10, b:4, f: 6, d:12};


function findSameKeyValue () {
    let obj = {};

    for (let x in input1) {
        if(input1[x] === input2[x])
            obj[x] = input1[x]
    }
    return obj;
}

console.log(findSameKeyValue(input1, input2));