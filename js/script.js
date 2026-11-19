//Oefeing 1 hello world!
/*let text = "Hello world!";
console.log(text);*/

//Oefening 2 teksten uitlezen
/*let name = "Nihad Kasmi";
let age = 23;
let mailAddress = "nihad.kasmi@student.ap.be";
let classGroup = "1PRO_D3A";

console.log(`Naam: ${name}`);
console.log(`Leeftijd: ${age}`);
console.log(`E-mailadres: ${mailAdress}`);
console.log(`Klasgroep: ${classGroup}`);*/

//Oefening 3 getallen uitlezen

/*let birthYear = 2003;
let age = 2026 - geboorteJaar;

console.log(leeftijd);*/

//oefening 4: BMI berekenen

/*let myWeight = 51;
let myLength = 1.60;

let myBmi = myWeight / (myLength * myLength);

console.log(myBmi.toFixed(2));*/

//oefening 5: bmi-namen

/*let name = "Nihad"
let myWeight = 52;
let myLength = 1.57;

let name2 = "Noor"
let myWeight2 = 70;
let myLength2 = 1.68;

let myBmi = myWeight / (myLength * myLength);
let myBmi2 = myWeight2 / (myLength2 * myLength2);

console.log(`Mijn BMI is: ${myBmi}`);
console.log(`Noor haar BMI is: ${myBmi2}`);*/

//oefening 6: bmi-namen uitbreiding

/*let name = "Nihad"
let myWeight = 52;
let myLength = 1.57;

let name2 = "Noor"
let myWeight2 = 70;
let myLength2 = 1.68;

let myBmi = myWeight / (myLength * myLength);
let myBmi2 = myWeight2 / (myLength2 * myLength2);

console.log(`Mijn BMI is: ${myBmi.toFixed(2)}`);
console.log(`Noor haar BMI is: ${myBmi2.toFixed(2)}`);*/

//oefening 7: interest

/*let startAmount = 100000;
let interestRate = 0.02;
let years = 7;

let endAmount = startAmount * (1 + interestRate) ** years;

console.log(`Op een periode van ${years} jaar stijgt je bezit van ${startAmount} naar ${Math.round(endAmount)}.`);
console.log(`Dit met een rentevoet van ${interestRate}`);*/

//Oefening 8: uren

/*let currentHour = 14;
let hoursToAdd = 33;

let totalHours = currentHour + hoursToAdd;
let result = totalHours % 24;

console.log(`Het is nu ${currentHour} uur.`)
console.log(`Over ${hoursToAdd} is het ${result} uur.`)*/

//oefening 9: wisselgeld

/*const amountToPay = 454;
const numberOf50s = Math.ceil(amountToPay / 50);
const change = numberOf50s * 50 - amountToPay;

console.log(`Te betalen bedrag is ${amountToPay}`);
console.log(`Je hebt ${numberOf50s} briefjes 50 van  nodig.`);
console.log(`Je wisselgeld is dan ${change} euro.`);*/

//oefening 10: lotto

/*let text =
  "De winnende lottonummers van deze week:05,09,13,18,27,44. Proficiat aan alle deelnemers.";

let lottoNumbers = text.substring(text.indexOf(":") +2, text.indexOf("."));

let formattedLottoNumbers = lottoNumbers.replaceAll(",", "|");

console.log(formattedLottoNumbers);*/

//oefening 11: name-from-mail

/*let email = "sven.maes@ap.be";
let name = email.substring(0, email.indexOf("@"));
name = name.replace(".", " ");
name = name.toUpperCase();

console.log(`De eigenaar van ${email} is ${name}.`);*/

//oefening 12: short-name

/*let firstName ="sven";
let lastName ="maes";

let shortName = firstName.substring(0,1);
shortName = shortName.toUpperCase();

lastName = lastName.charAt(0).toUpperCase() + lastName.substring(1).toLowerCase();

console.log(`de naam "${firstName} ${lastName.toLowerCase()}" zal worden afgekort als " ${shortName}. ${lastName}"`)*/

//oefening 13: text-box

let text = "Dit is een test. Deze tekst kan lang worden";
let line = "-".repeat(text.length + 2);

let output = `/${line}\\
| ${text} |
\\${line}/`;

console.log(output);



