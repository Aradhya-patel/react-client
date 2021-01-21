const values =  process.argv.slice(2);
  
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
if( values > 1 && values <= 10){ 
 	DiamondPattern(values)
 }else{
    console.log("Please enter the value between 2 to 10");
 }
