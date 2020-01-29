var prime = [];
console.log("Prime Number from 1 to 100");
for(let index = 0; index <= 100; index++) {
	prime.push(true);
}
prime[0] = false;
prime[1] = false;
let p = 2;
while( p < 101) {
	if(prime[p]==true) {
		for(let index = 2*p; index < 101; index += p) {
			prime[index] = false;
			//console.log(i, prime[i]);
		}
	}
	p++;
}
for(let index = 0; index <= 100; index ++) {
	if ( prime[index] == true ) {
		console.log(index);
	}
}