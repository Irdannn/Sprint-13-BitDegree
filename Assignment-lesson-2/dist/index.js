"use strict";
var greeting_time;
(function (greeting_time) {
    greeting_time["morning"] = "Good Morning";
    greeting_time["afternoon"] = "Good Afternoon";
    greeting_time["evening"] = "Godd Evening";
})(greeting_time || (greeting_time = {}));
const greeting_customer = (time_of_day, customer) => {
    const loyal = "Than's for being our Loyal Customer";
    const nonloyal = "Thank's for visiting us, would you like to join our loyal customer?";
    let greeting = `${time_of_day} ${customer.name}`;
    greeting += customer.loyalty ? loyal : nonloyal;
    return greeting;
};
const gabriel = {
    name: "Gabriel",
    loyalty: true,
    visitedTimes: 2,
};
console.log(greeting_customer(greeting_time.morning, gabriel));
