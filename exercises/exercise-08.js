const difference = (num1, num2) => num2 - num1;
difference(2, 2);        // 0
difference(0, 2);        // -2

const product = (num1, num2) => num1 * num2;
product(2, 2);           // 4
product(0, 2);           // 0

const printDay = (num) => {
    switch (num) {
        case 1:
            return "Sunday";
        case 2:
            return "Monday";
        case 3:
            return "Tuesday";
        case 4:
            return "Wednesday";
        case 5:
            return "Thursday";
        case 6:
            return "Friday";
        case 7:
            return "Saturday";
        default:
            return undefined;
    }
}
