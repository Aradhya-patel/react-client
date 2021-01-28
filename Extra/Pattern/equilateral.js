// const values =  process.argv.slice(2);
  
// if( values > 1 && values <= 10){	 
// 	EquilateralTriangle(values)
// }else{
//    console.log("Please enter the value between 2 to 10");
// }

function EquilateralTriangle(rows){
	for(let i=1; i <= rows; i++){
		let str = '';
			for (let j = (rows-i); j >0; j--) {
				str += ' ';
			}
			for (let k = 0; k <i; k++) {
				str += '* ';		
			}
		console.log(str)
	}
}

export default EquilateralTriangle;
