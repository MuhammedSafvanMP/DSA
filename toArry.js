function toArray (obj) {
    console.log(obj.);
    let arr = [];
    for(let x in obj){
        arr.push(x);
        arr.push(obj[x])
    }
    console.log(arr);
}

toArray({a: 1, b: 2})