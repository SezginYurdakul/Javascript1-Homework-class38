let array1=[['a','b', 3 , 5,'Beyza'],[true,false, 7, 8.5],[6, 8,'text', 2, 5,'Amer']];
let array2=[...arr];
for (let i = 0; i < array1.length; i++) {
for (let j = 0  ; j <array1[i].length; j++) {
   if(typeof(array1[i][j])==='number') {
    array2.push(array1[i][j]);}
}
}
console.log(array2);