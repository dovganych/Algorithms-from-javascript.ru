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
//Добавить класс в строку
function addClass(obj, cls){
    if(obj.className === ''){ return obj.className += cls;}
    return (!~obj.className.split(' ').indexOf(cls)) ? obj.className += ' ' + cls : obj.className;
}
//Перевести текст вида border-left-width в borderLeftWidth
function camelize(str){
  var arr = str.split('-');
  	for(var i = 1; i < arr.length; i++){
  		arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  	}
 	return arr.join('');
}
//Функция removeClass
function removeClass(obj, cls){
	var arr = obj.className.split(' ');
	while(~arr.indexOf(cls)){
        arr.splice(arr.indexOf(cls),1).join(' ');
	}
	obj.className = arr.join(' ');
}
//Фильтрация массива "на месте"
function filterRangeInPlace(arr, a, b){
	for(var i = 0; i < arr.length;i++){
		if (arr[i] < a || arr[i] > b){ arr.splice(i--,1);}
	}
}
//Оставить уникальные элементы массива
function unique(arr) {
  	return arr.filter(function(item,i){
		return (!~arr.indexOf(item,i+1)) ? true: false;
	});
}