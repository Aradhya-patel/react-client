	export function equilateralTriangle(rows: number) {
		for (let i = 1; i <= rows; i++) {
			let str = '';
			for (let j = (rows - i); j > 0; j--) {
				str += ' ';
			}
			for (let k = 0; k < i; k++) {
				str += '* ';
			}
			console.log(str);
		}
	}




