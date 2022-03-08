//타입 추론 기본
var a = 0;

function getB(b=11) {
  var c = 'hi';
return b + c;
}

10 + '10' //1010 : string

//타입 추론 기본 2
// interface Dropdown<T> {
//   value: T
//   title: string;
// }
// var shoppingItem: Dropdown<string> = {
//   value: 'abc',
//   title: 'hello'
// }

//타임 추론 기본 3
interface Dropdown<T> {
  value: T
  title: string;
}
interface DetailedDropdown<K> extends Dropdown<K>{
  description: string;
  tag: KeyAlgorithm;
}
var detailesItem: DetailedDropdown<number> = {
  title: 'abc',
  description: 'ab',
  value: 'a',
  tag: 'a'
}

//Best Common Type
var arr = [1,2,true,true,'a'];