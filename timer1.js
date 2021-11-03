const input = process.argv;

for (const ele of input) {
	if (!isNaN(ele)) {
		setTimeout (() => {
			process.stdout.write('\x07');
		}, ele*1000);
	};
}

