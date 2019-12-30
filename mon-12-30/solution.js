const sevenBoom = arr => arr.toString().indexOf(7) !== -1 ? 'Boom!' : 'there is no 7 in the array';

console.log(sevenBoom([1,5,7,3,9]));
console.log(sevenBoom([86,91,23,37,19]));
console.log(sevenBoom([-4,2,86]));
console.log(sevenBoom([873,512,-193,456,9999]));
console.log(sevenBoom([0,62,1,12546,-712]));
console.log(sevenBoom([0,123,234,3456,091823]));