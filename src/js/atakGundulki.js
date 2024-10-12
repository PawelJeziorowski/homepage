import { alaMaKota } from "./skrypt";
import { setDate } from "date-fns";
import { subNum } from "./sub";
const lastName = "Zostałaś/eś zaatakowana przez Gundulkę!";
const age = 35;
alert("Atak Gundulki!");
console.log("Gundulka zaatakowała");
console.log(lastName);
console.log(`${lastName} i zostało ci ${age} lat życia`);
let a = document.querySelector('h1');
console.log(a);

let name ="Leon";
let age1 = 33;
function welcome (a,b){
    console.log("Witaj "+ a + " masz " + b + " lata")
}
welcome(name, age1);

const hamburger = document.querySelector(".hamburger--js");
hamburger.addEventListener('click',() =>{
const navigation = document.querySelector(".navigation--js");

navigation.classList.toggle('navigation--open');
})

const result = setDate(new Date(2014, 8, 1), 30)
console.log(alaMaKota);
  console.log(result);
  console.log (subNum);

  function countTable (a){
    let b = 0;
    for ( let element of a){
      b=b+a;
    }

  }
  const table = [1,2,3,4,5,6,7,8,9];
  console.log(countTable(table));
