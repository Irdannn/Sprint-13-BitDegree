var greeting_time;
(function (greeting_time) {
    greeting_time["morning"] = "Good Morning";
    greeting_time["afternoon"] = "Good Afternoon";
    greeting_time["evening"] = "Godd Evening";
})(greeting_time || (greeting_time = {}));
var greeting_customer = function (time_of_day, customer) {
    var loyal = "Than's for being our Loyal Customer";
    var nonloyal = "Thank's for visiting us, would you like to join our loyal customer?";
    var greeting = "".concat(time_of_day, " ").concat(customer.name);
    greeting += customer.loyalty ? loyal : nonloyal;
    return greeting;
};
var gabriel = {
    name: "Gabriel",
    loyalty: true,
    visitedTimes: 2
};
console.log(greeting_customer(greeting_time.morning, gabriel));
