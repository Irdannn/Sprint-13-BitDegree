interface coffeeselection {
    ml: number;
    type: coffeetype[];
    milk?: dairytype[];
    addition?: string[];
}

enum coffeetype {
    cone = "Coffee Cone",
    chemex = "Chemex",
    plunger = "French Press",
    espresso =  'Espresso',
}

enum dairytype {
    soymilk = "Soy Milk",
    steamed = 'Steamed Milk',
    almond = "Almond",
    oatmilk = "Oat Milk",
    foamed = 'Foamed Milk',
}

const cappuccino : coffeeselection = {
    ml: 200,
    milk: [dairytype.steamed, dairytype.foamed],
    type: [coffeetype.espresso],
    addition: ["Chocolate"]
}

console.log(cappuccino)