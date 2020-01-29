
const fs = require('fs');

console.log("File Operations Started ");
fs.readFile('file.txt', "utf8", (ReadError, ReadFileData) => {
	if (ReadError) {
		console.log("Error occur in read from file",ReadError);
	} else {
		console.log("File Readed and Write Operation Started..");
		fs.writeFile('newFile.txt', ReadFileData, (WriteError) => {
			if (WriteError) { 
				console.log("Error occur in write operation", WriteError);
			}	else {
				console.log("File write and saved successfully..");
			}	
		});
	}	
});

console.log("Other Pending Works");
