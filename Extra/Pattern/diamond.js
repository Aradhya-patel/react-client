 
function DiamondPattern(row){
	let count = 1;
	let rows = row;
	for(let i=1; i <= (2*rows); i++){
		let str = '';
		if(i <= rows){
			for (let j = (rows-i); j >0; j--) {
				str += ' ';
			}
			for (let k = 0; k <i; k++) {
				str += '* ';		
			}
			count += 1;
		}else{
			for (let l = 0; l <(i-rows-1); l++) {
				str += ' ';
			}
			for (let m =count-1; m >0; m--) {
				str += '* ';			
			}
			count -= 1;
		}
		console.log(str)
	}
}

// module.exports = DiamondPattern;

export default DiamondPattern;

