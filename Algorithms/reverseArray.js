function reverse(array, p) {
    
    for(let i = 0; i < p / 2; i++) {
        let el = array[i];
        array[i] = array[p - 1 - i];
        array[p - 1 - i] = el;
    }
    return array;
}

let array = [1,2,3,4,5,6];

console.log(reverse(array, 4));
