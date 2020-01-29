new Promise (( resolve, reject) => { 
	//reject("Hiii"); 
	console.log("Inside Promise "); 
})
.then ( resolve => {
	console.log("Success");
}, reject => { 
	console.log("Failure"); 
}, () => {console.log("Kuch Niii")}
)
.catch ( error => {
	console.log("Inside Catch ");
})

/*
Nested Promise 

Read_Promise ( 
	Write_Promise ()
	then,catch
)
then,catch

Promise Chain 
Read_Promise (
)
-then (
	-return Write_Promise
	-then
)
-catch


*/