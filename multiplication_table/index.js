var table = "";
for(var i = 1; i < 10; i++) {
	for(var j = 1; j <= i; j++) {
		table += i + "*" + j + "=" + i * j + " ";
		if(i == j) {
			table += "\n";
		}
	}
}
console.log(table);