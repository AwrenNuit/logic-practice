const rev = (n) => {
	n = Math.abs(n) + '';
	return n.split('').reverse().join('');
}

console.log(rev(-122157));
console.log(rev(987234));
console.log(rev(15));
console.log(rev(-12));