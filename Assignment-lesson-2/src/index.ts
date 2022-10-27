enum greeting_time {
    morning = "Good Morning",
    afternoon = "Good Afternoon",
    evening = "Godd Evening"
  }

interface customer {
    name : string,
    loyalty : boolean,
    visitedTimes : number,
}


const greeting_customer = (time_of_day : greeting_time, customer : customer): string => {
    const loyal = "Than's for being our Loyal Customer";
    const nonloyal = "Thank's for visiting us, would you like to join our loyal customer?"
    let greeting = `${time_of_day} ${customer.name}`
    greeting += customer.loyalty ? loyal : nonloyal
  
    return greeting
  }

  const gabriel: customer = {
    name : "Gabriel",
    loyalty : true,
    visitedTimes : 2,
}

console.log(greeting_customer(greeting_time.morning, gabriel));