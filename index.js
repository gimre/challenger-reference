'use strict'

module.exports = function number(n, d) {
    var i = 0;
	var count = 0;
    var m = 10^n;
	
	for (i=1; i<m; i++){
		while (i>0) {
			if (i%10 == d) {
				count++;
				break;
			}else{
				i = i/10;
			}
		}
	}
    return count;
};
