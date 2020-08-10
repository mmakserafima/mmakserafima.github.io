// let hello = "ananas";
// if(hello== "ananas"){
//   alert("fish")
// }
// else {
//   alert("cintex error")
// }


// let name = prompt();
// if(name== "Serafima"){
//   alert("lastname=Makarova")
// }
// else if (name == "Sergey") {
//   alert("Your lastname Nikichenko")
// }
// else {
//
//   alert("This name doese not have data base.")
// }
// homeWork
/*
    создать игру которая берет данные с prompt выполняет ряд условий
    если age меньше 0 тогда выводит сообщение "not born"
    если age 0 тогда выводит сообщение your born
    если воозрост меньше чем 8 your child
    ...
    дописать ещё 4 своих возроста
    и если возрат больше чем 100 тогда выводит сообщение do not live so much

    если вы ввели не чилсо то выводиться ошибка ввода

*/
let age = prompt("How old are you?");
if(age <0){
  alert("not born")
}
else if (age == 0){
  alert("your born")
}
else if (age <8){
  alert("your child")
}
else if (age =17&&age>8){
  alert("tean")
}
else if (age =40&&age>17){
  alert("parent")
}
else if (age =65&&age>40){
  alert("old")
}
else if (age =100&&age>65){
  alert("very old")
}
else if (age >100){
  alert("do not live so much")
}
//&& is and whan two terms match
// || is eather whan two terms match or первое значение. или второе подходят. выполняеться коды
