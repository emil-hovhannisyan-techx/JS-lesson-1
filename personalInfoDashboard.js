// Constants as I am not planning to change any of those in nearest future
const firstName = "Emil";
const lastName = "Hovhannisyan";
const birthYear = 2004;

// Declared using let because each of those might be changed later
let currentYear = 2025;
let isStudent = true;
let hobbies = ["Music", "Coding", "Gaming"];
let contact = {
  email: "emil.hovhannisyan.techx@gmail.com",
  phone: "+374-93-99-21-68",
  city: "Yerevan",
};

// Printing in the console.
console.log(
  `Hi, my name is ${firstName} ${lastName}. I live in ${contact.city}.`
);
console.log(
  `I am ${currentYear - birthYear} years old and currently ${
    isStudent ? "a student" : "not a student"
  }.`
);

// Added usage of hobbies
console.log("Here is a list of my personal hobbies:", hobbies.toString());

// Coercion
const ageString = "25";
const ageNumber = 25;

console.log(ageString === ageNumber); // Strict comparing - if both the data types and values don't match - false
console.log(ageString == ageNumber); // coercion case - number is converted to string, which brings to true result

// vice-versa
console.log(ageString !== ageNumber);
console.log(ageString != ageNumber);

// What's log them? should I print it?

// if-else ing
let score = 42;
if (score > 100) {
  console.log("Try smaller number!");
} else if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else if (score >= 70) {
  console.log("C");
} else if (score >= 60) {
  console.log("D");
} else {
  console.log("F");
}

// switching
let grade = "A";
switch (grade) {
  case "A":
    console.log("Excellent work!");
    break;
  case "B":
    console.log("Good job!");
    break;
  case "C":
    console.log("Keep improving");
    break;
  case "D":
    console.log("Try harder");
    break;
  case "F":
    console.log("Needs serious efforts");
    break;
  default:
    console.log("Something went wrong with the grade variable!");
}

// Last task
const passed =
  grade === "A" || grade === "B" || grade === "C"
    ? "You passed. "
    : "You failed. ";
console.log(passed);
