// challenge 2
// let mmasss = 78;
// let mheight = 1.69;

// let jmasss =92;
// let jheight = 1.95;

// let mbmi = (mmasss/mheight ** 2)
// console.log(mbmi)

// let jbmi = jmasss / jheight ** 2;
// console.log(jbmi);

// let ismarkmbihigher = mbmi >jbmi
// console.log(ismarkmbihigher)

// if(mbmi>jbmi){
// 	console.log(`Mark's BMI (${mbmi}) is higher than John's (${jbmi}).`)
// }else{
// 	console.log(`John's BMI is higher than MAr's`)
// }
/////////////////////////

// // challenge 3
// let dolAverage = (96+108+89)/3
// console.log(dolAverage)

// let kosAverage = (88+91+110)/3
// console.log(kosAverage)

// if(dolAverage>kosAverage){
// 	console.log(`Winner is Dolphins`)
// }else{
// 	console.log('Winner is Koalas')
// }

////////////////

// challenge 4

// let bill = 275
// let tip = 0.15*bill
// let total=bill+tip
// console.log(`The bill was${bill}, the tip was ${tip}total)

// challenge 5

// const calcAverage = (score1, score2, score3) => (score1+score2+score3)/3
// // console.log(calcAverage(44,23,71))

// // const dolphinAverage = calcAverage(44, 23,71)
// // console.log(dolphinAverage)
// const dolphinAverage = calcAverage(85, 54, 41);

// // const KoalasAverage = calcAverage(65, 54, 49);
// const KoalasAverage = calcAverage(23, 34, 2);

// // console.log(KoalasAverage);

// const checkWinner = (dolphinAverage, KoalasAverage)=>{
// 	if(dolphinAverage>KoalasAverage){
// 		return `Dolphins are the winners with ${dolphinAverage} vs ${KoalasAverage}`
// }else{
// 	return `Koalas are the winners with ${KoalasAverage} vs ${dolphinAverage}`
// }
// }
// console.log(checkWinner(dolphinAverage, KoalasAverage));
////////////////////////////////

// challenge 6
// let bill = 125
// let tip;
// if (bill >= 50 && bill<=300){
// 	tip=0.15*bill
// }else{
// 	tip=0.2*bill
// }
// // console.log(`tip is ${tip}`)
// let tip;
// const calcTip = bill => {
// 	 if(bill>=50 && bill <=300){
// 		 tip=0.15*bill
// 		 return tip
// 	 } else return tip=0.2*bill
// }
// console.log(calcTip(125))
// console.log(calcTip(330))

// const bills = [125, 555, 44]
// const tips = [calcTip(125), calcTip(555), calcTip(44)]
// console.log(tips)

// const total = [
// 	`${bills[0] + tips[0]}, ${bills[1] + tips[1]}, ${
// 		bills[2] + tips[2]
// 	}}`,
// ];
// console.log(total)
///////////////////

// challenge objects

// const jonas = {
// 	firstName: 'Jonas',
// 	lastName: 'Schemt',
// 	age: 2037-1991,
// 	job:'teacher',
// 	friend:['Mike', 'bill', 'doug']
// }
// // console.log(`${jonas.firstName} has ${(jonas.friend.length)} friends and ${(jonas.friend[0])} is his best friend.`)

// //challennge

// console.log(`${jonas.firstName} is a ${jonas.age}-years old teacher, aad he has `)

// challennge objects

// const mark = {
// 	fullname: 'Mark Miller',
// 	mass:78,
// 	height:1.69,

// 	calcBMI: function(){
// 		return this.bmi=(this.mass)/(this.height)**2
// 	}
// }
// console.log(mark.calcBMI())

// const john = {
// 	fullname: 'John Smith',
// 	mass: 92,
// 	height: 1.95,

// 	calcBMI: function () {
// 		return (this.bmi = this.mass / this.height ** 2);
// 	},
// };
// console.log(john.calcBMI());
// console.log(`${john.fullname}'s BMI (${john.calcBMI()}) is higher than ${mark.fullname}'s BMI ${mark.calcBMI()}!'`)

// const printForecast = (arr) => {
// 	//take array elements n print as string
// // 	const str=arr.toString()
// //  console.log(`...${str}C`)
// console.log('data')
// }
// printForecast([21,32,43])
// const maxNum = (arr)=>{
// 	const max=Math.max(...arr)
// 	// console.log(max)
// 	return max
// }
// const minNum = (arr) => {
// 	const min = Math.min(...arr);
// 	// console.log(min);
// 	return min
// };
// console.log(`...${maxNum([1,2,3])} is the max, ${minNum([1,2,3])} is the min`)

//oop
// const Person = function(firstame, birthYear){
// 	this.firstame = firstame
// 	this.birthYear = birthYear
// }
// const Syeda = new Person('Syeda', 1980)
// console.log(Syeda)

// // prototypes
// Person.prototype.calcAge = function(){
// 	console.log(2037-this.birthYear)
// }
// Syeda.calcAge()
// console.log(Syeda.__proto__.__proto__.__proto__)

// const Car = function(make, speed){
// 	this.make = make
// 	this.speed = speed
// }
// const BMW = new Car('BMW', 110)
// const Mercedes = new Car('Mercedes', 85);
// console.log(BMW)
// console.log(Mercedes);
// Car.prototype.accelerate = function(){
// 	console.log(this.speed+=10)
// }
// // console.log(BMW.accelerate())
// // console.log(Mercedes.accelerate())
// BMW.accelerate()
// BMW.accelerate()
// BMW.accelerate()
// Mercedes.accelerate()
// Mercedes.accelerate()
// Mercedes.accelerate()

// Car.prototype.brake = function () {
// 	console.log((this.speed -= 5));
// };

// BMW.brake();
// BMW.brake();
// BMW.brake();
// Mercedes.brake();
// Mercedes.brake();
// Mercedes.brake();
/////////////////////////
// const ourStorage = {
// 	desk: {
// 		drawer: 'stapler',
// 	},
// 	cabinet: {
// 		'top drawer': {
// 			folder1: 'a file',
// 			folder2: 'secrets',
// 		},
// 		'bottom drawer': 'soda',
// 	},
// };

// console.log(ourStorage.cabinet['top drawer'].folder2);
// // console.log(ourStorage.desk.drawer);
// const myStorage = {
// 	car: {
// 		inside: {
// 			'glove box': 'maps',
// 			'passenger seat': 'crumbs',
// 		},
// 		outside: {
// 			trunk: 'jack',
// 		},
// 	},
// };

// const gloveBoxContents = myStorage.car['inside']["glove box"];
// console.log(gloveBoxContents)
const myPlants = [
	{
		type: 'flowers',
		list: ['rose', 'tulip', 'dandelion'],
	},
	{
		type: 'trees',
		list: ['fir', 'pine', 'birch'],
	},
];

const secondTree = myPlants[1].list[1];
console.log(secondTree);