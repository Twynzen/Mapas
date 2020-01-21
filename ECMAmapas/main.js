/*
let array = [11,22,34,65,34]; //creamos un array
let mySet = new Set(myArray); //Set()
//algunas modificaciones
mySet.add('100');
mySet.add({a: 1, n: 2});
mySet.delete(22);
mySet.clear();
mySet.add('100');
mySet.add('200');

mySet.forEach(function(val){
  //Esto nos muestra las variables dentro del array
  console.log(val);
});

console.log(mySet);

//Así se crea un mapa
let myMap = new Map([['a1','Hello'],['b2','Goodbye']]);
myMap.set('c3','foo');
myMap.delete('a1');

//El size sirve para decir el tamaño del array
console.log(myMap.size);


let carWeakSet = new WeakSet();

let car1 = {
  make: 'Honda',
  model: 'Civic'
}

carWeakSet.add(car1);

let car2 = {
  make: 'Toyota',
  model: 'Camry'
}
carWeakSet.add(car2);

carWeakSet.delete(car1);
console.log(carWeakSet);

*/
//Así se crea un mapa
let carWeakMap = new WeakMap();

let key1 ={
  id:1
}

let key = {
  make: 'Honda',
  model: 'Civic'
}
let key2 ={
  id:2
}
let car2 = {
  make: 'Toyota',
  model: 'Camry'
}

carWeakMap.set(key1, car1);
carWeakMap.set(key2, car2);

carWeakMap.delete(key1);

console.log(carWeakSet);
