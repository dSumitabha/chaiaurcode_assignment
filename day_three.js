//if-else statement to check if a number is positive negative or zero
function checkNumber(a) {
    if (a > 0) {
        console.log(a + " is positive.");
    } else if (a < 0) {
        console.log(a + " is negative.");
    } else {
        console.log(a + " is zero.");
    }
}

checkNumber(-8)     //will output -8 is negative.

//if-else statement to check if aperson is eligible to vote or not
function checkEligibility(age) {
    if (age >= 18) {
        console.log("is eligible to vote.");
    } else {
        console.log("is not eligible to vote.");
    }
}

checkEligibility(23)    //will output is eligibel to vote.

//nested if-else statement to find the largest of three
function findLargest(a, b, c) {
    if (a >= b) {
        if (a >= c) {
            console.log("The largest number is " + a);
        } else {
            console.log("The largest number is " + c);
        }
    } else {
        if (b >= c) {
            console.log("The largest number is " + b);
        } else {
            console.log("The largest number is " + c);
        }
    }
}

findLargest(10,25,19)   //will output The largest number is 25

//switch case statement to find the day name
function dayName(dayNumber) {
    let day;
    switch(dayNumber) {
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        case 7:
            day = "Sunday";
            break;
        default:
            day = "Invalid day number";
    }
    console.log(day);
}
dayName(4)