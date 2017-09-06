//Сделать первый символ заглавным
function ucFirst(str){
      return str.charAt(0).toUpperCase() + str.slice(1);
}
//Проверьте спам
function checkSpam(str){
    return !(!~str.toLowerCase().indexOf('xxx') && 
    	!~str.toLowerCase().indexOf('viagra'));
}
//Усечение строки
function truncate(str, maxlength){
      return (str.length <= maxlength) ? str :
        str.slice(0, maxlength-1)+'…';
}
//Выделить число
function extractCurrencyValue(str){
      return parseInt(str.slice(1));
}
//Определите, пуст ли объект
function isEmpty(obj) {
    for(var key in obj){
    	return false;
    }
    return true;
}
//Умножьте численные свойства на 2
function multiplyNumeric(obj) {
    for(var key in obj){
    	if(!isNaN(parseFloat(obj[key])) && isFinite(obj[key])){ obj[key] *= 2;}
}
//Поиск в массиве
function find(arr, value){
    for(var i=0; i < arr.length; i++){
        if(arr[i] === value){ return i;}
    }
    return -1;
}
//Фильтр диапазона
function filterRange(arr, a, b){
    return arr.filter(function(item){
        return (item >= a && item <= b) ? true : false;
    });
}
//Подмассив наибольшей суммы
function getMaxSubSum(array){
	var max=0,temp=0;;
  	for(var i = 0; i < array.length; i++){
  		if(array[i] > 0 ) {
  			temp += array[i];
  		}
  		else {
  			if(max < temp) { max = temp}
  			temp = 0;
  		}
  	}
  	return (max <= temp) ? temp : max;
}