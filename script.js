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