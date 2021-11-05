let mmasss = 78;
let mheight = 1.69;

let jmasss =92;
let jheight = 1.95;

let mbmi = (mmasss/mheight ** 2)
console.log(mbmi)

let jbmi = jmasss / jheight ** 2;
console.log(jbmi);

let ismarkmbihigher = mbmi >jbmi
console.log(ismarkmbihigher)

if(mbmi>jbmi){
	console.log(`Mark's BMI (${mbmi}) is higher than John's (${jbmi}).`)
}else{
	console.log(`John's BMI is higher than MAr's`)
}