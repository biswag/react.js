var age = 1;
var typeOfPerson = '';

console.log(       'Types of Persons');
if (age >= 0 && age <= 1)
{
  typeOfPerson = "Infant"
  console.log("0-1 is an Infant.");
}else
{
console.log("Toddler");
}
var age = 2;
var typeOfPerson = '';
if (age >=2 && age <= 4)
{
console.log("2-4 is an Toddler.");
}else
{
console.log(" Not a Toddler");
}
var age = 5;
var typeOfPerson = '';
if (age >=5 && age <= 12)
{
console.log("5-12 is an child.");
}else
{
console.log(" Not a child");
}
var age = 13;
var typeOfPerson = '';
if (age >13||age==13 && age <=19)
{
console.log("13-19 is an Tean.");
}else
{
console.log(" Not a Tean");
}
var age = 20;
var typeOfPerson = '';
if (age >20||age==20 && age !=39)
{
console.log("20-39 is an Adult.");
}else
{
console.log(" Not a Adult");
}
var age = 40;
var typeOfPerson = '';
if (age >40||age==40 && age !=59)
{
console.log("40-59 is an Middle age Adult.");
}else
{
console.log(" Not a Middle Age Adult.");
}
var age = 60;
var typeOfPerson = '';
if (age >=60 && age !=60 || age<=60 )
{
console.log("60 or more is an Senior Citizen.");
}else
{
console.log(" Not a Senior Citizen.");
}