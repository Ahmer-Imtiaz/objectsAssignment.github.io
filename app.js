//--1--
var itemsArray = [

{name:"juice",price:50, quantity:3},
{name:"cookie",price:30, quantity:9},
{name:"shirt",price:880, quantity:1},
{name:"pen",price:100, quantity:2}];

var price1 =  itemsArray [0].price ;
var quantity1 = itemsArray [0].quantity ;

var price2 =  itemsArray [1].price ;
var quantity2 = itemsArray [1].quantity ;

var price3 =  itemsArray [2].price ;
var quantity3 = itemsArray [2].quantity ;

var price4 =  itemsArray [3].price ;
var quantity4 = itemsArray [3].quantity ;

 var juice = (  price1*quantity1);
var cookie =  ( price2*quantity2);
var shirt = (  price3*quantity3);
var pen = (  price4*quantity4);

console.log("Total price of Juice : "+ juice);
console.log("Total price of cookie : "+cookie);
console.log("Total price of shirt : "+shirt);
console.log("Total price of pen : "+pen);
console.log("Total price of all items : "+ juice+cookie + shirt + pen );

//------------------------


const obj = {
    name: "Abc",
    email: "a",
    password: "p",
    gender: "g",
    city: "c",
    country: "P"
};
var name1 = ("name" in obj)
if (name1 == true) { 
    console.log("This property exist")
 }else if("FIrst Name " in obj == false ){console.log("First Name exist")};
 
 //----------------


 function Person(first, last, age ) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
 
  }
  //---------------


function Obj (Name,gender,education,profession){
  this.Name = "name",
  this.gender = "gender",
  this.education = "education",
  this.profession = "profession"

};

function myfunc(){
  var username = document.getElementById("name").value;
  var address = document.getElementById("address").value;
  var  education = document.getElementById("education").value;
  var profession = document.getElementById("profession").value;

}


  

















