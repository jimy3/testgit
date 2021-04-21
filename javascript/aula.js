// let idade = 23;
// console.log(idade);

// let name = 'dfsdfs' //string literal
// let num = 23.4 // number literal

// let people = {
//     name: 'Jimy',
//     idade: 23,
//     estanamorando:true
// };

//array
// let family = [true,89,24,'Alice',23]; //array, pode misturar tipos diferentes
// console.log(family.length);
// console.log(family);

//function
// let color = 'red';
// function setColor(cor){
//     color = cor;
// };
// setColor('green');
// console.log(color);

//type of function
// function presentName(){
//     console.log('jimy');
// }
// presentName();
// function multtwonum(val1,val2){
//     return val1 * val2;
// }
// console.log(multtwonum(2,3));

//Operatores
//+, -, *, /, **
// ++,--
// +=,-=

//'1' === 1(false)  compara type e valor!!!!!(recomenda)
//'1' == 1 (true)  compara valor so

//operador ternario
// let point = 101;
// let type = point > 100 ? 'premium' : 'normal';
// console.log(type); 

//operador logico
// &&(and) ||(or) !(not)

// Falsy - undefined, null, 0, '', false, Nan(not a number)

//if...else...
// if (condition){

// }else if(){

// }else{

// }

//switch...case....
// let pessoa = 'normal'
// switch (pessoa){
//     case 'normal':
//         console.log('usuario normal');
//         break;

//     case 'gerente':
//         console.log('usuario gerente');
//         break;

//     case 'diretor':
//         console.log('usuario diretor');
//         break;

//     default:
//         console.log('not found');
// }

// for
// for (let i =0; i<5; i++){

// }

//numero primo
// function numeroPrimo(limite){
//     for(let i = 2; i <= limite; i++){
//         let primo = true;
//         for(let j = 2; j < i; j++){
//             if(i % j === 0){
//                 primo = false;
//                 break;
//             }
//         }
//         if(primo){
//             console.log(i);
//         }
//     }
// }

// numeroPrimo(13);

// factory function
// function createCell(marcaCell,tamanhoTela,bateria){
//     return{
//         marcaCell, //marcaCell = marcaCell
//         tamanhoTela,
//         bateria,
//         ligar(){
//             console.log('celular novo')
//         }
//     }
// }
// const cell1 = createCell('Samsung',5.0, 3000);
// console.log(cell1); 

//con