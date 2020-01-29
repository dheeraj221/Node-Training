const fs = require('fs');
console.log("File Operations Started ");

let read = new Promise( (resolve,reject) => {
	fs.readFile('file.txt', "utf8", (err, data) => {
		if (err) {
			reject(err);
		} else {
			resolve(data);
		}
	});
})

read
.then((readFileData) => {
	console.log("File Readed and Write Operations Started");
	return new Promise((resolve ,reject) => {
		fs.writeFile('newFile2.txt', readFileData, (err) => {
	  	if (err) {
	  		reject(err);
	  	} else {
	  		resolve("File write and saved successfully..");
	  	}
	  }); 
	});
}, (readFileError) => {
	console.log("Error in Read Operation: ",readFileError)
})
.then((writePromiseMessage) => {
	console.log(writePromiseMessage);
}, (writeFileError) => {
	console.log("Error in Write Operation: ", writeFileError); 
})
.catch((error) => {
	console.log ("Error in File Operation", error);
});	

console.log("Other Pending Works");
